import '../components/Navbar';
import '../components/Navigation';
import '../components/HeroBeranda';

const navbar = document.createElement('navbar-app');
const navigation = document.createElement('navigation-app');
const heroberanda = document.createElement('heroberanda-app');

class Beranda extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    // eslint-disable-next-line no-unused-expressions
    this.firstChild && this.removeChild(this.firstChild);
    this.append(navbar, heroberanda, navigation);
    this.classList.add('min-height-100');
  }
}

customElements.define('beranda-page', Beranda);
