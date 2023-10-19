<template>
	<v-text-field color="indigo" bg-color="indigo-lighten-4" clearable
		v-model="search" @update:modelValue="submitRequest" append-inner-icon="mdi-magnify" label="Search..."
		hide-details></v-text-field>
</template>
<script>
export default {
	name: 'SearchComponent',
	data() {
		return {
			search: undefined,
			timeoutId: undefined
		}
	},
	methods: {
		submitRequest() {
			if(this.search && this.search !== ''){
				clearTimeout(this.timeoutId)
				this.timeoutId = setTimeout(() => {
					this.$emit('ready', this.search)
				}, 1500);
			}

		}
	},


	created() {

	},
}
</script>