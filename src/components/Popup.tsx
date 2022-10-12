import React, {useEffect, useState} from "react";
import {Button} from "./Button";
import {DataProvider} from "../app/api";

interface PopupPropsI {
    visible: boolean,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
    id?: string | number,
    title?: string,
    text?: string,
    change: boolean,
}

export const Popup = (props: PopupPropsI) => {

    let [id, setId] = useState('')
    let [title, setTitle] = useState('')
    let [text, setText] = useState('')

    useEffect(() => {
        if (String(props.id).length > 0) {
            setId(String(props.id))
        } else {
            setId('')
        }
        if (props.title && props.title.length > 0) {
            setTitle(props.title)
        } else {
            setTitle('')
        }
        if (props.text && props.text.length > 0) {
            setText(props.text)
        } else {
            setText('')
        }
    }, [props.id, props.title, props.text])

    const SaveItem = (id: number, title: string, text: string) => {
        if (title.length > 0 && text.length > 0) {
            DataProvider.addItem(id, title, text)
                .then((res: any) => {
                    console.log(res.data)
                    props.setVisible(false)
                    window.location.reload()
                })
                .catch((e) => {
                    alert(e)
                })
        } else {
            alert(`insert values`)
        }
    }
    const DeleteItem = () => {
        DataProvider.deleteItem(Number(id))
            .then((res: any) => {
                props.setVisible(false)
                window.location.reload()
            })
            .catch((e) => {
                alert(e)
            })
    }
    const updateItem = (id: number, title: string, text: string) => {
        DataProvider.updateItem(id, title, text)
            .then((res: any) => {
                props.setVisible(false)
                window.location.reload()
            })
            .catch((e) => {
                alert(e)
            })
    }

    return (
        <div
            className={props.visible ? "popup__wrapper" : "popup__wrapper_invisible"}
            onClick={() => props.setVisible(false)}
        >
            <div
                className={"popup"}
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div>
                    <p>id:</p>
                    <input
                        disabled={props.id ? true : false}
                        type="number"
                        value={id}
                        onChange={(event) => {
                            setId(event.currentTarget.value)
                        }}
                    />
                </div>

                <div>
                    <p>title:</p>
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => {
                            setTitle(event.currentTarget.value)
                        }}
                    />
                </div>

                <div>
                    <p>text:</p>
                    <textarea
                        value={text}
                        onChange={(event) => {
                            setText(event.currentTarget.value)
                        }}
                    />
                </div>

                <div
                    className={"popup__btns"}
                >
                    <Button
                        title={"Save"}
                        action={
                            props.change
                                ? () => updateItem(Number(id), title, text)
                                : () => SaveItem(Number(id), title, text)
                        }
                    />
                    <Button
                        title={"Delete"}
                        action={
                            props.change
                                ? () => DeleteItem()
                                : () => props.setVisible(false)
                        }
                    />
                    <Button
                        title={"Close"}
                        action={() => props.setVisible(false)}
                    />
                </div>
            </div>
        </div>
    )
}