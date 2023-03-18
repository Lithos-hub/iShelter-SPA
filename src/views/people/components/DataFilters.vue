<template>
	<div class="flex gap-5">
		<div class="flex-1">
			<SearchInput :is-loading="isLoading" label="Buscar persona" />
		</div>
		<div
			class="flex-none min-w-[300px] max-w-[500px]"
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
		<div
			class="flex-none min-w-[300px] max-w-[500px]"
			data-testid="data-filters">
			<v-autocomplete
				v-model="roles"
				clearable
				chips
				color="primary"
				label="Roles"
				item-title="label"
				item-value="value"
				:items="roleItems"
				multiple
				menu-icon="mdi-chevron-down" />
		</div>
	</div>
</template>

<script setup lang="ts">
const cityItems = ['ciudad 1', 'ciudad 2'];
const roleItems = [
	{ label: 'Adoptante potencial', value: 'potential_adopter' },
	{ label: 'Adoptante', value: 'adopter' },
	{ label: 'Adoptante Senior', value: 'senior_adopter' },
	{ label: 'Casa de acogida', value: 'foster' },
	{ label: 'Acogida a corto plazo', value: 'short_term_foster' },
	{ label: 'Acogida de larga duración', value: 'long_term_foster' },
	{ label: 'Acogida médica', value: 'medical_foster' },
	{ label: 'Acogida de emergencia', value: 'emergency_foster' },
];

const roles = ref([]);
const cities = ref([]);

interface Props {
	isLoading: boolean;
}

defineProps<Props>();
</script>

<style scoped></style>
