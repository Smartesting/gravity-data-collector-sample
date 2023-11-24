import React from 'react';
import './App.css';
import GravityCollector from '@smartesting/gravity-data-collector/dist'
import {
    AppBar,
    Box,
    createTheme,
    CssBaseline, Divider,
    Drawer,
    IconButton, List, ListItem, ListItemButton, ListItemText,
    ThemeProvider,
    Toolbar,
    Typography
} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';

import Routing, {samplePages} from "./routing";
import {useNavigate} from "react-router-dom";
import Menu from "./Menu";

function App() {
    if (process.env.REACT_APP_GRAVITY_KEY) {
        GravityCollector.init({
            authKey: process.env.REACT_APP_GRAVITY_KEY
        })
    }
    const defaultTheme = createTheme()
    const navigate = useNavigate()

    return (
      <ThemeProvider theme={defaultTheme}>
          <Box sx={{ display: 'flex' }}>
              <CssBaseline />
              <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                  <Toolbar>
                      <Typography variant="h6" noWrap component="div">
                          @smartesting/gravity-data-collector-samples
                      </Typography>
                  </Toolbar>
              </AppBar>
              <Menu />
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                  <Toolbar />
                  <Routing />
              </Box>
          </Box>
      </ThemeProvider>
    )
}

export default App;
