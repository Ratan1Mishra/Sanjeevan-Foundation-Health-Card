<script>
	import { onMount, onDestroy, createEventDispatcher } from "svelte";
import { goto } from "$app/navigation";

export let config = {
	headers: [],
	data: [],
};

export let hdrConfig = {
	page_title: "",
	short_descr: "",
	search_field: "",
};
export let isDeleteRecord = false;
let status = "";
const dispatch = createEventDispatcher();
let selectedRecord = {};
let search = '';
let totalData = [];
$: totalData = config.data;

function onEdit() { }

onMount(() => { });

onDestroy(() => { });

function onSearch() {
	if (search.trim() === '') {
		totalData = config.data;
	}
	else {
		totalData = config.data.filter(rec => {
			console.log(hdrConfig.search_field)
			if (!rec[hdrConfig.search_field]) {
				return []
			}
			else 
				return rec[hdrConfig.search_field].toLowerCase().includes(search)
		})
	}
}
</script>

<div class="mt-2">
	{#if status.trim().length > 0}
	<div class="status-alert">
		{status}
	</div>
	{/if}
	<h1 class="header-16">{hdrConfig.title}</h1>
	<label for="">{hdrConfig.short_descr}</label>
	<div class="hdr-row">
		<input
			class="form-control"
			placeholder="Enter search text"
			style="width: 25%;"
			bind:value={search}
			on:input={onSearch}
		/>
		<!-- <div style="width: 55%;"></div> -->
		<div class="right" style="text-align: right">
			{#if hdrConfig.back && hdrConfig.back.trim().length > 0}
				<button class="btn btn-sm btn-primary" on:click={()=> dispatch('onBackMain')}>Back</button>
			{/if}
			<button class="btn btn-sm btn-primary" on:click={()=> dispatch('onAdd')}>Add new</button>
		</div>
	</div>
	<table class="table table-bordered table-sm mt-2" id="T1">
		<thead>
			<tr>
				{#each config.headers as v_hdr}
				<th> {v_hdr.label} </th>
				{/each}
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			{#each totalData as v_dt}
			<tr>
				{#each config.headers as v_hdr}
				<td>{v_dt[v_hdr.id]} </td>
				{/each}
				<td>
					<a href="#" on:click={()=> {
						dispatch("onEdit", v_dt);
						}}
						>
						<i class="bi bi-pencil-square"></i>
					</a>
					<a href="#" data-bs-toggle="modal" data-bs-target="#d1" style="color: #c70039" on:click={()=>
						selectedRecord = v_dt}
						>
						<i class="bi bi-trash"></i>
					</a>
				</td>
			</tr>
			{/each}
		</tbody>
	</table>

	<div class="modal fade" tabindex="-1" id="d1">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-body">
					<div class="row">
						<div class="col-12">
							Are you sure that you want to delete this record?
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button class="btn btn-sm btn-primary" data-bs-dismiss="modal">Cancel</button>
					<button class="btn btn-sm btn-primary"
						on:click={()=> dispatch('onDelete', selectedRecord)}
						data-bs-dismiss="modal"
					>Delete</button>
				</div>
			</div>
		</div>
	</div>

</div>

<style>
	.hdr-row {
	display: flex;
	gap: 10px;
	margin-top: 10px;
	justify-content: space-between;

}
</style>