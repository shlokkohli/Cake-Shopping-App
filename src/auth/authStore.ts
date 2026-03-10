import { create } from 'zustand'

interface User {
    fullName: string,
    phone: string
}

interface AuthStore {
    isAuthenticated: boolean,
    isLoading: boolean,

    login: () => void,
    logout: () => void,
    restoreSession: () => Promise<void>
}

export const useAuthStore = create<AuthStore>((set) => ({
    isAuthenticated: false,
    isLoading: true,

    login: () => set({ isAuthenticated: true }),
    logout: () => set({ isAuthenticated: false}),

    restoreSession: async() => {
        // first check user token
        const token = 12;
        if(token){
            set({ isAuthenticated: true });
        } else {
            set({ isAuthenticated: false });
        }

        set({ isLoading: false })
    }
}))
