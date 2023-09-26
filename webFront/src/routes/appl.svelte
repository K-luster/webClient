<style>
    #user_app_detail{
        padding: 1%;
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: #f7f7f7;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        height: 100%;
        box-sizing: border-box;
    }

    #app_detail_button{
        flex: 4;
    }

    #app_detail_cpu{
        flex: 2;
    }

    #app_detail_memory{
        flex: 3;
    }

    .flex{
        display: flex;
    }
</style>

<script>
    import Button from "./button.svelte";

    export let application_name = "APPLICATION EXAMPLE"
    export let application_cpu = "0m"
    export let application_memory = "0Mi"


</script>

<div id="user_app_detail">
    <div id="app_detail_button" class="center center-vertical">
        <Button width="auto" text = {application_name} clickHandler = {()=>{}}/>
    </div>

    <div id="app_detail_cpu" class="center">
        <div class="size-parent flex center">
            <img src="/cpu.png" alt="cpu icon" class="img-fit">
            <p style="flex-grow: 1; text-align: center;">{application_cpu}</p>
        </div>
    </div>

    <div id="app_detail_memory" class="center">
        <div class="size-parent flex center">
            <img src="/memory.png" alt="cpu icon" class="img-fit">
            <p style="flex-grow: 1; text-align: center;">{application_memory}</p>
        </div>
    </div>
</div>