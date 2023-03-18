<template>
	<ul class="grid grid-cols-7 gap-1">
		<div
			v-for="({ name, description }, i) of legends"
			:key="i"
			class="text-center rounded-full p-2"
			:class="getStatusColor(name)">
			<div class="text-center" data-testid="legend-status">
				<small class="text-xs">{{ getStatusName(name) }}</small>
			</div>
			<v-tooltip
				content-class="!bg-primary-1 !max-w-[250px] font-bold text-center"
				activator="parent"
				location="bottom"
				>{{ description }}</v-tooltip
			>
		</div>
	</ul>
</template>

<script setup lang="ts">
import { Legend } from '@/models';
import { getStatusName, getStatusColor } from '@/utils';

interface Props {
	legends: Legend[];
}

defineProps<Props>();
</script>
