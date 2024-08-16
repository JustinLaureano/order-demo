import * as React from 'react';
import { grey } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Toolbar } from '@mui/material';
import NavigationDrawer from '@/Components/Navigation/NavigationDrawer';
import TopAppBar from '@/Components/AppBars/TopAppBar';
import { PageProps } from '@/types';

export default function DashboardLayout({ children, ...props }) {
    return (
        <Box sx={{
            display: 'flex',
            height: '100vh',
        }}>
            <TopAppBar />

            <NavigationDrawer />

            <Box
                component="main"
                sx={{ flexGrow: 1, px: 2, pt: 2 }}
            >
                <Toolbar variant="dense" />
                {children}
            </Box>
        </Box>
    );
}