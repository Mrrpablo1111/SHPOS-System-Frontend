import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PlusIcon, SearchIcon } from 'lucide-react'
import React from 'react'
import {motion} from 'framer-motion'
import { fadeSlide, tapButton } from '@/lib/animation'

const CustomerSearch = ({searchQuery, onSearchChange, onAddCustomer}) => {
  return (
    <motion.div variants={fadeSlide} initial="hidden" animate="show" className='p-4 sm:p-4 border-b'>
        <div className='flex flex-col sm:flex-row gap-2'>

            {/* SearchInput */}
            <div className='relative flex-1'>
                <SearchIcon className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4'/>
                <motion.div whileFocus={{scale:1.01}}>
                    <Input 
                    value={searchQuery} 
                    type="text" 
                    placeholder="Search Customer..."  
                    className={"pl-10 text-sm sm:text-base"} 
                    onChange = {(e)=>onSearchChange(e.target.value)}/>
                </motion.div>
            </div>

            {/* Button */}
            <motion.div whileHover={{scale:1.03}} {...tapButton}>
            <Button onClick={onAddCustomer} className={"w-full sm:w-auto flex items-center justify-center gap-2"}>
                <PlusIcon className='h-4 w-4 mr-2'/>
                <span className='hidden sm:inline'>Add Customer</span>
                <span className='sm:hidden'>Add</span>
            </Button>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default CustomerSearch