import { Resend } from 'resend';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const body = await readBody(event)
    const { email, message } = body

    if (!email || !message) {
        throw createError({ statusCode: 400, statusMessage: 'Email and message are required' })
    }

    if (!config.primaryEmail) {
        throw createError({ statusCode: 400, statusMessage: 'Recipient email Addresses not set' })
    }

    const resend = new Resend(config.resendApiKey);

    await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: config.primaryEmail,
        cc: config.ccEmail,
        replyTo: email,
        subject: `Portfolio message from ${email}`,
        html: `<p>${message.replace(/\n/g, '<br>')}</p>`,
    });
})
