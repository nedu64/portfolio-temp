<script setup>
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
})
</script>

<template>
  <div class="text-white">
    <Profile 
      :heading="home.meta.heading"
      :copy="home.meta.copy"
      :image="home.meta.image"
      :resume-link="home.meta.resumeLink"
      :resume-link-text="home.meta.resumeLinkText"
    />
    <div class="flex flex-col gap-10 py-10 lg:py-24 lg:gap-24">
      <Projects />
      <Experience />
    </div>
  </div>
</template>