<script setup>
    const { data: experience } = await useAsyncData(() => queryCollection('experience').all())

    console.log(experience.value)
</script>

<template>
    <section class="text-black px-8 lg:px-0">
        <div class="md:max-w-[900px] xl:max-w-[1300px] xl:px-10 mx-auto lg:px-0">
            <BaseHeading heading-level="2" id="projects" theme="dark" class="text-left lg:text-center mb-1">Timeline</BaseHeading>
            <div class="divide-y-[1px] divide-gray-200 lg:divide-y-0">
                <div v-for="(data, index) in experience" class="w-full flex" :class="(index + 1) % 2 === 0 ? 'justify-end' : 'justify-start'">
                    <div class="w-full lg:w-1/2 lg:border-gray-200 py-10" :class="(index + 1) % 2 === 0 ? 'lg:border-l' : 'lg:border-r'">
                        <article class="flex gap-3 lg:gap-6 lg:border-t lg:border-gray-200 lg:py-10" :class="(index + 1) % 2 === 0 ? 'lg:pl-10' : 'lg:pr-10' ">
                            <img src="/public/img/imf.jpg" class="w-16 h-16 object-contain rounded-lg" />
                            <div class="flex flex-col gap-6">
                                <div>
                                    <h3>Data Scientist | Project officer</h3>
                                    <ul>
                                        <li class="font-sans">International Monetary Fund · Contract</li>
                                        <li class="text-gray-600">Feb 2026 - Present · 4 mos</li>
                                        <li class="text-gray-600">Barcelona, Catalonia, Spain · Remote </li>
                                    </ul>
                                </div>
                                <ContentRenderer :value="data.meta.body" class="prose max-w-none font-sans" />
                                <div class="flex flex-wrap gap-2">
                                    <span class="border border-black group-hover:border-dashed px-3 py-1 rounded-full text-xs font-['Oswald'] font-black uppercase">Python / Machine Learning</span>
                                    <span class="border border-black group-hover:border-dashed px-3 py-1 rounded-full text-xs font-['Oswald'] font-black uppercase">Natural Language Processing</span>
                                    <span class="border border-black group-hover:border-dashed px-3 py-1 rounded-full text-xs font-['Oswald'] font-black uppercase">Natural Language Processing</span>
                                    <span class="border border-black group-hover:border-dashed px-3 py-1 rounded-full text-xs font-['Oswald'] font-black uppercase">Natural Language Processing</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>