<template>
	<CardLayout>
		<v-card
			data-testid="home-card"
			class="rounded-xl pa-5 text-center"
			:title="title"
			elevation="0"
		>
			<v-card-text class="mt-5">
				<h1 class="text-7xl" :class="color">
					{{ value }}
				</h1>
			</v-card-text>
		</v-card>
	</CardLayout>
</template>

<script setup lang="ts">
interface Props {
	title: string;
	color: string;
	value: number;
}

defineProps<Props>();
</script>

<style scoped></style>
