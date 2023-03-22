<template>
	<div class="flex gap-5">
		<div class="flex-1">
			<SearchInput :is-loading="isLoading" label="Buscar persona" />
		</div>
		<div
			class="flex-none min-w-[250px] max-w-[500px]"
			data-testid="data-filters">
			<v-autocomplete
				v-model="regions"
				clearable
				chips
				color="primary"
				label="Regiones"
				:items="regionItems"
				multiple
				menu-icon="mdi-chevron-down" />
		</div>
		<div
			class="flex-none min-w-[250px] max-w-[500px]"
			data-testid="data-filters">
			<v-autocomplete
				v-model="cities"
				clearable
				chips
				color="primary"
				label="Ciudades"
				:items="cityItems"
				multiple
				menu-icon="mdi-chevron-down" />
		</div>
	</div>
	<HeaderLegends :legends="personRoleLegends" />
</template>

<script setup lang="ts">
import HeaderLegends from './HeaderLegends.vue';
import { personRoleLegends } from '@/utils';

const regionItems = ['Región 1', 'región 2'];
const cityItems = ['ciudad 1', 'ciudad 2'];

const regions = ref([]);
const cities = ref([]);

interface Props {
	isLoading: boolean;
}

defineProps<Props>();
</script>

<style scoped></style>
