import Button from '@mui/material/Button';
import style from '../css/modal.module.css';
import { useEffect, useState } from 'react';
  import {  toast } from 'react-toastify';

const Modal = ({ open, setOpen, onLogin }) => {
  const [accountExist, setAccountExist] = useState(false)
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, setOpen]);

  if (!open) return null;

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };
 const notifySuccess = () => toast.success("Successfully logged in.");


  const localizeUser = e => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    localStorage.setItem('User', username);
    onLogin(username);
    setOpen(false);
    notifySuccess()
    localStorage.setItem('logged', true)
  };
if (accountExist === false){
  return (
    <div className={style.backdrop} onClick={handleBackdropClick}>
      <div className={style.modal}>
        <h2 className={style.title}>Sign up</h2>
        <form className={style.form} onSubmit={localizeUser}>
          <ul className={style.list}>
            <li className={style.item}>
              <label htmlFor="username" className={style.label}>
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                className={style.input}
              />
            </li>
            <li className={style.item}>
              <label htmlFor="email" className={style.label}>
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={style.input}
              />
            </li>
            <li className={style.item}>
              <label htmlFor="password" className={style.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className={style.input}
              />
            </li>
          </ul>
          <Button
            variant="contained"
            color="default"
            sx={{
              width: {
                xs: '107px',
                md: '107px',
                lg: '114px',
              },
              height: '35px',
            }}
            type="submit"
          >
            Sign Up
          </Button>
          
          <p className={style.text}>
            Already have an account?{' '}
            <a className={style.link} onClick={() => setAccountExist(true)}>
              Log In
            </a>
          </p>
        </form>
      </div>
    </div>
  )} else {
   return (
    <div className={style.backdrop} onClick={handleBackdropClick}>
      <div className={style.modal}>
        <h2 className={style.title}>Log in</h2>
        <form className={style.form} onSubmit={localizeUser}>
          <ul className={style.list}>
            <li className={style.item}>
              <label htmlFor="username" className={style.label}>
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                className={style.input}
              />
            </li>
            <li className={style.item}>
              <label htmlFor="password" className={style.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className={style.input}
              />
            </li>
          </ul>
          <Button
            variant="contained"
            color="default"
            sx={{
              width: {
                xs: '107px',
                md: '107px',
                lg: '114px',
              },
              height: '35px',
            }}
            type="submit"
          >
            Log in
          </Button>
          
          <p className={style.text}>
            Don't have an account?{' '}
            <a className={style.link} onClick={() => setAccountExist(false)}>
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  )};
};
export default Modal;
