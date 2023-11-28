import App from './App';
import '../styles/login&register/style.css';
import '../styles/index.css';

const root = document.getElementById('root');
const app = new App({ root });

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
