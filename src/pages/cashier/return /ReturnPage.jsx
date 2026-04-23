import React, { useState } from 'react'

import OrderDetailSection from './OrderDetailSection';
import ReturnItemsSection from './ReturnItemsSection';
import OrderTableRefund from './OrderTableRefund';
import ReturnReciptDialog from './ReturnReciptDialog';


const ReturnPage = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [showReturnReciptDialog, setShowReturnReciptDialog] = useState(false);
    const handleSelectOrder = (order) => {
        console.log("selected order", order);
        setSelectedOrder(order);
    };
    return (
        <div className='h-full flex flex-col'>
            <div className='p-4 bg-card border-b'>
                <h1 className='text-2xl font-bold'>Refund</h1>
            </div>

            <div className='flex-1 flex overflow-hidden'>
                {!selectedOrder ? (
                    <OrderTableRefund handleSelectOrder={handleSelectOrder} />) : (
                    <>
                        <OrderDetailSection selectedOrder={selectedOrder}
                            setSelectedOrder={setSelectedOrder} />
                        <ReturnItemsSection selectedOrder={selectedOrder} setShowReturnReciptDialog={setShowReturnReciptDialog} />
                    </>)}
            </div>
            {selectedOrder &&
                <ReturnReciptDialog
                    showReturnReciptDialog={showReturnReciptDialog}
                    setShowReturnReciptDialog={setShowReturnReciptDialog}
                    selectedOrder={selectedOrder}/>}
        </div>
    )
}

export default ReturnPage