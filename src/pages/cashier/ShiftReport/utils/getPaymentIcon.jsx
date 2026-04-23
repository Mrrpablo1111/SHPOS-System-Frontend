import { Banknote, CreditCard, ScanQrCodeIcon } from "lucide-react"

export const getPaymentIcon = (method)=> {
    switch(method){
        case "CASH":
            return <Banknote className="w-4 h-4 text-green-600"/>


        case "CARD":
            return <CreditCard className="w-4 h-4 text-blue-600"/>

        case "QR":
            return <ScanQrCodeIcon className="w-4 h-4 text-purple-600"/>
    }
}