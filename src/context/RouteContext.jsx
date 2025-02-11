// import { createContext, useContext, useReducer, useState } from "react";

// export const RouteContext = createContext();

// export const RouteContextProvider = ({children}) => {
//     const INITIAL_STATE = {
//         page: "Home"
//     }


//     const pageReducer = (state, action) => {
//         switch (action.type){
//             case "Home":
//                 return {
//                     page: "Home"
//                 };
           
//             case "About me":
//                 return {
//                     page: "About me"
//                 };
          
//             case "Project":
//                 return{
//                     page: "Project"
//                 };
        
//             default:
//                 return state;
//         }
//     }

//     const [state, dispatch] = useReducer(pageReducer, INITIAL_STATE);

//     return(
//         <RouteContext.Provider value={{data:state, dispatch}}>
//             {children}
//         </RouteContext.Provider>
//     );
// };

import { createContext, useContext, useReducer } from "react";

// Create Context
export const RouteContext = createContext();

// Initial State
const INITIAL_STATE = {
    page: "Home"
};

// Reducer function (defined outside to prevent re-creation on every render)
const pageReducer = (state, action) => {
    switch (action.type) {
        case "Navigation":
            return { page: "Navigation" };
        case "Home":
            return { page: "Home" };
        case "Profile":
            return { page: "Profile" };  // Ensure case consistency
        case "Project":
            return { page: "Project" };
        default:
            return state;
    }
};

// Context Provider Component
export const RouteContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(pageReducer, INITIAL_STATE);

    return (
        <RouteContext.Provider value={{ data: state, dispatch }}>
            {children}
        </RouteContext.Provider>
    );
};

// Custom Hook for easier access
export const useRoute = () => useContext(RouteContext);



