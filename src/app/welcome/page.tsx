'use client'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
const Welcome = () => {
    const router = useRouter();
    const logOut = ()=> {
        Cookies.remove("loggedin");
        router.push('/')
    }
    return(
    <div>
      <div>
        <h1>Hello</h1>
        <button
        type='submit'
        onClick={()=>logOut()}>Logout</button>
    </div>
    </div>
);
}
export default Welcome;