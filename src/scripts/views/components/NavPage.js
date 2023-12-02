class NavPage extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.innerHTML = `
      <div class="navigation">
        <div class="navigation-icons">
          <div class="navigation-icon" id="add-icon">
            <i data-feather="home"></i>
            <span class="icon-label">Home</span>
          </div>
          <div class="navigation-icon" id="add-book-icon"> 
            <i data-feather="log-out"></i>
            <span class="icon-label">Keluar</span>
          </div>
          <div class="navigation-icon" id="About">
            <i data-feather="user"></i>
            <span class="icon-label">About</span>
          </div>
        </div>
      </div>
          
      <div class="user-info-container">
        <div class="site-name">Buat Jadwal Baru</div>
        <div class="red-box">
          <div class="input-container">
            <input type="text" id="username" name="username" placeholder="Judul Jadwal">
          </div>
          <div class="input-container">
            <input type="date" id="tanggal" name="tanggal">
          </div>
          <div class="input-container">
            <textarea id="keterangan" name="keterangan" placeholder="Masukkan keterangan"></textarea>
          </div>            
          <div class="button-container">
            <button id="simpanButton" class="save-button">SIMPAN</button>
          </div>
        </div>
      </div>
    `;
    // eslint-disable-next-line no-undef
    feather.replace();

    document.addEventListener('edit-event', (event) => this.handleEdit(event));
  }

  addEventListeners() {
    document.getElementById('add-icon').addEventListener('click', () => this.navigateToPage('/#/beranda'));
    document.getElementById('add-book-icon').addEventListener('click', () => this.navigateToPage('/#/beranda'));
    document.getElementById('About').addEventListener('click', () => this.navigateToPage('/#/about'));
    document.getElementById('simpanButton').addEventListener('click', () => this.validateInputs());
  }

  validateInputs() {
    const usernameInput = document.getElementById('username');
    const tanggalInput = document.getElementById('tanggal');
    const keteranganInput = document.getElementById('keterangan');

    if (usernameInput.value.trim() === '' || tanggalInput.value.trim() === '' || keteranganInput.value.trim() === '') {
      // eslint-disable-next-line no-alert
      alert('Mohon isi semua');
    } else {
      const jadwalData = {
        judul: usernameInput.value,
        tanggal: tanggalInput.value,
        keterangan: keteranganInput.value,
      };

      // localStorage
      let existingData = JSON.parse(localStorage.getItem('jadwalData'));

      // Jika existingData bukan array, inisialisasi sebagai array kosong
      if (!Array.isArray(existingData)) {
        existingData = [];
      }

      // Menambahkan data baru ke array
      existingData.push(jadwalData);

      // Menyimpan array baru ke localStorage
      localStorage.setItem('jadwalData', JSON.stringify(existingData));

      // Navigasi ke halaman beranda
      this.navigateToPage('/#/beranda');
    }
  }

  handleEdit(event) {
    const editedData = event.detail;
    this.showEditForm(editedData);
  }

  // eslint-disable-next-line class-methods-use-this
  showEditForm(data) {
    document.getElementById('username').value = data.judul;
    document.getElementById('tanggal').value = data.tanggal;
    document.getElementById('keterangan').value = data.keterangan;
  }

  // eslint-disable-next-line class-methods-use-this
  navigateToPage(page) {
    window.location.href = page;
  }
}

customElements.define('navpage-app', NavPage);
