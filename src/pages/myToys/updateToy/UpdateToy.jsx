import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateToy = () => {
    const toy = useLoaderData();
    
    const {availableQuantity, photo, price, toyDescription, toyName, rating, _id}=toy;

    console.log(_id);
    

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const toyName = form.toyName.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const toyDescription = form.toyDescription.value;

        const updatedToy = {availableQuantity, photo, price, toyDescription, toyName, rating, subCategory};

        fetch(`https://dream-motorz-server.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Updated Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }

    return (
        <div className="py-10">
            <form onSubmit={handleUpdate} className="md:w-3/4 mx-auto border-4 border-purple-400 border-dashed p-5 rounded-lg">
                <h2 className="text-3xl font-bold text-purple-700 bg-white text-center mb-5">Update Toy</h2>
                <div className="grid md:grid-cols-2 md:gap-5">
                    <label className="custom-label">
                        Picture URL of the toy:
                        <input
                            type="url"
                            defaultValue={photo}
                            name="photo"
                            placeholder="Photo URL"
                            className="custom-input"
                        />
                    </label>

                    <label className="custom-label">
                        Toy&apos;s Name:
                        <input
                            type="text"
                            defaultValue={toyName}
                            name="toyName"
                            placeholder="Toy's Name"
                            className="custom-input"
                        />
                    </label>

                    <label className="custom-label">
                        Sub-category:
                        <select name="subCategory" id="" className="custom-input">
                            <option value="sportsCars">Sports Cars</option>
                            <option value="classicCars">Classic Cars</option>
                            <option value="remote-ControlledCars">Remote-Controlled Cars</option>
                            <option value="mightyExcavator">Mighty Excavator</option>
                            <option value="turboBulldozer">Turbo Bulldozer</option>
                            <option value="roadRollerTitan">Road Roller Titan</option>
                            <option value="dumpTruckHero">Dump Truck Hero</option>
                            <option value="loaderMaster">Loader Master</option>
                            <option value="thunderHauler">Thunder Hauler</option>
                            <option value="blazeRunner">Blaze Runner</option>
                            <option value="titanTrailblazer">Titan Trailblazer</option>
                            <option value="megaMover">Mega Mover</option>
                            <option value="turboTowingTruck">Turbo Towing Truck</option>
                            <option value="trailKing">Trail King</option>
                        </select>
                    </label>

                    <label className="custom-label">
                        Price:
                        <input
                            type="text"
                            defaultValue={price}
                            name="price"
                            placeholder="$"
                            className="custom-input"
                        />
                    </label>

                    <label className="custom-label">
                        Rating:
                        <input
                            type="text"
                            defaultValue={rating}
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
                            defaultValue={availableQuantity}
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
                        defaultValue={toyDescription}
                        placeholder="Write something about your toy..."
                    ></textarea>
                </label>

                <div className="text-center">
                    <input
                        type="submit"
                        className="custom-btn"
                        value="Update"
                    />
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;