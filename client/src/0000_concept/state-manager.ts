import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Object3D } from "three";
import { calculateResponsiveDocumentState } from "./responsive-document";

export const stateManager = {
    cursor: {
        $activation: new BehaviorSubject(0.25),
        $parent:     new BehaviorSubject<Object3D | null>(null),
    },
    scrolling: {
        $distance:     new BehaviorSubject(0),
        $scrollDomain: new BehaviorSubject(1),
        $position:     new BehaviorSubject([0,0,0] as [number,number,number]),
        $parent:       new BehaviorSubject<Object3D | null>(null),
    },
    resizing: {
        $resize: new Subject(),
    },
    responsiveDocument: {
        $orientation: new BehaviorSubject<"portrait" | "landscape">(calculateResponsiveDocumentState()),
    }
};