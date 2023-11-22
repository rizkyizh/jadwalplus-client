class Login extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '<h1>Halaman Login</h1>';
  }
}

customElements.define('login-page', Login);
