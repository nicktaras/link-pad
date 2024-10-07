import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { dotIcon, groupIcon, heartIcon, heartOutlineIcon, lightningOutlineIcon } from "@/components/ui/icons"

export default function Home() {
  const tiers = [
    {
      name: "The Essentials",
      theme: "#AF83E3", // purple
      icon: heartOutlineIcon,
      features: [
        { icon: heartIcon, text: "Store & manage your links" },
        { icon: dotIcon, text: "Tag, categorize, annotate" },
        { icon: dotIcon, text: "AI-assisted link suggestions" },
        { icon: dotIcon, text: "Media content viewer" },
        { icon: dotIcon, text: "500 links & 150 categories" },
      ],
      fee: "$5 per month / $50 per year",
    },
    {
      name: "Pro",
      theme: "#00C7A6", // green
      icon: lightningOutlineIcon,
      features: [
        { icon: heartIcon, text: "Everything in Starter" },
        { icon: dotIcon, text: "Unlimited links & categories" },
        { icon: dotIcon, text: "Collaborate with others" },
        { icon: dotIcon, text: "Save web page content" },
        { icon: dotIcon, text: "Advanced content viewer" },
        { icon: dotIcon, text: "Priority support" },
      ],
      fee: "$15 per month / $150 per year",
    },
    {
      name: "Team",
      theme: "#1E88ED", // blue
      icon: groupIcon,
      features: [
        { icon: heartIcon, text: "Everything in Pro" },
        { icon: dotIcon, text: "Real-time team collaboration" },
        { icon: dotIcon, text: "User management" },
        { icon: dotIcon, text: "Analytics and insights" },
        { icon: dotIcon, text: "Custom branding options" },
        { icon: dotIcon, text: "Priority support" },
        { icon: dotIcon, text: "Account manager" },
      ],
      fee: "$50 per month per user / $500 per year per user",
    },
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
          Collect and manage your links, anywhere.
        </h2>
      </div>
      <div className="flex flex-wrap w-full items-stretch justify-center max-w-[1200px] border-b-2 border-t-2 border-[#E4E4E7]">
        {tiers.map(({ name, theme, features, fee, icon }, tierIndex) => (
          <div
            className="platform-tier w-1/4 my-20 mx-8 w-[330px] flex flex-col justify-between rounded-lg shadow-lg p-6"
            key={tierIndex}
          >
            <div className="flex flex-col flex-grow">
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
              <div className="flex justify-center flex-grow">
                <div>
                  {features.map(({ icon, text }, featureIndex) => (
                    <div key={featureIndex} className="flex items-center mb-2">
                      {icon && <span className="mr-2">{icon}</span>}
                      <span className="text-karla">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              style={{ color: theme }}
              className="flex justify-center my-4 font-karla"
            >
              {fee}
            </div>
            <Button disabled className="w-full text-white font-bold uppercase p-3 my-8">Coming Soon</Button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <div className="uppercase my-4 text-center text-[#555] font-afacad">
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
