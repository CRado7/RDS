const servicesData = [
    {
        id: 1,
        title: 'Web',
        tag: 'Design + Development',
        heading: 'Design in <span class="blue">Motion</span>. \nBrands with <span class="blue">Soul</span>. \nSites that <span class="blue">Work</span>.',
        description: 'Every business has a story - your website should tell it beautifully. Whether you need a custom-coded experience or something built on a platform like WordPress, GoHighLevel, or Squarespace, Rado Design Studio brings your vision to life with strategy, style, and soul.',
        service: 'Web Services',
        serviceDetails: {
            serviceComponents: [
                {
                    id: 1,
                    name: 'Custom Web Design',
                    description: 'Tailored, creative designs from the ground up - no templates, no shortcuts. Each site is built around your brand, goals, and user experience.',
                    points: [
                        { text: 'Responsive + mobile-friendly', checked: true, image: '' },
                        { text: 'Custom UX/UI', checked: true, image: '' },
                        { text: 'Brand-consistent design', checked: true, image: '' },
                        { text: 'Designed to convert', checked: true, image: '' }
                      ]
                },
                {
                    id: 2,
                    name: 'Web Development',
                    description: 'Whether its a fully custom build or  working within a platform, I will build a site that runs smooth and works hard for your business.',
                    points: [
                        { text: 'HTML/CSS/JavaScript(React)', checked: true, image: '' },
                        { text: 'Full custom builds', checked: true, image: '' },
                        { text: 'WordPress, Squarespace, or GoHighLevel setup & customization', checked: true, image: '' },
                        { text: 'Backend support as needed (CMS, integrations, ect.', checked: true, image: '' }
                    ]
                },
                {
                    id: 3,
                    name: 'Preferred Platforms',
                    description: '',
                    points: [
                        { text: 'WordPress', checked: false, image: '' },
                        { text: 'Squarespace', checked: false, image: '' },
                        { text: 'Webflow', checked: false, image: '' },
                        { text: 'Shopify', checked: false, image: '' },
                        { text: 'Custom Code', checked: false, image: '' }
                    ]
                }
            ]

        },
        whyRDS: 'There are 250,000+ websites created every day. Most of them disappear in the noise. I design sites that stand out - visually, stategically, and emotionally. Whether you are launching your brand or giving it a glow-up, your site deserves more than just a theme. It deserves intention. \n\nLets talk about your project and get things in motion.',
        button: {
            text: 'Start Your Website',
            link: '/contact',
        },
    },
    {
        id: 2,
        title: 'Brand',
        tag: 'Logo + Identity',
        heading: '<span class="blue">More</span> Than a Logo. \nIts Your <span class="blue">Identity</span> \nin <span class="blue">Motion</span>.',
        description: 'A good brand doesnt just look cool - it connects. It tells a story. It feels alive. At Rado Design Studio, I create logos and brand identities tjhat do more than "look professional" - they embody who you are and speak directly to the people you are trying to reach.',
        service: 'Brand Services',
        serviceDetails: {
            serviceComponents: [
                {
                    id: 1,
                    name: 'Logo Design',
                    description: 'A logo is your brands first impression -  and somtimes it is the loudest. I create logos that are clean, bold, and built to last.',
                    points: [
                        { text: 'Custom typography & icon design', checked: true, image: '' },
                        { text: 'Multiple concepts + refinements', checked: true, image: '' },
                        { text: 'Brand-use flexibility (social, print, web', checked: true, image: '' },
                        { text: 'Delivered in full format suite (SVG, PNG, ect).', checked: true, image: '' }
                    ]
                },
                {
                    id: 2,
                    name: 'Brand Identity',
                    description: 'Logo? Just the beginning. I will help define the full visual and emotional vibe of your brand - from colors & fonts to tone & style.',
                    points: [
                        { text: 'Color palatte & typography system', checked: true, image: '' },
                        { text: 'Brand moodboard or style guide', checked: true, image: '' },
                        { text: 'Visual directino for web', checked: true, image: '' },
                        { text: 'Optional brand messaging support', checked: true, image: '' }
                    ]
                },
                {
                    id: 3,
                    name: 'What is the Process?',
                    description: '',
                    points: [
                        { text: 'Discovery \nWe talk about your brand. The values, vibe, audience, and goals.', checked: false, image: '' },
                        { text: 'Concepting \nI sketch, brainstorm, and explore directions.', checked: false, image: '' },
                        { text: 'Refinement \nWe refine and polish.', checked: false, image: '' },
                        { text: 'Delivery \nYou get everything you need to roll out with confidence', checked: false, image: '' }
                    ]
                }
            ]
        },
        whyRDS: 'There are millions of logos out there - but only a few that feel true. I work with you to create something timeless, soulful, and unmistakably yours. No cookie-cutter Canva clones. Just real creative work that tells your story. \n\nWhether you are starting fresh or rebranding with intention, we will create something that peoplem remember.',
        button: {
            text: 'Start Your Brand',
            link: '/contact',
        },
    },
    {
        id: 3,
        title: 'Promo',
        tag: 'Promo Items + Custom Art',
        heading: '<span class="blue">Tangible</span> Design. \nReal-World <span class="blue">Impact</span>.',
        description: 'Your brand doesnt stop at a screen. Rado Design Studio helps your bring it into the real world - with custom promo materials that leave a lasting impression. From apparel to packaging, pens to golfballs, I design pieces that people want to keep (and remember).',
        service: 'Promo Services',
        serviceDetails: {
            serviceComponents: [
                {
                    id: 1,
                    name: 'Apparel + Merch Design',
                    description: 'Wear your brand with pride - or let your audience wear it for you.',
                    points: [
                        { text: 'T-shirts, hoodies, hats', checked: true, image: '' },
                        { text: 'Minimal or bold design styles', checked: true, image: '' },
                        { text: 'Print-ready files for screen, DTG, or embroidery', checked: true, image: '' },
                        { text: 'Designed with print specs in mind', checked: true, image: '' }
                    ]
                },
                {
                    id: 2,
                    name: 'Branded Swag + Giveaways',
                    description: 'Small itmes, big impressions. Perfect for events, client gifts, or just spreading the word.',
                    points: [
                        { text: 'Custom pens, golf balls, mugs, tote bags, stickers', checked: true, image: '' },
                        { text: 'Designed to align with your branding', checked: true, image: '' },
                        { text: 'Production coordination or printer-ready handoff', checked: true, image: '' },
                        { text: 'High-quality, eye-catching visuals', checked: true, image: '' }
                    ]
                },
                {
                    id: 3,
                    name: 'Print Collateral',
                    description: 'Old-school still works - especially when it looks this good.',
                    points: [
                        { text: 'Business cards, postcards, flyers', checked: true, image: '' },
                        { text: 'Packaging & labels', checked: true, image: '' },
                        { text: 'Menus, tags, inserts', checked: true, image: '' },
                        { text: 'Designed for print clarity + brand consistency', checked: true, image: '' }
                    ]
                },
                {
                    id: 5,
                    name: 'How it Works',
                    description: '',
                    points: [
                        { text: 'Discovery \nWhat is the purpose? What is the vibe? Who is it for?', checked: false, image: '' },
                        { text: 'Design \nI will bring you bold, brandede desigbn options tailored to your needs.', checked: false, image: '' },
                        { text: 'Production-Ready \nHigh-resolution, print-ready files - sized and formatted perfectly for the vendor.', checked: false, image: '' },
                    ]
                },
                {
                    id: 6,
                    name: 'Why It Matters',
                    description: 'In a digital world, physical objects stand out. They are memorable, tactile, and powerful when done right. I design promo materials that aactually feel on-brand -  so you dont end up with a bunch of pens no one wants to use (I still offer pens though).',
                    points: []
                },
                {
                    id: 7,
                    name: 'Popular Promo Materials',
                    description: '',
                    points: [
                        { text: 'Apparel (T-shirts, hoodies, hats)', checked: false, image: '' },
                        { text: 'Stickers & packaging inserts', checked: false, image: '' },
                        { text: 'Pens, golf balls, mugs', checked: false, image: '' },
                        { text: 'Postcards, business cards, flyers', checked: false, image: '' },
                        { text: 'Branded notebooks, totes, & more', checked: false, image: '' }
                    ]
                }
            ]
        },
        whyRDS: 'You could slap your logo on a pen - or you could create something people actually want to keep. I design promotinoal materials that carry your energy, your style, and your brands essence into the real world. It is a design you can touch - and remember. \nReady to turn your brand into something people can wear, use, and hold onto?',
        button: {
            text: 'Start Your Designs',
            link: '/contact',
        },
    },
];

export default servicesData;