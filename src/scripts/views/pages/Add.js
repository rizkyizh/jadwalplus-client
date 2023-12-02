import '../components/Navbar';
import '../components/NavPage';
import '../components/HeroPage';

const navbar = document.createElement('navbar-app');
const navigation = document.createElement('navpage-app');
const heroberanda = document.createElement('heropage-app');

class Add extends HTMLElement {
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

customElements.define('add-page', Add);
