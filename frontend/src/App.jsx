import AuthHeader from '../components/auth/AuthHeader';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';

export default function App() {
  return (
    <section className='h-screen'>
      <AuthHeader />
      <Login />
    </section>
  );
}
