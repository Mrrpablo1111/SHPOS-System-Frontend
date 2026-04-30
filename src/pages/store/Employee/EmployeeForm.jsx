import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'



const EmployeeForm = ({initialData, onSubmit, roles}) => {
    const formik = useFormik({
        initialValues: initialData || {
            fullName: "",
            email:"",
            password:"",
            phone:"",
            role:"",
            branchId: initialData?initialData.branchId : ""
        },
        onSubmit:(values) => {
            console.log("employee information", values);
        }
    })
    useEffect(()=>{
        if(initialData){
            formik.setValues(initialData)
        }else{
            formik.resetForm()
        }
    },[initialData])
  return (

    <form onSubmit={formik.handleSubmit} className={'space-y-2'}>
        <div className='space-y-2'>
            <Label>Full Name</Label>
            <Input 
                name="fullName" 
                value={formik.values.fullName} 
                onChange={formik.handleChange}
                placeholder={'Enter Employee Name'}
                />
        </div>
        <div className='space-y-2'>
            <Label>Email</Label>
            <Input 
                name="email" 
                value={formik.values.email} 
                onChange={formik.handleChange}
                placeholder={'Enter Email'}
                />
        </div>
         <div className='space-y-2'>
            <Label>Password</Label>
            <Input 
                name="password" 
                value={formik.values.password} 
                onChange={formik.handleChange}
                placeholder={'Enter Password'}
                />
        </div>
        <div className='space-y-2'>
            <Label>Phone</Label>
            <Input 
                name="phone" 
                value={formik.values.phone} 
                onChange={formik.handleChange}
                placeholder={'Enter Phone'}
                />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='space-y-2'>
                <Label>Role</Label>
                <Select value={formik.values.role} onValueChange = {(value)=> formik.setFieldValue("role", value)}>
                    <SelectTrigger className={"w-full"}>
                        <SelectValue placeholder="select role"/>
                        <SelectContent>
                            {roles.map((r)=>
                            <SelectItem key={r} value={r}>
                                {r}
                            </SelectItem>)}
                        </SelectContent>
                    </SelectTrigger>
                </Select>

            </div>
        </div>
        <div>
            <Button onClick={()=>console.log("values ---", formik.values)} type={"submit"}>{initialData?"save changes":"Add Employee"}</Button>
            </div>

    </form>
  )
}

export default EmployeeForm