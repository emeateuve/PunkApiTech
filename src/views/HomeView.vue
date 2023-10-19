<template>
  <v-row>
    <v-col cols="12">
      <h1 class="text-center">PunkApi</h1>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12">
      <SearchComponent @ready="setInputValue"></SearchComponent>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
      <FilterComponent @checked="setUrlParams"></FilterComponent>
    </v-col>
  </v-row>

  <v-row>
    <v-col v-for="beer of beerList" :key="beer.id" cols="12" sm="6" md="4" lg="3">
      <CardComponent :beer="beer"></CardComponent>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import SearchComponent from '@/components/SearchComponent.vue'
import CardComponent from '@/components/CardComponent.vue'
import FilterComponent from '@/components/FilterComponent.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      params: {},
      inputValue: undefined
    }
  },
  components: {
    SearchComponent,
    CardComponent,
    FilterComponent,
  },
  computed: {
    ...mapGetters({ beerList: 'getBeerList' })
  },
  methods: {
    ...mapActions({ getBeerList: 'getBeerList' }),

    setUrlParams(filters) {
      this.params = filters
      if (this.inputValue) this.submitRequest()

    },

    submitRequest() {
      const urlParams = {};
      for (const paramKey of Object.keys(this.params)) {
        if (this.params[paramKey]) {
          urlParams[paramKey] = this.inputValue.replaceAll(' ', '_')
        }
      }
      this.getBeerList(urlParams)
    },

    setInputValue(inputValue) {
      this.inputValue = inputValue
      this.submitRequest()
    }

  },
}
</script>
