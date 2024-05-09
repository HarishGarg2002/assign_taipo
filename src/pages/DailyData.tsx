import { Separator } from "@/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import { BarChart3 } from "lucide-react";
import { useMemo } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Brush,
} from "recharts";

const DailyData = () => {
  const allDaysQuery = useQuery({
    queryKey: ["allDays"],
    queryFn: async () => {
      const response = await fetch(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
      return response.json();
    },
  });

  const allDays = useMemo(() => {
    if (allDaysQuery.status === "success") {
      const cases = Object.entries(allDaysQuery.data.cases);
      const deaths = Object.entries(allDaysQuery.data.deaths);
      const recovered = Object.entries(allDaysQuery.data.recovered);

      return Array.from({ length: cases.length }, (_, i) => {
        return {
          date: cases[i][0],
          cases: cases[i][1],
          death: deaths[i][1],
          recovered: recovered[i][1],
        };
      });
    }
    return [];
  }, [allDaysQuery.status, allDaysQuery.data]);
  return (
    <div className="px-1 py-12 overflow-auto  mob:px-3 lg:px-6 no-scrollbar">
      <div className="flex items-center justify-center gap-4 mb-8 mob:gap-8">
        <BarChart3 size={48} />
        <h1 className="text-xl font-bold lg:text-3xl text-primary">
          Daily Data
        </h1>
      </div>
      <Separator />
      <div className="px-4 py-12">
        <div className="h-[500px] w-full">
          {allDaysQuery.status === "success" && (
            <LineChart
              width={900}
              height={500}
              data={allDays}
              margin={{ top: 5, right: 20, bottom: 5, left: 50 }}
              // className="w-full h-full"
            >
              <Line
                type="monotone"
                dataKey="cases"
                stroke="#8884d8"
                strokeDasharray="1000000 1000000"
              />
              <Line
                type="monotone"
                dataKey="recovered"
                stroke="#82ca9d"
                strokeDasharray="1000000 1000000"
              />
              <Line
                type="monotone"
                dataKey="death"
                stroke="#ff7300"
                strokeDasharray="1000000 1000000"
              />
              <Legend />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis
                dataKey="date"
                padding={{
                  // left: 30,
                  right: 30,
                }}
              />
              <YAxis domain={[0, "dataMax+100000000"]} />
              <Tooltip />
            </LineChart>
          )}
        </div>
        {allDaysQuery.status === "success" && (
          <div className="mt-16">
            <h1 className="px-16 mb-8 text-2xl font-bold text-primary">
              Cases
            </h1>
            <div>
              <LineChart
                width={500}
                height={200}
                data={allDays}
                syncId="anyId"
                margin={{
                  top: 10,
                  right: 30,
                  left: 50,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="cases"
                  stroke="#8884d8"
                  strokeDasharray="1000000 1000000"
                />
              </LineChart>
            </div>

            <h1 className="px-16 mt-8 mb-8 text-2xl font-bold text-primary">
              Recovered
            </h1>
            <div>
              <LineChart
                width={500}
                height={200}
                data={allDays}
                syncId="anyId"
                margin={{
                  top: 10,
                  right: 30,
                  left: 50,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[0, "dataMax+100000000"]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="recovered"
                  stroke="#82ca9d"
                  strokeDasharray="1000000 1000000"
                />
                <Brush />
              </LineChart>
            </div>

            <h1 className="px-16 mt-8 mb-8 text-2xl font-bold text-primary">
              Deaths
            </h1>
            <div>
              <LineChart
                width={500}
                height={200}
                data={allDays}
                syncId="anyId"
                margin={{
                  top: 10,
                  right: 30,
                  left: 50,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="death"
                  stroke="#ff7300"
                  strokeDasharray="1000000 1000000"
                />
              </LineChart>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyData;
