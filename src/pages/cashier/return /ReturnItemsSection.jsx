import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import {
    AlertCircle,
    Banknote,
    BadgeCheck,
    CheckCircle2,
   
    CircleDollarSign,
    CreditCard,
    MessageCircleQuestion,
    PackageX,
    PencilLine,
    QrCode,
} from 'lucide-react';
import React, { useState } from 'react';

const returnReasons = [
    "Damaged product",
    "Wrong product",
    "Customer changed mind",
    "Product quality issue",
    "Pricing error",
    "Other",
];

const refundMethods = [
    { key: "CASH", label: "Cash",  Icon: Banknote    },
    { key: "CARD", label: "Card",  Icon: CreditCard  },
    { key: "QR",   label: "QR",    Icon: QrCode      },
];

const reasonIcons = {
    "Damaged product":       <AlertCircle      size={14} className="text-red-400"    />,
    "Wrong product":         <PackageX         size={14} className="text-orange-400" />,
    "Customer changed mind": <MessageCircleQuestion size={14} className="text-blue-400"   />,
    "Product quality issue": <AlertCircle      size={14} className="text-yellow-400" />,
    "Pricing error":         <CircleDollarSign size={14} className="text-purple-400" />,
    "Other":                 <PencilLine       size={14} className="text-gray-400"   />,
};

const ReturnItemsSection = ({ selectedOrder, setShowReturnReciptDialog }) => {
    const [returnReason, setReturnReason] = useState("");
    const [otherReason,  setOtherReason]  = useState("");
    const [refundMethod, setRefundMethod] = useState("CASH");
    const [success,      setSuccess]      = useState(false);
    

   
    
    const processRefund = ()=>{
        setShowReturnReciptDialog(true);
    }
    return (
        <div className="w-1/2 p-4 flex flex-col">
            <Card className="mt-4  overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-border/50">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center">
                            <PackageX size={16} className="text-blue-500" />
                        </div>
                        <div>
                            <p className="text-sm font-medium leading-tight">Process Return</p>
                            <p className="text-xs text-muted-foreground leading-tight mt-0.5">Issue refund to customer</p>
                        </div>
                    </div>
                    {selectedOrder?.id && (
                        <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full border border-border/50">
                            #{selectedOrder.id}
                        </span>
                    )}
                </div>

                <CardContent>
                    <div className="space-y-5">

                        {/* Return Reason */}
                        <div className="space-y-1.5">
                            <Label className="text-xs text-muted-foreground flex items-center gap-1.5">
                                <MessageCircleQuestion size={12} />
                                Return Reason
                            </Label>
                            <Select value={returnReason} onValueChange={setReturnReason}>
                                <SelectTrigger className="h-10 text-sm rounded-lg border-border/60 bg-background">
                                    <SelectValue placeholder="Select a reason…" />
                                </SelectTrigger>
                                <SelectContent>
                                    {returnReasons.map((reason) => (
                                        <SelectItem key={reason} value={reason}>
                                            <span className="flex items-center gap-2">
                                                {reasonIcons[reason]}
                                                {reason}
                                            </span>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Other Reason */}
                        {returnReason === "Other" && (
                            <div className="space-y-1.5">
                                <Label className="text-xs text-muted-foreground flex items-center gap-1.5">
                                    <PencilLine size={12} />
                                    Specify Reason
                                </Label>
                                <Textarea
                                    placeholder="Describe the return reason…"
                                    value={otherReason}
                                    onChange={(e) => setOtherReason(e.target.value)}
                                    className="text-sm rounded-lg border-border/60 resize-none h-20"
                                />
                            </div>
                        )}

                        {/* Refund Method */}
                        <div className="space-y-1.5">
                            <Label className="text-xs text-muted-foreground flex items-center gap-1.5">
                                <CreditCard size={12} />
                                Refund Method
                            </Label>
                            <div className="grid grid-cols-3 gap-2">
                                {refundMethods.map(({ key, label, Icon }) => (
                                    <Button
                                        key={key}
                                        onClick={() => setRefundMethod(key)}
                                        className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border text-sm font-medium transition-all duration-150
                                            ${refundMethod === key
                                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 shadow-sm'
                                                : 'border-border/60 bg-background text-muted-foreground hover:border-border hover:text-foreground'
                                            }`}
                                    >
                                        <Icon size={14} />
                                        {label}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="pt-4 border-t border-border/50 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                    <CircleDollarSign size={14} className="text-green-500" />
                                    Total Refund Amount
                                </span>
                                <span className="text-xl font-semibold text-green-600 dark:text-green-400">
                                    ${selectedOrder?.totalAmount?.toFixed(2) ?? '0.00'}
                                </span>
                            </div>

                            <Button
                                className="w-full h-11 gap-2 rounded-lg text-sm font-medium"
                                disabled={!returnReason}
                                onClick={processRefund}
                            >
                                <CheckCircle2 size={15} />
                                Process Refund
                            </Button>

                            {/* Success banner */}
                            {success && (
                                <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
                                    <BadgeCheck size={16} className="text-green-500 shrink-0" />
                                    <div>
                                        <p className="text-xs font-medium text-green-700 dark:text-green-300">
                                            Refund processed successfully
                                        </p>
                                        <p className="text-xs text-green-600 dark:text-green-400 opacity-80">
                                            ${selectedOrder?.totalAmount?.toFixed(2) ?? '0.00'} · {refundMethod} · {returnReason}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ReturnItemsSection;