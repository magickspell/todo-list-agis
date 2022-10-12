import React from "react";
import {Navbar} from "../components/Navbar";

export const MainPage = () => {
    return (
        <>
            <Navbar />
            <div className={"main-page__wrapper"}>
                <h1>Main page</h1>
                <article>
                    <p>This page demonstrate layout skills.</p>
                </article>
                <div className={"main-page__block"}>
                    <p>Flexbox</p>
                    <div
                        className={"main-page__flex"}
                    >
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                    </div>
                </div>
                <div className={"main-page__block"}>
                    <p>Grid</p>
                    <div className={"main-page__grid"}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                    </div>
                </div>
            </div>
        </>
    )
}