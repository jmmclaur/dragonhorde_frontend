export const defaultDragonItems = [
  {
    _id: 0,
    name: "Black",
    weather: "hot",
    imageUrl: "",
  },
  {
    _id: 1,
    name: "Red",
    weather: "hot",
    imageUrl: "",
  },
  {
    _id: 2,
    name: "Green",
    weather: "warm",
    imageUrl: "",
  },
  {
    _id: 3,
    name: "Blue",
    weather: "cold",
    imageUrl: "",
  },
  {
    _id: 4,
    name: "White",
    weather: "cold",
    imageUrl: "",
  },
  {
    _id: 5,
    name: "Gold",
    weather: "hot",
    imageUrl: "",
  },
  {
    _id: 5,
    name: "Bronze",
    weather: "hot",
    imageUrl: "",
  },
  {
    _id: 5,
    name: "Copper",
    weather: "warm",
    imageUrl: "",
  },
  {
    _id: 5,
    name: "Brass",
    weather: "warm",
    imageUrl: "",
  },
  {
    _id: 5,
    name: "Silver",
    weather: "cold",
    imageUrl: "",
  },
];

export const apiKey = "5eae8c34762df345296377984b708784";

export const coordinates = {
  latitude: 41.25716,
  longitude: -95.995102,
};

export const defaultWeatherOptions = {
  day: {
    url: new URL("../assets/day/default_day.png", import.meta.url).href,
  },
  night: {
    url: new URL("../assets/night/default_night.png", import.meta.url).href,
  },
};

export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/day/clear_day.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../assets/night/clear_night.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "cloudy",
    url: new URL("../assets/day/cloudy_day.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "cloudy",
    url: new URL("../assets/night/cloudy_night.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "rainy",
    url: new URL("../assets/day/rainy_day.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "rainy",
    url: new URL("../assets/night/rainy_night.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "snowy",
    url: new URL("../assets/day/snowy_day.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "snowy",
    url: new URL("../assets/night/snowy_night.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "stormy",
    url: new URL("../assets/day/stormy_day.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "stormy",
    url: new URL("../assets/night/stormy_night.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "foggy",
    url: new URL("../assets/day/foggy_day.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "foggy",
    url: new URL("../assets/night/foggy_night.png", import.meta.url).href,
  },
];
