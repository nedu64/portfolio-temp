<script setup>
    const { data: projects } = await useAsyncData(() => queryCollection('projects').limit(4).all())
</script>

<template>
    <section class="text-black px-4 md:px-6 lg:px-0">
        <article class="md:max-w-[900px] xl:max-w-[1300px] mx-auto lg:px-0 xl:px-10 flex flex-col gap-10">
            <BaseHeading heading-level="2" id="projects" theme="dark">Projects</BaseHeading>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                <BaseCard 
                    v-for="project in projects" 
                    :key="project.id"
                    :heading="project.title"
                    :image="project.meta.image"
                    :copy="project.description"
                    :link="project.path"
                    :tags="project.meta.tags"
                />
            </div>
            <div class="flex justify-center">
                <BaseButton link="/projects" :style="'primary'">
                    View All Projects
                </BaseButton>
            </div>
        </article>
    </section>
</template>