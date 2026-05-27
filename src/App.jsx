import React , {useState} from 'react'
import Note from './components/Note';

const App = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  let savedNotes = localStorage.getItem("notes");

  if (savedNotes) {
    savedNotes = JSON.parse(savedNotes);
  } else {
    savedNotes = [];
  }
  const [notes, setNotes] = useState(savedNotes);

  const deleteNote = (idx)=>{
    const copyNotes=[...notes];
    copyNotes.splice(idx,1);
    setNotes(copyNotes);
    localStorage.setItem("notes", JSON.stringify(copyNotes));
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    
    const newNote = [...notes, {title, content}];
    setNotes(newNote);
    localStorage.setItem("notes", JSON.stringify(newNote));

    setTitle('');
    setContent('');
  }

  return (
    <div className='bg-black text-white h-screen lg:flex'>
      <form onSubmit={(e)=>{ submitHandler(e)}}className=' lg:w-1/2 flex flex-col gap-5 p-10'>
        <h1 className='text-2xl font-bold mb-5'>Create a Note</h1>
          <input 
          className='bg-gray-900 text-white w-full p-3 rounded font-medium' 
          value={title} 
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
          type="text" 
          placeholder='Note Title'
          />

          <textarea 
          className='bg-gray-900 text-white w-full p-3 rounded font-medium'
          value={content} 
          onChange={(e)=>{
            setContent(e.target.value)
          }}
          placeholder='write a note here...' rows={5} 
          />

          <button 
          className='bg-blue-500 text-white w-full p-3 rounded hover:bg-blue-600  
          font-medium'>Add Note
          </button>
      </form>

      <div className='p-10 lg:w-1/2 bg-gray-900'>
          <h1 className='text-2xl font-bold mb-5'>Your Notes</h1>
          <Note notes={notes} deleteNote={deleteNote} />
      </div>
    </div>
  )
}

export default App
