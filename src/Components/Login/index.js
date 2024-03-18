import { useState } from 'react'
import Cookies from 'js-cookie';
import Apple from '../../assets/Apple.jpg'
import Google from '../../assets/Google.jpg'
import './index.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [Pwd, setPwd] = useState('');

    const getLogin = async (e) => {
        try {
            e.preventDefault();
            const formData = {
                username: email,
                password: Pwd
            }
            console.log(JSON.stringify(formData))
            const res = await fetch("https://jwt-genarater.netlify.app/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }
            );
            const data=await res.json();
            Cookies.set('jwt',data.token,{
                expires: 30,
                path: '/',
              })
              setEmail("");
              setPwd('')
           
            
        }
        catch {
            console.log("error");
        }
    }


    return (
        <div className="">
            <div className="app-container">
                <div className="board-section">
                    <div className='board-layout'>
                        <p className="board">Board.</p>
                    </div>

                </div>
                <div className="login-section">
                    <div>
                        <h1 className="head">Sign In</h1>
                        <p className="desc">Sign in to your account</p>
                        <div className="img-sec">
                            <img src={Google} className='img' alt='image' />
                            <img src={Apple} alt='image' />
                        </div>
                        <div className='card-section'>
                            <form onSubmit={getLogin}>
                                <div className=''>
                                    <p className='label'>Email address</p>
                                    <input type='text' name='email' className='input' onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className=''>
                                    <p className='label'>Password</p>
                                    <input type='password' name='email' className='input' onChange={(e) => setPwd(e.target.value)} />
                                </div>
                                <p className='fpwd'>Forgot Password?</p>
                                <button className='button' type='submit'>Sign In</button>
                            </form>

                        </div>
                        <p className='alter'>Don’t have an account?<span className='reg'>Register here</span> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
