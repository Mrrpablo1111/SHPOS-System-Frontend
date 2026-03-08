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
    <div className='border w-2/5 flex flex-col border-r bg-card'>

      {/* Search Header */}
      <div className='p-4 border-b bg-muted'>
        <Input
          className="py-5"
          placeholder="Search Product..."
          value={searchTerm}
          onChange={handleSearchChange}
          type="text"
        />

        <div className='flex items-center justify-between pt-4'>
          <span>{products.length} Products found</span>

          <Button variant='outline' size='sm' className="cursor-pointer text-xs flex items-center gap-1">
            <Barcode size={16} />
            Scan
          </Button>
        </div>
      </div>

      {/* Product Grid */}
      <div className='flex-1 overflow-y-auto p-3 pb-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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