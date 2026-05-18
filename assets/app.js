const INIT = [
  { id: 1, stt: 1, so: "09", ten: "TDũng", pos: "GK", doi: "FC Mobile", rating: 2, val: 100, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 2, stt: 2, so: "07", ten: "BKhang", pos: "CB", doi: "FC Mobile", rating: 3, val: 150, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 3, stt: 3, so: "06", ten: "NPhong", pos: "CM", doi: "FC Mobile", rating: 4, val: 350, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 4, stt: 4, so: "90", ten: "AQuân", pos: "ST", doi: "FC Mobile", rating: 4, val: 150, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 5, stt: 5, so: "25", ten: "ĐQuang", pos: "ST", doi: "FC Mobile", rating: 4, val: 350, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 6, stt: 6, so: "01", ten: "NMinh", pos: "CB", doi: "FC Mobile", rating: 2, val: 100, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 7, stt: 7, so: "12", ten: "GBách", pos: "LW", doi: "FC Mobile", rating: 1, val: 50, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 8, stt: 8, so: "02", ten: "MKhang", pos: "RW", doi: "FC Mobile", rating: 2, val: 75, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 27, stt: 27, so: "", ten: "QThắng", pos: "ST", doi: "FC Mobile", rating: 4, val: 500, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 9, stt: 9, so: "06", ten: "TMinh", pos: "GK", doi: "FC Bựa Dâm", rating: 2, val: 100, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 10, stt: 10, so: "08", ten: "GHưng", pos: "ST", doi: "FC Bựa Dâm", rating: 4, val: 400, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 11, stt: 11, so: "3", ten: "QKhải", pos: "CM", doi: "FC Bựa Dâm", rating: 4, val: 350, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 12, stt: 12, so: "10", ten: "TKhang", pos: "CM", doi: "FC Bựa Dâm", rating: 3, val: 300, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 13, stt: 13, so: "23", ten: "Vanh", pos: "CB", doi: "FC Bựa Dâm", rating: 3, val: 200, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 14, stt: 14, so: "5", ten: "MHưng", pos: "CB", doi: "FC Bựa Dâm", rating: 2, val: 100, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 15, stt: 15, so: "1", ten: "Phiệp", pos: "RW", doi: "FC Bựa Dâm", rating: 3, val: 150, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 16, stt: 16, so: "9", ten: "ĐThắng", pos: "LW", doi: "FC Bựa Dâm", rating: 2, val: 150, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 17, stt: 17, so: "21", ten: "XPhúc", pos: "ST", doi: "FC Bựa Dâm", rating: 2, val: 100, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 18, stt: 18, so: "", ten: "SLong", pos: "GK", doi: "FC Sĩ Gái", rating: 4, val: 150, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 19, stt: 19, so: "", ten: "KNguyên", pos: "ST", doi: "FC Sĩ Gái", rating: 4, val: 400, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 20, stt: 20, so: "", ten: "AĐức", pos: "CM", doi: "FC Sĩ Gái", rating: 3, val: 325, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 21, stt: 21, so: "", ten: "MĐức", pos: "CB", doi: "FC Sĩ Gái", rating: 2, val: 150, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 22, stt: 22, so: "", ten: "KMinh", pos: "LW", doi: "FC Sĩ Gái", rating: 3, val: 325, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 23, stt: 23, so: "", ten: "GBảo", pos: "RW", doi: "FC Sĩ Gái", rating: 4, val: 300, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 24, stt: 24, so: "", ten: "MQuang", pos: "ST", doi: "FC Sĩ Gái", rating: 5, val: 350, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 25, stt: 25, so: "", ten: "KMinh1", pos: "CB", doi: "FC Sĩ Gái", rating: 3, val: 100, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 26, stt: 26, so: "", ten: "ĐMinh", pos: "GK", doi: "FC Sĩ Gái", rating: 1, val: 50, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
];

const ADMIN_H = ((s) => {
  let v = 0;
  for (let i = 0; i < s.length; i += 1) {
    v = ((v << 5) - v) + s.charCodeAt(i);
    v |= 0;
  }
  return v.toString(36);
})("hanhnguyen110312");

function h(s) {
  let v = 0;
  for (let i = 0; i < s.length; i += 1) {
    v = ((v << 5) - v) + s.charCodeAt(i);
    v |= 0;
  }
  return v.toString(36);
}

const BONUSES = [
  { id: "vdich", lbl: "Vô địch", tag: "🏆 Đội", type: "team_win", amt: 20, cls: "", desc: "GK/HV +35▪, còn lại +20▪", by: "superadmin" },
  { id: "vuabt", lbl: "Vua bàn thắng", tag: "+50", type: "val", amt: 50, cls: "special", desc: "Cầu thủ ghi nhiều bàn nhất +50", by: "superadmin" },
  { id: "vuakt", lbl: "Vua kiến tạo", tag: "+25", type: "val", amt: 25, cls: "special", desc: "Cầu thủ kiến tạo nhiều nhất +25", by: "superadmin" },
  { id: "cxsnhat", lbl: "CĐ xuất sắc nhất", tag: "+50", type: "val", amt: 50, cls: "special", desc: "Cầu thủ XS nhất mùa giải +50", by: "superadmin" },
  { id: "qbv", lbl: "Quả bóng vàng", tag: "+50", type: "qbv", amt: 50, cls: "special", desc: "QBV +50 (giới hạn 3 mùa/cầu thủ)", by: "superadmin" },
  { id: "puskas", lbl: "Puskas", tag: "+20", type: "val", amt: 20, cls: "special", desc: "Bàn thắng đẹp nhất +20", by: "superadmin" },
  { id: "hvtm", lbl: "HV Thủ môn", tag: "+20", type: "gk", amt: 20, cls: "gk", desc: "Thủ môn +20 mỗi lần tăng chỉ số", by: "superadmin" },
];

function safeJSON(str, fallback) { try { return JSON.parse(str); } catch { return fallback; } }

const VER = "v9";
if (localStorage.getItem("tmV") !== VER) {
  localStorage.removeItem("tmD");
  localStorage.removeItem("tmBL");
  localStorage.removeItem("tmSUGG");
  localStorage.removeItem("tmCB");
  localStorage.removeItem("tmLoans");
  localStorage.removeItem("tmTW");
  localStorage.setItem("tmV", VER);
}

let DATA = safeJSON(localStorage.getItem("tmD"), INIT);
let BL = safeJSON(localStorage.getItem("tmBL"), []);
let SUGG = safeJSON(localStorage.getItem("tmSUGG"), []);
let CUSTOM_BONUSES = safeJSON(localStorage.getItem("tmCB"), []);
let TOURNAMENTS = safeJSON(localStorage.getItem("tmT"), []);
let CLUB_FUNDS = safeJSON(localStorage.getItem("tmF"), {});
let LOANS = safeJSON(localStorage.getItem("tmLoans"), []);
let TRANSFER_WINDOW = safeJSON(localStorage.getItem("tmTW"), { open: false });
let USERS = initUsers();
let CU = null;
let cF = "all";
let cP = "all";
let cQ = "";
let cS = "val";
let eId = null;
let c1 = null;
let c2 = null;
let _vdichTeam = "";
let selectedTournamentId = null;

const TC = { "FC Mobile": "#185FA5", "FC Bựa Dâm": "#27ae60", "FC Sĩ Gái": "#8e44ad" };
const TL = { "FC Mobile": "#d6eaf8", "FC Bựa Dâm": "#d5f5e3", "FC Sĩ Gái": "#e8daef" };
const TD = { "FC Mobile": "#0c3460", "FC Bựa Dâm": "#1e8449", "FC Sĩ Gái": "#6c3483" };
const TEAMS = ["FC Mobile", "FC Bựa Dâm", "FC Sĩ Gái"];

function initUsers() {
  const us = JSON.parse(localStorage.getItem("tmU") || "[]");
  const vq = us.find((u) => u.un === "vquyetthang");
  if (!vq) us.push({ un: "vquyetthang", h: ADMIN_H, role: "superadmin", ok: true, ep: [] });
  else {
    vq.role = "superadmin";
    vq.ok = true;
  }
  localStorage.setItem("tmU", JSON.stringify(us));
  return us;
}

function fbReady() {
  return new Promise((res) => {
    if (window._fbReady) res();
    else window.addEventListener("fbReady", res, { once: true });
  });
}

async function fbSet(path, val) {
  try {
    await fbReady();
    const { db, ref, set } = window._fb;
    await set(ref(db, path), val);
  } catch (e) {
    console.warn("fbSet error", e);
  }
}

async function fbGet(path) {
  try {
    await fbReady();
    const { db, ref, get } = window._fb;
    const s = await get(ref(db, path));
    return s.exists() ? s.val() : null;
  } catch {
    return null;
  }
}

function objToUsers(obj) {
  return obj ? Object.values(obj) : [];
}

async function fbSetUser(u) {
  await fbSet(`users/${u.un}`, u);
}

async function fbGetUsers() {
  const obj = await fbGet("users");
  return objToUsers(obj);
}

function sd() {
  localStorage.setItem("tmD", JSON.stringify(DATA));
  localStorage.setItem("tmU", JSON.stringify(USERS));
  localStorage.setItem("tmBL", JSON.stringify(BL));
  localStorage.setItem("tmSUGG", JSON.stringify(SUGG));
  localStorage.setItem("tmCB", JSON.stringify(CUSTOM_BONUSES));
  localStorage.setItem("tmT", JSON.stringify(TOURNAMENTS));
  localStorage.setItem("tmF", JSON.stringify(CLUB_FUNDS));
  localStorage.setItem("tmLoans", JSON.stringify(LOANS));
  localStorage.setItem("tmTW", JSON.stringify(TRANSFER_WINDOW));
  fbSet("data/players", DATA);
  fbSet("data/bonusLog", BL.length ? BL : null);
  fbSet("data/suggestions", SUGG.length ? SUGG : null);
  fbSet("data/customBonuses", CUSTOM_BONUSES.length ? CUSTOM_BONUSES : null);
  fbSet("data/tournaments", TOURNAMENTS.length ? TOURNAMENTS : null);
  fbSet("data/clubFunds", Object.keys(CLUB_FUNDS).length ? CLUB_FUNDS : null);
  fbSet("data/loans", LOANS.length ? LOANS : null);
  fbSet("data/transferWindow", TRANSFER_WINDOW);
  renderClubFundBadge();
}

async function loadFromFirebase() {
  showLoading(true);
  try {
    const [fbP, fbU, fbBL, fbSUGG, fbCB, fbT, fbF, fbLoans, fbTW] = await Promise.all([
      fbGet("data/players"),
      fbGetUsers(),
      fbGet("data/bonusLog"),
      fbGet("data/suggestions"),
      fbGet("data/customBonuses"),
      fbGet("data/tournaments"),
      fbGet("data/clubFunds"),
      fbGet("data/loans"),
      fbGet("data/transferWindow"),
    ]);
    if (Array.isArray(fbP) && fbP.length > 0) {
      DATA = fbP;
      localStorage.setItem("tmD", JSON.stringify(DATA));
    }
    if (Array.isArray(fbU) && fbU.length > 0) {
      const vq = fbU.find((u) => u.un === "vquyetthang");
      if (vq) {
        vq.role = "superadmin";
        vq.ok = true;
      }
      USERS = fbU;
      localStorage.setItem("tmU", JSON.stringify(USERS));
      if (CU) {
        const fresh = USERS.find((u) => u.un === CU.un);
        if (fresh) {
          if (fresh.un === "vquyetthang") fresh.role = "superadmin";
          CU = fresh;
        }
      }
    }
    if (Array.isArray(fbBL)) {
      BL = fbBL;
      localStorage.setItem("tmBL", JSON.stringify(BL));
    }
    if (Array.isArray(fbSUGG)) {
      SUGG = fbSUGG;
      localStorage.setItem("tmSUGG", JSON.stringify(SUGG));
    }
    if (Array.isArray(fbCB)) {
      CUSTOM_BONUSES = fbCB;
      localStorage.setItem("tmCB", JSON.stringify(CUSTOM_BONUSES));
    }
    if (Array.isArray(fbT)) {
      TOURNAMENTS = fbT;
      localStorage.setItem("tmT", JSON.stringify(TOURNAMENTS));
    }
    if (fbF && typeof fbF === "object") {
      CLUB_FUNDS = fbF;
      localStorage.setItem("tmF", JSON.stringify(CLUB_FUNDS));
    }
    if (Array.isArray(fbLoans)) {
      LOANS = fbLoans;
      localStorage.setItem("tmLoans", JSON.stringify(LOANS));
    }
    if (fbTW && typeof fbTW === "object") {
      TRANSFER_WINDOW = fbTW;
      localStorage.setItem("tmTW", JSON.stringify(TRANSFER_WINDOW));
    }
    if (!fbP) fbSet("data/players", DATA);
    if (Array.isArray(fbU) && fbU.length === 0) USERS.forEach((u) => fbSetUser(u));
  } catch (e) {
    console.warn("Firebase load error:", e);
  }
  showLoading(false);
  const cur = document.querySelector(".nav-item.active")?.textContent?.trim() || "";
  if (cur === "Thị trường") {
    rStats();
    rTable();
    rCharts();
    renderTournaments();
  }
  if (cur === "Chuyển nhượng") renderTransferPage();
  if (cur === "Thưởng sau trận") rBonus();
  if (cur === "Giải đấu") renderTournamentPage();
  if (cur === "Admin") {
    rAdmin();
    renderSuggApprove();
  }
}

function showLoading(on) {
  let el = document.getElementById("fbLoader");
  if (!el) {
    el = document.createElement("div");
    el.id = "fbLoader";
    el.style = "position:fixed;top:58px;left:50%;transform:translateX(-50%);background:#1a5276;color:#fff;padding:5px 16px;border-radius:20px;font-size:12px;z-index:9999;display:none;box-shadow:0 2px 8px rgba(0,0,0,.3)";
    el.textContent = "Đang đồng bộ...";
    document.body.appendChild(el);
  }
  el.style.display = on ? "block" : "none";
}

function canE() { return CU && (CU.role === "superadmin" || CU.role === "admin"); }
function isSuperAdmin() { return CU && CU.role === "superadmin"; }
function isAdmin() { return CU && (CU.role === "admin" || CU.role === "superadmin"); }
function isPresident() { return CU && CU.role === "president"; }
function stars(r) { return `${"★".repeat(r)}${"☆".repeat(5 - r)}`; }
function ini(n) { return n.substring(0, 2).toUpperCase(); }
function getClubFunds(team) { return CLUB_FUNDS[team] || 0; }
function creditClub(team, amount) { if (!team) return; CLUB_FUNDS[team] = Math.max(0, (CLUB_FUNDS[team] || 0) + amount); sd(); }
function debitClub(team, amount) { if (!team) return; CLUB_FUNDS[team] = Math.max(0, (CLUB_FUNDS[team] || 0) - amount); sd(); }
function adjustClubFund(team, amount) {
  if (!isSuperAdmin()) {
    toast("Chỉ Super Admin mới có thể điều chỉnh quỹ CLB", "warn");
    return;
  }
  if (!team || !Number.isFinite(amount)) return;
  CLUB_FUNDS[team] = Math.max(0, (CLUB_FUNDS[team] || 0) + amount);
  sd();
  const action = amount >= 0 ? "cộng" : "trừ";
  toast(`Đã ${action} ${Math.abs(amount).toLocaleString()} ▪ cho ${team.replace(/^FC\s+/, "")}`, "success");
  renderTournamentPage();
}
function promptAdjustClubFund(team) {
  if (!isSuperAdmin()) return;
  const value = parseInt(prompt(`Nhập số tiền thay đổi cho ${team.replace(/^FC\s+/, "")}:`, "100"), 10);
  if (Number.isNaN(value)) {
    toast("Số tiền không hợp lệ", "warn");
    return;
  }
  adjustClubFund(team, value);
}
function renderClubFundBadge() {
  const el = document.getElementById("clubFundBadge");
  if (!el) return;
  if (!CU) {
    el.textContent = "";
    return;
  }
  if (isPresident() && CU.club) {
    el.textContent = `Quỹ ${CU.club.replace(/^FC\s+/, "")}: ${getClubFunds(CU.club).toLocaleString()} ▪`;
  } else {
    const total = TEAMS.reduce((sum, team) => sum + getClubFunds(team), 0);
    el.textContent = `Quỹ CLB tổng: ${total.toLocaleString()} ▪`;
  }
}
function itot(idx) { return (idx.toc || 0) + (idx.suc || 0) + (idx.ky || 0) + (idx.tong || 0); }
function sq(s) { return `<span style="display:inline-block;width:${s}px;height:${s}px;background:currentColor;vertical-align:middle;margin-left:1px"></span>`; }
function esc(s) { return String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;"); }

function idxB(p) {
  const ks = ["toc", "suc", "ky", "tong"];
  const ls = ["Tốc", "Sức", "Kỹ", "Tổng"];
  const pts = ks
    .filter((k) => p.idx[k] !== 0)
    .map((k) => {
      const v = p.idx[k];
      const color = v > 0 ? "#1e8449" : v < 0 ? "#922b21" : "#666";
      const label = ls[ks.indexOf(k)];
      return `<span style="font-size:10px;color:${color}">${label} ${v > 0 ? "+" : ""}${v}</span>`;
    });
  return pts.length ? pts.join(" ") : '<span style="font-size:11px;color:#aaa">—</span>';
}

function toast(msg, t = "") {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.className = `toast ${t}`;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2800);
}

function switchTab(tab) {
  document.querySelectorAll(".auth-tab").forEach((b, i) => b.classList[i === (tab === "login" ? 0 : 1) ? "add" : "remove"]("active"));
  document.getElementById("panelLogin").classList[tab === "login" ? "add" : "remove"]("show");
  document.getElementById("panelRegister").classList[tab === "register" ? "add" : "remove"]("show");
}

async function doLogin() {
  const u = document.getElementById("lUser").value.trim();
  const p = document.getElementById("lPass").value;
  const m = document.getElementById("lMsg");
  if (!u || !p) {
    m.innerHTML = '<div class="auth-msg err">Vui lòng điền đầy đủ</div>';
    return;
  }
  m.innerHTML = '<div class="auth-msg warn">Đang đăng nhập...</div>';
  try {
    const fbU = await fbGetUsers();
    if (fbU && fbU.length > 0) {
      const vq = fbU.find((x) => x.un === "vquyetthang");
      if (vq) {
        vq.role = "superadmin";
        vq.ok = true;
      }
      USERS = fbU;
      localStorage.setItem("tmU", JSON.stringify(USERS));
    } else {
      USERS = JSON.parse(localStorage.getItem("tmU") || "[]");
    }
  } catch {
    USERS = JSON.parse(localStorage.getItem("tmU") || "[]");
  }
  const usr = USERS.find((x) => x.un === u && x.h === h(p));
  if (!usr) {
    m.innerHTML = '<div class="auth-msg err">Sai tên đăng nhập hoặc mật khẩu</div>';
    return;
  }
  if (usr.un === "vquyetthang") usr.role = "superadmin";
  m.innerHTML = "";
  CU = usr;
  enterApp();
}

async function doRegister() {
  const u = document.getElementById("rUser").value.trim();
  const p = document.getElementById("rPass").value;
  const p2 = document.getElementById("rPass2").value;
  const m = document.getElementById("rMsg");
  if (!u || !p) {
    m.innerHTML = '<div class="auth-msg err">Vui lòng điền đầy đủ</div>';
    return;
  }
  if (p !== p2) {
    m.innerHTML = '<div class="auth-msg err">Mật khẩu không khớp</div>';
    return;
  }
  if (u.length < 3) {
    m.innerHTML = '<div class="auth-msg err">Username ít nhất 3 ký tự</div>';
    return;
  }
  if (p.length < 6) {
    m.innerHTML = '<div class="auth-msg err">Mật khẩu ít nhất 6 ký tự</div>';
    return;
  }
  m.innerHTML = '<div class="auth-msg warn">Đang kiểm tra...</div>';
  const fbU = await fbGetUsers();
  if (fbU && fbU.length > 0) {
    const vq = fbU.find((x) => x.un === "vquyetthang");
    if (vq) {
      vq.role = "superadmin";
      vq.ok = true;
    }
    USERS = fbU;
    localStorage.setItem("tmU", JSON.stringify(USERS));
  } else {
    USERS = JSON.parse(localStorage.getItem("tmU") || "[]");
  }
  if (USERS.find((x) => x.un === u)) {
    m.innerHTML = '<div class="auth-msg err">Username đã tồn tại</div>';
    return;
  }
  const newUser = { un: u, h: h(p), role: "guest", ok: true, ep: [] };
  USERS.push(newUser);
  localStorage.setItem("tmU", JSON.stringify(USERS));
  fbSetUser(newUser);
  m.innerHTML = '<div class="auth-msg ok">Tạo tài khoản thành công! Đang chuyển hướng...</div>';
  document.getElementById("rUser").value = "";
  document.getElementById("rPass").value = "";
  document.getElementById("rPass2").value = "";
  setTimeout(() => switchTab("login"), 1500);
}

function doLogout() {
  CU = null;
  sessionStorage.removeItem("tmSession");
  document.getElementById("authScreen").style.display = "flex";
  document.getElementById("mainApp").style.display = "none";
  document.getElementById("appCont").style.display = "none";
  document.getElementById("lUser").value = "";
  document.getElementById("lPass").value = "";
  document.getElementById("lMsg").innerHTML = "";
}

function enterApp() {
  sessionStorage.setItem("tmSession", CU.un);
  document.getElementById("authScreen").style.display = "none";
  document.getElementById("mainApp").style.display = "block";
  document.getElementById("appCont").style.display = "block";
  const b = document.getElementById("hBadge");
  const label = CU.role === "superadmin" ? "SUPER ADMIN" : CU.role === "admin" ? "Admin" : CU.role === "president" ? "Chủ tịch CLB" : "Guest";
  b.textContent = label;
  b.className = `ubadge ${CU.role === "guest" ? "guest" : "admin"}`;
  document.getElementById("hName").textContent = CU.un;
  document.getElementById("navAdmin").style.display = isAdmin() ? "block" : "none";
  const btnRA = document.getElementById("btnReqAdmin");
  if (btnRA) btnRA.style.display = CU.role === "guest" ? "inline-block" : "none";
  updateReqAdminBtn();
  showPage("Market");
  if (window._fbReady) loadFromFirebase();
  else window.addEventListener("fbReady", () => loadFromFirebase(), { once: true });
}

function showPage(p) {
  ["Market", "Transfer", "Tournament", "Bonus", "Admin"].forEach((x) => { const el = document.getElementById(`page${x}`); if (el) el.style.display = "none"; });
  const pageEl = document.getElementById(`page${p}`);
  if (pageEl) pageEl.style.display = "block";
  document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"));
  const idx = { Market: 0, Transfer: 1, Tournament: 2, Bonus: 3, Admin: 4 }[p];
  document.querySelectorAll(".nav-item")[idx]?.classList.add("active");
  if (p === "Market") {
    rStats();
    rTable();
    rCharts();
    const sp = document.getElementById("suggPlayerSection");
    if (sp) sp.style.display = CU && CU.role === "guest" ? "block" : "none";
    renderMySugg();
    renderTournaments();
  }
  if (p === "Transfer") {
    renderTransferPage();
  }
  if (p === "Bonus") rBonus();
  if (p === "Admin") {
    rAdmin();
    renderSuggApprove();
  }
  if (p === "Tournament") {
    renderTournamentPage();
  }
  renderClubFundBadge();
}

function getF() {
  const query = cQ.trim().toLowerCase();
  const filteredByTeam = cF === "all" ? [...DATA] : DATA.filter((p) => p.doi === cF);
  const d = filteredByTeam.filter((p) => {
    if (cP !== "all" && p.pos !== cP) return false;
    if (!query) return true;
    const text = `${p.ten} ${p.doi} ${p.pos} ${p.so}`.toLowerCase();
    return text.includes(query);
  });
  if (cS === "val") d.sort((a, b) => b.val - a.val);
  else if (cS === "rating") d.sort((a, b) => b.rating - a.rating);
  else if (cS === "stt") d.sort((a, b) => a.stt - b.stt);
  else if (cS === "idx") d.sort((a, b) => itot(b.idx) - itot(a.idx));
  else if (cS === "pos") d.sort((a, b) => (a.pos || "CM").localeCompare(b.pos || "CM"));
  return d.map((p, i) => ({ ...p, rank: i + 1 }));
}

function rStats() {
  const tot = DATA.reduce((s, p) => s + p.val, 0);
  let html = `<div class="stat-box"><div class="stat-lbl">Tổng giá trị</div><div class="stat-val">${tot.toLocaleString()} ${sq(11)}</div><div class="stat-sub">${DATA.length} cầu thủ</div></div>`;
  const cls = ["mob", "bua", "gai"];
  TEAMS.forEach((t, i) => {
    const ps = DATA.filter((p) => p.doi === t);
    const tv = ps.reduce((s, p) => s + p.val, 0);
    const avg = ps.length ? Math.round(tv / ps.length) : 0;
    html += `<div class="stat-box ${cls[i]}"><div class="stat-lbl">${t}</div><div class="stat-val" style="color:${TC[t]}">${tv.toLocaleString()} ${sq(10)}</div><div class="stat-sub">${ps.length} cầu thủ · TB ${avg.toLocaleString()} ${sq(8)}</div></div>`;
  });
  const statsEl = document.getElementById("statsRow"); if (statsEl) statsEl.innerHTML = html;
}

function rTable() {
  const d = getF();
  const maxV = d.length ? Math.max(...d.map((p) => p.val)) : 1;
  const dc = cF === "all" ? "#e8a317" : TC[cF];
  const labels = [];
  if (cF === "all") labels.push("Tất cả");
  else labels.push(cF.replace(/^FC\s+/, ""));
  if (cP !== "all") labels.push(cP);
  if (cQ.trim()) labels.push(`"${cQ.trim()}"`);
  const lbl = `${labels.join(" · ")} — ${d.length} cầu thủ`;
  document.getElementById("secBar").innerHTML = `<span class="sec-dot" style="background:${dc}"></span><span>${lbl}</span>`;
  document.getElementById("tbody").innerHTML = d.map((p) => {
    const tc = TC[p.doi];
    const tl = TL[p.doi];
    const tdk = TD[p.doi];
    const bw = Math.round((p.val / maxV) * 100);
    const rk = p.rank <= 3 ? `t${p.rank}` : "";
    const rd = p.rank <= 3 ? ["🥇", "🥈", "🥉"][p.rank - 1] : p.rank;
    const ce = !!CU && (CU.role === "superadmin" || (CU.role === "admin" && p.by !== "superadmin"));
    const canSell = !!CU && (CU.role === "superadmin" || CU.role === "admin" || (CU.role === "president" && CU.club === p.doi));
    const pos = p.pos || "CM";
    const dis = ce ? "" : "disabled";
    const editBtn = ce ? `<button class="edbtn" onclick="openModal(${p.id})">Sửa</button>` : '<span style="font-size:11px;color:#ddd">—</span>';
    const isPresOwner = CU?.role === "president" && CU.club === p.doi;
    const sellLbl = isPresOwner ? (p.forSale ? "Hủy rao" : "Rao bán") : "Bán";
    const sellBtn = canSell ? `<button class="bsm bsm-del" onclick="sellPlayer(${p.id})" style="margin-left:6px">${sellLbl}</button>` : "";
    return `<tr><td class="rnk ${rk}">${rd}</td><td><div class="pcell"><div class="av" style="background:${tl};color:${tdk};border-color:${tc}">${ini(p.ten)}</div><div><div class="pname">${esc(p.ten)}</div><div class="pso">${p.so ? `#${esc(p.so)}` : ""}</div></div></div></td><td><span class="tbadge" style="background:${tl};color:${tdk}">${esc(p.doi.replace("FC ", ""))}</span></td><td><span class="pos-badge pos-${pos}">${pos}</span></td><td><span class="stars">${stars(p.rating)}</span></td><td class="vcell" style="color:${tc}">${p.val.toLocaleString()} ${sq(9)}</td><td><input type="number" class="vi" id="vi-${p.id}" value="${p.val}" ${dis} onchange="qSave(${p.id},this)" oninput="this.classList.add('changed')" title="${ce ? "Nhập giá trị" : "Không có quyền"}"></td><td>${idxB(p)}</td><td><div class="bar-bg"><div class="bar-fill" style="width:${bw}%;background:${tc}"></div></div></td><td><div style="display:flex;align-items:center;gap:4px">${editBtn}${sellBtn}</div></td></tr>`;
  }).join("");
}

function qSave(id, inp) {
  const v = parseInt(inp.value, 10) || 0;
  const p = DATA.find((x) => x.id === id);
  if (!p) return;
  if (p.by === "superadmin" && CU.role === "admin") {
    inp.value = p.val;
    inp.classList.remove("changed");
    toast("Admin không thể sửa cầu thủ của Super Admin!", "warn");
    return;
  }
  p.val = v;
  sd();
  rStats();
  rCharts();
  inp.classList.remove("changed");
  toast(`${p.ten}: ${v.toLocaleString()} ${sq(9)}`, "success");
}

function setFilter(f, btn) {
  cF = f;
  document.querySelectorAll(".filter-bar .fb").forEach((b) => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  rTable();
}

function setPosFilter(p) {
  cP = p;
  const select = document.getElementById("posFilter");
  if (select) select.value = p;
  rTable();
}

function setQuery(q) {
  cQ = q;
  rTable();
}

function clearFilters() {
  cF = "all";
  cP = "all";
  cQ = "";
  document.querySelectorAll(".filter-bar .fb").forEach((b) => b.classList.remove("active"));
  document.querySelectorAll(".filter-bar .fb")[0]?.classList.add("active");
  const pos = document.getElementById("posFilter");
  if (pos) pos.value = "all";
  const q = document.getElementById("qSearch");
  if (q) q.value = "";
  rTable();
}

function setSort(s) {
  cS = s;
  ["sVal", "sRat", "sStt", "sPos"].forEach((id) => document.getElementById(id)?.classList.remove("active"));
  const mp = { val: "sVal", rating: "sRat", stt: "sStt", pos: "sPos" };
  if (mp[s]) document.getElementById(mp[s])?.classList.add("active");
  rTable();
}

function openModal(id) {
  eId = id;
  const p = DATA.find((x) => x.id === id);
  if (!p) return;
  const tc = TC[p.doi];
  const tl = TL[p.doi];
  const tdk = TD[p.doi];
  document.getElementById("mTitle").textContent = `Chỉnh sửa — ${p.ten}`;
  document.getElementById("mName").textContent = p.ten;
  document.getElementById("mMeta").textContent = `${p.doi}${p.so ? ` · #${p.so}` : ""}`;
  const av = document.getElementById("mAv");
  av.textContent = ini(p.ten);
  av.style.background = tl;
  av.style.color = tdk;
  av.style.borderColor = tc;
  document.getElementById("iVal").value = p.val;
  document.getElementById("iRat").value = p.rating;
  document.getElementById("iPos").value = p.pos || "CM";
  document.getElementById("iToc").value = p.idx.toc || "";
  document.getElementById("iSuc").value = p.idx.suc || "";
  document.getElementById("iKy").value = p.idx.ky || "";
  document.getElementById("iTong").value = p.idx.tong || "";
  document.getElementById("modalOv").classList.add("open");
}

function closeModal() {
  document.getElementById("modalOv").classList.remove("open");
  eId = null;
}

function saveModal() {
  const p = DATA.find((x) => x.id === eId);
  if (!p) return;
  if (p.by === "superadmin" && CU.role === "admin") {
    closeModal();
    toast("Admin không thể sửa cầu thủ của Super Admin!", "warn");
    return;
  }
  p.val = parseInt(document.getElementById("iVal").value, 10) || p.val;
  p.rating = parseInt(document.getElementById("iRat").value, 10) || p.rating;
  p.pos = document.getElementById("iPos").value;
  p.idx.toc = parseInt(document.getElementById("iToc").value, 10) || 0;
  p.idx.suc = parseInt(document.getElementById("iSuc").value, 10) || 0;
  p.idx.ky = parseInt(document.getElementById("iKy").value, 10) || 0;
  p.idx.tong = parseInt(document.getElementById("iTong").value, 10) || 0;
  sd();
  rStats();
  rTable();
  rCharts();
  closeModal();
  toast(`Đã cập nhật ${p.ten}`, "success");
}

function rCharts() {
  const tots = TEAMS.map((t) => DATA.filter((p) => p.doi === t).reduce((s, p) => s + p.val, 0));
  const cols = TEAMS.map((t) => TC[t]);
  document.getElementById("chartLeg").innerHTML = TEAMS.map((t, i) => `<span><b style="background:${cols[i]}"></b>${t}: ${tots[i].toLocaleString()} ▪</span>`).join("");
  if (c1) c1.destroy();
  c1 = new Chart(document.getElementById("c1"), {
    type: "bar",
    data: { labels: TEAMS.map((t) => t.replace("FC ", "")), datasets: [{ data: tots, backgroundColor: cols.map((c) => `${c}BB`), borderColor: cols, borderWidth: 1.5, borderRadius: 3 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false }, ticks: { font: { size: 11, family: "Oswald" } } }, y: { ticks: { callback: (v) => `${v.toLocaleString()} ▪`, font: { size: 10 } }, grid: { color: "rgba(0,0,0,0.05)" } } } },
  });
  const sorted = [...DATA].sort((a, b) => a.stt - b.stt);
  if (c2) c2.destroy();
  c2 = new Chart(document.getElementById("c2"), {
    type: "bar",
    data: { labels: sorted.map((p) => p.ten), datasets: [{ data: sorted.map((p) => p.val), backgroundColor: sorted.map((p) => `${TC[p.doi]}99`), borderColor: sorted.map((p) => TC[p.doi]), borderWidth: 1, borderRadius: 2 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false }, ticks: { font: { size: 10 }, maxRotation: 45, autoSkip: false } }, y: { ticks: { callback: (v) => `${v.toLocaleString()} ▪`, font: { size: 10 } }, grid: { color: "rgba(0,0,0,0.05)" } } } },
  });
}

function renderBonusCard(b, ok, opts, teamOpts) {
  if (b.type === "team_win") {
    return `<div class="bcard"><div class="bcard-ttl"><span class="btag">🏆 Đội</span>${esc(b.lbl)}</div><div class="bdesc">${esc(b.desc)}</div><div class="brow"><select class="bsel" id="bs-${b.id}">${teamOpts}</select><button class="bapply" onclick="applyB('${b.id}')" ${ok ? "" : "disabled"}>Áp dụng</button></div></div>`;
  }
  const delBtn = isAdmin() && b.by !== "superadmin" ? `<button class="bsm bsm-del" onclick="deleteCustomBonus('${b.id}')" style="margin-left:4px">✕</button>` : "";
  const addedBy = b.addedBy ? `<span style="font-size:10px;color:#aaa"> (${esc(b.addedBy)})</span>` : "";
  const scopeLabel = b.scope === "team" ? "Đội" : b.scope === "all" ? "Tất cả" : "Cá nhân";
  const selector = b.scope === "team" ? `<select class="bsel" id="bs-${b.id}">${teamOpts}</select>` : b.scope === "individual" ? `<select class="bsel" id="bs-${b.id}">${opts}</select>` : `<span style="font-size:12px;color:#666">Áp dụng cho tất cả cầu thủ</span>`;
  const excludeNote = b.exclude && b.exclude.length ? `<div style="margin-top:6px;font-size:11px;color:#666">Loại trừ: ${esc(b.exclude.join(", "))}</div>` : "";
  return `<div class="bcard"><div class="bcard-ttl"><span class="btag ${b.cls}">${esc(b.tag)} ▪</span>${esc(b.lbl)}${addedBy}</div><div class="bdesc">${esc(b.desc)}${excludeNote}</div><div class="brow">${selector}<button class="bapply" onclick="applyB('${b.id}')" ${ok ? "" : "disabled"}>Áp dụng</button>${delBtn}</div><div style="font-size:11px;color:#666;margin-top:6px">${scopeLabel}</div></div>`;
}

function rBonus() {
  const ok = canE();
  const sb = document.getElementById("suggBonusSection");
  if (sb) sb.style.display = CU && CU.role === "guest" ? "block" : "none";
  const sSel = document.getElementById("suggPlayerSel");
  if (sSel) sSel.innerHTML = DATA.map((p) => `<option value="${p.id}">${esc(p.ten)} (${esc(p.doi.replace("FC ", ""))})</option>`).join("");
  renderMySugg();
  const opts = DATA.map((p) => `<option value="${p.id}">${esc(p.ten)} (${esc(p.doi.replace("FC ", ""))} ${p.val.toLocaleString()}▪)</option>`).join("");
  const teamOpts = TEAMS.map((t) => `<option value="${t}">${t}</option>`).join("");
  const allBonuses = [...BONUSES, ...CUSTOM_BONUSES];
  document.getElementById("bonusNotice").innerHTML = ok ? "" : '<div style="background:#fef9e7;border:1px solid #f9e79f;padding:10px;border-radius:3px;font-size:12px;color:#7d6608;margin-bottom:12px">Chỉ Admin mới có thể áp dụng thưởng trực tiếp.</div>';
  const bgEl = document.getElementById("bonusGrid");
  bgEl.innerHTML = allBonuses.map((b) => renderBonusCard(b, ok, opts, teamOpts)).join("");
  if (ok) {
    bgEl.insertAdjacentHTML("beforeend", '<div class="bcard" style="border:2px dashed #ccc;background:#fafafa;display:flex;align-items:center;justify-content:center;cursor:pointer;min-height:90px" onclick="document.getElementById(\'addBonusForm\').style.display=\'grid\'"><div style="text-align:center;color:#aaa"><div style="font-size:22px">+</div><div style="font-size:12px">Thêm loại thưởng</div></div></div><div id="addBonusForm" style="display:none;grid-column:1/-1;border:1px solid var(--bd);border-radius:4px;padding:12px;background:#f9f9f9"><div style="font-weight:600;font-size:13px;margin-bottom:9px">Thêm loại thưởng mới</div><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:9px;margin-bottom:9px"><div><label class="form-label">Tên thưởng</label><input class="form-input" id="cbLbl" placeholder="vd: Hattrick"></div><div><label class="form-label">Giá trị +</label><input class="form-input" type="number" id="cbAmt" placeholder="30"></div><div><label class="form-label">Mô tả</label><input class="form-input" id="cbDesc" placeholder="Ghi chú..."></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-bottom:9px"><div><label class="form-label">Loại thưởng</label><select class="form-input" id="cbScope"><option value="individual">Cá nhân</option><option value="team">Đội</option><option value="all">Tất cả</option></select></div><div><label class="form-label">Loại trừ</label><input class="form-input" id="cbExclude" placeholder="Tên cầu thủ, đội..."></div></div><div style="display:flex;gap:8px"><button class="btn-save" style="padding:7px 14px;font-size:13px" onclick="addCustomBonus()">Thêm</button><button class="btn-cancel" style="padding:7px 14px;font-size:13px" onclick="document.getElementById(\'addBonusForm\').style.display=\'none\'">Huỷ</button></div></div>');
  }
  rBH();
}

function addCustomBonus() {
  const lbl = document.getElementById("cbLbl").value.trim();
  const amt = parseInt(document.getElementById("cbAmt").value, 10);
  const desc = document.getElementById("cbDesc").value.trim();
  const scope = document.getElementById("cbScope").value;
  const excludeText = document.getElementById("cbExclude").value.trim();
  const exclude = excludeText.split(",").map((x) => x.trim()).filter(Boolean);
  if (!lbl || !amt) {
    toast("Nhập đủ tên và giá trị", "warn");
    return;
  }
  CUSTOM_BONUSES.push({ id: `cb_${Date.now()}`, lbl, amt, tag: `${amt > 0 ? "+" + amt : amt}`, desc, cls: "special", type: "val", scope, exclude, by: CU.role, addedBy: CU.un });
  sd();
  document.getElementById("addBonusForm").style.display = "none";
  toast(`Đã thêm loại thưởng: ${lbl}`, "success");
  rBonus();
}

function deleteCustomBonus(id) {
  const b = CUSTOM_BONUSES.find((x) => x.id === id);
  if (!b) return;
  if (b.by === "superadmin" && CU.role === "admin") {
    toast("Admin không thể xoá thưởng của Super Admin!", "warn");
    return;
  }
  if (!confirm(`Xoá loại thưởng "${b.lbl}"?`)) return;
  CUSTOM_BONUSES = CUSTOM_BONUSES.filter((x) => x.id !== id);
  sd();
  toast(`Đã xóa ${b.lbl}`);
  rBonus();
}

function applyB(bid) {
  const b = [...BONUSES, ...CUSTOM_BONUSES].find((x) => x.id === bid);
  if (!b) return;
  if (b.type === "team_win") {
    openVdich(document.getElementById(`bs-${bid}`).value);
    return;
  }
  const exclude = (b.exclude || []).map((x) => x.toLowerCase().trim()).filter(Boolean);
  const isExcluded = (p) => exclude.some((e) => p.ten.toLowerCase().includes(e) || p.doi.toLowerCase().includes(e));
  if (b.scope === "team") {
    const team = document.getElementById(`bs-${bid}`).value;
    const players = DATA.filter((x) => x.doi === team && !isExcluded(x));
    if (!players.length) {
      toast("Không có cầu thủ hợp lệ để áp dụng", "warn");
      return;
    }
    players.forEach((p) => {
      p.val += b.amt;
      BL.unshift({ t: new Date().toLocaleString("vi-VN"), pl: p.ten, bn: `${b.lbl} ${b.amt > 0 ? "+" + b.amt : b.amt}`, by: CU.un });
    });
    if (BL.length > 60) BL.length = 60;
    sd();
    rBH();
    toast(`Áp dụng ${b.lbl} cho ${players.length} cầu thủ`, "success");
    rBonus();
    return;
  }
  if (b.scope === "all") {
    const players = DATA.filter((x) => !isExcluded(x));
    if (!players.length) {
      toast("Không có cầu thủ hợp lệ để áp dụng", "warn");
      return;
    }
    players.forEach((p) => {
      p.val += b.amt;
      BL.unshift({ t: new Date().toLocaleString("vi-VN"), pl: p.ten, bn: `${b.lbl} ${b.amt > 0 ? "+" + b.amt : b.amt}`, by: CU.un });
    });
    if (BL.length > 60) BL.length = 60;
    sd();
    rBH();
    toast(`Áp dụng ${b.lbl} cho tất cả cầu thủ`, "success");
    rBonus();
    return;
  }
  const pid = parseInt(document.getElementById(`bs-${bid}`).value, 10);
  const p = DATA.find((x) => x.id === pid);
  if (!p) return;
  if (b.type === "qbv") {
    if ((p.qbv || 0) >= 3) {
      toast(`${p.ten} đã nhận QBV 3 mùa!`, "warn");
      return;
    }
    p.qbv = (p.qbv || 0) + 1;
  }
  p.val += b.amt;
  BL.unshift({ t: new Date().toLocaleString("vi-VN"), pl: p.ten, bn: `${b.lbl} ${b.amt > 0 ? "+" + b.amt : b.amt}`, by: CU.un });
  if (BL.length > 60) BL.pop();
  sd();
  rBH();
  toast(`${p.ten} ${b.amt > 0 ? "+" + b.amt : b.amt} ▪ (${b.lbl})`, "success");
  rBonus();
}

function rBH() {
  const el = document.getElementById("bonusHist");
  if (!el) return;
  el.innerHTML = BL.length ? BL.slice(0, 20).map((x) => `<div class="hist-item"><span><b>${esc(x.pl)}</b> — ${esc(x.bn)}</span><span style="color:#aaa;font-size:10px">${esc(x.t)} · ${esc(x.by)}</span></div>`).join("") : '<div style="font-size:12px;color:#aaa;text-align:center;padding:10px">Chưa có lịch sử</div>';
}

function openVdich(team) {
  _vdichTeam = team;
  const members = DATA.filter((p) => p.doi === team);
  if (!members.length) {
    toast("Không tìm thấy cầu thủ!", "warn");
    return;
  }
  document.getElementById("vdichTeamName").textContent = team;
  const defPos = ["GK", "CB", "LB", "RB", "CDM"];
  document.getElementById("vdichPlayerList").innerHTML = members.map((p) => {
    const pos = p.pos || "CM";
    const isDef = defPos.includes(pos);
    return `<label class="vd-player-row${isDef ? " checked" : ""}" id="vdrow-${p.id}" onclick="toggleVdRow(this, event)"><input type="checkbox" id="vdchk-${p.id}" ${isDef ? "checked" : ""}><span class="pos-badge pos-${pos}">${pos}</span><span style="flex:1;font-weight:500">${esc(p.ten)}</span><span style="font-size:11px;color:#185FA5" id="vdbonus-${p.id}">${isDef ? "+35▪" : "+20▪"}</span></label>`;
  }).join("");
  document.getElementById("vdichModal").classList.add("open");
}

function toggleVdRow(row, event) {
  const chk = row.querySelector('input[type="checkbox"]');
  if (!chk) return;
  if (event?.target !== chk) chk.checked = !chk.checked;
  row.classList.toggle("checked", chk.checked);
  const pid = chk.id.replace("vdchk-", "");
  const bonusEl = document.getElementById(`vdbonus-${pid}`);
  if (bonusEl) bonusEl.textContent = chk.checked ? "+35▪" : "+20▪";
}

function closeVdich() {
  document.getElementById("vdichModal").classList.remove("open");
}

function confirmVdich() {
  const members = DATA.filter((p) => p.doi === _vdichTeam);
  let count = 0;
  members.forEach((p) => {
    const chk = document.getElementById(`vdchk-${p.id}`);
    const isGKHV = chk ? chk.checked : false;
    const bonus = isGKHV ? 35 : 20;
    p.val += bonus;
    count += 1;
    BL.unshift({ t: new Date().toLocaleString("vi-VN"), pl: p.ten, bn: `Vô địch ${isGKHV ? "+35(GK/HV)" : "+20"} [${p.pos || "CM"}]`, by: CU.un });
  });
  if (BL.length > 60) BL.length = 60;
  sd();
  closeVdich();
  rBH();
  toast(`${_vdichTeam} vô địch! ${count} cầu thủ được thưởng`, "success");
  rBonus();
  rStats();
}

function submitPlayerSugg() {
  const ten = document.getElementById("spTen").value.trim();
  if (!ten) {
    toast("Nhập tên cầu thủ", "warn");
    return;
  }
  const so = document.getElementById("spSo").value.trim();
  const doi = document.getElementById("spDoi").value;
  const val = parseInt(document.getElementById("spVal").value, 10) || 100;
  SUGG.push({ id: `ps_${Date.now()}`, type: "player", data: { ten, so, doi, val }, by: CU.un, status: "pending", time: new Date().toLocaleString("vi-VN") });
  sd();
  document.getElementById("spTen").value = "";
  document.getElementById("spSo").value = "";
  document.getElementById("spVal").value = "";
  toast(`Đã gửi đề xuất thêm ${ten}`, "success");
  renderMySugg();
  renderSuggApprove();
}

function submitBonusSugg() {
  const bonusId = document.getElementById("suggBonusSel").value;
  const pid = parseInt(document.getElementById("suggPlayerSel").value, 10);
  const note = document.getElementById("suggNote").value.trim();
  const p = DATA.find((x) => x.id === pid);
  const b = BONUSES.find((x) => x.id === bonusId);
  if (!p || !b) return;
  SUGG.push({ id: `bs_${Date.now()}`, type: "bonus", data: { bonusId, pid, pname: p.ten, bname: b.lbl, amt: b.amt, note }, by: CU.un, status: "pending", time: new Date().toLocaleString("vi-VN") });
  sd();
  document.getElementById("suggNote").value = "";
  toast(`Đã gửi đề xuất thưởng cho ${p.ten}`, "success");
  renderMySugg();
  renderSuggApprove();
}

function submitPurchaseRequest() {
  const pid = parseInt(document.getElementById("purchasePlayerSel").value, 10);
  const toClub = document.getElementById("purchaseBuyerClub").value;
  const offer = parseInt(document.getElementById("purchaseOffer").value, 10) || 0;
  const note = document.getElementById("purchaseNote").value.trim();
  const p = DATA.find((x) => x.id === pid);
  if (!p) {
    toast("Chọn cầu thủ để mua", "warn");
    return;
  }
  if (!offer || offer <= 0) {
    toast("Nhập giá trị đề nghị hợp lệ", "warn");
    return;
  }
  if (p.doi === toClub) {
    toast("Cầu thủ đã ở cùng đội", "warn");
    return;
  }
  const buyer = isPresident() ? CU.club : toClub;
  if (!buyer) {
    toast("Chọn CLB mua hợp lệ", "warn");
    return;
  }
  SUGG.push({ id: `pr_${Date.now()}`, type: "purchase", data: { pid, pname: p.ten, fromClub: p.doi, toClub: buyer, offer, note }, by: CU.un, status: "pending", time: new Date().toLocaleString("vi-VN") });
  sd();
  document.getElementById("purchaseNote").value = "";
  toast(`Đã gửi yêu cầu mua ${p.ten}`, "success");
  renderMySugg();
  renderPurchaseForm();
}

function requestPurchase(id) {
  if (!CU || !isPresident()) {
    toast("Chỉ Chủ tịch CLB mới có thể gửi yêu cầu mua", "warn");
    return;
  }
  const p = DATA.find((x) => x.id === id);
  if (!p) return;
  if (p.doi === CU.club) {
    toast("Cầu thủ đã thuộc CLB của bạn", "warn");
    return;
  }
  const offer = parseInt(prompt(`Nhập giá mua ${p.ten} từ ${p.doi.replace("FC ", "")}`, p.val), 10);
  if (Number.isNaN(offer) || offer <= 0) {
    toast("Giá đề nghị không hợp lệ", "warn");
    return;
  }
  const note = prompt("Ghi chú thương lượng (tùy chọn):", "") || "";
  SUGG.push({ id: `pr_${Date.now()}`, type: "purchase", data: { pid: p.id, pname: p.ten, fromClub: p.doi, toClub: CU.club, offer, note }, by: CU.un, status: "pending", time: new Date().toLocaleString("vi-VN") });
  sd();
  toast(`Đã gửi yêu cầu mua ${p.ten}`, "success");
  renderMySugg();
}

function renderPurchaseForm() {
  const adminSection = document.getElementById("adminDirectSection");
  if (!isAdmin()) { if (adminSection) adminSection.style.display = "none"; return; }
  if (adminSection) adminSection.style.display = "block";
  const pl = document.getElementById("purchasePlayerSel");
  if (pl) pl.innerHTML = DATA.filter((p) => p.doi).map((p) => `<option value="${p.id}">${esc(p.ten)} (${esc(p.doi.replace("FC ", ""))})${p.forSale ? " ★" : ""}</option>`).join("");
  const club = document.getElementById("purchaseBuyerClub");
  if (club) { club.innerHTML = TEAMS.map((t) => `<option value="${t}">${esc(t)}</option>`).join(""); club.disabled = false; }
}

// ── TRANSFER WINDOW ──────────────────────────────────────────────────────────
function isTransferWindowOpen() { return !!TRANSFER_WINDOW.open; }

function toggleTransferWindow() {
  if (!isSuperAdmin()) return;
  TRANSFER_WINDOW.open = !TRANSFER_WINDOW.open;
  sd();
  toast(TRANSFER_WINDOW.open ? "✅ Đã mở cửa sổ chuyển nhượng" : "🔒 Đã đóng cửa sổ chuyển nhượng", "success");
  renderTransferPage();
}

function renderTransferPage() {
  renderTransferWindowBanner();
  renderSaleListings();
  renderActiveLoans();
  renderPurchaseForm();
  renderMySugg();
  const ctrl = document.getElementById("transferWindowControls");
  if (ctrl) ctrl.style.display = isSuperAdmin() ? "block" : "none";
}

function renderTransferWindowBanner() {
  const el = document.getElementById("transferWindowBanner");
  if (!el) return;
  const twBody = document.getElementById("transferWindowBody");
  if (twBody) {
    twBody.innerHTML = `<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
      <div style="font-size:14px">Trạng thái: <strong style="color:${TRANSFER_WINDOW.open ? "#27ae60" : "#c0392b"}">${TRANSFER_WINDOW.open ? "✅ Đang mở" : "🔒 Đã đóng"}</strong></div>
      <button class="btn-save" onclick="toggleTransferWindow()" style="font-size:13px;padding:6px 14px">${TRANSFER_WINDOW.open ? "Đóng cửa sổ" : "Mở cửa sổ"}</button>
    </div>`;
  }
  el.innerHTML = TRANSFER_WINDOW.open
    ? `<div style="background:#eafaf1;border:1px solid #27ae60;border-radius:4px;padding:8px 14px;font-size:13px;color:#1e8449;margin-bottom:10px">✅ Cửa sổ chuyển nhượng đang mở — Có thể mua/bán/đấu giá/cho mượn</div>`
    : `<div style="background:#fdf2f2;border:1px solid #e74c3c;border-radius:4px;padding:8px 14px;font-size:13px;color:#c0392b;margin-bottom:10px">🔒 Cửa sổ chuyển nhượng đang đóng — Không thể thực hiện giao dịch mới</div>`;
}

// ── AUCTION / BIDDING ─────────────────────────────────────────────────────────
function formatTimeLeft(deadline) {
  const diff = new Date(deadline) - Date.now();
  if (diff <= 0) return "Hết hạn";
  const h = Math.floor(diff / 3600000);
  if (h < 24) return `${h}h còn lại`;
  return `${Math.floor(diff / 86400000)} ngày còn lại`;
}

function renderSaleListings() {
  const el = document.getElementById("saleListings");
  if (!el) return;
  const forSale = DATA.filter((p) => p.forSale);
  if (!forSale.length) {
    el.innerHTML = '<div style="font-size:12px;color:#aaa;padding:14px;border:1px dashed #ccc;border-radius:4px;text-align:center">Chưa có cầu thủ nào đang rao bán<br><span style="font-size:11px">Chủ tịch CLB rao bán cầu thủ từ trang Thị trường</span></div>';
    return;
  }
  el.innerHTML = forSale.map((p) => {
    const expired = p.saleDeadline && new Date(p.saleDeadline) < new Date();
    const timeLeft = p.saleDeadline ? formatTimeLeft(p.saleDeadline) : "Không giới hạn";
    const canOffer = isTransferWindowOpen() && isPresident() && CU.club !== p.doi && !expired;
    const canCancel = isAdmin() || (isPresident() && CU.club === p.doi);
    const myOffer = SUGG.find((s) => s.type === "purchase" && s.data.pid === p.id && s.data.toClub === CU?.club && s.status === "pending");
    const allOffers = SUGG.filter((s) => s.type === "purchase" && s.data.pid === p.id && s.status === "pending").sort((a, b) => b.data.offer - a.data.offer);
    const offersHtml = isAdmin() && allOffers.length
      ? `<div style="margin-top:8px;font-size:12px;background:#f0f8f0;border-radius:3px;padding:8px 10px;border:1px solid #c3e6cb"><strong>📬 Đề nghị mua (${allOffers.length}):</strong><ul style="margin:5px 0 0;padding-left:18px">${allOffers.map((o, i) => `<li style="color:${i === 0 ? "#27ae60" : "#555"};margin-bottom:3px">${esc(o.data.toClub.replace("FC ", ""))}: <strong>${o.data.offer.toLocaleString()}▪</strong><span style="font-size:10px;color:#aaa;margin-left:4px">(${esc(o.by)})</span><button class="bsm bsm-ok" onclick="approveSugg('${o.id}')" style="font-size:10px;padding:1px 6px;margin-left:6px">✅</button><button class="bsm bsm-del" onclick="rejectSugg('${o.id}')" style="font-size:10px;padding:1px 5px">❌</button></li>`).join("")}</ul></div>`
      : "";
    const offerForm = canOffer
      ? `<div style="display:flex;gap:8px;align-items:center;margin-top:10px;flex-wrap:wrap"><input type="number" id="offerAmt-${p.id}" class="form-input" style="width:130px" placeholder="Giá đề nghị ▪" min="1"><button class="btn-save" style="font-size:12px;padding:6px 14px" onclick="submitOfferForPlayer(${p.id})">Đề nghị mua</button>${myOffer ? `<span style="font-size:11px;color:#e67e22;margin-left:4px">Đề nghị hiện tại: ${myOffer.data.offer.toLocaleString()}▪ (chờ duyệt)</span>` : ""}</div>`
      : (!isTransferWindowOpen() && isPresident() && CU.club !== p.doi ? '<div style="font-size:12px;color:#c0392b;margin-top:6px">🔒 Cửa sổ chuyển nhượng đang đóng</div>' : (isPresident() && CU.club === p.doi ? '<div style="font-size:12px;color:#888;margin-top:6px;font-style:italic">Đây là cầu thủ CLB bạn đang rao bán</div>' : ""));
    const cancelBtn = canCancel ? `<button class="btn-danger" style="font-size:12px;padding:5px 10px;white-space:nowrap" onclick="cancelSale(${p.id})">Hủy rao</button>` : "";
    const tc = TC[p.doi] || "#888"; const tl = TL[p.doi] || "#eee"; const tdk = TD[p.doi] || "#333";
    return `<div style="padding:12px 14px;border:1px solid ${expired ? "#e74c3c" : "#ddd"};border-left:4px solid ${expired ? "#e74c3c" : tc};border-radius:4px;background:#fff;margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px"><div style="flex:1;min-width:0"><div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:4px"><span style="font-weight:600;font-size:14px">${esc(p.ten)}</span><span style="background:${tl};color:${tdk};padding:2px 8px;border-radius:2px;font-size:11px;font-weight:600">${esc(p.doi.replace("FC ", ""))}</span><span class="pos-badge pos-${p.pos || "CM"}">${p.pos || "CM"}</span><span class="stars" style="font-size:11px">${stars(p.rating)}</span></div><div style="font-size:12px;color:#555">Giá rao: <strong style="color:${tc}">${(p.listPrice || p.val).toLocaleString()}▪</strong> · Hạn: ${timeLeft}${expired ? ' <strong style="color:#c0392b">(Hết hạn)</strong>' : ""}</div>${offersHtml}${offerForm}</div><div style="flex-shrink:0">${cancelBtn}</div></div></div>`;
  }).join("");
}

function submitOfferForPlayer(pid) {
  if (!isPresident()) { toast("Chỉ Chủ tịch CLB mới có thể đề nghị mua", "warn"); return; }
  if (!isTransferWindowOpen()) { toast("Cửa sổ chuyển nhượng đang đóng", "warn"); return; }
  const p = DATA.find((x) => x.id === pid);
  if (!p || !p.forSale) { toast("Cầu thủ không còn rao bán", "warn"); return; }
  if (p.doi === CU.club) { toast("Không thể mua cầu thủ CLB mình", "warn"); return; }
  if (p.saleDeadline && new Date(p.saleDeadline) < new Date()) { toast("Thời hạn rao bán đã hết", "warn"); return; }
  const amtInput = document.getElementById(`offerAmt-${pid}`);
  const offer = parseInt(amtInput?.value, 10) || (p.listPrice || p.val);
  if (!offer || offer <= 0) { toast("Nhập giá đề nghị hợp lệ", "warn"); return; }
  if (getClubFunds(CU.club) < offer) { toast(`Quỹ ${CU.club.replace("FC ", "")} không đủ (${getClubFunds(CU.club).toLocaleString()}▪)`, "warn"); return; }
  SUGG = SUGG.filter((s) => !(s.type === "purchase" && s.data.pid === pid && s.data.toClub === CU.club && s.status === "pending"));
  SUGG.push({ id: `pur_${Date.now()}`, type: "purchase", data: { pid, pname: p.ten, fromClub: p.doi, toClub: CU.club, offer }, by: CU.un, status: "pending", time: new Date().toLocaleString("vi-VN") });
  sd();
  if (amtInput) amtInput.value = "";
  toast(`Đã gửi đề nghị mua ${p.ten} — ${offer.toLocaleString()}▪`, "success");
  renderSaleListings();
  renderMySugg();
}

function cancelSale(pid) {
  const p = DATA.find((x) => x.id === pid);
  if (!p) return;
  if (!isAdmin() && !(isPresident() && CU.club === p.doi)) { toast("Không có quyền hủy rao bán", "warn"); return; }
  if (!confirm(`Hủy rao bán ${p.ten}?`)) return;
  p.forSale = false;
  delete p.listPrice;
  delete p.saleDeadline;
  SUGG = SUGG.filter((s) => !((s.type === "bid" || s.type === "purchase") && s.data.pid === pid && s.status === "pending"));
  sd();
  toast(`Đã hủy rao bán ${p.ten}`, "success");
  renderSaleListings();
  rTable();
}

// ── LOAN SYSTEM ───────────────────────────────────────────────────────────────
function submitLoanRequest() {
  if (!isPresident()) { toast("Chỉ Chủ tịch CLB mới có thể yêu cầu mượn cầu thủ", "warn"); return; }
  if (!isTransferWindowOpen()) { toast("Cửa sổ chuyển nhượng đang đóng", "warn"); return; }
  const pid = parseInt(document.getElementById("loanPlayerSel").value, 10);
  const loanUntil = document.getElementById("loanUntil").value;
  const fee = parseInt(document.getElementById("loanFee").value, 10) || 0;
  const p = DATA.find((x) => x.id === pid);
  if (!p) { toast("Chọn cầu thủ hợp lệ", "warn"); return; }
  if (p.doi === CU.club) { toast("Không thể mượn cầu thủ của CLB mình", "warn"); return; }
  if (p.onLoan) { toast("Cầu thủ này đang được mượn ở nơi khác", "warn"); return; }
  if (!loanUntil) { toast("Chọn ngày trả về", "warn"); return; }
  if (fee > 0 && getClubFunds(CU.club) < fee) { toast(`Quỹ ${CU.club.replace("FC ", "")} không đủ trả phí mượn`, "warn"); return; }
  SUGG.push({ id: `ln_${Date.now()}`, type: "loan", data: { pid, pname: p.ten, fromClub: p.doi, toClub: CU.club, loanUntil, fee }, by: CU.un, status: "pending", time: new Date().toLocaleString("vi-VN") });
  sd();
  document.getElementById("loanUntil").value = "";
  document.getElementById("loanFee").value = "";
  toast(`Đã gửi yêu cầu mượn ${p.ten}`, "success");
  renderMySugg();
}

function approveLoan(suggId) {
  if (!isAdmin()) return;
  const s = SUGG.find((x) => x.id === suggId);
  if (!s || s.type !== "loan") return;
  const p = DATA.find((x) => x.id === s.data.pid);
  if (!p) { toast("Không tìm thấy cầu thủ", "warn"); return; }
  if (p.onLoan) { toast("Cầu thủ đang được mượn ở nơi khác", "warn"); return; }
  if (s.data.fee > 0 && getClubFunds(s.data.toClub) < s.data.fee) { toast(`${s.data.toClub.replace("FC ", "")} không đủ quỹ trả phí mượn`, "warn"); return; }
  if (s.data.fee > 0) {
    debitClub(s.data.toClub, s.data.fee);
    creditClub(s.data.fromClub, s.data.fee);
  }
  p.loanOriginalClub = p.doi;
  p.doi = s.data.toClub;
  p.onLoan = true;
  p.loanedTo = s.data.toClub;
  p.loanUntil = s.data.loanUntil;
  s.status = "approved";
  LOANS.push({ id: `lr_${Date.now()}`, pid: p.id, pname: p.ten, fromClub: s.data.fromClub, toClub: s.data.toClub, loanUntil: s.data.loanUntil, fee: s.data.fee, by: CU.un, time: new Date().toLocaleString("vi-VN") });
  BL.unshift({ t: new Date().toLocaleString("vi-VN"), pl: p.ten, bn: `Cho mượn ${s.data.fromClub.replace("FC ", "")} → ${s.data.toClub.replace("FC ", "")} đến ${s.data.loanUntil}`, by: CU.un });
  if (BL.length > 60) BL.length = 60;
  sd();
  toast(`Đã duyệt mượn ${p.ten}`, "success");
  renderTransferPage();
  rTable();
  rStats();
  renderSuggApprove();
}

function recallLoan(loanId) {
  const loan = LOANS.find((l) => l.id === loanId);
  if (!loan) return;
  if (!isAdmin() && !(isPresident() && CU.club === loan.fromClub)) { toast("Không có quyền triệu hồi", "warn"); return; }
  if (!confirm(`Triệu hồi ${loan.pname} về ${loan.fromClub.replace("FC ", "")}?`)) return;
  const p = DATA.find((x) => x.id === loan.pid);
  if (p && p.onLoan) {
    p.doi = p.loanOriginalClub || loan.fromClub;
    p.onLoan = false;
    delete p.loanedTo;
    delete p.loanUntil;
    delete p.loanOriginalClub;
  }
  LOANS = LOANS.filter((l) => l.id !== loanId);
  BL.unshift({ t: new Date().toLocaleString("vi-VN"), pl: loan.pname, bn: `Triệu hồi ${loan.toClub.replace("FC ", "")} → ${loan.fromClub.replace("FC ", "")}`, by: CU.un });
  if (BL.length > 60) BL.length = 60;
  sd();
  toast(`Đã triệu hồi ${loan.pname}`, "success");
  renderTransferPage();
  rTable();
  rStats();
}

function renderActiveLoans() {
  const el = document.getElementById("activeLoans");
  if (!el) return;
  const loanReqEl = document.getElementById("loanRequestSection");
  if (loanReqEl) {
    const show = isPresident() && isTransferWindowOpen();
    loanReqEl.style.display = show ? "block" : "none";
    if (show) {
      const loanSel = document.getElementById("loanPlayerSel");
      if (loanSel) loanSel.innerHTML = DATA.filter((p) => p.doi !== CU.club && !p.onLoan).map((p) => `<option value="${p.id}">${esc(p.ten)} (${esc(p.doi.replace("FC ", ""))})</option>`).join("");
    }
  }
  if (!LOANS.length) {
    el.innerHTML = '<div style="font-size:12px;color:#aaa;padding:10px;border:1px dashed #ccc;border-radius:4px">Không có hợp đồng mượn nào đang hiệu lực</div>';
    return;
  }
  el.innerHTML = LOANS.map((loan) => {
    const expired = new Date(loan.loanUntil) < new Date();
    const canRecall = isAdmin() || (isPresident() && CU.club === loan.fromClub);
    return `<div style="padding:10px;border:1px solid ${expired ? "#e74c3c" : "#ddd"};border-radius:4px;background:${expired ? "#fdf2f2" : "#fff"};margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap"><div><div style="font-weight:600">${esc(loan.pname)}: ${esc(loan.fromClub.replace("FC ", ""))} → ${esc(loan.toClub.replace("FC ", ""))}</div><div style="font-size:12px;color:#666;margin-top:2px">Trả về: ${esc(loan.loanUntil)}${expired ? ' <span style="color:#c0392b;font-weight:600">(Hết hạn — cần triệu hồi)</span>' : ""} · Phí: ${(loan.fee || 0).toLocaleString()}▪</div></div>${canRecall ? `<button class="btn-danger" style="font-size:12px;padding:5px 10px" onclick="recallLoan('${loan.id}')">Triệu hồi</button>` : ""}</div>`;
  }).join("");
}

function approveSugg(id) {
  const s = SUGG.find((x) => x.id === id);
  if (!s) return;
  if (s.type === "player") {
    const { ten, so, doi, val } = s.data;
    const newId = Math.max(...DATA.map((p) => p.id)) + 1;
    const newStt = Math.max(...DATA.map((p) => p.stt)) + 1;
    DATA.push({ id: newId, stt: newStt, so: so || "", ten, pos: "CM", doi, rating: 3, val, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: CU.role });
    s.status = "approved";
    sd();
    toast(`Đã duyệt thêm cầu thủ ${ten}`, "success");
  } else if (s.type === "bonus") {
    const p = DATA.find((x) => x.id === s.data.pid);
    if (p) {
      p.val += s.data.amt;
      BL.unshift({ t: new Date().toLocaleString("vi-VN"), pl: p.ten, bn: `${s.data.bname} +${s.data.amt} (đề xuất)`, by: CU.un });
      s.status = "approved";
      sd();
    }
    toast(`Đã duyệt thưởng cho ${s.data.pname}`, "success");
  } else if (s.type === "purchase") {
    const p = DATA.find((x) => x.id === s.data.pid);
    if (p) {
      const from = s.data.fromClub;
      const to = s.data.toClub;
      const offer = s.data.offer || p.val;
      if (p.doi === to) {
        toast(`${p.ten} đã thuộc về ${to}`, "warn");
      } else if (getClubFunds(to) < offer) {
        toast(`CLB ${to.replace("FC ", "")} không đủ quỹ`, "warn");
      } else {
        debitClub(to, offer);
        creditClub(from, offer);
        p.doi = to;
        p.forSale = false;
        delete p.listPrice;
        s.status = "approved";
        BL.unshift({ t: new Date().toLocaleString("vi-VN"), pl: p.ten, bn: `Chuyển nhượng ${from} → ${to} +${offer}▪`, by: CU.un });
        sd();
        toast(`Đã duyệt chuyển nhượng ${p.ten}`, "success");
      }
    }
  }
  sd();
  renderSuggApprove();
  rStats();
  rTable();
}

function rejectSugg(id) {
  const s = SUGG.find((x) => x.id === id);
  if (!s) return;
  s.status = "rejected";
  sd();
  renderSuggApprove();
  renderMySugg();
  toast("Đã từ chối đề xuất");
}

function renderMySugg() {
  if (!CU) return;
  const mine = SUGG.filter((s) => s.by === CU.un).slice(-5).reverse();
  const html = (arr, type) => arr.filter((s) => s.type === type).map((s) => {
    if (s.type === "player") return `<div class="sugg-item"><span>${esc(s.data.ten)} (${esc(s.data.doi.replace("FC ", ""))})</span><span class="sugg-status ss-${s.status}">${s.status === "pending" ? "Chờ" : s.status === "approved" ? "✅" : "❌"}</span></div>`;
    if (s.type === "bonus") return `<div class="sugg-item"><span>${esc(s.data.pname)} — ${esc(s.data.bname)} +${s.data.amt}▪</span><span class="sugg-status ss-${s.status}">${s.status === "pending" ? "Chờ" : s.status === "approved" ? "✅" : "❌"}</span></div>`;
    if (s.type === "purchase") return `<div class="sugg-item"><span>Yêu cầu mua ${esc(s.data.pname)} từ ${esc(s.data.fromClub.replace("FC ", ""))} về ${esc(s.data.toClub.replace("FC ", ""))} — ${esc(s.data.offer)}▪${s.data.note ? ` · ${esc(s.data.note)}` : ""}</span><span class="sugg-status ss-${s.status}">${s.status === "pending" ? "Chờ" : s.status === "approved" ? "✅" : "❌"}</span></div>`;
    if (s.type === "bid") return `<div class="sugg-item"><span>Đặt giá ${esc(s.data.pname)} — ${esc(s.data.offer)}▪ (${esc(s.data.toClub.replace("FC ",""))})</span><span class="sugg-status ss-${s.status}">${s.status === "pending" ? "Đang đấu" : s.status === "approved" ? "✅ Thắng" : "❌ Thua"}</span></div>`;
    if (s.type === "loan") return `<div class="sugg-item"><span>Mượn ${esc(s.data.pname)} từ ${esc(s.data.fromClub.replace("FC ",""))} đến ${esc(s.data.loanUntil)}</span><span class="sugg-status ss-${s.status}">${s.status === "pending" ? "Chờ" : s.status === "approved" ? "✅" : "❌"}</span></div>`;
    return "";
  }).join("") || '<div style="font-size:12px;color:#aaa;padding:6px">Chưa có đề xuất</div>';
  const pEl = document.getElementById("myPlayerSuggList");
  const bEl = document.getElementById("mySuggList");
  const rEl = document.getElementById("myPurchaseSuggList");
  if (pEl) pEl.innerHTML = html(mine, "player");
  if (bEl) bEl.innerHTML = html(mine, "bonus");
  if (rEl) rEl.innerHTML = html(mine, "purchase");
}

function renderSuggApprove() {
  if (!isAdmin()) return;
  const pending = SUGG.filter((s) => s.status === "pending");
  const mkRow = (s) => {
    let title = "";
    let approveBtn = `<button class="bsm bsm-ok" onclick="approveSugg('${s.id}')">✅ Duyệt</button>`;
    if (s.type === "player") title = `${esc(s.data.ten)} | ${esc(s.data.doi)} | ${s.data.val}▪`;
    else if (s.type === "bonus") title = `${esc(s.data.pname)} — ${esc(s.data.bname)} +${s.data.amt}▪`;
    else if (s.type === "purchase") title = `Mua ${esc(s.data.pname)} từ ${esc(s.data.fromClub.replace("FC ",""))} → ${esc(s.data.toClub.replace("FC ",""))} — ${esc(s.data.offer)}▪`;
    else if (s.type === "loan") {
      title = `Mượn ${esc(s.data.pname)} (${esc(s.data.fromClub.replace("FC ",""))}) → ${esc(s.data.toClub.replace("FC ",""))} đến ${esc(s.data.loanUntil)} · phí ${s.data.fee||0}▪`;
      approveBtn = `<button class="bsm bsm-ok" onclick="approveLoan('${s.id}')">✅ Duyệt</button>`;
    }
    return `<div class="sugg-item" style="flex-direction:column;align-items:flex-start;gap:5px"><div><b>${title}</b></div><div style="font-size:10px;color:#666">${esc(s.by)} · ${esc(s.time)}${s.data?.note ? ` · ${esc(s.data.note)}` : ""}</div><div style="display:flex;gap:5px">${approveBtn}<button class="bsm bsm-del" onclick="rejectSugg('${s.id}')">❌ Từ chối</button></div></div>`;
  };
  const empty = '<div style="font-size:12px;color:#aaa;text-align:center;padding:8px">Không có đề xuất</div>';
  const pEl = document.getElementById("suggPlayerApprove");
  const bEl = document.getElementById("suggBonusApprove");
  const rEl = document.getElementById("suggPurchaseApprove");
  const lEl = document.getElementById("suggLoanApprove");
  if (pEl) pEl.innerHTML = pending.filter((s) => s.type === "player").map(mkRow).join("") || empty;
  if (bEl) bEl.innerHTML = pending.filter((s) => s.type === "bonus").map(mkRow).join("") || empty;
  if (rEl) rEl.innerHTML = pending.filter((s) => s.type === "purchase").map(mkRow).join("") || empty;
  if (lEl) lEl.innerHTML = pending.filter((s) => s.type === "loan").map(mkRow).join("") || empty;
}

async function rAdmin() {
  try {
    const fbU = await fbGetUsers();
    if (fbU && fbU.length > 0) {
      const vq = fbU.find((x) => x.un === "vquyetthang");
      if (vq) {
        vq.role = "superadmin";
        vq.ok = true;
      }
      USERS = fbU;
      localStorage.setItem("tmU", JSON.stringify(USERS));
    }
  } catch {}
  document.getElementById("adminPageBadge").textContent = isSuperAdmin() ? "SUPER ADMIN" : "ADMIN";
  document.getElementById("memberMgmtSection").style.display = isAdmin() ? "block" : "none";
  const tournamentSection = document.getElementById("marketTournamentSection");
  if (tournamentSection) tournamentSection.style.display = isSuperAdmin() ? "block" : "none";
  renderTournaments();
  const reqAdmin = USERS.filter((u) => u.reqAdmin && u.role === "guest");
  const pendEl = document.getElementById("pendingList");
  pendEl.innerHTML = reqAdmin.length ? reqAdmin.map((u) => `<div class="urow"><span>${esc(u.un)} <span class="urole r-guest">Guest</span></span><div style="display:flex;gap:4px"><button class="bsm bsm-ok" onclick="makeAdminU('${u.un}')">Duyệt → Admin</button><button class="bsm bsm-del" onclick="rejectAdminReq('${u.un}')">Từ chối</button></div></div>`).join("") : '<div style="font-size:12px;color:#aaa;text-align:center;padding:8px">Không có yêu cầu</div>';
  const allEl = document.getElementById("allUsers");
  const allUsers = USERS;
  allEl.innerHTML = allUsers.length ? allUsers.map((u) => {
    const roleLabel = u.ok ? (u.role === "superadmin" ? "Super Admin" : u.role === "admin" ? "Admin" : u.role === "president" ? "Chủ tịch" : "Guest") : "Chờ duyệt";
    const rb = `<span class="urole r-${u.role === "guest" && !u.ok ? "guest" : u.role}">${roleLabel}</span>`;
    const isSuper = isSuperAdmin();
    const canMakeAdmin = isSuper && u.role === "guest" && u.un !== "vquyetthang";
    const canMakePresident = isSuper && u.role === "guest" && u.un !== "vquyetthang";
    const canDemote = isSuper && (u.role === "admin" || u.role === "president");
    const canDel = isSuper && u.un !== "vquyetthang";
    const reqTag = u.reqAdmin ? '<span style="font-size:10px;background:#fef9e7;color:#856404;padding:1px 5px;border-radius:2px;border:1px solid #f9e79f;margin-left:4px">Xin Admin</span>' : "";
    const clubTag = u.role === "president" && u.club ? `<span class="urole r-pres">${esc(u.club.replace("FC ", ""))}</span>` : "";
    return `<div class="urow"><div>${esc(u.un)} ${rb}${clubTag}${reqTag}</div><div style="display:flex;gap:4px;flex-wrap:wrap">${u.un === "vquyetthang" ? '<span style="font-size:11px;color:#aaa">Super Admin</span>' : `${canMakeAdmin ? `<button class="bsm" style="background:#fde8b0;color:#6d3a00;border-color:#e8a317" onclick="makeAdminU('${u.un}')">→ Admin</button>` : ""}${canMakePresident ? `<button class="bsm" style="background:#d5f5e3;color:#117a65;border-color:#27ae60" onclick="makePresident('${u.un}')">→ Chủ tịch</button>` : ""}${canDemote ? `<button class="bsm bsm-dg" onclick="demU('${u.un}')">→ Guest</button>` : ""}${canDel ? `<button class="bsm bsm-del" onclick="delU('${u.un}')">Xoá</button>` : ""}`}</div></div>`;
  }).join("") : '<div style="font-size:12px;color:#aaa;text-align:center;padding:8px">Chưa có tài khoản nào</div>';
  document.getElementById("delSel").innerHTML = DATA.map((p) => `<option value="${p.id}">${esc(p.ten)} (${esc(p.doi.replace("FC ", ""))})</option>`).join("");
}

function makeAdminU(un) {
  USERS = JSON.parse(localStorage.getItem("tmU") || "[]");
  const u = USERS.find((x) => x.un === un);
  if (u) {
    u.role = "admin";
    u.reqAdmin = false;
    localStorage.setItem("tmU", JSON.stringify(USERS));
    fbSetUser(u);
    toast(`${un} → Admin`, "success");
    rAdmin();
  }
}

function makePresident(un) {
  USERS = JSON.parse(localStorage.getItem("tmU") || "[]");
  const u = USERS.find((x) => x.un === un);
  if (u) {
    const team = prompt(`Chọn CLB cho Chủ tịch ${un} (${TEAMS.join(', ')})`);
    if (!team) {
      toast("Hủy chuyển thành Chủ tịch", "warn");
      return;
    }
    const chosen = TEAMS.find((t) => t.toLowerCase() === team.trim().toLowerCase());
    if (!chosen) {
      toast("Chọn CLB hợp lệ", "warn");
      return;
    }
    const existing = USERS.find((x) => x.role === "president" && x.club === chosen);
    if (existing) {
      toast(`Đã có Chủ tịch cho ${chosen}`, "warn");
      return;
    }
    u.role = "president";
    u.club = chosen;
    u.reqAdmin = false;
    localStorage.setItem("tmU", JSON.stringify(USERS));
    fbSetUser(u);
    toast(`${un} → Chủ tịch ${chosen}`, "success");
    rAdmin();
  }
}

function rejectAdminReq(un) {
  USERS = JSON.parse(localStorage.getItem("tmU") || "[]");
  const u = USERS.find((x) => x.un === un);
  if (u) {
    u.reqAdmin = false;
    localStorage.setItem("tmU", JSON.stringify(USERS));
    fbSetUser(u);
    toast(`Đã từ chối ${un}`);
    rAdmin();
  }
}

function demU(un) {
  USERS = JSON.parse(localStorage.getItem("tmU") || "[]");
  const u = USERS.find((x) => x.un === un);
  if (u) {
    u.role = "guest";
    delete u.club;
    localStorage.setItem("tmU", JSON.stringify(USERS));
    fbSetUser(u);
    toast(`${un} → Guest`);
    rAdmin();
  }
}

function delU(un) {
  if (!confirm(`Xoá tài khoản "${un}"?`)) return;
  USERS = JSON.parse(localStorage.getItem("tmU") || "[]");
  USERS = USERS.filter((x) => x.un !== un);
  localStorage.setItem("tmU", JSON.stringify(USERS));
  fbSet(`users/${un}`, null);
  toast(`Đã xoá ${un}`);
  rAdmin();
}

function addPlayer() {
  const ten = document.getElementById("nTen").value.trim();
  if (!ten) {
    toast("Nhập tên cầu thủ", "warn");
    return;
  }
  const so = document.getElementById("nSo").value.trim() || "";
  const doi = document.getElementById("nDoi").value;
  const val = parseInt(document.getElementById("nVal").value, 10) || 100;
  const pos = document.getElementById("nPos").value || "CM";
  const rating = parseInt(document.getElementById("nRat").value, 10) || 3;
  const newId = Math.max(...DATA.map((p) => p.id)) + 1;
  const newStt = Math.max(...DATA.map((p) => p.stt)) + 1;
  DATA.push({ id: newId, stt: newStt, so, ten, pos, doi, rating, val, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: CU.role });
  sd();
  document.getElementById("nTen").value = "";
  document.getElementById("nSo").value = "";
  document.getElementById("nVal").value = "";
  toast(`Đã thêm ${ten}`, "success");
  renderTournaments();
  rAdmin();
}

function renderTournaments() {
  const listEl = document.getElementById("tournamentList");
  const marketListEl = document.getElementById("marketTournamentList");
  const controlsEl = document.getElementById("tournamentControls");
  if (controlsEl) {
    controlsEl.style.display = isAdmin() ? "block" : "none";
  }
  const html = TOURNAMENTS.length ? TOURNAMENTS.map((t) => {
    const dates = `${t.start || 'N/A'} → ${t.end || 'N/A'}`;
    const canDelete = isAdmin();
    const deleteBtn = canDelete ? `<button class="bsm bsm-del" onclick="deleteTournament('${t.id}')">Xoá</button>` : "";
    return `<div class="sugg-item" style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:8px;padding:10px;border:1px solid #ddd;border-radius:4px;background:#fff"><div><div style="font-weight:600">${esc(t.name)} ${t.season ? `(${esc(t.season)})` : ''}</div><div style="font-size:12px;color:#666;margin-top:4px">${esc(dates)} · Tạo bởi ${esc(t.createdBy)}</div></div>${deleteBtn}</div>`;
  }).join("") : '<div style="font-size:12px;color:#aaa;padding:10px;border:1px dashed #ccc;border-radius:4px">Chưa có giải đấu</div>';
  if (listEl) listEl.innerHTML = html;
  if (marketListEl) marketListEl.innerHTML = html;
}

function selectTournament(id) {
  selectedTournamentId = id;
  renderTournamentPage();
}

function renderTournamentPage() {
  const selEl = document.getElementById("selTournament");
  const summaryEl = document.getElementById("tournamentSummary");
  const scheduleEl = document.getElementById("tournamentSchedule");
  const standingsEl = document.getElementById("tournamentStandings");
  const fundEl = document.getElementById("clubFunds");
  const addMatchForm = document.getElementById("tournamentMatchForm");
  const createBtn = document.getElementById("addTournamentBtn");
  const formEl = document.getElementById("tournamentForm");
  if (createBtn) createBtn.style.display = isAdmin() ? "inline-block" : "none";
  if (formEl) formEl.style.display = "none";
  if (addMatchForm) addMatchForm.style.display = isAdmin() ? "block" : "none";
  if (selEl) {
    selEl.innerHTML = TOURNAMENTS.map((t) => `<option value="${t.id}">${esc(t.name)} ${t.season ? `(${esc(t.season)})` : ""}</option>`).join("");
    if (!selectedTournamentId && TOURNAMENTS.length) selectedTournamentId = TOURNAMENTS[0].id;
    selEl.value = selectedTournamentId || "";
  }
  if (addMatchForm) {
    addMatchForm.querySelectorAll("select").forEach((s) => {
      if (s.id === "matchHome" || s.id === "matchAway") {
        s.innerHTML = TEAMS.map((t) => `<option value="${esc(t)}">${esc(t)}</option>`).join("");
      }
    });
  }
  const tournament = TOURNAMENTS.find((t) => t.id === selectedTournamentId) || TOURNAMENTS[0] || null;
  if (tournament) {
    selectedTournamentId = tournament.id;
    if (summaryEl) summaryEl.innerHTML = `<div style="display:flex;gap:12px;flex-wrap:wrap"><div><strong>${esc(tournament.name)}</strong> ${tournament.season ? `(${esc(tournament.season)})` : ""}</div><div>Ngày: ${esc(tournament.start)} → ${esc(tournament.end)}</div><div>Số trận: ${tournament.matches?.length || 0}</div><div>Giải thưởng: ${tournament.prize?.toLocaleString() || 0} ▪</div></div>`;
    if (scheduleEl) {
      scheduleEl.innerHTML = (tournament.matches || []).length ? tournament.matches.map((m) => {
        const score = typeof m.homeScore === "number" && typeof m.awayScore === "number" ? `${m.homeScore} - ${m.awayScore}` : "Chưa có";
        return `<div class="sugg-item" style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:8px;padding:10px;border:1px solid #ddd;border-radius:4px;background:#fff"><div><div style="font-weight:600">${esc(m.date)}: ${esc(m.homeTeam.replace("FC ", ""))} vs ${esc(m.awayTeam.replace("FC ", ""))}</div><div style="font-size:12px;color:#666">Kết quả: ${score}</div></div>${isAdmin() ? `<div style="display:flex;gap:6px"><input type="number" class="form-input" id="homeScore-${m.id}" style="width:64px" placeholder="Số" value="${m.homeScore ?? ""}"><input type="number" class="form-input" id="awayScore-${m.id}" style="width:64px" placeholder="Số" value="${m.awayScore ?? ""}"><button class="btn-save" onclick="updateMatchResult('${m.id}')">Cập nhật</button></div>` : ""}</div>`;
      }).join("") : '<div style="font-size:12px;color:#aaa;padding:10px;border:1px dashed #ccc;border-radius:4px">Chưa có lịch thi đấu</div>';
    }
    if (standingsEl) standingsEl.innerHTML = renderTournamentStandings(tournament);
  } else {
    if (summaryEl) summaryEl.innerHTML = '<div style="font-size:12px;color:#666">Chưa có giải đấu nào. Hãy tạo giải mới để xem lịch và bảng xếp hạng.</div>';
    if (scheduleEl) scheduleEl.innerHTML = '';
    if (standingsEl) standingsEl.innerHTML = '';
  }
  if (fundEl) {
    fundEl.innerHTML = TEAMS.map((team) => {
      const amount = getClubFunds(team);
      const safeTeam = esc(team);
      const adjustControls = isSuperAdmin() ? `<div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap"><button class="bsm" onclick="adjustClubFund('${safeTeam}', 100)">+100</button><button class="bsm bsm-dg" onclick="adjustClubFund('${safeTeam}', -100)">-100</button><button class="bsm" onclick="promptAdjustClubFund('${safeTeam}')">Tùy chỉnh</button></div>` : "";
      return `<div class="stat-box" style="flex:1;min-width:180px"><div class="stat-lbl">${esc(team.replace("FC ", ""))}</div><div class="stat-val">${amount.toLocaleString()} ▪</div>${adjustControls}</div>`;
    }).join("");
  }
}

function addTournamentMatch() {
  const tournament = TOURNAMENTS.find((t) => t.id === selectedTournamentId);
  if (!tournament) return;
  const date = document.getElementById("matchDate").value;
  const homeTeam = document.getElementById("matchHome").value;
  const awayTeam = document.getElementById("matchAway").value;
  if (!date || !homeTeam || !awayTeam) {
    toast("Chọn đủ ngày và 2 đội", "warn");
    return;
  }
  if (homeTeam === awayTeam) {
    toast("Đội chủ nhà và đội khách phải khác nhau", "warn");
    return;
  }
  const id = `m_${Date.now()}`;
  tournament.matches = tournament.matches || [];
  tournament.matches.push({ id, date, homeTeam, awayTeam, homeScore: null, awayScore: null });
  sd();
  document.getElementById("matchDate").value = "";
  document.getElementById("matchHome").value = TEAMS[0];
  document.getElementById("matchAway").value = TEAMS[1];
  renderTournamentPage();
}

function updateMatchResult(matchId) {
  const tournament = TOURNAMENTS.find((t) => t.id === selectedTournamentId);
  if (!tournament) return;
  const match = (tournament.matches || []).find((m) => m.id === matchId);
  if (!match) return;
  const homeScore = parseInt(document.getElementById(`homeScore-${matchId}`).value, 10);
  const awayScore = parseInt(document.getElementById(`awayScore-${matchId}`).value, 10);
  if (Number.isNaN(homeScore) || Number.isNaN(awayScore)) {
    toast("Nhập kết quả hợp lệ", "warn");
    return;
  }
  match.homeScore = homeScore;
  match.awayScore = awayScore;
  sd();
  renderTournamentPage();
}

function renderTournamentStandings(tournament) {
  const rows = {};
  (tournament.matches || []).forEach((m) => {
    [m.homeTeam, m.awayTeam].forEach((team) => {
      if (!rows[team]) rows[team] = { team, gp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 };
    });
    if (typeof m.homeScore !== "number" || typeof m.awayScore !== "number") return;
    const home = rows[m.homeTeam];
    const away = rows[m.awayTeam];
    home.gp += 1;
    away.gp += 1;
    home.gf += m.homeScore;
    home.ga += m.awayScore;
    away.gf += m.awayScore;
    away.ga += m.homeScore;
    if (m.homeScore > m.awayScore) {
      home.w += 1;
      away.l += 1;
      home.pts += 3;
    } else if (m.homeScore < m.awayScore) {
      away.w += 1;
      home.l += 1;
      away.pts += 3;
    } else {
      home.d += 1;
      away.d += 1;
      home.pts += 1;
      away.pts += 1;
    }
  });
  const table = Object.values(rows).sort((a, b) => b.pts - a.pts || (b.gf - b.ga) - (a.gf - a.ga) || b.gf - a.gf);
  if (!table.length) return '<div style="font-size:12px;color:#aaa;padding:10px;border:1px dashed #ccc;border-radius:4px">Chưa có trận đấu</div>';
  return `<div style="overflow-x:auto"><table class="tm-table" style="width:100%;min-width:600px"><thead><tr><th>Đội</th><th>Trận</th><th>Thắng</th><th>Hòa</th><th>Thua</th><th>BT</th><th>BB</th><th>HS</th><th>Điểm</th></tr></thead><tbody>${table.map((r) => `<tr><td>${esc(r.team.replace("FC ", ""))}</td><td>${r.gp}</td><td>${r.w}</td><td>${r.d}</td><td>${r.l}</td><td>${r.gf}</td><td>${r.ga}</td><td>${r.gf - r.ga}</td><td>${r.pts}</td></tr>`).join("")}</tbody></table></div><div style="margin-top:10px">${isAdmin() ? `<button class="btn-save" onclick="finishTournament()">Kết thúc giải và thưởng đội đầu bảng</button>` : ""}</div>`;
}

function finishTournament() {
  const tournament = TOURNAMENTS.find((t) => t.id === selectedTournamentId);
  if (!tournament) return;
  const rows = renderTournamentStandings(tournament);
  const stats = {};
  (tournament.matches || []).forEach((m) => {
    if (typeof m.homeScore !== "number" || typeof m.awayScore !== "number") return;
    [m.homeTeam, m.awayTeam].forEach((team) => {
      if (!stats[team]) stats[team] = { pts: 0, gd: 0, gf: 0 };
    });
    const home = stats[m.homeTeam];
    const away = stats[m.awayTeam];
    home.gf += m.homeScore;
    home.gd += m.homeScore - m.awayScore;
    away.gf += m.awayScore;
    away.gd += m.awayScore - m.homeScore;
    if (m.homeScore > m.awayScore) { home.pts += 3; }
    else if (m.homeScore < m.awayScore) { away.pts += 3; }
    else { home.pts += 1; away.pts += 1; }
  });
  const winner = Object.entries(stats).sort(([, a], [, b]) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf)[0];
  if (!winner) {
    toast("Chưa có kết quả đủ để hoàn tất giải", "warn");
    return;
  }
  const winningTeam = winner[0];
  const prize = tournament.prize || 500;
  creditClub(winningTeam, prize);
  BL.unshift({ t: new Date().toLocaleString("vi-VN"), pl: winningTeam, bn: `Thắng giải ${esc(tournament.name)} +${prize}▪`, by: CU.un });
  if (BL.length > 60) BL.length = 60;
  sd();
  toast(`Đội ${winningTeam.replace("FC ", "")} nhận thưởng ${prize} ▪`, "success");
  renderTournamentPage();
  rStats();
  rBH();
}

function addTournament() {
  const name = (document.getElementById("pageTName")?.value || document.getElementById("tName")?.value || "").trim();
  const season = (document.getElementById("pageTSeason")?.value || document.getElementById("tSeason")?.value || "").trim();
  const start = document.getElementById("pageTStart")?.value || document.getElementById("tStart")?.value || "";
  const end = document.getElementById("pageTEnd")?.value || document.getElementById("tEnd")?.value || "";
  const prize = parseInt(document.getElementById("pageTPrize")?.value || document.getElementById("tPrize")?.value || "0", 10) || 0;
  if (!name) {
    toast("Nhập tên giải", "warn");
    return;
  }
  if (!start || !end) {
    toast("Chọn ngày bắt đầu và kết thúc", "warn");
    return;
  }
  const id = `t_${Date.now()}`;
  TOURNAMENTS.unshift({ id, name, season, start, end, prize, createdBy: CU?.un || "Super Admin", createdAt: new Date().toLocaleString("vi-VN") });
  sd();
  if (document.getElementById("tName")) document.getElementById("tName").value = "";
  if (document.getElementById("tSeason")) document.getElementById("tSeason").value = "";
  if (document.getElementById("tStart")) document.getElementById("tStart").value = "";
  if (document.getElementById("tEnd")) document.getElementById("tEnd").value = "";
  if (document.getElementById("pageTName")) document.getElementById("pageTName").value = "";
  if (document.getElementById("pageTSeason")) document.getElementById("pageTSeason").value = "";
  if (document.getElementById("pageTStart")) document.getElementById("pageTStart").value = "";
  if (document.getElementById("pageTEnd")) document.getElementById("pageTEnd").value = "";
  toast(`Đã tạo giải ${name}`, "success");
  renderTournaments();
}

function deleteTournament(id) {
  if (!confirm("Xoá giải đấu này?")) return;
  TOURNAMENTS = TOURNAMENTS.filter((t) => t.id !== id);
  sd();
  toast("Đã xóa giải đấu", "success");
  renderTournaments();
}

function deletePlayer() {
  const pid = parseInt(document.getElementById("delSel").value, 10);
  const p = DATA.find((x) => x.id === pid);
  if (!p) return;
  if (p.by === "superadmin" && CU.role === "admin") {
    toast("Admin không thể xoá cầu thủ của Super Admin!", "warn");
    return;
  }
  if (!confirm(`Xoá cầu thủ "${p.ten}"?`)) return;
  DATA = DATA.filter((x) => x.id !== pid);
  sd();
  toast(`Đã xoá ${p.ten}`);
  rAdmin();
}

function sellPlayer(id) {
  const p = DATA.find((x) => x.id === id);
  if (!p) return;
  if (isPresident()) {
    if (CU.club !== p.doi) {
      toast("Chỉ được bán cầu thủ của CLB bạn đang điều hành.", "warn");
      return;
    }
    if (p.forSale) { cancelSale(id); return; }
    if (!isTransferWindowOpen()) {
      toast("Cửa sổ chuyển nhượng đang đóng — không thể rao bán", "warn");
      return;
    }
    const price = parseInt(prompt(`Nhập giá sàn đấu giá cho ${p.ten}`, p.val), 10);
    if (Number.isNaN(price) || price <= 0) {
      toast("Giá rao bán không hợp lệ", "warn");
      return;
    }
    const days = parseInt(prompt("Thời hạn đấu giá (số ngày, mặc định 3):", "3"), 10) || 3;
    const deadline = new Date(Date.now() + days * 86400000).toISOString();
    p.forSale = true;
    p.listPrice = price;
    p.saleDeadline = deadline;
    sd();
    toast(`${p.ten} rao bán giá sàn ${price}▪ · hạn ${days} ngày`, "success");
    rTable();
    renderMySugg();
    return;
  }
  if (!confirm(`Bán cầu thủ "${p.ten}" và cộng ${p.val.toLocaleString()} ▪ cho ${p.doi}?`)) return;
  const team = p.doi;
  creditClub(team, p.val);
  DATA = DATA.filter((x) => x.id !== id);
  BL.unshift({ t: new Date().toLocaleString("vi-VN"), pl: p.ten, bn: `Bán cầu thủ ${p.val.toLocaleString()}▪`, by: CU.un });
  if (BL.length > 60) BL.length = 60;
  sd();
  toast(`Đã bán ${p.ten}. ${team} nhận ${p.val.toLocaleString()} ▪`, "success");
  rTable();
  rStats();
  rBH();
}

function exportData() {
  const rows = ["STT,Tên,Vị trí,Đội,Số áo,Đánh giá,Giá trị,Tốc,Sức,Kỹ,Tổng"];
  DATA.forEach((p) => rows.push([p.stt, p.ten, p.pos || "CM", p.doi, p.so, `${p.rating}/5`, p.val, p.idx.toc || 0, p.idx.suc || 0, p.idx.ky || 0, p.idx.tong || 0].join(",")));
  const blob = new Blob([`\uFEFF${rows.join("\n")}`], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "transfer_market.csv";
  a.click();
  URL.revokeObjectURL(a.href);
  toast("Đã xuất CSV", "success");
}

function updateReqAdminBtn() {
  const btn = document.getElementById("btnReqAdmin");
  if (!btn || !CU) return;
  USERS = JSON.parse(localStorage.getItem("tmU") || "[]");
  const u = USERS.find((x) => x.un === CU.un);
  if (u && u.reqAdmin) {
    btn.textContent = "Đang chờ duyệt...";
    btn.disabled = true;
    btn.style.opacity = ".6";
  } else {
    btn.textContent = "Xin lên Admin";
    btn.disabled = false;
    btn.style.opacity = "1";
  }
}

async function reqAdminFn() {
  await fbReady();
  const fbU = await fbGetUsers();
  if (fbU && fbU.length > 0) {
    USERS = fbU;
    localStorage.setItem("tmU", JSON.stringify(USERS));
  }
  const u = USERS.find((x) => x.un === CU?.un);
  if (u) {
    u.reqAdmin = true;
    localStorage.setItem("tmU", JSON.stringify(USERS));
    fbSetUser(u);
    updateReqAdminBtn();
    toast("Đã gửi yêu cầu lên Admin!", "success");
  }
}

function openPasswordModal() {
  const modal = document.getElementById("pwdModal");
  if (!modal) return;
  document.getElementById("pwdMsg").textContent = "";
  document.getElementById("curPass").value = "";
  document.getElementById("newPass").value = "";
  document.getElementById("newPass2").value = "";
  modal.classList.add("open");
}

function closePasswordModal() {
  const modal = document.getElementById("pwdModal");
  if (modal) modal.classList.remove("open");
}

function savePassword() {
  const cur = document.getElementById("curPass").value;
  const np = document.getElementById("newPass").value;
  const np2 = document.getElementById("newPass2").value;
  const msg = document.getElementById("pwdMsg");
  if (!cur || !np || !np2) {
    msg.textContent = "Vui lòng điền đầy đủ thông tin";
    msg.style.color = "#c0392b";
    return;
  }
  if (np.length < 6) {
    msg.textContent = "Mật khẩu mới phải ít nhất 6 ký tự";
    msg.style.color = "#c0392b";
    return;
  }
  if (np !== np2) {
    msg.textContent = "Mật khẩu mới không khớp";
    msg.style.color = "#c0392b";
    return;
  }
  if (!CU || h(cur) !== CU.h) {
    msg.textContent = "Mật khẩu hiện tại không đúng";
    msg.style.color = "#c0392b";
    return;
  }
  CU.h = h(np);
  const u = USERS.find((x) => x.un === CU.un);
  if (u) u.h = CU.h;
  localStorage.setItem("tmU", JSON.stringify(USERS));
  fbSetUser(u);
  msg.textContent = "Đổi mật khẩu thành công";
  msg.style.color = "#27ae60";
  setTimeout(closePasswordModal, 1200);
}

document.getElementById("modalOv").addEventListener("click", function onOverlayClick(e) {
  if (e.target === this) closeModal();
});
document.getElementById("vdichModal").addEventListener("click", function onOverlayClick(e) {
  if (e.target === this) closeVdich();
});
document.getElementById("vdichPlayerList").addEventListener("change", (e) => {
  if (e.target.matches('input[type="checkbox"]')) {
    const row = e.target.closest(".vd-player-row");
    if (row) toggleVdRow(row, e);
  }
});
document.getElementById("lPass").addEventListener("keydown", (e) => {
  if (e.key === "Enter") doLogin();
});

(function restoreSession() {
  const savedUn = sessionStorage.getItem("tmSession");
  if (!savedUn) return;
  USERS = JSON.parse(localStorage.getItem("tmU") || "[]");
  const usr = USERS.find((x) => x.un === savedUn && x.ok);
  if (!usr) return;
  if (usr.un === "vquyetthang") usr.role = "superadmin";
  CU = usr;
  enterApp();
})();

Object.assign(window, {
  switchTab,
  doLogin,
  doRegister,
  doLogout,
  loadFromFirebase,
  reqAdminFn,
  showPage,
  setFilter,
  setSort,
  qSave,
  openModal,
  closeModal,
  saveModal,
  exportData,
  submitPlayerSugg,
  submitBonusSugg,
  applyB,
  deleteCustomBonus,
  addCustomBonus,
  setPosFilter,
  setQuery,
  clearFilters,
  toggleVdRow,
  closeVdich,
  confirmVdich,
  approveSugg,
  rejectSugg,
  makeAdminU,
  rejectAdminReq,
  demU,
  delU,
  openPasswordModal,
  closePasswordModal,
  savePassword,
  addPlayer,
  deletePlayer,
  makePresident,
  addTournament,
  addTournamentMatch,
  updateMatchResult,
  finishTournament,
  deleteTournament,
  selectTournament,
  toggleTransferWindow,
  submitOfferForPlayer,
  cancelSale,
  submitLoanRequest,
  approveLoan,
  recallLoan,
  sellPlayer,
  requestPurchase,
  submitPurchaseRequest,
  renderTransferPage,
  adjustClubFund,
  promptAdjustClubFund,
});
