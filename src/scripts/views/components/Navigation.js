class Navigation extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.innerHTML = `
    <div class="navigation">
      <div class="navigation-icons">
        <div class="navigation-icon" id="add-icon">
          <i class="fas fa-home"></i>
          <span class="icon-label">Home</span>
        </div>
        <div class="navigation-icon" id="sign-out-icon">
          <i class="fas fa-sign-out-alt"></i>
          <span class="icon-label">Sign Out</span>
        </div>
        <div class="navigation-icon" id="About">
        <i class="fa-solid fa-address-card"></i>
          <span class="icon-label">About</span>
        </div>
      </div>
    </div>
    `;
  }

  addEventListeners() {
    document.getElementById('add-icon').addEventListener('click', () => this.navigateToPage('/#'));
    document.getElementById('sign-out-icon').addEventListener('click', () => this.navigateToPage('/#/beranda'));
    document.getElementById('About').addEventListener('click', () => this.navigateToPage('/#/login'));
  }

  // eslint-disable-next-line class-methods-use-this
  navigateToPage(page) {
    window.location.href = page;
  }
}

customElements.define('navigation-app', Navigation);
