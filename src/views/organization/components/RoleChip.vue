<template>
	<div
		data-testid="status-chip"
		class="py-1 px-5 w-auto text-center rounded-bl-xl"
		:class="getUserRoleColor(userRole)">
		<small class="text-xs mx-auto">{{ getUserRoleName(userRole) }}</small>
	</div>
</template>

<script setup lang="ts">
import { UserRoleType } from '@/models';
import { getUserRoleName, getUserRoleColor } from '@/utils';

defineProps<{
	userRole: UserRoleType;
}>();
</script>

<style scoped></style>
