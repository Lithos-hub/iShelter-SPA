<template>
	<div
		data-testid="status-chip"
		class="py-2 px-5 text-center rounded-t-xl"
		:class="getAnimalStatusColor(animalStatus)">
		<h2 class="text-lg mx-auto">{{ getAnimalStatusName(animalStatus) }}</h2>
	</div>
</template>

<script setup lang="ts">
import { StatusType } from '@/models';
import { getAnimalStatusName, getAnimalStatusColor } from '@/utils';

defineProps<{
	animalStatus: StatusType;
}>();
</script>

<style scoped></style>
