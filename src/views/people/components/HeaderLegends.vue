<template>
	<ul class="grid grid-cols-8 gap-1">
		<div
			v-for="({ name, description }, i) of legends"
			:key="i"
			class="text-center rounded-full p-2"
			:class="getPersonRoleColor(name)">
			<div class="text-center" data-testid="legend-status">
				<small class="text-xs">{{ getPersonRoleName(name) }}</small>
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
import { getPersonRoleColor, getPersonRoleName } from '@/utils';
import { PersonRoleTooltip } from '@/models';

interface Props {
	legends: PersonRoleTooltip[];
}

defineProps<Props>();
</script>
