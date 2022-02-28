import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Search as SearchIcon } from '@mui/icons-material';
import { AccountBalanceWallet as WalletIcon } from '@mui/icons-material';
import { Logout as LogoutIcon } from '@mui/icons-material';
import WavesImage from './components/WavesImage';
import Footer from './components/Footer';
import NFTCard from './components/NFTCard/NFTCard';
import { Search, SearchIconWrapper, StyledInputBase, StyledInputBaseFullSearch } from './components/Search';
import * as solana from '@solana/web3.js';

function App() {
  const [walletConnectedStatus, setWalletConnectedStatus] = useState(false);

  function walletConnect() {
    alert("Connecting Wallet!");
    try {
      window.solana.connect();
      window.solana.request({ method: "connect" });
      setWalletConnectedStatus(true);
    } catch (e) {
      console.log("Error occurred. ", e);
    }
  }

  function walletDisconnect() {
    alert("Disconnecting wallet!");
    window.solana.disconnect();
    window.solana.request({ method: "disconnect" });
    setWalletConnectedStatus(false);
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="relative">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Box component="img" sx={{ height: 64 }} alt="Tsunami Logo"
              src="/img/tsunami-logo.svg" />
            <Container>
              <Typography variant="h5">Tsunami Protocol</Typography>
              <Typography variant="subtitle1">Content NFT Marketplace</Typography>
            </Container>
            <Stack spacing={2} direction="row">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              <Divider orientation="vertical" variant="middle" flexItem sx={{ padding: 1 }} />
              <Tooltip title="Connect a wallet">
                <Button aria-label="login" variant="contained" sx={{ padding: 1 }} disabled={walletConnectedStatus} onClick={() => walletConnect()}>
                  Connect...
                </Button>
              </Tooltip>
              <Divider orientation="vertical" variant="middle" flexItem sx={{ padding: 1 }} />
              <Tooltip title="Disconnect wallet">
                <IconButton aria-label="logout" variant="contained" sx={{ padding: 1 }} disabled={!walletConnectedStatus} onClick={() => walletDisconnect()} >
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          </Toolbar>
        </AppBar>
        <Container>
          <WavesImage />
          <Typography variant='h4'>Purchase Data</Typography>
          <Typography variant='subtitle1'>Search the Tsunami marketplace to find then purchase the dataset or algorithm you need.</Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBaseFullSearch
              placeholder="Find the NFTs you need…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <hr />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 9, md: 12 }}>
              {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <NFTCard
                    index={index}
                    description="This artwork is from a unique collection of Ethereum NFTs.  The artist is well known in the community.">
                  </NFTCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
