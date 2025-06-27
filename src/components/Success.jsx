import "./Success.css";
import { useLocation } from "react-router-dom";

import Logo from "./Logo";

import sizeOptions from "./OptionSize";
import ingredientsList from "./OptionIngeredientsList";
import doughOptions from "./OptionDough.js";

export default function Success() {
  const location = useLocation();
  const { pizza, formData, extraPrice, orderPrice } = location.state || {};

  const selectedSize = sizeOptions.find(
    (option) => option.value === formData.size
  );
  const selectedDough = doughOptions.find(
    (option) => option.value === formData.dough
  );

  return (
    <main className="successContainer" data-cy="success-page">
      <div className="successContentWrapper">
        <header className="successHeader">
          <Logo />
          <h1 className="sloganTop">lezzetin yolda</h1>
          <h1 className="successOrder" data-cy="success-username">
            - {formData.orderUser} -
          </h1>
          <h1 className="successOrder" data-cy="success-message">
            SİPARİŞİN ALINDI
          </h1>
        </header>

        <hr className="successSeparator" />

        <div className="successSummaryWrapper">
          <section className="orderSummary" data-cy="summary-section">
            <p className="orderTitle" data-cy="summary-title">
              {pizza.name}
            </p>
            <div className="orderDetail">
              <p data-cy="summary-size">
                Boyut:{" "}
                <span>
                  {selectedSize ? selectedSize.label : formData.size}{" "}
                </span>
              </p>
              <p data-cy="summary-dough">
                Hamur:{" "}
                <span>
                  {selectedDough ? selectedDough.label : formData.dough}
                </span>
              </p>
              <p data-cy="summary-ingredients">
                Ek Malzemeler:{" "}
                <span>
                  {formData.ingredients
                    .map((ing) => {
                      const selectedIng = ingredientsList.find(
                        (ingList) => ingList.value === ing
                      );
                      if (selectedIng) return selectedIng.label;
                    })
                    .join(", ")}
                </span>
              </p>
              <p data-cy="summary-count">
                Sipariş Adedi: <span>{formData.count}</span>
              </p>
              <p data-cy="summary-note">
                Sipariş Notu:
                {formData.orderNote}
              </p>
            </div>
          </section>
          <section className="successOrderPrice" data-cy="summary-price">
            <div className="successOrderTotalPrice">
              <p className="successOrderTotal">Sipariş Toplamı</p>
              <div className="successPrice">
                <div
                  className="successExtraPrice"
                  data-cy="summary-extra-price"
                >
                  <p>Seçimler</p>
                  <p> {extraPrice.toFixed(2)}₺</p>
                </div>
                <div
                  className="successTotalPrice"
                  data-cy="summary-total-price"
                >
                  <p>Toplam</p>
                  <p> {orderPrice.toFixed(2)}₺</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
