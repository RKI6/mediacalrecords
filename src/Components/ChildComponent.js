import { useContext } from "react";
import { mycon } from "./ParentComponents";
export default function ChildComponent()
{
    const con=useContext(mycon);
    return(
        <>
            <h1>Phala Yaaru?</h1>
            <h3>{con}</h3>
        </>
    )
}