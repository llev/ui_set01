<script>
    // import { each } from "svelte/internal";
    import { fade } from 'svelte/transition'
    export let items
    export let search = ""
    let isFocused = false

    $: filteredSearch = items.filter((item) => {
        return search === "" || item.toLowerCase().indexOf(search.toLowerCase()) != -1
    })
</script>

<div class="wrapper">
    <label>
        Search Names:<br/>
        <input 
        on:focus={() => (isFocused = true)} 
        bind:value={search} 
        type="text" 
        placeholder="Search">
    </label>

    {#if isFocused}
    <ul transition:fade>
    {#each filteredSearch as item}
        <li transition:fade={{ duration: 100 }} 
            on:click={() => {
                search = item
                isFocused = false
                }}>{item}</li>
    {/each}
    </ul>
    {/if}
</div>

<style>
    li  {
        text-transform: capitalize;
        padding: 10px;
        cursor: pointer;
        transition: 0.3 background ease;
    }
    li:hover {
        background: var(--listItemBackground, #eee)
    }
    .wrapper {
        position: relative;
        display: inline-block;
    }
    ul {
        position: absolute;
        width: 100%;
        border: solid 1px black;
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>

