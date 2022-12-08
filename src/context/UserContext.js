import React, { useReducer } from "react";

export const UserContext = React.createContext();

export function userReducer(userState, action) {
    switch(action.type) {
        case "SET":
            return action.user;
    }
}


