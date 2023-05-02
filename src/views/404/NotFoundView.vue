<template>
	<div
		class="bg-gradient-to-br from-pink-500 via-primary-1 to-secondary-1 h-screen flex justify-center items-center overflow-hidden">
		<div class="text-center">
			<h1 class="text-white text-[200px] font-bold">404</h1>
			<p class="text-white text-xl font-semibold mb-20">¡Oops! ¡Esta página no existe!</p>
			<router-link to="/">
				<button
					class="bg-black rounded-full text-white p-3 px-10 font-semibold hover:bg-primary-1 hover:shadow-2xl hover:scale-110 duration-200">
					Volver a inicio
				</button>
			</router-link>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
