<script>
	import { notifications } from "$lib/stores/main";
	import { fly } from "svelte/transition";
</script>

<section id="notifications" class="absolute h-fit flex flex-col top-5 right-0 overflow-hidden gap-y-4">
    {#each $notifications as notification, index (notification.id)}
        {#if notification.options?.type}
            {#if notification.options.type == "success"}
                <div in:fly={{ x: 200 }} out:fly={{ x: 200 }} class="min-h-[40px] px-4 py-2 font-sans bg-[#48c774] mx-5 relative text-white w-[90vw] sm:w-[260px] h-14">
                   {@html notification.text}
                </div>
            {:else if notification.options.type == "warning"}
                <div in:fly={{ x: 200 }} out:fly={{ x: 200 }} class="min-h-[40px] px-4 py-2 font-sans bg-[#ffdd57] mx-5 relative text-white w-[90vw] sm:w-[260px] h-14">
                    {@html notification.text}
                </div>
            {:else if notification.options.type == "danger"}
                <div in:fly={{ x: 200 }} out:fly={{ x: 200 }} class="min-h-[40px] px-4 py-2 font-sans bg-[#ff3860] mx-5 relative text-white w-[90vw] sm:w-[260px] h-14">
                    {@html notification.text}
                </div>
            {/if}
        {:else}
            <div in:fly={{ x: 200 }} out:fly={{ x: 200 }} class="min-h-[40px] px-4 py-2 font-sans bg-gray-800 mx-5 relative text-white w-[90vw] sm:w-[260px] h-14">
                {@html notification.text}
            </div>
        {/if}
    {/each}
</section>

