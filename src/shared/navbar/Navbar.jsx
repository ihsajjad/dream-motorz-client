import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-row items-center justify-center bg-purple-700 text-white md:mt-8 mt-2 p-2 rounded">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-2xl">
                DreamMotorz
                </Link>
            </div>
            <div className="md:hidden text-xl" onClick={() => setOpen(!open)}>
                {
                    open
                        ? <span><FaBars /></span>
                        : <span><FaTimes /></span>
                }
            </div>
            <div className="flex-none relative">
                <ul className={`flex md:flex-row flex-col md:items-center bg-purple-700 md:space-x-2 text-xl font-semibold md:static absolute ${open ? '-right-52' : '-right-2 top-4 w-40 p-2 rounded'}`}>
                    <li className="nav-item">
                        <Link to='/' className="flex items-center"><FaHome className="mr-1"/>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about'>About</Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/all-toys'>All Toys</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/my-toys'>My Toys</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/add-a-toys'>Add A Toy</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/blogs'>Blogs</Link></li>
                    <li>
                        <Link to='/profile'>
                            <img className="btn-circle avatar" src="https://avatars.githubusercontent.com/u/119999260?s=40&v=4" />
                        </Link>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Navbar;