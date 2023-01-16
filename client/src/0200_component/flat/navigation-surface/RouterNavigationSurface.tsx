import { Html } from "@react-three/drei";
import { useLocation, Link } from "wouter";
import { Sequence } from "../../../0100_element/200_sequence/sequence";
import { LinkSurface } from "../scalar/LinkSurface";

export const RouterNavigationSurface = () => {
    const [location, setLocation] = useLocation();
  
    return (
      <group className="navigation">

        <Sequence direction="x" position={[-1.32,2.0,-1]} color={[250,250,250]} itemPadding={-0.333}>
          <LinkSurface location="/"     current={location}><Html style={{fontSize: "52pt", marginTop:"-0.65em"}} >🐈</Html></LinkSurface>
          <LinkSurface location="/cv"   current={location}>CV</LinkSurface>
          <LinkSurface location="/tech" current={location}>Tech</LinkSurface>
          <LinkSurface location="/chat" current={location}>Chat</LinkSurface>
          <LinkSurface location="/meta" current={location}>Meta</LinkSurface>
        </Sequence>

      </group>
    );
  };