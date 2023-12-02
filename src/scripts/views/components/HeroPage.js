class HeroPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="bgimage">
        `;
  }
}

customElements.define('heropage-app', HeroPage);
