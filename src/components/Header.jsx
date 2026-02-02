import { TiArrowSortedDown } from 'react-icons/ti';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <div>
      Header Component
      <TiArrowSortedDown size={24} color="black" />
      <Button variant="contained" color="default">
  Sign Up
</Button>
    </div>
  );
};
export default Header;
