<script>
// @ts-nocheck


    import { text } from "@sveltejs/kit";
    import Button from "../button.svelte";
    import Input from "../input.svelte";
    import ci_item from './ci_json.json'
    import cd_item from './cd_json.json'

    import { server, JWTToken } from "../../store";

    let cicd_toggle_default_ci = true
    /**
     * @type {null | boolean}
     */
     export let isPopupVisible = null;
     export let closePopup = null;
     export let repoName = null;

    console.log(repoName);

    function toggle_to_ci(){
        cicd_toggle_default_ci = true
    }

    function toggle_to_cd(){
        cicd_toggle_default_ci = false
    }
    let ci_spec = {
        repo_name : repoName,
        local_path : "",
        branch_name : ""
    }

    let cd_spec = {
        repo_name : repoName,
        local_path : "",
        service_name : "",
        replica_count : "",
        // entrypoint: "",
        application_name : "",
        repo_url : "",
    }

    let resultData = ""
    let resultMessage = ""

    async function servercomm(dir, jsonBody, okfunction=()=>{}, cancelfunction=()=>{}, errorfunction=()=>{}){
    const res = await fetch($server + dir, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + $JWTToken,
        },
        body: JSON.stringify(jsonBody)
    })
    const res_json = await res.json()
    resultData = res_json.status
    resultMessage = res_json.message
}

    async function confirm_cicd(){
        const auto_ci_dir = "github/auto-ci"
        const auto_cd_dir = "github/auto-cd"

        if(cicd_toggle_default_ci){
            ci_item.repositoryName = ci_spec.repo_name,
            ci_item.localRepositoryPath = ci_spec.local_path,
            ci_item.branchName = ci_spec.branch_name

            console.log(ci_item)

            await servercomm(auto_ci_dir, ci_item)
            console.log(resultData, resultMessage)
        }else{
            cd_item.argoApiRequestDto.spec.source.repoURL = cd_spec.repo_name,
            cd_item.localRepositoryPath = cd_spec.local_path,
            cd_item.serviceName = cd_spec.service_name,
            cd_item.argoApiRequestDto.metadata.name = cd_spec.application_name,
            cd_item.replicaCount = cd_spec.replica_count,
            cd_item.repositoryName = cd_spec.repo_name

            console.log(cd_item)

            await servercomm(auto_cd_dir, cd_item)
            console.log(resultData, resultMessage)
        }



    }
</script>
<style>
    .cicd_toggle{
        display: flex;
        width: 100%;
        height: 10%;
        position: relative;
    }

    .cicd-popup-content{
        box-sizing: border-box;
        padding: 5%;
        width: 100%;
        height: 90%;
        background-color: rgb(247, 245, 242);
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;

        overflow: scroll;
    }
    .cicd-popup-content::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
    }

    .cicd_menu_button{
        width: 100%;
        height: 10%;
        outline: none;
        border: none;
        background-color: transparent;
    }

    .toggle-slider{
        box-sizing: border-box;
        width:50%;
        height: 100%;
        background-color: rgb(250, 241, 228);
        position: absolute;
        left: 0px;
        top: 0px;
        z-index : -1;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        transition: transform 0.3s ease; /* 슬라이더 이동 애니메이션 */
    }

    .toggle-border-slider{
        width: 50%;
        height: 100%;
        position: absolute;
        left: 0px;
        z-index: -1;
        transition: transform 0.3s ease; /* 슬라이더 이동 애니메이션 */
    }
</style>
<div class="center-vertical size-parent">
    <div class="cicd_toggle center">
        <Button text="Continuous Integration" bind:binding = {cicd_toggle_default_ci} clickHandler = {toggle_to_ci}/>
        <Button text="Continuous Deploy" bind:binding = {cicd_toggle_default_ci} clickHandler = {toggle_to_cd}/>
        <div class="toggle-slider"style="transform: translateX({cicd_toggle_default_ci ? '0%' : '100%'})"></div>
        <div class="toggle-border-slider"style="transform: translateX({cicd_toggle_default_ci ? '100%' : '0%'})"></div>
    </div>
    <div class="cicd-popup-content">
        {#if cicd_toggle_default_ci}
            <div id="ci-content-wrapper">
                <Input text = "Repository Name :" bind:inputValue={ci_spec.repo_name} placeholder="Github Repo name"/>
                <Input text = "Local Repo Path :" bind:inputValue={ci_spec.local_path} placeholder="Ex ./myLocalRepository"/>
                <Input text = "Branch :" bind:inputValue={ci_spec.branch_name} placeholder="CI 할 Branch Name"/>
            </div>
        {:else}
            <div id="cd-content-wrapper">
                <Input text = "Repository Name :" bind:inputValue={cd_spec.repo_name} placeholder="Github Repo name"/>
                <!-- <Input text = "Repository Entrypoint :" inputValue={cd_spec.repo_name} placeholder="해당 위치에서 "/> -->
                <Input text = "Your Repository URL :" bind:inputValue={cd_spec.repo_url} placeholder="Ex https://github.com/K-luster/githubActionTest"/>
                <Input text = "Local Repo Path :" bind:inputValue={cd_spec.local_path} placeholder="Ex ./myLocalRepository"/>
                <Input text = "Your Service Name :" bind:inputValue={cd_spec.service_name} placeholder="Ex Kuploy"/>
                <Input text = "Your Project Name :" bind:inputValue={cd_spec.application_name} placeholder="Ex Kluster"/>
                <Input text = "Replica count:" bind:inputValue={cd_spec.replica_count} type="number" placeholder={"replica 는 1과 5사이의 숫자만 입력이 가능합니다."}/>
            </div>
        {/if}
    </div>
    <div class="cicd_menu_button center">
        <Button text="닫기" clickHandler={closePopup} bind:binding = {isPopupVisible}/>
        <Button text="확인" clickHandler={confirm_cicd}/>
      </div>
</div>