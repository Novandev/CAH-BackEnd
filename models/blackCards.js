'use strict';
const mongoose = require('mongoose');

const allBlackCards = mongoose.model('AllBlackCards',
    {
        text: String,
        pick: Number
    });

const baseSetBlack = mongoose.model('BaseSetBlackCards',
    {
        text: String,
        pick: Number
    });


const firstExpansionBlack = mongoose.model('FirstExpansionBlackCards',
    {
        text: String,
        pick: Number
    });


const secondExpansionBlack = mongoose.model('secondExpansionBlackCards',
    {
        text: String,
        pick: Number
    });

const thirdExpansionBlack = mongoose.model('thirdExpansionBlackCards',
    {
        text: String,
        pick: Number
    });

const fourthExpansionBlack = mongoose.model('fourthExpansionBlackCards',
    {
        text: String,
        pick: Number
    });

const fifthExpansionBlack = mongoose.model('fifthExpansionBlackCards',
    {
        text: String,
        pick: Number
    });

const sixthExpansionBlack = mongoose.model('sixthExpansionBlackCards',
    {
        text: String,
        pick: Number
    });

const greenboxExpansionBlack = mongoose.model('greenboxExpansionBlackCards',
    {
        text: String,
        pick: Number
    });

const ninetiesNostalgiaBlack = mongoose.model('ninetiesNostalgiaBlackCards',
    {
        text: String,
        pick: Number
    });

const fantasyPackBlack = mongoose.model('fantasyPackBlackCards',
    {
        text: String,
        pick: Number
    });

const foodPackBlack = mongoose.model('foodPackBlackCards',
    {
        text: String,
        pick: Number
    });

const sciencePackBlack = mongoose.model('sciencePackBlackCards',
    {
        text: String,
        pick: Number
    });

const worldWideWebPackBlack = mongoose.model('worldWideWebPackBlackCards',
    {
        text: String,
        pick: Number
    });

const voteForHillaryPackBlack = mongoose.model('voteForHillaryPackBlackCards',
    {
        text: String,
        pick: Number
    });

const voteForTrumpPackBlack = mongoose.model('voteForTrumpPackBlackCards',
    {
        text: String,
        pick: Number
    });

const trumpSurvivalPackBlack = mongoose.model('trumpSurvivalPackBlackCards',
    {
        text: String,
        pick: Number
    });

const holidayPack2012Black = mongoose.model('holidayPack2012BlackCards',
    {
        text: String,
        pick: Number
    });

const holidayPack2013Black = mongoose.model('holidayPack2013BlackCards',
    {
        text: String,
        pick: Number
    });

const paxEast2013Black = mongoose.model('paxEast2013BlackCards',
    {
        text: String,
        pick: Number
    });

const paxPrime2013Black = mongoose.model('paxPrime2013BlackCards',
    {
        text: String,
        pick: Number
    });

const paxEast2014Black = mongoose.model('paxEast2014BlackCards',
    {
        text: String,
        pick: Number
    });

const paxEast2014PanelPackBlack = mongoose.model('paxEast2014PanelPackBlackCards',
    {
        text: String,
        pick: Number
    });

const paxPrime2014PanelPackBlack = mongoose.model('paxPrime2014PanelPackBlackCards',
    {
        text: String,
        pick: Number
    });

const houseOfCardsAgainstHumanityBlack = mongoose.model('houseOfCardsAgainstHumanityBlackCards',
    {
        text: String,
        pick: Number
    });

const rejectPack1Black = mongoose.model('rejectPack1BlackCards',
    {
        text: String,
        pick: Number
    });

const rejectPack2Black = mongoose.model('rejectPack2BlackCards',
    {
        text: String,
        pick: Number
    });

const canadianBlack = mongoose.model('canadianBlackCards',
    {
        text: String,
        pick: Number
    });


module.exports ={
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
}



