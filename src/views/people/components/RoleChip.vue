<template>
	<div
		data-testid="role-chip"
		class="py-2 px-5 w-full text-center rounded-t-xl"
		:class="getPersonRoleColor(personRole)">
		<small class="text-xs mx-auto">{{ getPersonRoleName(personRole) }}</small>
	</div>
</template>

<script setup lang="ts">
import { PersonRoleType } from '@/models';
import { getPersonRoleName, getPersonRoleColor } from '@/utils';

defineProps<{
	personRole: PersonRoleType;
}>();
</script>
