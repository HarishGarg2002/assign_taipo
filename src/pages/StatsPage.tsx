import { Separator } from "@/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import { AreaChart } from "lucide-react";

interface GlobalStats {
  updated: number;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
  affectedCountries: number;
}
const StatsPage = () => {
  const globalStatsQuery = useQuery({
    queryKey: ["globalStats"],
    queryFn: async () => {
      const response = await fetch("https://disease.sh/v3/covid-19/all");
      return response.json();
    },
  });

  const globalStats: GlobalStats = globalStatsQuery.data;

  return (
    <div className="max-h-screen px-3 py-12 overflow-auto lg:px-6 no-scrollbar">
      <div className="flex items-center justify-center gap-8 mb-8">
        <AreaChart size={48} />
        <h1 className="text-xl font-bold mob:text-3xl text-primary">Stats</h1>
      </div>
      <Separator />
      <div className="px-1 py-12 lg:px-4">
        <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-2 md:grid-cols-4 md:gap-3 lg:grid-cols-5 lg:gap-5">
          <div className="px-4 py-4 rounded-lg shadow-md ">
            <h1 className="text-lg font-semibold text-primary">Total Cases</h1>
            <p className="text-secondary-foreground">{globalStats?.cases}</p>
          </div>
          <div className="px-4 py-4 rounded-lg shadow-md ">
            <h1 className="text-lg font-semibold text-primary">Total Deaths</h1>
            <p className="text-secondary-foreground">{globalStats?.deaths}</p>
          </div>
          <div className="px-4 py-4 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold text-primary">
              Total Recovered
            </h1>
            <p className="text-secondary-foreground">
              {globalStats?.recovered}
            </p>
          </div>
          <div className="px-4 py-4 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold text-primary">Active Cases</h1>
            <p className="text-secondary-foreground">{globalStats?.active}</p>
          </div>
          <div className="px-4 py-4 rounded-lg shadow-md ">
            <h1 className="text-lg font-semibold text-primary">
              Critical Cases
            </h1>
            <p className="text-secondary-foreground">{globalStats?.critical}</p>
          </div>
          <div className="px-4 py-4 rounded-lg shadow-md ">
            <h1 className="text-lg font-semibold text-primary">Tests</h1>
            <p className="text-secondary-foreground">{globalStats?.tests}</p>
          </div>
          <div className="px-4 py-4 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold text-primary">Population</h1>
            <p className="text-secondary-foreground">
              {globalStats?.population}
            </p>
          </div>
          <div className="px-4 py-4 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold text-primary">
              Affected Countries
            </h1>
            <p className="text-secondary-foreground">
              {globalStats?.affectedCountries}
            </p>
          </div>
          <div className="px-4 py-4 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold text-primary">
              Cases Per One Million
            </h1>
            <p className="text-secondary-foreground">
              {globalStats?.casesPerOneMillion}
            </p>
          </div>
          <div className="px-4 py-4 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold text-primary">
              Deaths Per One Million
            </h1>
            <p className="text-secondary-foreground">
              {globalStats?.deathsPerOneMillion}
            </p>
          </div>
          <div className="px-4 py-4 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold text-primary">
              Tests Per One Million
            </h1>
            <p className="text-secondary-foreground">
              {globalStats?.testsPerOneMillion}
            </p>
          </div>
          <div className="px-4 py-4 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold text-primary">
              Active Per One Million
            </h1>
            <p className="text-secondary-foreground">
              {globalStats?.activePerOneMillion}
            </p>
          </div>
          <div className="px-4 py-4 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold text-primary">
              Recovered Per One Million
            </h1>
            <p className="text-secondary-foreground">
              {globalStats?.recoveredPerOneMillion}
            </p>
          </div>
          <div className="px-4 py-4 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold text-primary">
              Critical Per One Million
            </h1>
            <p className="text-secondary-foreground">
              {globalStats?.criticalPerOneMillion}
            </p>
          </div>
          <div className="px-4 py-4 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold text-primary">
              One Case Per People
            </h1>
            <p className="text-secondary-foreground">
              {globalStats?.oneCasePerPeople}
            </p>
          </div>
          <div className="px-4 py-4 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold text-primary">
              One Death Per People
            </h1>
            <p className="text-secondary-foreground">
              {globalStats?.oneDeathPerPeople}
            </p>
          </div>
          <div className="px-4 py-4 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold text-primary">
              One Test Per People
            </h1>
            <p className="text-secondary-foreground">
              {globalStats?.oneTestPerPeople}
            </p>
          </div>
          <div className="px-4 py-4 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold text-primary">Updated</h1>
            <p className="text-secondary-foreground">
              {new Date(globalStats?.updated).toDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
