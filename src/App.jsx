import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Sidebar, Menu, MenuItem, SubMenu, ProSidebarProvider } from 'react-pro-sidebar';

import { Box, Button, Container, ThemeProvider, Typography } from '@mui/material';
import SideNav from './components/SideNav';
import AppHeader from './components/AppHeader';
import theme from './config/theme';
import router from './router/AppRoutes';
import { BrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import Content from './containers/Content';
import Analytics from './containers/Analytics';
import Customization from './containers/Customization';
import AppRoutes from './router/AppRoutes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />

          <AppHeader />
          <Box sx={styles.container}>
            <BrowserRouter>
              <SideNav />
              <Box
                component={'main'}
                sx={styles.mainSection}
              >
                <AppRoutes />
              </Box>

            </BrowserRouter>

          </Box>
        </ProSidebarProvider>
      </ThemeProvider>

    </React.Fragment>
  )
}

/**
 * @type {import('@mui/material').SxProps}
 */
const styles = {
  container: {
    display: 'flex',
    bgcolor: 'neutral.light',
  },
  mainSection: {
    p: 4,
    width: '100%',
    height: 'calc(100vh - 64px)',
    overflow: 'auto',
  }
}
export default App
