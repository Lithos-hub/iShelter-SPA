<template>
	<div class="flex gap-5">
		<div class="flex-auto">
			<SearchInput :is-loading="isLoading" label="Buscar usuario" />
		</div>
		<div class="flex-none w-1/3" data-testid="data-filters">
			<v-autocomplete
				v-model="select"
				clearable
				chips
				color="primary"
				label="Rol"
				:items="roleItems"
				item-title="label"
				item-value="value"
				multiple
				menu-icon="mdi-chevron-down" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { getUserRoleList } from '@/utils';

const roleItems = computed(() => getUserRoleList());

const select = ref([]);

interface Props {
	isLoading: boolean;
}

defineProps<Props>();
</script>

<style scoped></style>
