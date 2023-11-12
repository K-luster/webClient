<script>

    import { signinbool,signintoggle,signuptoggle } from '../store';
    import Leftside from './home/+page.svelte';
    import Signin from './signin/+page.svelte';
    import Signup from './signup/+page.svelte';
    import Button from './button.svelte';

    var currentAddress = window.location.href;
    console.log(currentAddress);

</script>

<style>
    .contentWrapper{
        display: flex;
        width: 100%;
        height: 100%;
    }
    #leftsideWrapper{
        flex-grow : 1;
        min-width: 0%;
        height: 100%;
        float: left;
        background: linear-gradient(to bottom, #dbb5ac, #c0e4f9); /* 그라데이션 색상 정의 */
        z-index: -1;
    }

    #rightsideWrapper{
        width: 25%;
        min-width: 300px;
        min-height: 200px;
        height: 100%;
        float: right;

        box-sizing: border-box;
        margin: 0 auto;
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: #f7f7f7;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

        min-height: 500px;
    }

    #rightsidesign{
        height: 60%;
    }

    #signButtonWrapper{
        height: 10%;
    }

    .fit{
        width: 100%;
        max-height: 100%;
        position: relative;
        top: 0;
        left: 0;
    }

    #serviceiconWrapper{
        display: flex;
        height: 40%;

    }

    #serviceicon{
        padding-top: 10%;
        width: 60%;
    }
</style>

<div class="contentWrapper">
    <div id="leftsideWrapper" class="center">
        <Leftside />
    </div>
    <div id="rightsideWrapper">
        <div id="serviceiconWrapper" class="center">
            <div id="serviceicon" class="center">
                <img src="./kuploy.png" alt="kuploy icon" class="fit">
            </div>
        </div>
        <div id="rightsidesign">
            {#if $signinbool}
            <Signin />
          {:else}
            <Signup />
          {/if}
        </div>
    </div>
</div>
