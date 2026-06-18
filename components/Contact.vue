<script setup>
    const loading = ref(false);
    const email = ref('');
    const message = ref('');
    const responseText = ref('');
    const successFlag = ref(false);
    const errorFlag = ref(false);
    const sendMail = async () => {
        try {
            loading.value = true;
            await $fetch('/api/contact', {
                method: 'POST',
                body: { email: email.value, message: message.value },
            });
            successFlag.value = true;
            responseText.value = 'Message received! talk to you soon :)';
            email.value = '';
            message.value = '';
        } catch (error) {
            console.error(error);
            errorFlag.value = true;
            responseText.value = 'Message not sent! please try again';
        } finally {
            loading.value = false;
        }
    }
</script>

<template>
    <section class="text-black px-4 md:px-0">
        <article class="md:max-w-[500px] mx-auto flex flex-col gap-6 md:p-10 md:border border-gray-200 md:shadow-lg rounded-lg">
            <div class="flex flex-col gap-2">
                <BaseHeading heading-level="2" id="contact" theme="dark">Contact</BaseHeading>
                <p class="text-gray-600">Let’s turn data into decisions. Drop me a message—I’m just one click away.</p>
            </div>
            <div v-if="responseText && successFlag" class="bg-green-100 text-green-900 p-3 rounded-lg">
                <p>{{ responseText }}</p>
            </div>
            <div v-if="responseText && errorFlag" class="bg-red-100 text-red-900 p-3 rounded-lg">
                <p>{{ responseText }}</p>
            </div>
            <form @submit.prevent="sendMail()" class="flex flex-col gap-6">
                <div class="flex flex-col gap-2">
                    <label for="email" class="">Email</label>
                    <input type="email" id="email" v-model="email" class="border border-gray-200 rounded-lg w-full p-3" placeholder="Your email"  required/>
                </div>
                <div class="flex flex-col gap-2">
                    <label>Message</label>
                    <textarea v-model="message" class="border border-gray-200 rounded-xl w-full p-3" rows="4" placeholder="Write something..." required></textarea>
                </div>
                <BaseButton type="submit" element="button" text="Send" :style="'primary'" class="w-fit !mr-0 text-center" :disabled="loading">
                    <template #loading>
                        <span>
                            <svg v-if="loading" aria-hidden="true" role="status" class="inline w-5 h-5 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                        </span>
                    </template>
                </BaseButton>
            </form>
        </article>
    </section>
</template>