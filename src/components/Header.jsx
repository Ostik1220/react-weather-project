import { TiArrowSortedDown } from 'react-icons/ti';
import Button from '@mui/material/Button';
import logo from '../img/logo.png';
import user from '../img/user.png';
import styles from '../css/header.module.css';
import Modal from './Modal.jsx';
import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <div className={styles.header}>
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
            sx={{
              '@media (min-width:768px)': {
                borderRadius: '10px',
                padding: '0px 0px',
                width: 73,
                height: 28,
                fontSize: '10px',
              },
            }}
            onClick={() => setOpen(true)}
          >
            Sign Up
          </Button>
          <img src={user} alt="User" className={styles.user} />
        </div>
        <div className={styles.mobMenu}>
          <p className={styles.textMenu}>Menu</p>
          <TiArrowSortedDown size={24} color="black" className={styles.arrow} />
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
};
export default Header;
