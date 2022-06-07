import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./news.css";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { languages } from "../../language";

const _language = languages["es"];
const Home = () => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Tito el Bambino</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, et qui alia patrioque assentior. Te sea
            eros option, et mazim causae vituperatoribus his. Et soleat
            euripidis nam, pertinacia definitionem vel eu, ei brute iisque
            praesent qui. Cu his doctus audiam assentior, sonet scripta has te.
            Ei hinc duis vix, sea debet erant volutpat ei.
          </p>
          <div
            id="carouselAnimals"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselAnimals"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carouselAnimals" data-slide-to="1"></li>
              <li data-target="#carouselAnimals" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src={dog_One}
                  alt="First slide"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={dog_Two}
                  alt="Second slide"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={dog_Two}
                  alt="Third slide"
                ></img>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselAnimals"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselAnimals"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className="btn-group" role="group" aria-label="Listado Botones">
            <button type="button" className="btn btn-danger">
              No me gusta
            </button>
            <button type="button" className="btn btn-success mr-5">
              Me gusta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
