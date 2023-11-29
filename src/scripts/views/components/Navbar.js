class Navbar extends HTMLElement {
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
                  <li class="auth-user"><a class="auth-link">A</a></li>
              </ul>
          </nav>
      </header>
      `;
  }
}

customElements.define('navbar-app', Navbar);
