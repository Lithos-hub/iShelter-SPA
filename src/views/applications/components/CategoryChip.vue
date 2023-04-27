<template>
	<div
		data-testid="category-chip"
		class="absolute left-0 top-0 text-xl text-white py-2 min-w-[170px] text-center rounded-br-[30px] flex flex-col justify-center items-center"
		:class="getApplicationCategoryColor(category)">
		<div>{{ getApplicationCategoryName(category) }}</div>
	</div>
</template>

<script setup lang="ts">
import { ApplicationCategory } from '@/models/Application.interface';
import { getApplicationCategoryColor, getApplicationCategoryName } from '@/utils';

interface Props {
	category: ApplicationCategory;
}

defineProps<Props>();
</script>
