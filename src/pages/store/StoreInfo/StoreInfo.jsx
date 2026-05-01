import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Edit } from 'lucide-react'
import React, { useState } from 'react'
import BasicInfo from './BasicInfo'
import ContactInfo from './ContactInfo'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import EditStoreForm from './EditStoreForm'
import { getInitialValues } from './formUnit'


const storeData = {
    brand: 'Senghong',
    description: "shop in minute",
    storeType: "Retail Store",
    contact: {
        address: "Songkat dongtong krong khemerak phumen kohkong province",
        phone: "01234567",
        email:"senghong@gmail.com"
    }
}
const StoreInfo = () => {
    const [isOpenEditStoreDialog, setIsOpenEditStoreDialog] = useState(false);
    const onSubmit=()=>{
        setIsOpenEditStoreDialog(false)
    }
    const onCancel=()=>{
        setIsOpenEditStoreDialog(false)
    }

    return (
       <>
        <Card>
            <CardHeader>
                <div className='flex justify-between items-center'>
                    <CardTitle>Store information</CardTitle>
                    <Button variant='outline' size='sm' className={"rounded-full"} onClick={()=>setIsOpenEditStoreDialog(true)}><Edit className='w-4 h-4' /> Edit Detials</Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className='grid md:grid-cols-2 gap-6'>
                    <BasicInfo storeData={storeData} />
                    <ContactInfo storeData={storeData} />
                </div>

                <div className='mt-4 border-t border-gray-200'>
                    <p className='text-sm text-muted-foreground'>Store created on {new Date().toLocaleString()}</p>
                </div>
            </CardContent>
        </Card>
        <Dialog open={isOpenEditStoreDialog} onOpenChange={setIsOpenEditStoreDialog}>
            <DialogContent className={"sm:max-w-[600px] max-h-[90vh] overflow-y-auto"}>
                <DialogHeader>
                    <DialogTitle>Edit Store Details</DialogTitle>
                </DialogHeader>
                <EditStoreForm initialValues={getInitialValues(storeData)}/>
            </DialogContent>

        </Dialog>
        </>
    )
}

export default StoreInfo