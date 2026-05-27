import React from 'react'

const Note = (props) => {
  const { notes, deleteNote } = props;
  return (
    <div className='flex flex-wrap gap-5 overflow-auto h-[90%]'>
            {notes.map((note,index)=>(
              <div key={index} className='h-52 w-40 px-5 pt-8 pb-4 relative rounded-xl bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/684/non_2x/sticky-note-paper-background-free-png.png)] bg-cover flex flex-col justify-between '>
                <div>
                  <h3 className='leading-tight font-bold text-xl text-black'>{note.title}</h3>
                  <p className='leading-tight mt-3 font-medium text-gray-800 text-xs '>{note.content}</p>
                </div>
                <button onClick={()=>deleteNote(index)}className='bg-red-500 text-white p-1 rounded hover:bg-red-600 font-bold w-full text-xs'>Delete</button>
              </div>
            ))}
            
    </div>
  )
}

export default Note
