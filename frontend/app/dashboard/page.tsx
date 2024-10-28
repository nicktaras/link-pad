
"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";

export default function Home() {

  const [title, setTitle] = useState("");
  const [subTitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");

  const titleRef = useRef<HTMLTextAreaElement>(null);
  const subtitleRef = useRef<HTMLTextAreaElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const autoResize = (ref: React.RefObject<HTMLTextAreaElement>) => {
    const textarea = ref.current;
    if (!textarea) return;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  
  const updateTitle = (textEntry:string) => {
    setTitle(textEntry);
    autoResize(titleRef);
  }
  const updateSubtitle = (textEntry:string) => {
    setSubtitle(textEntry);
    autoResize(subtitleRef);
  }
  const updateDescription = (textEntry:string) => {
    setDescription(textEntry);
    autoResize(descriptionRef);
  }

  useEffect(() => {
    autoResize(titleRef);
    autoResize(subtitleRef);
    autoResize(descriptionRef);

    const handleResize = () => {
      autoResize(titleRef);
      autoResize(subtitleRef);
      autoResize(descriptionRef);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="min-h-screen flex">
      <div className="flex min-h-screen flex-col flex flex-col justify-between rounded-lg shadow-lg p-6 bg-white z-10 absolute sm:absolute min-w-[360px] w-[95%] sm:w-[360px] md:w-[360px] md:absolute lg:relative">
        <div className="flex flex-col">
          <div className="">
            <div className="flex justify-between items-center">
            <h1 style={{ fontWeight: 300 }} className="text-xl text-logo-gray font-afacad">
              Cloud Found
            </h1>
            <button className="absolute cursor rounded-full w-[30px] h-[30px] m-4 p-1 text-white bg-black text-center font-karla right-0 border-[1px] border-[#ffffff] hover:bg-white hover:text-black flex items-center justify-center block lg:hidden"><p>X</p></button>
            </div>
            <Input placeholder="Search" className="bg-[#EAEBEF] text-black w-full my-6 rounded-md shadow-sm" />
            <div className="mt-4 mb-8">
              <div className="text-[#2F465C] pt-4 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="font-afacad text-lg">Categories</div>
                </div>
                <Button className="bg-[#EAEBEF] w-8 h-8 text-black text-md font-sans font-light hover:bg-[#d4d4d5] transition-colors">+</Button>
              </div>
              {["Hobbies", "Music Production", "3D Modeling", "Work"].map((category, index) => (
                <div key={index} className="text-[#2F465C] pt-4 pl-1 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="relative top-[-3px] mr-3 w-[12px] h-[12px] border-r-[1.5px] border-b-[1.5px] border-[#2F465C] rotate-45"></div>
                    <div className="font-afacad text-lg">{category}</div>
                  </div>
                  <Button className="bg-[#EAEBEF] w-8 h-8 text-black text-md font-sans font-light hover:bg-[#d4d4d5] transition-colors">+</Button>
                </div>
              ))}
              <div className="text-[#2F465C] pt-4 pl-8 flex items-center">
                <div className="font-afacad text-lg">Blender.org</div>
              </div>
            </div>
            <div className="mt-4 mb- py-4 border-b-2 border-t-2 border-[#E4E4E7]">
              {["New team", "Favourites"].map((navItem, index) => (
                <div key={index} className="text-[#2F465C] py-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="font-afacad text-lg">{navItem}</div>
                  </div>
                  {navItem === "New team" && (
                    <Button className="bg-[#EAEBEF] w-8 h-8 text-black text-md font-sans font-light hover:bg-[#d4d4d5] transition-colors">+</Button>
                  )}
                  {navItem !== "New team" && (
                    <Button className="bg-[#EAEBEF] w-8 h-8 text-black text-md font-sans font-light text-xl hover:bg-[#d4d4d5] transition-colors">›</Button>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between my-4 flex-shrin">
            <div className="flex items-center">
              <div className="text-[#2F465C] py-4 flex justify-between items-center font-afacad text-lg">Settings</div>
            </div>
            <div className="w-[12px]">
              <svg width="100%" height="100%" viewBox="0 0 100 100" version="1.1">
                <g transform="matrix(2.40454,0,0,2.40454,-470.378,-2289.38)" fill="#2F465C">
                  <path d="M219.564,953.892C219.444,953.31 218.959,952.873 218.367,952.816C217.069,952.69 215.761,952.69 214.463,952.816C213.871,952.873 213.386,953.31 213.266,953.892L212.851,955.915C212.228,956.046 211.612,956.211 211.007,956.409C211.007,956.409 209.636,954.865 209.636,954.865C209.241,954.42 208.603,954.285 208.061,954.531C206.874,955.071 205.742,955.725 204.681,956.483C204.197,956.829 203.995,957.45 204.182,958.014L204.834,959.973C204.36,960.398 203.909,960.849 203.484,961.323C203.484,961.323 201.525,960.671 201.525,960.671C200.961,960.484 200.34,960.686 199.994,961.169C199.236,962.231 198.582,963.363 198.042,964.55C197.796,965.092 197.931,965.73 198.376,966.125L199.92,967.496C199.722,968.101 199.557,968.717 199.426,969.341C199.426,969.34 197.403,969.755 197.403,969.755C196.821,969.875 196.384,970.36 196.327,970.952C196.201,972.25 196.201,973.558 196.327,974.856C196.384,975.448 196.821,975.933 197.403,976.053L199.426,976.468C199.557,977.091 199.722,977.707 199.92,978.313C199.92,978.312 198.376,979.683 198.376,979.683C197.931,980.078 197.796,980.716 198.042,981.258C198.582,982.445 199.236,983.577 199.994,984.639C200.34,985.122 200.961,985.324 201.525,985.137L203.484,984.485C203.909,984.959 204.36,985.41 204.835,985.835C204.834,985.835 204.182,987.794 204.182,987.794C203.995,988.359 204.197,988.979 204.681,989.325C205.742,990.083 206.874,990.737 208.061,991.277C208.603,991.523 209.241,991.388 209.636,990.943L211.007,989.399C211.612,989.597 212.228,989.762 212.852,989.893C212.851,989.893 213.266,991.916 213.266,991.916C213.386,992.498 213.871,992.935 214.463,992.992C215.761,993.118 217.069,993.118 218.367,992.992C218.959,992.935 219.444,992.498 219.564,991.916L219.979,989.893C220.602,989.762 221.218,989.597 221.824,989.399C221.823,989.399 223.194,990.943 223.194,990.943C223.589,991.388 224.227,991.523 224.769,991.277C225.956,990.737 227.088,990.083 228.15,989.325C228.633,988.979 228.835,988.359 228.648,987.794L227.996,985.835C228.47,985.41 228.921,984.959 229.346,984.485C229.346,984.485 231.305,985.137 231.305,985.137C231.87,985.324 232.49,985.122 232.836,984.639C233.594,983.577 234.248,982.445 234.788,981.258C235.034,980.716 234.899,980.078 234.454,979.683L232.91,978.312C233.108,977.707 233.273,977.091 233.404,976.467C233.404,976.468 235.427,976.053 235.427,976.053C236.009,975.933 236.446,975.448 236.503,974.856C236.629,973.558 236.629,972.25 236.503,970.952C236.446,970.36 236.009,969.875 235.427,969.755L233.404,969.34C233.273,968.717 233.108,968.101 232.91,967.496C232.91,967.496 234.454,966.125 234.454,966.125C234.899,965.73 235.034,965.092 234.788,964.55C234.248,963.363 233.594,962.231 232.836,961.169C232.49,960.686 231.87,960.484 231.305,960.671L229.346,961.323C228.921,960.849 228.47,960.398 227.996,959.973C227.996,959.973 228.648,958.014 228.648,958.014C228.835,957.45 228.633,956.829 228.15,956.483C227.088,955.725 225.956,955.071 224.769,954.531C224.227,954.285 223.589,954.42 223.194,954.865L221.823,956.409C221.218,956.211 220.602,956.046 219.979,955.915C219.979,955.915 219.564,953.892 219.564,953.892ZM217.115,955.447L217.508,957.358C217.622,957.913 218.07,958.339 218.631,958.425C219.693,958.588 220.734,958.867 221.736,959.257C222.264,959.463 222.865,959.318 223.242,958.894L224.537,957.435C224.951,957.652 225.355,957.886 225.75,958.135C225.75,958.136 225.135,959.987 225.135,959.987C224.956,960.525 225.131,961.118 225.573,961.473C226.412,962.145 227.174,962.907 227.846,963.746C228.201,964.188 228.794,964.364 229.332,964.185L231.184,963.569C231.433,963.964 231.667,964.368 231.884,964.781C231.884,964.782 230.425,966.077 230.425,966.077C230.001,966.454 229.856,967.055 230.062,967.583C230.452,968.585 230.731,969.626 230.894,970.688C230.98,971.249 231.406,971.697 231.961,971.811L233.873,972.204C233.891,972.671 233.891,973.137 233.873,973.604C233.873,973.604 231.961,973.997 231.961,973.997C231.406,974.111 230.98,974.559 230.894,975.12C230.731,976.182 230.452,977.223 230.062,978.225C229.856,978.753 230.001,979.354 230.425,979.731L231.884,981.026C231.667,981.44 231.433,981.844 231.184,982.239C231.184,982.239 229.332,981.623 229.332,981.623C228.794,981.445 228.201,981.62 227.846,982.062C227.174,982.901 226.412,983.663 225.573,984.335C225.131,984.69 224.956,985.283 225.135,985.821L225.75,987.673C225.355,987.922 224.951,988.156 224.538,988.373C224.537,988.373 223.242,986.914 223.242,986.914C222.865,986.49 222.264,986.345 221.736,986.551C220.734,986.941 219.693,987.22 218.631,987.383C218.07,987.469 217.622,987.895 217.508,988.45L217.115,990.361C216.648,990.38 216.182,990.38 215.715,990.362C215.715,990.361 215.322,988.45 215.322,988.45C215.208,987.895 214.76,987.469 214.2,987.383C213.137,987.22 212.096,986.941 211.094,986.551C210.566,986.345 209.965,986.49 209.588,986.914L208.293,988.373C207.879,988.156 207.475,987.922 207.08,987.673C207.08,987.673 207.696,985.821 207.696,985.821C207.875,985.283 207.7,984.69 207.257,984.335C206.418,983.663 205.656,982.901 204.984,982.062C204.629,981.62 204.036,981.445 203.498,981.623L201.647,982.239C201.397,981.844 201.163,981.44 200.947,981.027C200.946,981.026 202.405,979.731 202.405,979.731C202.829,979.354 202.974,978.753 202.768,978.225C202.378,977.223 202.099,976.182 201.936,975.12C201.85,974.559 201.425,974.111 200.869,973.997L198.958,973.604C198.939,973.137 198.939,972.671 198.958,972.204C198.958,972.204 200.869,971.811 200.869,971.811C201.425,971.697 201.85,971.249 201.936,970.688C202.099,969.626 202.378,968.585 202.768,967.583C202.974,967.055 202.829,966.454 202.405,966.077L200.946,964.782C201.164,964.368 201.397,963.964 201.646,963.569C201.647,963.569 203.498,964.185 203.498,964.185C204.036,964.364 204.629,964.188 204.984,963.746C205.656,962.907 206.418,962.145 207.257,961.473C207.7,961.118 207.875,960.525 207.696,959.987L207.08,958.136C207.475,957.886 207.879,957.652 208.292,957.436C208.293,957.435 209.588,958.894 209.588,958.894C209.965,959.318 210.566,959.463 211.094,959.257C212.096,958.867 213.137,958.588 214.2,958.425C214.76,958.339 215.208,957.913 215.322,957.358L215.715,955.447L217.115,955.447ZM216.415,965.474C212.315,965.474 208.985,968.803 208.985,972.904C208.985,977.005 212.315,980.334 216.415,980.334C220.516,980.334 223.845,977.005 223.845,972.904C223.845,968.803 220.516,965.474 216.415,965.474ZM216.415,968.186C219.019,968.186 221.134,970.3 221.134,972.904C221.134,975.508 219.019,977.622 216.415,977.622C213.811,977.622 211.697,975.508 211.697,972.904C211.697,970.3 213.811,968.186 216.415,968.186Z" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="m-16 font-Karla">
        <div>
          <div className="flex justify-between items-center mb-4 mt-2">
            {/* <input placeholder="Title" className="w-full text-5xl p-0 pr-2 focus:outline-none" value={title} onChange={(event) => { updateTitle(event.target.value) }} /> */}
            <textarea rows={1} ref={titleRef} placeholder="Title" style={{resize: 'none'}} className="text-5xl p-0 block pr-2 w-full focus:outline-none" value={title} onChange={(event) => { updateTitle(event.target.value) }} />
            <Button className="w-11 h-11 p-0 bg-[#E4E4E7] hover:bg-[#d4d4d5] rounded-full min-w-[44px] min-h-[44px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-black"
              >
                <circle cx="12" cy="5" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="12" cy="19" r="1.5" />
              </svg>
            </Button>
          </div>
          <textarea rows={1} ref={subtitleRef} placeholder="Subtitle" style={{resize: 'none'}} className="text-2xl pb-4 pr-2 block pr-2 w-full overflow-hidden focus:outline-none" value={subTitle} onChange={(event) => { updateSubtitle(event.target.value) }} />
          <textarea rows={1} ref={descriptionRef} placeholder="Description" style={{resize: 'none'}} className="block pr-2 w-full overflow-hidden focus:outline-none" value={description} onChange={(event) => { updateDescription(event.target.value) }} />
        </div>
        <div className="border-t-2 border-[#E4E4E7] mt-8">
          <div className="flex justify-between items-center my-8">
            <Input placeholder="Search Category" className="h-11 bg-[#EAEBEF] max-w-[300px] text-black my-6 mr-2 rounded-md shadow-sm" />
            <Button className="bg-[#EAEBEF] w-11 h-11 text-black text-md font-karla font-light hover:bg-[#d4d4d5] transition-colors rounded-full">+</Button>
          </div>
          <div className="justify-between pb-8 flex flex-wrap">
            {[1, 2, 3].map((navItem, index) => (
              <Card key={index} className="w-[100%] sm:w-[100%] md:w-[48%] lg:w-[48%] cursor-pointer w-full mb-9 rounded-lg overflow-hidden shadow-md transition transform hover:scale-105 hover:shadow-lg border-none">
                <div className="relative">
                  <div className="absolute rounded-full w-[30px] h-[30px] m-4 p-1 text-white bg-black text-center font-karla right-0 border-[1px] border-[#ffffff] hover:bg-white hover:text-black flex items-center justify-center"><p>X</p></div>
                  <img className="absolute rounded-full w-[30px] h-[30px] m-4 p-1 border-[1px] border-[#ffffff]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEjUlEQVRYhbWXX0xTdxTHP7e0BS3eysgFY9Za2MgIPkjIFqeLPkhIfHBmT5KQPcynEeODCe97GiGThBeDLyabPhND9Mlggg+LREtcJIaJA6Rhe2kbGm+hBW7be/bwK5WW/rnV7ZuctPeXc885v3PO79zvT8MZGoEvgJPAhfzv58AnQANgAsvAAvAUeA6sAdsO7VdEE9AH3AKWgB1AaogFLAJ3gfPA4Q9xrAEBYAz4G8g4cFwqOSAK/AKcyNt0hIZ85DP53dTruFSywGPgTN52TeffAq/zO/hY5/uz8TpvuygIreT/18CvQPfeos/n49KlSxw/frxi1CJCIpFgfX2dV69ekUwmyWQy5VSXgB+B3/OBFeEEKlVFOzcMQ2ZmZmRnZ6eibG9vy9bWliQSCZmbm5Pr169LS0tLpUzMoPqrCIdRzZItfckwDHny5InUg83NTRkfHxe/31/plIyhThjufABfAj/goEnS6TSLi4ukUqnCWnNzM8FgkLa2tsLz8PAw4XCY+/fvY9v2fhMe4HtgCvgD4BDqzJZtutIMLC0tyblz58QwjIJ0dHTIwMCAPHr0SLLZbEH33r174vP5ymUhg5otjW6gA/gKcNXaPUAul2NjY4N4PF5Yi8fjRCIRTNOkt7eX9vZ2ADo7O/F4POXMuIEBoNsFnAa6nDivBhHh7du3mKZZFKzIgWbfQwjocQHfoOry0eju7sYwjMJzOBxmd3e3knojcMENnKrHSUNDA7quc/To0cKa1+vl7Nmz3LhxA13XERGWl5d58OBBtQAATrqpM/3BYJDbt2+TTqcLARmGQVtbG83NzViWxYsXLxgbG+PZs2fVSsCe76pjtJ45YNu2LCwsyODgoOi6LpqmOflOHBw+HxqAiIhlWRKLxeTOnTvS1dVVMwg3kADed04NrK6uMjExQSwWK6z5/X6CwSD9/f309fVhGAZXr17F5/Nx7do13r17V8mcCTBXTwbC4bCEQqEiHZfLJV6vV9rb22VyclJs2xYREdM0ZWhoqFoG5l0o9vJRsG0by7KIRqNMTU0RjUYBOHLkCBcvXsTtdld6dcEFzAJVz0o9ME2Tra0tADRNo7W1Fa/XW041Azx1AX8Ckf/CuaZpBAKBomGUTqexLKuc+jLw3I0iCY+Bz3j/dawbuq7T29vLyMgIuq4DsLu7y8uXL8lms6XqNjAPrLlR6f8N+A74tJajUCjE6OgoyWSysNbU1MSxY8fo6ekhEAigaYpoRSIRpqeny5nZQDGvAm1vQpGEAyS03BzI5XJFstf1+wfS2tqaXLlyRTweT7nhc5MydD2AoksHKNns7OwBp6WSyWQklUpJPB6X6elp6e/vL+c8hyr3iT2n+2v+D/BzPpACKU2n0zx8+JA3b95ULU0ymWR1dZX5+XlWVlZIpVKlTAjgL+AnYL2SnQbgMv8fLb+Mw7vBGVSqqn4nHIqFKu15J873oKHqdBOIfWA2Mqhr3RiqrI6vZvtxOB/5XdTIdnJV20HNlluoi21TrZ06wSEUeT2NonCnUGTCj8pOAljJBzmLmq5LOBjx/wI2h34g730GlwAAAABJRU5ErkJggg=="></img>
                  <img className="w-full h-[200px] object-cover" src="https://assets-prd.ignimgs.com/2020/09/24/top25xboxgames-slideshow-1600967273461.jpg" />
                </div>
                <div className="p-4">
                  <a href="https://www.bloomberg.com" target="_blank" className="text-xl font-semibold hover:underline">Bloomberg</a>
                  <p className="py-4 text-sm text-gray-600">Bloomberg Business Offer — Subscriptions for only £115 for your first year. Sign up today for this exclusive offer. Sign up with Bloomberg today and take advantage of this £115 offer for your first year.</p>
                </div>
                <div className="flex justify-between px-4 pt-16 pb-4">
                  <Button className="w-[75px] bg-[#EAEBEF] rounded-full h-8 text-black text-md font-karla font-light hover:bg-[#d4d4d5] transition-colors">
                    <svg className="w-[27px]" width="100%" height="100%" viewBox="0 0 100 100">
                      <g transform="matrix(5.58548,0,0,4.68706,-3320.62,-17559.4)" fill="rgb(0,0,0)">
                        <path d="M603.461,3750.57C601.659,3748.07 598.851,3748.33 597.365,3749.97C595.771,3751.72 595.617,3755.22 597.209,3758.73C598.24,3761.15 600.859,3763.6 603.061,3765.21C603.306,3765.39 603.616,3765.39 603.861,3765.21C606.064,3763.59 608.685,3761.14 609.717,3758.72C611.305,3755.22 611.15,3751.72 609.557,3749.97C608.07,3748.33 605.263,3748.07 603.461,3750.57L603.461,3750.57ZM603.461,3752.17C604.855,3749.1 607.644,3749.1 609.039,3750.64C610.434,3752.17 610.434,3755.24 609.039,3758.3C608.063,3760.6 605.553,3762.9 603.461,3764.43C601.369,3762.9 598.859,3760.6 597.883,3758.3C596.488,3755.24 596.488,3752.17 597.883,3750.64C599.277,3749.1 602.066,3749.1 603.461,3752.17Z" />
                      </g>
                    </svg>
                  </Button>
                  <Button className="w-[75px] bg-[#EAEBEF] rounded-full h-8 text-black text-md font-karla font-light hover:bg-[#d4d4d5] transition-colors">
                    <svg
                      className="w-[18px]"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      strokeLinejoin="round"
                      strokeMiterlimit={2}
                    >
                      <g transform="matrix(1.40003,0,0,1.40003,-487.561,-4632.96)">
                        <path
                          d="M383.344,3317.73L365.295,3317.73C358.798,3317.73 353.523,3323 353.523,3329.5C353.523,3329.5 353.523,3363.03 353.523,3363.03C353.523,3369.52 358.798,3374.8 365.295,3374.8C365.295,3374.8 401.632,3374.8 401.632,3374.8C408.129,3374.8 413.404,3369.52 413.404,3363.03L413.404,3346.3L410.404,3346.3L410.404,3363.03C410.404,3367.87 406.473,3371.8 401.632,3371.8L365.295,3371.8C360.453,3371.8 356.523,3367.87 356.523,3363.03L356.523,3329.5C356.523,3324.66 360.453,3320.73 365.295,3320.73L383.344,3320.73L383.344,3317.73Z"
                          fill="rgb(0,0,0)"
                        />
                      </g>
                      <g transform="matrix(0.989972,0.989972,-0.989972,0.989972,3039.67,-3584.29)">
                        <path
                          d="M320.117,3351.4L320.118,3351.41L325.978,3364.89C326.206,3365.46 326.754,3365.83 327.364,3365.83C327.975,3365.83 328.525,3365.47 328.757,3364.9L333.331,3351.31C333.384,3351.18 333.417,3351.05 333.433,3350.92C333.549,3350.6 333.613,3350.25 333.613,3349.89L332.906,3312.69C332.906,3308.85 329.791,3305.74 325.955,3305.74C322.118,3305.74 319.003,3308.85 319.003,3312.69C319.003,3312.69 319.71,3349.89 319.71,3349.89C319.71,3350.44 319.859,3350.96 320.117,3351.4ZM329.44,3352.89L323.953,3352.89L327.381,3360.35L329.44,3352.89ZM322.71,3349.89L330.613,3349.89L329.906,3312.69C329.906,3310.51 328.135,3308.74 325.955,3308.74C323.774,3308.74 322.003,3310.51 322.003,3312.69L322.71,3349.89Z"
                          fill="rgb(0,0,0)"
                        />
                      </g>
                    </svg>
                  </Button>
                  <Button className="w-[75px] bg-[#EAEBEF] rounded-full h-8 text-black text-md font-karla font-light hover:bg-[#d4d4d5] transition-colors">
                    <svg className="w-[27px]" width="100%" height="100%" viewBox="0 0 100 100">
                      <path d="M88.706,11.525L67.578,11.525L67.578,17.025L82.086,17.025L48.055,51.055L51.945,54.945L85.975,20.914C85.975,20.914 85.975,36.171 85.975,36.171L91.475,36.171L91.475,14.275C91.475,13.163 90.805,12.16 89.777,11.735C89.431,11.591 89.067,11.523 88.706,11.525Z" fill="rgb(0,0,0)" />
                      <g transform="matrix(1.40003,0,0,1.40003,-487.561,-4632.96)" fill="rgb(93,93,93)">
                        <path d="M383.344,3317.73L365.295,3317.73C358.798,3317.73 353.523,3323 353.523,3329.5C353.523,3329.5 353.523,3363.03 353.523,3363.03C353.523,3369.52 358.798,3374.8 365.295,3374.8C365.295,3374.8 401.632,3374.8 401.632,3374.8C408.129,3374.8 413.404,3369.52 413.404,3363.03L413.404,3346.3L410.404,3346.3L410.404,3363.03C410.404,3367.87 406.473,3371.8 401.632,3371.8L365.295,3371.8C360.453,3371.8 356.523,3367.87 356.523,3363.03L356.523,3329.5C356.523,3324.66 360.453,3320.73 365.295,3320.73L383.344,3320.73L383.344,3317.73Z" />
                      </g>
                    </svg>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
