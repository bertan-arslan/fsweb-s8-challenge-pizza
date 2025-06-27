import "./Home.css";
import { useHistory } from "react-router-dom";

import Logo from "./Logo";
import ribbonFood from "./Info/InfoHomeRibbonFood";
import foodList from "./Info/InfoFoodList";

export default function Home() {
  let history = useHistory();

  const handleClick = () => {
    history.push("/OrderPizza");
  };

  return (
    <main>
      <header id="banner">
        <Logo />
        <h1 className="sloganTop">fırsatı kaçırma</h1>
        <h1 className="slogan">
          KOD ACIKTIRIR <br /> PİZZA, DOYURUR
        </h1>
        <button
          className="buttonAciktim"
          type="button"
          onClick={handleClick}
          data-cy="aciktim-button"
        >
          ACIKTIM
        </button>
      </header>

      <section className="menuWrapper">
        <div className="menuRibbonWrapper">
          <div className="menuRibbonContent">
            {ribbonFood.map((f, index) => (
              <section key={index} className="ribbonSection">
                <img src={f.imgSrc} className="ribbonImg" />
                <span className="ribbonName">
                  {f.nameTr}
                  {f.new && <span>YENİ!</span>}
                </span>
              </section>
            ))}
          </div>
        </div>

        <div className="menuContentWrapper">
          <div className="menuContent">
            <div className="menuAdvert">
              <div className="menuAdvertOne">
                <h2 className="menuAdvertOneTitle">
                  Özel <br />
                  Lezzetus
                </h2>
                <p className="menuAdvertOneInfo">Position:Absolute Acı Pizza</p>
                <button
                  className="homeOrderButton"
                  type="button"
                  onClick={handleClick}
                >
                  Sipariş Ver
                </button>
              </div>
              <div className="menuAdvertTwo">
                <p className="menuAdvertTwoInfo">
                  Hackathlon <br />
                  Burger Menü
                </p>

                <button
                  className="homeOrderButton"
                  type="button"
                  onClick={handleClick}
                >
                  Sipariş Ver
                </button>
              </div>
              <div className="menuAdvertThree">
                <p className="menuAdvertThreeInfo">
                  <span style={{ color: "#CE2829" }}>Çoooook</span>hızlı <br />
                  npm gibi kurye
                </p>
                <button
                  className="homeOrderButton"
                  type="button"
                  onClick={handleClick}
                >
                  Sipariş Ver
                </button>
              </div>
            </div>
            <div className="favMenu">
              <p className="favMenuText">en çok paketlenen menüler</p>
              <p className="favMenuSlogan">
                Acıktıran Kodlara Doyuran Lezzetler
              </p>
            </div>
            <div className="menuRibbonWrapper">
              <div className="menuRibbonContent">
                {ribbonFood.map((f, index) => (
                  <section
                    key={index}
                    className="ribbonSection"
                    style={
                      f.nameEng === "Pizza"
                        ? {
                            backgroundColor: "#292929",
                            color: "white",
                            borderRadius: "50px",
                          }
                        : {}
                    }
                  >
                    <img src={f.imgSrc} className="ribbonImg" />
                    <span className="ribbonName">{f.nameEng}</span>
                  </section>
                ))}
              </div>
            </div>

            <div className="menuFood">
              {foodList.map((food) => (
                <div className="foodContainer">
                  <img src={food.imgUrl} />
                  <div className="foodContainerInfo">
                    <p className="foodName">{food.name}</p>
                    <div className="foodContainerDetail">
                      <p>{food.rating}</p>
                      <p>({food.comment})</p>
                      <p style={{ fontWeight: "600" }}>{food.price}₺</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
