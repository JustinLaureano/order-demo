import React, { useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import ColorModeContext from '@/Contexts/ColorModeContext';

interface AppContainerProps {
    children: React.ReactNode;
}

export default function PrimaryThemeProvider({ children }: AppContainerProps) {
    const [mode, setMode] = useState('light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const baseTheme = createTheme();

    const theme = useMemo(
        () => createTheme({
            palette: {
                mode,
                ...(mode == 'light' && {
                    background: {
                        default: grey[50],
                        paper: grey[50]
                    }
                })
            },

            ...(mode == 'light' && {
                components: {
                    MuiAppBar: {
                        styleOverrides: {
                            colorPrimary: {
                                backgroundColor: baseTheme.palette.common.white,
                                color: grey[900],
                            },
                        }
                    }
                },
            }),

            layouts: {
                dashboard: {
                    bottomAppBarHeight: '26px',
                    bottomNavigationHeight: '48px',
                    drawerWidth: '180px',
                    drawerRailWidth: '60px',
                    topAppBarHeight: '48px'
                }
            },
        }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
