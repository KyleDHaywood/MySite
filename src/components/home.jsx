import "../styles/home.css";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";

const Home = () => {
  return (
    <div className="home">
      <div className="mainContainer">
        <Sidebar> </Sidebar>
        <div className="wrapperContainer">
          <div className="wrapper odd">
            <div className="cat-one">
              <Link to="catalog">
                <img src="./img/planeCrash.jpg" alt=""></img>
              </Link>
            </div>
          </div>
          <div className="wrapper even">
            <div className="cat-two ">
              <Link to="catalog">
                <img src="./img/grimdark.jpg" alt=""></img>
              </Link>
            </div>
          </div>
          <div className="wrapper odd">
            <div className="cat-three ">
              <Link to="catalog">
                <img src="./img/terrain.jpg" alt=""></img>
              </Link>
            </div>
          </div>

          <div className="wrapper even">
            <div className="cat-four ">
              <Link to="catalog">
                <img src="./img/military.jpg" alt=""></img>
              </Link>
            </div>
          </div>
          <div className="wrapper odd">
            <div className="cat-five ">
              <Link to="catalog">
                <img src="./img/railroadStation.jpg" alt=""></img>
              </Link>
            </div>
          </div>
          <div className="wrapper even">
            <div className="cat-six ">
              <Link to="catalog">
                <img src="./img/game-color-vallejo-gory-red.jpg" alt=""></img>
              </Link>
            </div>
          </div>
          <div className="wrapper odd">
            <div className="cat-seven ">
              <Link to="catalog">
                <img src="./img/paintBrushes.jpg" alt=""></img>
              </Link>
            </div>
          </div>
          <div className="wrapper even">
            <div className="cat-eight ">
              <Link to="catalog">
                <img src="./img/dice.jpg" alt=""></img>
              </Link>
            </div>
          </div>
          <div className="wrapper odd">
            <div className="cat-nine ">
              <Link to="catalog">
                <img src="./img/superGlue.jpg" alt=""></img>
              </Link>
            </div>
          </div>
          <div className="wrapper even ten">
            <div className="cat-ten ">
              <Link to="catalog">
                <img src="./img/gamingMat.jpg" alt=""></img>
              </Link>
            </div>
          </div>
        </div>
        <Sidebar> </Sidebar>
      </div>
    </div>
  );
};

export default Home;
