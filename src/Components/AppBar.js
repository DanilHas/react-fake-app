import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function appBarLabel(label) {
  return (
    <Toolbar>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1 }}
      >
        {label}
      </Typography>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export default function DarkAppBar() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar
        position="static"
        color="primary"
        sx={{ marginBottom: '31px' }}
      >
        {appBarLabel('Users Profiles')}
      </AppBar>
    </ThemeProvider>
  );
}
