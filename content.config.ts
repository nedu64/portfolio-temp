import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/**/*.md'
    }),
    experience: defineCollection({
      type: 'data',
      source: 'experience/**/*.md',
      schema: z.object({
        title: z.string(),
        company: z.string(),
        start_date: z.string(),
        end_date: z.string(),
        duration: z.string(),
        employment_type: z.string(),
        work_mode: z.string(),
        location: z.string(),
        logo: z.string(),
        skills: z.array(z.string())
      })
    }),
  }
})