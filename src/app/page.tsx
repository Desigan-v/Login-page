import Link from 'next/link';
import "./globals.css";
const Home = () => (
    <div>
        <h1>Welcome to Next.js Authentication</h1>
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
);

export default Home;