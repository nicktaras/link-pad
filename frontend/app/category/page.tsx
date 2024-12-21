"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { Menu } from "@/components/menu/menu";

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
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const updateTitle = (textEntry: string) => {
    setTitle(textEntry);
    autoResize(titleRef);
  };
  const updateSubtitle = (textEntry: string) => {
    setSubtitle(textEntry);
    autoResize(subtitleRef);
  };
  const updateDescription = (textEntry: string) => {
    setDescription(textEntry);
    autoResize(descriptionRef);
  };

  useEffect(() => {
    autoResize(titleRef);
    autoResize(subtitleRef);
    autoResize(descriptionRef);

    const handleResize = () => {
      autoResize(titleRef);
      autoResize(subtitleRef);
      autoResize(descriptionRef);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="min-h-screen flex">
      <Menu />
      <div className="m-16 font-Karla">
        <div>
          <div className="flex justify-between items-center mb-4 mt-2">
            <textarea
              rows={1}
              ref={titleRef}
              placeholder="Title"
              style={{ resize: "none" }}
              className="text-5xl p-0 block pr-2 w-full focus:outline-none"
              value={title}
              onChange={(event) => {
                updateTitle(event.target.value);
              }}
            />
            <Button className="w-11 h-11 p-0 bg-white border-[1px] border-solid border-[#9ca3af] hover:bg-white rounded-full min-w-[44px] min-h-[44px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#9ca3af]"
              >
                <circle cx="12" cy="5" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="12" cy="19" r="1.5" />
              </svg>
            </Button>
          </div>
          <textarea
            rows={1}
            ref={subtitleRef}
            placeholder="Subtitle"
            style={{ resize: "none" }}
            className="text-2xl pb-4 pr-2 block pr-2 w-full overflow-hidden focus:outline-none"
            value={subTitle}
            onChange={(event) => {
              updateSubtitle(event.target.value);
            }}
          />
          <textarea
            rows={1}
            ref={descriptionRef}
            placeholder="Description"
            style={{ resize: "none" }}
            className="block pr-2 w-full overflow-hidden focus:outline-none"
            value={description}
            onChange={(event) => {
              updateDescription(event.target.value);
            }}
          />
        </div>
        <div className="border-t-2 border-[#E4E4E7] mt-8">
          <div className="flex justify-between items-center my-8">
            <Input
              placeholder="Search Category"
              className="h-11 bg-[#EAEBEF] max-w-[300px] text-black my-6 mr-2 rounded-md shadow-sm"
            />
            <Button className="bg-[#EAEBEF] w-11 h-11 text-black text-md font-karla font-light hover:bg-[#d4d4d5] transition-colors rounded-full">
              +
            </Button>
          </div>
          <div className="justify-between pb-8 flex flex-wrap">
            {[1, 2, 3].map((navItem, index) => (
              <Card
                key={index}
                className="w-[100%] sm:w-[100%] md:w-[48%] lg:w-[48%] cursor-pointer w-full mb-9 rounded-lg overflow-hidden shadow-md transition transform hover:scale-105 hover:shadow-lg border-none"
              >
                <div className="relative">
                  <div className="absolute rounded-full w-[30px] h-[30px] m-4 p-1 text-white bg-black text-center font-karla right-0 border-[1px] border-[#ffffff] hover:bg-white hover:text-black flex items-center justify-center">
                    <p>X</p>
                  </div>
                  <img
                    className="absolute rounded-full w-[30px] h-[30px] m-4 p-1 border-[1px] border-[#ffffff]"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEjUlEQVRYhbWXX0xTdxTHP7e0BS3eysgFY9Za2MgIPkjIFqeLPkhIfHBmT5KQPcynEeODCe97GiGThBeDLyabPhND9Mlggg+LREtcJIaJA6Rhe2kbGm+hBW7be/bwK5WW/rnV7ZuctPeXc885v3PO79zvT8MZGoEvgJPAhfzv58AnQANgAsvAAvAUeA6sAdsO7VdEE9AH3AKWgB1AaogFLAJ3gfPA4Q9xrAEBYAz4G8g4cFwqOSAK/AKcyNt0hIZ85DP53dTruFSywGPgTN52TeffAq/zO/hY5/uz8TpvuygIreT/18CvQPfeos/n49KlSxw/frxi1CJCIpFgfX2dV69ekUwmyWQy5VSXgB+B3/OBFeEEKlVFOzcMQ2ZmZmRnZ6eibG9vy9bWliQSCZmbm5Pr169LS0tLpUzMoPqrCIdRzZItfckwDHny5InUg83NTRkfHxe/31/plIyhThjufABfAj/goEnS6TSLi4ukUqnCWnNzM8FgkLa2tsLz8PAw4XCY+/fvY9v2fhMe4HtgCvgD4BDqzJZtutIMLC0tyblz58QwjIJ0dHTIwMCAPHr0SLLZbEH33r174vP5ymUhg5otjW6gA/gKcNXaPUAul2NjY4N4PF5Yi8fjRCIRTNOkt7eX9vZ2ADo7O/F4POXMuIEBoNsFnAa6nDivBhHh7du3mKZZFKzIgWbfQwjocQHfoOry0eju7sYwjMJzOBxmd3e3knojcMENnKrHSUNDA7quc/To0cKa1+vl7Nmz3LhxA13XERGWl5d58OBBtQAATrqpM/3BYJDbt2+TTqcLARmGQVtbG83NzViWxYsXLxgbG+PZs2fVSsCe76pjtJ45YNu2LCwsyODgoOi6LpqmOflOHBw+HxqAiIhlWRKLxeTOnTvS1dVVMwg3kADed04NrK6uMjExQSwWK6z5/X6CwSD9/f309fVhGAZXr17F5/Nx7do13r17V8mcCTBXTwbC4bCEQqEiHZfLJV6vV9rb22VyclJs2xYREdM0ZWhoqFoG5l0o9vJRsG0by7KIRqNMTU0RjUYBOHLkCBcvXsTtdld6dcEFzAJVz0o9ME2Tra0tADRNo7W1Fa/XW041Azx1AX8Ckf/CuaZpBAKBomGUTqexLKuc+jLw3I0iCY+Bz3j/dawbuq7T29vLyMgIuq4DsLu7y8uXL8lms6XqNjAPrLlR6f8N+A74tJajUCjE6OgoyWSysNbU1MSxY8fo6ekhEAigaYpoRSIRpqeny5nZQDGvAm1vQpGEAyS03BzI5XJFstf1+wfS2tqaXLlyRTweT7nhc5MydD2AoksHKNns7OwBp6WSyWQklUpJPB6X6elp6e/vL+c8hyr3iT2n+2v+D/BzPpACKU2n0zx8+JA3b95ULU0ymWR1dZX5+XlWVlZIpVKlTAjgL+AnYL2SnQbgMv8fLb+Mw7vBGVSqqn4nHIqFKu15J873oKHqdBOIfWA2Mqhr3RiqrI6vZvtxOB/5XdTIdnJV20HNlluoi21TrZ06wSEUeT2NonCnUGTCj8pOAljJBzmLmq5LOBjx/wI2h34g730GlwAAAABJRU5ErkJggg=="
                  ></img>
                  <img
                    className="w-full h-[200px] object-cover"
                    src="https://assets-prd.ignimgs.com/2020/09/24/top25xboxgames-slideshow-1600967273461.jpg"
                  />
                </div>
                <div className="p-4">
                  <a
                    href="https://www.bloomberg.com"
                    target="_blank"
                    className="text-xl font-semibold hover:underline"
                  >
                    Bloomberg
                  </a>
                  <div className="overflow-hidden text-ellipsis leading-normal line-clamp-4">
                    <p className="mt-4 mb-1 text-sm text-gray-600">
                      Bloomberg Business Offer — Subscriptions for only £115 for
                      your first year. Sign up today for this exclusive offer.
                      Sign up with Bloomberg today and take advantage of this £115
                      offer for your first year.
                    </p>
                  </div>
                </div>
                <div className="flex justify-between px-4 pt-6 pb-4">
                  <Button className="w-[75px] bg-[#EAEBEF] rounded-full h-8 text-black text-md font-karla font-light hover:bg-[#d4d4d5] transition-colors">
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
                    <svg
                      className="w-[27px]"
                      width="100%"
                      height="100%"
                      viewBox="0 0 100 100"
                    >
                      <path
                        d="M88.706,11.525L67.578,11.525L67.578,17.025L82.086,17.025L48.055,51.055L51.945,54.945L85.975,20.914C85.975,20.914 85.975,36.171 85.975,36.171L91.475,36.171L91.475,14.275C91.475,13.163 90.805,12.16 89.777,11.735C89.431,11.591 89.067,11.523 88.706,11.525Z"
                        fill="rgb(0,0,0)"
                      />
                      <g
                        transform="matrix(1.40003,0,0,1.40003,-487.561,-4632.96)"
                        fill="rgb(93,93,93)"
                      >
                        <path d="M383.344,3317.73L365.295,3317.73C358.798,3317.73 353.523,3323 353.523,3329.5C353.523,3329.5 353.523,3363.03 353.523,3363.03C353.523,3369.52 358.798,3374.8 365.295,3374.8C365.295,3374.8 401.632,3374.8 401.632,3374.8C408.129,3374.8 413.404,3369.52 413.404,3363.03L413.404,3346.3L410.404,3346.3L410.404,3363.03C410.404,3367.87 406.473,3371.8 401.632,3371.8L365.295,3371.8C360.453,3371.8 356.523,3367.87 356.523,3363.03L356.523,3329.5C356.523,3324.66 360.453,3320.73 365.295,3320.73L383.344,3320.73L383.344,3317.73Z" />
                      </g>
                    </svg>
                  </Button>
                </div>
              </Card>
            ))}

            <Card className="w-[100%] sm:w-[100%] md:w-[48%] lg:w-[48%] cursor-pointer w-full mb-9 rounded-lg overflow-hidden shadow-md transition transform hover:scale-105 hover:shadow-lg border-none">
              <div className="flex justify-center items-center h-[100%]">
                <div>
                  <Button className="w-[75px] h-[75px] bg-[#fff] border-[#EAEBEF] text-[#888] text-xl border-[1px] border-radius-[30px] border-solid rounded-full font-karla font-light hover:bg-[#EAEBEF] transition-colors">
                    +
                  </Button>
                  <div className="pt-2 text-[#888] text-sm text-center"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div >
    </main >
  );
}
