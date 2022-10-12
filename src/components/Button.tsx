import React from "react";

interface buttonPropsI {
    action: () => void,
    title: string,
}

export const Button = (props: buttonPropsI) => {
    return (
        <button
            className={"button_default"}
            onClick={() => {props.action()}}
        >
            {props.title}
        </button>
    )
}