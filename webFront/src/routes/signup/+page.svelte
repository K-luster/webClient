<script>
    import Input from '../input.svelte';
    import Button from '../button.svelte';
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    import { checkJwtCookie, server, signintoggle } from '../../store';

    // @ts-ignore
    let password = ""
    let email = ""
    let githubToken = ""
    let dockerhubid = ""
    let dockerhubpw = ""

    let email_auth_code = ""
    let email_auth_failed = false

    let isDisabledRegisterEmail = false
    let isDisabledAuthEmail = false
    let isDisabledRegisterButton = false


    /**
     * @type {string | null}
     */
    let resultData = null;
    /**
     * @type {string | null}
     */
    let resultMessage = null;
    

// @ts-ignore
async function servercomm(dir, jsonBody, okfunction=()=>{}, cancelfunction=()=>{}, errorfunction=()=>{}){
    checkJwtCookie()
    const res = await fetch($server + dir, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonBody)
    })
    const res_json = await res.json()
    resultData = res_json.status
    resultMessage = res_json.message
}

    async function registerEmail(){
        isDisabledRegisterEmail = true
        await servercomm("members/school-email-resend", {
                email: email
            })
    }

    async function authenticateEmail(){
        isDisabledAuthEmail = true
        await servercomm("members/school-email-check", {
                email: email,
                code: +email_auth_code
            })
        console.log(resultData)
        if(resultData !== "SUCCESS"){
            email_auth_failed = true
            setTimeout(() => {
                email_auth_failed = false
                isDisabledAuthEmail = false
          }, 1000); // 1초 후에 버튼 비활성화
        }else{

        }
    }

    async function registerAccount(){
        isDisabledRegisterButton = true
        await servercomm("members/signup", {
            email: email,
            password: password,
            githubAccessToken: githubToken,
            dockerHubUsername: dockerhubid,
            dockerHubPassword: dockerhubpw,
            schoolAuthenticated: true
        })

        if(resultData !== "SUCCESS"){
            signintoggle()
        }else{

        }

    }
</script>

<style>
    .signupWrapper{
        height: 100%;
        overflow: scroll;
        box-sizing: border-box;
        padding-top: 5%;
    }

    .signupWrapper::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}
</style>
<div class = "signupWrapper">
    <div>
        <Input text="건국대학교 이메일" bind:inputValue = {email} type="email_register" onclickFunction={registerEmail} bind:isDisabled = {isDisabledRegisterEmail}/>
        <Input text="이메일 인증 번호" bind:email_auth_failed={email_auth_failed} bind:isDisabled = {isDisabledAuthEmail}
        bind:inputValue = {email_auth_code} type="email_auth" onclickFunction={authenticateEmail}/>
        <Input text="PASSWORD" bind:inputValue = {password} type="password" placeholder=" "/>
        <Input text="Github Token" bind:inputValue = {githubToken} placeholder="Github Token"/>
        <Input text="Docker Hub ID" bind:inputValue = {dockerhubid} placeholder="설정에서 바꿀 수 있습니다."/>
        <Input text="Docker Hub Password" bind:inputValue = {dockerhubpw} placeholder="설정에서 바꿀 수 있습니다."/>
    </div>
    <div id="signButtonWrapper" class="center">
        <div class="padding">
            <Button clickHandler={signintoggle} text="Cancel"></Button>
        </div>
        <div class="padding">
            <Button clickHandler={registerAccount} text="Register" bind:isDisabled={isDisabledRegisterButton}></Button>
        </div>
    </div>
    <div id="notify-message-wrapper" class="center">
        <p> {resultMessage === null ? "" : resultMessage}</p>
    </div>
</div>