import React, { useMemo, useState } from 'react';
import LanguageContext from '@/Contexts/LanguageContext';

interface LanguageProviderProps {
    children: React.ReactNode;
}

export default function LanguageProvider({ children, ...props }: LanguageProviderProps) {

    return (
        <LanguageContext.Provider value={props.initialPage.props?.lang || {}}>
            {children}
        </LanguageContext.Provider>
    );
}
