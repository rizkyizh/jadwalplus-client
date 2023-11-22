import '../views/pages/Home';
import '../views/pages/Login';
import '../views/pages/Register';

const Home = document.createElement('home-page');
const Login = document.createElement('login-page');
const Register = document.createElement('register-page');

const routes = {
  '/': Home,
  '/login': Login,
  '/register': Register,
};

export default routes;
