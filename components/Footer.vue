<script setup>
    const socialNavigation = [
        {
            icon: 'uil:github',
            link: 'https://github.com/baksben'
        },
        {
            icon: 'uil:linkedin',
            link: 'https://www.linkedin.com/in/benbaks/'
        },
    ]
</script>

<template>
    <footer class="text-white page-layout__footer lg:min-h-[calc(100vh-40px)] xl:border-r-2 xl:border-primary-light relative bg-black xl:bg-[url('assets/img/pattern-randomized.svg')] bg-contain bg-center">
        <nav class="px-6 py-8 2xl:px-8 w-full lg:w-auto z-1 lg:fixed bottom-0">
            <ul class="flex gap-x-10 justify-center lg:flex-col gap-y-8 bottom-0 left-0 min-w-10">
                <li v-for="(item, index) in socialNavigation" :key="index">
                    <a :href="item.link" target="_blank">
                        <Icon :name="item.icon" class="text-primary-light" size="2em" />
                    </a>
                </li>
            </ul>
        </nav>
    </footer>
</template>