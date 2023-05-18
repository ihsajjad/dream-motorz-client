import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    
    return (
        <div className="min-h-screen bg-amber-50 w-full py-12 px-3">
            <form onSubmit={'handleRegister'} className="rounded-lg p-5 lg:w-2/5 w-full mx-auto shadow-2xl bg-purple-100 my-10 border-2 border-purple-300">
                <h2 className='text-3xl font-bold text-center mt-5 text-purple-700 border-b-4 border-purple-700 pb-3 mx-8'>Please Register</h2>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered border-purple-300" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="Your Email" className="input input-bordered border-purple-300" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered border-purple-300" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" name='photo' placeholder="Your Photo URL" className="input input-bordered border-purple-300" />
                        <p className='text-red-500'>{'error'}</p>
                    </div>
                    <div className="form-control mt-2">
                        <input type="submit" value="Register" className='custom-btn' />
                    </div>
                    <p>Already have an account? Please <Link to='/login' className="link link-primary">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;