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
    const text = await res.text();

    console.log("RAW:", text.slice(0, 200)); // preview only

    const rows = parseCSV(text);

    console.log("ROWS:", rows);

    if (!rows || rows.length === 0) {
      console.error("No rows parsed");
      return;
    }

    const headers = rows[0];

    console.log("HEADERS:", headers);

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
  const brands = [
    "All",
    "Maha168",
    "Betberry",
    "Usergacor",
    "Userslot",
    "User138",
    "Depo168",
    "Mabosway",
    "Depoxito",
    "Mabosbet",
    "Mabosplay",
    "Ads",
    "Ads MBS",
    "Ads DPN",
    "Mabos BL"
  ];

  const select = document.getElementById("brandFilter");

  select.innerHTML = brands
    .map(b => `<option value="${b}">${b}</option>`)
    .join("");
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

  tbody.innerHTML = filtered.map((d, index) => `
    <tr>
      <td>${d["Date Created"]||""}</td>
      <td>${d.Assignee||""}</td>
      <td>${d.Brand||""}</td>
      <td>${d.Category||""}</td>
      <td>${d["Domain Name"]||""}</td>
      <td>${getStatusBadge(d.Status)}</td>
      <td>${d.Hosting||""}</td>
      <td>${d.Cloudflare||""}</td>
      <td>${d.Marketing||""}</td>
      <td>
        <button class="view-btn" data-index="${index}">
          View
        </button>
      </td>
    </tr>
  `).join("");
  document.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent row click if you add it later
      const index = btn.getAttribute("data-index");
      openDetail(filtered[index]);
    });
  });
}

function openDetail(d){
  const modal = document.getElementById("detailModal");
  const content = document.getElementById("modalContent");

  content.innerHTML = `
    <div class="modal-header">
      <h2>${d["Domain Name"] || "-"}</h2>
      ${getStatusBadge(d.Status)}
    </div>

    <div class="modal-grid">

      <div class="modal-section">
        <h4>General</h4>
        <p><b>Date Created:</b> ${d["Date Created"] || "-"}</p>
        <p><b>Assignee:</b> ${d.Assignee || "-"}</p>
        <p><b>Brand:</b> ${d.Brand || "-"}</p>
        <p><b>Category:</b> ${d.Category || "-"}</p>
        <p><b>Domain Type:</b> ${d["Domain Type"] || "-"}</p>
        <p><b>Parent Domain:</b> ${d["Parent Domain"] || "-"}</p>
      </div>

      <div class="modal-section">
        <h4>Technical</h4>
        <p><b>Hosting:</b> ${d.Hosting || "-"}</p>
        <p><b>Cloudflare:</b> ${d.Cloudflare || "-"}</p>
        <p><b>Marketing:</b> ${d.Marketing || "-"}</p>
      </div>

      <div class="modal-section">
        <h4>Links</h4>
        <p><b>Domain:</b> 
          <a href="https://${d["Domain Name"]}" target="_blank">
            ${d["Domain Name"] || "-"}
          </a>
        </p>

        <p><b>Backup:</b> 
          ${
            d["Backup Link"] 
              ? `<a href="${d["Backup Link"]}" target="_blank">Open Backup</a>` 
              : "-"
          }
        </p>
      </div>

      <div class="modal-section full">
        <h4>Designer Notes</h4>
        <p>${d["Designer's Note"] || "-"}</p>
      </div>

    </div>
  `;

  modal.style.display = "flex";
}

window.onclick = function(e){
  if(e.target.classList.contains("modal")){
    e.target.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {

  console.log("DOM READY");

  ['search','brandFilter','typeFilter','categoryFilter'].forEach(id=>{
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', renderTable);
  });

  loadData();
});
