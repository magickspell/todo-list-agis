import React from "react";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "../../views/MainPage";
import {TodoListPage} from "../../views/TodoListPage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<MainPage/>} path={"/"}/>
            <Route element={<TodoListPage/>} path={"/todolist"}/>
        </Routes>
    )
}