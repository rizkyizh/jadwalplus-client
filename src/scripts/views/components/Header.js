class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
      <nav>
            <div class="logo">
                <img src="/image/logo.png" alt="Logo" class="logo-image"> JadwalPlus
            </div>
            <ul>
                <li class="nav-item"><a href="/" class="active">Beranda</a></li>
                <li class="nav-item"><a href="/">JadwalPlus</a></li>
                <li class="nav-item"><a href="#">Tentang Kami</a></li>
                <li class="auth-box login-box"><a href="/#/login" class="auth-aja">Masuk</a></li>
                <li class="auth-box"><a href="/#/register" class="auth-link">Daftar</a></li>
            </ul>
        </nav>
    </header>
    `;
  }
}

customElements.define('header-app', Header);
