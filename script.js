const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1E7iKMXB8tgSCJBHKBX-LOvIuJzKdRO2eZhuAyTWArZGnX5_8bU-reZg_a8oI7oppN4lXH-439WXI/pub?gid=0&single=true&output=csv";
const USERS_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1E7iKMXB8tgSCJBHKBX-LOvIuJzKdRO2eZhuAyTWArZGnX5_8bU-reZg_a8oI7oppN4lXH-439WXI/pub?gid=240254439&single=true&output=csv";

const HOSTING_MAP = {
"GD | MAH-IP-1": "https://184.168.124.184:2087",
"GD | MAH-IP-2": "https://148.66.156.54:2087/",
"GD | MAH-IP-3": "https://148.66.153.181:2087",
"NC | MAH-IP-1": "https://209.74.88.194:2087/",
"NC  | MAH-IP-2": "https://209.74.87.244:2087/",
"NC  | MAH-IP-3": "https://209.74.77.44:2087/",
"GD BBN": "https://148.66.153.27:2087",
"GD BBN 2": "https://68.178.172.42:2087",
"NC BBN 1": "https://203.161.46.208:2087/",
"NC BBN 2": "https://159.198.36.243:2087/",
"GD USL": "https://1.88.74.97.host.secureserver.net:2087/",
"NC USL": "https://159.198.64.145:2087",
"GDUSL-MS": "https://148.66.156.172:2087",
"GD MBSW 1": "https://184.168.124.165:2087/",
"GD MBSW 2": "https://68.178.172.210:2087/",
"NC MBSW": "https://209.74.72.180:2087",
"GD DPX": "https://148.66.157.172:2087",
"NC DPX": "https://209.74.80.26:2087/",
"GD USG 1": "https://148.72.244.4:2087",
"NC USG": "https://209.74.64.141:2087",
"GD DPN": "https://148.72.246.64:2087",
"Namecheap DPN": "https://159.198.65.195:2087",
"GD MBP": "https://97.74.92.141:2087",
"NC | MBP-IP-1": "https://159.198.65.196:2087",
"GD | MBN": "https://148.72.246.130:2087",
"NC | MBN": "https://209.74.64.231:2087",
"NC U138": "https://209.74.89.125:2087/",
"GD U138": "https://97.74.80.207:2087/",
"GD2 U138": "https://68.178.164.233:2087",
"GD MS U138": "https://97.74.92.52:2087",

// SG / domain-specific mappings
"SG-1 | MAH-IP-1 | maha168slot.com": "https://15-235-215-150.cprapid.com:2083/",
"SG-1 | MAH-IP-2 | maha168.com": "https://15-235-215-150.cprapid.com:2083/",
"SG-2 | MAH-IP-2 | maha168bisa.com": "https://15-235-216-60.cprapid.com:2083/",
"NC | MAH-IP-1 | situsmaha168.com": "https://situsmaha168.com/cpanel",
"NC | MAH-IP-2 | centralbottle.com": "https://209.74.87.244:2083/",
"NC | MAH-IP-3 | shoptrudeau.com": "https://shoptrudeau.com/cpanel",

"NC | BBN-IP-1 | vrtify.com": "https://203.161.46.208:2083/",
"NC | BBN-IP-2 | coopersfoodsmn.com": "https://coopersfoodsmn.com/cpanel",
"SG-1 | BBN-IP-1 | hokibetberry.com": "https://15-235-215-150.cprapid.com:2083/",
"SG-2 | BBN-IP-2 | betberryresmi.com": "https://ns5026652.ip-15-235-216.net:2083/",

"SG-2 | MBP-IP-2 | mabosplayweb.com": "https://15-235-216-60.cprapid.com:2083/",
"SG-2 | MBP-IP-3 | mabosplaygame.com": "https://15-235-216-60.cprapid.com:2083/",
"NC | MBP-IP-1 | mabosplayonline.com": "https://159.198.65.196:2083/",
"NC | MBP-IP-1 | shoplatintouch.com": "https://159.198.65.196:2083/",

"SG-1 | MBSW-IP | mabosway.info": "https://15-235-215-150.cprapid.com:2083/",
"SG-2 | MBSW-IP | maboswayyuk.com": "https://15-235-216-60.cprapid.com:2083/",
"GD | MBSW-IP-1 | rawi-magazine.com": "https://184.168.124.165:2083/",
"NC | MBSW-IP-1 | tutlance.com": "https://209.74.72.180:2083/",

"SG-1 | USL | userslot.org": "https://15-235-215-150.cprapid.com:2083/",
"NC | USL | soundselfgame.com": "https://159.198.64.145:2083/",
"NC | USL | gregsicecream.com": "https://159.198.64.145:2083/",

"GD | DPX-IP | gogodepoxito.com": "https://148.66.157.172:2083",
"GD | DPX-IP | depoxitosuper.com": "https://148.66.157.172:2083",
"NC | DPX | depoxitoamp.site": "https://209.74.80.26:2083/",
"SG-1 | DPX-IP-1 | depoxitojp.com": "https://15-235-215-150.cprapid.com:2083/",
"SG-2 | DPX-IP-2 | depoxitovvip.com": "https://15-235-216-60.cprapid.com:2083/",

"NC | MBN-IP | porterrecords.com": "https://209.74.64.231:2083/",
"SG-1 | MBN-IP-1 | mabosvippro.com": "https://15-235-215-150.cprapid.com:2083/",
"SG-1 | MBN-IP-2 | mabosbetmax.com": "https://15-235-215-150.cprapid.com:2083/",

"NC | U138 | bandaruser138.com": "https://bandaruser138.com:2083/",
"SG-1 | U138-IP-1 | sitususer138": "https://sitususer138.com:2083/",
"SG-1 | U138-IP-2 | judiuser138.com": "https://15-235-216-60.cprapid.com:2083/",
"SG-2 | U138-IP-1 | slotuser138.com": "https://15-235-216-60.cprapid.com:2083/",

"SG-2 | USG-IP-2 | serverusergacor.com": "https://ns5026652.ip-15-235-216.net:2083/",
"NC | USG | enjoykickback.com": "https://enjoykickback.com/cpanel",

"NC | Alexander": "https://premium28.web-hosting.com:2083/",
"SG-1": "https://15-235-215-150.cprapid.com:2087/",
"SG-2": "https://ns5026652.ip-15-235-216.net:2087/"
};


async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest("SHA-256", data);

  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

function getHostingLink(hosting){
  if(!hosting) return "-";

  // try exact match first
  if(HOSTING_MAP[hosting]){
    return `<a href="${HOSTING_MAP[hosting]}" target="_blank">${hosting}</a>`;
  }

  // fallback: partial match (important for messy sheet values)
  const matchKey = Object.keys(HOSTING_MAP).find(key => hosting.includes(key));

  if(matchKey){
    return `<a href="${HOSTING_MAP[matchKey]}" target="_blank">${hosting}</a>`;
  }

  return hosting; // no link found
}

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

let users = [];

async function loadUsers(){
  try {
    const res = await fetch(USERS_URL);
    const text = await res.text();

    const rows = parseCSV(text);

    if (!rows || rows.length === 0) {
      console.error("Users sheet empty");
      return;
    }

    const headers = rows[0];

    users = rows.slice(1)
      .filter(r => r.length > 1)
      .map(r => {
        let obj = {};
        headers.forEach((h,i)=> 
          obj[h.trim()] = (r[i] || '')
            .replace(/\n/g, '')
            .replace(/\r/g, '')
            .trim()
        );
        return obj;
      });

    console.log("USERS:", users);

  } catch(err){
    console.error("USER LOAD ERROR:", err);
  }
}

async function handleLogin(){
  const username = document.getElementById("loginUser").value.trim().toLowerCase();
  const password = document.getElementById("loginPass").value.trim();

  const hashed = await hashPassword(password);

  console.log("INPUT USER:", username);
  console.log("INPUT HASH:", hashed);

  users.forEach(u => {
    console.log("----");
    console.log("SHEET USER:", (u.Username || "").toLowerCase().trim());
    console.log("SHEET PASS:", (u.Password || "").trim());
  });

  const found = users.find(u => 
    (u.Username || "").toLowerCase().trim() === username &&
    (u.Password || "").trim() === hashed
  );

  console.log("MATCH:", found);

  if(found){
    localStorage.setItem("auth", "true");
    localStorage.setItem("user", username);

    document.getElementById("loginModal").style.display = "none";
    document.querySelector(".app").style.display = "flex";

    loadData();
  } else {
    document.getElementById("loginError").innerText = "Invalid login";
  }
}

document.addEventListener("DOMContentLoaded", async () => {

  await loadUsers();

  const modal = document.getElementById("loginModal");
  const app = document.querySelector(".app");

  const isAuth = localStorage.getItem("auth");

  if(isAuth){
    if(modal) modal.style.display = "none";
    if(app) app.style.display = "flex";
    loadData();
  } else {
    if(modal) modal.style.display = "flex";
    if(app) app.style.display = "none";
  }

  document.getElementById("loginBtn").addEventListener("click", handleLogin);

  // ✅ MOVE HERE
  ['search','brandFilter','typeFilter','categoryFilter'].forEach(id=>{
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', renderTable);
  });

});

function logout(){
  localStorage.removeItem("auth");
  location.reload();
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
      <td>${getHostingLink(d.Hosting)}</td>
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
      <div class="modal-header-right">
        ${getStatusBadge(d.Status)}
        <button class="close-btn" onclick="closeModal()">✕</button>
      </div>
    </div>

    <div class="modal-grid">

      <div class="modal-section">
        <h4>General</h4>
        <p><span class="label">Date Created</span>${d["Date Created"] || "-"}</p>
        <p><span class="label">Assignee</span>${d.Assignee || "-"}</p>
        <p><span class="label">Brand</span>${d.Brand || "-"}</p>
        <p><span class="label">Category</span>${d.Category || "-"}</p>
        <p><span class="label">Domain Type</span>${d["Domain Type"] || "-"}</p>
        <p><span class="label">Parent Domain</span>${d["Parent Domain"] || "-"}</p>
      </div>

      <div class="modal-section">
        <h4>Technical</h4>
        <p><span class="label">Hosting</span>${getHostingLink(d.Hosting)}</p>
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

function closeModal(){
  document.getElementById("detailModal").style.display = "none";
}
window.onclick = function(e){
  if(e.target.classList.contains("modal")){
    e.target.style.display = "none";
  }
}


