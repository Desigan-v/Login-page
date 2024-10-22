import Link from 'next/link';
import "./globals.css";
const Home = () => (
    <div className='container'>
        <center><h1>Welcome</h1></center>
        <div className='content'>
        <div className='button-container'>
          <div>
            <Link href="/login">
                <button>Login</button>
            </Link>
        </div>
        <div>
            <Link href="/register">
                <button>Register</button>
            </Link>
        </div>
        </div>
    </div></div>
);

export default Home;