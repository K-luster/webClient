<style>

    #user-pod-detail-wrapper{
        position: absolute;
        top: 10%;
        width: 100%;
        background-color: #e9e9e2;
    }
    #user-pod-detail{
        padding: 1%;
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: #f7f7f7;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        height: 10%;
        box-sizing: border-box;
    }

    #pod-detailbutton{
        flex: 4;
    }

    #pod-detail-cpu{
        flex: 2;
    }

    #pod-detail-memory{
        flex: 3;
    }

    .flex{
        display: flex;
    }

    img{
        width: 50px;
        height: 50px;
    }
</style>

<script>
    import { onMount } from "svelte";
    import Button from "./button.svelte";
    import { server, JWTToken, github_username, checkJwtCookie} from "../store.js"
    import { goto } from "$app/navigation";

    export let app_name = ''

    let application = [{
        container: [
            {
                name: "",
                cpu: "",
                memory: "",
            }
        ],
        name: ''

    }]

    /**
     * @param {string} dir
     * @param {{ [x: string]: any; }} param
     */
    async function servercomm(dir, okfunction=()=>{}, cancelfunction=()=>{}, errorfunction=()=>{}){
        checkJwtCookie()

        console.log($JWTToken, $server)
        try {
            const res = await fetch($server + dir, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + $JWTToken,
            },
            })
            if (res.ok) {
                console.log(res)
                console.log(res.body)
                const resultSave = await res.json();
                // @ts-ignore
                console.log(resultSave)
                application = resultSave
            } else {
                console.error('서버에서 오류 응답을 받았습니다.');
                goto('/')
            }
            } catch (error) {
                console.error('네트워크 오류:', error);
                goto('/')
        }
    }

    onMount(async()=>{
        await servercomm("api/pod_detail")

        console.log(application)
    })


</script>
<div id="user-pod-detail-wrapper">
    {#each application as app}
        {#each app.container as container}
            {#if (app.name.includes(app_name))}
                <div id="user-pod-detail">
                    <div id="pod-detail-button" class="center center-vertical">
                        <Button width="auto" text = {container.name} clickHandler = {()=>{}}/>
                    </div>

                    <div id="pod-detail-cpu" class="center">
                        <div class="size-parent flex center">
                            <img src="./cpu.png" alt="cpu icon" class="img-fit">
                            <p style="flex-grow: 1; text-align: center;">{container.cpu}</p>
                        </div>
                    </div>

                    <div id="pod-detail-memory" class="center">
                        <div class="size-parent flex center">
                            <img src="./memory.png" alt="cpu icon" class="img-fit">
                            <p style="flex-grow: 1; text-align: center;">{container.memory}</p>
                        </div>
                    </div>
                </div>
            {/if}
        {/each}
    {/each}
</div>
