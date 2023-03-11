<template>
	<v-btn
		color="primary"
		class="text-none"
		v-bind="$attrs"
		@click="$emit('on-click')"
	>
		{{ title }}
	</v-btn>
</template>

<script setup lang="ts">
defineProps<{
	title: string;
}>();

defineEmits(['on-click']);
</script>

<style scoped></style>
