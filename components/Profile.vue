<script setup>

    defineProps({
        heading: String,
        copy: String,
        image: String,
        resumeLink: String,
        resumeLinkText: String,
    })
    
</script>

<template>
    <section class="bg-black">
        <div class="px-8 lg:px-0">
            <article class="lg:max-w-[900px] xl:max-w-[1300px] xl:px-10 mx-auto flex flex-col-reverse gap-6 lg:flex-row lg:gap-12 py-10 lg:px-0">
                <div class="w-full lg:w-1/2 flex flex-col gap-10  lg:py-20">
                    <div class="flex flex-col gap-4 ">
                        <h1 class="font-bold text-3xl lg:text-4xl font-['Oswald']" id="about">{{ heading ?? 'Welcome' }}</h1>
                        <p class="text-base md:text-lg lg:leading-8">
                        {{ copy ?? 'Introduction' }}
                        </p>
                    </div>
                    <div v-if="resumeLink && resumeLinkText">
                        <a 
                            :href="resumeLink"
                            target="_blank"
                            class="inline-flex items-center gap-1 group border-2 border-white text-white py-2 px-4 uppercase rounded-lg hover:scale-110 transition-transform duration-300"
                        >
                            <Icon name="material-symbols:article" class="text-white" size="1.5em" />
                            <span class="font-bold font-['Oswald']">{{ resumeLinkText ?? 'Link Text' }}</span>
                        </a>
                    </div>
                </div>
                <div class="w-full lg:w-1/2">
                    <img
                        v-if="image"
                        :src="image"
                        class="w-full h-full object-contain object-center rounded-md"
                        alt="Bakwenye Benjamin"
                    />
                </div>
            </article>
        </div>
    </section>
</template>