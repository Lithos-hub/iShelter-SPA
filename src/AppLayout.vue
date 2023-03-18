<template>
	<div>
		<v-layout class="relative">
			<BaseNavbar />
			<SecondaryNavbar />
			<v-main class="min-h-screen bg-slate-100">
				<div class="my-10 mx-[15vw]">
					<router-view />
				</div>
			</v-main>
			<div class="fixed bottom-5 right-5">
				<v-btn color="primary" icon size="60">
					<v-icon size="30" color="white" icon="mdi-message-text"></v-icon
				></v-btn>
			</div>
		</v-layout>
	</div>
</template>
