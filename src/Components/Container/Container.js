import React from "react";
import { ContainerDefault } from "./Container.style";

export default function Container(props) {
    return (
        <ContainerDefault>
            {props.children}
        </ContainerDefault>
    )
}
