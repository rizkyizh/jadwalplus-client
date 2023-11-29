class HeroBeranda extends HTMLElement {
  connectedCallback() {
    this.render();
    this.changePageBackground();
  }

  render() {
    this.innerHTML = `

      `;
  }

  // eslint-disable-next-line class-methods-use-this
  changePageBackground() {
    // Tambahkan kelas 'body-bg-image' ke elemen body
    document.body.classList.add('body-bg-image');
  }
}

customElements.define('heroberanda-app', HeroBeranda);
