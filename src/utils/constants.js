export const defaultDragonItems = [
  {
    _id: 0,
    name: "Black",
    weather: "hot",
    species: "chromatic",
    imageUrl:
      "https://i.pinimg.com/originals/88/56/e5/8856e5f2a83209a359a983a25f471117.png",
  },
  {
    _id: 1,
    name: "Red",
    weather: "hot",
    species: "chromatic",
    imageUrl:
      "https://th.bing.com/th/id/OIP.sZv1ZHWJP-jMjCo9oQV9OgHaFm?w=265&h=200&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    _id: 2,
    name: "Green",
    weather: "warm",
    species: "chromatic",
    imageUrl:
      "https://th.bing.com/th/id/OIP.Kna-NU7buePxbTOtecTZVQHaJW?w=155&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    _id: 3,
    name: "Blue",
    weather: "cold",
    species: "chromatic",
    imageUrl:
      "https://th.bing.com/th/id/OIP.JsN9VXP4spAim_NIzwGvagHaE6?w=292&h=194&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    _id: 4,
    name: "White",
    weather: "cold",
    species: "chromatic",
    imageUrl:
      "https://th.bing.com/th/id/OIP.WsdxO1vCsOTsyq5Ntqug1gHaFc?w=239&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    _id: 5,
    name: "Gold",
    weather: "hot",
    species: "metallic",
    imageUrl:
      "https://th.bing.com/th/id/OIP.-uaZck606ZaxOLWscftuvgHaJl?w=137&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    _id: 5,
    name: "Bronze",
    weather: "hot",
    species: "metallic",
    imageUrl:
      "https://th.bing.com/th/id/OIP.ibLIn28_ql5i0GoGCRtIXQHaKS?w=158&h=219&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    _id: 5,
    name: "Copper",
    weather: "warm",
    species: "metallic",
    imageUrl:
      "https://th.bing.com/th/id/OIP.0ObfrmntMTeIqbHXM0uHpAHaKT?w=136&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    _id: 5,
    name: "Brass",
    weather: "warm",
    species: "metallic",
    imageUrl:
      "https://th.bing.com/th/id/OIP.pxrC1zZkNj4NEKezIuDZ4AAAAA?w=236&h=199&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    _id: 5,
    name: "Silver",
    weather: "cold",
    species: "metallic",
    imageUrl:
      "https://th.bing.com/th/id/OIP.aYXk2MICiY85U1bR4Ehx2QDWEs?w=139&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",
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
