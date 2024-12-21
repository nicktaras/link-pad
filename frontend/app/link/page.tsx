"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "@/components/menu/menu";
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
      <div className="m-16 font-Karla w-full">
        <div>
          <div className="flex justify-between items-center mb-4 mt-2">
            <div className="mr-4 relative flex justify-center items-center top-[-2px] w-10 h-10 min-w-10 min-h-10 p-0 bg-white border-[1px] border-radius-[30px] border-solid border-[#2F465C] rounded-full">
              <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png" className="rounded-full p-1" />
            </div>
            <textarea
              rows={1}
              ref={titleRef}
              placeholder="Title"
              style={{ resize: "none" }}
              className="text-5xl text-[#2F465C] font-semibold p-0 block pr-2 w-full focus:outline-none"
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
            className="text-xl font-medium text-[#2F465C] pb-4 pr-2 block pr-2 w-full overflow-hidden focus:outline-none"
            value={subTitle}
            onChange={(event) => {
              updateSubtitle(event.target.value);
            }}
          />
          <div className="pb-4 pr-2 block pr-2 w-full overflow-hidden focus:outline-none">
            <a href="#" className="text-xl text-[#026DD2] font-afacad flex">
              https://www.docker.com
              <span className="ml-2 text-[#2F465C] font-afacad text-lg">
                <svg
                  className="w-6 h-6 relative top-[2px]"
                  width="100%"
                  height="100%"
                  viewBox="0 0 700 700"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlSpace="preserve"
                  style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 2,
                  }}
                >
                  <g transform="matrix(8.47084,0,0,8.47084,-2902.99,-27960.8)">
                    <path d="M383.344,3317.73L365.295,3317.73C358.798,3317.73 353.523,3323 353.523,3329.5C353.523,3329.5 353.523,3363.03 353.523,3363.03C353.523,3369.52 358.798,3374.8 365.295,3374.8C365.295,3374.8 401.632,3374.8 401.632,3374.8C408.129,3374.8 413.404,3369.52 413.404,3363.03L413.404,3346.3L410.404,3346.3L410.404,3363.03C410.404,3367.87 406.473,3371.8 401.632,3371.8L365.295,3371.8C360.453,3371.8 356.523,3367.87 356.523,3363.03L356.523,3329.5C356.523,3324.66 360.453,3320.73 365.295,3320.73L383.344,3320.73L383.344,3317.73Z" />
                  </g>
                  <g transform="matrix(5.98979,5.98979,-5.98979,5.98979,18438.4,-21615.9)">
                    <path d="M320.117,3351.4L320.118,3351.41L325.978,3364.89C326.206,3365.46 326.754,3365.83 327.364,3365.83C327.975,3365.83 328.525,3365.47 328.757,3364.9L333.331,3351.31C333.384,3351.18 333.417,3351.05 333.433,3350.92C333.549,3350.6 333.613,3350.25 333.613,3349.89L332.906,3312.69C332.906,3308.85 329.791,3305.74 325.955,3305.74C322.118,3305.74 319.003,3308.85 319.003,3312.69C319.003,3312.69 319.71,3349.89 319.71,3349.89C319.71,3350.44 319.859,3350.96 320.117,3351.4ZM329.44,3352.89L323.953,3352.89L327.381,3360.35L329.44,3352.89ZM322.71,3349.89L330.613,3349.89L329.906,3312.69C329.906,3310.51 328.135,3308.74 325.955,3308.74C323.774,3308.74 322.003,3310.51 322.003,3312.69L322.71,3349.89Z" />
                  </g>
                </svg>
              </span>
            </a>
          </div>
          <textarea
            rows={1}
            ref={descriptionRef}
            placeholder="Description"
            style={{ resize: "none" }}
            className="block text-[#2F465C] text-lg pr-2 w-full overflow-hidden focus:outline-none"
            value={description}
            onChange={(event) => {
              updateDescription(event.target.value);
            }}
          />
        </div>
      </div >
    </main >
  );
}
