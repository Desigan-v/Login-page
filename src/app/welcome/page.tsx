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
        <li className="item list">
              <h3 className="title">Desigan</h3>
              <p className="description">
                            I'm a Java full-stack developer preparing for a Google job application,
                            focusing on backend development with Spring Boot and 
                            frontend development using React and Next.js.
                            I'm also working on various projects involving REST APIs, databases, and are 
                            interested in learning and improving my skills across different technologies.</p>
              <h3 className="name">Java FullStack Developer</h3>
              
                <a href="https://github.com/Desigan-v?tab=repositories" className="view-link">
                <i className="fa-brands fa-github"></i> GitHub <i className="fa-solid fa-square-up-right"></i>
                </a>
            </li>
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