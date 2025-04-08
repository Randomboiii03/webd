import Link from "next/link"
import {
  Mail,
  MapPin,
  Phone,
  Facebook
} from "lucide-react"
import { contactInfo, companyInfo } from "@/constants/company"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-dark-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dark to-transparent"></div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow title-hover">
          Contact <span className="text-gradient">WEBD</span>
        </h2>

        <div className="max-w-4xl mx-auto bg-dark-700 rounded-lg shadow-lg overflow-hidden relative">
          <div className="p-8 md:p-12 relative z-10">
            <h3 className="text-2xl font-bold mb-8 text-center text-glow">
              Let&apos;s build something together. Reach out today.
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 group">
                  <MapPin className="h-6 w-6 text-primary shrink-0 mt-1 group-hover:animate-pulse" />
                  <div>
                    <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">Location</h4>
                    <p className="text-light/70">{contactInfo.address.street}</p>
                    <p className="text-light/70">
                      {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 group">
                  <Mail className="h-6 w-6 text-primary shrink-0 mt-1 group-hover:animate-pulse" />
                  <div>
                    <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">Email</h4>
                    <Link
                      href={`mailto:${contactInfo.email.primary}`}
                      className="text-light/70 hover:text-primary transition-colors"
                    >
                      {contactInfo.email.primary}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 group">
                  <Phone className="h-6 w-6 text-primary shrink-0 mt-1 group-hover:animate-pulse" />
                  <div>
                    <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">Phone/WhatsApp</h4>
                    <Link
                      href={`tel:${contactInfo.phone.primary}`}
                      className="text-light/70 hover:text-primary transition-colors"
                    >
                      {contactInfo.phone.primary}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="space-y-6 text-center md:text-left">
                <h4 className="font-semibold mb-4 text-glow">Connect With Us</h4>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {/* <Link
                    href={contactInfo.socialMedia.instagram.url}
                    className="flex items-center gap-2 bg-dark-600 hover:bg-primary/20 transition-all duration-300 p-3 rounded-lg hover:scale-105"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5 text-primary" />
                    <span>Instagram</span>
                  </Link> */}

                  <Link
                    href={contactInfo.socialMedia.facebook.url}
                    className="flex items-center gap-2 bg-dark-600 hover:bg-primary/20 transition-all duration-300 p-3 rounded-lg hover:scale-105"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5 text-primary" />
                    <span>Facebook</span>
                  </Link>
                </div>

                {/* Business Hours Section - properly placed outside the above div */}
                <div className="pt-6 border-t border-dark-600 mt-6">
                  <h4 className="font-semibold mb-2 text-glow">Business Hours</h4>
                  <p className="text-light/70">{companyInfo.businessHours.weekdays}</p>
                  <p className="text-light/70">{companyInfo.businessHours.weekends}</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-light/80 max-w-2xl mx-auto">
                Whether you&apos;re looking to create a new website, refresh your brand, or enhance your digital marketing,
                we&apos;re here to help you achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
