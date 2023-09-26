<style>
    #userboard_application{
        width: 100%;
        height: 100%;
        background-color: #e8e9e8;
        padding: 1%;
        box-sizing: border-box;
    }

    #userboard_app_1{
        height: 10%;
    }
</style>

<script>
    import App from "../appl.svelte";
    import { server, JWTToken } from "../../store";
    import { onMount } from "svelte";


    // @ts-ignore
    let pod_list = {}
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
        // @ts-ignore
        await servercomm("api/pod_list", pod_list, "pod")
        await servercomm("api/pod_detail", pod_list, "detail")
        console.log(pod_list)
    })

</script>

<div id="userboard_application">
    <div id="userboard_app_1">
        <App />
    </div>
</div>