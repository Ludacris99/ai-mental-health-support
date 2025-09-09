'use client'

import MusicPlayer from "../components/MusicPlayer";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full mt-50 gap-10">
      {/* Ripple + Hero Text */}
      <div className="w-fit relative">

        <div className="absolute inset-0 loader opacity-30">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100">
          <h1 className="text-5xl font-semibold text-center scale-150 leading-15">Find <span className="green-text">Peace</span> of <span className="green-text">Mind</span></h1>
        </div>

      </div>

      {/* Music Player */}
      <div className="absolute w-fit bottom-0 left-30">
        <MusicPlayer />
      </div>

      {/* User Mood */}
      <div className="absolute p-5 w-fit bottom-0 right-30">
        <p>What is your mood today?</p>
      </div>


      {/* About Us */}
      <div className="">
        <p className="text-5xl">Mental Health for everyone</p>
      </div>

    </div>
  );
}
