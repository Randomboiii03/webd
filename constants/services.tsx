import { Monitor, Palette, Camera, MessageSquare } from "lucide-react"

export const services = [
  {
    icon: <Monitor className="h-12 w-12 text-primary" />,
    title: "Web Design & Development",
    description: "Custom websites that are responsive, fast, and optimized for search engines.",
  },
  {
    icon: <Palette className="h-12 w-12 text-primary" />,
    title: "Branding & Logo Design",
    description: "Distinctive brand identities that communicate your values and resonate with your audience.",
  },
  {
    icon: <Camera className="h-12 w-12 text-primary" />,
    title: "Photography & Advertisements",
    description: "Professional photography and compelling ad designs that capture attention.",
  },
  {
    icon: <MessageSquare className="h-12 w-12 text-primary" />,
    title: "Social Media Management",
    description: "Strategic social media presence to engage your audience and build community.",
  },
]

export const features = [
  {
    title: "Affordable & Professional",
    description: "Quality solutions that fit your budget without compromising on professionalism.",
  },
  {
    title: "Mobile & SEO-Optimized",
    description: "Websites that look great on all devices and rank well in search results.",
  },
  {
    title: "Scalable, Fast & Secure",
    description: "Solutions that grow with your business while maintaining performance and security.",
  },
  {
    title: "Full Branding Suite",
    description: "Comprehensive branding services to establish a cohesive identity across all touchpoints.",
  },
]

export const detailedServices = [
  {
    id: "web",
    icon: <Monitor className="h-10 w-10 text-primary" />,
    title: "Web Design & Development",
    description:
      "We create custom websites that are not only visually stunning but also functional and user-friendly. Our web solutions are built with the latest technologies to ensure they're fast, secure, and optimized for search engines.",
    features: [
      "Responsive design for all devices",
      "SEO optimization",
      "Fast loading speeds",
      "Content management systems",
      "Web application development",
    ],
  },
  {
    id: "branding",
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "Branding & Logo Design",
    description:
      "Your brand is more than just a logo—it's the entire experience customers have with your business. We develop comprehensive brand identities that communicate your values and resonate with your target audience.",
    features: [
      "Logo design",
      "Brand guidelines",
      "Visual identity systems",
      "Brand messaging",
      "Business cards and stationery",
      "Brand strategy",
    ],
  },
  {
    id: "photography",
    icon: <Camera className="h-10 w-10 text-primary" />,
    title: "Photography & Advertisements",
    description:
      "High-quality visuals are essential for making a strong impression. Our professional photography and advertisement designs capture attention and effectively communicate your message to potential customers.",
    features: [
      "Product photography",
      "Brand photography",
      "Digital advertisements",
      "Print advertisements",
      "Social media graphics",
      "Banner and billboard designs",
    ],
  },
  {
    id: "social",
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    title: "Social Media Management",
    description:
      "Building a strong social media presence requires strategy, consistency, and engaging content. We help you connect with your audience, build community, and drive conversions through effective social media management.",
    features: [
      "Content creation and curation",
      "Posting schedule management",
      "Performance analytics",
      "Paid social campaigns",
    ],
  },
]

