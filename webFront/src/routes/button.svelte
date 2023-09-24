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
  </script>
  
  <style>
    /* 버튼 스타일링 */
    .button {
      height: 100%;
      display: inline-block;
      padding: 10px 20px;
      font-size: 16px;
      background-color: transparent; /* 배경색 지정 */
      color: #757979; /* 텍스트 색상 지정 */
      border: none; /* 테두리 제거 */
      border-radius: 5px; /* 둥근 모서리 설정 */
      cursor: pointer;
      transition: background-color 0.3s; /* 호버 시 배경색 변화 효과 */
      box-sizing: border-box;
    }
  
    /* 버튼 호버 스타일링 */
    .button:hover {
      background-color: #c8c9c9; /* 호버 시 배경색 변경 */
      color: #f83888;
    }
  </style>
  
  <button on:click ={() => {
    clickHandler()
    }}
    class="button">{text}</button>
  