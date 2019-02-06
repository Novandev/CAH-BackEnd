// NOTE: ONLY RUN THIS FILE IF YOU DO NOT HAVE THE DB YET


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CAH', {useNewUrlParser: true});

var cards = require('./fullCardsList')
// const allBlackCardsModel = mongoose.model('AllBlackCards', { text: String, pick: Number });
// const allWhiteCardsModel = mongoose.model('AllWhiteCards', { text: String});
const baseSetBlackModel = mongoose.model('BaseSetBlackCards', { text: String, pick: Number });
const baseSetWhiteModel = mongoose.model('BaseSetWhiteCards', { text: String});

// console.log(cards.allCards['order'])
// All cards from file
const allBlackcards = cards.allCards['blackCards']

const allWhiteCards = cards.allCards['whiteCards']

// Slices for Base Set
// const baseSetBlackCards = allBlackcards.slice(0,90)

// const baseSetWhiteCards = allWhiteCards.slice(0,460)


// Slices for

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