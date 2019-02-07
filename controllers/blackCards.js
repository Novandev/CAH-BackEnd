const router = require('express').Router();

const{
    allBlackCards,
    baseSetBlack,
    firstExpansionBlack,
    secondExpansionBlack,
    thirdExpansionBlack,
    fourthExpansionBlack,
    fifthExpansionBlack,
    sixthExpansionBlack,
    greenboxExpansionBlack,
    ninetiesNostalgiaBlack,
    fantasyPackBlack,
    foodPackBlack,
    sciencePackBlack,
    worldWideWebPackBlack,
    voteForHillaryPackBlack,
    voteForTrumpPackBlack,
    trumpSurvivalPackBlack,
    holidayPack2012Black,
    holidayPack2013Black,
    paxEast2013Black,
    paxPrime2013Black,
    paxEast2014Black,
    paxEast2014PanelPackBlack,
    paxPrime2014PanelPackBlack,
    houseOfCardsAgainstHumanityBlack,
    rejectPack1Black,
    rejectPack2Black,
    canadianBlack
} = require('../models/blackCards')





// ----------- Get All Black cards -----------//

router.get('/all',(req,res)=>{
    allBlackCards.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })

})

router.get('/baseset',(req,res)=>{
    baseSetBlack.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})



module.exports = router;