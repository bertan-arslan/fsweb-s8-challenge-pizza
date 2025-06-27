import "./OrderPizza.css";

import { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";

import Logo from "./Logo";

import foodList from "./Info/InfoFoodList";
import PizzaSize from "./Forms/FormPizzaSize";
import sizeOptions from "./OptionSize";
import PizzaDough from "./Forms/FormPizzaDough";
import ingredientsList from "./OptionIngeredientsList";
import PizzaAdd from "./Forms/FormPizzaAdd";
import OrderUser from "./Forms/FormUserName";
import OrderNote from "./Forms/FormOrderNote";

export const pizza = foodList.find(
  (p) => p.name === "Position Absolute Acı Pizza"
);

const initialForm = {
  orderUser: "",
  size: "",
  dough: "",
  ingredients: [],
  orderNote: "",
  count: 1,
};

const initialErrors = {
  orderUser: false,
  size: false,
  dough: false,
  ingredients: "",
};

const errorMessages = {
  orderUser: "Lütfen bir isim girin.",
  size: "Pizza boyutunu seçin.",
  dough: "Hamur kalınlığını seçin.",
  ingredientsOver: "En fazla 10 adet ekstra malzeme seçebilirsiniz.",
  ingredientsFew: "En az 4 adet ekstra malzeme seçebilirsiniz.",
};

export default function OrderPizza() {
  const history = useHistory();
  const location = useLocation();
  const pizza = foodList.find((p) => p.name === "Position Absolute Acı Pizza");

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setIsValid] = useState(false);
  const [count, setCount] = useState(1);

  const handleChange = (event) => {
    let { type, name, value } = event.target;
    let newValues;

    if (type === "checkbox") {
      const oldValues = formData[name];
      if (oldValues.includes(value)) {
        newValues = oldValues.filter((v) => v !== value);
      } else {
        newValues = [...oldValues, value];
      }
    } else {
      newValues = value;
    }

    setFormData({ ...formData, [name]: newValues });

    if (name === "orderUser") {
      if (value.replaceAll(" ", "").length >= 3) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }
    if (name === "ingredients") {
      if (newValues.length < 4) {
        setErrors({ ...errors, [name]: "few" });
      } else if (newValues.length > 10) {
        setErrors({ ...errors, [name]: "over" });
      } else {
        setErrors({ ...errors, [name]: "" });
      }
    }

    if (name === "size" || name === "dough") {
      if (value !== "") {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }
  };

  useEffect(() => {
    if (
      formData.orderUser.replaceAll(" ", "").length >= 3 &&
      formData.size &&
      formData.dough &&
      formData.ingredients.length >= 4 &&
      formData.ingredients.length <= 10
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  const handleCountUp = () => {
    setCount((prev) => prev + 1);
  };

  const handleCountDown = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const extraPrice = formData.ingredients.length * 5;
  const orderPrice = (pizza.price + extraPrice) * count;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;

    axios
      .post("https://reqres.in/api/users", formData, {
        headers: { "x-api-key": "reqres-free-v1" },
      })
      .then((response) => {
        history.push("/success", { pizza, formData, extraPrice, orderPrice });
        setFormData(initialForm);
      })
      .catch((error) => console.warn(error));
  };

  return (
    <main>
      <div id="container">
        <header>
          <Logo />
        </header>
        <div id="content">
          <div className="sectionHeaderWrapper">
            <section className="sectionHeader">
              <img src={pizza.bannerImgUrl} />
              <nav id="links">
                <Link
                  to="/"
                  className={`navLinks ${
                    location.pathname === "/" ? "activeLink" : ""
                  }`}
                >
                  Anasayfa
                </Link>
                <span style={{ color: "black" }}> - </span>
                <Link
                  to="/OrderPizza"
                  className={`navLinks ${
                    location.pathname === "/OrderPizza" ? "activeLink" : ""
                  }`}
                >
                  Sipariş Oluştur
                </Link>
              </nav>
              <section>
                <h1 id="pizzaTitle">{pizza.name}</h1>
                <div className="infoPizza">
                  <p style={{ fontSize: "28px", fontWeight: "700" }}>
                    {pizza.price}₺
                  </p>
                  <div className="ratingPizza">
                    <p>{pizza.rating}</p>
                    <p>({pizza.comment})</p>
                  </div>
                </div>
                <p>{pizza.info}</p>
              </section>
            </section>
          </div>
          <section className="sectionForm">
            <form onSubmit={handleSubmit}>
              <section className="options">
                <div className="optionSize">
                  <h3 style={{ fontSize: "20px", fontWeight: "600" }}>
                    Boyut Seç
                    <span className="required" style={{ color: "#CE2829" }}>
                      *
                    </span>
                  </h3>
                  <p className="error">{errors.size && errorMessages.size}</p>
                  <div className="sizeOptions">
                    {sizeOptions.map((size) => (
                      <PizzaSize
                        key={size.value}
                        value={size.value}
                        label={size.label}
                        changeFn={handleChange}
                        isChecked={formData.size === size.value}
                        dataCy="size-radio"
                      />
                    ))}
                  </div>
                </div>

                <div className="optionDough">
                  <h3 style={{ fontSize: "20px", fontWeight: "600" }}>
                    Hamur Seç
                    <span className="required" style={{ color: "#CE2829" }}>
                      *
                    </span>
                  </h3>
                  <p className="error">{errors.dough && errorMessages.dough}</p>
                  <PizzaDough
                    changeFn={handleChange}
                    value={formData.dough}
                    dataCy="dough-select"
                  />
                </div>
              </section>

              <section>
                <h3 style={{ fontSize: "20px", fontWeight: "600" }}>
                  Ek Malzemeler
                </h3>
                <p className="ingredientsSelection">
                  En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺
                </p>
                <p className="error">
                  {errors.ingredients === "over" &&
                    errorMessages.ingredientsOver}
                  {errors.ingredients === "few" && errorMessages.ingredientsFew}
                </p>
                <div className="ingredients">
                  {ingredientsList.map((ing) => (
                    <PizzaAdd
                      key={ing.value}
                      changeFn={handleChange}
                      fieldName="ingredients"
                      value={ing.value}
                      label={ing.label}
                      isChecked={formData.ingredients.includes(ing.value)}
                      className="ingredientAdd"
                      dataCy="ingredient-checkbox"
                    />
                  ))}
                </div>
              </section>

              <section className="orderUser">
                <OrderUser
                  value={formData.orderUser}
                  onChange={handleChange}
                  dataCy="input-username"
                />
                <p className="error">
                  {errors.orderUser && errorMessages.orderUser}
                </p>
              </section>

              <section className="orderNoteSection">
                <OrderNote
                  value={formData.orderNote}
                  onChange={handleChange}
                />
              </section>

              <hr />

              <section className="orderFooter">
                <div className="orderCounter">
                  <button
                    className="orderButton leftButton"
                    type="button"
                    onClick={handleCountDown}
                  >
                    -
                  </button>
                  <div className="orderNumber">{count}</div>
                  <button
                    className="orderButton rightButton"
                    type="button"
                    onClick={handleCountUp}
                  >
                    +
                  </button>
                </div>

                <div className="orderTotalPrice">
                  <h3
                    style={{ fontSize: "20px", fontWeight: "600" }}
                    className="orderTotal"
                  >
                    Sipariş Toplamı
                  </h3>
                  <div className="price">
                    <div className="extraPrice">
                      <p>Seçimler</p>
                      <p> {extraPrice.toFixed(2)}₺</p>
                    </div>
                    <div
                      className="totalPrice"
                      style={{ color: "#CE2829", fontWeight: "600" }}
                    >
                      <p>Toplam</p>
                      <p> {orderPrice.toFixed(2)}₺</p>
                    </div>
                  </div>
                </div>
                <button
                  className="orderSubmit"
                  type="submit"
                  disabled={!isValid}
                  data-cy="submit-order"
                >
                  SİPARİŞ VER
                </button>
              </section>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
