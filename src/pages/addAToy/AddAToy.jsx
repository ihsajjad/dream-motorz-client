import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Spinner from "../../shared/spinner/Spinner";


const AddAToy = () => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <Spinner />
    }
    const {displayName, email} = user;
    console.log(displayName, email);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the form data here
        
    };

    return (
        <div className="py-10">
            <form onSubmit={handleSubmit} className="md:w-3/4 mx-auto border-4 border-purple-400 border-dashed p-5 py-10 rounded-lg relative">
            <h2 className="text-3xl font-bold text-purple-700 bg-white text-center absolute -top-5 md:left-1/3 left-1/4 px-1">Add A New Toy</h2>
                <div className="grid md:grid-cols-2 md:gap-5">
                    <label className="custom-label">
                        Picture URL of the toy:
                        <input
                            type="url"
                            name="pictureUrl"
                            placeholder="Photo URL"
                            className="custom-input"
                        />
                    </label>

                    <label className="custom-label">
                        Toy&apos;s Name:
                        <input
                            type="text"
                            name="name"
                            placeholder="Toy's Name"
                            className="custom-input"
                        />
                    </label>

                    <label className="custom-label">
                        Seller Name:
                        <input
                            type="text"
                            name="sellerName"
                            defaultValue={displayName}
                            className="custom-input"
                        />
                    </label>

                    <label className="custom-label">
                        Seller Email:
                        <input
                            type="email"
                            name="sellerEmail"
                            defaultValue={email}
                            className="custom-input"
                        />
                    </label>

                    <label className="custom-label">
                        Sub-category:
                       <select name="sub-category" id="" className="custom-input">
                            <option value="car">Car</option>
                            <option value="excubator">Excubator</option>
                            <option value="osuk">Osuk</option>
                       </select>
                    </label>

                    <label className="custom-label">
                        Price:
                        <input
                            type="number"
                            name="price"
                            placeholder="$"
                            className="custom-input"
                        />
                    </label>

                    <label className="custom-label">
                        Rating:
                        <input
                            type="number"
                            name="rating"
                            placeholder="Rating"
                            className="custom-input"
                        />
                    </label>

                    <label className="custom-label">
                        Available Quantity:
                        <input
                            type="number"
                            name="availableQuantity"
                            placeholder="Available Quantity"
                            className="custom-input"
                        />
                    </label>

                </div>
                <label className="custom-label">
                    Detail Description:
                    <textarea
                        name="detailDescription"
                        className="custom-input"
                        placeholder="Write something about your toy..."
                    ></textarea>
                </label>

                <div className="text-center">
                <input
                    type="submit"
                    className="custom-btn"
                    value="Submit"
                />
                </div>
            </form>
        </div>
    );
};

export default AddAToy;