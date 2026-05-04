<script setup>

   const props = defineProps({
		heading: {
			type: String,
			default: '',
		},
        image: {
            type: String,
            defaults: '/img/profile_img.webp'
        },
		copy: {
			type: String,
			default: '',
		},
		link: {
			type: String,
			default: '',
		},
		tags: {
			type: Array,
			default: () => [],
		},
	});

</script>

<template>
    <article class="h-full group relative transition duration-800 ease-in-out border border-gray-200 hover:border-dashed hover:border-primary-light/50 hover:shadow-lg py-6 md:py-10 rounded-lg flex flex-col justify-between gap-4 md:gap-6">
        <div class="flex flex-col gap-4 md:gap-6">
            <BaseHeading heading-level="4" id="projects" theme="dark" class="px-3 md:px-8">{{ heading }}</BaseHeading>
            <div class="flex flex-col gap-4 md:gap-6">
                <img :src="image" class="h-32 md:h-72 w-full object-cover" />
                <p class="px-3 md:px-8">{{ copy }}</p>
            </div>
        </div>
        <div v-if="tags.length" class="px-3 md:px-8 flex flex-wrap gap-2">
            <span v-for="(tag, index) in tags" :key="index" class="border border-black group-hover:border-dashed px-3 py-1 rounded-full text-xs font-['Oswald'] font-black uppercase">{{ tag }}</span>
        </div>
        <a :href="link" class="opacity-0 absolute inset-0"></a>
    </article>
</template>