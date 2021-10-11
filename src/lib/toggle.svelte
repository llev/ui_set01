<script>
    export let isToggled = false
    export let label = ""
    export let style = ""
</script>

<label {style}>
    <input type="checkbox" bind:checked={isToggled} />
    <div class="toggle" />
    {label}
</label>



<style>
    label {
        --width: 40px;
        --height: calc(var(--width) / 2);
        --radius: calc(var(--height) / 2);
        display: flex;
    }
    .toggle {
        position: relative;
        width: var(--width);
        height: var(--height);
        border-radius: var(--radius);
        background-color: var(--toggleBackgroundColour, lightGrey);
        transition: background-colour 0.3s ease;
        margin-right: 5px;
    }
    .toggle::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: var(--height);
        width: var(--height);
        border-radius: var(--radius);
        background-color: var(--toggleButtonColor, white);
        box-shadow: 1px 1px 5px rgba(0,0,0, 0.3);
        transition: transform 0.3s ease;
    }
    input {
        display: none;
    }

    input:checked + .toggle {
        background-color: var(--toggleCheckedBackgroundColour, yellowgreen);
    }

    input:checked + .toggle::after {
        transform: translate3d(100%, 0, 0);
    }


</style>