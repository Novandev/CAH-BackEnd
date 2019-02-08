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

router.get('/firstExpansion',(req,res)=>{
    firstExpansionBlack.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})


router.get('/secondExpansion',(req,res)=>{
    secondExpansionBlack.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/thirdExpansion',(req,res)=>{
    thirdExpansionBlack.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/fourthExpansion',(req,res)=>{
    fourthExpansionBlack.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/fifthExpansion',(req,res)=>{
    fifthExpansionBlack.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/sixthExpansion',(req,res)=>{
    sixthExpansionBlack.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/greenboxExpansion',(req,res)=>{
    greenboxExpansionBlack.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/ninetiesNostalgia',(req,res)=>{
    ninetiesNostalgiaBlack.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/fantasyPack',(req,res)=>{
    fantasyPackBlack.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/foodPack',(req,res)=>{
    foodPackBlack.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/sciencePack',(req,res)=>{
    sciencePackBlack.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/worldWideWebPack',(req,res)=>{
    worldWideWebPackBlack.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/voteForHillaryPack',(req,res)=>{
    voteForHillaryPackBlack.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/voteForTrumpPack',(req,res)=>{
    voteForTrumpPackBlack.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/trumpSurvivalPack',(req,res)=>{
    trumpSurvivalPackBlack.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})


router.get('/holidayPack2012',(req,res)=>{
    holidayPack2012Black.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/holidayPack2013',(req,res)=>{
    holidayPack2013Black.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})


router.get('/paxEast2013',(req,res)=>{
    paxEast2013Black.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/paxEast2014',(req,res)=>{
    paxEast2014Black.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/paxPrime2013',(req,res)=>{
    paxPrime2013Black.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/paxEast2014PanelPack',(req,res)=>{
    paxEast2014PanelPackBlack.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/paxPrime2014PanelPack',(req,res)=>{
    paxPrime2014PanelPackBlack.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/houseOfCardsAgainstHumanity',(req,res)=>{
    houseOfCardsAgainstHumanityBlack.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/rejectPack1',(req,res)=>{
    rejectPack1Black.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/rejectPack2',(req,res)=>{
    rejectPack2Black.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/canadian',(req,res)=>{
    canadianBlack.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

module.exports = router;