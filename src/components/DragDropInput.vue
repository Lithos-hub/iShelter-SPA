<template>
	<div class="flex flex-col gap-2">
		<label class="font-bold text-primary-1">{{ label }}</label>
		<div
			class="container text-primary-1 p-5 flex flex-col justify-center text-center items-center duration-200 w-full h-full"
			:class="{
				'shadow-xl drag-and-drop__inner bg-opacity-20 scale-105 bg-primary-1':
					isDragging,
				'border border-slate-500 rounded-xl shadow': !isDragging,
			}"
			@dragover.prevent="isDragging = true"
			@dragleave.prevent="isDragging = false"
			@drop.prevent="onDrop">
			<div v-if="selectedFile" class="py-5">
				<strong>Nombre del archivo:</strong>
				<p>{{ selectedFile.name }}</p>
			</div>
			<div class="font-bold flex flex-col gap-5">
				<h3 class="text-black">
					Arrastra o selecciona un archivo de tu ordenador
				</h3>
				<BaseButton title="Seleccionar imagen" @click="inputFile?.click()" />
			</div>
		</div>
	</div>
	<input
		ref="inputFile"
		type="file"
		class="hidden"
		@change="(e) => onSelectedFile(e as HTMLInputEvent)" />
</template>

<script setup lang="ts">
import { useSnackbarStore } from '../store/Snackbar';

interface HTMLInputEvent extends Event {
	target: HTMLInputElement & EventTarget;
}

interface Props {
	label: string;
}

const emit = defineEmits(['select']);
defineProps<Props>();

const { showSnackbar } = useSnackbarStore();

const inputFile = ref<HTMLInputElement | null>(null);
const selectedFile = ref<File | null>(null);
const isDragging = ref(false);

const onSelectedFile = (event: HTMLInputEvent) => {
	if (!event.target.files) return;
	selectedFile.value = event.target.files[0];
	emit('select', selectedFile.value);
};

const onDrop = (event: DragEvent) => {
	event.preventDefault();

	if (!event.dataTransfer) return;

	isDragging.value = false;
	// Get the dropped files
	const files = event.dataTransfer.files;

	if (files.length === 0) return;

	const file = files[0];

	const type = file.type;

	if (!type.includes('image')) {
		showSnackbar(
			'error',
			'Formato de archivo incorrecto. Sólo se admiten imágenes.'
		);
	} else {
		if (file) {
			selectedFile.value = files[0];
		}
	}
};
</script>

<style lang="scss" scoped>
@import '@/scss';

.drag-and-drop__inner {
	z-index: 1000;
	position: relative;
	border-radius: 5px;
}
.drag-and-drop__inner:after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 5px;
	background-image: linear-gradient(90deg, #fc4b6c 50%, transparent 50%),
		linear-gradient(90deg, #fc4b6c 50%, transparent 50%),
		linear-gradient(0deg, #fc4b6c 50%, transparent 50%),
		linear-gradient(0deg, #fc4b6c 50%, transparent 50%);
	background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
	background-size: 15px 2px, 15px 2px, 2px 15px, 2px 15px;
	background-position: left top, right bottom, left bottom, right top;
	animation: border-motion 0.5s infinite linear;
}

@keyframes border-motion {
	0% {
		background-position: left top, right bottom, left bottom, right top;
	}
	100% {
		background-position: left 15px top, right 15px bottom, left bottom 15px,
			right top 15px;
	}
}
</style>
