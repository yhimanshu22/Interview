import { useContext, createContext, useState } from "react";

// Create Context
const UserContext = createContext();

// Provider component
function UserProvider({ children }) {
    const [user, setUser] = useState('himanshu yadav');

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

// Component to display user
function DisplayUser() {
    const { user } = useContext(UserContext);

    return (
        <div>User: {user}</div>
    );
}

// Component to update user
function UpdateUser() {
    const { setUser } = useContext(UserContext);

    return (
        <button onClick={() => setUser('himu yadav')}>Click me</button>
    );
}

// Main Context component
export default function ContextApp() {
    return (
        <UserProvider>
            <DisplayUser />
            <UpdateUser />
        </UserProvider>
    );
}
