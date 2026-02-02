import Button from '@mui/material/Button';


const Modal = () => {
  return <div className="backdrop">
    <div><h2>Sign up</h2>
    <form action="">
      <ul>
        <li>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </li>
        <li>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" required />
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </li>
        <li>
        <Button variant="contained" color="default">
          Sign Up
        </Button>
        </li>
      </ul>
    </form>
    </div>
  </div>;
};
export default Modal;