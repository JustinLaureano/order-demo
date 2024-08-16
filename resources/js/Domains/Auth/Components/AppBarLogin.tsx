import React, { useContext, useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { grey } from '@mui/material/colors';
import {
    Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle,
    IconButton, InputAdornment, Stack, TextField
} from '@mui/material';
import { AccountCircle, VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import UIContext from '@/Contexts/UIContext';
import LanguageContext from '@/Contexts/LanguageContext';

export default function AppBarLogin(props: any) {
    const lang = useContext(LanguageContext);
    const { loginDialogOpen, setLoginDialogOpen } = useContext(UIContext);

    // For future use
    const localEnvironment = props?.ziggy?.location.includes('localhost');
    const [showPassword, setShowPassword] = useState(false);

    /** Click Events */

    const handleClickShowPassword = () => setShowPassword(show => !show);

    const handleLoginButtonClick = () => {
        setLoginDialogOpen(true);
    }

    const handleCloseDialog = () => {
        setLoginDialogOpen(false);
    }

    /** Form */

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: ''
    });

    const handleSubmit = e => {
        e.preventDefault();

        post(route('login'), {
            onSuccess: () => {
                handleCloseDialog();
                reset();
            }
        });
    };

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    return (
        <>
            <Box>
                <Button
                    variant="text"
                    startIcon={<AccountCircle sx={{ color: grey[700] }} />}
                    onClick={handleLoginButtonClick}
                >
                    Login
                </Button>
            </Box>

            <Dialog
                open={loginDialogOpen}
                onClose={handleCloseDialog}
                maxWidth={false}
            >
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Yada ya
                    </DialogContentText>

                    <Stack
                        component="form"
                        onSubmit={handleSubmit}
                        spacing={2}
                    >

                        <TextField
                            required
                            value={data.email}
                            // error={errors.email}
                            // helperText={errors.email}
                            label={lang.email}
                            name="email"
                            size="small"
                            fullWidth
                            onChange={e => setData('email', e.target.value)}
                        />

                        <TextField
                            required
                            // required={!localEnvironment}
                            value={data.password}
                            // error={errors.password}
                            // helperText={errors.password}
                            name="password"
                            label={lang.password}
                            type={showPassword ? "text" : "password"}
                            size="small"
                            fullWidth
                            onChange={e => setData('password', e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            edge="end"
                                            onClick={handleClickShowPassword}
                                        >
                                            {showPassword ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />

                        <Stack sx={{ pt: 2 }}>
                            <Button type="submit" variant="contained" fullWidth>
                                Login
                            </Button>
                        </Stack>
                    </Stack>

                </DialogContent>
            </Dialog>
        </>
    );
}
