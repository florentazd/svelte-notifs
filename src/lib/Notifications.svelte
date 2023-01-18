<script lang="ts">
	import { notifications } from "$lib/stores/main";
	import { fly } from "svelte/transition";
    const removeMe = (id:number)=>{
        notifications.update((n:any) =>{
            return n.filter((notif:any) =>{
                return notif.id !== id
            })
        })
    }
</script>

<section id="notifications" class="absolute h-fit flex flex-col top-5 right-0 overflow-hidden gap-y-4 font-[Ubuntu]">
    {#each $notifications as notification, index (notification.id)}
        {#if notification.options?.type}
            <div in:fly={{ x: 200, duration:1000 }} out:fly={{ x: 200, duration:500 }} class:danger={notification.options.type == "danger"} class:info={notification.options.type == "info"} class:success={notification.options.type == "success"} class:warning={notification.options.type == "warning"} class="min-h-[40px] p-4 mx-5 relative text-white w-[90vw] sm:w-[320px] min-h-14 rounded grid grid-cols-[1fr,40px]">
                   <span class="flex flex-col justify-center">{@html notification.text}</span>
                   <button on:click={()=>{
                    removeMe(notification.id)
                   }} class="flex justify-end items-center cursor-pointer outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                   </button>
            </div>
        {:else}
            <div in:fly={{ x: 200, duration:1000 }} out:fly={{ x: 200, duration:500 }} class="min-h-[40px] p-4 bg-[#383a3e] mx-5 relative text-white w-[90vw] sm:w-[320px] min-h-14 rounded grid grid-cols-[1fr,40px]">
                <span class="flex flex-col justify-center">{@html notification.text}</span>
                   <button on:click={()=>{
                    removeMe(notification.id)
                   }} class="flex justify-end items-center cursor-pointer outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                   </button>
            </div>
        {/if}
    {/each}
</section>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
    
    .info{
        background-color: rgb(59 130 246)
    }
    .warning{
        background-color: #ffc409;
    }
    .success{
        background-color: rgb(45 211 111);

    }
    .danger{
        background-color: #eb445a;
    }
</style>
