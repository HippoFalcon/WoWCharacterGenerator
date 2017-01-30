(function() {
  function gId(s) {
    return document.getElementById(s);
  }
  var character = {
    faction: ["Alliance", "Horde"],
    race: {
      "Alliance": ["Dwarf", "Gnome", "Human", "Night Elf", "Dranei", "Worgen", "Pandaren"],
      "Horde": ["Orc", "Troll", "Tauren", "Undead", "Blood Elf", "Goblin", "Pandaren"]
    },
    class: {
      "Dranei": ["Death Knight", "Hunter", "Mage", "Paladin", "Priest", "Shaman", "Warrior", "Monk"],
      "Dwarf": ["Death Knight", "Hunter", "Mage", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior", "Monk"],
      "Gnome": ["Death Knight", "Hunter", "Mage", "Priest", "Rogue", "Warlock", "Warrior", "Monk"],
      "Human": ["Death Knight", "Hunter", "Mage", "Paladin", "Priest", "Rogue", "Warlock", "Warrior", "Monk"],
      "Night Elf": ["Death Knight", "Demon Hunter", "Druid", "Hunter", "Mage", "Priest", "Rogue", "Warrior", "Monk"],
      "Worgen": ["Death Knight", "Druid", "Hunter", "Mage", "Priest", "Rogue", "Warlock", "Warrior"],
      "Blood Elf": ["Death Knight", "Demon Hunter", "Hunter", "Mage", "Paladin", "Priest", "Rogue", "Warlock", "Warrior", "Monk"],
      "Undead": ["Death Knight", "Hunter", "Mage", "Priest", "Rogue", "Warlock", "Warrior", "Monk"],
      "Goblin": ["Death Knight", "Hunter", "Mage", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
      "Orc": ["Death Knight", "Hunter", "Mage", "Rogue", "Shaman", "Warlock", "Warrior", "Monk"],
      "Tauren": ["Death Knight", "Druid", "Hunter", "Paladin", "Priest", "Shaman", "Warrior", "Monk"],
      "Troll": ["Death Knight", "Druid", "Hunter", "Mage", "Priest", "Rogue", "Shaman", "Warlock", "Warrior", "Monk"],
      "Pandaren": ["Warrior", "Hunter", "Rogue", "Priest", "Shaman", "Mage", "Monk"]
    },
    spec: {
      "Death Knight": ["Blood", "Frost", "Unholy"],
      "Demon Hunter": ["Havoc", "Vengeance"],
      "Druid": ["Balance", "Feral", "Guardian", "Restoration"],
      "Hunter": ["Beast Mastery", "Marksmanship", "Survival"],
      "Mage": ["Arcane", "Fire", "Frost"],
      "Monk": ["Brewmaster", "Mistweaver", "Windwalker"],
      "Paladin": ["Holy", "Protection", "Retribution"],
      "Priest": ["Discipline", "Holy", "Shadow"],
      "Rogue": ["Assassination", "Outlaw", "Subtlety"],
      "Shaman": ["Elemental", "Enhancement", "Restoration"],
      "Warlock": ["Affliction", "Demonology", "Destruction"],
      "Warrior": ["Arms", "Fury", "Protection"]
    }
  };
  gId("Submit").onclick = function() {
    var c = {
      faction: "",
      race: "",
      sex: "",
      class: "",
      spec: "",
      prof: "",
      name: ""
    };
    c.faction = gId("Faction").value === "Random" ? _Select(character.faction) : gId("Faction").value;
    c.race = _Select(character.race, c.faction);
    c.sex = _Select(["Male", "Female"]);
    c.class = _Select(character.class, c.race);
    c.spec = _Select(character.spec, c.class);
    c.prof = _Select(["Mining & Engineering", "Mining & Jewelcrafting", "Mining & Blacksmithing", "Herbalism & Inscription", "Herbalism & Alchemy", "Skinning & Leatherworking", "Tailoring & Enchanting", "Mining and Herbalism"]);
    c.name = _Select(["Amraldin", "Kasdum", "Zazel", "Alphar", "Kobelph", "Fingoneth", "Lothelye", "Zopha", "Achiel", "Dallach", "Undan", "Bobafeet", "Sielah", "Dattboii", "Gavriel", "Hielat", "Gavraf", "Azrael", "Jarkin", "Galenwe", "Alsemayo", "Peniyah", "Lorfinar", "Hielik", "Pewpewcachoo", "Ramdonh", "Kaolm", "Jehanicus", "Geesus", "Kailorenn", "Doothidoo", "Raqiel", "Chanukka", "Jaims", "Gajdun", "Haik", "Moothi", "Wappers", "Punkins", "Geschenken", "Acoontin", "Gadorfy", "Rawrzien", "Tanntann", "Makm", "Nerde", "Gobbles", "Paha", "Nelophile", "Lenwe", "Felicus", "Illi-something", "something-adin", "Shaavingell", "Axxbom", "Kolomon", "Indil", "Jindjind", "Milemmir", "Giffn","Kneppicus","Werg","Quanddo","Cardtopian","Amimmim","Vanillor","Meeseeks","Mooana","Mortien","Maulz","Hortler","Kisto","Phistor","Mandorp","Miskoo","Lloqua","Heis","Poporazzi","Pixulz","Rauz","Dimen","Whytboi","Smoak"]);

    function _Select(obj, param) {
      var t = param ? obj[param] : obj;
      return t[Math.floor(Math.random() * t.length)];
    }
    gId("Output").innerHTML = "Your character is part of the " + c.faction + " and is a " + c.sex + ", " + c.race + ", " + c.spec + " " + c.class + " with " + c.prof + " that is named " + c.name;
  };
})();
