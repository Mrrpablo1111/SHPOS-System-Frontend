import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import React, { useState } from 'react'
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';
import { Card, CardContent } from '@/components/ui/card';

const products = [
  {
    id: "R001",
    image: "https://media.makrocambodiaclick.com/PRODUCT_1654052154547.jpeg",
    name: "Premium Jasmine Rice",
    category: "White Rice",
    price: 12.99,
    stock: 200,
    description: "High-quality fragrant jasmine rice, soft texture and slightly sweet aroma. Ideal for daily meals.",
  },
  {
    id: "R002",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPcZW6N4pxAcAgZKfQnPCB9SfjQWRGEPF-nw&s",
    name: "Organic Brown Rice",
    category: "Healthy Rice",
    price: 14.5,
    stock: 150,
    description: "Whole grain rice with natural fiber and nutrients. Perfect for a healthy diet.",
  },
  {
    id: "R003",
    image: "https://m.media-amazon.com/images/I/710hWdOywCL._AC_UF894,1000_QL80_.jpg",
    name: "Sticky Rice (Glutinous)",
    category: "Specialty Rice",
    price: 10.75,
    stock: 180,
    description: "Soft and sticky rice, commonly used for traditional dishes and desserts.",
  },
  {
    id: "R004",
    image: "https://sunrice-strapi4-images.s3.ap-southeast-2.amazonaws.com/CAMBODIAN_JASMINE_49690_FOP_Repurpose_ID_127708_2_aa4ec14651.png",
    name: "Fragrant Cambodian Rice",
    category: "Premium Rice",
    price: 13.25,
    stock: 220,
    description: "Premium Cambodian rice with a rich aroma and soft texture, known for its high quality.",
  },
  {
    id: "R005",
    image: "https://i5.walmartimages.com/asr/1b295258-260f-4dfc-ba97-797b64e47707.2ae5f578dc5c0143c509d856143363f8.jpeg",
    name: "Long Grain White Rice",
    category: "White Rice",
    price: 11.0,
    stock: 300,
    description: "Light and fluffy long grain rice, suitable for fried rice and everyday cooking.",
  },
  {
    id: "R006",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvL8JySe6jXjXgWtdfRsA72R_ktSv_g_IvFQ&s",
    name: "Broken Rice (25%)",
    category: "Budget Rice",
    price: 8.99,
    stock: 400,
    description: "Affordable rice with smaller grains, great for porridge or budget-friendly meals.",
  },
];
const Products = () => {
      const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
      const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-2xl'>Product Manageer</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className={"rounded-full"}>
                <Plus className='w-4 h-4' />Add Product</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Product</DialogTitle>
            </DialogHeader>
            <ProductForm onCancel={()=> setIsAddDialogOpen(false)} />
          </DialogContent>
        </Dialog>
        
      </div>
      <Card>
          <CardContent>
            <ProductTable products={products} onEdit={()=>setIsEditDialogOpen(true)}/>
          </CardContent>
        </Card>


        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Product</DialogTitle>
            </DialogHeader>
            <ProductForm isEditing={true} onCancel={()=> setIsEditDialogOpen(false)} />
          </DialogContent>
        </Dialog>
        
    </div>
  )
}

export default Products