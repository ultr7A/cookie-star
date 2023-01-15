import { ReactNode } from "react";
import { Sequence } from "../sequence";

export interface PlaneXN {
    columns: number,
    children: ReactNode
}

export const PlaneXN = (props: PlaneXN) => {
    
    return (
        <Sequence direction="x">
            { props.children }
        </Sequence>
    )
} 

