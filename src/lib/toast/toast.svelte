<script>
    import Portal from '../Portal.svelte'
    import { toast } from './toast'
</script>

<Portal>
    <div class="toast-wrapper">
        {#each $toast as message}
            <div class="toast-message">
                <p>
                    {message}
                </p>
            </div>
        {/each}
    </div>
</Portal>

<style>
    .toast-wrapper {
        
    }
</style>