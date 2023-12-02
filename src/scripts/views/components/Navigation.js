class Navigation extends HTMLElement {
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
          <div class="navigation-icon" id="add-book-icon"> <!-- Mengganti ID dan Menambahkan Kode untuk Buku -->
          <i data-feather="file-plus"></i>
          <span class="icon-label">Add</span>
        </div>
          <!-- Menambahkan ikon "user" -->
          <div class="navigation-icon" id="About">
            <i data-feather="user"></i>
            <span class="icon-label">About</span>
          </div>
        </div>
      </div>
    `;
    // Panggil feather.replace() setelah elemen dirender
    // eslint-disable-next-line no-undef
    feather.replace();
  }

  addEventListeners() {
    document.getElementById('add-icon').addEventListener('click', () => this.navigateToPage('/#/beranda'));
    document.getElementById('add-book-icon').addEventListener('click', () => this.navigateToPage('/#/add'));
    document.getElementById('About').addEventListener('click', () => this.navigateToPage('/#/about'));
  }

  // eslint-disable-next-line class-methods-use-this
  navigateToPage(page) {
    window.location.href = page;
  }
}

customElements.define('navigation-app', Navigation);
