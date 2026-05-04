<script setup>
    const props = defineProps({
        link: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'primary',
            validator: (propValue) => ['primary', 'secondary'].includes(propValue),
        },
        target: {
            type: String,
            default: ''
        },
    });

    const btnClass = computed(() => {
        const style = {
            'primary': 'bg-primary text-white hover:bg-transparent hover:border-2 hover:border-primary hover:text-primary',
            'secondary': 'bg-white border-2 border-primary text-primary hover:text-white hover:bg-primary',
        }

        return `uppercase rounded-lg transition-transform duration-300 !no-underline font-["Oswald"] font-bold px-8 py-2 mr-4 ${style[props.type]}`;
    })
</script>
<template>
    <a :href="link ?? ''" :class="btnClass" :target="target">
        <slot />
    </a>
</template>