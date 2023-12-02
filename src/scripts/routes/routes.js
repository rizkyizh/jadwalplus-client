import '../views/pages/Home';
import '../views/pages/Login';
import '../views/pages/Register';
import '../views/pages/Beranda';
import '../views/pages/Add';
import '../views/pages/About';

const Home = document.createElement('home-page');
const Login = document.createElement('login-page');
const Register = document.createElement('register-page');
const Beranda = document.createElement('beranda-page');
const Add = document.createElement('add-page');
const About = document.createElement('about-page');

const routes = {
  '/': Home,
  '/login': Login,
  '/register': Register,
  '/beranda': Beranda,
  '/add': Add,
  '/about': About,
};

export default routes;
