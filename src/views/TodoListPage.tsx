import React, {useEffect, useState} from "react";
import {Navbar} from "../components/Navbar";
import {Button} from "../components/Button";
import {Popup} from "../components/Popup";
import {DataProvider} from "../app/api";

interface itemI {
    id: number,
    title: string,
    text: string,
}

export const TodoListPage = () => {

    let [items, setItems] = useState<Array<any>>([])
    useEffect(() => {
        DataProvider.getItems()
            .then((res: any) => {
                setItems(res.data)
            })
    }, [])

    let [visible, setVisible] = useState(false)
    let [id, setId] = useState('')
    let [title, setTitle] = useState('')
    let [text, setText] = useState('')
    let [change, setChange] = useState(false)
    const setupPopup = (type?: string, el?: itemI) => {
        setChange(true)
        if (type === 'new') {
            setChange(false)
            let myLastId = 0
            for (let el in items) {
                if (Number(items[el].id) > myLastId) {
                    myLastId = Number(items[el].id)
                }
            }
            setId(String(myLastId + 1))
            setTitle('')
            setText('')
        } else {
            setId(String(el!.id))
            setTitle(el!.title)
            setText(el!.text)
        }
        setVisible(true)
    }

    const DeleteItem = (id: number) => {
        DataProvider.deleteItem(Number(id))
            .then((res: any) => {
                window.location.reload()
            })
            .catch((e) => {
                alert(e)
            })
    }

    return (
        <>
            <Navbar/>
            <div className={"todolist-page__wrapper"}>
                <h2>TodoList page</h2>

                <div className={"todolist-page__list"}>
                    <Button
                        title={"Add task"}
                        action={() => {
                            setupPopup('new')
                        }}
                    />
                    <p style={{fontSize: 24}}>Task list:</p>
                    {
                        items.map((el: itemI) => {
                            return (
                                <div
                                    className={"todolist-page__list__item"}
                                    key={`list-${el.id}`}
                                >
                                    <div
                                        className={"todolist-page__list__item__content"}
                                    >
                                        <div>id: {el.id}</div>
                                        <h4>Title: {el.title}</h4>
                                        <p>Task:</p>
                                        <article>{el.text}</article>
                                    </div>

                                    <div
                                        className={"todolist-page__list__item__btns"}
                                    >
                                        <Button
                                            title={"Delete"}
                                            action={() => {
                                                DeleteItem(el.id)
                                            }}
                                        />
                                        <Button
                                            title={"Change"}
                                            action={() => {
                                                setupPopup('', el)
                                            }}
                                        />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <Popup
                visible={visible}
                setVisible={setVisible}
                id={id}
                title={title}
                text={text}
                change={change}
            />
        </>
    )
}