<script>
//imports
				import { onMount, onDestroy } from 'svelte';
				import { goto } from '$app/navigation';
				
				export let active = 0;
				export let label = '';
				export let buttons = [];
			
				onMount(()=> {
			
				})
			
				onDestroy(()=> {
			
				})
</script>

<style>
.framework {
			padding: 5px 10px;
			background-color: #e5e5e5;
			width: 33%;
			text-align: center;
		}
		
		
		.left {
			border-top-left-radius: 5px;
			border-bottom-left-radius: 5px;
		}
		
		
		.right {
			border-top-right-radius: 5px;
			border-bottom-right-radius: 5px;
		}
		
		.framework:hover {
			background-color: #8E44AD;
			color: #fff;
			cursor: pointer;
		}
		
		.active {
			background-color: #2980B9;
			color: #fff;
		}
</style>

<div >
	<div class='row  mt-4'>
		<div class='col-12'>
		<label >
			{ label }
		</label>
		</div>
	</div>
	<div class='d-flex'>
		{#each buttons as btn, indx }
			<div class='framework framework-left' class:active={active===indx} class:left={ indx === 0 } class:right={ indx === buttons.length-1 }  on:click={() => { active = indx }}>
						{ btn }
			</div>
		{/each}
	</div>
</div>