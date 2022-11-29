import React, { ReactNode } from 'react';

import { AuthProvider, useAuth } from './auth';

interface AppProviderProps {
    children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}

export { AppProvider };