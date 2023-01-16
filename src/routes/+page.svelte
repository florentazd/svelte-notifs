<script lang="ts">
	import { notifier } from '$lib';
    import Notifications from '$lib/Notifications.svelte';
	import { onMount } from 'svelte';

    onMount(()=>{
        notifier.push("Hello world")
        // ou
        notifier.push("Hello world", {
            duration: 2000,
            type:"success"
        })
        // ou
        notifier.push("Hello world", {
            duration: 3000,
            type:"warning"
        })
        // ou
        notifier.push("Hello world", {
            duration: 2000,
            type:"danger"
        })
        notifier.push('Cliquer <u><b><a>ici</a></b></u> pour aller sur google');
    })
</script>

<Notifications />

