<script setup lang="ts">
</script>

<template>
	<div class="flex h-screen flex-col justify-between border-e bg-[#F6FFF7]">
		<div class="py-6">
			<span class="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
				<img src="../../../assets/LOGO.svg" alt="Let´s do it now" class="h-[30px]">
			</span>

			<ul class="mt-6 space-y-1">
				<li class="bg-[#4ade80] py-2">
					<button class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-50">Proyectos</button>
				</li>
			</ul>
		</div>

		<div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
			<button href="#" class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50 text-left mx-auto">
				<img alt="Avatar" src="../../../assets/icon-people-2.svg" class="h-10 w-10 rounded-full object-cover" />

				<div class="">
					<p class="text-xs">
						<strong class="block font-medium">Jesus Bastidas</strong>

						<span>correo@mycorreo.com </span>
					</p>
				</div>
			</button>
		</div>
	</div>
</template>