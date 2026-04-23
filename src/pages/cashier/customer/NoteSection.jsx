import { FileText } from 'lucide-react';
import React from 'react'

const NoteSection = () => {
  const [note, setNote] = React.useState();

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  }
  return (
    <div className='p-4 border-b'>
      <h2 className='text-lg font-semibold mb-3 flex items-center '>
        <FileText className='w-4 h-4 mr-2' />Note
      </h2>
      <div className='space-y-3'>
        <textarea
          className='w-full p-2 border rounded-sm text-sm resize-none' 
          value={note} 
          onChange={handleNoteChange} 
          placeholder='Enter the note'/>
      </div>
    </div>
  )
}

export default NoteSection