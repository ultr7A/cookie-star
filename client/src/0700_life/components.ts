import { Vector3 } from "three";

export interface ComponentState {
    "position"?: number[],
    "rotation"?: number[],
    
    "geometry"?: "box" | "sphere" | "cylinder",
    "dimensions"?: [number, number, number],
    "mesh"?: any,


    "magnetServer"?: any,
    "magnetClient"?: any,

}