import React from 'react';
import { ToastContainer } from 'react-toastify';
import CssBaseline from '@mui/material/CssBaseline';
import PrimaryThemeProvider from './Providers/PrimaryThemeProvider';
import UIProvider from './Providers/UIProvider';
import LanguageProvider from './Providers/LanguageProvider';

interface AppContainerProps {
    children: React.ReactNode;
}

export default function AppContainer({ children, ...props }: AppContainerProps) {

    return (
        <LanguageProvider {...props}>
            <PrimaryThemeProvider>
                <UIProvider>
                    <CssBaseline />
                    {children}
                    <ToastContainer autoClose={4000} />
                </UIProvider>
            </PrimaryThemeProvider>
        </LanguageProvider>
    );
}
