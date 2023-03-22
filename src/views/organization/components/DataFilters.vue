<template>
	<div>
		<div class="flex gap-5">
			<div class="flex-auto">
				<SearchInput :is-loading="isLoading" label="Buscar usuario" />
			</div>
		</div>
		<HeaderLegends :legends="userRoleLegends" />
	</div>
</template>

<script setup lang="ts">
import HeaderLegends from './HeaderLegends.vue';
import { userRoleLegends } from '@/utils';

interface Props {
	isLoading: boolean;
}

defineProps<Props>();
</script>

<style scoped></style>
