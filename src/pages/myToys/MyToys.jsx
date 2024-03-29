import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToy from "./MyToy";
import useTitle from "../../hooks/useTitle";
import { ToastContext } from "../../shared/toast/ToastProvider";
import Swal from "sweetalert2";


const MyToys = () => {
    const [myToys, setMyToys] = useState([]);
    const { handleToast } = useContext(ToastContext);

    const { user } = useContext(AuthContext);
    const { email } = user;

    useTitle('My Toys');


    useEffect(() => {
        fetch(`https://dream-motorz-server.vercel.app/toys?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, [email])

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://dream-motorz-server.vercel.app/products/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = myToys.filter(toy => toy._id !== id);
                            setMyToys(remaining);
                        }
                    })

              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
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
                        myToys.map(toy => <MyToy
                            key={toy._id}
                            toy={toy}
                            handleDelete={handleDelete}
                        ></MyToy>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;