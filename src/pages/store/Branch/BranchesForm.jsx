
import { Input } from '@/components/ui/input'

import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

import React from 'react'
import { Button } from '@/components/ui/button'


const BranchesForm = ({ onSubmit, onCancel, initialValues, isEditing }) => {
    const loading = false;
    const validationSchema = Yup.object({
        name: Yup.string().required("Branch name is required"),
        address: Yup.string().required("Address is required"),
        manager: Yup.string().required("Manager name is required"),
        phone: Yup.string().required("phone number is required")
    })
    const handleSubmit = () => {
        onSubmit();
    }

    return (
        <Formik initialValues={initialValues || {
            name: "",
            address: "",
            manager: "",
            phone: "",
            onSubmit: { handleSubmit },
            validationSchema: { validationSchema }

        }}>{({ isSubmitting }) =>
        (
            <Form className='space-y-4 py-2 pr-2'>
                <div className="space-y-2">
                    <label htmlFor="name">Branch Name</label>
                    <Field
                        as={Input}
                        id="name"
                        name="name"
                        placeholder="Enter branch name"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="address">Address</label>
                    <Field
                        as={Input}
                        id="address"
                        name="address"
                        placeholder="Enter branch address"
                    />
                    <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="manager">Manager Name</label>
                    <Field
                        as={Input}
                        id="manager"
                        name="manager"
                        placeholder="Enter manager name"
                    />
                    <ErrorMessage name="manager" component="div" className="text-red-500 text-sm" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="phone">Phone Number</label>
                    <Field
                        as={Input}
                        id="phone"
                        name="phone"
                        placeholder="Enter phone number"
                    />
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                </div>

                <div className='flex justify-end gap-2 pt-4'>
                    <Button type="button" variant="outline" onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button type="submit" disabled={isSubmitting || loading}>
                        {isSubmitting || loading ? (isEditing ? "Updating..." : "Adding...") : (isEditing ? "Update Branch" : "Add Branch")}
                    </Button>
                </div>

            </Form>
        )
            }

        </Formik>
    )
}

export default BranchesForm