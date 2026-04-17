const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1E7iKMXB8tgSCJBHKBX-LOvIuJzKdRO2eZhuAyTWArZGnX5_8bU-reZg_a8oI7oppN4lXH-439WXI/pub?gid=0&single=true&output=csv";

// ✅ ADD THIS FUNCTION RIGHT BELOW
function parseCSV(text) {
  const rows = [];
  let row = [];
  let current = '';
  let insideQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (char === '"' && text[i + 1] === '"') {
      current += '"';
      i++;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === ',' && !insideQuotes) {
      row.push(current);
      current = '';
    } else if ((char === '\n' || char === '\r') && !insideQuotes) {
      if (current || row.length) {
        row.push(current);
        rows.push(row);
        row = [];
        current = '';
      }
    } else {
      current += char;
    }
  }

  if (current || row.length) {
    row.push(current);
    rows.push(row);
  }

  return rows;
}

let data = [];

async function loadData(){
  try {
    const res = await fetch(sheetURL);

    if (!res.ok) {
      throw new Error("Failed to fetch sheet");
    }

    const text = await res.text();
    const rows = parseCSV(text);

    console.log("ROWS:", rows);

    if (!rows || rows.length === 0) {
      console.error("CSV is empty or failed to parse");
      return;
    }
    
    const headers = rows[0];

    data = rows.slice(1)
      .filter(r => r.length > 1)
      .map(r => {
        let obj = {};
        headers.forEach((h,i)=> obj[h.trim()] = r[i] || '');
        return obj;
      });

    console.log("DATA:", data);

    populateBrands();
    renderTable();

  } catch (err) {
    console.error("LOAD ERROR:", err);
  }
}
function populateBrands(){
  const brands = [...new Set(data.map(d=>d.Brand))];
  const select = document.getElementById("brandFilter");
  select.innerHTML = '<option>All</option>' + brands.map(b=>`<option>${b}</option>`).join("");
}

function getStatusBadge(status){
  if(!status) return '';
  const s = status.toLowerCase();

  if(s.includes('active')) return '<span class="badge active">Active</span>';
  if(s.includes('parked')) return '<span class="badge parked">Parked</span>';
  if(s.includes('pending')) return '<span class="badge pending">Pending</span>';
  if(s.includes('deleted')) return '<span class="badge deleted">Deleted</span>';
  if(s.includes('301')) return '<span class="badge _301">301</span>';
  if(s.includes('revert')) return '<span class="badge revert">Revert</span>';
  if(s.includes('deletion')) return '<span class="badge delete">For Deletion</span>';

  return `<span class="badge">${status}</span>`;
}

function renderTable(){
  const tbody = document.getElementById("tableBody");
  const search = document.getElementById("search").value.toLowerCase();
  const brand = document.getElementById("brandFilter").value;
  const type = document.getElementById("typeFilter").value;
  const category = document.getElementById("categoryFilter").value;

  const filtered = data.filter(d => {
    return (
      (!search || (d["Domain Name"]||"").toLowerCase().includes(search)) &&
      (brand === "All" || d.Brand === brand) &&
      (type === "All Domains" || d["Domain Type"] === type) &&
      (category === "All" || d.Category === category)
    );
  });

  tbody.innerHTML = filtered.map(d => `
    <tr onclick='openDetail(${JSON.stringify(d)})'>
      <td>${d["Date Created"]||""}</td>
      <td>${d.Assignee||""}</td>
      <td>${d.Brand||""}</td>
      <td>${d["Domain Name"]||""}</td>
      <td>${getStatusBadge(d.Status)}</td>
      <td>${d.Hosting||""}</td>
      <td>${d.Cloudflare||""}</td>
      <td>${d.Marketing||""}</td>
    </tr>
  `).join("");
}

function openDetail(d){
  const modal = document.getElementById("detailModal");
  const content = document.getElementById("modalContent");

  content.innerHTML = `
    <h3>${d["Domain Name"]}</h3>
    ${Object.entries(d).map(([k,v]) => `<p><b>${k}</b>: ${v}</p>`).join("")}
  `;

  modal.style.display = "flex";
}

window.onclick = function(e){
  if(e.target.classList.contains("modal")){
    e.target.style.display = "none";
  }
}

['search','brandFilter','typeFilter','categoryFilter'].forEach(id=>{
  document.getElementById(id).addEventListener('input', renderTable);
});


document.addEventListener("DOMContentLoaded", () => {
  loadData();

  ['search','brandFilter','typeFilter','categoryFilter'].forEach(id=>{
    document.getElementById(id).addEventListener('input', renderTable);
  });
});
