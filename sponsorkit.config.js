import { defineConfig } from 'sponsorkit'

export default defineConfig({
  // Rendering configs
  github: {
    login: 'pdm-project',
    type: 'organization',
  },
  formats: ['svg'],
  renders: [
    {
      name: 'sponsors',
      width: 1000,
      includePastSponsors: true,
      renderer: 'tiers'
    },
  ],
})
