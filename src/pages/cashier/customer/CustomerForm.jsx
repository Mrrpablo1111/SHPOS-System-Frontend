import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { useSelector } from 'react-redux'
import * as Yup from "yup";
const CustomerForm = ({ showCustomerForm, setShowCustomerForm }) => {

    const { loading } = useSelector((state) => state.customer || { loading: false })


    const intialValues = {
        fullName: "",
        email: "",
        phone: "",
    }

    // Validation schema using Yup
    const validationSchema = Yup.object({
        fullName: Yup.string()
            .required("Full name is required")
            .min(2, "Full name must be at least 2 characters")
            .max(50, "Full name must be less than 50 characters"),
        phone: Yup.string()
            .required("Phone number is required")
            .matches(/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number"),
        email: Yup.string().email("Please enter a valid email address").optional(),
    });

    const handleCancel = () => {
        setShowCustomerForm(false);
    }

    return (
        <Dialog open={showCustomerForm} onOpenChange={setShowCustomerForm}>
            <DialogContent className={"max-w-md"}>
                <DialogHeader>
                    <DialogTitle>Add New Customer</DialogTitle>
                </DialogHeader>
                <Formik initialValues={intialValues} validationSchema={validationSchema}>
                    {({ isSubmitting, errors, touched }) => (
                        <Form className='space-y-4'>
                            <div className='space-y-2'>
                                <Label htmlFor="fullName">Full Name *</Label>
                                <Field
                                    as={Input}
                                    id="fullName"
                                    name="fullName"
                                    placeholder="Enter Customer Full Name"
                                    className={errors.fullName && touched.fullName ? "border-red-500" : ""} />

                                <ErrorMessage name='fullName' component="p" className='text-sm text-red-500' />
                            </div>

                            <div className='space-y-2'>
                                <Label htmlFor="phone">Phone Number</Label>
                                <Field as={Input} id="phone" name="phone" placeholder="Enter Phone Number" className={errors.phone && touched.phone ? "border-red-500" : ""} />
                                <ErrorMessage name='phone' component="p" className='text-sm text-red-500' />
                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor="email">Email</Label>
                                <Field as={Input} id="email" name="email" placeholder="Enter Email" type="email" className={errors.email && touched.email ? "border-red-500" : ""} />
                                <ErrorMessage name='email' component="p" className='text-sm text-red-500' />
                            </div>

                            <DialogFooter>
                                <Button variant='outline'>Cancel</Button>
                                <Button onClick={() => setShowCustomerForm(true)}>Add New Customer</Button>
                            </DialogFooter>
                        </Form>
                    )}

                </Formik>
            </DialogContent>

        </Dialog>
    )
}

export default CustomerForm