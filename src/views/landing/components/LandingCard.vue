<template>
	<CardLayout>
		<div
			data-testid="home-card"
			class="pa-5 text-center relative h-[200px] overflow-hidden rounded-[30px] shadow-xl">
			<v-img
				:src="`./3d/${cardImage}`"
				class="absolute -top-10 -right-8 h-44 w-auto lg:w-44 aspect-square z-10" />

			<v-img
				:src="`./3d/${cardImage}`"
				class="absolute -top-24 -left-1/2 min-w-[500px] min-h-[500px] before:absolute before:content['patata'] before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-tl before:from-white before:via-slate-100/90 before:to-white/50 z-0" />

			<h1
				class="text-[80px] w-full text-left pl-10 absolute left-0 top-20 -translate-y-1/2 font-bold"
				:class="color">
				{{ value }}
			</h1>
			<strong
				class="absolute left-0 bottom-0 px-5 py-2 w-full rounded-lt-[30px] uppercase text-white bg-primary-1 z-10"
				>{{ title }}</strong
			>
		</div>
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
