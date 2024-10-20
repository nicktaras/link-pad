import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
    return (
      <main className="bg-[#F4F4F6] min-h-screen p-8">
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-[#485D6F]">Dashboard Overview</h1>
          <p className="text-lg text-[#728396]">Manage your account and subscriptions</p>
        </header>
  
        {/* Subscription Info Section */}
        <section className="mb-8">
          <div className="p-6 rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-semibold text-[#00C7A6] mb-4">Current Plan: Pro</h2>
            <p className="text-gray-600">You are on the Pro plan, giving you access to premium features like AI content and advanced media viewer.</p>
            <Button className="bg-[#00C7A6] hover:bg-[#00b594] text-white mt-6 w-full">
              Upgrade to Team
            </Button>
          </div>
        </section>
  
        {/* Usage Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg text-[#AF83E3] font-bold">Links Stored</h3>
            <p className="text-2xl font-semibold text-[#485D6F]">345</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg text-[#00C7A6] font-bold">AI Suggestions Used</h3>
            <p className="text-2xl font-semibold text-[#485D6F]">78</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg text-[#1E88ED] font-bold">Collaborators Added</h3>
            <p className="text-2xl font-semibold text-[#485D6F]">12</p>
          </div>
        </section>
  
        {/* Add New Links */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-[#485D6F]">Add New Links</h2>
          <div className="mt-4">
            <Input
              className="focus-visible:ring-[#00C7A6] bg-white text-gray-600 border-gray-300 w-full p-3 rounded-lg"
              placeholder="Enter link URL"
            />
            <Button className="bg-[#1E88ED] hover:bg-[#1977d2] text-white mt-4 w-full">
              Add Link
            </Button>
          </div>
        </section>
      </main>
    );
  }