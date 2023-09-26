import { writable } from "svelte/store";


export const JWTToken = writable("");
export const signinbool = writable(true);

export const server = writable("http://54.180.150.131/")

export function signintoggle(){
    signinbool.update(b => true)
}

export function signuptoggle(){
    signinbool.update(b => false)
}

