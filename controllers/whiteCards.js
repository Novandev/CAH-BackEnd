const router = require('express').Router();
const{
    allWhiteCards,
    baseSetWhite,
    firstExpansionWhite,
    secondExpansionWhite,
    thirdExpansionWhite,
    fourthExpansionWhite,
    fifthExpansionWhite,
    sixthExpansionWhite,
    greenboxExpansionWhite,
    ninetiesNostalgiaWhite,
    boxExpansionWhite,
    fantasyPackWhite,
    foodPackWhite,
    sciencePackWhite,
    worldWideWebPackWhite,
    voteForHillaryPackWhite,
    voteForTrumpPackWhite,
    trumpSurvivalPackWhite,
    holidayPack2012White,
    holidayPack2013White,
    paxEast2013White,
    paxPrime2013White,
    paxEast2014White,
    paxEast2014PanelPackWhite,
    paxPrime2014PanelPackWhite,
    houseOfCardsAgainstHumanityWhite,
    rejectPack1White,
    rejectPack2White,
    canadianWhite
} = require('../models/whiteCards')




router.get('/all',(req,res)=>{
    allWhiteCards.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })

})

router.get('/baseset',(req,res)=>{
    baseSetWhite.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/firstExpansion',(req,res)=>{
    firstExpansionWhite.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})


router.get('/secondExpansion',(req,res)=>{
    secondExpansionWhite.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/thirdExpansion',(req,res)=>{
    thirdExpansionWhite.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/fourthExpansion',(req,res)=>{
    fourthExpansionWhite.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/fifthExpansion',(req,res)=>{
    fifthExpansionWhite.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/sixthExpansion',(req,res)=>{
    sixthExpansionWhite.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/greenboxExpansion',(req,res)=>{
    greenboxExpansionWhite.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/ninetiesNostalgia',(req,res)=>{
    ninetiesNostalgiaWhite.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/boxExpansion',(req,res)=>{
    boxExpansionWhite.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})


router.get('/fantasyPack',(req,res)=>{
    fantasyPackWhite.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/foodPack',(req,res)=>{
    foodPackWhite.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/sciencePack',(req,res)=>{
    sciencePackWhite.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/worldWideWebPack',(req,res)=>{
    worldWideWebPackWhite.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/voteForHillaryPack',(req,res)=>{
    voteForHillaryPackWhite.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/voteForTrumpPack',(req,res)=>{
    voteForTrumpPackWhite.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/trumpSurvivalPack',(req,res)=>{
    trumpSurvivalPackWhite.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})


router.get('/holidayPack2012',(req,res)=>{
    holidayPack2012White.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/holidayPack2013',(req,res)=>{
    holidayPack2013White.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})


router.get('/paxEast2013',(req,res)=>{
    paxEast2013White.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/paxEast2014',(req,res)=>{
    paxEast2014White.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/paxPrime2013',(req,res)=>{
    paxPrime2013White.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/paxEast2014PanelPack',(req,res)=>{
    paxEast2014PanelPackWhite.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/paxPrime2014PanelPack',(req,res)=>{
    paxPrime2014PanelPackWhite.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/houseOfCardsAgainstHumanity',(req,res)=>{
    houseOfCardsAgainstHumanityWhite.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/rejectPack1',(req,res)=>{
    rejectPack1White.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/rejectPack2',(req,res)=>{
    rejectPack2White.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

router.get('/canadian',(req,res)=>{
    canadianWhite.find({}).then(cards =>{
        res.status(200).json(cards)
    }).catch(err =>{
        res.status(400).send(err.message)
    })
})

module.exports = router;