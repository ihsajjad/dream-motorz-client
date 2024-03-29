import { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { ToastContext } from '../../shared/toast/ToastProvider';
import Swal from 'sweetalert2';


const Login = () => {
    const {googleSignIn, userLogin} = useContext(AuthContext);
    const {handleToast} = useContext(ToastContext);
    const [error, setError] = useState('');

    useTitle('Login');

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname;

    // handling google login
    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login Successfull',
                showConfirmButton: false,
                timer: 1500
              })

            navigate(from,{replace : true})
        })
        .catch(error => setError(error.message))
    }

    // login with email and password
    const handleLogin = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        userLogin(email, password)
        .then(result=> {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from,{replace : true})
        })
        .catch(error => setError(error.message));
    }

    const handlePasswordReset = () => {

    }
    return (
        <div className="min-h-screen bg-amber-50 w-full py-12 px-3">
            <form onSubmit={handleLogin} className="rounded-lg p-5 lg:w-2/5 w-full mx-auto shadow-2xl bg-purple-100 my-10 border-2 border-purple-300">
                <h2 className='text-3xl font-bold text-center mt-5 text-purple-700 border-b-4 border-purple-700 pb-3 mx-8'>Please Login</h2>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="Your Email" className="input input-bordered border-purple-300"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered border-purple-300" />
                        <p className='text-red-500'>{error}</p>
                        <label className="label">
                            <a onClick={handlePasswordReset} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-2">
                        <input type="submit" value="Login" className='custom-btn'/>
                    </div>
                    <p>New at DreamMotorz? Please <Link to='/register' className="link link-primary">Register</Link></p>
                </div>
                <div className='text-center'>
                    <h3>Login with</h3>
                    <hr className='border border-slate-300 my-3 w-3/4 mx-auto' />
                    <div className='flex lg:flex-row flex-col items-center justify-center gap-5 mb-4 '>
                        <div onClick={handleGoogleLogin} className="custom-btn">
                            <FaGoogle className='text-2xl mr-3'/><span> Google</span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;