<script>
    import Input from '../input.svelte';
    import Button from '../button.svelte';
    import { signinbool, signintoggle, signuptoggle } from '../../store';

    let userid = '';
    let password = '';

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
            <Button clickHandler={()=> console.log("A")} text="Sign In"></Button>
        </div>
        <div class="padding">
            <Button clickHandler={signuptoggle} text="Sign Up"></Button>
        </div>
    </div>
</div>