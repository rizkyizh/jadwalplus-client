class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="bg-blue p-4">
      <h1 class="text-white">Jadwal Plus</h1>
    </header>
    `;
  }
}

customElements.define('header-app', Header);
