<!-- Button.svelte -->

<script>
    import { signinbool, signintoggle, signuptoggle } from '../store';

     /**
     * @type {string}
     */
      export let text; // 버튼 텍스트를 속성으로 받습니다.

     /**
     * @type {() => void}
     */
      export let clickHandler ;
      export let isDisabled = false;
      export let isShaking = false;
      export let binding = false;

      export let customStyle = '';
      export let customClass = '';
      export let classes = "";
      export let width = "100%";
      
  </script>
  
  <style>


    .button {
      width: var(--width);
      display: inline-block;
      padding: 10px 20px;
      font-size: 0.8rem;
      background-color: transparent; /* 배경색 지정 */
      color: #383a3a; /* 텍스트 색상 지정 */
      border: none; /* 테두리 제거 */
      border-radius: 5px; /* 둥근 모서리 설정 */
      cursor: pointer;
      transition: background-color 0.3s ease; /* 호버 시 배경색 변화 효과 */
      box-sizing: border-box;
      transition: transform 0.3s ease-in-out;
      text-align: center;
    }

     /* 흔들림 효과에 대한 CSS 애니메이션 설정 */
  .shaking {
    animation: shake 0.5s ease-in-out infinite;
  }

  @keyframes shake {
    0%, 100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(5px);
    }
    75% {
      transform: translateX(-5px);
    }
  }
  
    /* 버튼 호버 스타일링 */
    .button:hover:not([disabled])  {
      background-color: #c8c9c9; /* 호버 시 배경색 변경 */
      color: #f83888;
    }

    .button:disabled{
      cursor:default;
      color: #dbdbdb;
    }
  </style>
  
  <button on:click ={() => {
    clickHandler()
    }}
    style="--width:{width};"
    class= "button {classes} center center-vertical {isShaking ? 'shaking' : ''}" disabled = {isDisabled}
    >{text}</button>
