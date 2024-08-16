import React from 'react';
import { AppBar, Toolbar, Typography, useTheme } from '@mui/material';
import PrimaryLogo from '@/Components/PrimaryLogo';
import { PageProps } from '@/types';
import NavigationToggle from './NavigationToggle';

export default function TopAppBar(props : PageProps) {
    const theme = useTheme();

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                borderBottom: 1,
                borderColor: theme.palette.mode == 'light' ? '#0000001f' : '#ffffff2e',
                zIndex: (theme) => theme.zIndex.drawer + 1,
                '& .MuiToolbar-root': {
                    paddingLeft: '.5rem',
                  },
            }}>
            <Toolbar variant="dense">

                <NavigationToggle />

                <Typography variant="h6" noWrap component="div" sx={{ pl: 2 }}>
                    Demo
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
