<template>
	<v-card>
		<v-img :src="beer.image_url" height="200px"></v-img>
		<v-card-title>{{ beer.name }}</v-card-title>
		<v-card-subtitle>{{ beer.tagline }}</v-card-subtitle>
		<v-card-text>
			<p class="ellipsis">{{ beer.description }}</p>
			<v-row>
				<v-col cols="6">
					<strong>First Brewed:</strong> {{ beer.first_brewed }}
				</v-col>
				<v-col cols="6">
					<strong>ABV:</strong> {{ beer.abv }}%
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="6">
					<strong>IBU:</strong> {{ beer.ibu }}
				</v-col>
				<v-col cols="6">
					<strong>EBC:</strong> {{ beer.ebc }}
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="6">
					<strong>Volume:</strong> {{ beer.volume.value }} {{ beer.volume.unit }}
				</v-col>
				<v-col cols="6">
					<strong>Boil Volume:</strong> {{ beer.boil_volume.value }} {{ beer.boil_volume.unit }}
				</v-col>
			</v-row>
		</v-card-text>
	</v-card>
</template>
<style lang="scss">
.ellipsis {
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
</style>
<script>
export default {
	name: 'CardComponent',
	props: {
		beer: {
			type: Object,
			default: undefined
		}
	},
}
</script>