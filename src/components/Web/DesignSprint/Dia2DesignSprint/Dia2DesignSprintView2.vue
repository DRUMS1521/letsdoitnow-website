<script setup lang="ts">
import  { showToast, POSITION } from '../../../../stores/Toast';

const props = defineProps({
	question: {
		type: Object,
		default: () => {
			showToast('Error en la conexión', 'error', 3000, POSITION.BOTTOM_CENTER)
		},
	}
});

const textareaClass = () => {
	return {
		'border border-gray-800 rounded-md p-1 w-full': true,
		'focus:relative bg-green-500 text-green-50': false,
		'bg-green-600 text-green-50': false,
	};
};

const newId = () => {
	return `${props.question.content.industryIdeas.content.length + 1}`;
};
</script>

<template>
	<div class="my-4">
		<div class="pt-2 w-full pb-6" v-for="textarea in props.question.content.industryIdeas.content">
			<p class="pb-1">{{ props.question.content.industryIdeas.title }} <span v-if="question.isFinished" class="text-xs text-red-500">Esta entrada ya no es editable</span></p>
			<textarea v-model="textarea.msg" :class="textareaClass()" cols="30" rows="5" placeholder="Escribe tu respuesta" data-question-id="2" :disabled="props.question.isFinished"></textarea>
		</div>
		<div class="w-full mt-4">
			<button class="rounded-full flex mx-auto" @click="!props.question.isFinished ? props.question.content.industryIdeas.content.push({id: newId(), msg: ''}) : showToast('No se pueden agregar mas elementos', 'error', 3000, POSITION.BOTTOM_CENTER)">
				<span>
					<img src="@/assets/suma.svg" alt="Siguiente" class="w-10 h-10 hover:scale-95" />
				</span>
			</button>
		</div>
	</div>
</template>