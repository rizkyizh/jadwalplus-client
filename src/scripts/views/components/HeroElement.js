class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="text-container">
            <p>Taklukkan Waktu, Atur Hidup<br> dengan Lebih Muda</p>
            <p>Mulailah Mengatur Jadwalmu<br>dengan JadwalPlus</p>
            <button class="hire-btn">JadwalPlus</button>
        </div>
        <img alt="model" class="model" src="/image/foto.jpeg">
    `;
  }
}

customElements.define('heroelement-app', HeroElement);
