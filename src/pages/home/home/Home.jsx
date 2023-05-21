import { useEffect, useState } from "react";
import { FaCartPlus, FaChevronLeft, FaChevronRight, FaRegBookmark, FaStar } from "react-icons/fa";
import useTitle from "../../../hooks/useTitle";
import ShopByCategory from "../shopByCategory/ShopByCategory";
import CustomerLoves from "../CustomerLoves";


const Home = () => {
    const [toys, setToys] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeTab, setActiveTab] = useState(0);
    const [visitedSubCategory, setVisitedSubCategory] = useState(null);
    const [shopByCategories, setShopByCategories] = useState([]);

    useTitle('DMotorz');

    useEffect(() => {
        fetch('https://dream-motorz-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setToys(data));
    }, [])

    const slideLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const sliders = [
        {
            img: 'https://images.unsplash.com/photo-1597670250484-0e9aff7f8804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
        },
        {
            img: 'https://shorturl.at/crEJY'
        },
        {
            img: 'https://shorturl.at/agzMV'
        },
        {
            img: 'https://shorturl.at/CJUW2'
        }
    ];

    

    const categories = [
        {
            title: 'Cars',
            subCategories: ['Sports Cars', 'Classic Cars', 'Remote-controlled Cars'],
        },
        {
            title: 'Construction',
            subCategories: ['Mighty Excavator', 'Turbo Bulldozer', 'Road Roller Titan', 'Dump Truck Hero', 'Loader Master'],
        },
        {
            title: 'Truck',
            subCategories: ['Thunder Hauler', 'Blaze Runner', 'Titan Trailblazer', 'Mega Mover', 'Turbo Towing Truck', 'Trail King'],
        },
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const handleSubCategoryClick = (subCategory) => {
        setVisitedSubCategory(subCategory);
        const keywords = subCategory.split(' ');
        let category = '';
        for(const keyword of keywords){
            category = category + keyword;
        }
        console.log(category);

        fetch(`https://dream-motorz-server-ihsajjad.vercel.app/toys?category=${category}`)
        .then(res => res.json())
        .then(data => setShopByCategories(data));
      };

    return (
        <main>
            <header className="h-screen relative">
                <div style={{ backgroundImage: `url(${sliders[currentIndex].img})` }} className="w-full h-full bg-center bg-cover duration-500">
                </div>
                <div className="flex absolute bottom-5  left-[40vw] justify-center py-2 gap-4">
                    {
                        sliders.map((slider, i) => (
                            <div key={i} onClick={() => setCurrentIndex(i)} className={`h-5 w-5 rounded-full bg-white ${currentIndex === i ? 'opacity-100' : 'opacity-50'}`} ></div>
                        ))
                    }
                </div>
            </header>

            {/* Shop by category */}
            <section className="min-h-screen md:py-12">
                <div className="font-bold border-l-8 border-purple-700 my-8 ml-8 pl-4">
                    <h3 className="text-3xl ">Shop By Category</h3>
                </div>
                <div className="flex lg:flex-row flex-col lg:items-start justify-center items-center">
                    <div className="p-4 lg:w-3/12">
                        <div className="flex space-x-4">
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    className={`p-2 ${activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                        }`}
                                    onClick={() => handleTabClick(index)}
                                >
                                    {category.title}
                                </button>
                            ))}
                        </div>

                        <div className="mt-4">
                            {categories[activeTab].subCategories.map((subCategory, index) => (
                                <div
                                    key={index}
                                    className={`p-2 ${visitedSubCategory === subCategory
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-300'
                                        }`}
                                    onClick={() => handleSubCategoryClick(subCategory)}
                                >
                                    {subCategory}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-9/12 grid md:grid-cols-2 grid-cols-1 gap-5 lg:px-8">
                        
                        {
                            shopByCategories.map(shopByCategory => <ShopByCategory key={shopByCategory._id} shopByCategory={shopByCategory}
                            ></ShopByCategory>)
                        }
                    </div>
                </div>
            </section>

            {/* Gallery Section*/}
            <section className=" bg-[#F9EFF2] py-12">
                <div className="font-bold border-l-8 border-purple-700 mb-6 ml-8 pl-4">
                    <h3 className="text-3xl ">Toys Gallery</h3>
                    <p>We design toys not just for kids but with kids</p>
                </div>
                <div className="relative flex items-center">
                    <FaChevronLeft onClick={slideLeft} className="text-3xl cursor-pointer opacity-50 hover:opacity-100 duration-300" />
                    <div id="slider" className="h-full w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide space-x-5">
                        {
                            toys.map(toy => <div className="w-1/2 inline-block cursor-pointer relative" key={toy._id}>
                                <img src={toy.photo} alt="" className="h-[60vh] w-full" />
                                <div className="w-full h-full bg-opacity-50 absolute top-0 bg-purple-200 flex justify-between flex-col items-center text-2xl font-bold py-8 opacity-0 hover:opacity-100 duration-300">
                                    <p >Price: ${toy.price}</p>
                                    <div className="flex gap-2">
                                        <FaCartPlus title="Add to Cart" />
                                        <FaRegBookmark title="Add to Favorite" />
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                    <FaChevronRight onClick={slideRight} className="text-3xl cursor-pointer opacity-50 hover:opacity-100 duration-300" />
                </div>
            </section>

            {/* Customer loves section */}
            <section className="py-12">
                <div className="font-bold border-l-8 border-purple-700 mb-8 ml-8 pl-4">
                    <h3 className="text-3xl ">Customer Loves</h3>
                    <p>nothing</p>
                </div>
                <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-12 gap-5">
                    {
                        toys.slice(0,6).map(toy => <CustomerLoves key={toy._id} toy={toy}></CustomerLoves>)
                    }
                </div>
            </section>


            {/* Customer say section */}
            <section className="py-12">
                <div className="font-bold border-l-8 border-purple-700 mb-8 ml-8 pl-4">
                    <h3 className="text-3xl ">Customer Says</h3>
                    <p>nothing</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-12 md:px-28">
                    {/* Card 1 */}
                    <div className="border-2 rounded-lg p-5 flex flex-col items-center space-y-3 text-center">
                        <img src="https://shorturl.at/nwO17" alt="" className="h-20 w-20 rounded-full border-2 border-purple-500"/>
                        <h4>Sarah</h4>
                        <p>Great toy website! Amazing selection, easy ordering, fast delivery. Highly recommended! Kids love their new toys!</p>
                        <div className="flex gap-1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="border-2 rounded-lg p-5 flex flex-col items-center space-y-3 text-center">
                        <img src="https://shorturl.at/brIT7" alt="" className="h-20 w-20 rounded-full border-2 border-purple-500"/>
                        <h4>Sokina</h4>
                        <p>Fantastic toy shopping experience! Wide range of toys, smooth checkout, prompt delivery. Great customer service!</p>
                        <div className="flex gap-1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="border-2 rounded-lg p-5 flex flex-col items-center space-y-3 text-center">
                        <img src="https://shorturl.at/aILUZ" alt="" className="h-20 w-20 rounded-full border-2 border-purple-500"/>
                        <h4>Emily</h4>
                        <p>Impressed with this toy website! Educational toys, detailed descriptions, durable products. My go-to for toys online!</p>
                        <div className="flex gap-1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;