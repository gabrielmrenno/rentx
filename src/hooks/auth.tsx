import React, {
    createContext,
    useState,
    useContext,
    ReactNode
} from 'react';

// import User Model
import { User } from '../models/UserModel';
import api from '../services/api';

// data that will receive from API
interface AuthState {
    token: string;
    user: User;
}

interface SignInCredentials {
    email: string;
    password: string;
}

// authenticate data and method that will be shared by context
interface AuthContextData {
    user: User;
    singIn: (credentials: SignInCredentials) => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}

// creating a context passing the initial state, in this case, a empty object
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// to provide the context to the application, the children are children inside provider
function AuthProvider({ children }: AuthProviderProps) {
    // to store authenticate data
    const [data, setData] = useState<AuthState>({} as AuthState);

    // a method to singin the user
    async function singIn({ email, password }: SignInCredentials) {
        // requesting authenticate resource from API
        const response = await api.post<AuthState>('/sessions', {
            email,
            password
        });

        // Getting response about authentication from API
        const { token, user } = response.data;
        // to send token to all routes in header after signIn
        // Bearer is a kind of token authorization
        api.defaults.headers.authorization = `Bearer ${token}`;
        // Updating shared data with response from API about authentication
        setData({ token, user });
    }

    // Returning the context provider
    return (
        // passing the value shared to app
        <AuthContext.Provider value={{
            user: data.user,
            singIn
        }}>
            {children}
        </AuthContext.Provider>
    )
}

// Creating hook to use the context in every interface
function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth }