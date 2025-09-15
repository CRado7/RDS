import Reia from '../assets/reia/Reia-Thumbnail.png';
    import ReiaBanner from '../assets/reia/Reia-Banner.svg';
import Crater from '../assets/crater/Crater-Thumbnail.png';
    import CraterBanner from '../assets/crater/Crater-Banner.png';
import TPS from '../assets/the-print-shop/TPS-Thumbnail.png';
    import TPSBanner from '../assets/the-print-shop/TPS-Banner.svg';
import DopeSouls from '../assets/dope-souls/DopeSouls-Thumbnail.svg';
    import DopeSoulsBanner from '../assets/dope-souls/DopeSouls-Banner.svg';
    import WaveBreaker from '../assets/dope-souls/mockups/WaveBreaker_Mockup.jpg';
    import StaySaltyYth from '../assets/dope-souls/mockups/StaySalty_Yth_Mockup.jpg';
    import SignatureHoodieWomens from '../assets/dope-souls/mockups/SignatureHoodie_Womens_Mockup.jpg';
    import SignatureHoodie from '../assets/dope-souls/mockups/SignatureHoodie_Mockup.jpg';
    import SignatureHat from '../assets/dope-souls/mockups/SignatureHat_Mockup.jpg';
    import SignatureYth from '../assets/dope-souls/mockups/Signature_Yth_Mockup.jpg';
    import Signature from '../assets/dope-souls/mockups/Signature_Mockup.jpg';
    import IconHat from '../assets/dope-souls/mockups/IconHat_Mockup.jpg';
import ChungLi from '../assets/chung-li/ChungLi-Thumbnail.png';
    import ChungLiBanner from '../assets/chung-li/ChungLi-Banner.svg';
import CFF from '../assets/crooked-finger-flies/CFF-Thumbnail.png';
import Parlor from '../assets/parlor/Parlor-Thumbnail.png';
    import ParlorBanner from '../assets/parlor/Parlor-Banner.png';
    import CherryBlossom from '../assets/parlor/skis/Cherry-Blossom.png';   
    import FeatherFlyer from '../assets/parlor/skis/Feather-Flyer.png';
    import FireFlowers from '../assets/parlor/skis/Fire-Flowers.png';
    import Glory from '../assets/parlor/skis/Glory.png';
    import GoingNowhere from '../assets/parlor/skis/Going-Nowhere.png';
    import NeonTsunami from '../assets/parlor/skis/Neon-Tsunami.png';
    import Newspaper from '../assets/parlor/skis/Newspaper.png';
    import OniTraditional from '../assets/parlor/skis/Oni-Traditional.png';
    import SpaceCowboy from '../assets/parlor/skis/Space-Cowboy.png';
    import Supernova from '../assets/parlor/skis/Supernova.png';
    import VisionII from '../assets/parlor/skis/Vision-II.png';
    import WesternSkies from '../assets/parlor/skis/Western-Skies.png';
    import MadeBackEastFlyer from '../assets/parlor/made-back-east/MadeBackEast-Flyer.png';
    import MadeBackEastPost from '../assets/parlor/made-back-east/MadeBackEast-Post.png';
    import MadeBackEastStory from '../assets/parlor/made-back-east/MadeBackEast-Story.png';
    import ShopNightBanner from '../assets/parlor/shop-night/ShopNight-EmailBanner.png';
    import ShopNightPost from '../assets/parlor/shop-night/ShopNight-Post.png';
    import ShopNightStory from '../assets/parlor/shop-night/ShopNight-Story.png';
import TheHotBox from '../assets/the-hot-box/TheHotBox-Thumbnail.png';

const projectData = [
  {
    id: 1,
    title: "Reia",
    description:
      "Reia is a medical device company based in Hanover, NH. When they approached us, they were preparing to launch their first product and needed a website to showcase the device and its features. Since the launch of the website, Reia has grown to sell their product on a global level.",
    imageUrl: Reia,
    banner: ReiaBanner,
    mobileBanner: Reia,
    category: ["Web Design", "Web Development"],
    slug: "reia",
    recent: true,
    featured: false,
    content: {
        section: [
            {
                title: "Website Overview",
                imageDisplay: ["grid"],
                beforeAfter: false,
                packageModel: false,
                lightBox: false,
                image: [
                    {
                        caption: "Home Page",
                        src: Reia,
                    },
                    {
                        caption: "Product Page",
                        src: Reia,
                    },
                    {
                        caption: "About Page",
                        src: Reia,
                    },
                    {
                        caption: "Contact Page",
                        src: Reia,
                    },
                ]
            },
        ],
    },
  },
  {
    id: 2,
    title: "Crater",
    description:
      "Crater is built for backcountry boarders and skiers—a brand that celebrates the outdoor lifestyle and the people who live it.",
    imageUrl: Crater,
    banner: CraterBanner,
    mobileBanner: Crater,
    category: ["Web Design", "Web Development", "Logo Design", "Print Design"],
    slug: "crater",
    recent: true,
    featured: false,
    content: {
        section: [
            {
                title: "Branding",
                imageDisplay: ["inline-block"],
                beforeAfter: false,
                packageModel: false,
                lightBox: false,
                image: [Crater],
            },
            {
                title: "Website Design",
                imageDisplay: ["inline-block"],
                beforeAfter: false,
                packageModel: false,
                image: [Crater],
            },
            {
                title: "Print Materials",
                imageDisplay: ["inline-block"],
                beforeAfter: false,
                packageModel: false,
                image: [Crater],
            }
        ]
    },
  },
  {
    id: 3,
    title: "The Print Shop",
    description:
      "The Print Shop is a family-owned and operated screen printing and embroidery business located in Wilbraham, MA.",
    imageUrl: TPS,
    banner: [TPSBanner],
    mobileBanner: TPS,
    category: ["Web Design", "Web Development"],
    slug: "the-print-shop",
    recent: true,
    featured: false,
    content: {
        section: [
            {
                title: ["Website Overview"],
                imageDisplay: "",
                beforeAfter: false,
                packageModel: false,
                lightBox: false,
                image: [
                    {
                        caption: "Home Page",
                        src: TPS,
                    },
                    {
                        caption: "Services Page",
                        src: TPS,
                    },
                    {
                        caption: "Portfolio Page",
                        src: TPS,
                    },
                    {
                        caption: "Contact Page",
                        src: TPS,
                    },
                ],
            },
        ],
    },
  },
  {
    id: 4,
    title: "Dope Souls Surf Club",
    description:
      "Dope Souls is a lifestyle brand built around good vibes, surfing, and the ocean.",
    imageUrl: DopeSouls,
    banner: DopeSoulsBanner,
    mobileBanner: DopeSouls,
    category: ["Branding", "Logo Design", "Print Design", "Custom Art"],
    slug: "dope-souls-surf-club",
    recent: true,
    featured: false,
    content: {
        section: [
            {
                title: "Logo Design",
                imageDisplay: ["inline-block"],
                beforeAfter: false,
                packageModel: false,
                lightBox: false,
                image: [
                    {
                        caption: "Dope Souls Logo",
                        src: DopeSouls,
                    },
                ],
            },
            {
                title: "Brand Consistent Mockups",
                imageDisplay: ["grid"],
                beforeAfter: false,
                packageModel: false,
                lightBox: false,
                image: [
                    {
                        caption: "Wave Breaker",
                        src: WaveBreaker,
                    },
                    {
                        caption: "Stay Salty Youth",
                        src: StaySaltyYth,
                    },
                    {
                        caption: "Signature Hoodie Womens",
                        src: SignatureHoodieWomens,
                    },
                    {
                        caption: "Signature Hoodie",
                        src: SignatureHoodie,
                    },
                    {
                        caption: "Signature Hat",
                        src: SignatureHat,
                    },
                    {
                        caption: "Signature Youth",
                        src: SignatureYth,
                    },
                    {
                        caption: "Signature",
                        src: Signature,
                    },
                    {
                        caption: "Icon Hat",
                        src: IconHat,
                    },
                ],
            },
            {
                title: "Custom Art",
                imageDisplay: ["grid"],
                beforeAfter: false,
                packageModel: false,
                lightBox: false,
                image: [
                    {
                        caption: "Custom Illustration 1",
                        src: DopeSouls,
                    },
                    {
                        caption: "Custom Illustration 2",
                        src: DopeSouls,
                    },
                ],
            }
        ]
    },
  },
  {
    id: 5,
    title: "Chung-Li The Connoisseur",
    description:
      "Chung-Li is a premier cannabis brand based in Massachusetts. Their product line includes flower, edibles, and concentrates.",
    imageUrl: ChungLi,
    banner: ChungLiBanner,
    mobileBanner: ChungLi,
    category: ["Package Design", "Custom Art"],
    slug: "chung-li",
    recent: true,
    featured: false,
    content: {
        section: [
            {
                title: "Package Design",
                imageDisplay: ["inline-block"],
                beforeAfter: false,
                packageModel: true,
                lightBox: false,
                image: [ChungLi],
            },
            {
                title: "Custom Art",
                imageDisplay: ["inline-block"],
                beforeAfter: false,
                packageModel: false,
                lightBox: false,
                image: [
                    {
                        caption: "Custom Illustration 1",
                        src: ChungLi,
                    },
                    {
                        caption: "Custom Illustration 2",
                        src: ChungLi,
                    },
                ],
            },
        ]
    },
  },
  {
    id: 6,
    title: "Crooked Finger Flies",
    description:
      "Based in Seattle, WA, Crooked Finger Flies is a fly fishing company specializing in hand-tied flies.",
    imageUrl: CFF,
    category: ["Logo Design"],
    slug: "crooked-finger-flies",
    recent: false,
    featured: true,
    content: {
        section: [
            {
                title: "Logo Design",
                imageDisplay: ["inline-block"],
                beforeAfter: false,
                packageModel: false,
                lightBox: false,
                image: [
                    {
                        caption: "Crooked Finger Flies Logo",
                        src: CFF,
                    },
                ],
            },
        ]
    }
  },
  {
    id: 7,
    title: "Parlor",
    description:
      "Custom ski designs for Parlor Skis, the largest ski manufacturer on the East Coast, featuring unique graphics for a range of their clients.",
    imageUrl: Parlor,
    banner: ParlorBanner,
    mobileBanner: Parlor,
    category: ["Custom Art", "Print Design"],
    slug: "parlor",
    recent: true,
    featured: false,
    content: {
        section: [
            {
                title: "Custom Ski Graphics",
                imageDisplay: ["grid", "floating-animation"],
                beforeAfter: false,
                packageModel: false,
                lightBox: false,
                image: [
                    {
                        caption: "Cherry Blossom",
                        src: CherryBlossom,
                    },
                    {
                        caption: "Feather Flyer",
                        src: FeatherFlyer,
                    },
                    {
                        caption: "Fire Flowers",
                        src: FireFlowers,
                    },
                    {
                        caption: "Glory",
                        src: Glory,
                    },
                    {
                        caption: "Going Nowhere",
                        src: GoingNowhere,
                    },
                    {
                        caption: "Neon Tsunami",
                        src: NeonTsunami,
                    },
                    {
                        caption: "Newspaper",
                        src: Newspaper,
                    },
                    {
                        caption: "Oni Traditional",
                        src: OniTraditional,
                    },
                    {
                        caption: "Space Cowboy",
                        src: SpaceCowboy,
                    },
                    {
                        caption: "Supernova",
                        src: Supernova,
                    },
                    {
                        caption: "Vision II",
                        src: VisionII,
                    },
                    {
                        caption: "Western Skies",
                        src: WesternSkies,
                    },
                ],
            },
            {
                title: "Made Back East",
                imageDisplay: [""],
                beforeAfter: false,
                packageModel: false,
                lightBox: true,
                image: [
                    {
                        caption: "Event Flyer",
                        src: MadeBackEastFlyer,
                    },
                    {
                        caption: "Instagram Post",
                        src: MadeBackEastPost,
                    },
                    {
                        caption: "Instagram Story",
                        src: MadeBackEastStory,
                    },
                ],
            },
            {
                title: "Shop Night",
                imageDisplay: [""],
                beforeAfter: false,
                packageModel: false,
                lightBox: true,
                image: [
                    {
                        caption: "Email Banner",
                        src: ShopNightBanner,
                    },
                    {
                        caption: "Instagram Story",
                        src: ShopNightStory,
                    },
                    {
                        caption: "Instagram Post",
                        src: ShopNightPost,
                    },
                ],
            }
        ]
    }
  },
  {
    id: 8,
    title: "The Hot Box",
    description:
      "The Hot Box is a cannabis dispensary based in Attleboro, MA, offering a wide variety of products including flower, edibles, and concentrates.",
    imageUrl: TheHotBox,
    category: ["Logo Design"],
    slug: "the-hot-box",
    recent: true,
    featured: true,
    content: {
        section: [
            {
                title: "Logo Redesign",
                imageDisplay: ["inline-block"],
                beforeAfter: true,
                packageModel: false,
                lightBox: false,
                image: [
                    {
                        caption: "Before",
                        src: TheHotBox,
                    },
                    {
                        caption: "After",
                        src: Reia,
                    },
                ],
            },
        ]
    },
  },
];

export default projectData;
