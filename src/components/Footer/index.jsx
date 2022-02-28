import { AppBar } from '@mui/material';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import * as React from 'react';

function Footer() {
    return (
        <AppBar position="static" sx={{ padding: 1, margin: 1 }}>
            <Container>
                <Typography variant="caption">
                    &copy; 2021 Tsunami Protocol
                </Typography>
            </Container>
        </AppBar>
    )
};

export default Footer;