import '../components/Header';
import '../components/HeroElement';
import '../components/Footer';

const header = document.createElement('header-app');
const hero = document.createElement('heroelement-app');
const footer = document.createElement('footer-app');

class Home extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    // eslint-disable-next-line no-unused-expressions
    this.firstChild && this.removeChild(this.firstChild);
    this.append(header, hero, footer);
    this.classList.add('min-height-100');
  }
}

customElements.define('home-page', Home);
