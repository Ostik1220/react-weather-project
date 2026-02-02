import { createTheme } from '@mui/material/styles';

const WeatherTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
        fontFamily: "Montserrat Alternates",
          textTransform: 'none',
          borderRadius: 10,
          fontWeight: 500,
          fontSize: '12px',
          height: 36,
          padding: '10px 20px',
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'signup' },
          style: {
            backgroundColor: '#ffb36c',
            color: '#000',
            '&:hover': {
              backgroundColor: '#f5a85d',
            },
          },
        },
      ],
    },
  },

  palette: {
    default: {
      main: '#ffb36c',
      contrastText: '#000',
    },
  },
});

export default WeatherTheme;
