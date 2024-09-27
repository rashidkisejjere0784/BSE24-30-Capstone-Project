import ps5 from "/images/ps5.png";
import pads from "/images/pads.png";
import blackBeats from "/images/black-beats.png";
import whiteDrone from "/images/white-drone.png";
import xperia from "/images/xperia.png"
import Discount from "@/components/Discount.tsx";
const BestDeals = ()=>{
    return (
        <>
            <section className="section my-8">
                <div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                            <h2 className="text-gray-900 font-extrabold text-2xl">Best Deals</h2>
                            <p className="text-sm text-black ml-4">Deals end in</p>
                            <div className="px-4 py-2 bg-warning-300 text-gray-900 text-base rounded-sm">
                                16d : 21hr : 77m : 23s
                            </div>
                        </div>
                        <div>
                            <a href="#" className="flex gap-4 text-secondary-500 items-center">
                                <span>Browse All Product</span>
                                <i className="fa-solid fa-arrow-right"/>
                            </a>
                        </div>
                    </div>
                    {/*        content*/}
                    <div className="my-6 text-wrap">
                        <div className="border-[.5px] border-gray-100 grid grid-cols-11 grid-rows-2">
                            <div className="col-span-3 row-span-2 p-4 relative">
                                <button
                                    className="block text-xs absolute left-4 top-[1rem] ml-auto z-10 bg-warning-400 text-gray-900 font-bold rounded-sm px-4 py-2">
                                    32% OFF
                                </button>
                                <button
                                    className="block text-xs absolute left-4 top-[3.5rem] ml-auto z-10 bg-danger-500 text-gray-00 font-bold rounded-sm px-4 py-2">
                                    HOT
                                </button>
                                <div className="text-left">
                                    <div className="w-[18.3rem] mx-auto h-[16.1]">
                                        <img
                                            src={ps5}
                                            alt="Playstation 5"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <div className="flex gap-2 items-center my-2">
                                            <div className="text-warning-500 flex gap-2">
                                                <i className="fa-solid fa-star"/>
                                                <i className="fa-solid fa-star"/>
                                                <i className="fa-solid fa-star"/>
                                                <i className="fa-solid fa-star"/>
                                                <i className="fa-solid fa-star"/>
                                            </div>
                                            <p className="text-gray-500">(52,677)</p>
                                        </div>
                                        <h3 className="text-gray-900 my-2 text-base font-medium">
                                            Xbox Series S-512GB SSD Console with Wireless Controller-EU
                                            Version...
                                        </h3>
                                        <Discount price={"$865.99"} discount={"$442.12"} discountPosition={"right"} />
                                        <p className="my-2 text-gray-600 text-sm">
                                            Game built using the Xbox Series X|s development kit showcase
                                            unparalleled load times, visuals
                                        </p>
                                        <div className="flex gap-2 items-center mt-4 text-sm">
                                            <div
                                                className="center-item text-gray-900 py-4 px-6 text-base bg-primary-100">
                                                <i className="fa-regular fa-heart"/>
                                            </div>
                                            <div className="text-gray-00 py-4 px-8 bg-primary-500">
                                                <i className="fa-brands fa-opencart mr-2"/> ADD TO CART
                                            </div>
                                            <div
                                                className="center-item text-gray-900 py-4 px-6 text-base bg-primary-100">
                                                <i className="fa-regular fa-eye"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*            Product 1*/}
                            <div className="border-[.5px] col-span-2 p-4 border-gray-100 relative text-wrap">
                                <button
                                    className="block absolute text-xs left-4 top-4 ml-auto z-10 bg-gray-400 text-gray-00 font-bold rounded-sm px-4 py-2">
                                    SOLD OUT
                                </button>
                                <div className="w-[13.3rem] h-[11.6rem] mx-auto">
                                    <img
                                        src={whiteDrone}
                                        alt="White Drone"
                                        className="w-full object-cover"
                                    />
                                </div>
                                <p className="text-sm">
                                    Bose Sport Earbuds-Wireless Earphones-Bluetooth In Ear...
                                </p>
                                <div className="mt-2 flex gap-2 items-center font-bold ">
                                    <p className="text-secondary-500">$2,300</p>
                                </div>
                            </div>
                            {/*            product 2*/}
                            <div className="border-[.5px] col-span-2 p-4 border-gray-100 relative text-wrap">
                                {/*              add deal button here*/}
                                <div className="w-[13.3rem] h-[11.6rem] mx-auto">
                                    <img
                                        src={xperia}
                                        alt="Xperia Phone"
                                        className="w-full object-cover"
                                    />
                                </div>
                                <p className="text-sm">Simple Mobile 4G LTE Prepaid Smartphone</p>
                                <div className="mt-2 flex gap-2 items-center font-bold ">
                                    {/*                Add ruled out cash here*/}
                                    <p className="text-secondary-500">$220</p>
                                </div>
                            </div>
                            {/*            Product 3*/}
                            <div className="border-[.5px] col-span-2 p-4 border-gray-100 relative text-wrap">
                                <button
                                    className="block text-xs absolute left-4 top-4 ml-auto z-10 bg-warning-400 text-gray-900 font-bold rounded-sm px-4 py-2">
                                    19% OFF
                                </button>
                                <div className="w-[13.3rem] h-[11.6rem] mx-auto">
                                    <img
                                        src={pads}
                                        alt="Game Pads"
                                        className="w-full object-cover"
                                    />
                                </div>
                                <p className="text-sm">
                                    4K UHD LED Smart TV with Chromecast Built-in
                                </p>
                                <div className="mt-2 flex gap-2 items-center font-bold ">
                                    <p className="text-gray-300 line-through font-medium">$865</p>
                                    <p className="text-secondary-500">$150</p>
                                </div>
                            </div>
                            {/*            Product 4*/}
                            <div className="border-[.5px] col-span-2 p-4 border-gray-100 relative text-wrap">
                                {/*              Add deal here*/}
                                <div className="w-[13.3rem] h-[11.6rem] mx-auto">
                                    <img
                                        src={blackBeats}
                                        alt="Black Beats"
                                        className="w-full object-cover"
                                    />
                                </div>
                                <p className="text-sm">
                                    Sony DSCHX8 High Zoom Point &amp; Shoot Camera
                                </p>
                                <div className="mt-2 flex gap-2 items-center font-bold ">
                                    {/*                Add discount price here*/}
                                    <p className="text-secondary-500">$1,200</p>
                                </div>
                            </div>
                            {/*            Product 5*/}
                            <div className="border-[.5px] col-span-2 p-4 border-gray-100 relative text-wrap">
                                <button
                                    className="block text-xs absolute left-4 top-4 ml-auto z-10 bg-warning-400 text-gray-900 font-bold rounded-sm px-4 py-2">
                                    19% OFF
                                </button>
                                <div className="w-[13.3rem] h-[11.6rem] mx-auto">
                                    <img
                                        src={pads}
                                        alt="Game Pads"
                                        className="w-full object-cover"
                                    />
                                </div>
                                <p className="text-sm">
                                    4K UHD LED Smart TV with Chromecast Built-in
                                </p>
                                <div className="mt-2 flex gap-2 items-center font-bold ">
                                    <p className="text-gray-300 line-through font-medium">$865</p>
                                    <p className="text-secondary-500">$150</p>
                                </div>
                            </div>
                            {/*            Product 6*/}
                            <div className="border-[.5px] col-span-2 p-4 border-gray-100 relative text-wrap">
                                {/*              Add deal here*/}
                                <div className="w-[13.3rem] h-[11.6rem] mx-auto">
                                    <img
                                        src={blackBeats}
                                        alt="Black Beats"
                                        className="w-full object-cover"
                                    />
                                </div>
                                <p className="text-sm">
                                    Sony DSCHX8 High Zoom Point &amp; Shoot Camera
                                </p>
                                <div className="mt-2 flex gap-2 items-center font-bold ">
                                    {/*                Add discount price here*/}
                                    <p className="text-secondary-500">$1,200</p>
                                </div>
                            </div>
                            {/*            Product 7*/}
                            <div className="border-[.5px] col-span-2 p-4 border-gray-100 relative text-wrap">
                                <button
                                    className="block absolute text-xs left-4 top-4 ml-auto z-10 bg-gray-400 text-gray-00 font-bold rounded-sm px-4 py-2">
                                    SOLD OUT
                                </button>
                                <div className="w-[13.3rem] h-[11.6rem] mx-auto">
                                    <img
                                        src={whiteDrone}
                                        alt="White Drone"
                                        className="w-full object-cover"
                                    />
                                </div>
                                <p className="text-sm">
                                    Bose Sport Earbuds-Wireless Earphones-Bluetooth In Ear...
                                </p>
                                <div className="mt-2 flex gap-2 items-center font-bold ">
                                    <p className="text-secondary-500">$2,300</p>
                                </div>
                            </div>
                            {/*            product 8*/}
                            <div className="border-[.5px] col-span-2 p-4 border-gray-100 relative text-wrap">
                                {/*              add deal button here*/}
                                <div className="w-[13.3rem] h-[11.6rem] mx-auto">
                                    <img
                                        src={xperia}
                                        alt="Xperia Phone"
                                        className="w-full object-cover"
                                    />
                                </div>
                                <p className="text-sm">Simple Mobile 4G LTE Prepaid Smartphone</p>
                                <div className="mt-2 flex gap-2 items-center font-bold ">
                                    {/*                Add ruled out cash here*/}
                                    <p className="text-secondary-500">$220</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default BestDeals