import { Country } from "@/types/CountryType";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Separator } from "../components/ui/separator";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const CountryData = () => {
  const { country } = useParams<{ country: string }>();

  const CountryQuery = useQuery({
    queryKey: ["country", country],
    queryFn: async () => {
      const response = await fetch(
        `https://disease.sh/v3/covid-19/countries/${country}`
      );
      return response.json();
    },
    staleTime: 1000,
  });

  const countryData: Country = CountryQuery.data;

  // console.log(countryData?.countryInfo?.lat);

  // console.log(countryData);
  return (
    <div className="px-1 py-12 mob:px-3 lg:px-6">
      <div className="flex items-center justify-center gap-4 mb-8 mob:gap-8">
        <img
          src={countryData?.countryInfo.flag}
          alt={countryData?.country}
          className="w-[60px] h-[40px] aspect-auto"
        />
        <h1 className="text-3xl font-bold text-primary">
          {countryData?.country}
        </h1>
      </div>
      <Separator />
      <div className="px-4 mt-8">
        <div className="grid gap-2 mob:grid-cols-2 md:gap-2 lg:gap-5 md:grid-cols-3 lg:grid-cols-5 ">
          <div className="px-2 py-2 rounded-lg shadow-md mob:px-4 mob:py-4 bg-card">
            <h1 className="text-base font-semibold md:text-lg text-primary">
              Continent
            </h1>
            <p className="text-secondary-foreground">
              {countryData?.continent}
            </p>
          </div>
          <div className="px-2 py-2 rounded-lg shadow-md mob:px-4 mob:py-4 bg-card">
            <h1 className="font-semibold md:text-lg text-primary">
              Population
            </h1>
            <p className="text-secondary-foreground">
              {countryData?.population}
            </p>
          </div>
          <div className="px-2 py-2 rounded-lg shadow-md mob:px-4 mob:py-4">
            <h1 className="font-semibold md:text-lg text-primary">
              Today Cases
            </h1>
            <p className="text-secondary-foreground">
              {countryData?.todayCases}
            </p>
          </div>
          <div className="px-2 py-2 bg-green-400 rounded-lg shadow-md mob:px-4 mob:py-4">
            <h1 className="font-semibold md:text-lg text-primary">
              Today Recovered
            </h1>
            <p className="text-secondary-foreground">
              {countryData?.todayRecovered}
            </p>
          </div>
          <div className="px-2 py-2 rounded-lg shadow-md mob:px-4 mob:py-4 bg-destructive">
            <h1 className="font-semibold md:text-lg text-destructive-foreground">
              Today Deaths
            </h1>
            <p className="text-white">{countryData?.todayDeaths}</p>
          </div>
        </div>
        <div className="mt-12 flex max-lg:flex-col  h-[400px] w-full">
          <div className="w-full max-lg:min-h-[140px] lg:w-1/5 lg:h-[400px] max-lg:flex  bg-white dark:bg-black overflow-auto no-scrollbar">
            <div className="px-5 py-4 border-gray-300 shadow lg:px-3 lg:py-2">
              <h1 className="font-semibold text-primary">Total Cases</h1>
              <p className="text-sm font-medium text-gray-500">
                {countryData?.cases}
              </p>
            </div>
            <div className="px-5 py-4 border-gray-300 shadow lg:px-3 lg:py-2">
              <h1 className="font-semibold text-primary">Active Cases</h1>
              <p className="text-sm font-medium text-gray-500">
                {countryData?.active}
              </p>
            </div>
            <div className="px-5 py-4 border-gray-300 shadow lg:px-3 lg:py-2">
              <h1 className="font-semibold text-primary">Critical Cases</h1>
              <p className="text-sm font-medium text-gray-500">
                {countryData?.critical}
              </p>
            </div>
            <div className="px-5 py-4 border-gray-300 shadow lg:px-3 lg:py-2">
              <h1 className="font-semibold text-primary">Recovered</h1>
              <p className="text-sm font-medium text-gray-500">
                {countryData?.recovered}
              </p>
            </div>
            <div className="px-5 py-4 border-gray-300 shadow lg:px-3 lg:py-2">
              <h1 className="font-semibold text-primary">Deaths</h1>
              <p className="text-sm font-medium text-gray-500">
                {countryData?.deaths}
              </p>
            </div>
            <div className="px-5 py-4 border-gray-300 shadow lg:px-3 lg:py-2">
              <h1 className="font-semibold text-primary">Tests</h1>
              <p className="text-sm font-medium text-gray-500">
                {countryData?.tests}
              </p>
            </div>
            <div className="px-5 py-4 border-gray-300 shadow lg:px-3 lg:py-2">
              <h1 className="font-semibold text-primary">Active Per Million</h1>
              <p className="text-sm font-medium text-gray-500">
                {countryData?.activePerOneMillion}
              </p>
            </div>
            <div className="px-5 py-4 border-gray-300 shadow lg:px-3 lg:py-2">
              <h1 className="font-semibold text-primary">Cases Per Million</h1>
              <p className="text-sm font-medium text-gray-500">
                {countryData?.casesPerOneMillion}
              </p>
            </div>
            <div className="px-5 py-4 border-gray-300 shadow lg:px-3 lg:py-2">
              <h1 className="font-semibold text-primary">Deaths Per Million</h1>
              <p className="text-sm font-medium text-gray-500">
                {countryData?.deathsPerOneMillion}
              </p>
            </div>
            <div className="px-5 py-4 border-gray-300 shadow lg:px-3 lg:py-2">
              <h1 className="font-semibold text-primary">Tests Per Million</h1>
              <p className="text-sm font-medium text-gray-500">
                {countryData?.testsPerOneMillion}
              </p>
            </div>
            <div className="px-5 py-4 border-gray-300 shadow lg:px-3 lg:py-2">
              <h1 className="font-semibold text-primary">
                Critical Per Million
              </h1>
              <p className="text-sm font-medium text-gray-500">
                {countryData?.criticalPerOneMillion}
              </p>
            </div>
            <div className="px-3 py-2 border-gray-300 shadow">
              <h1 className="font-semibold text-primary">
                Recovered Per Million
              </h1>
              <p className="text-sm font-medium text-gray-500">
                {countryData?.recoveredPerOneMillion}
              </p>
            </div>
            <div className="px-3 py-2 border-gray-300 shadow">
              <h1 className="font-semibold text-primary">
                One Case Per People
              </h1>
              <p className="text-sm font-medium text-gray-500">
                {countryData?.oneCasePerPeople}
              </p>
            </div>
            <div className="px-3 py-2 border-gray-300 shadow">
              <h1 className="font-semibold text-primary">
                One Death Per People
              </h1>
              <p className="text-sm font-medium text-gray-500">
                {countryData?.oneDeathPerPeople}
              </p>
            </div>
            <div className="px-3 py-2 border-gray-300 shadow">
              <h1 className="font-semibold text-primary">
                One Test Per People
              </h1>
              <p className="text-sm font-medium text-gray-500">
                {countryData?.oneTestPerPeople}
              </p>
            </div>
          </div>
          <div className=" w-full h-[400px] rounded-xl z-20">
            {CountryQuery.status === "success" && (
              <MapContainer
                center={[
                  countryData?.countryInfo.lat,
                  countryData?.countryInfo.long,
                ]}
                zoom={4}
                scrollWheelZoom={true}
                style={{ width: "100%", height: "100%", zIndex: 20 }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker
                  position={[
                    countryData?.countryInfo.lat,
                    countryData?.countryInfo.long,
                  ]}
                >
                  <Popup className="flex gap-0">
                    <p>{countryData?.country}</p>
                    <p>{countryData?.active}</p>
                  </Popup>
                </Marker>
              </MapContainer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryData;
