import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ErrorMessage, Form, Formik, Field } from 'formik';
import React from 'react'



const categoryList = [{
    id: "1",
    name: "Rice"
}]

const ProductForm = ({ onSubmit, onCancel, initialValues, isEditing }) => {
    const loading = false;
    
    const defaultValues = {
        name: "",
        sku: "",
        description: "",
        mrp: "",
        sellingPrice: "",
        brand: "",
        categoryId: "",
        color: "",
        image: null,
        ...initialValues,
    }

    const handleSubmit = async (values) => {
        console.log("values", values),
            onSubmit();
    }
    return (
        <Formik initialValues={defaultValues} onSubmit={handleSubmit} enableReinitialize>{({ isSubmitting, setFieldValue }) =>
        (
            <Form className='space-y-4 py-2 pr-2'>
            <div className="space-y-2">
            <label htmlFor="image" className="block text-sm font-medium">
              Image URL
            </label>
            <Field
              as={Input}
              id="image"
              name="image"
              placeholder="Paste image URL"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Product Name
            </label>
            <Field
              as={Input}
              id="name"
              name="name"
              placeholder="Enter product name"
         
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="sku" className="block text-sm font-medium">
              SKU
            </label>
            <Field
              as={Input}
              id="sku"
              name="sku"
              placeholder="Enter SKU"
              
            />
            <ErrorMessage
              name="sku"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="brand" className="block text-sm font-medium">
              Brand
            </label>
            <Field
              as={Input}
              id="brand"
              name="brand"
              placeholder="Enter brand"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="categoryId" className="block text-sm font-medium">
                Category
              </label>
              <Field name="categoryId">
                {({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(value) =>
                      setFieldValue("categoryId", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categoryList.map((category) => (
                        <SelectItem
                          key={category.id}
                          value={category.id.toString()}
                        >
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </Field>
              <ErrorMessage
                name="categoryId"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="color" className="block text-sm font-medium">
                Color
              </label>
              <Field
                as={Input}
                id="color"
                name="color"
                placeholder="Enter color"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="mrp" className="block text-sm font-medium">
                MRP
              </label>
              <Field
                as={Input}
                id="mrp"
                name="mrp"
                type="number"
                step="0.01"
                min="0"
                placeholder="0.00"
                
              />
              <ErrorMessage
                name="mrp"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="sellingPrice"
                className="block text-sm font-medium"
              >
                Selling Price
              </label>
              <Field
                as={Input}
                id="sellingPrice"
                name="sellingPrice"
                type="number"
                step="0.01"
                min="0"
                placeholder="0.00"
                
              />
              <ErrorMessage
                name="sellingPrice"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <Field
              as={Textarea}
              id="description"
              name="description"
              placeholder="Enter product description"
              rows={3}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            {onCancel && (
              <Button className={"rounded-full"} type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
            )}
            <Button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 rounded-full"
              disabled={isSubmitting || loading}
            >
              {isSubmitting || loading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {isEditing ? "Updating..." : "Adding..."}
                </span>
              ) : isEditing ? (
                "Update Product"
              ) : (
                "Add Product"
              )}
            </Button>
          </div>

            </Form>
        )
        }

        </Formik>
    )
}

export default ProductForm