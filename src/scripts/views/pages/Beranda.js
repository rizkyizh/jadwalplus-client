import '../components/Header';
import '../components/Navigation';

const header = document.createElement('header-app');
const navigation = document.createElement('navigation-app');

class Beranda extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    // eslint-disable-next-line no-unused-expressions
    this.firstChild && this.removeChild(this.firstChild);
    this.append(header, navigation);
    this.classList.add('min-height-100');
  }
}

customElements.define('beranda-page', Beranda);
