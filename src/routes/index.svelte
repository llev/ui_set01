<script>
    import Toggle from "$lib/toggle.svelte"
    let isToggled = false
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Toggle bind:isToggled label="Test"/>
<Toggle bind:isToggled label="Test" style="--toggleBackgroundColour: red;"/>

{#if isToggled}
    <h1>I'm toggled</h1>
{/if}
