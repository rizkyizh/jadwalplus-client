class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="copyright-box">
            <p>&copy; 2023 JadwalPlus. All rights reserved.</p>
        </footer>
    `;
  }
}

customElements.define('footer-app', Footer);
