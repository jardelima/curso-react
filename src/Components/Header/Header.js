import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, HeaderNav } from "./Header.style";

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderNav>
                <Link to={"/"}>Home</Link>
                <Link to={"/login"}>Login / Criar</Link>
            </HeaderNav>
        </HeaderContainer>
    )
}
