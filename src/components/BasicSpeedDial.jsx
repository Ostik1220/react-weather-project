import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LoginIcon from '@mui/icons-material/Login';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState, useContext } from 'react';
import { CardsContext } from 'cardsContent';
import { toast } from 'react-toastify';


export default function BasicSpeedDial() {
    const [userName, setUserName] = useState(localStorage.User || null);
  const { open, setOpen} = useContext(CardsContext)
  console.log()
   const notifyWarning = () => toast.warning("Successfully logged out.");

const actions = [
  { icon: <LoginIcon />, name: 'Log in', 
    logic: function() {
    setOpen(true)
  }
   },
  { icon: <KeyboardArrowUpIcon />, name: 'Scroll up', logic: function() {
  const el = document.getElementById('header'); 
  if (el) el.scrollIntoView({ behavior: 'smooth' }); 
}},
  { icon: <KeyboardArrowDownIcon />, name: 'Scroll down', logic: function() {
  const el = document.getElementById('footer');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
} },
  { icon: <LogoutIcon />, name: 'Log out', logic: function() {
    notifyWarning()
    setUserName(null);
    console.log(localStorage.logged)
    localStorage.setItem('logged', false)
  } },
];
  return (
    <SpeedDial
      ariaLabel="SpeedDial example"
      sx={{ position: 'fixed', 
        bottom: 16, 
        right: 16, 
        zIndex: 1000,
      }}
      icon={<SpeedDialIcon />}
    >
      {actions.map(action => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          slotProps={{
            tooltip: { title: action.name },
          }}
          onClick={action.logic}
        />
      ))}
    </SpeedDial>
  );
}
