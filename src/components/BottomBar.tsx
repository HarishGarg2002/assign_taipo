import { Contact, Map } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { NavLink } from "react-router-dom";
const BottomBar = () => {
  return (
    <div className="grid items-center w-full grid-cols-3 select-none ">
      <div className="">
        <ModeToggle />
      </div>

      <NavLink
        to="/contact/add-contact"
        className={({ isActive }) =>
          [
            "block px-4 py-3 my-2 transition-colors cursor-pointer rounded-2xl hover:bg-accent",
            isActive ? "bg-accent" : "",
          ].join(" ")
        }
      >
        <div className="flex items-center gap-2 text-base font-medium text-card-foreground">
          <Contact className="h-7 text-primary" />
          <p className="hidden md:block">Contacts</p>
        </div>
      </NavLink>
      <NavLink
        to="/charts-maps/stats"
        className={({ isActive }) =>
          [
            "block px-4 py-3 my-2 transition-colors cursor-pointer rounded-2xl hover:bg-accent",
            isActive ? "bg-accent" : "",
          ].join(" ")
        }
      >
        <div className="flex items-center gap-2 text-base font-medium text-card-foreground">
          <Map className="h-7 text-primary" />
          <p className="hidden md:block">Charts & Maps</p>
        </div>
      </NavLink>
    </div>
  );
};

export default BottomBar;
