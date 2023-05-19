import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const toy = useLoaderData();
    console.log(toy);
    // picture, toy name, seller name, seller email, price, rating, available quantity, and detail description
    const {availableQuantity, photo, price, rating, sellerEmail, sellerName, subCategory, toyDescription, toyName}=toy;
    return (
        <div className="md:p-4 md:my-8 w-1/2 mx-auto space-y-3 border-2 border-purple-700 bg-purple-100 rounded-lg ">
            <img src={photo} alt="" className="w-full mx-auto rounded-lg"/>
            <h3 className="text-2xl font-bold"> {toyName}</h3>
            <h4 className="text-xl">Seller: {sellerName}</h4>
            <p>Seller Email: {sellerEmail}</p>
            <p><span className="font-bold">Price:</span> ${price}</p>
            <p><span className="font-bold">Rating:</span> {rating}</p>
            <p><span className="font-bold">Available:</span> {availableQuantity}</p>
            <p><span className="font-bold">Sub-Category:</span> {subCategory}</p>
            <p><span className="font-bold">Description:</span> {toyDescription}</p>
        </div>
    );
};

export default ToyDetails;