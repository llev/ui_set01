<script>
    // import Toggle from "$lib/toggle.svelte"
    // import BetterAccordion from "$lib/BetterAccordion.svelte"
    import SearchFilter from '$lib/SearchFilter.svelte'
    import Field from '$lib/Field.svelte'
    // import Portal from '$lib/Portal.svelte'
    import Modal from '$lib/Modal.svelte'
    import Toast from '$lib/toast/Toast.svelte'
    import { toast } from '$lib/toast/toast'
    
    let isToggled = false
    let isModalOpen = false 
    
    let search = ""
    let items = [ "Robin Nightwing","Spider Man","Captain America", "Steve Rogers","Iron Man","Tony Stark","Thor", "Hulk","Bruce Banner","Wolverine", "James Howlett","Daredevil", "Hawkeye","Cyclops", 
]
</script>

<h1>Welcome to SvelteKit {search} </h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Modal bind:isModalOpen background={true}>
    <div style="background: white; box-shadow: 1px 1px 4px rgba(0,0,0,0.3)">
        <Field bind:value={search} label="Test label" instructions="Test instructions" placeholder="Test placeholder"/>
        <SearchFilter {items} bind:search />
    </div>
</Modal>

<button on:click={() => (isModalOpen = true)}>
    Open
</button>

<Toast duration={4000}/>
<button on:click={() => toast.send('NEW MESSAGE!' + Math.random())}>
    New Toast
</button>


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
