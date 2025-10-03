const packagesData = {
  brandPackages: {
    heading: 'Brand Packages',
    packages: [
      {
        name: 'The Quick Drop',
        content: 'Logo-Only Package',
        description:
          'Fast, custom logo design with 2-3 initial concepts, 2 revisions, and final files in all formats.',
        startsAt: false,
        price: 400,
        astrix: false,
        footnote: ''
      },
      {
        name: 'The Flow Set',
        content: 'Full Brand Package',
        description:
          'Includes custom logo, color palette, typography pairings, mini style guide and brand direction.',
        startsAt: false,
        price: 800,
        astrix: false,
        footnote: ''
      },
      {
        name: 'The Full Ride',
        content: 'Brand + Web Combo',
        description:
          'Everything in The Flow Set plus a fully custom website (design + dev). Platforms include WordPress, SquareSpace, Webflow, Shopify, or custom code.',
        startsAt: true,
        price: 1600,
        astrix: true,
        footnote:
          'Websites are always quoted based on scope. The above package includes 1-5 page static site design and development. E-commerce, integrations, or specialty functionality will adjust quote. All costs associated with hosting, domains, and third-party services (all recurring payments) are additional.'
      }
    ]
  },

  webPackages: {
    heading: 'Website Packages',
    packages: [
      {
        name: 'The Ripple Plan',
        content: '1–3 Page Static Website',
        description:
          'A simple, responsive, and fast-loading website built on a modern stack. Great for portfolios, landing pages, or small businesses.',
        startsAt: false,
        price: 800,
        astrix: false,
        footnote: ''
      },
      {
        name: 'The Rising Tide',
        content: '5–10 Page Website',
        description:
          'A fully custom business site including services, about, blog, and contact. Designed with SEO best practices and scalability in mind.',
        startsAt: false,
        price: 2500,
        astrix: true,
        footnote:
          'Includes 5–10 fully designed pages. Additional features like booking systems, membership areas, or e-commerce will adjust scope.'
      },
      {
        name: 'The Voyager',
        content: 'Custom E-Commerce Site',
        description:
          'Full e-commerce experience with cart, checkout, product management, and integrations. Platforms include Shopify, WooCommerce, or custom headless setups.',
        startsAt: true,
        price: 4000,
        astrix: true,
        footnote:
          'E-commerce builds vary greatly in scope. The above package covers setup and design for up to 25 products. Advanced features like subscriptions, integrations, or custom apps will be quoted separately.'
      }
    ]
  },

  creativeSupport: {
    heading: 'Creative Support',
    packages: [
      {
        name: 'The Drift Plan',
        hours: '15 hours/month',
        idealFor: 'Light monthly updates, social assets, promotional graphics',
        price: 525,
        hourly: 35,
        astrix: false,
        footnote: ''
      },
      {
        name: 'The Curise Plan',
        hours: '30 hours/month',
        idealFor: 'Regular site edits, multiple design tasks',
        price: 900,
        hourly: 30,
        astrix: false,
        footnote: ''
      },
      {
        name: 'The Endless Set',
        hours: 'Unlimited',
        idealFor: 'Full service creative support',
        price: 1500,
        hourly: null,
        astrix: true,
        footnote:
          'Unlimited means you can request as much as you need, and I will work through it with fair turnaround expectations. No surprise limits, just reasonable boundaries and honest collaboration.'
      }
    ]
  }
};

export default packagesData;
