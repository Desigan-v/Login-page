'use client'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import "./styles.css"

const Welcome = () => {
    const router = useRouter();
    const logOut = ()=> {
        Cookies.remove("loggedin");
        router.push('/')
    }
    return(
    <div>
      <div className='container'>
        <div className='content'>
        <h1>Hello</h1>
        <button
        className='button-container'
        type='submit'
        onClick={()=>logOut()}>Logout</button>
    </div>
    </div>
    </div>
);
}
export default Welcome;