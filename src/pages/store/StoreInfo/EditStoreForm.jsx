import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { ErrorMessage, Form, Formik, Field } from 'formik';
import React from 'react'




// Store type options for the select dropdown
const STORE_TYPE_OPTIONS = [
    { value: "Retail Store", label: "Retail Store" },
    { value: "Supermarket", label: "Supermarket" },
    { value: "Mall", label: "Mall" },
    { value: "Department Store", label: "Department Store" },
    { value: "Convenience Store", label: "Convenience Store" },
    { value: "Specialty Store", label: "Specialty Store" },
];

const EditStoreForm = ({ onSubmit, onCancel, initialValues, isEditing }) => {
    const loading = false;


    const handleSubmit = async (values) => {
        console.log("values", values),
            onSubmit();
    }
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize>{({ isSubmitting, setFieldValue }) =>
        (
            <Form className='space-y-6'>
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="brand" className="block text-sm font-medium">
                            Store Name *
                        </Label>
                        <Field
                            as={Input}
                            id="brand"
                            name="brand"
                            placeholder="Enter store name"

                        />
                        <ErrorMessage
                            name="brand"
                            component="div"
                            className="text-red-500 text-sm"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="categoryId" className="block text-sm font-medium">
                            StoreType
                        </Label>
                        <Field name="storeType">
                            {({ field }) => (
                                <Select
                                    value={field.value}
                                    onValueChange={(value) =>
                                        setFieldValue("storeType", value)
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Store Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {STORE_TYPE_OPTIONS.map((type) => (
                                            <SelectItem
                                                key={type.label}
                                                value={type.value}
                                            >
                                                {type.label}
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
                        <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <Separator />
                    <div>
                        <h4 className="text-lg font-medium mb-4">Contact Information</h4>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="contact.address">Address *</Label>
                                <Field
                                    as={Textarea}
                                    id="contact.address"
                                    name="contact.address"
                                    placeholder="Enter store address"
                                    rows={2}

                                />
                                <ErrorMessage name="contact.address" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div>
                                <Label htmlFor="contact.phone">Phone Number *</Label>
                                <Field
                                    as={Input}
                                    id="contact.phone"
                                    name="contact.phone"
                                    placeholder="Enter phone number"

                                />
                                <ErrorMessage name="contact.phone" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div>
                                <Label htmlFor="contact.email">Email Address *</Label>
                                <Field
                                    as={Input}
                                    id="contact.email"
                                    name="contact.email"
                                    type="email"
                                    placeholder="Enter email address"
                                />
                                <ErrorMessage name="contact.email" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-2 pt-4">
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

export default EditStoreForm;