'use strict';
const mongoose = require('mongoose');

const allWhiteCards = mongoose.model('AllWhiteCards', { text: String});

const baseSetWhite = mongoose.model('BaseSetWhiteCards', { text: String});

const firstExpansionWhite = mongoose.model('FirstExpansionWhiteCards', { text: String});

const secondExpansionWhite = mongoose.model('secondExpansionWhiteCards', { text: String});

const thirdExpansionWhite = mongoose.model('thirdExpansionWhiteCards', { text: String});

const fourthExpansionWhite = mongoose.model('fourthExpansionWhiteCards', { text: String});

const fifthExpansionWhite = mongoose.model('fifthExpansionWhiteCards', { text: String});

const sixthExpansionWhite = mongoose.model('sixthExpansionWhiteCards', { text: String});

const greenboxExpansionWhite = mongoose.model('greenboxExpansionWhiteCards', { text: String});

const ninetiesNostalgiaWhite = mongoose.model('ninetiesNostalgiaWhiteCards', { text: String});

const boxExpansionWhite = mongoose.model('boxExpansionWhiteCards', { text: String});

const fantasyPackWhite = mongoose.model('fantasyPackWhiteCards', { text: String});

const foodPackWhite = mongoose.model('foodPackWhiteCards', { text: String});

const sciencePackWhite = mongoose.model('sciencePackWhiteCards', { text: String});

const worldWideWebPackWhite = mongoose.model('worldWideWebPackWhiteCards', { text: String});

const voteForHillaryPackWhite = mongoose.model('voteForHillaryPackWhiteCards', { text: String});

const voteForTrumpPackWhite = mongoose.model('voteForTrumpPackWhiteCards', { text: String});

const trumpSurvivalPackWhite = mongoose.model('trumpSurvivalPackWhiteCards', { text: String});

const holidayPack2012White = mongoose.model('holidayPack2012WhiteCards', { text: String});

const holidayPack2013White = mongoose.model('holidayPack2013WhiteCards', { text: String});

const paxEast2013White = mongoose.model('paxEast2013WhiteCards', { text: String});

const paxPrime2013White = mongoose.model('paxPrime2013WhiteCards', { text: String});

const paxEast2014White = mongoose.model('paxEast2014WhiteCards', { text: String});

const paxEast2014PanelPackWhite = mongoose.model('paxEast2014PanelPackWhiteCards', { text: String});

const paxPrime2014PanelPackWhite = mongoose.model('paxPrime2014PanelPackWhiteCards', { text: String});

const houseOfCardsAgainstHumanityWhite = mongoose.model('houseOfCardsAgainstHumanityWhiteCards', { text: String});

const rejectPack1White = mongoose.model('rejectPack1WhiteCards', { text: String});

const rejectPack2White = mongoose.model('rejectPack2WhiteCards', { text: String});

const canadianWhite = mongoose.model('canadianWhiteCards', { text: String});
module.exports={
    allWhiteCards
}