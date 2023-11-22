class Register extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div>
        <h1>Halaman Register</h1>
        <a href="/#/login">login</a>
      </div>
    `;
  }
}

customElements.define('register-page', Register);
