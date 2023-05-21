import { Link, useRouteError } from "react-router-dom";
import useTitle from "../../hooks/useTitle";


const NotFound = () => {
    const error = useRouteError();
    useTitle('Not Found')
    return (
        <div className="min-h-screen flex items-center justify-center text-center bg-black text-amber-300">
            <div>
                <img className="w-1/3 mx-auto rounded-2xl" src="https://cdn.dribbble.com/userupload/6038198/file/original-827b370e4e255882d5f00013565a2cc6.png?compress=1&resize=1024x768" alt="" />
                <h3 className="text-xl">{error.error.message}</h3>
                <h3 className="text-2xl">Not Found</h3>
                <p className="text-xl">Back to <Link className="link text-purple-700 font-bold" to='/'>Home</Link></p>
            </div>
        </div>
    );
};

export default NotFound;