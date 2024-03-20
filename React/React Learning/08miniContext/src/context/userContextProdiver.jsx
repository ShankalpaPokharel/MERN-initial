import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{
    const [user,setUser] = React.useState()
    return (
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;

// childeren is generic name it mean what can as a childern put in{childeren} as it is. we can name anyname to children no poblem. It is just for practiece. 
// name context folder is also standard practice put the folder name