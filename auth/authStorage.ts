import * as SecureStore from "expo-secure-store"

const SESSION_KEY = "app_session";

export interface Session {
    accessToken: string,
}

// first check if the user is logged in, if yes, return the token
export async function getSession(): Promise<Session | null> {
    try {
        // first get the access token
        const data = await SecureStore.getItemAsync(SESSION_KEY);

        if(!data) return null;

        const token: Session = JSON.parse(data);

        if(!token.accessToken) return null;

        return token;

    } catch (error) {
        console.log("getSession failed ", error);
        return null;
    }
}

export async function setSession(session: Session) {
    try {
        const token = JSON.stringify(session);
        await SecureStore.setItemAsync(SESSION_KEY, token);
    } catch (error) {
        console.log('setSession error ', error);
        return null;
    }
}

// remove the token for user logout
export async function clearSession() {
    try {
        await SecureStore.deleteItemAsync(SESSION_KEY);
    } catch (error) {
        console.log('clearSession error', error);
        return null;
    }
}