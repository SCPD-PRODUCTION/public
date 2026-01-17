const API = 'http://localhost:96/api';

/* PROGRAM */
function loadProgram() {
  fetch(`${API}/program`)
    .then(r => r.json())
    .then(d => {
      const el = document.getElementById('program-list');
      el.innerHTML = '';
      d.forEach(p => {
        el.innerHTML += `
          <div class="card">
            <h3>${p.judul}</h3>
            <p>${p.deskripsi}</p>
          </div>
        `;
      });
    });
}

/* MEDIA */
function loadMedia() {
  fetch(`${API}/media`)
    .then(r => r.json())
    .then(d => {
      const el = document.getElementById('media-list');
      el.innerHTML = '';
      d.forEach(m => {
        el.innerHTML += `
          <div class="card">
            <h3>${m.judul}</h3>
            <a href="${m.link}" target="_blank">${m.link}</a>
          </div>
        `;
      });
    });
}

/* KAJIAN */
function loadKajian() {
  fetch(`${API}/kajian`)
    .then(r => r.json())
    .then(d => {
      const el = document.getElementById('kajian-list');
      el.innerHTML = '';
      d.forEach(k => {
        el.innerHTML += `
          <div class="card">
            <b>${k.tema}</b><br>
            ${k.pemateri}<br>
            <small>${k.tanggal}</small>
          </div>
        `;
      });
    });
}

/* GALLERY */
function loadGallery() {
  fetch(`${API}/gallery`)
    .then(r => r.json())
    .then(d => {
      const el = document.getElementById('gallery-list');
      el.innerHTML = '';
      d.forEach(g => {
        el.innerHTML += `
          <div class="card">
            <img src="${g.image}">
          </div>
        `;
      });
    });
}

/* AUTO LOAD */
document.addEventListener('DOMContentLoaded', () => {
  loadProgram();
  loadMedia();
  loadKajian();
  loadGallery();
});
