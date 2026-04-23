import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { products } from '@/data/product';
import { Barcode } from 'lucide-react';
import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='w-full lg:w-2/5 flex flex-col border-b lg:border-b-0 lg:border-r bg-card'>

      {/* Search Header */}
      <div className='p-3 sm:p-4 border-b bg-muted'>
        <Input
          className="py-4 sm:py-5"
          placeholder="Search Product..."
          value={searchTerm}
          onChange={handleSearchChange}
          type="text"
        />

        <div className='flex items-center justify-between pt-3 sm:pt-4 text-sm sm:text-base'>
          <span>{products.length} Products found</span>

          <Button 
            variant='outline' 
            size='sm' 
            className="cursor-pointer text-xs flex items-center gap-1"
          >
            <Barcode size={16} />
            Scan
          </Button>
        </div>
      </div>

      {/* Product Grid */}
      <div className='flex-1 overflow-y-auto p-2 sm:p-3 pb-6'>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4'>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>

    </div>
  );
};
export default ProductSection;