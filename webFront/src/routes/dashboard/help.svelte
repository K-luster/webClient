<!-- <script>
    export let url = './documentation.html';
  
    /**
     * @type {string | undefined}
     */
    let htmlContent = undefined;
  
    (async function loadHtml() {
      const response = await fetch(url);
      htmlContent = await response.text();
    })();
  </script>
<style>
    .help-content-wrapper{
        width: 100%;
        height: 100%;
        overflow: scroll;
    }
</style>


<div class="help-content-wrapper">
    {#if htmlContent !== undefined}
        {@html htmlContent}
    {:else}
        <p>Loading...</p>
    {/if}
</div> -->

<style>
    #userboard-setting{
        width: 100%;
        height: 100%;
        background-color: #e9e9e2;
    }
</style>

<script>
    import { openDoc } from "../../store";

    openDoc()
</script>
<div id="userboard-help">
    Documentation is currently being displayed
</div>