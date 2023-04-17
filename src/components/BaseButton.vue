<template>
	<v-btn
		color="primary"
		class="text-none"
		v-bind="$attrs"
		@click="$emit('action')">
		{{ title }}
	</v-btn>
</template>

<script setup lang="ts">
defineProps<{
	title?: string;
}>();

defineEmits(['action']);
</script>

<style scoped></style>
