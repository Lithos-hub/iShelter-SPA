<template>
	<div
		data-testid="role-chip"
		class="py-2 px-5 text-center rounded-t-xl"
		:class="getUserRoleColor(userRole)">
		<small class="mx-auto">{{ getUserRoleName(userRole) }}</small>
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
