<script setup>
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
})
</script>

<template>
  <div class="text-white">
    <Profile 
      :heading="home.heading"
      :image="home.image"
      :resume-link="home.resumeLink"
      :resume-link-text="home.resumeLinkText"
    >
    <ContentRenderer :value="home.body" class="text-base md:text-lg lg:leading-8" />
  </Profile>
    <div class="flex flex-col gap-10 py-10 lg:py-24 lg:gap-28">
      <Projects :project-count="home.projectCount" />
      <Experience />
      <Contact />
    </div>
  </div>
</template>