import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const recentSales = [
    { branch: "Main Store", amount: "$1,234", date: "Today" },
    { branch: "Downtown Branch", amount: "$891", date: "Today" },
    { branch: "West Side Location", amount: "$644", date: "Yesterday" },
    { branch: "East End Shop", amount: "$1,021", date: "Yesterday" }
];

const RecentSales = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className={"text-lg font-semibold"}>Recent Sales</CardTitle>
            </CardHeader>

            <CardContent>
                <div className='space-y-4'>
                    {recentSales.map((item) =>
                        <div className='flex items-center justify-between border-b pb-3 last:border-0 last:pb-0'>
                            <div>
                                <p className='font-medium'>{item.branch}</p>
                                <p className='text-sm text-gray-500 '>{item.date}</p>
                            </div>
                            <p className='font-semibold'>{item.amount}</p>
                        </div>
                    )}



                </div>
            </CardContent>
        </Card>
    )
}

export default RecentSales