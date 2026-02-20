import logo from '../img/logo.png';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';
import whatsapp from '../img/whatsapp.png';
import style from '../css/footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer} id="footer">
      <div className={`container ${style.footerContainer}`}>
        <div className={style.box}>
          <img src={logo} alt="Logo" className={style.logo} />
          <div className={style.addresBox}>
            <h4 className={style.addresName}>Address</h4>
            <p className={style.addresText}>
              Svobody str. 35 <br /> Kyiv <br /> Ukraine
            </p>
          </div>
        </div>
        <div className={style.socialBox}>
          <h4 className={style.addresName}>Contact us</h4>
          <ul className={style.contactList}>
            <li>
              <img src={instagram} alt="" className={style.contactLogo} />
            </li>
            <li>
              <img src={facebook} alt="" className={style.contactLogo} />
            </li>
            <li>
              <img src={whatsapp} alt="" className={style.contactLogo} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
