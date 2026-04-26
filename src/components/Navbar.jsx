import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-white/40 backdrop-blur-md shadow-md px-6 py-4 flex justify-between items-center">

      {/* LOGO */}
      <h1 className="text-xl font-bold text-[#1e3a8a]">
        StringGenerator
      </h1>

      {/* LINKS */}
      <div className="flex gap-6 text-sm font-medium">
        
        <NavLink 
          to="/" 
          className={({ isActive }) =>
            isActive 
              ? "text-[#2563eb] font-semibold" 
              : "text-[#1e293b] hover:text-[#2563eb]"
          }
        >
          Home
        </NavLink>

        <NavLink 
          to="/generator" 
          className={({ isActive }) =>
            isActive 
              ? "text-[#2563eb] font-semibold" 
              : "text-[#1e293b] hover:text-[#2563eb]"
          }
        >
          Generator
        </NavLink>

        <NavLink 
          to="/about" 
          className={({ isActive }) =>
            isActive 
              ? "text-[#2563eb] font-semibold" 
              : "text-[#1e293b] hover:text-[#2563eb]"
          }
        >
          About
        </NavLink>

      </div>
    </nav>
  );
}

export default Navbar;