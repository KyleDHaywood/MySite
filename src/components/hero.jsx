import { typeImplementation } from "@testing-library/user-event/dist/type/typeImplementation";
import "../styles/hero.css";

const Hero = () => {
  var banner = [
    ["index.html", "strawberries.jpg"],
    ["index.html", "potatoes.jpg"],
    ["index.html", "honey-jars.jpg"],
    ["index.html", "Ears-corn.jpg"],
    ["index.html", "yams.jpg"],
  ];
  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  return (
    <div id="ad-container">
      <a href={banner[0][0]} target="_blank" rel="nofollow">
        <img src={"./img/" + banner[0][1]} alt="Banner Ad"></img>
      </a>
    </div>
  );
  const returnHero = () => {};
  // setInterval(returnHero, 3000);
};

export default Hero;
