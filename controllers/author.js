const Author = require('../models/author')

const controllerAuthor = {
    create: async (req,res) =>{
        try{
            const first_name = req.body.first_name
            const family_name = req.body.family_name
            await Author.create({
                first_name:first_name, 
                family_name:family_name
            })
            res.json({msg:'Created'})
        } catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    getAuthors: async (req,res) =>{
        try{
            const authors = await Author.find({})
            res.json(authors)
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    getAuthorForId: async (req,res) =>{
        try{
            const {id} = req.params
            const author = await Author.findById(id)
            res.json(author)
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    updateAuthor: async (req,res) =>{
        try{
            const {id} = req.params
            const first_name = req.body.first_name
            const family_name = req.body.family_name
            await Author.findByIdAndUpdate(id,{
                first_name:first_name, 
                family_name:family_name
            })
            res.json({msg:'Update'})
        }catch(err){
            console.error(err)
            return res.status(500).json({msg:err.message})            
        }
    },
    deleteAuthor:async (req,res)=>{
        try {
            const {id} = req.params
            await Author.findByIdAndDelete(id)
            res.json({msg:'Delete'})     
        } catch (err) {
            console.error(err)
            return res.status(500).json({msg:err.message})
        }
    }

}

module.exports = controllerAuthor