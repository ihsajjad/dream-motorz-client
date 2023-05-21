import { FaRegEdit, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const MyToy = ({ toy, handleDelete }) => {
    const { _id, sellerName, toyName, subCategory, price, availableQuantity } = toy;
    
    useTitle(toyName);

    return (
        <tr>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>${price}</td>
            <td>{availableQuantity}</td>
            <td>
                <div className="flex space-x-2">
                    <Link to={`/update-toy/${_id}`}>
                        <button className="btn btn-circle bg-amber-500 hover:bg-amber-600 border-none text-xl"><FaRegEdit /></button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle bg-red-500 hover:bg-red-600 border-none text-xl"><FaTimes /></button>
                </div>
            </td>
        </tr>
    );
};

export default MyToy;