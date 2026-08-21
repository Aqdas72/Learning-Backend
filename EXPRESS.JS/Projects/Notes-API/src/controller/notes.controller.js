import { readfile, writefile } from "../utils/file.utils.js";

//* Creating a Notes
export const createNotes = async(req,res)=>{
        const {title,content} = req.body;//data send by user
        /*
         * {
                "title":" ",
                "content":" ",
         * }
        */
        if (!title || !content) {
            return res.status(400).json({
                message: "Title and content are required"
            });
        }
        const notes = await readfile();//get the readfile data == []
        console.log(notes);
        const newNote = {
            id:Date.now(),
            title,
            content
        }
        notes.push(newNote);
        writefile(notes);
        res.status(201).json(newNote);

}

//*Reading an existing notes
export const readNotes = async(req,res)=>{
    const notes = await readfile();
    if(notes.length === 0){
        return res.status(404).json({message:"No data Exits"});
    }
    res.status(200).json(notes);
}

//*updating an existing notes
export const updateNotes = async(req,res)=>{
    const {id} = req.params;//getting id for update
    const {title,content} = req.body;//getting data to update
    const notes = await readfile();//array
    const NoteIndex = notes.findIndex((data)=>data.id === Number(id));//[{id:id}]
    if (NoteIndex === -1) {
    return res.status(404).json({
        message: "Note not found"
    });
}
    notes[NoteIndex]={
        ...notes[NoteIndex],
        ...(title !== undefined && { title }),
        ...(content !== undefined && { content }),
    }
    writefile(notes);
    res.json({
        message:"Note is updated",
        data:notes[NoteIndex]
        }
    )   
}

//*deleting an existing notes
export const deleteNote = async(req,res)=>{
    const {id} = req.params;
    const notes = await readfile();
    const NoteIndex = notes.findIndex((note)=>note.id === parseInt(id));
    if(NoteIndex === -1){
        return res.json({message:"No such Note is there"});
    }
    const deletednote = notes[NoteIndex]
    notes.splice(NoteIndex,1);//here note.splice return the deleted note
    res.status(200).json({
        message:"Note is deleted successfuly",
        deletednote,
    })
    writefile(notes);

}