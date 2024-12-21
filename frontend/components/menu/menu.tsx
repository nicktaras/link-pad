import { Button } from "../ui/button"
import { Input } from "../ui/input"

export const Menu = () => {
    return <div className="flex min-h-screen flex-col flex flex-col justify-between rounded-lg shadow-lg p-6 bg-white z-10 absolute sm:absolute min-w-[360px] w-[95%] sm:w-[360px] md:w-[360px] md:absolute lg:relative">
        <div className="flex flex-col">
            <div className="">
                <div className="flex justify-between items-center">
                    <h1
                        style={{ fontWeight: 300 }}
                        className="text-xl text-logo-gray font-afacad"
                    >
                        Cloud Found
                    </h1>
                    <button className="absolute cursor rounded-full w-[30px] h-[30px] m-4 p-1 text-white bg-black text-center font-karla right-0 border-[1px] border-[#ffffff] hover:bg-white hover:text-black flex items-center justify-center block lg:hidden">
                        <p>X</p>
                    </button>
                </div>
                <Input
                    placeholder="Search"
                    className="bg-[#EAEBEF] text-sm text-black w-full my-6 rounded-md shadow-sm"
                />
                <div className="mt-4 mb-8">
                    <div className="text-[#2F465C] pt-4 flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="font-afacad text-lg">Categories</div>
                        </div>
                        <Button className="bg-[#EAEBEF] w-8 h-8 text-black text-md font-sans font-light hover:bg-[#d4d4d5] transition-colors">
                            +
                        </Button>
                    </div>
                    {["Hobbies", "Music Production", "3D Modeling", "Work"].map(
                        (category, index) => (
                            <div
                                key={index}
                                className="text-[#2F465C] pt-4 pl-1 flex justify-between items-center"
                            >
                                <div className="flex items-center">
                                    <div className="relative top-[-3px] mr-3 w-[12px] h-[12px] border-r-[1.5px] border-b-[1.5px] border-[#2F465C] rotate-45"></div>
                                    <div className="font-afacad text-lg">{category}</div>
                                </div>
                                <Button className="bg-[#EAEBEF] w-8 h-8 text-black text-md font-sans font-light hover:bg-[#d4d4d5] transition-colors">
                                    +
                                </Button>
                            </div>
                        )
                    )}
                    <div className="text-[#2F465C] pt-4 pl-8 flex items-center">
                        <div className="font-afacad text-lg">Blender.org</div>
                    </div>
                </div>
                <div className="py-5 border-b-2 border-t-2 border-[#E4E4E7]">
                    {["New team", "Favourites"].map((navItem, index) => (
                        <div
                            key={index}
                            className="text-[#2F465C] py-2 flex justify-between items-center"
                        >
                            <div className="flex items-center">
                                <div className="font-afacad text-lg">{navItem}</div>
                            </div>
                            {navItem === "New team" && (
                                <Button className="bg-[#EAEBEF] w-8 h-8 text-black text-md font-sans font-light hover:bg-[#d4d4d5] transition-colors">
                                    +
                                </Button>
                            )}
                            {navItem !== "New team" && (
                                <Button className="w-8 bg-[#EAEBEF] p-2 h-8 text-black text-md font-karla font-light hover:bg-[#d4d4d5] transition-colors">
                                    <svg
                                        className="w-[27px]"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 100 100"
                                    >
                                        <g
                                            transform="matrix(5.58548,0,0,4.68706,-3320.62,-17559.4)"
                                            fill="rgb(0,0,0)"
                                        >
                                            <path d="M603.461,3750.57C601.659,3748.07 598.851,3748.33 597.365,3749.97C595.771,3751.72 595.617,3755.22 597.209,3758.73C598.24,3761.15 600.859,3763.6 603.061,3765.21C603.306,3765.39 603.616,3765.39 603.861,3765.21C606.064,3763.59 608.685,3761.14 609.717,3758.72C611.305,3755.22 611.15,3751.72 609.557,3749.97C608.07,3748.33 605.263,3748.07 603.461,3750.57L603.461,3750.57ZM603.461,3752.17C604.855,3749.1 607.644,3749.1 609.039,3750.64C610.434,3752.17 610.434,3755.24 609.039,3758.3C608.063,3760.6 605.553,3762.9 603.461,3764.43C601.369,3762.9 598.859,3760.6 597.883,3758.3C596.488,3755.24 596.488,3752.17 597.883,3750.64C599.277,3749.1 602.066,3749.1 603.461,3752.17Z" />
                                        </g>
                                    </svg>
                                </Button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between mt-8 flex-shrin">
                <div className="flex items-center">
                    <div className="text-[#2F465C] flex justify-between items-center font-afacad text-lg">
                        Account settings
                    </div>
                </div>
                <Button className="w-8 bg-[#EAEBEF] p-2 h-8 text-black text-md font-karla font-light hover:bg-[#d4d4d5] transition-colors">
                    <svg style={{ transform: "scale(2.2)" }} viewBox="0 0 700 700">
                        <path d="m333.46 332.87c-64.789 7.0547-114.83 55.188-114.83 113.16 0 17.504 4.5508 34.094 12.684 48.93 0.48828 0.91406 1.4258 1.4492 2.4414 1.4492h232.49c1.0156 0 1.9492-0.53516 2.4375-1.4492 8.1367-14.836 12.691-31.426 12.691-48.93 0-58.125-50.285-106.33-115.29-113.23 28.309-7.2852 49.246-32.992 49.246-63.578 0-36.23-29.418-65.637-65.656-65.637-36.234 0-65.652 29.406-65.652 65.637 0 30.664 21.035 56.406 49.438 63.652zm-98.047 157.97c-7.207-13.656-11.227-28.836-11.227-44.812 0-59.992 56.477-108.51 125.81-108.51 69.332 0 125.81 48.516 125.81 108.51 0 15.977-4.0195 31.156-11.223 44.812h-229.17zm114.26-281.7c33.168 0 60.094 26.926 60.094 60.07 0 33.18-26.926 60.105-60.094 60.105-33.164 0-60.09-26.926-60.09-60.105 0-33.145 26.926-60.07 60.09-60.07z" fill-rule="evenodd" />
                    </svg>
                </Button>
            </div>
        </div>
    </div>
}