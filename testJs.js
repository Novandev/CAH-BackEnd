// NOTE: ONLY RUN THIS FILE IF YOU DO NOT HAVE THE DB YET


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CAH', {useNewUrlParser: true});

// ---------- VARIABLE AND FROM FILE SECTION ---------- //

// All cards from file

const cards = require('./fullCardsList')

const allBlackcards = cards.allCards['blackCards']

const allWhiteCards = cards.allCards['whiteCards']


// ---------- SECTION FOR MODEL DEFINITION AND INSTANTIAION ---------- //

// const allBlackCardsModel = mongoose.model('AllBlackCards', { text: String, pick: Number });
// const allWhiteCardsModel = mongoose.model('AllWhiteCards', { text: String});
// const baseSetBlackModel = mongoose.model('BaseSetBlackCards', { text: String, pick: Number });
// const baseSetWhiteModel = mongoose.model('BaseSetWhiteCards', { text: String});

// const firstExpansionBlackModel = mongoose.model('FirstExpansionBlackCards', { text: String, pick: Number });
// const firstExpansionWhiteModel = mongoose.model('FirstExpansionWhiteCards', { text: String});

// const secondExpansionBlackModel = mongoose.model('secondExpansionBlackCards', { text: String, pick: Number });
// const secondExpansionWhiteModel = mongoose.model('secondExpansionWhiteCards', { text: String});

// const thirdExpansionBlackModel = mongoose.model('thirdExpansionBlackCards', { text: String, pick: Number });
// const thirdExpansionWhiteModel = mongoose.model('thirdExpansionWhiteCards', { text: String});

// const fourthExpansionBlackModel = mongoose.model('fourthExpansionBlackCards', { text: String, pick: Number });
// const fourthExpansionWhiteModel = mongoose.model('fourthExpansionWhiteCards', { text: String});
//
// const fifthExpansionBlackModel = mongoose.model('fifthExpansionBlackCards', { text: String, pick: Number });
// const fifthExpansionWhiteModel = mongoose.model('fifthExpansionWhiteCards', { text: String});
//
// const sixthExpansionBlackModel = mongoose.model('sixthExpansionBlackCards', { text: String, pick: Number });
// const sixthExpansionWhiteModel = mongoose.model('sixthExpansionWhiteCards', { text: String});

// const greenboxExpansionBlackModel = mongoose.model('greenboxExpansionBlackCards', { text: String, pick: Number });
// const greenboxExpansionWhiteModel = mongoose.model('greenboxExpansionWhiteCards', { text: String});

//
// const ninetiesNostalgiaBlackModel = mongoose.model('ninetiesNostalgiaBlackCards', { text: String, pick: Number });
// const ninetiesNostalgiaWhiteModel = mongoose.model('ninetiesNostalgiaWhiteCards', { text: String});

// const boxExpansionWhiteModel = mongoose.model('boxExpansionWhiteCards', { text: String});

// const fantasyPackBlackModel = mongoose.model('fantasyPackBlackCards', { text: String, pick: Number });
// const fantasyPackWhiteModel = mongoose.model('fantasyPackWhiteCards', { text: String});

// const foodPackBlackModel = mongoose.model('foodPackBlackCards', { text: String, pick: Number });
// const foodPackWhiteModel = mongoose.model('foodPackWhiteCards', { text: String});

// const sciencePackBlackModel = mongoose.model('sciencePackBlackCards', { text: String, pick: Number });
// const sciencePackWhiteModel = mongoose.model('sciencePackWhiteCards', { text: String});

// const worldWideWebPackBlackModel = mongoose.model('worldWideWebPackBlackCards', { text: String, pick: Number });
// const worldWideWebPackWhiteModel = mongoose.model('worldWideWebPackWhiteCards', { text: String});

// const voteForHillaryPackBlackModel = mongoose.model('voteForHillaryPackBlackCards', { text: String, pick: Number });
// const voteForHillaryPackWhiteModel = mongoose.model('voteForHillaryPackWhiteCards', { text: String});

// const voteForTrumpPackBlackModel = mongoose.model('voteForTrumpPackBlackCards', { text: String, pick: Number });
// const voteForTrumpPackWhiteModel = mongoose.model('voteForTrumpPackWhiteCards', { text: String});

// const trumpSurvivalPackBlackModel = mongoose.model('trumpSurvivalPackBlackCards', { text: String, pick: Number });
// const trumpSurvivalPackWhiteModel = mongoose.model('trumpSurvivalPackWhiteCards', { text: String});

// const holidayPack2012BlackModel = mongoose.model('holidayPack2012BlackCards', { text: String, pick: Number });
// const holidayPack2012WhiteModel = mongoose.model('holidayPack2012WhiteCards', { text: String});

// const holidayPack2013BlackModel = mongoose.model('holidayPack2013BlackCards', { text: String, pick: Number });
// const holidayPack2013WhiteModel = mongoose.model('holidayPack2013WhiteCards', { text: String});

// const paxEast2013BlackModel = mongoose.model('paxEast2013BlackCards', { text: String, pick: Number });
// const paxEast2013WhiteModel = mongoose.model('paxEast2013WhiteCards', { text: String});

// const paxPrime2013BlackModel = mongoose.model('paxPrime2013BlackCards', { text: String, pick: Number });
// const paxPrime2013WhiteModel = mongoose.model('paxPrime2013WhiteCards', { text: String});

// const paxEast2014BlackModel = mongoose.model('paxEast2014BlackCards', { text: String, pick: Number });
// const paxEast2014WhiteModel = mongoose.model('paxEast2014WhiteCards', { text: String});

// const paxEast2014PanelPackBlackModel = mongoose.model('paxEast2014PanelPackBlackCards', { text: String, pick: Number });
// const paxEast2014PanelPackWhiteModel = mongoose.model('paxEast2014PanelPackWhiteCards', { text: String});

// const paxPrime2014PanelPackBlackModel = mongoose.model('paxPrime2014PanelPackBlackCards', { text: String, pick: Number });
// const paxPrime2014PanelPackWhiteModel = mongoose.model('paxPrime2014PanelPackWhiteCards', { text: String});

// const houseOfCardsAgainstHumanityBlackModel = mongoose.model('houseOfCardsAgainstHumanityBlackCards', { text: String, pick: Number });
// const houseOfCardsAgainstHumanityWhiteModel = mongoose.model('houseOfCardsAgainstHumanityWhiteCards', { text: String});

// const rejectPack1BlackModel = mongoose.model('rejectPack1BlackCards', { text: String, pick: Number });
// const rejectPack1WhiteModel = mongoose.model('rejectPack1WhiteCards', { text: String});

// const rejectPack2BlackModel = mongoose.model('rejectPack2BlackCards', { text: String, pick: Number });
// const rejectPack2WhiteModel = mongoose.model('rejectPack2WhiteCards', { text: String});

// const canadianBlackModel = mongoose.model('canadianBlackCards', { text: String, pick: Number });
// const canadianWhiteModel = mongoose.model('canadianWhiteCards', { text: String});


// ---------- SECTION FOR SLICING BASED OFF OF CARD SET INDICES ---------- //

// Slices for Base Set
// const baseSetBlackCards = allBlackcards.slice(0,90)

// const baseSetWhiteCards = allWhiteCards.slice(0,460)


// Slices for The First Expansion
// const firstExpansionBlack = allBlackcards.slice(90,110)

// const firstExpansionWhite = allWhiteCards.slice(460,540)

// Slices for The Second Expansion
// const secondExpansionBlack = allBlackcards.slice(110,135)

// const secondExpansionWhite = allWhiteCards.slice(540,615)

// Slices for The third Expansion
// const thirdExpansionBlack = allBlackcards.slice(135,160)

// const thirdExpansionWhite = allWhiteCards.slice(615,690)


// Slices for The fourth Expansion
// const fourthExpansionBlack = allBlackcards.slice(160,190)

// const fourthExpansionWhite = allWhiteCards.slice(690,760)

// Slices for The fifth Expansion
// const fifthExpansionBlack = allBlackcards.slice(190,215)

// const fifthExpansionWhite = allWhiteCards.slice(760,835)

// Slices for The sixth Expansion
// const sixthExpansionBlack = allBlackcards.slice(215,240)

// const sixthExpansionWhite = allWhiteCards.slice(835,910)

// const greenboxExpansionBlack = allBlackcards.slice(240,295)
// const greenboxExpansionWhite = allWhiteCards.slice(910,1155)


// const ninetiesNostalgiaBlack = allBlackcards.slice(295,302)
// const ninetiesNostalgiaWhite = allWhiteCards.slice(1155,1178)

// const boxExpansionWhite =  allWhiteCards.slice(1178,1199)

// const fantasyPackBlack = allBlackcards.slice(302,308)
// const fantasyPackWhite = allWhiteCards.slice(1199,1225)

// const foodPackBlack = allBlackcards.slice(308,314)
// const foodPackWhite = allWhiteCards.slice(1225,1249)

// const sciencePackBlack = allBlackcards.slice(314,321)
// const sciencePackWhite = allWhiteCards.slice(1249,1272)

// const worldWideWebPackBlack = allBlackcards.slice(321,330)
// const worldWideWebPackWhite = allWhiteCards.slice(1272,1293)

// const voteForHillaryPackBlack = allBlackcards.slice(330,332)
// const voteForHillaryPackWhite = allWhiteCards.slice(1293,1304)

// const voteForTrumpPackBlack = allBlackcards.slice(332,335)
// const voteForTrumpPackWhite = allWhiteCards.slice(1304,1316)

// const trumpSurvivalPackBlack = allBlackcards.slice(335,338)
// const trumpSurvivalPackWhite = allWhiteCards.slice(1316,1338)

// const holidayPack2012Black = allBlackcards.slice(338,345)
// const holidayPack2012White = allWhiteCards.slice(1338,1361)

// const holidayPack2013Black = allBlackcards.slice(345,354)
// const holidayPack2013White = allWhiteCards.slice(1361,1382)

// const paxEast2013Black = allBlackcards.slice(354,360)
// const paxEast2013White = allWhiteCards.slice(1382,1406)

// const paxPrime2013Black = allBlackcards.slice(360,367)
// const paxPrime2013White = allWhiteCards.slice(1406,1443)

// const paxEast2014Black = allBlackcards.slice(367,372)
// const paxEast2014White = allWhiteCards.slice(1443,1465)

// const paxEast2014PanelPackBlack = allBlackcards.slice(372,374)
// const paxEast2014PanelPackWhite = allWhiteCards.slice(1465,1472)

// const paxPrime2014PanelPackBlack = allBlackcards.slice(374,379)
// const paxPrime2014PanelPackWhite = allWhiteCards.slice(1472,1478)

// const houseOfCardsAgainstHumanityBlack = allBlackcards.slice(382,391)
// const houseOfCardsAgainstHumanityWhite = allWhiteCards.slice(1478,1493)

// const rejectPack1Black = allBlackcards.slice(391,399)
// const rejectPack1White = allWhiteCards.slice(1493,1509)

// const rejectPack2Black = allBlackcards.slice(399,409)
// const rejectPack2White = allWhiteCards.slice(1509,1533)

// const canadianBlack = allBlackcards.slice(409,414)
// const canadianWhite = allWhiteCards.slice(1533,1554)


// ---------- SECTION FOR LOADING SLICE DATA INTO MONGODB ---------- //

// creation of all black cards from json file
// for( let card of allBlackcards){
//     // console.log(card)
//     let newCard = new allBlackCardsModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }
// creation of all white cards from json file
// for( let card of allWhiteCards){
//     let newCard = new allWhiteCardsModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }

// creation of base set black model
// for( let card of baseSetBlackCards){
//     // console.log(card)
//     let newCard = new baseSetBlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }

// creation of base set white cards model

// for( let card of baseSetWhiteCards){
//     let newCard = new baseSetWhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of First expansion black model
// for( let card of firstExpansionBlack){
//     let newCard = new firstExpansionBlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }
//
// // creation of First expansion white cards model
//
// for( let card of firstExpansionWhite){
//     let newCard = new firstExpansionWhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }

// // creation of second expansion black model
// for( let card of secondExpansionBlack){
//     let newCard = new secondExpansionBlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }
//
// // creation of second expansion white cards model
//
// for( let card of secondExpansionWhite){
//     let newCard = new secondExpansionWhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of third expansion black model
// for( let card of thirdExpansionBlack){
//     let newCard = new thirdExpansionBlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }
//
// // creation of third expansion white cards model
//
// for( let card of thirdExpansionWhite){
//     let newCard = new thirdExpansionWhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


//  creation of fourth expansion black model
// for( let card of fourthExpansionBlack){
//     let newCard = new fourthExpansionBlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }

// // creation of fourth expansion white cards model

// for( let card of fourthExpansionWhite){
//     let newCard = new fourthExpansionWhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }

// // creation of fifth expansion black model
// for( let card of fifthExpansionBlack){
//     let newCard = new fifthExpansionBlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }

//  creation of fifth expansion white cards model

// for( let card of fifthExpansionWhite){
//     let newCard = new fifthExpansionWhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }

// // creation of sixth expansion black model
// for( let card of sixthExpansionBlack){
//     let newCard = new sixthExpansionBlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of sixth  expansion white cards model

// for( let card of sixthExpansionWhite){
//     let newCard = new sixthExpansionWhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of greenbox expansion black model
// for( let card of greenboxExpansionBlack){
//     let newCard = new greenboxExpansionBlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of greenbox expansion white cards model

// for( let card of greenboxExpansionWhite){
//     let newCard = new greenboxExpansionWhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }

// // creation of 90's nostalgia expansion black model
// for( let card of ninetiesNostalgiaBlack){
//     let newCard = new ninetiesNostalgiaBlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of 90's nostalgia expansion white cards model

// for( let card of ninetiesNostalgiaWhite){
//     let newCard = new ninetiesNostalgiaWhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }




// // creation of Box Expansion white cards model
//
// for( let card of boxExpansionWhite){
//     let newCard = new boxExpansionWhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of fantasy Pack expansion black model
// for( let card of fantasyPackBlack){
//     let newCard = new fantasyPackBlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of fantasy Pack expansion white cards model

// for( let card of fantasyPackWhite){
//     let newCard = new fantasyPackWhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }

// // creation of food Pack expansion black model
// for( let card of foodPackBlack){
//     let newCard = new foodPackBlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of food Pack expansion white cards model

// for( let card of foodPackWhite){
//     let newCard = new foodPackWhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }

// // creation of science Pack expansion black model
// for( let card of sciencePackBlack){
//     let newCard = new sciencePackBlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of science Pack expansion white cards model

// for( let card of sciencePackWhite){
//     let newCard = new sciencePackWhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }



// // creation of worldWideWebPack expansion black model
// for( let card of worldWideWebPackBlack){
//     let newCard = new worldWideWebPackBlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of worldWideWebPack expansion white cards model

// for( let card of worldWideWebPackWhite){
//     let newCard = new worldWideWebPackWhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }



// // creation of voteForHillaryPack expansion black model
// for( let card of voteForHillaryPackBlack){
//     let newCard = new voteForHillaryPackBlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of voteForHillaryPack expansion white cards model

// for( let card of voteForHillaryPackWhite){
//     let newCard = new voteForHillaryPackWhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }

// // creation of voteForTrumpPack expansion black model
// for( let card of voteForTrumpPackBlack){
//     let newCard = new voteForTrumpPackBlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of voteForTrumpPack expansion white cards model

// for( let card of voteForTrumpPackWhite){
//     let newCard = new voteForTrumpPackWhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of trumpSurvivalPack expansion black model
// for( let card of trumpSurvivalPackBlack){
//     let newCard = new trumpSurvivalPackBlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of trumpSurvivalPack expansion white cards model

// for( let card of trumpSurvivalPackWhite){
//     let newCard = new trumpSurvivalPackWhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of holidayPack2012 expansion black model
// for( let card of holidayPack2012Black){
//     let newCard = new holidayPack2012BlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of holidayPack2012 expansion white cards model

// for( let card of holidayPack2012White){
//     let newCard = new holidayPack2012WhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of holidayPack2013 expansion black model
// for( let card of holidayPack2013Black){
//     let newCard = new holidayPack2013BlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of holidayPack2013 expansion white cards model

// for( let card of holidayPack2013White){
//     let newCard = new holidayPack2013WhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }



// // creation of paxEast2013 expansion black model
// for( let card of paxEast2013Black){
//     let newCard = new paxEast2013BlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of paxEast2013 expansion white cards model

// for( let card of paxEast2013White){
//     let newCard = new paxEast2013WhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of paxEast2014 expansion black model
// for( let card of paxEast2014Black){
//     let newCard = new paxEast2014BlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of paxEast2013 expansion white cards model

// for( let card of paxEast2014White){
//     let newCard = new paxEast2014WhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of paxPrime2013 expansion black model
// for( let card of paxPrime2013Black){
//     let newCard = new paxPrime2013BlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of paxPrime2013 expansion white cards model

// for( let card of paxPrime2013White){
//     let newCard = new paxPrime2013WhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of paxEast2014PanelPack expansion black model
// for( let card of paxEast2014PanelPackBlack){
//     let newCard = new paxEast2014PanelPackBlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of paxEast2014PanelPack expansion white cards model

// for( let card of paxEast2014PanelPackWhite){
//     let newCard = new paxEast2014PanelPackWhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of paxPrime2014PanelPack expansion black model
// for( let card of paxPrime2014PanelPackBlack){
//     let newCard = new paxPrime2014PanelPackBlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of paxPrime2014PanelPack expansion white cards model

// for( let card of paxPrime2014PanelPackWhite){
//     let newCard = new paxPrime2014PanelPackWhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }

// // creation of houseOfCardsAgainstHumanity expansion black model
// for( let card of houseOfCardsAgainstHumanityBlack){
//     let newCard = new houseOfCardsAgainstHumanityBlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of houseOfCardsAgainstHumanity expansion white cards model

// for( let card of houseOfCardsAgainstHumanityWhite){
//     let newCard = new houseOfCardsAgainstHumanityWhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of rejectPack1 expansion black model
// for( let card of rejectPack1Black){
//     let newCard = new rejectPack1BlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of rejectPack1 expansion white cards model

// for( let card of rejectPack1White){
//     let newCard = new rejectPack1WhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of rejectPack2 expansion black model
// for( let card of rejectPack2Black){
//     let newCard = new rejectPack2BlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of rejectPack2 expansion white cards model

// for( let card of rejectPack2White){
//     let newCard = new rejectPack2WhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of canadian expansion black model
// for( let card of canadianBlack){
//     let newCard = new canadianBlackModel(card)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }


// // creation of canadian expansion white cards model

// for( let card of canadianWhite){
//     let newCard = new canadianWhiteModel({text: card})
//     console.log(newCard)
//     newCard.save().then(card =>{
//         console.log(card)
//     }).catch(err =>{
//         console.log(err)
//     })
// }