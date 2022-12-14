import './App.css';
import React, { useState, useMemo, createContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import RandomFactContainer from './Containers/RandomFactContainer';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = createContext({toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(() => ({
      toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
  [],
  );

  const theme = useMemo(() =>
    createTheme({
      palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <div className='fact-container'>
        <div className='dark-mode-button'>
          {theme.palette.mode} mode
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>
        <RandomFactContainer />
      </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  );
}

export default App;
