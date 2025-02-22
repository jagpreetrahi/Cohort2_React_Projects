import {atom, selector } from "recoil"

export const inputText = atom({
    key : "inputText",
    default : ""
})



export const counterData = selector({
    key : "counterData",
    get : ({get}) => {
        const count = get(inputText.length)
        return count
    }
})