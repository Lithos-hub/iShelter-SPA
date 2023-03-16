<template>
	<section class="flex justify-between mb-5 items-center">
		<h1 class="text-5xl font-bold text-secondary-1">Animales</h1>
		<BaseButton
			title="Añadir nuevo usuario"
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
	<section>
		<Filters :is-loading="isLoading" />
	</section>
	<section>
		<BaseSpinner v-if="isLoading" />
		<section v-else class="grid grid-cols-4 gap-10">
			<ListCard
				v-for="(animal, i) of animalsData?.data"
				:key="i"
				:data="animal" />
		</section>
	</section>
</template>

<script setup lang="ts">
import { useAnimalsQuery } from '@/services/apis';

import ListCard from '@/views/animals/components/ListCard.vue';
import Filters from './components/DataFilters.vue';

const { data: animalsData, isLoading } = useAnimalsQuery();

const dialog = ref(false);

// const componentsList = [{}];
</script>
