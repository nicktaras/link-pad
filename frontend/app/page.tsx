
import { Input } from "@/components/ui/input"
import { PaperPlaneIcon } from '@radix-ui/react-icons'

const heartIcon = (
  <svg
    width="16"
    height="16"
    version="1.1"
    style={{ fill: "#485d6f", fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}
  >
    <path d="M7,3.936c1.449,-2.043 4.346,-2.043 5.795,-1.022c1.449,1.022 1.449,3.065 0,5.107c-1.014,1.533 -3.622,3.065 -5.795,4.086c-2.173,-1.021 -4.781,-2.553 -5.795,-4.086c-1.449,-2.042 -1.449,-4.085 -0,-5.107c1.449,-1.021 4.346,-1.021 5.795,1.022Z" />
  </svg>
);

const heartOutlineIcon = (
  <svg
    width="100%"
    height="100%"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    style={{ fill: "#fff", fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}
  >
    <path d="M22.5,14.133c-3.255,-4.049 -8.781,-3.836 -11.646,-1.468c-3.041,2.514 -3.227,7.54 -0.187,12.567c2.005,3.542 7.13,7.122 11.423,9.488c0.255,0.14 0.565,0.14 0.82,-0c4.296,-2.368 9.425,-5.951 11.432,-9.503c3.031,-5.018 2.843,-10.04 -0.196,-12.552c-2.865,-2.368 -8.391,-2.581 -11.646,1.468l-0,0Zm-0.727,1.922c0.154,0.254 0.429,0.41 0.727,0.41c0.298,-0 0.573,-0.156 0.727,-0.41c2.462,-4.07 7.374,-4.115 9.836,-2.08c-0,-0 -0,-0 -0,-0c2.511,2.076 2.326,6.227 -0.186,10.38c-0.004,0.007 -0.009,0.015 -0.013,0.022c-1.817,3.22 -6.419,6.41 -10.364,8.625c-3.945,-2.215 -8.547,-5.405 -10.364,-8.625c-0.004,-0.007 -0.009,-0.015 -0.013,-0.022c-2.511,-4.153 -2.697,-8.304 -0.186,-10.38c2.462,-2.035 7.374,-1.99 9.836,2.08Z"/>
  </svg>
);

const groupIcon = (
  <svg
    width="100%" height="100%"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    style={{ fill: "#fff", fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}
  >
       <g transform="matrix(1,0,0,1,-1,0)">
        <path d="M36.258,6.427L36.257,6.427L36.257,6.427C36.222,6.433 36.186,6.442 36.152,6.453L8.412,15.265C8.044,15.382 7.84,15.776 7.957,16.144C8.006,16.299 14.394,24.896 14.394,24.896C14.394,24.896 15.461,33.771 15.461,33.771C15.469,33.838 15.486,33.901 15.511,33.961L15.514,33.967C15.545,34.039 15.588,34.106 15.645,34.166L15.663,34.185L15.682,34.204L15.688,34.209C15.755,34.268 15.829,34.313 15.908,34.343L15.918,34.346C15.986,34.371 16.057,34.385 16.132,34.387C16.23,34.391 16.325,34.373 16.412,34.339L16.418,34.337C16.498,34.305 16.573,34.257 16.639,34.194C16.649,34.185 16.658,34.175 16.667,34.166L19.996,30.653L26.6,38.34C26.766,38.534 27.026,38.621 27.276,38.568C27.526,38.515 27.727,38.33 27.801,38.085L37.046,7.318L37.046,7.317C37.055,7.287 37.062,7.257 37.067,7.226L37.067,7.224L37.068,7.222C37.072,7.192 37.075,7.162 37.075,7.132L37.076,7.129L37.076,7.127C37.076,7.097 37.075,7.066 37.071,7.036L37.071,7.035L37.071,7.035C37.059,6.936 37.027,6.839 36.973,6.751L36.973,6.751L36.972,6.75C36.956,6.723 36.937,6.697 36.917,6.672L36.911,6.666L36.911,6.665C36.848,6.591 36.773,6.533 36.691,6.492L36.691,6.491L36.69,6.491C36.65,6.471 36.608,6.455 36.565,6.443L36.564,6.442L36.562,6.442C36.525,6.432 36.487,6.424 36.448,6.42L36.446,6.42L36.443,6.42C36.381,6.414 36.319,6.416 36.258,6.427ZM34.876,9.675L18.433,26.685C18.433,26.685 26.828,36.457 26.828,36.457L34.876,9.675ZM17.287,31.476L19.079,29.585L17.904,28.217L17.287,31.476ZM27.394,15.401L15.807,24.92L16.31,29.108L16.873,26.321L16.885,26.298L16.887,26.295C16.904,26.267 16.971,26.183 16.983,26.171L27.394,15.401ZM33.12,8.885L9.616,16.351L15.182,23.621L33.12,8.885Z" />
      </g>
  </svg>
);

const lightningOutlineIcon = (
  <svg
    width="100%"
    height="100%"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
  >
    <path
      d="M31.138,7.826c0.103,-0.15 0.111,-0.389 0.02,-0.555c-0.091,-0.165 -0.253,-0.203 -0.375,-0.089l-16.535,15.516c-0.106,0.1 -0.155,0.29 -0.119,0.468c0.035,0.177 0.146,0.299 0.273,0.299l6.902,-0c-0,-0 -7.464,13.744 -7.464,13.744c-0.089,0.164 -0.08,0.4 0.02,0.55c0.101,0.15 0.262,0.166 0.376,0.039l14.989,-16.773c0.097,-0.108 0.136,-0.295 0.096,-0.463c-0.039,-0.169 -0.147,-0.283 -0.269,-0.283l-6.416,0c0,0 8.502,-12.453 8.502,-12.453Zm-2.26,2.132l-7.129,10.443c-0.081,0.119 -0.106,0.298 -0.062,0.453c0.044,0.156 0.148,0.257 0.263,0.257l6.262,0c-2.181,2.441 -9.152,10.242 -12.497,13.985c-0,-0 6.401,-11.789 6.401,-11.789c0.068,-0.125 0.081,-0.296 0.034,-0.439c-0.048,-0.144 -0.148,-0.235 -0.257,-0.235l-6.521,-0c-0,-0 13.506,-12.675 13.506,-12.675l0,0Z"
      style={{
        fill: "#fff",
        stroke: "#fff",
        strokeWidth: "0.65px",
      }}
    />
  </svg>
);


const dotIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 14 14"
    version="1.1"
    style={{ fill: "#485d6f", fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}
  >
    <ellipse cx="7" cy="7" rx="4.651" ry="4.602"/>
  </svg>
);

export default function Home() {
  const tiers = [
    {
      name: "The Essentials",
      theme: "#AF83E3", // purple
      icon: heartOutlineIcon,
      features: [
        {
          icon: heartIcon,
          text: "Store & manage your links"
        },
        {
          icon: dotIcon,
          text: "Tag, categorize, annotate"
        },
        {
          icon: dotIcon,
          text: "AI-assisted link suggestions"
        },
        {
          icon: dotIcon,
          text: "Basic media content viewer"
        },
        {
          icon: dotIcon,
          text: "500 links & 150 categories"
        }
      ],
      fee: "$5 per month / $50 per year"
    },
    {
      name: "Pro",
      theme: "#00C7A6", // green
      icon: lightningOutlineIcon,
      features: [
        {
          icon: heartIcon,
          text: "Everything in Starter"
        },
        {
          icon: dotIcon,
          text: "Unlimited links & categories"
        },
        {
          icon: dotIcon,
          text: "Collaborate with other Pro members"
        },
        {
          icon: dotIcon,
          text: "Save entire web page content"
        },
        {
          icon: dotIcon,
          text: "Advanced media content viewer"
        },
        {
          icon: dotIcon,
          text: "Priority support"
        }
      ],
      fee: "$15 per month / $150 per year"
    },
    {
      name: "Team",
      theme: "#1E88ED", // blue
      icon: groupIcon,
      features: [
        {
          icon: heartIcon,
          text: "Everything in Pro"
        },
        {
          icon: dotIcon,
          text: "Real-time collaboration with team members"
        },
        {
          icon: dotIcon,
          text: "User management & permissions"
        },
        {
          icon: dotIcon,
          text: "Analytics dashboard for link engagement"
        },
        {
          icon: dotIcon,
          text: "Custom branding options"
        },
        {
          icon: dotIcon,
          text: "Priority support & dedicated account manager"
        }
      ],
      fee: "$50 per month per user / $500 per year per user"
    }
  ];

  return (
    <main
      style={{ background: "#F4F4F6", color: "#485D6F" }}
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <div className="text-center mb-20">
        <h1 style={{ fontWeight: 300 }} className="text-4xl text-logo-gray font-afacad">
          Cloud Links
        </h1>
        <h2 className="text-body-blue text-xl mt-2 font-[300]">
          Collect and manage your links, anyhwere.
        </h2>
      </div>
      <div className="flex flex-wrap w-full items-start justify-center max-w-[1200px] border-b-2 border-t-2 border-[#E4E4E7]">
        {tiers.map(({ name, theme, features, fee, icon }, tierIndex) => (
          <div
            className="platform-tier w-1/4 my-20 mx-8 w-[330px] rounded-lg my-16"
            key={tierIndex}
          >
            <div className="flex justify-center flex-wrap my-6">
                <div
                  style={{ background: theme }}
                  className="w-[60px] h-[60px] rounded-full p-[7px]"
                >
                  {icon}
                </div>
                <div className="w-full">
                  <p
                    style={{ color: theme }}
                    className="text-2xl mt-3 mb-4 text-center font-[300]"
                  >
                    {name}
                  </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                {features.map(({ icon, text }, featureIndex) => (
                  <div key={featureIndex} className="flex items-center mb-2">
                    {icon && <span className="mr-2">{icon}</span>}
                    <span className="text-karla">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{ color: theme }}
              className="flex justify-center flex-wrap m-8 font-kalra"
            >
              {fee}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <div className="uppercase my-4 text-center text-[#728396] font-afacad">
          Join our product launch waitlist
        </div>
        <div className="relative text-white w-96">
          <Input
            className="focus-visible:ring-[#728396] bg-pink-500 font-bold uppercase w-full p-3 pr-10 text-white placeholder-white font-karla"
            placeholder=""
          />
          <PaperPlaneIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer" />
        </div>
      </div>
    </main>
  );
}
