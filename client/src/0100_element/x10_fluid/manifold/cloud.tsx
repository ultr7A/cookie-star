import { Entity } from "../../../0300_entity";
import { FluidManifold } from "./[fluid_manifold]";

export interface CloudProps {
    position: [number, number, number];
    radius: number;
    children?: React.ReactNode;
}

export let Cloud = (p: CloudProps) => {
        
    return (
        <Entity>                
            <mesh position={p.position}
            >
                <sphereGeometry args={[p.radius, 12, 12]} />
                <meshLambertMaterial color="white" transparent={true} opacity={0.6} />
                </mesh>
        </Entity>
        );
    
    };