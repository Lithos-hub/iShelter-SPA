<template>
	<CardLayout
		class="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
		<h2 class="text-red-500 p-5 text-xl font-bold">
			{{ message }}
		</h2>
	</CardLayout>
</template>

<script setup lang="ts">
interface Props {
	message: string;
}

defineProps<Props>();
</script>

<style scoped></style>
