import React, { useMemo, useState } from 'react';
import UIContext from '@/Contexts/UIContext';

interface AppContainerProps {
    children: React.ReactNode;
}

export default function UIProvider({ children }: AppContainerProps) {
    const [navigationDrawerOpen, setNavigationDrawerOpen] = useState(true);
    const value = useMemo(
        () => ({ navigationDrawerOpen, setNavigationDrawerOpen }),
        [navigationDrawerOpen]
    )

    return (
        <UIContext.Provider value={value}>
            {children}
        </UIContext.Provider>
    );
}
