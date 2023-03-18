<template>
	<div
		data-testid="status-chip"
		class="py-1 px-5 w-auto text-center rounded-bl-xl"
		:class="getStatusColor(animalStatus)">
		<small class="text-xs mx-auto">{{ getStatusName(animalStatus) }}</small>
	</div>
</template>

<script setup lang="ts">
import { StatusType } from '@/models';
import { getStatusName, getStatusColor } from '@/utils/statusLegends';

defineProps<{
	animalStatus: StatusType;
}>();
</script>

<style scoped></style>
