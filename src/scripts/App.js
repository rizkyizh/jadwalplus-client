/* eslint-disable no-unused-expressions */
import UrlParser from './routes/url-parser';
import routes from './routes/routes';

class App {
  constructor({ root }) {
    this._root = root;
  }

  renderPage() {
    this._root.firstChild && this._root.removeChild(this._root.firstChild);
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._root.appendChild(page);
  }
}

export default App;
