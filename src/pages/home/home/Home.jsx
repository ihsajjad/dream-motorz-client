

const Home = () => {
    return (
        <main>
            <header className="h-screen relative">
                <div className="carousel w-full">
                    <div id="item1" className="h-screen carousel-item w-full">
                        <img src="https://shorturl.at/hjTVY" className="h-full w-full"/>
                    </div>
                    <div id="item2" className="carousel-item w-full h-screen">
                        <img src="https://shorturl.at/crEJY" className="h-full w-full" />
                    </div>
                    <div id="item3" className="h-screen carousel-item w-full">
                        <img src="https://shorturl.at/agzMV" className="h-full w-full" />
                    </div>
                    <div id="item4" className="h-screen carousel-item w-full">
                        <img src="https://shorturl.at/CJUW2" className="h-full w-full" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2 absolute bottom-0">
                    <a href="#item1" className="h-4 w-4 bg-white rounded-full"></a>
                    <a href="#item2" className="h-4 w-4 bg-white rounded-full"></a>
                    <a href="#item3" className="h-4 w-4 bg-white rounded-full"></a>
                    <a href="#item4" className="h-4 w-4 bg-white rounded-full"></a>
                </div>
            </header>

        </main>
    );
};

export default Home;