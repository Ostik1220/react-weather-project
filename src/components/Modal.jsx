import Button from '@mui/material/Button';
import style from '../css/modal.module.css';
import { useEffect } from "react";

const Modal = ({ open, setOpen, onLogin }) => {

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, setOpen]);

  if (!open) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };

  const localizeUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;

    localStorage.setItem("User", username);
    onLogin(username);
    setOpen(false);
  };

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
              height: '35px'
            }}
            type='submit'
          >
            Sign Up
          </Button>
          <p className={style.text}>
            Already have an account?{' '}
            <a href="./" className={style.link}>
              Log In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Modal;
