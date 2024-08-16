import React, { useContext, useState } from 'react';
import { PageProps } from '@/types';
import { Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import UIContext from '@/Contexts/UIContext';

export default function NavigationToggle(props : PageProps) {
    const { navigationDrawerOpen, setNavigationDrawerOpen } = useContext(UIContext);

    const handleMenuButtonClick = (e: React.MouseEvent<HTMLElement>) => {
        setNavigationDrawerOpen( !navigationDrawerOpen )
    }

    return (
        <IconButton
            aria-label="toggle-navigation"
            onClick={handleMenuButtonClick}
        >
            <Menu />
        </IconButton>
    );
}
