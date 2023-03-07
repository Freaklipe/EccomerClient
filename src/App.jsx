import { Provider } from 'react-redux';
import { AppRouter } from './router/AppRouter';
import { store } from './store';

// import './index.css';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme';

function App() {

  return (
    <Provider store={ store }>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
