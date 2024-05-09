import { useQuery } from "@tanstack/react-query";
import { AreaChart, BarChart3, Earth } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Country } from "../types/CountryType";

const MapLayout = () => {
  const countriesQuery = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await fetch("https://disease.sh/v3/covid-19/countries");
      return response.json();
    },
  });

  const countries: Country[] = countriesQuery.data;

  const [input, setInput] = useState("");

  const filteredCountries = countries?.filter((country) =>
    country.country.toLowerCase().includes(input.toLowerCase())
  );

  // console.log(countries);
  return (
    <div className="flex w-full h-[100vh]">
      <div className="w-2/5 px-2 py-16 bg-white md:px-2 xl:px-4 md:w-4/12 lg:w-1/5 dark:bg-card">
        <div className="mb-8">
          <input
            placeholder="Search Country ..."
            className="w-full px-4 py-4 text-sm font-normal border-2 rounded-lg border-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className="">
          <div className="">
            <Link
              to="/charts-maps/stats"
              className="flex gap-3 px-4 py-4 mb-1 cursor-pointer bg-accent rounded-xl hover:bg-muted"
            >
              <AreaChart className="h-6 text-primary" />
              <p>Stats</p>
            </Link>
            <Link
              to="/charts-maps/country-wise-data"
              className="flex gap-3 px-4 py-4 mb-1 cursor-pointer bg-accent rounded-xl hover:bg-muted"
            >
              <Earth className="h-6 text-primary" />
              <p>Country Wise Data</p>
            </Link>
            <Link
              to="/charts-maps/daily-data"
              className="flex gap-3 px-4 py-4 mb-1 cursor-pointer bg-accent rounded-xl hover:bg-muted"
            >
              <BarChart3 className="h-6 text-primary" />
              <p>Daily Data</p>
            </Link>
          </div>

          <div className="max-h-[480px] md:max-h-[400px] mt-8 overflow-auto no-scrollbar">
            {filteredCountries?.map((country: Country) => (
              <NavLink
                to={`/charts-maps/${country.country}`}
                key={country.country}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-2 mob:gap-4 px-2 mob:px-4 py-4 mb-2 cursor-pointer bg-card rounded-xl hover:bg-muted",
                    isActive ? "bg-muted" : "",
                  ].join(" ")
                }
              >
                <img
                  src={country.countryInfo.flag}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold mob:text-base text-primary">
                    {country.country}
                  </p>
                  <p className="text-xs mob:text-sm text-primary">
                    {country.cases} Cases
                  </p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="w-3/5 md:w-8/12 lg:w-4/5">
        <Outlet />
      </div>
    </div>
  );
};

export default MapLayout;
