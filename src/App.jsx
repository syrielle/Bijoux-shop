import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import HeaderNew from './components/layout/HeaderNew';
import FooterNew from './components/layout/FooterNew';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import BijouxAfricains from './pages/BijouxAfricains';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import About from './pages/About';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfSale from './pages/TermsOfSale';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-[#f5f3f0]">
          <HeaderNew />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produit/:id" element={<ProductDetail />} />
              <Route path="/panier" element={<Cart />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/bijoux-africains" element={<BijouxAfricains />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mentions-legales" element={<LegalNotice />} />
              <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
              <Route path="/cgv" element={<TermsOfSale />} />
            </Routes>
          </main>
          <FooterNew />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
