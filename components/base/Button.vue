<script setup>
    const props = defineProps({
        link: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        style: {
            type: String,
            default: 'primary',
            validator: (propValue) => ['primary', 'secondary'].includes(propValue),
        },
        element: {
            type: String,
            default: 'link',
            validator: (propValue) => ['button', 'link'].includes(propValue),
        },
        target: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: ''
        }
    });

    const btnClass = computed(() => {
        const style = {
            'primary': 'bg-primary text-white hover:shadow-xl',
            'secondary': 'bg-white border-2 border-primary text-primary hover:text-white hover:bg-primary',
        }

        return `uppercase rounded-full transition-transform duration-300 disabled:opacity-70 !no-underline font-["Oswald"] font-bold px-8 py-3 mr-4 ${style[props.style]}`;
    })
</script>
<template>
    <a v-if="element === 'link'" :href="link ?? ''" :class="btnClass" :target="target">
        {{ text ?? 'Link' }}
    </a>
    <button v-else :class="btnClass" :type="type">
        <span class="inline-flex items-center gap-1">
            <span>{{ text ?? 'Button' }}</span>
            <slot name="loading"></slot>
        </span>
    </button>
</template>