import { Separator } from "@/components/ui/separator";
import { Country } from "@/types/CountryType";
import { useQuery } from "@tanstack/react-query";
import { Globe2 } from "lucide-react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const CountryWisePage = () => {
  const countriesQuery = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await fetch("https://disease.sh/v3/covid-19/countries");
      return response.json();
    },
  });

  const countries: Country[] = countriesQuery.data;

  return (
    <div className="px-1 py-12 mob:px-3 lg:px-6">
      <div className="flex items-center justify-center gap-4 mb-8 mob:gap-8">
        <Globe2 size={48} />
        <h1 className="text-xl font-bold lg:text-3xl text-primary">
          Countries Data
        </h1>
      </div>
      <Separator />
      <div className="px-4 py-12">
        <div className=" h-[500px] w-full">
          {countriesQuery.status === "success" && (
            <MapContainer
              center={[
                countries[0].countryInfo.lat,
                countries[0].countryInfo.long,
              ]}
              zoom={4}
              scrollWheelZoom={true}
              style={{ width: "100%", height: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {countries.map((country) => (
                <Marker
                  key={country.countryInfo._id}
                  position={[country.countryInfo.lat, country.countryInfo.long]}
                >
                  <Popup>
                    <div>
                      <div className="flex items-center justify-center gap-4 pb-3">
                        <img
                          src={country.countryInfo.flag}
                          alt=""
                          className="w-[40px] h-[30px] aspect-auto"
                        />
                        <h1 className="text-lg font-bold">{country.country}</h1>
                      </div>
                      <Separator />
                      <p>Active Cases: {country?.active}</p>
                      <p>Recovered Cases: {country?.recovered}</p>
                      <p>Deaths: {country?.deaths}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryWisePage;
