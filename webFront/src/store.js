import { get, writable } from "svelte/store";


export const JWTToken = writable("");
export const github_username = writable("username");
export const signinbool = writable(true);
export const localRepoPath = writable("/app")

// export const server = writable("http://54.180.150.131/")
// export const server = writable("http://kluster.iptime.org:9001/")
export const server = writable("https://kuploy.ddns.net/server/")

export function signintoggle(){
    signinbool.update(b => true)
}

export function signuptoggle(){
    signinbool.update(b => false)
}

export function checkJwtCookie(){
    console.log("COOKIE")
    console.log(document.cookie)
    if(get(JWTToken) == ""){
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // JWT 토큰 이름에 따라 적절하게 수정
            if (cookie.startsWith('jwt=')) {
                JWTToken.set(cookie.substring(4)); // "jwt=" 이후의 값 (토큰)을 반환
                return true
            }
        }
        return false; // JWT 토큰이 쿠키에 없는 경우
    }
}
