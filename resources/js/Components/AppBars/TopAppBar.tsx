import React from 'react';
import { AppBar, Box, Toolbar, Stack, Typography, useTheme,  Button } from '@mui/material';
import { PageProps } from '@/types';
import NavigationToggle from './NavigationToggle';
import { AccountCircle } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import AppBarLogo from '../Logos/AppBarLogo';

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
                <Stack
                    direction="row"
                    sx={{ flexGrow: 1 }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={theme.spacing(1)}
                        sx={{ flexGrow: 1 }}
                    >
                        <NavigationToggle />

                        <AppBarLogo />
                    </Stack>

                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            flexGrow: 2,
                            
                        }}
                    >
                        <Typography variant="h6" noWrap component="div">
                            Order Demo
                        </Typography>
                    </Stack>

                    <Stack
                        direction="row"
                        justifyContent="right"
                        alignItems="center"
                        sx={{
                            flexGrow: 1,
                            
                        }}
                    >
                        <Box>
                            <Button
                                variant="text"
                                startIcon={<AccountCircle sx={{ color: grey[700] }} />}
                            >
                                Login
                            </Button>
                        </Box>

                    </Stack>

                </Stack>
            </Toolbar>
        </AppBar>
    );
}
