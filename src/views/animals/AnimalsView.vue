<template>
	<ViewHeader title="Animales" button-text="Añadir nuevo animal" @action="dialog = !dialog" />
	<FullScreenDialog :open="dialog" title="Añadir nuevo animal" @close="dialog = !dialog">
		<div class="p-5">
			<!-- <FormGenerator :components="componentsList" /> -->
		</div>
	</FullScreenDialog>
	<section class="mb-5">
		<Filters :is-loading="isLoading" />
	</section>
	<section>
		<BaseSpinner v-if="isLoading" />
		<section
			v-else-if="animalsData?.data.length"
			class="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
			<ListCard v-for="(animal, i) of animalsData?.data" :key="i" :data="animal" />
		</section>
		<section v-else>
			<NoDataMessage
				message="Aún no has añadido animales. 
			Pulsa en 'Añadir nuevo animal' para empezar a registrar uno." />
		</section>
	</section>
</template>

<script setup lang="ts">
import { useAnimalsQuery } from '@/services/apis';

import ListCard from '@/views/animals/components/AnimalCard.vue';
import Filters from './components/DataFilters.vue';

const { data: animalsData, isLoading } = useAnimalsQuery();

const dialog = ref(false);

// const componentsList = [{}];
</script>
