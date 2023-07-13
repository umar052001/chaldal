"use client"
import {atom} from "jotai"

const usernameAtom = atom("");
const passwordAtom = atom("");
const isLoggedInAtom = atom(false);

export {
    usernameAtom,
    passwordAtom,
    isLoggedInAtom
}
