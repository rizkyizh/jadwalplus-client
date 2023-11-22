import '../components/Header';

const header = document.createElement('header-app');

class Home extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.appendChild(header);
    this.innerHTML += `
      <h1>Halaman Home</h1>
      <a href="/#/login">login</a>
      <a href="/#/register">register</a>
    `;
  }
}

customElements.define('home-page', Home);
