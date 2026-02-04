import Button from '@mui/material/Button';
import style from '../css/modal.module.css';


const Modal = () => {
  return <div className={style.backdrop}>
    <div className={style.modal}>
      <h2 className={style.title}>Sign up</h2>
    <form action="" className={style.form}>
      <ul className={style.list}>
        <li className={style.item}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required className={style.input}/>
        </li>
        <li className={style.item}>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" required className={style.input}/>
        </li>
        <li className={style.item}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required className={style.input}/>
        </li>
      </ul>
              <Button variant="contained" color="default">
          Sign Up
        </Button>
        <p className={style.text}>Already have an account? <a href="./" className={style.link}>Log In</a></p>
    </form>
    </div>
  </div>;
};
export default Modal;