import { Sequence } from "../../0100_element/200_sequence/sequence"
import { DemoVolume }   from "../../0200_component/flat/vector/DemoVolume"
import { LabelSurface } from "../../0200_component/flat/scalar/LabelSurface"
import { TableOfContentsSurface } from "../../0200_component/flat/vector/TableOfContentsSurface"
import { GridOctaves } from "../../0300_entity/grid-octaves"
import { TallBox } from "../../0300_entity/lilac-box"
import { DocumentScene } from "../document.scene"

export const lab = () => {
    return (
        <>
            <DocumentScene>
                <h1>Lab</h1>
            </DocumentScene>
            <group>
                <TableOfContentsSurface>
                    <LabelSurface>N0TE8</LabelSurface>
                    <LabelSurface>MXT8P</LabelSurface>
                    <LabelSurface>NCODE</LabelSurface>
                    <LabelSurface>5HDDR</LabelSurface>
                    <LabelSurface>RETRO</LabelSurface>
                    <LabelSurface>OVRWRLD</LabelSurface>
                    <LabelSurface>ECSLANG</LabelSurface>
                </TableOfContentsSurface>
                <group>
                    <Sequence direction="y">
                        <DemoVolume name="N0TE8">
                            
                        </DemoVolume>
                        <DemoVolume name="MXT8P">
                            
                        </DemoVolume>
                        <DemoVolume name="NCODE">
                            
                        </DemoVolume>
                        <DemoVolume name="5HDDR">
                            
                        </DemoVolume>
                        <DemoVolume name="RETRO">
                            
                        </DemoVolume>
                        <DemoVolume name="OVRWRLD">
                            
                        </DemoVolume>
                        <DemoVolume name="ECSLANG">
                            
                        </DemoVolume>

                    </Sequence>
                </group>
                               
            </group>
            
            <GridOctaves />
            
        </>
    )
}