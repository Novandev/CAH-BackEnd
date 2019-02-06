// NOTE: ONLY RUN THIS FILE IF YOU DO NOT HAVE THE DB YET


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CAH', {useNewUrlParser: true});

var cards = require('./fullCardsList')
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

// All cards from file
const allBlackcards = cards.allCards['blackCards']

const allWhiteCards = cards.allCards['whiteCards']

// Slices for Base Set
// const baseSetBlackCards = allBlackcards.slice(0,90)

// const baseSetWhiteCards = allWhiteCards.slice(0,460)


// Slices for The First Expansion
// const firstExpansionBlack = allBlackcards.slice(90,110)

// const firstExpansionWhite = allWhiteCards.slice(460,540)

// Slices for The Second Expansion
// const secondExpansionBlack = allBlackcards.slice(110,135)

// const secondExpansionWhite = allWhiteCards.slice(540,615)

// Slices for The Second Expansion
// const thirdExpansionBlack = allBlackcards.slice(135,160)

// const thirdExpansionWhite = allWhiteCards.slice(615,690)




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

