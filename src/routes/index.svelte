<script>
    // import Toggle from "$lib/toggle.svelte"
    // import BetterAccordion from "$lib/BetterAccordion.svelte"
    import SearchFilter from '$lib/SearchFilter.svelte'
    let isToggled = false

    let search = ""

    let items = [
        "Robin Nightwing",
        "Spider Man",
        "Captain America",
        "Steve Rogers",
        "Iron Man",
        "Tony Stark",
        "Thor", 
        "Hulk",
        "Bruce Banner",
        "Wolverine", 
        "James Howlett",
        "Daredevil", 
        "Hawkeye", 
        "Cyclops", 
]
</script>

<h1>Welcome to SvelteKit {search} </h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>


<SearchFilter {items} bind:search />

<!-- <Toggle bind:isToggled label="Test"/>
<Toggle bind:isToggled label="Test" style="--toggleBackgroundColour: red;"/> -->

{#if isToggled}
    <h1>I'm toggled</h1>
{/if}

<!-- <BetterAccordion isOpen={true} buttonText="Hello, is it me you're looking for?">
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cumque magni id, totam iste vero delectus ratione, eius praesentium, voluptate deserunt itaque explicabo. Tempore beatae, tempora explicabo fuga eaque possimus.</p>
    </div>
</BetterAccordion> -->
