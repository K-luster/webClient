<style>
    .sidebar-open{
        width: 20%;
    }
    .sidebar-close{
        width: 100px;
    }
    #dashboard-sidebar{
        position: relative;
        height: auto;
        background-color: #343432;
        z-index: 0;
        transition: width 0.3s ease-out;
        display: flex;
        padding : 2%;
        box-sizing: border-box;
    }

    #dashboard-sidebar-button-wrapper{
        position: absolute;
        top: 10px;
        left: 10px;
        width: 30px;
        height: 30px;
        z-index: 1;
    }
    #dashboard-application{
        flex-grow: 1;
        height: 100%;
    }

    #dashboard-content-wrapper{
        display: flex;
        width: 100%;
        height: 100%;
    }

    #userboard-content-wrapper{
        flex-grow: 1;
        display: flex;
    }

    #userboard-header{
        box-sizing: border-box;
        padding : 1%;
        width: 100%;
        height: 10%;
    }

    #userboard-content{
        flex-grow: 1;
    }




</style>

<script>
    import Button from '../button.svelte';
    import Roundbutton from '../roundbutton.svelte';
    import Application from './application.svelte';
    import Setting from './setting.svelte';
    import Help from './help.svelte';

    let sidebaropen = true;
    let userboard_header_text = 'application';
    let userboard_header_text_arr = ['application', 'setting', 'help']
    let userboard_number = 0;

    /**
     * @param {number} n
     */
    function userboard(n){
        userboard_number = n
        userboard_header_text = userboard_header_text_arr[userboard_number]
    }

    function sidebar_button_toggle(){
        sidebaropen = !sidebaropen
    }

</script>

<div id="dashboard-content-wrapper">
    <div id="dashboard-sidebar" class="center-vertical center {sidebaropen ? 'sidebar-open' : 'sidebar-close'} ">
        <Roundbutton src="/sidebar.png" bind:toggle = {sidebaropen} toggle_function = {sidebar_button_toggle}/>
        <Roundbutton src="/application.png" toggle_function = {userboard} number = {0}/>
        <Roundbutton src="/setting.png" toggle_function = {userboard} number = {1}/>
        <Roundbutton src="/help.png" toggle_function = {userboard} number = {2}/>
    </div>
    <div id="userboard-content-wrapper" class="center-vertical">
        <div id="userboard-header">
            <p> {userboard_header_text} </p>
        </div>

        <div id="userboard-content">
            {#if userboard_number == 0}
                <Application />
            {:else if userboard_number == 1}
                <Setting />
            {:else if userboard_number == 2}
                <Help />
            {:else}
                <div>
                    default
                </div>
          {/if}
        </div>
    </div>
</div>