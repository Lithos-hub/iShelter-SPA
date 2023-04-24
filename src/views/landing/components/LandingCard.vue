<template>
	<CardLayout>
		<div data-testid="home-card" class="pa-5 text-center relative h-[200px]">
			<v-img
				:src="`./3d/${cardImage}`"
				class="absolute -top-16 left-1/2 h-auto w-36 lg:w-44" />
			<h1
				class="text-[70px] mx-auto w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/2 font-bold"
				:class="color">
				{{ value }}
			</h1>
		</div>
		<v-tooltip
			content-class="!bg-primary-1 !max-w-[250px] font-bold text-center"
			activator="parent"
			location="bottom">
			{{ title }}
		</v-tooltip>
	</CardLayout>
</template>

<script setup lang="ts">
interface Props {
	title: string;
	color: string;
	value: number;
	cardName: string;
}

const props = defineProps<Props>();

const cardImage = computed(() => {
	return {
		new: 'plus-3d.png',
		adopted: 'heart-3d.png',
		housed: 'house-3d.png',
		dead: 'rainbow-3d.png',
	}[props.cardName];
});
</script>

<style scoped></style>
