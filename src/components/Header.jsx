import { TiArrowSortedDown } from 'react-icons/ti';
import Button from '@mui/material/Button';
import logo from '../img/logo.png';
import user from '../img/user.png';
import styles from '../css/header.module.css';

const Header = () => {
  return (
    <div className="container">
      <div className={styles.header}>
        {/* <TiArrowSortedDown size={24} color="black" /> */}
        <img src={logo} alt="Logo" className={styles.logo} />
        <ul className={styles.list}>
          <li>
            <a href="" className={styles.itemLink}>
              Who we are
            </a>
          </li>
          <li>
            <a href="" className={styles.itemLink}>
              Contacts
            </a>
          </li>
          <li>
            <a href="" className={styles.itemLink}>
              Menu
            </a>
          </li>
        </ul>
        <div className={styles.userBox}>
          <Button
            variant="contained"
            color="default"
          >
            Sign Up
          </Button>
          <img src={user} alt="User" />
        </div>
      </div>
    </div>
  );
};
export default Header;
