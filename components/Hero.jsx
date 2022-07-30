import Image from "next/image";
import banner from "../static/banner.png";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";

const Hero = () => {
  const { currentUser, handleUserAuth } = useContext(AuthContext);
  const router = useRouter();

  return (
    <main className="lg:relative">
      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
            <span className="block xl:inline">
              Stay <span className="text-indigo-600">Curious</span>
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            {currentUser ? (
              <div className="rounded-md shadow">
                <Link href="/app">
                  <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Get started
                  </a>
                </Link>
              </div>
            ) : (
              <div className="rounded-md shadow cursor-pointer">
                <div onClick={handleUserAuth}>
                  <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Get started
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="hidden lg:flex relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src={banner}
          alt="medium banner"
        />
      </div>
    </main>
  );
};

export default Hero;
