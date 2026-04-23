import { Button } from '@/components/ui/button'
import { ArrowRightIcon, PrinterIcon } from 'lucide-react'
import React from 'react'

const ShiftReportHeader = () => {
  return (
    <div className="bg-card border-b px-4 py-3 sm:px-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        
        {/* Title */}
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Shift Summary
          </h1>
          <p className="text-sm text-muted-foreground">
            Overview of current shift activity
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Button 
            variant="outline" 
            className="flex items-center gap-2 px-3 sm:px-4"
          >
            <PrinterIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Print</span>
          </Button>

          <Button 
            variant="destructive" 
            className="flex items-center gap-2 px-3 sm:px-4"
          >
            <ArrowRightIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>

      </div>
    </div>
  )
}

export default ShiftReportHeader