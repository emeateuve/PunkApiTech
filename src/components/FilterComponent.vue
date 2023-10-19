<template>
	<v-expansion-panels>
		<v-expansion-panel bg-color="indigo-lighten-4">
			<v-expansion-panel-title>Filters</v-expansion-panel-title>
			<v-expansion-panel-text>
				<v-row>
					<v-col cols="12" md="4" sm="6" lg="2"><v-checkbox color="indigo" @change="checked" v-model="filters.beer_name"
							label="Search by name"></v-checkbox></v-col>
					<v-col cols="12" md="4" sm="6" lg="2"><v-checkbox color="indigo" @change="checked" v-model="filters.yeast"
							label="Search by yeast"></v-checkbox></v-col>
					<v-col cols="12" md="4" sm="6" lg="2"><v-checkbox color="indigo" @change="checked" v-model="filters.hops"
							label="Search by hops"></v-checkbox></v-col>
					<v-col cols="12" md="4" sm="6" lg="2"><v-checkbox color="indigo" @change="checked" v-model="filters.malt"
							label="Search by malt"></v-checkbox></v-col>
					<v-col cols="12" md="4" sm="6" lg="2"><v-checkbox color="indigo" @change="checked" v-model="filters.food"
							label="Search by food"></v-checkbox></v-col>
					<v-col cols="12" md="4" sm="6" lg="2"><v-checkbox color="indigo" @change="checked" v-model="filters.ids"
							label="Search by id(s)"></v-checkbox></v-col>
				</v-row>
				<!-- <v-row>
					<v-col cols="12" sm="8" md="2" class="d-flex">
						<v-text-field type="number">
							<template v-slot:append-inner>
								<SortButtonComponent></SortButtonComponent>
							</template>
						</v-text-field>
					</v-col>
				</v-row> -->
			</v-expansion-panel-text>
		</v-expansion-panel>
	</v-expansion-panels>
</template>
<style lang="scss" scoped>
.d-flex {
	display: flex !important;
}
</style>
<script>
// import SortButtonComponent from './SortButtonComponent.vue'
export default {
	name: 'FilterComponent',
	data() {
		return {
			filters: {
				beer_name: true,
				yeast: false,
				hops: false,
				malt: false,
				food: false,
				ids: false,
			}
		}
	},
	components: {
		// SortButtonComponent
	},
	methods: {
		checked() {
			this.$emit('checked', this.filters)
		}
	},

	created() {
		this.checked(this.filters)
	},
}
</script>