export interface Country {
  active: number;
  cases: number;
  tests: number;
  continent: string;
  country: string;
  countryInfo: {
    flag: string;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    _id: number;
  };
  critical: number;
  deaths: number;
  population: number;
  recovered: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  casesPerOneMillion: number;
  criticalPerOneMillion: number;
  deathsPerOneMillion: number;
  recoveredPerOneMillion: number;
  testsPerOneMillion: number;
  todayCases: number;
  todayDeaths: number;
  todayRecovered: number;
  updated: number;
}
