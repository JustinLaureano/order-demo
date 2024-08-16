import React from 'react';
import { Box, Toolbar } from '@mui/material';
import NavigationDrawer from '@/Components/Navigation/NavigationDrawer';
import TopAppBar from '@/Components/AppBars/TopAppBar';
import BottomNavigationBar from '@/Components/Navigation/BottomNavigationBar';

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
                {/* This toolbar is just a spacer */}
                <Toolbar variant="dense" />
                {children}
            </Box>

            <BottomNavigationBar />
        </Box>
    );
}