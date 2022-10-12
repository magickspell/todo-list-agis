import React from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "./Button";

export const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div className={"navbar"}>
            <Button
                title={"Main"}
                action={() => {
                    navigate('/')
                }}
            />
            <Button
                title={"TodoList"}
                action={() => {
                    navigate('/todolist')
                }}
            />
        </div>
    )
}