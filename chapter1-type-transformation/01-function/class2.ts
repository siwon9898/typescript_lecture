//문제

import { Equal, Expect } from "../../helper";

const getLocationWeather = (locationId: string) => {
  return `Weather at lcoation ${locationId}`;
};

type getLocationWeatherReturn = ReturnType<typeof getLocationWeather>;

const getDetailedWeather = (
  locationId: string,
  details?: {
    tempUnit: "C" | "F";
    includeForecast?: boolean;
  }
) => {};

type getDetailedWeatherParameters = Parameters<typeof getDetailedWeather>;

//답
type tests = [
  Expect<Equal<getLocationWeatherReturn, string>>,
  Expect<
    Equal<
      getDetailedWeatherParameters,
      [
        locationId: string,
        details?: {
          tempUnit: "C" | "F";
          includeForecast?: boolean;
        }
      ]
    >
  >
];
