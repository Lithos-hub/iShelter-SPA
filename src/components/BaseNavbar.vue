<template>
	<v-app-bar density="compact" color="primary" flat class="text-white px-10">
		<router-link to="/" class="w-[110px] relative">
			<v-img
				src="/logo.png"
				max-height="50"
				max-width="110"
				contain
				class="bg-white p-2 rounded-xl" />
			<small class="absolute -bottom-[2px] left-8 text-[10px] ml-2 text-black"
				>Beta</small
			>
		</router-link>

		<v-spacer></v-spacer>

		<v-btn icon>
			<v-icon>mdi-message</v-icon>
		</v-btn>

		<v-btn icon>
			<v-icon>mdi-bell</v-icon>
		</v-btn>

		<avatar-menu />
	</v-app-bar>
</template>
