import MainLayout from '../layouts/MainLayout'

import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import CategorySection from '../components/sections/CategorySection'
import ProductSection from '../components/sections/ProductSection'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import ContactSection from '../components/sections/ContactSection'

function Home() {
  return (
    <MainLayout>

      <HeroSection />

      <AboutSection />

      <CategorySection />

      <ProductSection />

      <WhyChooseUs />

      <ContactSection />

    </MainLayout>
  )
}

export default Home