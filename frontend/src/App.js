import "./App.css";
import Topbar from "./topbar/Topbar.js";
import creative_blogs from "./images/creative_blogs.webp";
import BlogList from "./blogs/BlogPosting";
import productivity from "./images/productivity.jpg";
import desktopsetup from "./images/desktop-setup.jpg";
import tech from "./images/tech-stuff.jpg";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="mt-0 px-0">
      <Topbar />
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

      <div>
        <h1 className="text-2xl text-center mt-16 font-bold">Recent Blogs</h1>
      </div>
      <div className="flex justify-around mt-20">
        <BlogList
          url={productivity}
          text="productivity"
          title="5 Tips for Productivity"
          description="lorem ipsum ok bye fir milte hai chalo"
        />

        <BlogList
          url={desktopsetup}
          text="productivity"
          title="5 Tips for Productivity"
          description="lorem ipsum ok bye fir milte hai chalo"
        />

        <BlogList
          url={tech}
          text="productivity"
          title="5 Tips for Productivity"
          description="lorem ipsum ok bye fir milte hai chalo"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
