<style>
    #user-app-detail{
        padding: 1%;
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: #f7f7f7;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        height: 100%;
        box-sizing: border-box;
    }

    #app-detail-button{
        flex: 3;
    }

    #app-repo-url{
        flex: 5;
    }


    .flex{
        display: flex;
    }
</style>

<script>
    import Button from "./button.svelte";

    export let application_name = "APPLICATION EXAMPLE"
    export let application_repo = "github"
    /**
    @param {string | boolean} binding
    */
    export let binding = false

    export let clickHandler = ()=>{}
</script>

<div id="user-app-detail">
    <div id="app-detail-button" class="center center-vertical">
        <Button width="auto" text = {application_name} clickHandler = {clickHandler}/>
    </div>

    <div id="app-repo-url" class="center">
        <div class="size-parent flex center">
            <img src="./github-logo.png" alt="cpu icon" class="img-fit">
            <p style="flex-grow: 1; padding-left : 10px;">{application_repo}</p>
        </div>
    </div>
</div>