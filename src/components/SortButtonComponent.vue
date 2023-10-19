<template>
	<div>
		<v-btn size="small" variant="outlined" @click="toggleSort" :icon="sortDirection"></v-btn>
	</div>
</template>

<script>
export default {
	data() {
		return {
			sortDirection: '',
		};
	},
	methods: {
		toggleSort() {
			this.sortDirection = this.sortDirection === 'mdi-arrow-up' ? 'mdi-arrow-down' : this.sortDirection === 'mdi-arrow-down' ? "" : 'mdi-arrow-up';
		},
	},
};
</script>