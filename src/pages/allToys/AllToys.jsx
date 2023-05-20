import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../shared/spinner/Spinner";


const AllToys = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('https://dream-motorz-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setToys(data));
    }, [])

    // if(toys.length === 0){
    //     return <Spinner />
    // }

    const searchToy = (event) => {
        const search = event.target.value;
        console.log(search)
        fetch(`https://dream-motorz-server-ihsajjad.vercel.app/products?search=${search}`)
            .then(res => res.json())
            .then(data => setToys(data));
    }
    return (
        <div className="overflow-x-auto w-full md:p-4">
            <h3 className="text-3xl font-bold text-purple-700 text-center my-4">All Toys</h3>

            <div className="flex items-center my-4">
            <input onChange={searchToy} type="text" placeholder="Search by toy name" className="input input-bordered input-primary w-full max-w-xs" />
            </div>

            <table className="table table-zebra w-full ">
                {/* head */}
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row  */}
                    {
                        toys.map((toy, i) => <tr key={toy._id}>
                            <td>{i + 1}</td>
                            <td>{toy.sellerName}</td>
                            <td>{toy.toyName}</td>
                            <td>{toy.subCategory}</td>
                            <td>${toy.price}</td>
                            <td>{toy.availableQuantity}</td>
                            <th>
                                <Link to={`/all-toys/${toy._id}`} className="btn btn-ghost btn-xs">details</Link>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;