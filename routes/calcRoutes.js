const router = require('express').Router()
const res = require('express/lib/response')
const Calc = require('../models/Calc')
const queue = require("../rabbitMQ/queue");


router.post('/', async (req, res) => {

  

       
    
    const { number1, number2, status } = req.body
    if(!number1){
        res.status(422).json({error:'Numero é obrigatorio!'})
    }

    const calc = {
        number1,
        number2,
        status,
        resultado: number1 + number2
    }

    try {
        await Calc.create(calc)
        queue.sendToQueue("Calc", Calc.create(calc));

        // res.status(201).json({ message: 'Calculo realizado com sucesso ' })
        res.status(201).json(calc)
       
    } catch (error) {
        res.status(500).json({ error: error })
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