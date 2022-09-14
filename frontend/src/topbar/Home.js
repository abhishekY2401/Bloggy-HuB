import React from "react";
import creative_blogs from "../images/creative_blogs.webp";
import BlogList from "../blogs/BlogPosting";
import productivity from "../images/productivity.jpg";
import desktopsetup from "../images/desktop-setup.jpg";
import tech from "../images/tech-stuff.jpg";

function Home() {
  return (
    <>
      <div className="flex">
        <div className="bg-slate-800 flex flex-col text-center justify-center">
          <h1 className="text-5xl font-bold text-center p-10 text-gray-100 font-sans">
            Convert your creative thoughts in form of blogs
          </h1>
          <p className="text-xl text-gray-400 p-20">
            Create blogs and help others with your content and earn side-by-side
          </p>
          <a
            href="/"
            className="text-xl text-slate-800 p-2 bg-gray-100 w-40 rounded-full inline-flex justify-center ml-60 hover:text-slate-100 hover:bg-slate-900"
          >
            Get Started
          </a>
        </div>
        <div className="w-fit">
          <img src={creative_blogs} alt="blog" className="object-contain" />
        </div>
      </div>
      <div className="bg-gray-200 pb-20">
        <div>
          <h1 className="text-2xl text-center pt-16 font-bold">Recent Blogs</h1>
        </div>
        <div className="flex justify-around mt-20">
          <BlogList
            url={productivity}
            text="Technology"
            category="Technology"
            title="Why is the Tesla Cybertruck designed the way it is?"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <BlogList
            url={desktopsetup}
            text="techology"
            category="Technology"
            title="What's new in tech 2022 and how tech can revolutionize whole world"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <BlogList
            url={tech}
            text="automobile"
            category="Automobile"
            title="Race to your heart content is blazingly fast"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.o"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
