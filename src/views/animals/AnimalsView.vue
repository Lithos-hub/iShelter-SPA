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
	<section>
		<div class="flex gap-5">
			<div class="flex-auto">
				<SearchInput :is-loading="isLoading" label="Buscar animal" />
			</div>
		</div>
		<div class="flex justify-center gap-5">
			<div class="flex-none w-[200px]">
				<v-autocomplete
					v-model="select"
					clearable
					chips
					color="primary"
					label="Especie"
					:items="specieItems"
					multiple
					menu-icon="mdi-chevron-down"></v-autocomplete>
			</div>
			<div class="flex-none w-[200px]">
				<v-autocomplete
					v-model="select"
					clearable
					chips
					color="primary"
					label="Raza"
					:items="breedItems"
					multiple
					menu-icon="mdi-chevron-down"></v-autocomplete>
			</div>
			<div class="flex-none w-[200px]">
				<v-autocomplete
					v-model="select"
					clearable
					chips
					color="primary"
					label="Sexo"
					:items="genderItems"
					multiple
					menu-icon="mdi-chevron-down"></v-autocomplete>
			</div>
			<div class="flex-none w-[200px]">
				<v-autocomplete
					v-model="select"
					clearable
					chips
					color="primary"
					label="Estado"
					:items="statusItems"
					multiple
					menu-icon="mdi-chevron-down"></v-autocomplete>
			</div>
			<div class="flex-none w-[200px]">
				<v-autocomplete
					v-model="select"
					clearable
					chips
					color="primary"
					label="Otros"
					:items="othersItems"
					multiple
					menu-icon="mdi-chevron-down"></v-autocomplete>
			</div>
		</div>
	</section>
	<section>
		<base-spinner v-if="isLoading" />
		<section v-else class="grid grid-cols-4 gap-10">
			<list-card
				v-for="(animal, i) of animalsData?.data"
				:key="i"
				:data="animal" />
		</section>
	</section>
</template>

<script setup lang="ts">
import { useAnimalsQuery } from '@/services/apis';

import ListCard from '@/views/animals/components/ListCard.vue';

const { data: animalsData, isLoading } = useAnimalsQuery();

const select = ref([]);
const dialog = ref(false);
const specieItems = ['Perros', 'Gatos'];
const breedItems = ['raza 1', 'raza 2', 'raza 3', 'raza 4'];
const statusItems = ['estado 1', 'estado 2', 'estado 3', 'estado 4'];
const genderItems = ['male', 'female'];
const othersItems = ['other 1', 'other 2', 'other 3', 'other 4'];

// const componentsList = [{}];
</script>
