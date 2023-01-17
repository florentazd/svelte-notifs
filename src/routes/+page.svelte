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
        notifier.push("Lorem ipsum dolor ", {
            duration: 4000,
            type:"warning"
        })
        // ou
        notifier.push("Inscription échouée, veuillez rééssayer", {
            duration: 5000,
            type:"danger"
        })
        notifier.push('Cliquer <u><b><a href="https://google.com">ici</a></b></u> pour aller sur google');
    })
</script>

<Notifications />
