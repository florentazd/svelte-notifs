<script lang="ts">
	import { notifier } from '$lib';
    import Notifications from '$lib/Notifications.svelte';
	import { onMount } from 'svelte';

    type notifType = {
        text: string,
        type: "success" | "warning" | "danger" | "info",
        duration: number
    }
    let notif:notifType = {
        text: "Hello world",
        type: "success",
        duration: 10000
    }

    const showNotification = (notif:notifType) => {
        notifier.push(notif.text, {
            type: notif.type,
            duration: notif.duration
        })
    }
</script>

<Notifications />
<section class="h-screen text-[Ubuntu] bg-gray-50 w-screen flex  justify-center items-center px-4 md:px-0">
    <div class="flex flex-col min-h-[500px] w-full md:w-[500px] gap-10">
        <div class="form-control w-full">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">
              <span class="label-text">Entrer le texte a afficher</span>
            </label>
            <input bind:value={notif.text} type="text" placeholder="Ex: Hello world" class="w-full h-12 px-2 outline-none rounded border" />
          </div>
          <div class="form-control w-full">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">
              <span class="label-text">Choississez un theme de notification<span>
            </label>
            <select bind:value={notif.type} class="w-full h-12 rounded bg-white border px-2 outline-none">
                <option class="text-green-500">success</option>
                <option class="text-yellow-500">warning</option>
                <option class="text-red-500">danger</option>
                <option class="text-blue-400">info</option>
                <option class="text-blue-400">default</option>
              </select>
          </div>
          <div class="form-control w-full">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">
              <span class="label-text">La durée de la notification</span>
            </label>
            <input bind:value={notif.duration} type="text" placeholder="Type here" class="w-full h-12 px-2 outline-none rounded border" />
          </div>
          <button on:click={()=>{
            showNotification(notif)
          }} class="bg-blue-400 text-white h-12 rounded">Créer la notification</button>
    </div>
</section>
