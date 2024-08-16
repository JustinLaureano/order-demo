import React, { useMemo, useState } from 'react';
import AuthContext from '@/Contexts/AuthContext';

interface AuthProviderProps {
    children: React.ReactNode;
}

export default function AuthProvider({ children, ...props }: AuthProviderProps) {
    const [user, setUser] = useState(props.initialPage.props?.auth.user || null);

    const defaultValue = {
        user,
        setUser
    };

    const dependencies = [user];

    const value = useMemo(() => defaultValue, dependencies)

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
