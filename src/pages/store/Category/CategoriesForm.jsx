
import { Input } from '@/components/ui/input'

import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

import React from 'react'
import { Button } from '@/components/ui/button'


const CategoriesForm = ({ onSubmit, onCancel, initialValues, isEditing }) => {
    const loading = false;
    const validationSchema = Yup.object({
        name: Yup.string().required("Category name is required"),
        category: Yup.string().required("Category is required"),
 
    })
    const handleSubmit = () => {
        onSubmit();
    }

    return (
        <Formik initialValues={initialValues || {
            name: "",
            description: "",
            onSubmit: { handleSubmit },
            validationSchema: { validationSchema }

        }}>{({ isSubmitting }) =>
        (
            <Form className='space-y-4 py-2 pr-2'>
                <div className="space-y-2">
                    <label htmlFor="name">Category Name</label>
                    <Field
                        as={Input}
                        id="name"
                        name="name"
                        placeholder="Enter category name"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="description">Description</label>
                    <Field
                        as={Input}
                        id="description"
                        name="description"
                        placeholder="Enter category description"
                    />
                    <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
                </div>

                <div className='flex justify-end gap-2 pt-4'>
                    <Button className={"rounded-full"} type="button" variant="outline" onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button className={"rounded-full"} type="submit" disabled={isSubmitting || loading}>
                        {isSubmitting || loading ? (isEditing ? "Updating..." : "Adding...") : (isEditing ? "Update Category" : "Add Category")}
                    </Button>
                </div>

            </Form>
        )
            }

        </Formik>
    )
}

export default CategoriesForm;