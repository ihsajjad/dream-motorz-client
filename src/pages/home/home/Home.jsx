

const Home = () => {
    return (
        <main>
            <header className="h-screen relative">
                <div className="carousel w-full">
                    <div id="item1" className="h-screen carousel-item w-full">
                        <img src="https://shorturl.at/hjTVY" className="h-full w-full"/>
                    </div>
                    <div id="item2" className="carousel-item w-full h-screen">
                        <img src="https://images.unsplash.com/photo-1587839871379-2d6c28071f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=918&q=80" className="h-full w-full" />
                    </div>
                    <div id="item3" className="h-screen carousel-item w-full">
                        <img src="https://images.unsplash.com/photo-1565174408946-a7a8c16a3933?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80" className="h-full w-full" />
                    </div>
                    <div id="item4" className="h-screen carousel-item w-full">
                        <img src="https://images.unsplash.com/photo-1511415518647-9e5da4fd803f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="h-full w-full" />
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