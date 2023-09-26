<script>
    import Button from "./button.svelte";


    export let text = 'DEFAULT TEXT';
    export let type = "text"
    let isFocused = false;
    export let inputValue = "";
    export let placeholder = "";

    let showPassword = false;
    export let email_auth_failed = false
    export let isDisabled = false
    export let _min = 0
    export let _max = 0
    export let maxlength = 0
    export let pattern = ""

    function togglePasswordVisibility() {
        let passwordInput = /** @type {HTMLInputElement} */ (document.getElementById("inputpassword"))
        if(passwordInput?.type == "password"){
            passwordInput.type = "text"
            showPassword = true;
        }else{
            passwordInput.type = "password"
            showPassword = false;
        }
    }

    export let onclickFunction = togglePasswordVisibility;
    
    function handleFocus() {
      isFocused = true;
    }
  
    function handleBlur() {
      isFocused = false;
    }

    
  </script>
  
  <style>

    .inputWrapper{
        position: relative;
    }
    .input-container {
      position: relative;
      width: 80%;
      outline: none;
      border: none;
      padding : 10px;
      box-sizing: border-box;
    }
  
    .label {
      position:absolute;
      left: 0;
      top: 0;
      transition: transform 0.2s ease-out, font-size 0.2s ease-out;
      transform-origin: left bottom;
      pointer-events: none;
      transform: translateY(var(--label-translateY, 0)) scale(var(--label-scale, 1));
      color: #1f3546;
    }
  
    .input-field {
      width: 100%;
      padding: 10px;
      border: none;
      outline: none;
      transition: border-color 0.2s ease-out;
      box-sizing: border-box; /* 이 부분을 추가 */
      background-color: transparent;
    }
  
    .input-field:focus + .label,
    .input-field:not(:placeholder-shown) + .label {
      --label-translateY: -10px;
      --label-scale: 0.8;
      color: #B96161
    }
    .input-field::placeholder{
        color: #af96a7;
        font-size : 13px;
    }

    .password-toggle-button{
        position: absolute;
        top: 10px;
        right: 0;
        float: right;
        background-color: transparent; /* 버튼 배경색을 투명하게 설정 */
        border: none; /* 테두리 제거 (선택 사항) */
    }

    .email-auth{
      position: absolute;
      top: 0px;
      right: 0px;
    }
  </style>
  
<div class="inputWrapper center">
  <div class="input-container">
    {#if type === 'password'}
        <div>
            <input id="inputpassword" type="password" bind:value={inputValue} class="input-field" on:focus={handleFocus} on:blur={handleBlur} placeholder={placeholder}/>
            <label class="label" class:active={isFocused || inputValue}>{text}</label>
            <button class="password-toggle-button" on:click={onclickFunction}>
                <span class="password-toggle-icon {showPassword ? 'show-password' : ''}">
                {showPassword ? '👁️' : '🙈'}
                </span>
            </button>
        </div>
    {:else if type ==='email_register'}
        <input type="email" bind:value={inputValue} class="input-field" on:focus={handleFocus} on:blur={handleBlur} placeholder="example@konkuk.ac.kr" pattern=".+@konkuk\.ac\.kr" required/>
        <label class="label" class:active={isFocused || inputValue}>{text}</label>
        <div class="email-auth">
          <Button text="인증" clickHandler={onclickFunction} bind:isDisabled = {isDisabled}/>
        </div>
    {:else if type ==='email_auth'}
        <input type="email" bind:value={inputValue} class="input-field" on:focus={handleFocus} on:blur={handleBlur} placeholder="example@konkuk.ac.kr" pattern=".+@konkuk\.ac\.kr" required/>
        <label class="label" class:active={isFocused || inputValue}>{text}</label>
        <div class="email-auth">
          <Button text="확인" clickHandler={onclickFunction} bind:isDisabled = {isDisabled} bind:isShaking={email_auth_failed}/>
        </div>
    {:else if type ==='number'}
        <input type="number" bind:value={inputValue} class="input-field" on:focus={handleFocus} on:blur={handleBlur} pattern="{pattern}" maxlength="{maxlength}" placeholder="{placeholder}" min="{_min}" max="{_max}" required/>
        <label class="label" class:active={isFocused || inputValue}>{text}</label>
    {:else}
        <input type="text" bind:value={inputValue} class="input-field" on:focus={handleFocus} on:blur={handleBlur} placeholder={placeholder}/>
        <label class="label" class:active={isFocused || inputValue}>{text}</label>
    {/if}
  </div>
</div>
  