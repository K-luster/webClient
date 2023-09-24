import { writable } from "svelte/store";

export const signinbool = writable(true);

export function signintoggle(){
    signinbool.update(b => true)
}

export function signuptoggle(){
    signinbool.update(b => false)
}

