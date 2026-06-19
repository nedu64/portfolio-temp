<script setup>
    const route = useRoute()

    const { data } = await useAsyncData(route.path, () => {
        return queryCollection('projects').path(route.path).first()
    })

    const { data: projects } = await useAsyncData(() => queryCollection('projects').where('path', '<>', '/projects').all())
</script>
<template>
    <div class="px-4 md:px-6 lg:px-0">
        <article class="w-full md:mx-auto md:max-w-[900px] xl:max-w-[1300px] xl:px-10 mx-auto py-10 lg:px-0 lg:py-24 flex flex-col gap-8 lg:gap-10">
            <div class="flex flex-col gap-4">
                <BaseHeading heading-level="1" id="projects" theme="dark">{{ data.heading ?? 'Projects' }}</BaseHeading>
                <p class="text-base md:text-lg lg:leading-8">{{ data.description }}</p>
                <div v-if="data.tags.length" class="flex flex-wrap gap-2">
                    <span v-for="(tag, index) in data.tags" :key="index" class="border border-black group-hover:border-dashed px-3 py-1 rounded-full text-xs font-['Oswald'] font-black uppercase">{{ tag }}</span>
                </div>
            </div>
            <hr class="w-full h-[1px] border-t-[1px] border-dashed border-grey-200" />
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                <BaseCard 
                    v-for="project in projects" 
                    :key="project.id"
                    :heading="project.title"
                    :image="project.meta.image"
                    :copy="project.description"
                    :link="project.path"
                    :tags="project.tags"
                />
            </div>
        </article>
    </div>
</template>