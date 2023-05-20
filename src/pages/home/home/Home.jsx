import { useEffect, useState } from "react";
import { FaBookmark, FaCartPlus, FaChevronLeft, FaChevronRight, FaRegBookmark } from "react-icons/fa";


const Home = () => {

    const [toys, setToys] = useState([]);
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
            img: 'https://shorturl.at/hjTVY'
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

    const [currentIndex, setCurrentIndex] = useState(0);
    // setInterval(()=> {
    //     let newIndex = currentIndex + 1;
    //     if(newIndex > 3){
    //         // return setCurrentIndex(0)
    //         newIndex = 0;
    //     }
    //     setCurrentIndex(newIndex);
    // },3000)
    return (
        <main>
            <header className="h-screen relative">
                <div style={{ backgroundImage: `url(${sliders[currentIndex].img})` }} className="w-full h-full bg-center bg-cover duration-500">
                </div>
                <div className="flex absolute bottom-5  left-[40vw] justify-center py-2 gap-4">
                    {
                        sliders.map((slider, i) => (
                            <div key={i} onClick={() => setCurrentIndex(i)} className={`h-5 w-5 rounded-full  ${currentIndex === i ? 'bg-green-600' : 'bg-green-300'}`} ></div>
                        ))
                    }
                </div>
            </header>

            {/* Gallery Section*/}
            <section className="md:h-[80vh] ">
                <div className="font-bold border-l-8 border-purple-700 my-8 ml-8 pl-4">
                    <h3 className="text-3xl ">Toys Gallery</h3>
                    <p>We design toys not just for kids but with kids</p>
                </div>
                <div className="relative flex items-center">
                    <FaChevronLeft onClick={slideLeft} className="text-3xl cursor-pointer opacity-50 hover:opacity-100 duration-300" />
                    <div id="slider" className="h-full w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide space-x-5">
                        {
                            toys.map(toy => <div className="w-1/2 inline-block cursor-pointer relative" key={toy._id}>
                                <img src={toy.photo} alt="" className="" />
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
        </main>
    );
};

export default Home;