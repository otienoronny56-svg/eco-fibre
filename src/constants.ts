import { WiFiPackage, CoverageArea, FAQItem, BlogPost, CareerOpportunity, Testimonial, TeamMember, CommunityPoster } from './types';

export const HOME_PACKAGES: WiFiPackage[] = [
  { speed: '8 Mbps', price: '2,000', type: 'home', features: ['Unlimited Data', '24/7 Support', 'Best for 2-3 Devices'] },
  { speed: '10 Mbps', price: '2,400', type: 'home', features: ['Unlimited Data', '24/7 Support', 'Best for 4-5 Devices'] },
  { speed: '12 Mbps', price: '2,800', type: 'home', features: ['Unlimited Data', '24/7 Support', 'HD Streaming'] },
  { speed: '15 Mbps', price: '3,500', type: 'home', features: ['Unlimited Data', '24/7 Support', 'Multiple HD Streams'] },
  { speed: '20 Mbps', price: '4,500', type: 'home', features: ['Unlimited Data', '24/7 Support', 'Ultra HD & Gaming'] },
];

export const BUSINESS_PACKAGES: WiFiPackage[] = [
  { speed: '7 Mbps', price: '2,500', type: 'business', features: ['Dedicated Support', 'Static IP Available', '99.9% Uptime', 'SME Focused'] },
  { speed: '15 Mbps', price: '5,000', type: 'business', features: ['Dedicated Support', 'Static IP Available', '99.9% Uptime', 'Medium Business'] },
  { speed: '20 Mbps', price: '7,000', type: 'business', features: ['Dedicated Support', 'Static IP Available', '99.9% Uptime', 'High Demand'] },
  { speed: '100+ Mbps', price: '220/Mbps', type: 'business', features: ['Custom Solutions', 'Fiber to the Office', 'Dedicated Account Manager', 'Enterprise Grade'] },
];

export const COVERAGE_AREAS: CoverageArea[] = [
  {
    region: 'Rongo Town',
    estates: [
      'Rongo Township', 'Kitere', 'Kuja', 'Kanyawanga', 
      'North Kamagambo', 'South Kamagambo', 'Central Kamagambo', 'East Kamagambo', 
      'Ng\'ope', 'Opapo', 'Rakwaro', 'Nyarach', 
      'Misadhi', 'Cham-Gi-Wadu', 'Kangeso', 'Oboke', 
      'Marindi', 'Sigiria', 'Kanga', 'Ranen'
    ]
  },
  {
    region: 'Migori County (Awendo Focus)',
    estates: ['Awendo Township', 'South Sakwa', 'North Sakwa', 'Central Sakwa', 'West Sakwa', 'Rapogi', 'Mariwa', 'Kokuro']
  },
  {
    region: 'Kisii Town',
    estates: ['Nyanchwa', 'Jogoo', 'Mwembe', 'Nyankongo', 'Daraja Mbili', 'Milimani', 'Getare']
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do I make payments?',
    answer: 'Payments can be made via M-Pesa to our official line: +254710172828. You can also contact us via WhatsApp for a direct payment link or account details.'
  },
  {
    question: 'What if my payment is not reflecting?',
    answer: 'If your payment doesn\'t reflect within 10 minutes, please contact our support line at +254710172828 with your M-Pesa transaction code.'
  },
  {
    question: 'How do I request a new connection?',
    answer: 'You can request a new installation by clicking the "Get Started" button on our home page or visiting our main office in Rongo Town.'
  },
  {
    question: 'How do I request network relocation?',
    answer: 'Relocation requests should be made at least 48 hours in advance. Contact our support team to check coverage at your new location.'
  },
  {
    question: 'What should I do if my internet is slow?',
    answer: 'First, restart your router. If the issue persists, check if multiple devices are performing heavy downloads. For further assistance, contact our support line at +254710172828.'
  },
  {
    question: 'Can I upgrade or downgrade my package?',
    answer: 'Yes, you can change your package at the end of your current billing cycle. Contact support to initiate the change.'
  },
  {
    question: 'Do you offer custom business plans?',
    answer: 'Absolutely. For requirements above 100 Mbps, we offer customized enterprise solutions at 220 Ksh per Mbps.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Connecting Rongo: Why Fiber is the Digital Lifeblood of Nyanza',
    excerpt: 'Exploring how high-speed connectivity is transforming rural and urban landscapes across Migori and Kisii.',
    content: "Fiber optics is more than just a faster way to browse the web; it's a bridge to global opportunities. In Rongo particularly, we've seen a surge in digital literacy and SME growth since the introduction of stable fiber. From online schooling to remote working, Eco-Fibre is at the forefront of this digital revolution, ensuring that no community is left behind in the 21st century.",
    author: 'Ronny Winstone',
    category: 'Innovation',
    date: 'March 15, 2024',
    image: '/hero3.png',
    baseViews: 1248
  },
  {
    id: 2,
    title: '5 Pro-Tips to Maximize Your Home WiFi Coverage',
    excerpt: 'Simple yet effective steps to ensure you enjoy buffer-free streaming in every corner of your house.',
    content: "Is your WiFi struggling in the bedroom but perfect in the living room? Distance and obstacles like thick walls are common culprits. For our customers in multi-level houses, we recommend strategic router placement—central and elevated. Additionally, keeping your router away from other electronics like microwaves and speakers can significantly reduce interference and boost your signal.",
    author: 'Sarah Wanjiku',
    category: 'Guides',
    date: 'March 10, 2024',
    image: '/hero1.png',
    baseViews: 842
  },
  {
    id: 3,
    title: 'Empowering Local SMEs: The Eco-Fibre Business Advantage',
    excerpt: 'How we are helping local businesses in Migori and Kisii scale up using dedicated business fiber.',
    content: "For a growing business, every second of downtime is a lost opportunity. Our dedicated business fiber solutions offer 99.9% uptime and symmetrical speeds, meaning your uploads are just as fast as your downloads. Whether it's managing large inventory databases or hosting seamless video conferences with international partners, Eco-Fibre provides the infrastructure so you can focus on growth.",
    author: 'Marcus Otieno',
    category: 'Business',
    date: 'March 5, 2024',
    image: '/hero5.png',
    baseViews: 521
  },
  {
    id: 4,
    title: 'Smart Learning: How Stable Internet is Changing Education',
    excerpt: 'A look into how decentralized learning platforms are becoming accessible to students in Rongo.',
    content: "Education is no longer confined within four walls. With stable internet, students in Migori can access world-class resources from platforms like Coursera and Khan Academy. Eco-Fibre is proud to support local schools and individual learners by providing the high-speed access needed for video-based learning and digital research, paving the way for a more knowledgeable future generation.",
    author: 'Ashley Onkendi',
    category: 'Community',
    date: 'February 28, 2024',
    image: '/hero2.png',
    baseViews: 935
  },
  {
    id: 5,
    title: 'Fiber vs Submarine Cable: What Powers Your Connection?',
    excerpt: 'Understanding the complex infrastructure that brings the world to your screen in milliseconds.',
    content: "Ever wondered how a click in Rongo reaches a server in Silicon Valley? It's a combination of vast undersea cables and our localized fiber-to-the-home (FTTH) network. Fiber optics uses pulses of light to transmit data, making it theoretically the fastest medium on earth. At Eco-Fibre, we invest in the latest fiber termination equipment to ensure that the speed of light is what you experience at your router.",
    author: 'Sarah Wanjiku',
    category: 'Technology',
    date: 'February 20, 2024',
    image: '/hero4.png',
    baseViews: 1102
  },
  {
    id: 6,
    title: 'Community First: The Eco-Fibre Social Impact Initiative',
    excerpt: 'Beyond business—how we translate connectivity into real-world social progress.',
    content: "At Eco-Fibre, ourselves are part of the community we serve. Our social impact initiatives include providing free internet access to select community halls and support for local digital hub startups. We believe that by connecting one home at a time, we are indirectly building a more robust and resilient economic fabric for the entire South Nyanza region.",
    author: 'Ronny Winstone',
    category: 'Impact',
    date: 'February 12, 2024',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800',
    baseViews: 1420
  }
];

export const CAREERS: CareerOpportunity[] = [
  { id: 1, title: 'Network Technician', department: 'Technical', location: 'Rongo Town', type: 'Full-time' },
  { id: 2, title: 'Customer Support Agent', department: 'Operations', location: 'Rongo Town', type: 'Full-time' },
  { id: 3, title: 'Sales Representative', department: 'Marketing', location: 'Migori/Kisii', type: 'Commission-based' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Samuel Onyango',
    role: 'Cyber Cafe Owner, Rongo',
    quote: "Eco-Fibre has transformed my cyber cafe. Speed ne en maber ahinya, ok odwacha piny kendo customer gi sani gin mamor.",
    image: '/testimonials/testimonial_samuel.png',
    stars: 5
  },
  {
    id: 2,
    name: 'Grace Mutua',
    role: 'Software Developer, Kisii',
    quote: 'As a dev, stability ni kila kitu. Eco-Fibre ndio kusema huku. Hakuna buffer, hakuna stress, kazi inaendelea vako.',
    image: '/testimonials/testimonial_grace.png',
    stars: 5
  },
  {
    id: 3,
    name: 'Otieno Jakai',
    role: 'Boda Boda Operator, Awendo',
    quote: "Internet gi Eco-Fibre en mapecho kabisa. Agwedho gima amanyogo chiemb pacho gi simu yangu hapa kwa base.",
    image: '/testimonials/testimonial_otieno.png',
    stars: 5
  },
  {
    id: 4,
    name: 'Mama Boaz',
    role: 'Shopkeeper, Migori',
    quote: 'Hii net iko fya! Watoto wanasoma online bila shida yoyote. Shukran sana Eco-Fibre kwa kutuletea fiber home.',
    image: '/testimonials/testimonial_mama_boaz.png',
    stars: 5
  },
  {
    id: 5,
    name: 'Kevin "Kevoo"',
    role: 'Gamer & Content Creator',
    quote: 'Yoh, ping iko chini mbaya! Game haidedi kwanja nikistream Twitch. Eco-Fibre ni mabeast wa connectivity.',
    image: '/testimonials/testimonial_kevin.png',
    stars: 5
  },
  {
    id: 6,
    name: 'Achieng\' Nyar Kanyamkago',
    role: 'University Student',
    quote: 'Online classes sasa ni mteremko. Odwacha piny en wach ma ne wasetimo lweny go, sani Eco-Fibre osewero koro.',
    image: '/testimonials/testimonial_achieng.png',
    stars: 5
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Ronny Winstone Otieno",
    role: "Founder & CEO",
    image: "/image1.jpeg",
    bio: "Visionary leader dedicated to bridging the digital divide in Kenya through innovative fiber solutions."
  },
  {
    id: 2,
    name: "Sarah Wanjiku",
    role: "Chief Technology Officer",
    image: "/cto.png",
    bio: "Expert in large-scale fiber infrastructure and network optimization with 10+ years of experience."
  },
  {
    id: 3,
    name: "Marcus Otieno",
    role: "Head of Marketing",
    image: "/marketing.png",
    bio: "Creative strategist focused on community outreach and brand growth across South Nyanza."
  },
  {
    id: 4,
    name: "Ashley Onkendi",
    role: "Head of Customer Services",
    image: "/success.png",
    bio: "Passionate about providing world-class support and ensuring every customer stays connected."
  }
];
export const COMMUNITY_POSTERS: CommunityPoster[] = [
  {
    id: 1,
    category: 'Holiday',
    title: 'Happy Mashujaa Day',
    subtitle: 'Celebrating Our Heroes',
    message: 'To the heroes who built our nation and those who continue to inspire us today. Your bravery and dedication are the backbone of our community.',
    backgroundImage: '/community/bg_mashujaa.png',
    date: '20th October'
  },
  {
    id: 2,
    category: 'Event',
    title: 'Customer Service Week',
    subtitle: 'You Are Our Priority',
    message: 'Thank you for choosing Eco-Fibre. We cherish you as our valued customers. Our commitment to serving you is unwavering, today and always.',
    backgroundImage: '/community/bg_customer_week.png',
    date: '1st Week of October'
  },
  {
    id: 3,
    category: 'Holiday',
    title: 'Happy Diwali',
    subtitle: 'Festival of Lights',
    message: 'Wishing you a Diwali that is as bright and beautiful as you are. May the light of the diyas illuminate your home with peace and prosperity.',
    backgroundImage: '/community/bg_diwali.png',
    date: 'October/November'
  },
  {
    id: 4,
    category: 'Holiday',
    title: 'Eid Mubarak',
    subtitle: 'Peace & Prosperity',
    message: 'May this special day bring peace, happiness, and prosperity to everyone. Wishing you and your family a blessed celebration.',
    backgroundImage: '/community/bg_eid.png',
    date: 'Eid Al-Fitr / Eid Al-Adha'
  },
  {
    id: 5,
    category: 'Holiday',
    title: 'Happy Easter',
    subtitle: 'New Beginnings',
    message: 'Wishing you a joyful Easter filled with hope, renewal, and time with loved ones. Celebrating the spirit of togetherness in our community.',
    backgroundImage: '/community/bg_easter.png',
    date: 'March/April'
  },
  {
    id: 6,
    category: 'Holiday',
    title: 'Happy Sabbath',
    subtitle: 'A Day of Peace',
    message: 'Wishing our Seventh-day Adventist (SDA) community a peaceful and blessed Sabbath. May this day bring rest and spiritual renewal to your homes.',
    backgroundImage: '/community/bg_sda.png',
    date: 'Every Saturday'
  },
  {
    id: 7,
    category: 'Holiday',
    title: 'Community Blessing',
    subtitle: 'Faith & Unity',
    message: 'We celebrate the diversity of faith in our community, including our Legio Maria brothers and sisters. May peace and harmony prevail in every corner of Migori.',
    backgroundImage: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80',
    date: 'Throughout the Year'
  },
  {
    id: 8,
    category: 'Event',
    title: 'Piny Luo Festival',
    subtitle: 'Our Luo Heritage',
    message: 'Celebrating the rich culture, music, and traditions of the Luo people. Proud to be the network that connects our heritage to the digital world.',
    backgroundImage: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80',
    date: 'Annual Celebration'
  },
  {
    id: 9,
    category: 'Event',
    title: 'The Art of Kisii',
    subtitle: 'Soapstone Heritage',
    message: 'Honoring the incredible artisans of Tabaka. Your soapstone masterpieces are a gift to the world, and we are proud to support your digital growth.',
    backgroundImage: 'https://images.unsplash.com/photo-1596708143213-92f72ff2620a?auto=format&fit=crop&q=80',
    date: 'Daily Artistry'
  },
  {
    id: 10,
    category: 'Event',
    title: 'Empowering Farmers',
    subtitle: 'ASK Regional Show',
    message: 'Connectivity is the new backbone of agriculture. We are proud to power the farmers and businesses in our regional agricultural shows.',
    backgroundImage: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80',
    date: 'Seasonal Events'
  },
  {
    id: 11,
    category: 'Event',
    title: 'To Our Graduates',
    subtitle: 'Future Leaders',
    message: 'Congratulations to the class of 2025! Your hard work and dedication have paid off. The digital world awaits your brilliance.',
    backgroundImage: 'https://images.unsplash.com/photo-1523050335102-c32c751a4ed2?auto=format&fit=crop&q=80',
    date: 'Graduation Season'
  }
];
