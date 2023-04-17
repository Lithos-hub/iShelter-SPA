<template>
	<div class="flex gap-5">
		<div class="flex-auto">
			<SearchInput :is-loading="isLoading" label="Buscar animal" />
		</div>
		<div class="flex-none w-[200px]" data-testid="data-filters">
			<v-autocomplete
				v-model="select"
				clearable
				chips
				color="primary"
				label="Especie"
				:items="specieItems"
				multiple
				menu-icon="mdi-chevron-down" />
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
				menu-icon="mdi-chevron-down" />
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
				menu-icon="mdi-chevron-down" />
		</div>
	</div>
	<HeaderLegends :legends="statusLegends" />
</template>

<script setup lang="ts">
import HeaderLegends from './HeaderLegends.vue';
import { statusLegends } from '@/utils';

const specieItems = ['Perros', 'Gatos'];
const breedItems = ['raza 1', 'raza 2', 'raza 3', 'raza 4'];
const genderItems = ['male', 'female'];

const select = ref([]);

interface Props {
	isLoading: boolean;
}

defineProps<Props>();
</script>

<style scoped></style>
