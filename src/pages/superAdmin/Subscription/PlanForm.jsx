import { Button } from '@/components/ui/button';
import { DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ErrorMessage, Field, Form } from 'formik'
import React from 'react'

// --- Constants ---
const BILLING_CYCLES = [
  { label: 'Monthly', value: 'MONTHLY' },
  { label: 'Yearly', value: 'YEARLY' },
];

const FEATURE_FIELDS = [
  { key: 'enableAdvancedReports', label: 'Advanced Reports' },
  { key: 'enableInventory', label: 'Inventory System' },
  { key: 'enableIntegrations', label: 'Integrations' },
  { key: 'enableEcommerce', label: 'eCommerce' },
  { key: 'enableInvoiceBranding', label: 'Invoice Branding' },
  { key: 'prioritySupport', label: 'Priority Support' },
  { key: 'enableMultiLocation', label: 'Multi-location' },
];

const PlanForm = ({values, isSubmitting, setFieldValue}) => {
    const loading = false;
    const handleFeatureSwitch = (key,value)=>{
        setFieldValue(key, value)
    }

    const handleExtraFeatureChange = (idx, value)=>{
        const arr=[...values.extraFeature];
        arr[idx]=value;
        setFieldValue("extraFeature", arr)
    }

    const handleRemoveExtraFeatureChange = (idx, value)=>{
        const arr =  value.extraFeature.filter((_,i)=>i!==idx);
        setFieldValue("extraFeature", arr.length?arr:[""]);
    }

    const handleAddExtraFeature =()=>{
        setFieldValue("extraFeature", [...values.extraFeature,""])
    }


  return (
   <Form className='space-y-4'>
    {/* Name */}
        <div>
          <label className="block font-medium" htmlFor="plan-name">Name</label>
          <Field as={Input} id="plan-name" name="name" placeholder="Plan name" />
          <ErrorMessage name="name" component="div" className="text-red-500 text-xs" />
        </div>
        {/* Description */}
        <div>
          <label className="block font-medium" htmlFor="plan-description">Description</label>
          <Field as={Input} id="plan-description" name="description" placeholder="Description" />
          <ErrorMessage name="description" component="div" className="text-red-500 text-xs" />
        </div>
        {/* Price & Billing Cycle */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block font-medium" htmlFor="plan-price">Price ($)</label>
            <Field as={Input} id="plan-price" name="price" type="number" min="0" placeholder="Price" />
            <ErrorMessage name="price" component="div" className="text-red-500 text-xs" />
          </div>
          <div className="flex-1">
            <label className="block font-medium" htmlFor="plan-billing-cycle">Billing Cycle</label>
            <Field name="billingCycle">
              {({ field }) => (
                <Select value={field.value} onValueChange={val => setFieldValue('billingCycle', val)}>
                  <SelectTrigger className="w-full" id="plan-billing-cycle">
                    <SelectValue placeholder="Select cycle" />
                  </SelectTrigger>
                  <SelectContent>
                    {BILLING_CYCLES.map(opt => (
                      <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </Field>
            <ErrorMessage name="billingCycle" component="div" className="text-red-500 text-xs" />
          </div>
        </div>
        {/* Branches, Users, Products */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block font-medium" htmlFor="plan-branches">Branches</label>
            <Field as={Input} id="plan-branches" name="maxBranches" type="number" min="1" placeholder="Branches" />
            <ErrorMessage name="maxBranches" component="div" className="text-red-500 text-xs" />
          </div>
          <div className="flex-1">
            <label className="block font-medium" htmlFor="plan-users">Users</label>
            <Field as={Input} id="plan-users" name="maxUsers" type="number" min="1" placeholder="Users" />
            <ErrorMessage name="maxUsers" component="div" className="text-red-500 text-xs" />
          </div>
          <div className="flex-1">
            <label className="block font-medium" htmlFor="plan-products">Products</label>
            <Field as={Input} id="plan-products" name="maxProducts" type="number" min="1" placeholder="Products" />
            <ErrorMessage name="maxProducts" component="div" className="text-red-500 text-xs" />
          </div>
        </div>
        
        
     
        {/* Dialog Footer */}
        <DialogFooter>
          <Button type="submit" disabled={isSubmitting || loading}>
            {loading ? 'Saving...' : 'Save Plan'}
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="ghost">Cancel</Button>
          </DialogClose>
        </DialogFooter>
   </Form>
  )
}

export default PlanForm