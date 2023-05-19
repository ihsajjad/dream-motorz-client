import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaRegEdit, FaTimes } from "react-icons/fa";


const MyToys = () => {
    const [myToys, setMyToys] = useState([]);

    const { user } = useContext(AuthContext);
    const { email } = user;
    console.log(email)
    useEffect(() => {
        fetch(`http://localhost:5000/toys?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, [email])

    const handleDelete = (id) =>{
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                const remaining = myToys.filter(toy => toy._id !== id);
                setMyToys(remaining);
            }
        })
    }


    return (
        <div className="overflow-x-auto w-full md:p-4">
            <h3 className="text-3xl font-bold text-purple-700 text-center my-4">My Toys</h3>
            <table className="table table-zebra w-full ">
                {/* head */}
                <thead>
                    <tr>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        myToys.map(toy => <tr key={toy._id}>
                            <td>{toy.sellerName}</td>
                            <td>{toy.toyName}</td>
                            <td>{toy.subCategory}</td>
                            <td>${toy.price}</td>
                            <td>{toy.availableQuantity}</td>
                            <td>
                                <div className="flex space-x-2">
                                    <button className="btn btn-circle bg-amber-500 hover:bg-amber-600 border-none text-xl"><FaRegEdit /></button>
                                    <button onClick={()=> handleDelete(toy._id)} className="btn btn-circle bg-red-500 hover:bg-red-600 border-none text-xl"><FaTimes /></button>
                                </div>
                            </td>
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
                        <th>Actions</th>
                    </tr>
                </tfoot>

            </table>
        </div>
    );
};

export default MyToys;