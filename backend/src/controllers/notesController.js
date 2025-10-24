import Note from "../model/Node.js";

// export  const getAllNotes = (req, res) =>{
//     res.status(200).send("Server is running on Api")
// };
// export async const getAllNotes = (req, res) =>{

//     try {
        
//         const note = await Note.find();
//         res.status(200).json(note)
    

//     } catch (error) {
//             res.status(200).send("Server is running on Api")
//     }
   
// };

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({createdAt: -1});  
    // sort({createdAt: -1})  means newest first
    return res.status(200).json(notes); // send once and return
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export const getAllNotesById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if(!note) return res.status(404).json({message:"Note found"})
    return res.status(200).json(note); // send once and return
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


// export async function getAllNotes (req, res){
//     try {
//         const notes = await Note.find();
//         res.status(200).json(notes)
//     } catch (error) {

//         console.error("Error occur", Error);
//         console.log({message: "Internal server error" })

        
//     }
//     res.status(200).send("Server is running on Api")
// } 

export const createNote = async(req, res) =>{

    try{
    //     const {title, content} = req.body

    //     const newNote = new Note ({title, content})

    //    const saveNote = await newNote.save()

    //    another method of creating by create method

       const newNote = await Note.create(req.body);
       console.log(newNote);
       res.status(201).json(newNote)
  

    //    res.status(201).json(newNote)
    //    res.status(201).json(saveNote)
    //    res.status(201).json({ message: "created successfully" })
    } catch(error){
       console.error("Error in create controller", error)

       return res.status(500).json({message: "Internal server error"})
    }
   
    } 


export const updateNote = async(req, res) =>{

    try {
        // const{title, content} = req.body;
        // const updateNote = await Note.findByIdAndUpdate(
        //     req.params.id,{title, content},{
        //         new:true,
        //     }
        // );

        // method of update the data  
        const updateNote = await Note.findByIdAndUpdate(req.params.id, req.body,
            {
            new:true,
        
             })
        if (!updateNote) return res.status(404).json({message:"note not found"})
            res.status(201).json(
        {
           message: "Update successfully"
        })
         } catch (error) {
        
        console.error("Error in create controller", error)

       return res.status(500).json({message: "Internal server error"})
    }
    
};

export const deleteNote = async (req, res) =>{

    try {

        const deleteNote = await Note.findByIdAndDelete(req.params.id )
        if(!deleteNote) return res.status(404).json({message:"Note not found"});
        res.json({message:"Note deleted successfully"})
        
    } catch (error) {
         console.error("Error in create controller", error)

       return res.status(500).json({message: "Internal server error"})
    
    }
    
}