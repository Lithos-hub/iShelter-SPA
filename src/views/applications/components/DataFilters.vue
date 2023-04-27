<template>
	<div class="flex gap-5">
		<div class="flex-1">
			<SearchInput :is-loading="isLoading" label="Buscar persona" />
		</div>
		<div class="flex-none min-w-[250px] max-w-[500px]" data-testid="data-filters">
			<v-autocomplete
				v-model="status"
				clearable
				chips
				color="primary"
				label="Estado"
				item-title="text"
				item-value="value"
				:items="statusItems"
				multiple
				menu-icon="mdi-chevron-down" />
		</div>
		<div class="flex-none min-w-[250px] max-w-[500px]" data-testid="data-filters">
			<v-autocomplete
				v-model="category"
				clearable
				chips
				item-title="text"
				item-value="value"
				color="primary"
				label="Categoría"
				:items="categoryItems"
				multiple
				menu-icon="mdi-chevron-down" />
		</div>
	</div>
	<HeaderLegends :legends="personRoleLegends" />
</template>

<script setup lang="ts">
import { personRoleLegends } from '@/utils';

const statusItems = [
	{ text: 'Nuevo', value: 'new' },
	{ text: 'Leído', value: 'read' },
	{ text: 'Borrado', value: 'deleted' },
	{ text: 'Rechazado', value: 'denied' },
	{ text: 'Importante', value: 'important' },
];

const categoryItems = [
	{ text: 'Voluntario', value: 'volunteer' },
	{ text: 'Adoptante', value: 'adopter' },
	{ text: 'Adoptante Senior', value: 'senior_adopter' },
	{ text: 'Casa de acogida', value: 'foster' },
	{ text: 'Acog. a corto plazo', value: 'short_term_foster' },
	{ text: 'Acog. de larga duración', value: 'long_term_foster' },
	{ text: 'Acog. médica', value: 'medical_foster' },
	{ text: 'Acog. de emergencia', value: 'emergency_foster' },
];

const status = ref([]);
const category = ref([]);

interface Props {
	isLoading: boolean;
}

defineProps<Props>();
</script>

<style scoped></style>
