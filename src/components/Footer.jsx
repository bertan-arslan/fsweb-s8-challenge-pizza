import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="footerContent">
        <section className="footerMain">
          <div className="shopInfo">
            <img src="/images/footer/logo-footer.svg" />
            <div className="footerContactInfo">
              <img src="/images/footer/icons/location.png" />
              <p>
                341 Londonderry Road,
                <br />
                Istanbul, Türkiye{" "}
              </p>
              <img src="/images/footer/icons/mail.png" />
              <p>aciktim@teknolojikyemekler.com</p>
              <img src="/images/footer/icons/phone.png" />
              <p>+90 216 123 45 67</p>
            </div>
          </div>
          <div className="footerMenu">
            <p className="footerMenuHeading">Hot Menu</p>
            <div className="footerMenuFood">
              <p>Terminal Pizza</p>
              <p>5 Kişilik Hackathlon Pizza</p>
              <p>useEffect Tavuklu Pizza</p>
              <p>Beyaz Console Frosty</p>
              <p>Testler Geçti Mutlu Burger</p>
              <p>Position Absolute Acı Burger</p>
            </div>
          </div>
          <div className="footerInsta">
            <p>Instagram</p>
            <div className="instaPhoto">
              <img src="/images/footer/insta/li-0.png" />
              <img src="/images/footer/insta/li-1.png" />
              <img src="/images/footer/insta/li-2.png" />
              <img src="/images/footer/insta/li-3.png" />
              <img src="/images/footer/insta/li-4.png" />
              <img src="/images/footer/insta/li-5.png" />
            </div>
          </div>
        </section>
        <hr className="footerSeparator" />
        <section className="footerBottom">
          <p>© 2023 Teknolojik Yemekler. </p>
          <FontAwesomeIcon
            icon={faTwitter}
            className="twitterIcon"
          ></FontAwesomeIcon>
        </section>
      </div>
    </footer>
  );
}
