export const metaData = {
    home: {
      title: "Rado Design Studio | Web Design, Branding & Custom Art",
      description:
        "Rado Design Studio crafts engaging websites, brand identities, and creative experiences that balance beauty, functionality, and performance.",
      url: "https://radodesignstudio.com/",
      image: "https://radodesignstudio.com/assets/favicon.svg",
    },
    aboutUs: {
      title: "About Us | Rado Design Studio",
      description:
        "Learn more about Rado Design Studio — a creative studio specializing in web design, branding, and custom art creations.",
      url: "https://radodesignstudio.com/about-us",
      image: "https://radodesignstudio.com/assets/favicon.svg",
    },
    ourWork: {
      title: "Our Work | Web Design & Brand Projects | Rado Design Studio",
      description:
        "Explore our portfolio of creative projects—custom websites, brand identities, and digital experiences crafted for clarity, performance, and impact.",
      url: "https://radodesignstudio.com/our-work",
      image: "https://radodesignstudio.com/assets/favicon.svg",
    },
    packages: {
      title: "Packages | Rado Design Studio",
      description: "Discover Rado Design Studio's service packages tailored to your project goals.",
      url: "https://radodesignstudio.com/packages",
      image: "https://radodesignstudio.com/assets/favicon.svg",
    },
    services: {
        title: "Our Services | Web Design, Branding & Creative Solutions | Rado Design Studio",
        description:
            "Rado Design Studio offers tailored services in web design, branding, and creative development to help your brand stand out.",
        url: "https://radodesignstudio.com/our-services",
        image: "https://radodesignstudio.com/assets/favicon.svg",
    },
    contact: {
      title: "Contact | Let’s Build Something Together | Rado Design Studio",
      description:
        "Ready to start your next project? Get in touch with Rado Design Studio to discuss web design, branding, or creative development built around your goals.",
      url: "https://radodesignstudio.com/contact",
      image: "https://radodesignstudio.com/assets/favicon.svg",
    },
    workDetail: (slug, title) => ({
      title: `${title} | Our Work | Rado Design Studio`,
      description: `Explore the project "${title}" by Rado Design Studio. Custom websites, branding, and digital experiences crafted with precision.`,
      url: `https://radodesignstudio.com/our-work/${slug}`,
      image: "https://radodesignstudio.com/assets/favicon.svg",
    }),
    serviceDetail: (url, title) => ({
      title: `${title} | Our Services | Rado Design Studio`,
      description: `Learn more about our service: ${title}. Rado Design Studio provides tailored solutions for your brand, website, and creative needs.`,
      url: `https://radodesignstudio.com/our-services/${url}`,
      image: "https://radodesignstudio.com/assets/favicon.svg",
    }),
  };