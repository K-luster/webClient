<style>
    #userboard-application{
        position: relative;
        width: 100%;
        height: 100%;
        background-color: #e8e9e8;
        padding: 1%;
        box-sizing: border-box;
    }

    #userboard-app-1{
        position: relative;
        height: 10%;
        z-index: 0;
    }

    #userboard-pod{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: #e8e9e8;
    }

    #userboard-pod-back{
        position: absolute;
        top: 0;
        left: 0;
        width: 5%;
        height: 5%;
    }

    .visible {
    transform: translateX(0);
  }

  .hidden {
    transform: translateX(100%);
  }

  .slide-enter {
    transform: translateX(100%);
  }

  .slide-enter-active {
    animation: slide-in 0.5s ease-out;
  }

  .slide-exit {
    transform: translateX(0);
  }

  .slide-exit-active {
    animation: slide-out 0.5s ease-out;
  }

  @keyframes slide-in {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
</style>

<script>
    import App from "../appl.svelte";
    import { server, JWTToken, github_username } from "../../store";
    import { onMount } from "svelte";
    import { slide } from "svelte/transition";
    import Roundbutton from "../roundbutton.svelte";
    import Pod from "../pod.svelte";

    console.log($server, $JWTToken, $github_username)


    // @ts-ignore
    let pod_list = {
        appl: {
            data: [
                {
                    name: '',
                    repoURL: '',
                }
            ]
        },
    }
    let appl_name_selected = ''
    let pod_visible = false
    // @ts-ignore
    // @ts-ignore
    async function servercomm(dir, param, key,  okfunction=()=>{}, cancelfunction=()=>{}, errorfunction=()=>{}){
        try {
            const res = await fetch($server + dir, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + $JWTToken,
            },
            })
            if (res.ok) {
                const resultSave = await res.json();
                // @ts-ignore
                param[key] = resultSave
            } else {
                console.error('서버에서 오류 응답을 받았습니다.');
            }
            } catch (error) {
                console.error('네트워크 오류:', error);
        }
    }
    onMount(async () => {
        // @ts-ignores
        await servercomm("api/pod_detail", pod_list, "detail")
        await servercomm("argo/get-all-applications", pod_list, "appl")
        console.log(pod_list)
        
        console.log(pod_list.appl.data)

        // pod_list 에 일부러 변화를 줌.
        // @ts-ignore
        pod_list["getting_started"] = true
    })

    function toggle_pod_visible(){
        console.log("A")
        pod_visible = !pod_visible
    }
</script>

<div id="userboard-application">
    <div id="userboard-app-1">
        {#if pod_list.appl.data != null}
            {#each pod_list.appl.data as application}
                <App bind:binding = {pod_visible} clickHandler = {()=>{
                    appl_name_selected = application.name
                    console.log(appl_name_selected)
                    toggle_pod_visible()
                    }} application_name = {application.name} application_repo = {application.repoURL}/>
            {/each}
        {/if}
    </div>
    <div id="userboard-pod" class="{pod_visible ? 'visible' : 'hidden'}" in:slide >
        <div id="userboard-pod-back">
            <Roundbutton src="/back.png" bind:binding={pod_visible} toggle_function={toggle_pod_visible}/>
        </div>
        {#if pod_visible}
            <Pod app_name={appl_name_selected}/>
        {/if}
    </div>
</div>