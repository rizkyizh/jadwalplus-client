import '../views/pages/Home';
import '../views/pages/Login';
import '../views/pages/Register';
import '../views/pages/Beranda';

const Home = document.createElement('home-page');
const Login = document.createElement('login-page');
const Register = document.createElement('register-page');
const Beranda = document.createElement('beranda-page');

const routes = {
  '/': Home,
  '/login': Login,
  '/register': Register,
  '/beranda': Beranda,
};

export default routes;
