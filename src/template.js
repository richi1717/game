'use strict';

var Handlebars = require('hbsfy/runtime');

var terrainBattle = require('./templates/terrain-battle.hbs')

var battleMenu = require('./templates/battle-menu.hbs')

var attackMenu = require('./templates/attack.hbs')

var magicMenu = require('./templates/magic.hbs')

var magicSelector = require('./templates/magic-selector.hbs')

var magicMenu = require('./templates/magic-menu.hbs')

var listMonsters = require('./templates/list-monsters.hbs')

var listCharacters = require('./templates/list-characters.hbs')

var worldTmpl = require('./templates/world.hbs')

var listMagics = require('./templates/list-magics.hbs')





module.exports = {
  terrainBattle: terrainBattle,
  battleMenu: battleMenu,
  attackMenu: attackMenu,
  magicSelector: magicSelector,
  magicMenu: magicMenu,
  listMonsters: listMonsters,
  listCharacters: listCharacters,
  worldTmpl: worldTmpl,
  magicMenu: magicMenu,
  listMagics: listMagics
}
