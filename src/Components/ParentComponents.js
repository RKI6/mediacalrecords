import React from "react";
import ChildComponent from "./ChildComponent";
export const mycon= React.createContext()
export default function ParentComponent(){
        return(
            <mycon.Provider value="Phala Oru Dhrogi">
                    <ChildComponent/>
            </mycon.Provider>
        )
}