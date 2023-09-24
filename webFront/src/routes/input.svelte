<script>

    export let text = 'DEFAULT TEXT';
    export let type = "text"
    let isFocused = false;
    export let inputValue = "";
    export let placeholder = "";

    let showPassword = false;

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
      color: #757979;
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
        color: #e7dae3;
        font-size : 3px;
    }

    .password-toggle-button{
        position: absolute;
        top: 10px;
        right: 0;
        float: right;
        background-color: transparent; /* 버튼 배경색을 투명하게 설정 */
        border: none; /* 테두리 제거 (선택 사항) */
    }
  </style>
  
<div class="inputWrapper center">
  <div class="input-container">
    {#if type === 'password'}
        <div>
            <input id="inputpassword" type="password" bind:value={inputValue} class="input-field" on:focus={handleFocus} on:blur={handleBlur} placeholder={placeholder}/>
            <label class="label" class:active={isFocused || inputValue}>{text}</label>
            <button class="password-toggle-button" on:click={togglePasswordVisibility}>
                <span class="password-toggle-icon {showPassword ? 'show-password' : ''}">
                {showPassword ? '👁️' : '🙈'}
                </span>
            </button>
        </div>
    {:else if type ==='email'}
        <input id="emailInput" type="email" bind:value={inputValue} class="input-field" on:focus={handleFocus} on:blur={handleBlur} placeholder="example@konkuk.ac.kr" pattern=".+@konkuk\.ac\.kr" required/>
        <label class="label" class:active={isFocused || inputValue}>{text}</label>
    {:else}
        <input type="text" bind:value={inputValue} class="input-field" on:focus={handleFocus} on:blur={handleBlur} placeholder={placeholder}/>
        <label class="label" class:active={isFocused || inputValue}>{text}</label>
    {/if}
  </div>
</div>
  