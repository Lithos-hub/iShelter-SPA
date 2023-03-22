<template>
	<section class="flex justify-between mb-5 items-center">
		<h1 class="text-5xl font-bold text-secondary-1">Animales</h1>
		<BaseButton
			title="Añadir nuevo animal"
			rounded="pill"
			size="large"
			@click="dialog = !dialog" />
		<FullScreenDialog
			:open="dialog"
			title="Añadir nuevo animal"
			@close="dialog = !dialog">
			<div class="p-5">
				<!-- <FormGenerator :components="componentsList" /> -->
			</div>
		</FullScreenDialog>
	</section>
	<section class="mb-5">
		<Filters :is-loading="isLoading" />
	</section>
	<section>
		<BaseSpinner v-if="isLoading" />
		<section
			v-else-if="animalsData?.data.length"
			class="flex flex-col md:grid md:grid-cols-2 2xl:grid-cols-3 gap-10">
			<ListCard
				v-for="(animal, i) of animalsData?.data"
				:key="i"
				:data="animal" />
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
