<template>
	<section class="flex justify-between mb-5 items-center">
		<h1 class="text-5xl font-bold text-secondary-1">{{ title }}</h1>
		<BaseButton
			v-if="buttonText"
			:title="buttonText"
			rounded="pill"
			size="large"
			@click="$emit('action')" />
	</section>
</template>

<script setup lang="ts">
interface Props {
	title: string;
	buttonText?: string;
}

defineProps<Props>();
defineEmits(['action']);
</script>
