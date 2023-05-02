<template>
	<div
		v-motion
		:initial="{
			opacity: 0,
			width: '0vw',
			height: '0vh',
		}"
		:enter="{
			opacity: 1,
			width: '25vw',
			height: '65vh',
			transition: {
				type: 'spring',
				stiffness: 300,
				damping: 25,
				mass: 1,
			},
		}"
		class="bg-white rounded-[30px] shadow-xl fixed bottom-5 right-5 z-50">
		<nav
			class="bg-primary-1 py-2 rounded-t-[30px] flex justify-between items-center px-5 text-white">
			<h2 class="font-bold">Chat</h2>
			<v-btn color="transparent" icon flat size="40" @click="$emit('close')">
				<v-icon size="30" color="white" icon="mdi-close"></v-icon
			></v-btn>
		</nav>
		<main></main>
	</div>
</template>

<script setup lang="ts">
defineEmits(['close']);
</script>

<style scoped></style>
