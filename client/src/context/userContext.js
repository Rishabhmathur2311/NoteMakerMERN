import React, { createContext, useState} from "react";

export const AccountContext= createContext();

const AccountProvider=({children})=>{
    const [person, setPerson]= useState({});
    const [message, getMessage]=useState(false);

    return (
        <AccountContext.Provider value={{
            person,
            setPerson,
            message,
            getMessage,
        }}>
            {children}
        </AccountContext.Provider>
    );
}

export default AccountProvider;