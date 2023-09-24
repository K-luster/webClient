<script>
    import Input from '../input.svelte';
    import Button from '../button.svelte';
    import { signinbool, signintoggle, signuptoggle } from '../../store';

    let userid = ""
    let password = ""
    let email = ""
    let githubToken = ""
    let dockerhubid = ""
    let dockerhubpw = ""

    function registerAccount(){

    }
</script>
<div>
    <div>
        <Input text="건국대학교 이메일" bind:inputValue = {email} type="email"/>
        <Input text="PASSWORD" bind:inputValue = {password} type="password" placeholder=" "/>
        <Input text="Github Token" bind:inputValue = {githubToken} placeholder="Github Token은 설정에서도 바꿀 수 있습니다."/>
        <Input text="Docker Hub ID" bind:inputValue = {dockerhubid} placeholder="Docker Hub ID는 설정에서도 바꿀 수 있습니다."/>
        <Input text="Docker Hub Password" bind:inputValue = {dockerhubpw} placeholder="Docker Hub PW는 설정에서도 바꿀 수 있습니다."/>
    </div>
    <div id="signButtonWrapper" class="center">
        <div class="padding">
            <Button clickHandler={signintoggle} text="Cancel"></Button>
        </div>
        <div class="padding">
            <Button clickHandler={registerAccount} text="Register"></Button>
        </div>
    </div>
</div>