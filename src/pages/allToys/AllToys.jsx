import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllToys = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setToys(data));
    }, [])

    return (
        <div className="overflow-x-auto w-full md:p-4">
            <h3 className="text-3xl font-bold text-purple-700 text-center my-4">All Toys</h3>
            <table className="table table-zebra w-full ">
                {/* head */}
                <thead>
                    <tr>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        toys.map(toy => <tr key={toy._id}>
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
                {/* foot */}
                <tfoot>
                    <tr>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Details</th>
                    </tr>
                </tfoot>

            </table>
        </div>
    );
};

export default AllToys;