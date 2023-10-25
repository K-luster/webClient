<script>
    import Button from "./button.svelte";
    import CicdPopup from "./dashboard/cicd_popup.svelte";

    let isPopupVisible = false; // 팝업의 가시성 상태를 저장하는 변수

    export let repo_name = "APPLICATION EXAMPLE"

    // 팝업을 열기 위한 함수
    function openPopup() {
      isPopupVisible = true;
    }
  
    // 팝업을 닫기 위한 함수
    function closePopup() {
      isPopupVisible = false;
    }

    /**
     * @type {any}
     */
     export let popup_content = CicdPopup
  </script>
  
  <!-- 팝업을 표시하는 버튼 -->
  <Button width="auto" text = {repo_name} bind:binding = {isPopupVisible} clickHandler = {openPopup}/>
  
  <!-- 조건부 렌더링을 통해 팝업을 표시 -->
  {#if isPopupVisible}
    <div class="popup center-vertical">
      <div id="popup-content-wrapper">
        <svelte:component this={popup_content} {...{
          // closePopup: closePopup,
          // isPopupVisible: isPopupVisible,
          // repoName : repo_name,
          args: [closePopup, isPopupVisible, repo_name]
        }}/>
      </div>
    </div>
  {/if}
  
  <style>
    #popup-content-wrapper{
        width: 100%;
        height: 90%;
    }

    /* 팝업 스타일 */
    .popup {
        display: flex;
      position: fixed;
      top: 50%;
      left: 55%;
      transform: translate(-50%, -50%);
      background-color: white;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
      width: 50%;
      height: 80%;
    }
  </style>
  