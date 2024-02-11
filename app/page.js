import HeroSection from "@/components/HeroSection";
import ProductsGallery from "@/components/Products";
import SectionComponent from "@/components/SectionComponent";
import FooterComponent from "@/components/footer";
import Image from "next/image";

const content = [
  {
    section: "about",
    title: "About Us",
    text: "Welcome to Rydlle, your premier destination for quality jute products crafted with care and commitment to sustainability. Founded with a passion for promoting Bangladesh's rich heritage of jute and its versatile applications, Rydlle is dedicated to delivering premium jute solutions while upholding the highest standards of social and environmental responsibility.",
  },
  {
    section: "mission",
    title: "Our Mission",
    text: "At Rydlle, our mission is twofold: to celebrate the timeless elegance and eco-friendly nature of jute, and to contribute to the economic empowerment of local communities through sustainable jute cultivation and production practices. We strive to be a driving force in the revitalization of Bangladesh's jute industry, fostering innovation, creating opportunities, and promoting the global adoption of jute-based products.",
  },

  {
    section: "values",
    title: "Our Values",
    text: [
      {
        bold: "Quality:",
        normal:
          "We are committed to delivering jute products of the highest quality, meticulously crafted to meet the needs and expectations of our customers.",
      },
      {
        bold: "Sustainability:",
        normal:
          "Environmental sustainability is at the core of everything we do. We prioritize eco-friendly materials, processes, and packaging to minimize our ecological footprint and contribute to a greener future.",
      },
      {
        bold: "Ethical Practices:",
        normal:
          "We believe in fair treatment, transparency, and respect for all stakeholders, including our employees, partners, suppliers, and the communities we serve.",
      },
      {
        bold: "Innovation:",
        normal:
          "Constant innovation drives our quest for excellence. We continuously explore new technologies, designs, and applications to push the boundaries of what jute can achieve.",
      },
    ],
  },
  {
    section: "story",
    title: "Our Story",
    text: [
      {
        normal:
          "Rydlle was founded by a team of passionate individuals with deep roots in Bangladesh's jute industry. Drawing inspiration from the country's rich jute heritage and recognizing the immense potential of this versatile fiber, we set out to create a brand that would redefine the perception of jute and showcase its beauty, durability, and sustainability to the world.",
      },
      {
        normal:
          "From humble beginnings, Rydlle has grown into a trusted name in the jute industry, earning accolades for our commitment to quality, innovation, and social responsibility. With each product we create, we honor our heritage, celebrate our culture, and contribute to the prosperity of our nation.",
      },
    ],
  },
  {
    section: "commitment",
    title: "Our Commitment",
    text: "As we continue on our journey, Rydlle remains steadfast in our commitment to excellence, integrity, and sustainability. We invite you to join us in embracing the beauty and potential of jute, and together, let us pave the way for a brighter, greener future.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col m-auto mt-10 max-w-5xl items-center justify-between ">
      <HeroSection id="home" />
      <ProductsGallery id="products" />
      <section id="about">
        {content.map((item, index) => (
          <SectionComponent
            key={index}
            title={item.title}
            text={item.text}
            image={`/1.webp`} // This is a placeholder; replace with your actual image paths
          />
        ))}
      </section>
    </main>
  );
}
