import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Formik } from 'formik'
import React from 'react'
import PlanForm from './PlanForm'

const AddPlanDialog = ({open, onOpenChange, onSuccess}) => {
    const initialValues = {
        name:"",
        description:"",
        price:"",
        billingCycle:"",
        maxBranches:"",
        maxUsers:"",
        maxProducts:"",
        enableAdvancedReports:"",
        enalbleInventory:false,
        enableIntegrations:false,
        enableEcommerce:false,
        enableInvoiceBranding:false,
        prioritySupport:false,
        enableMultiLocation: false,
        extraFeature:[''],
    };
    const handleSubmit =(values)=>{
        console.log("values", values)
    }

  return (
    <Dialog open={open} onOpenChange={onOpenChange} >
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add Subscription Plan</DialogTitle>
            </DialogHeader>
            <div className='overflow-y-auto max-h-[65vh] pr:5'>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    <PlanForm/>
                </Formik>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default AddPlanDialog