<script setup>
    const route = useRoute()

    const { data } = await useAsyncData(route.path, () => {
        return queryCollection('projects').path(route.path).first()
    })
</script>
<template>
    <div class="px-8 lg:px-0">
        <article class="w-full md:mx-auto md:max-w-[900px] xl:px-10 mx-auto py-10 lg:px-0 lg:py-24 flex flex-col gap-8 lg:gap-10">
            <img :src="data.meta.image" class="object-contain h-full w-full rounded-lg" />
            <div class="flex flex-col gap-2">
                <BaseHeading heading-level="2" id="projects" theme="dark">{{ data.title }}</BaseHeading>
                <div v-if="data.meta.tags.length" class="flex flex-wrap gap-2">
                    <span v-for="(tag, index) in data.meta.tags" :key="index" class="border border-black group-hover:border-dashed px-3 py-1 rounded-full text-xs font-['Oswald'] font-black uppercase">{{ tag }}</span>
                </div>
            </div>
            <hr class="w-full h-[1px] border-t-[1px] border-dashed border-grey-200" />
            <ContentRenderer v-if="data" :value="data" class="prose max-w-none lg:text-lg" />
        </article>
    </div>
</template>