const hero = require('../models/hero')
const Hero = require('../models/hero')

const controllerHero = {
    create: async (req,res) =>{
        try{
            const faction = req.body.faction
            const hp = req.body.hp
            await Hero.create({
                first_name:first_name, 
                family_name:faction,
                hp:hp
            })
            res.json({msg:'Created'})
        } catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    getHeroes: async (req,res) =>{
        try{
            const heros = await Hero.find({})
            res.json(heros)
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    getHeroForId: async (req,res) =>{
        try{
            const {id} = req.params
            const Hero = await Hero.findById(id)
            res.json(hero)
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    updateHero: async (req,res) =>{
        try{
            const {id} = req.params
            const first_name = req.body.first_name
            const faction = req.body.faction
            const hp = req.body.hp
            await Hero.findByIdAndUpdate(id,{
                first_name:first_name, 
                faction:faction,
                hp:hp
            })
            res.json({msg:'Update'})
        }catch(err){
            console.error(err)
            return res.status(500).json({msg:err.message})            
        }
    },
    deleteHero:async (req,res)=>{
        try {
            const {id} = req.params
            await Hero.findByIdAndDelete(id)
            res.json({msg:'Delete'})     
        } catch (err) {
            console.error(err)
            return res.status(500).json({msg:err.message})
        }
    }

}

module.exports = controllerHero