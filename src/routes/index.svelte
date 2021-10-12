<script>
    import Toggle from "$lib/toggle.svelte"
    import Accordion from "$lib/accordion.svelte"
    let isToggled = false
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Toggle bind:isToggled label="Test"/>
<Toggle bind:isToggled label="Test" style="--toggleBackgroundColour: red;"/>

{#if isToggled}
    <h1>I'm toggled</h1>
{/if}

<Accordion isOpen={true} buttonText="Hello, is it me you're looking for?">
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cumque magni id, totam iste vero delectus ratione, eius praesentium, voluptate deserunt itaque explicabo. Tempore beatae, tempora explicabo fuga eaque possimus.</p>
    </div>
</Accordion>
