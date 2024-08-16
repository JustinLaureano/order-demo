import React from 'react';
import { ToastContainer } from 'react-toastify';
import CssBaseline from '@mui/material/CssBaseline';
import PrimaryThemeProvider from './Providers/PrimaryThemeProvider';
import UIProvider from './Providers/UIProvider';

interface AppContainerProps {
    children: React.ReactNode;
}

export default function AppContainer({ children }: AppContainerProps) {

    return (
        <PrimaryThemeProvider>
            <UIProvider>
                <CssBaseline />
                    {children}
                <ToastContainer autoClose={4000} />
            </UIProvider>
        </PrimaryThemeProvider>
    );
}
