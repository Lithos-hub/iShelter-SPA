<template>
	<section class="flex justify-between mb-5 items-center">
		<h1 class="text-5xl font-bold text-secondary-1">
			Detalles del animal: {{ 'name' }}
		</h1>
		<RouterLink to="/animals">
			<BaseButton title="Regresar" rounded="pill" size="large" />
		</RouterLink>
	</section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
