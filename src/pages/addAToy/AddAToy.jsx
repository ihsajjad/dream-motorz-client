import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Spinner from "../../shared/spinner/Spinner";


const AddAToy = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Spinner />
    }
    const { displayName, email } = user;

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const toyDescription = form.toyDescription.value;

        const newToy = {
            photo,
            toyName,
            sellerName,
            sellerEmail,
            subCategory,
            price,
            rating,
            availableQuantity,
            toyDescription
        };

        console.log(newToy);

        fetch('http://localhost:5000/products',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                alert('Toy is added successfully..')
            }
        });
    };

    return (
        <div className="py-10">
            <form onSubmit={handleSubmit} className="md:w-3/4 mx-auto border-4 border-purple-400 border-dashed p-5 py-10 rounded-lg relative">
                <h2 className="text-3xl font-bold text-purple-700 bg-white text-center absolute -top-5 md:left-1/3 left-1/4 px-1">Publish A New Toy</h2>
                <div className="grid md:grid-cols-2 md:gap-5">
                    <label className="custom-label">
                        Picture URL of the toy:
                        <input
                            type="url"
                            name="photo"
                            placeholder="Photo URL"
                            className="custom-input"
                        />
                    </label>

                    <label className="custom-label">
                        Toy&apos;s Name:
                        <input
                            type="text"
                            name="toyName"
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
                        <select name="subCategory" id="" className="custom-input">
                            <option value="racingCars">Racing Cars</option>
                            <option value="constructionVehicles">Construction Vehicles</option>
                            <option value="sportsCars">Sports Cars</option>
                            <option value="monsterTrucks">Monster Trucks</option>
                            <option value="remote-ControlledCars">Remote-Controlled Cars</option>
                            <option value="classicCars">Classic Cars</option>
                            <option value="emergencyVehicles">Emergency Vehicles</option>
                        </select>
                    </label>

                    <label className="custom-label">
                        Price:
                        <input
                            type="text"
                            name="price"
                            placeholder="$"
                            className="custom-input"
                        />
                    </label>

                    <label className="custom-label">
                        Rating:
                        <input
                            type="text"
                            name="rating"
                            placeholder="Rating"
                            className="custom-input"
                            max="5"
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
                    Toy Description:
                    <textarea
                        name="toyDescription"
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