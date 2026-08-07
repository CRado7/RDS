const packagesData = {
  brandPackages: {
    heading: 'Brand Packages',
    packages: [
      {
        name: 'The Quick Drop',
        content: 'Logo Only',
        description:
          'A custom logo — not a template, not clip art. 2–3 initial concepts, 2 rounds of revisions, final files in every format you could need.',
        startsAt: false,
        price: 185,
        astrix: false,
        footnote: ''
      },
      {
        name: 'The Flow Set',
        content: 'Full Brand Package',
        description:
          'Custom logo, color palette, typography, mini style guide, and a clear direction for how your brand shows up everywhere. The whole foundation.',
        startsAt: false,
        price: 350,
        astrix: false,
        footnote: ''
      },
      {
        name: 'The Full Ride',
        content: 'Brand + Website',
        description:
          'Everything in The Flow Set, plus a fully custom website. WordPress, Squarespace, Webflow, Shopify, or custom code — whatever fits your situation best.',
        startsAt: true,
        price: 1100,
        astrix: true,
        footnote:
          'Websites are always scoped to the project. This package covers a 1–5 page static site. E-commerce, integrations, or anything with moving parts gets quoted separately. Hosting, domains, and third-party platform costs are always additional and to be financially managed by you — I\'ll be upfront about all of it.'
      }
    ]
  },

  webPackages: {
    heading: 'Website Packages',
    packages: [
      {
        name: 'The Ripple',
        content: '1–3 Page Static Site',
        description:
          'Clean, fast, responsive. Great for portfolios, landing pages, or small businesses that need a solid web presence without a lot of complexity.',
        startsAt: false,
        price: 800,
        astrix: false,
        footnote: ''
      },
      {
        name: 'The Rising Tide',
        content: '5–10 Page Website',
        description:
          'A full business site — services, about, blog, contact, the works. Designed with SEO in mind and built to grow with you.',
        startsAt: false,
        price: 1500,
        astrix: true,
        footnote:
          'Scope varies. Quoted projects may adjust based on custom functionality, integrations, or content complexity. I\'ll always give you a clear number before anything starts.'
      },
      {
        name: 'The Big Swell',
        content: 'E-Commerce or Custom Build',
        description:
          'Custom e-commerce, advanced functionality, database integration, admin panels — the full build. Quoted per project.',
        startsAt: true,
        price: 4200,
        astrix: true,
        footnote:
          'Every project at this level gets scoped individually. Price listed is a floor, not a ceiling — I\'ll walk you through exactly what drives cost before you commit to anything.'
      }
    ]
  },

  creativeSupport: {
    heading: 'Creative Support',
    packages: [
      {
        name: 'The Paddle Out',
        hours: '5 Hours',
        idealFor:
          'Small updates, a quick logo tweak, a few social graphics, or just getting unstuck on something.',
        price: 225,
        hourly: 45,
        astrix: false,
        footnote: ''
      },
      {
        name: 'The Session',
        hours: '10 Hours',
        idealFor:
          'A campaign push, a batch of assets, a site refresh, or anything that needs real time and attention.',
        price: 400,
        hourly: 40,
        astrix: false,
        footnote: ''
      },
      {
        name: 'The Partnership',
        hours: '20 Hours / Month',
        idealFor:
          'Ongoing clients who want a designer in their corner — someone who knows the brand and is easy to reach.',
        price: 700,
        hourly: 35,
        astrix: true,
        footnote: 'Unused hours don\'t roll over, but I\'m flexible. If a month gets heavy or a month is ultra light, we\'ll figure it out.'
      }
    ]
  }
};

export default packagesData;
