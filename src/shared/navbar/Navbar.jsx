import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Play Sporta</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>

                    <li>
                        <Link to='/all-toys'>All Toys</Link>
                    </li>
                    <li>
                        <Link to='/my-toys'>My Toys</Link>
                    </li>
                    <li>
                        <Link to='/add-a-toys'>Add A Toy</Link>
                    </li>
                    <li>
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