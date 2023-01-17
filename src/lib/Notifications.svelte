<script>
	import { notifications } from "$lib/stores/main";
	import { fly } from "svelte/transition";
</script>

<section id="notifications" class="absolute h-fit flex flex-col top-5 right-0 overflow-hidden gap-y-4 font-[Ubuntu]">
    {#each $notifications as notification, index (notification.id)}
        {#if notification.options?.type}
            {#if notification.options.type == "success"}
            <div in:fly={{ x: 200, duration:1000 }} out:fly={{ x: 200, duration:500 }} class="min-h-[40px] p-4 bg-[#2dd36f] mx-5 relative text-white w-[90vw] sm:w-[320px] min-h-14 rounded">
                   {@html notification.text}
                </div>
            {:else if notification.options.type == "warning"}
            <div in:fly={{ x: 200, duration:1000 }} out:fly={{ x: 200, duration:500 }} class="min-h-[40px] p-4 bg-[#ffc409] mx-5 relative text-white w-[90vw] sm:w-[320px] min-h-14 rounded">
                    {@html notification.text}
                </div>
            {:else if notification.options.type == "danger"}
            <div in:fly={{ x: 200, duration:1000 }} out:fly={{ x: 200, duration:500 }} class="min-h-[40px] p-4 bg-[#eb445a] mx-5 relative text-white w-[90vw] sm:w-[320px] min-h-14 rounded">
                    {@html notification.text}
                </div>
            {/if}
        {:else}
            <div in:fly={{ x: 200, duration:1000 }} out:fly={{ x: 200, duration:500 }} class="min-h-[40px] p-4 bg-[#383a3e] mx-5 relative text-white w-[90vw] sm:w-[320px] min-h-14 rounded">
                {@html notification.text}
            </div>
        {/if}
    {/each}
</section>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
</style>
