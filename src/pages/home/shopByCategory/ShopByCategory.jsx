

const ShopByCategory = ({shopByCategory}) => {
    console.log(shopByCategory);
    const {photo, toyName, price, toyDescription, rating} = shopByCategory;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={photo} className="h-60 w-full"/></figure>
            <div className="card-body">
                <h2 className="card-title">{toyName}</h2>
                <p>Price: ${price}</p>
                <p>{toyDescription.slice(0, 120)}...</p>
                <hr className="border border-gray-600"/>
                <div className="card-actions justify-between items-center">
                    <span>Rating: {rating}</span>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ShopByCategory;