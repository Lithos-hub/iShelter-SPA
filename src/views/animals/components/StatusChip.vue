<template>
	<div
		data-testid="status-chip"
		class="py-1 px-5 w-auto text-center rounded-bl-xl"
		:class="getAnimalStatusColor(animalStatus)">
		<small class="text-xs mx-auto">{{
			getAnimalStatusName(animalStatus)
		}}</small>
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
