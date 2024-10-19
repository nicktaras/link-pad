"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { dotIcon, groupIcon, heartIcon, heartOutlineIcon, lightningOutlineIcon } from "@/components/ui/icons";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const [isYearly, setIsYearly] = useState(true);

  const tiers = [
    {
      name: "Essential",
      theme: "#AF83E3", // purple
      icon: heartOutlineIcon,
      features: [
        { icon: heartIcon, text: "Store & manage your links" },
        { icon: dotIcon, text: "Tag, categorize, annotate" },
        { icon: dotIcon, text: "AI-assisted link suggestions" },
        { icon: dotIcon, text: "Media viewer" },
        { icon: dotIcon, text: "500 links & 50 categories" },
        { icon: dotIcon, text: "No selling or sharing of data" },
      ],
      fee: {
        monthly: "FREE",
        yearly: "FREE",
      }
    },
    {
      name: "Pro",
      theme: "#00C7A6", // green
      icon: lightningOutlineIcon,
      features: [
        { icon: heartIcon, text: "Everything in Starter" },
        { icon: dotIcon, text: "AI content features" },
        { icon: dotIcon, text: "Advanced Media viewer" },
        { icon: dotIcon, text: "Chrome Extension" },
        { icon: dotIcon, text: "Priority support" },
      ],
      fee: {
        monthly: "$15 per month",
        yearly: "$150 per year",
      }
    },
    {
      name: "Team",
      theme: "#1E88ED", // blue
      icon: groupIcon,
      features: [
        { icon: heartIcon, text: "Everything in Pro" },
        { icon: dotIcon, text: "Real-time collaboration" },
        { icon: dotIcon, text: "User management" },
        { icon: dotIcon, text: "Analytics" },
        { icon: dotIcon, text: "Custom branding options" },
        { icon: dotIcon, text: "Account manager" },
      ],
      fee: {
        monthly: "$25 per month per user",
        yearly: "$200 per year per user",
      }
    },
  ];

  const handleSwitchChange = (checked:boolean) => {
    setIsYearly(checked);
  };

  return (
    <main
      style={{ background: "#F4F4F6", color: "#485D6F" }}
      className="flex min-h-screen flex-col items-center justify-between p-8 pt-24 md:p-24"
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

        <div className="w-full flex justify-center mt-16 mb-12 relative left-[26px]">
          <div className="flex items-center space-x-4">
            <span
              className={`text-sm text-[#485D6F] transition-opacity ${
                isYearly ? "opacity-50" : "opacity-100"
              }`}
            >
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={handleSwitchChange}
              disabled={false}
              aria-readonly={false}
            />
            <span
              className={`text-sm text-[#485D6F] transition-opacity ${
                isYearly ? "opacity-100" : "opacity-50"
              }`}
            >
              Yearly <Badge variant="outline" className="bg-[#00C7A6] text-white">30% OFF</Badge></span>
          </div>
        </div>

        {tiers.map(({ name, theme, features, fee, icon }, tierIndex) => (
          <div
            className="relative platform-tier w-1/4 mb-20 w-full flex flex-col justify-between rounded-lg shadow-lg p-6 max-w-[400px] md:w-[330px] md:mx-8"
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
              className="flex justify-center align-center my-4 font-karla text-center"
            >
              {fee[isYearly ? "yearly" : "monthly"]}
            </div>
            <Button className="bg-[#485d70] w-full text-white font-bold uppercase p-3 my-8 transition hover:bg-[#3a4c5b]">Get Started</Button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <div className="uppercase my-4 text-center text-[#555] font-afacad">
          Join our product launch waitlist
        </div>
        <div className="relative text-white w-100 md:w-96">
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
