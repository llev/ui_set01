<script>
    import { slide } from 'svelte/transition'
    export let buttonText = ""
    export let isOpen = true
</script>

<div>
    <button on:click={() => (isOpen = !isOpen)}>{buttonText}</button>
    {#if isOpen}
    <div transition:slide>
        <slot />
    </div>
    {/if}
</div>