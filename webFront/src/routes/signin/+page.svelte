<script>
    import Input from '../input.svelte';
    import Button from '../button.svelte';
    import { goto } from '$app/navigation';



    // @ts-ignore
    // @ts-ignore
    import { JWTToken, signinbool, signintoggle, signuptoggle } from '../../store';

    let userid = '';
    let password = '';
    /**
     * @type {string | null}
     */
    let resultData = null
    let resultMessage = null
    /**
     * @type {string | null}
     */
    let resultToken = null

    let server = "http://54.180.150.131/"

    // @ts-ignore
    // @ts-ignore
    async function servercomm(dir, jsonBody, okfunction=()=>{}, cancelfunction=()=>{}, errorfunction=()=>{}){
        const res = await fetch(server + dir, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonBody)
        })
        const res_json = await res.json()


        // @ts-ignore
        resultData = res_json.status
        // @ts-ignore
        resultMessage = res_json.message

        console.log(resultData, resultMessage)
        resultToken = res_json.data.accessToken
    }

    async function login(){
        await servercomm('members/login', {
            email : userid,
            password : password
        })

        if (resultData == "SUCCESS"){
            JWTToken.set(/** @type {string} */(resultToken))
            // @ts-ignore
            goto('/dashboard', true)
        }
    }

</script>

<style>
    #rightside{
        height: 50%;
    }

    .overflowhidden{
        overflow: hidden;
    }
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #rightside{
        min-width: 100px;
        width: 100%;
        height: 100%;
    }

    #signinWrapper{
        position: relative;
        width: 100%;
        height: 50%;
        z-index: 0;
    }

    #signin{
        width: 80%;
        height: 90%;
    }

</style>


<div id="rightside" class="overflowhidden" >
    <div id="signinWrapper" class="center">
        <div id="signin">
            <Input text="ID" bind:inputValue = {userid} placeholder=" "/>
            <Input text="PASSWORD" bind:inputValue = {password} type="password" placeholder=" "/>
        </div>
    </div>
    <div id="signButtonWrapper" class="center">
        <div class="padding">
            <Button clickHandler={login} text="Sign In"></Button>
        </div>
        <div class="padding">
            <Button clickHandler={signuptoggle} text="Sign Up"></Button>
        </div>
    </div>
</div>