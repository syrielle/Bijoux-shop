import HeroCarousel from '../components/ui/HeroCarousel';
import PriceBanner from '../components/ui/PriceBanner';
import BestSellers from '../components/ui/BestSellers';
import Advantages from '../components/ui/Advantages';
import LogoMarquee from '../components/ui/LogoMarquee';
import WhyLowPrices from '../components/ui/WhyLowPrices';
import RadianceSection from '../components/ui/RadianceSection';
import FeaturedProducts from '../components/ui/FeaturedProducts';
import { heroSlides } from '../data/heroSlides';
import { bestSellers, featuredImage } from '../data/bestSellers';
import { brandLogos, radianceMedia } from '../data/brands';
import { products } from '../data/products';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f5f3f0]">
      {/* Section Hero avec Carousel */}
      <HeroCarousel slides={heroSlides} />

      {/* Bannière Prix Attractifs */}
      <PriceBanner />

      {/* Section Best Sellers */}
      <BestSellers featuredImage={featuredImage} products={bestSellers} />

      {/* Section Nos Avantages */}
      <Advantages />

      {/* Logos qui défilent */}
      <LogoMarquee logos={brandLogos} />

      {/* Section Pourquoi Nos Prix Sont Si Bas */}
      <WhyLowPrices />

      {/* Section Un Éclat Incomparable */}
      <RadianceSection media={radianceMedia} isVideo={false} />

      {/* Section Collections - Produits en vedette */}
      <FeaturedProducts products={products.slice(0, 8)} />
    </div>
  );
};

export default Home;
