import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="bg-gradient-to-r from-[#ffc575] to-[#ff0099] h-72 w-80 rounded-3xl shadow-2xl flex justify-center items-center">
          <h2 className="text-center font-semibold text-black text-4xl drop-shadow-lg">
            This is a Home page!
          </h2>
        </div>
      </main>
    </div>
  );
}
