import Navbar from "@/components/navbar";

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center p-8 pb-20">
                <div className="bg-gradient-to-r from-[#3b37ab] to-[#ff92d4] h-72 w-80 rounded-3xl shadow-2xl flex justify-center items-center">
                    <h2 className="text-center font-semibold text-black text-4xl drop-shadow-lg">
                        This is a Contact page!
                    </h2>
                </div>
            </main>
        </div>
    );
}
