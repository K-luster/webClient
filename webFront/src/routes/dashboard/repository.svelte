<style>
    #userboard-repository{
        width: 100%;
        height: 100%;
        display: flex;
    }

    #repository-button{
        width: 100%;
        height: 10%;
    }

    #repository-content{
        width: 100%;
        height: 90%;
    }
    
</style>

<script>
// @ts-nocheck

    import { onMount } from 'svelte';
    import { server, JWTToken } from '../../store';
    import Roundbutton from '../roundbutton.svelte';
    import Repo from '../repo.svelte';
    // @ts-ignore
    let responseData = null;
    // @ts-ignore

    let repository_list = []

    /**
     * @param {string} _dir
     */
    // @ts-ignore


    function userboard(){

    }

    onMount(async () => {
        try {
            const res = await fetch($server + "github/get-all-repository", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + $JWTToken,
            },
            })
            if (res.ok) {
                const resultSave = await res.json();
                repository_list = resultSave
                console.log(repository_list, resultSave)
            } else {
                console.error('서버에서 오류 응답을 받았습니다.');
            }
            } catch (error) {
                console.error('네트워크 오류:', error);
        }

        console.log(repository_list)
    })

</script>

<div id="userboard-repository" class="center-vertical">
    <!-- <div id="repository-button">
        <Roundbutton src="/plus.png" toggle_function = {userboard} number = {0}/>
    </div> -->

    <div id="repository-content">
        {#each repository_list as item (item)} 
            <Repo repo_name={item.name} repo_desc={item.description} />
        {/each}
    </div>
</div>