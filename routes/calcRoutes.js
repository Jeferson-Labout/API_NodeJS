const router = require('express').Router()
const res = require('express/lib/response')
const {Calc} = require('../models/Calc')
const queue = require("../rabbitMQ/queue");


router.post('/', async (req, res) => {
      
     
    

    try {
        const calc = await Calc.create(req.body)
        queue.sendToQueue("Calc", calc);

        // res.status(201).json({ message: 'Calculo realizado com sucesso ' })
        // res.status(201).json(calc)
        return res.send({calc});

       
    } catch (error) {
        return res.status(400).send({error:'Soma não enviada!'})
    }

})

router.get('/', async(req, res)=>{
try {
    const calc = await Calc.find()
    res.status(200).json(calc)


} catch (error) {
    res.status(500).json({error:error})
}

})

module.exports = router