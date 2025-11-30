import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex flex-col justify-center items-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-8">Welcome to Splash App</h1>
        <p className="text-xl mb-12">Your journey starts here</p>
        
        <Link 
          href="/counter-app"
          className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          Go to Counter App
        </Link>
      </div>
    </div>
  );
}