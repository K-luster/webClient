<script>
    export let toggle = false;
    /**
     * @type {any}
     */
    export let toggle_function;
    export let src = "";
    export let number = 0;
</script>

<style>


    .button-style{
        cursor: pointer;
    }
    .round-button {
        width: 50px;
        height: 50px;
        margin: 10px;
        padding: 10px;
        background-color: #f5f5f89b; /* 배경색 지정 */
        color: #fff; /* 텍스트 색상 지정 */
        border-radius: 50%; /* 원 모양으로 만들기 위해 반지름을 50%로 설정 */
        text-decoration: none; /* 링크 효과 제거 */
    }
</style>

<button on:click={toggle_function(number)}
    class="size-parent no-outline round-button button-style">
    <img src="{src}" class="img-fit size-parent" alt="sidebar">
</button>