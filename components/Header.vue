<script setup>
    const navOpen = useState('navopen', () => false);

    const route = useRoute();

    const navigation = [
        {
            link: '/#about',
            linkText: 'About'
        },
        {
            link: '/projects',
            linkText: 'Projects'
        },
        {
            link: '/#experience',
            linkText: 'Experience'
        },
        {
            link: '/#contact',
            linkText: 'Contact'
        },
    ];

    const toggleActive = () => {
        navOpen.value = !navOpen.value
    }

    watch(
		() => navOpen.value,
		(value) => {
			if(value) {
                document.getElementsByTagName('body')[0].classList.add('nav-open');

                window.scrollTo(0,0);
            } else {
                document.getElementsByTagName('body')[0].classList.remove('nav-open');
            }
		}
	);
</script>
<template>
    <header class="border-b-2 border-primary-light page-layout__header font-['Oswald'] font-bold bg-black"> 
        <section class="min-h-[40px] md:min-h-[20px] flex items-center justify-between px-4 md:px-6 lg:px-8 py-4 text-white">
            <a href="/">
                <span class="sr-only">LOGO</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12 text-primary-light">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
            </a>
            <div class="relative">
                <div class="relative p-4 md:hidden flex justify-end" :class="navOpen ? 'absolute z-10' : 'static'">
                    <button class="inline-flex flex-col gap-y-[6px] relative min-h-[19px]" @click="toggleActive">
                        <span class="w-6 bg-white h-[2px] inline-block transition transform" :class="navOpen ? 'rotate-45 translate-y-[4px]' : 'static'"></span>
                        <span class="w-6 bg-white h-[2px] inline-block transition" :class="navOpen ? 'hidden' : 'block'"></span>
                        <span class="w-6 bg-white h-[2px] inline-block transition transform" :class="navOpen ? '-rotate-45 -translate-y-[4px]' : ''"></span>
                    </button>
                </div> 
            </div> 
            <nav 
                class="fixed z-[9] right-0 top-0 transition bottom-0 min-w-[48%] md:min-w-auto border border-primary/20 md:bg-transparent md:backdrop-opacity-0 md:border-none shadow-lg md:shadow-none md:static md:translate-x-0"
                :class="[
                    navOpen ? 'translate-x-0' : 'translate-x-[100%]',
                    route.path === '/' ? 'bg-white/10 backdrop-blur-md' : 'bg-black'
                ]"
            >
                <ul class="flex flex-col gap-y-4 md:flex-row md:justify-end items-center gap-x-16 px-6 pt-28 pb-10 md:p-0 md:gap-y-0">
                    <li v-for="(item, index) in navigation" :key="index" class="uppercase cursor-pointer tracking-widest py-4 w-full md:w-auto md:p-0 md:transition-all md:duration-75 md:hover:text-primary-light">
                        <a :href="item.link" @click="navOpen = false"><span>{{ item.linkText }}</span></a>
                    </li>
                </ul>
            </nav>
        </section>
    </header>
</template>