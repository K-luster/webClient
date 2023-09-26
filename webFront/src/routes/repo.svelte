<style>
    #user_repo_detail{
        padding: 1%;
        margin: 1%;
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: #f7f7f7;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        height: 20%;
        box-sizing: border-box;
        min-height: 35px;
        max-height: 100px;
        overflow: hidden;
    }

    #repo_detail_button{
        flex: 3;
        width: auto;
    }

    #repo_detail_desc{
        flex-grow: 1;
    }
    .flex{
        display: flex;
    }
    .repobutton{
        width: auto;
    }

    .repo_detail_p{
        flex-grow: 1; 
        font-size: 0.3rem;
        color: #a5a5a5
    }
</style>

<script>
    import Button from "./button.svelte";
    import Popup from "./popup.svelte";
    import CicdPopup from "./dashboard/cicd_popup.svelte";

    export let repo_name = "APPLICATION EXAMPLE"
    export let repo_desc = "0m"
</script>

<div id="user_repo_detail" class="center-vertical">
    <div id="repo_detail_button" class="">
        <div class="repobutton center-vertical">
            <Popup repo_name = {repo_name} popup_content = {CicdPopup} />
        </div>
    </div>

    <div id="repo_detail_desc" class="">
        <div class="size-parent flex">
            <p class="repo_detail_p">{repo_desc}</p>
        </div>
    </div>
</div>