<script>
import { onMount, onDestroy, createEventDispatcher } from 'svelte';
import { goto } from '$app/navigation'


export let config = {
	title: 'header',
	search: '',
	status: 'status text',
	button1: 'button-text',
	button2: 'button-text'
}

const dispatch = createEventDispatcher();

onMount(()=> {

})

onDestroy(()=> {

})
</script>

<style>
.main-div {
	display: flex;
	align-items: center;
}
</style>

<div class='main-div gap-5'>
	<h5 class='header-16 pt-1'>
		{ config.title }
	</h5>
	{#if config.showSearch }
		<input class='ms-3 form-control' style='width: 20%' bind:value={ config.search } type='text' placeholder='Enter search text'>
	{/if}
	<div class='mx-auto'>
		{#if config.status.trim().length > 0 }
			<div class='alert alert-primary'>
				{ config.status }
			</div>
		{/if}
	</div>
	<div >
		{#if config.button1 && config.button1.trim().length > 0 }
			<button class='btn btn-sm btn-primary' on:click={() => { dispatch('btn1Click') }}>
				{ config.button1 }
			</button>
		{/if}
		{#if config.button2 && config.button2.trim().length > 0 }
			<button class='btn btn-sm btn-primary' on:click={() => { dispatch('btn2Click') }}>
				{ config.button2 }
			</button>
		{/if}
		{#if config.button3 && config.button3.trim().length > 0 }
			<button class='btn btn-sm btn-primary' on:click={() => { dispatch('btn3Click') }}>
				{ config.button3 }
			</button>
		{/if}
	</div>
</div>