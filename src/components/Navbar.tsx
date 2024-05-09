import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      className="top-4 max-md:w-5/6 sm:top-6 md:top-8 inset-x-0 text-lg py-2 sm:py-4  px-8 lg:px-16 rounded-xl mx-auto w-full max-w-3xl mix-blend-difference z-40 fixed  text-white border-[0.4px] border-white backdrop-blur-sm bg-black/10   "
      id="navbar"
    >
      <div className="hidden gap-4 md:flex sm:gap-8 lg:gap-12 ">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/resources">Resources</Link>
      </div>
    </div>
  );
}

export default Navbar;
