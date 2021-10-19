import { configureStore } from "@reduxjs/toolkit";
import contactsReduser from "./reduser";


const store = configureStore({
    reducer: {
        contacts: contactsReduser,
    },
  
    
});

export default store