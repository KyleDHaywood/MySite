import axios from "axios";

var catalog = [
  {
    _id: "12343426t45rtgdfc",
    title: "Vallejo Game Color Dead White",
    image: "game-color-vallejo-dead-white.jpg",
    description: "White",
    price: 8.99,
    category: "paint",
  },
  {
    _id: "sdfw456346344",
    title: "Vallejo Game Color Skin Tone",
    image: "game-color-vallejo-pale-flesh.jpg",
    description: "Flesh tone",
    price: 8.99,
    category: "paint",
  },
  {
    _id: "sf3457u567g",
    title: "Dragon Slayer",
    image: "dragon-slayer.jpg",
    description: "Diorama",
    price: 8.99,
    category: "model",
  },
  {
    _id: "serfw35467",
    title: "Hunter Killer",
    image: "judgement-day.jpg",
    description: "Model",
    price: 6.99,
    category: "model",
  },
  {
    _id: "sfrs54368900hbn",
    title: "Flush cut dykes",
    image: "dykes.jpg",
    description: "5.25 inch flush cut",
    price: 6.0,
    category: "tools",
  },
  {
    _id: "132dcvert312",
    title: "exacto knife set",
    image: "exacto-knife.jpg",
    description: "55 piece set",
    price: 14.49,
    category: "tools",
  },
  {
    _id: "1467fggb67676",
    title: "Testors Plastic Cement",
    image: "plastic-cement.jpg",
    description: "Not Super Glue",
    price: 5.99,
    category: "tools",
  },
  {
    _id: "88dbcxs23324",
    title: "Vallejo Game Color Gory Red",
    image: "game-color-vallejo-gory-red.jpg",
    description: "Blood red",
    price: 8.99,
    category: "paint",
  },
  {
    _id: "sdfklhs9837h3",
    title: "Astra Militarum Sentinel",
    image: "sentinel.jpg",
    description: "Astra Militarum Sentinel",
    price: 35.99,
    category: "wargame",
  },
  {
    _id: "sdfs35436357hd",
    title: "Dreadnought",
    image: "dread.jpg",
    description: "Dreadnought",
    price: 35.99,
    category: "wargame",
  },
  {
    _id: "we5346443654frs2f",
    title: "Demon Prince of Khorne",
    image: "demonprincekhorne.jpg",
    description: "Chaotic Demon",
    price: 34.99,
    category: "wargame",
  },
  {
    _id: "we5346443654frs2f",
    title: "Great Unclean One",
    image: "greatuncleanone.jpg",
    description: "Chaotic Demon",
    price: 34.99,
    category: "wargame",
  },
  {
    _id: "ds56f4sd65f4se89",
    title: "Millenium Falcon",
    image: "mfalcon.jpg",
    description: "Star Wars Millenium Falcon",
    price: 124.99,
    category: "wargame",
  },
  {
    _id: "s4d65f498se4rf2e",
    title: "Model Trees",
    image: "trees.jpg",
    description: "Hobby trees to scale",
    price: 12.99,
    category: "terrain",
  },

  ///add to database
  {
    _id: "56sd4f986sd7f4",
    title: "Battlefield Battlemat",
    image: "matBattlefield.jpg",
    description:
      "Printed on mousepad material, easy to roll and spill-proof. Comes with case.",
    price: 79.99,
    category: "mats",
  },
  {
    _id: "df253g456d7tgr5",
    title: "Hell on Earth Battlemat",
    image: "matHell.jpg",
    description:
      "Printed on mousepad material, easy to roll and spill-proof. Comes with case.",
    price: 79.99,
    category: "mats",
  },
  {
    _id: "fs45e872e3q22",
    title: "Urban Quarantine Battlemat",
    image: "matUrbanQuarantine.jpg",
    description:
      "Printed on mousepad material, easy to roll and spill-proof. Comes with case.",
    price: 79.99,
    category: "mats",
  },
  {
    _id: "es357r23424233247sdds",
    title: "Urban Snow Battlemat",
    image: "matUrbanSnow.jpg",
    description:
      "Printed on mousepad material, easy to roll and spill-proof. Comes with case.",
    price: 79.99,
    category: "mats",
  },
  {
    _id: "sd56f4s654ts5e344",
    title: "Green Flock",
    image: "flockgreen.jpg",
    description: "Summer green grass",
    price: 6.99,
    category: "terrain",
  },
  {
    _id: "s56df4s654te2334",
    title: "Green Static Grass",
    image: "staticGrassGreen.jpg",
    description: "Summer green magnetic static grass",
    price: 9.99,
    category: "terrain",
  },
];

class DataService {
  async getCatalog() {
    // // creates http request
    // // to retrieve data from server
    // //
    // let response = await axios.get("http://127.0.0.1:5000/api/catalog");
    // console.log("test", response.data);
    // return response.data;
    // // returns mock data
    return catalog;
  }

  async getWeather(lat, lon) {
    let api_key = "3cf9142bd208da788d74fc58f0dd43a8";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api_key}&units=imperial`;
    let response = await axios.get(url);
    console.log(response.data);
  }

  registerProduct() {}
}
export default DataService;
