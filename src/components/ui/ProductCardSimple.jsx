import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProductCardSimple = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/produit/${product.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="cursor-pointer"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image avec effet hover */}
      <div className="relative aspect-square overflow-hidden mb-4 bg-white">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
      </div>

      {/* Informations produit */}
      <div className="text-center space-y-2">
        <h3 className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600">
          {product.price.toFixed(2)} $
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCardSimple;
