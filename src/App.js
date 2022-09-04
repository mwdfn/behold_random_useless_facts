import React, { useState, useMemo, createContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import RandomFacts from './Containers/RandomFacts';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {

  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
  () => ({
      toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
  }),
  [],
  );

  const theme = React.useMemo(() =>
    createTheme({
      palette: {
          mode,
      },
      }),
    [mode],
  );

  return (
    <>
    {theme.palette.mode} mode
    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RandomFacts />
      </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  );
}

export default App;
