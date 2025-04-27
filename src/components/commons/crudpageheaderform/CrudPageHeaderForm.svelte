<script>
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';

export let config = {
	title: '',
	short_descr: '',
	status: 'Hello',
	errorObj: {}
};
const dispatch = createEventDispatcher();

onMount(()=> {

})

onDestroy(()=> {

})
</script>

<div class='row'>
	<div class='col-2'>
	</div>
	<div class='col-8'>
		{#if config.status.trim().length > 0 }
			<label >
				{ config.status }
			</label>
		{/if}
		<div class='row'>
			<div class='col-8'>
				<h1 class='header-16'>
					{config.title}
				</h1>
				<label >
					config.short_descr
				</label>
			</div>
			<div class='col-4'>
				<div class='right-bottom'>
					<button class='btn btn-sm btn-primary' on:click={dispatch('onBack')}}>
						Back
					</button>
					<button class='btn btn-sm btn-primary' on:click={dispatch('onSave')}}>
						Save
					</button>
				</div>
			</div>
		</div>
	</div>
	<div class='col-2'>
	</div>
</div>

<style>
	
</style>