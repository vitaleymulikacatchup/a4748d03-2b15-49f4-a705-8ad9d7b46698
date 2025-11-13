"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from "@/components/navbar/NavbarStyleMinimal";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import AboutFeature from "@/components/sections/about/AboutFeature";
import FeatureCardSix from "@/components/sections/feature/FeatureCardSix";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import PricingCardThree from "@/components/sections/pricing/PricingCardThree";
import MetricCardTwo from "@/components/sections/metric/MetricCardTwo";
import TeamCardTwo from "@/components/sections/team/TeamCardTwo";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCenterForm from "@/components/sections/contact/ContactCenterForm";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { Award, BarChart3, Crown, Disc3, Handshake, HelpCircle, Heart, Linkedin, MessageSquare, Music, Radio, Sparkles, Star, Users, Volume2 } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="large"
      sizing="small"
      background="aurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="VinylVibe"
          button={{
            text: "Shop Now",
            href: "product"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Premium Vinyl & Turntables"
          description="Discover the finest selection of vintage records and professional turntables for audiophiles and DJs worldwide"
          tag="Music Excellence"
          tagIcon={Music}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763039733140-9ap06969.jpg"
          imageAlt="Premium vinyl records and turntable collection"
          frameStyle="card"
          buttons={[
            {
              text: "Shop Collection",
              href: "product"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="We're passionate about preserving the authentic sound and culture of vinyl music. Our curated collection brings together vintage classics and modern pressing excellence."
          features={[
            {
              icon: Disc3,
              title: "Curated Collection",
              description: "Hand-selected vinyl records from rare classics to modern pressings, ensuring exceptional quality and sound."
            },
            {
              icon: Volume2,
              title: "Premium Audio",
              description: "Professional-grade turntables and equipment for the ultimate listening and mixing experience."
            },
            {
              icon: Award,
              title: "Expert Quality",
              description: "Every record and turntable is inspected by our audio specialists to guarantee premium quality."
            },
            {
              icon: Heart,
              title: "Music Passion",
              description: "Born from a love of music, we're dedicated to keeping the vinyl culture alive for generations."
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardSix
          title="Why Choose VinylVibe"
          description="Experience the difference with our premium approach to vinyl and turntables"
          tag="Our Process"
          tagIcon={Sparkles}
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Authentic Sourcing",
              description: "We work directly with record labels and certified dealers to ensure every vinyl record is genuine and in pristine condition.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763039737631-cgyz4s5y.jpg",
              imageAlt: "Authentic vinyl record sourcing process"
            },
            {
              id: 2,
              title: "Professional Testing",
              description: "Every turntable undergoes comprehensive testing by our audio technicians to guarantee optimal performance and sound quality.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763039734622-zmnd00tl.jpg",
              imageAlt: "Professional turntable testing process"
            },
            {
              id: 3,
              title: "Expert Curation",
              description: "Our music specialists carefully select each item based on sound quality, rarity, and cultural significance to build the perfect collection.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763039738717-dq4e5qix.jpg",
              imageAlt: "Expert music curation process"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Featured Collection"
          description="Explore our handpicked selection of premium turntables and vinyl records"
          tag="Best Sellers"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "Technics",
              name: "SL-1200MK7 Turntable",
              price: "$699.00",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763039734622-zmnd00tl.jpg",
              imageAlt: "Technics SL-1200MK7 Professional Turntable"
            },
            {
              id: "2",
              brand: "Audio-Technica",
              name: "AT-LP120XUSB Turntable",
              price: "$349.00",
              rating: 4,
              reviewCount: "1.8k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763039735770-9nlqardc.jpg",
              imageAlt: "Audio-Technica AT-LP120XUSB Turntable"
            },
            {
              id: "3",
              brand: "Rega",
              name: "Planar 3 Turntable",
              price: "$945.00",
              rating: 5,
              reviewCount: "890",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763039736875-c757aov3.jpg",
              imageAlt: "Rega Planar 3 High-End Turntable"
            },
            {
              id: "4",
              brand: "Blue Note",
              name: "Kind of Blue - Miles Davis",
              price: "$34.99",
              rating: 5,
              reviewCount: "5.2k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763039737631-cgyz4s5y.jpg",
              imageAlt: "Miles Davis Kind of Blue Vinyl Record"
            },
            {
              id: "5",
              brand: "Abbey Road",
              name: "The Beatles - Abbey Road",
              price: "$29.99",
              rating: 5,
              reviewCount: "7.8k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763039738717-dq4e5qix.jpg",
              imageAlt: "The Beatles Abbey Road Vinyl Record"
            },
            {
              id: "6",
              brand: "Led Zeppelin",
              name: "Led Zeppelin IV",
              price: "$26.99",
              rating: 5,
              reviewCount: "4.5k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763039739920-ppp085mc.jpg",
              imageAlt: "Led Zeppelin IV Vinyl Record"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Membership Plans"
          description="Join our community and get exclusive access to rare releases and member pricing"
          tag="Membership"
          tagIcon={Crown}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "basic",
              price: "$9.99/mo",
              name: "Vinyl Lover",
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "https://signup.vinylvibe.com"
                },
                {
                  text: "Learn More",
                  href: "pricing"
                }
              ],
              features: [
                "10% discount on all vinyl",
                "Early access to new releases",
                "Monthly curator recommendations",
                "Free shipping on orders $50+"
              ]
            },
            {
              id: "pro",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$19.99/mo",
              name: "DJ Professional",
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "https://signup.vinylvibe.com"
                },
                {
                  text: "Learn More",
                  href: "pricing"
                }
              ],
              features: [
                "20% discount on all products",
                "Exclusive limited releases",
                "Priority customer support",
                "Free equipment maintenance guide",
                "Access to DJ community forum"
              ]
            },
            {
              id: "collector",
              price: "$39.99/mo",
              name: "Master Collector",
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "https://signup.vinylvibe.com"
                },
                {
                  text: "Learn More",
                  href: "pricing"
                }
              ],
              features: [
                "30% discount on all products",
                "First access to rare pressings",
                "Personal vinyl curator",
                "Free professional cleaning service",
                "Quarterly collector meetups",
                "Custom pressing services"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Our Impact on Music Culture"
          description="Numbers that showcase our commitment to the vinyl community"
          tag="Statistics"
          tagIcon={BarChart3}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "50K+",
              description: "Vinyl Records in Stock"
            },
            {
              id: "2",
              value: "15K+",
              description: "Happy Customers Worldwide"
            },
            {
              id: "3",
              value: "98%",
              description: "Customer Satisfaction Rate"
            },
            {
              id: "4",
              value: "25+",
              description: "Years in Music Industry"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet the Music Experts"
          description="Our passionate team of audio specialists and music curators"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Marcus Rodriguez",
              role: "Chief Audio Curator",
              description: "Former sound engineer for Blue Note Records. 20+ years in vinyl restoration and audio equipment testing.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763039748509-nqytcyxg.jpg",
              imageAlt: "Marcus Rodriguez - Chief Audio Curator",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/marcus-rodriguez"
                },
                {
                  icon: Music,
                  url: "https://soundcloud.com/marcus-audio"
                }
              ]
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Vinyl Specialist",
              description: "DJ and vinyl collector with expertise in rare pressings and limited editions from the 60s-90s era.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763039749567-ehrtd2cp.jpg",
              imageAlt: "Sarah Chen - Vinyl Specialist",
              socialLinks: [
                {
                  icon: Music,
                  url: "https://mixcloud.com/sarah-chen"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Music Lovers Say"
          description="Hear from DJs, collectors, and audiophiles who trust VinylVibe"
          tag="Testimonials"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "DJ Mike Thompson",
              role: "Professional DJ & Producer",
              testimonial: "VinylVibe has the best selection of rare pressings I've found anywhere. The quality is consistently exceptional, and their turntables are perfectly calibrated.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763039748509-nqytcyxg.jpg",
              imageAlt: "DJ Mike Thompson",
              icon: Music
            },
            {
              id: "2",
              name: "Lisa Park",
              role: "Vinyl Collector",
              testimonial: "As a serious collector, I appreciate their authentication process and the condition of every record. VinylVibe understands what audiophiles really want.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763039750519-n6fj71v4.jpg",
              imageAlt: "Lisa Park - Vinyl Collector",
              icon: Heart
            },
            {
              id: "3",
              name: "Carlos Rivera",
              role: "Music Studio Owner",
              testimonial: "We've equipped our entire studio with VinylVibe turntables. The sound quality and reliability are unmatched for professional recording work.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763039751364-q6krhihy.jpg",
              imageAlt: "Carlos Rivera - Studio Owner",
              icon: Award
            },
            {
              id: "4",
              name: "Emma Watson",
              role: "Radio Host",
              testimonial: "VinylVibe helped me build my personal collection with rare jazz albums I couldn't find anywhere else. Their expertise and service are outstanding.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763039749567-ehrtd2cp.jpg",
              imageAlt: "Emma Watson - Radio Host",
              icon: Radio
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Music Industry Leaders"
          description="Partnering with the world's most prestigious record labels and music companies"
          tag="Partners"
          tagIcon={Handshake}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763039741184-1gsncgaf.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763039742302-32jtbrse.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763039743240-hf42qwy9.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763039744425-sudsrf93.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763039745394-ksg6nq17.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763039746214-44bugwk2.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763039747065-klt6jpof.jpg"
          ]}
          speed={50}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about our vinyl records and turntables"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What condition are your vinyl records in?",
              content: "All our vinyl records are graded using the industry-standard Goldmine grading system. We provide detailed condition descriptions and photos for each item. Most of our collection ranges from Very Good Plus (VG+) to Near Mint (NM) condition."
            },
            {
              id: "2",
              title: "Do you test all turntables before shipping?",
              content: "Yes, every turntable undergoes comprehensive testing by our audio technicians. We check speed accuracy, tracking force, anti-skate settings, and overall sound quality before packaging and shipping."
            },
            {
              id: "3",
              title: "What's your return policy?",
              content: "We offer a 30-day money-back guarantee on all purchases. Items must be returned in the same condition they were received. Turntables include free return shipping, while vinyl records require original packaging."
            },
            {
              id: "4",
              title: "Do you ship internationally?",
              content: "Yes, we ship worldwide! International shipping rates vary by destination and weight. We use secure packaging to ensure your vinyl and equipment arrive safely. Custom duties may apply depending on your country's regulations."
            },
            {
              id: "5",
              title: "Can you help me find specific rare records?",
              content: "Absolutely! Our team of music specialists can help you locate rare and hard-to-find records. Contact us with your wants list, and we'll use our extensive network of collectors and dealers to find what you're looking for."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch with Our Music Experts"
          description="Have questions about vinyl records or turntables? Need help finding a specific album? Our team is here to help you discover the perfect addition to your collection."
          buttonText="Send Message"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "subject",
              type: "text",
              placeholder: "Subject",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about the vinyl records or equipment you're looking for, or ask any questions about our collection...",
            rows: 6,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="VinylVibe"
          columns={[
            {
              items: [
                {
                  label: "Shop Turntables",
                  href: "turntables"
                },
                {
                  label: "Browse Vinyl",
                  href: "vinyl"
                },
                {
                  label: "New Releases",
                  href: "new-releases"
                },
                {
                  label: "Rare Finds",
                  href: "rare-finds"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "team"
                },
                {
                  label: "Membership",
                  href: "membership"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "Grading Guide",
                  href: "grading"
                },
                {
                  label: "Care Tips",
                  href: "care-tips"
                },
                {
                  label: "Setup Guide",
                  href: "setup"
                },
                {
                  label: "FAQ",
                  href: "faq"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}