import { NotebookIcon } from 'lucide-react'
 
import { Link } from 'react-router'

const NoteNotFund = () => {
  return (
    <div className='min-h-screen'>
        <div className=" flex flex-col items-center justify-center py-16 space-y-6">
           <div className="bg-primary/10 rounded-full ">
              <NotebookIcon className='size-10 text-primary'/>
           </div>
           <h3 className="text-2xl font-bold">No notes yet</h3>
           <p className="text-base-content/70">
           create your Note</p>
           <Link to="/AddPage" className='btn btn-primary'>
           create your first Note</Link>
        </div>  
    </div>
  )
}

export default NoteNotFund