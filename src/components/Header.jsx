import { TiArrowSortedDown } from 'react-icons/ti';
import { IoTrashBin } from "react-icons/io5";
import Button from '@mui/material/Button';
import logo from '../img/logo.png';
import user from '../img/user.png';
import styles from '../css/header.module.css';
import Modal from './Modal.jsx';
import { useState} from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);
  const [userName, setUserName] = useState(localStorage.User || null);

  let mobileMenu = null
  const rotate = e => {
    setMobOpen(prev => !prev);
    e.currentTarget.style.transform = mobOpen ? 'rotate(0deg)' : 'rotate(-90deg)';
  };

  const resetLoginisation = () => {
    localStorage.clear();
    setUserName(null);
  };

  const loginisation = userName ? (<div className={styles.boxName}>
        <IoTrashBin className={styles.treshName} onClick={resetLoginisation}/>
    <a className={styles.itemLinkName} onClick={resetLoginisation}>
     {userName}
    </a>
    </div>
  ) : (
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
  );

  if (mobOpen === true) {
    mobileMenu = (
      <div className={styles.mobMenu}>
        <ul className={styles.mobList}>
          <li>
            <a
              href="#info"
              className={styles.itemLink}
              onClick={() => {
                setMobOpen(false);
              }}
            >
              Who we are
            </a>
          </li>
          <li>
            <a
              href="#footer"
              className={styles.itemLink}
              onClick={() => {
                setMobOpen(false);
              }}
            >
              Contacts
            </a>
          </li>
          <li>
            <a
              href="#menu"
              className={styles.itemLink}
              onClick={() => {
                setMobOpen(false);
              }}
            >
              Menu
            </a>
          </li>
        </ul>
        <div className={styles.mobUserBox}>
{loginisation}
          <img src={user} alt="User" className={styles.user} />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className={styles.header}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <ul className={styles.list}>
            <li>
              <a href="#info" className={styles.itemLink}>
                Who we are
              </a>
            </li>
            <li>
              <a href="#footer" className={styles.itemLink}>
                Contacts
              </a>
            </li>
            <li>
              <a href="#menu" className={styles.itemLink}>
                Menu
              </a>
            </li>
          </ul>
          <div className={styles.userBox}>
            {loginisation}
            <img src={user} alt="User" className={styles.user} />
          </div>
                  <div className={styles.mobInterface}>
          <p className={styles.textInterface}>Menu</p>
          <TiArrowSortedDown size={24} color="black" className={styles.arrow} onClick={rotate}/>
        </div>
        </div>
        <Modal open={open} setOpen={setOpen} onLogin={setUserName} />
      </div>
      {mobileMenu}
    </>
  );
};

export default Header;
