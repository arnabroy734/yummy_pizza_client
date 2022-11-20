import { Link } from "react-router-dom";
import homepizza from "./home-pizza.png"

export default function () {
    return (
        <div className="background bg-color1 h-screen">
            <div className="homepage h-fit pt-20 flex flex-wrap justify-center md:justify-between">
                <img src={homepizza} className="my-10 px-4 self-center w-[500px] lg:w-[600px] xl:w-[700px] md:order-1"></img>
                <div className="home-description ml-4 text-center md:text-start h-fit self-center">
                    <p className="italic text-base xl:text-xl mb-4">Are you hungry?</p>
                    <p className=" text-5xl xl:text-7xl font-extrabold mb-4">Don't Wait!</p>
                    <button className="bg-color2 text-white text-base rounded-2xl p-2 mb-4">
                        <Link to="/menu">
                            Order Now
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}