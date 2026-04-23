import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Edit, User } from 'lucide-react'
import React from 'react'
import CustomerDialog from './CustomerDialog';


  let selectedCustomer = {
        name:"Senghong",
        phone:"010878487"
    };

    selectedCustomer = null;
const CustomerSection = () => {
    const [showCustomerDialog, setShowCustomerDialog] = React.useState(false);
  return (
    <div className='p-4 border-b'>
        <h2 className='text-lg font-semibold mb-3 flex items-center'>
            <User className='w-5 h-5 mr-2'/> Customer
        </h2>

        {selectedCustomer? (
            <Card className={"border-green-400 b g-green-50 dark:bg-green-950 dark:border-green-800"}>
                <CardContent className={"p-3 flex items-center justify-between gap-5"}>
                   <div>
                     <h3 className='font-medium text-green-800 dark:text-green-200'>
                        {selectedCustomer.name}
                    </h3>
                    <p className='text-sm text-green-600 dark:text-green-300'>
                        {selectedCustomer.phone}
                    </p>

                   </div>
                    <div>
                        <Button variant={'outline'} className={"mt-2 w-full"}><Edit/></Button>
                    </div>
                </CardContent>
            </Card>
    ) : (
        <div>

            <Button onClick={()=> setShowCustomerDialog(true)} variant={"outline"}className={"w-full py-5"}>Select</Button>

        </div>
    )}

    <CustomerDialog showCustomerDialog={showCustomerDialog} setShowCustomerDialog={setShowCustomerDialog} />
          
    </div>
  )}



export default CustomerSection