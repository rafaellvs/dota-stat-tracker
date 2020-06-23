const items = [
  {
    id: 0,
    name: null,
    localized_name: null,
  },
  {
    id: 1,
    name: 'blink',
    localized_name: 'Blink Dagger',
  },
  {
    id: 2,
    name: 'blades_of_attack',
    localized_name: 'Blades of Attack',
  },
  {
    id: 3,
    name: 'broadsword',
    localized_name: 'Broadsword',
  },
  {
    id: 4,
    name: 'chainmail',
    localized_name: 'Chainmail',
  },
  {
    id: 5,
    name: 'claymore',
    localized_name: 'Claymore',
  },
  {
    id: 6,
    name: 'helm_of_iron_will',
    localized_name: 'Helm of Iron Will',
  },
  {
    id: 7,
    name: 'javelin',
    localized_name: 'Javelin',
  },
  {
    id: 8,
    name: 'mithril_hammer',
    localized_name: 'Mithril Hammer',
  },
  {
    id: 9,
    name: 'platemail',
    localized_name: 'Platemail',
  },
  {
    id: 10,
    name: 'quarterstaff',
    localized_name: 'Quarterstaff',
  },
  {
    id: 11,
    name: 'quelling_blade',
    localized_name: 'Quelling Blade',
  },
  {
    id: 237,
    name: 'faerie_fire',
    localized_name: 'Faerie Fire',
  },
  {
    id: 265,
    name: 'infused_raindrop',
    localized_name: 'Infused Raindrops',
  },
  {
    id: 244,
    name: 'wind_lace',
    localized_name: 'Wind Lace',
  },
  {
    id: 12,
    name: 'ring_of_protection',
    localized_name: 'Ring of Protection',
  },
  {
    id: 182,
    name: 'stout_shield',
    localized_name: 'Stout Shield',
  },
  {
    id: 247,
    name: 'moon_shard',
    localized_name: 'Moon Shard',
  },
  {
    id: 13,
    name: 'gauntlets',
    localized_name: 'Gauntlets of Strength',
  },
  {
    id: 14,
    name: 'slippers',
    localized_name: 'Slippers of Agility',
  },
  {
    id: 15,
    name: 'mantle',
    localized_name: 'Mantle of Intelligence',
  },
  {
    id: 16,
    name: 'branches',
    localized_name: 'Iron Branch',
  },
  {
    id: 17,
    name: 'belt_of_strength',
    localized_name: 'Belt of Strength',
  },
  {
    id: 18,
    name: 'boots_of_elves',
    localized_name: 'Band of Elvenskin',
  },
  {
    id: 19,
    name: 'robe',
    localized_name: 'Robe of the Magi',
  },
  {
    id: 20,
    name: 'circlet',
    localized_name: 'Circlet',
  },
  {
    id: 261,
    name: 'crown',
    localized_name: 'Crown',
  },
  {
    id: 21,
    name: 'ogre_axe',
    localized_name: 'Ogre Axe',
  },
  {
    id: 22,
    name: 'blade_of_alacrity',
    localized_name: 'Blade of Alacrity',
  },
  {
    id: 23,
    name: 'staff_of_wizardry',
    localized_name: 'Staff of Wizardry',
  },
  {
    id: 24,
    name: 'ultimate_orb',
    localized_name: 'Ultimate Orb',
  },
  {
    id: 25,
    name: 'gloves',
    localized_name: 'Gloves of Haste',
  },
  {
    id: 26,
    name: 'lifesteal',
    localized_name: 'Morbid Mask',
  },
  {
    id: 27,
    name: 'ring_of_regen',
    localized_name: 'Ring of Regen',
  },
  {
    id: 279,
    name: 'ring_of_tarrasque',
    localized_name: 'Ring of Tarrasque',
  },
  {
    id: 28,
    name: 'sobi_mask',
    localized_name: "Sage's Mask",
  },
  {
    id: 29,
    name: 'boots',
    localized_name: 'Boots of Speed',
  },
  {
    id: 30,
    name: 'gem',
    localized_name: 'Gem of True Sight',
  },
  {
    id: 31,
    name: 'cloak',
    localized_name: 'Cloak',
  },
  {
    id: 32,
    name: 'talisman_of_evasion',
    localized_name: 'Talisman of Evasion',
  },
  {
    id: 33,
    name: 'cheese',
    localized_name: 'Cheese',
  },
  {
    id: 34,
    name: 'magic_stick',
    localized_name: 'Magic Stick',
  },
  {
    id: 35,
    name: 'recipe_magic_wand',
    localized_name: 'Magic Wand Recipe',
  },
  {
    id: 36,
    name: 'magic_wand',
    localized_name: 'Magic Wand',
  },
  {
    id: 37,
    name: 'ghost',
    localized_name: 'Ghost Scepter',
  },
  {
    id: 38,
    name: 'clarity',
    localized_name: 'Clarity',
  },
  {
    id: 216,
    name: 'enchanted_mango',
    localized_name: 'Enchanted Mango',
  },
  {
    id: 39,
    name: 'flask',
    localized_name: 'Healing Salve',
  },
  {
    id: 40,
    name: 'dust',
    localized_name: 'Dust of Appearance',
  },
  {
    id: 41,
    name: 'bottle',
    localized_name: 'Bottle',
  },
  {
    id: 42,
    name: 'ward_observer',
    localized_name: 'Observer Ward',
  },
  {
    id: 43,
    name: 'ward_sentry',
    localized_name: 'Sentry Ward',
  },
  {
    id: 218,
    name: 'ward_dispenser',
    localized_name: 'Observer and Sentry Wards',
  },
  {
    id: 44,
    name: 'tango',
    localized_name: 'Tango',
  },
  {
    id: 241,
    name: 'tango_single',
    localized_name: 'Tango (Shared)',
  },
  {
    id: 45,
    name: 'courier',
    localized_name: 'Animal Courier',
  },
  {
    id: 286,
    name: 'flying_courier',
    localized_name: 'Flying Courier',
  },
  {
    id: 46,
    name: 'tpscroll',
    localized_name: 'Town Portal Scroll',
  },
  {
    id: 47,
    name: 'recipe_travel_boots',
    localized_name: 'Boots of Travel Recipe',
  },
  {
    id: 48,
    name: 'travel_boots',
    localized_name: 'Boots of Travel',
  },
  {
    id: 220,
    name: 'travel_boots_2',
    localized_name: 'Boots of Travel',
  },
  {
    id: 50,
    name: 'phase_boots',
    localized_name: 'Phase Boots',
  },
  {
    id: 51,
    name: 'demon_edge',
    localized_name: 'Demon Edge',
  },
  {
    id: 52,
    name: 'eagle',
    localized_name: 'Eaglesong',
  },
  {
    id: 53,
    name: 'reaver',
    localized_name: 'Reaver',
  },
  {
    id: 54,
    name: 'relic',
    localized_name: 'Sacred Relic',
  },
  {
    id: 55,
    name: 'hyperstone',
    localized_name: 'Hyperstone',
  },
  {
    id: 56,
    name: 'ring_of_health',
    localized_name: 'Ring of Health',
  },
  {
    id: 57,
    name: 'void_stone',
    localized_name: 'Void Stone',
  },
  {
    id: 58,
    name: 'mystic_staff',
    localized_name: 'Mystic Staff',
  },
  {
    id: 59,
    name: 'energy_booster',
    localized_name: 'Energy Booster',
  },
  {
    id: 60,
    name: 'point_booster',
    localized_name: 'Point Booster',
  },
  {
    id: 61,
    name: 'vitality_booster',
    localized_name: 'Vitality Booster',
  },
  {
    id: 63,
    name: 'power_treads',
    localized_name: 'Power Treads',
  },
  {
    id: 64,
    name: 'recipe_hand_of_midas',
    localized_name: 'Hand of Midas Recipe',
  },
  {
    id: 65,
    name: 'hand_of_midas',
    localized_name: 'Hand of Midas',
  },
  {
    id: 67,
    name: 'oblivion_staff',
    localized_name: 'Oblivion Staff',
  },
  {
    id: 69,
    name: 'pers',
    localized_name: 'Perseverance',
  },
  {
    id: 71,
    name: 'poor_mans_shield',
    localized_name: "Poor Man's Shield",
  },
  {
    id: 72,
    name: 'recipe_bracer',
    localized_name: 'Bracer Recipe',
  },
  {
    id: 73,
    name: 'bracer',
    localized_name: 'Bracer',
  },
  {
    id: 74,
    name: 'recipe_wraith_band',
    localized_name: 'Wraith Band Recipe',
  },
  {
    id: 75,
    name: 'wraith_band',
    localized_name: 'Wraith Band',
  },
  {
    id: 76,
    name: 'recipe_null_talisman',
    localized_name: 'Null Talisman Recipe',
  },
  {
    id: 77,
    name: 'null_talisman',
    localized_name: 'Null Talisman',
  },
  {
    id: 78,
    name: 'recipe_mekansm',
    localized_name: 'Mekansm Recipe',
  },
  {
    id: 79,
    name: 'mekansm',
    localized_name: 'Mekansm',
  },
  {
    id: 80,
    name: 'recipe_vladmir',
    localized_name: "Vladmir's Offering Recipe",
  },
  {
    id: 81,
    name: 'vladmir',
    localized_name: "Vladmir's Offering",
  },
  {
    id: 85,
    name: 'recipe_buckler',
    localized_name: 'Buckler Recipe',
  },
  {
    id: 86,
    name: 'buckler',
    localized_name: 'Buckler',
  },
  {
    id: 87,
    name: 'recipe_ring_of_basilius',
    localized_name: 'Ring of Basilius Recipe',
  },
  {
    id: 88,
    name: 'ring_of_basilius',
    localized_name: 'Ring of Basilius',
  },
  {
    id: 268,
    name: 'recipe_holy_locket',
    localized_name: 'Holy Locket Recipe',
  },
  {
    id: 269,
    name: 'holy_locket',
    localized_name: 'Holy Locket',
  },
  {
    id: 89,
    name: 'recipe_pipe',
    localized_name: 'Pipe of Insight Recipe',
  },
  {
    id: 90,
    name: 'pipe',
    localized_name: 'Pipe of Insight',
  },
  {
    id: 91,
    name: 'recipe_urn_of_shadows',
    localized_name: 'Urn of Shadows Recipe',
  },
  {
    id: 92,
    name: 'urn_of_shadows',
    localized_name: 'Urn of Shadows',
  },
  {
    id: 93,
    name: 'recipe_headdress',
    localized_name: 'Headdress Recipe',
  },
  {
    id: 94,
    name: 'headdress',
    localized_name: 'Headdress',
  },
  {
    id: 96,
    name: 'sheepstick',
    localized_name: 'Scythe of Vyse',
  },
  {
    id: 97,
    name: 'recipe_orchid',
    localized_name: 'Orchid Malevolence Recipe',
  },
  {
    id: 98,
    name: 'orchid',
    localized_name: 'Orchid Malevolence',
  },
  {
    id: 245,
    name: 'recipe_bloodthorn',
    localized_name: 'Bloodthorn Recipe',
  },
  {
    id: 250,
    name: 'bloodthorn',
    localized_name: 'Bloodthorn',
  },
  {
    id: 252,
    name: 'echo_sabre',
    localized_name: 'Echo Sabre',
  },
  {
    id: 99,
    name: 'recipe_cyclone',
    localized_name: "Eul's Scepter Recipe",
  },
  {
    id: 100,
    name: 'cyclone',
    localized_name: "Eul's Scepter of Divinity",
  },
  {
    id: 233,
    name: 'recipe_aether_lens',
    localized_name: 'Aether Lens Recipe',
  },
  {
    id: 232,
    name: 'aether_lens',
    localized_name: 'Aether Lens',
  },
  {
    id: 101,
    name: 'recipe_force_staff',
    localized_name: 'Force Staff Recipe',
  },
  {
    id: 102,
    name: 'force_staff',
    localized_name: 'Force Staff',
  },
  {
    id: 262,
    name: 'recipe_hurricane_pike',
    localized_name: 'Hurricane Pike Recipe',
  },
  {
    id: 263,
    name: 'hurricane_pike',
    localized_name: 'Hurricane Pike',
  },
  {
    id: 103,
    name: 'recipe_dagon',
    localized_name: 'Dagon Recipe',
  },
  {
    id: 104,
    name: 'dagon',
    localized_name: 'Dagon',
  },
  {
    id: 201,
    name: 'dagon_2',
    localized_name: 'Dagon',
  },
  {
    id: 202,
    name: 'dagon_3',
    localized_name: 'Dagon',
  },
  {
    id: 203,
    name: 'dagon_4',
    localized_name: 'Dagon',
  },
  {
    id: 204,
    name: 'dagon_5',
    localized_name: 'Dagon',
  },
  {
    id: 105,
    name: 'recipe_necronomicon',
    localized_name: 'Necronomicon Recipe',
  },
  {
    id: 106,
    name: 'necronomicon',
    localized_name: 'Necronomicon',
  },
  {
    id: 193,
    name: 'necronomicon_2',
    localized_name: 'Necronomicon',
  },
  {
    id: 194,
    name: 'necronomicon_3',
    localized_name: 'Necronomicon',
  },
  {
    id: 108,
    name: 'ultimate_scepter',
    localized_name: "Aghanim's Scepter",
  },
  {
    id: 270,
    name: 'recipe_ultimate_scepter_2',
    localized_name: "Aghanim's Blessing Recipe",
  },
  {
    id: 271,
    name: 'ultimate_scepter_2',
    localized_name: "Aghanim's Blessing",
  },
  {
    id: 109,
    name: 'recipe_refresher',
    localized_name: 'Refresher Orb Recipe',
  },
  {
    id: 110,
    name: 'refresher',
    localized_name: 'Refresher Orb',
  },
  {
    id: 111,
    name: 'recipe_assault',
    localized_name: 'Assault Cuirass Recipe',
  },
  {
    id: 112,
    name: 'assault',
    localized_name: 'Assault Cuirass',
  },
  {
    id: 113,
    name: 'recipe_heart',
    localized_name: 'Heart of Tarrasque Recipe',
  },
  {
    id: 114,
    name: 'heart',
    localized_name: 'Heart of Tarrasque',
  },
  {
    id: 115,
    name: 'recipe_black_king_bar',
    localized_name: 'Black King Bar Recipe',
  },
  {
    id: 116,
    name: 'black_king_bar',
    localized_name: 'Black King Bar',
  },
  {
    id: 117,
    name: 'aegis',
    localized_name: 'Aegis of the Immortal',
  },
  {
    id: 118,
    name: 'recipe_shivas_guard',
    localized_name: "Shiva's Guard Recipe",
  },
  {
    id: 119,
    name: 'shivas_guard',
    localized_name: "Shiva's Guard",
  },
  {
    id: 121,
    name: 'bloodstone',
    localized_name: 'Bloodstone',
  },
  {
    id: 122,
    name: 'recipe_sphere',
    localized_name: "Linken's Sphere Recipe",
  },
  {
    id: 123,
    name: 'sphere',
    localized_name: "Linken's Sphere",
  },
  {
    id: 226,
    name: 'lotus_orb',
    localized_name: 'Lotus Orb',
  },
  {
    id: 223,
    name: 'meteor_hammer',
    localized_name: 'Meteor Hammer',
  },
  {
    id: 225,
    name: 'nullifier',
    localized_name: 'Nullifier',
  },
  {
    id: 255,
    name: 'recipe_aeon_disk',
    localized_name: 'Aeon Disk Recipe',
  },
  {
    id: 256,
    name: 'aeon_disk',
    localized_name: 'Aeon Disk',
  },
  {
    id: 258,
    name: 'recipe_kaya',
    localized_name: 'Kaya Recipe',
  },
  {
    id: 259,
    name: 'kaya',
    localized_name: 'Kaya',
  },
  {
    id: 369,
    name: 'trident',
    localized_name: 'Trident',
  },
  {
    id: 276,
    name: 'combo_breaker',
  },
  {
    id: 260,
    name: 'refresher_shard',
    localized_name: 'Refresher Shard',
  },
  {
    id: 266,
    name: 'recipe_spirit_vessel',
    localized_name: 'Spirit Vessel Recipe',
  },
  {
    id: 267,
    name: 'spirit_vessel',
    localized_name: 'Spirit Vessel',
  },
  {
    id: 125,
    name: 'vanguard',
    localized_name: 'Vanguard',
  },
  {
    id: 243,
    name: 'recipe_crimson_guard',
    localized_name: 'Crimson Guard Recipe',
  },
  {
    id: 242,
    name: 'crimson_guard',
    localized_name: 'Crimson Guard',
  },
  {
    id: 127,
    name: 'blade_mail',
    localized_name: 'Blade Mail',
  },
  {
    id: 129,
    name: 'soul_booster',
    localized_name: 'Soul Booster',
  },
  {
    id: 131,
    name: 'hood_of_defiance',
    localized_name: 'Hood of Defiance',
  },
  {
    id: 133,
    name: 'rapier',
    localized_name: 'Divine Rapier',
  },
  {
    id: 135,
    name: 'monkey_king_bar',
    localized_name: 'Monkey King Bar',
  },
  {
    id: 136,
    name: 'recipe_radiance',
    localized_name: 'Radiance Recipe',
  },
  {
    id: 137,
    name: 'radiance',
    localized_name: 'Radiance',
  },
  {
    id: 139,
    name: 'butterfly',
    localized_name: 'Butterfly',
  },
  {
    id: 140,
    name: 'recipe_greater_crit',
    localized_name: 'Daedalus Recipe',
  },
  {
    id: 141,
    name: 'greater_crit',
    localized_name: 'Daedalus',
  },
  {
    id: 142,
    name: 'recipe_basher',
    localized_name: 'Skull Basher Recipe',
  },
  {
    id: 143,
    name: 'basher',
    localized_name: 'Skull Basher',
  },
  {
    id: 145,
    name: 'bfury',
    localized_name: 'Battle Fury',
  },
  {
    id: 146,
    name: 'recipe_manta',
    localized_name: 'Manta Style Recipe',
  },
  {
    id: 147,
    name: 'manta',
    localized_name: 'Manta Style',
  },
  {
    id: 148,
    name: 'recipe_lesser_crit',
    localized_name: 'Crystalys Recipe',
  },
  {
    id: 149,
    name: 'lesser_crit',
    localized_name: 'Crystalys',
  },
  {
    id: 236,
    name: 'dragon_lance',
    localized_name: 'Dragon Lance',
  },
  {
    id: 150,
    name: 'recipe_armlet',
    localized_name: 'Armlet of Mordiggian Recipe',
  },
  {
    id: 151,
    name: 'armlet',
    localized_name: 'Armlet of Mordiggian',
  },
  {
    id: 152,
    name: 'invis_sword',
    localized_name: 'Shadow Blade',
  },
  {
    id: 248,
    name: 'recipe_silver_edge',
    localized_name: 'Silver Edge Recipe',
  },
  {
    id: 249,
    name: 'silver_edge',
    localized_name: 'Silver Edge',
  },
  {
    id: 154,
    name: 'sange_and_yasha',
    localized_name: 'Sange and Yasha',
  },
  {
    id: 273,
    name: 'kaya_and_sange',
    localized_name: 'Kaya and Sange',
  },
  {
    id: 277,
    name: 'yasha_and_kaya',
    localized_name: 'Yasha and Kaya',
  },
  {
    id: 156,
    name: 'satanic',
    localized_name: 'Satanic',
  },
  {
    id: 157,
    name: 'recipe_mjollnir',
    localized_name: 'Mjollnir Recipe',
  },
  {
    id: 158,
    name: 'mjollnir',
    localized_name: 'Mjollnir',
  },
  {
    id: 160,
    name: 'skadi',
    localized_name: 'Eye of Skadi',
  },
  {
    id: 161,
    name: 'recipe_sange',
    localized_name: 'Sange Recipe',
  },
  {
    id: 162,
    name: 'sange',
    localized_name: 'Sange',
  },
  {
    id: 163,
    name: 'recipe_helm_of_the_dominator',
    localized_name: 'Helm of the Dominator Recipe',
  },
  {
    id: 164,
    name: 'helm_of_the_dominator',
    localized_name: 'Helm of the Dominator',
  },
  {
    id: 166,
    name: 'maelstrom',
    localized_name: 'Maelstrom',
  },
  {
    id: 168,
    name: 'desolator',
    localized_name: 'Desolator',
  },
  {
    id: 169,
    name: 'recipe_yasha',
    localized_name: 'Yasha Recipe',
  },
  {
    id: 170,
    name: 'yasha',
    localized_name: 'Yasha',
  },
  {
    id: 172,
    name: 'mask_of_madness',
    localized_name: 'Mask of Madness',
  },
  {
    id: 173,
    name: 'recipe_diffusal_blade',
    localized_name: 'Diffusal Blade Recipe',
  },
  {
    id: 174,
    name: 'diffusal_blade',
    localized_name: 'Diffusal Blade',
  },
  {
    id: 176,
    name: 'ethereal_blade',
    localized_name: 'Ethereal Blade',
  },
  {
    id: 177,
    name: 'recipe_soul_ring',
    localized_name: 'Soul Ring Recipe',
  },
  {
    id: 178,
    name: 'soul_ring',
    localized_name: 'Soul Ring',
  },
  {
    id: 180,
    name: 'arcane_boots',
    localized_name: 'Arcane Boots',
  },
  {
    id: 235,
    name: 'octarine_core',
    localized_name: 'Octarine Core',
  },
  {
    id: 181,
    name: 'orb_of_venom',
    localized_name: 'Orb of Venom',
  },
  {
    id: 240,
    name: 'blight_stone',
    localized_name: 'Blight Stone',
  },
  {
    id: 184,
    name: 'recipe_ancient_janggo',
    localized_name: 'Drum of Endurance Recipe',
  },
  {
    id: 185,
    name: 'ancient_janggo',
    localized_name: 'Drum of Endurance',
  },
  {
    id: 187,
    name: 'medallion_of_courage',
    localized_name: 'Medallion of Courage',
  },
  {
    id: 227,
    name: 'recipe_solar_crest',
    localized_name: 'Solar Crest Recipe',
  },
  {
    id: 229,
    name: 'solar_crest',
    localized_name: 'Solar Crest',
  },
  {
    id: 188,
    name: 'smoke_of_deceit',
    localized_name: 'Smoke of Deceit',
  },
  {
    id: 257,
    name: 'tome_of_knowledge',
    localized_name: 'Tome of Knowledge',
  },
  {
    id: 189,
    name: 'recipe_veil_of_discord',
    localized_name: 'Veil of Discord Recipe',
  },
  {
    id: 190,
    name: 'veil_of_discord',
    localized_name: 'Veil of Discord',
  },
  {
    id: 230,
    name: 'recipe_guardian_greaves',
    localized_name: 'Guardian Greaves Recipe',
  },
  {
    id: 231,
    name: 'guardian_greaves',
    localized_name: 'Guardian Greaves',
  },
  {
    id: 205,
    name: 'recipe_rod_of_atos',
    localized_name: 'Rod of Atos Recipe',
  },
  {
    id: 206,
    name: 'rod_of_atos',
    localized_name: 'Rod of Atos',
  },
  {
    id: 238,
    name: 'recipe_iron_talon',
    localized_name: 'Iron Talon Recipe',
    desc: '',
  },
  {
    id: 239,
    name: 'iron_talon',
    localized_name: 'Iron Talon',
  },
  {
    id: 207,
    name: 'recipe_abyssal_blade',
    localized_name: 'Abyssal Blade Recipe',
  },
  {
    id: 208,
    name: 'abyssal_blade',
    localized_name: 'Abyssal Blade',
  },
  {
    id: 210,
    name: 'heavens_halberd',
    localized_name: "Heaven's Halberd",
  },
  {
    id: 212,
    name: 'ring_of_aquila',
    localized_name: 'Ring of Aquila',
  },
  {
    id: 214,
    name: 'tranquil_boots',
    localized_name: 'Tranquil Boots',
  },
  {
    id: 215,
    name: 'shadow_amulet',
    localized_name: 'Shadow Amulet',
  },
  {
    id: 254,
    name: 'glimmer_cape',
    localized_name: 'Glimmer Cape',
  },
  {
    id: 1021,
    name: 'river_painter',
    localized_name: 'River Vial: Chrome',
  },
  {
    id: 1022,
    name: 'river_painter2',
    localized_name: 'River Vial: Dry',
  },
  {
    id: 1023,
    name: 'river_painter3',
    localized_name: 'River Vial: Slime',
  },
  {
    id: 1024,
    name: 'river_painter4',
    localized_name: 'River Vial: Oil',
  },
  {
    id: 1025,
    name: 'river_painter5',
    localized_name: 'River Vial: Electrified',
  },
  {
    id: 1026,
    name: 'river_painter6',
    localized_name: 'River Vial: Potion',
  },
  {
    id: 1027,
    name: 'river_painter7',
    localized_name: 'River Vial: Blood',
  },
  {
    id: 1028,
    name: 'mutation_tombstone',
    localized_name: 'Tombstone',
  },
  {
    id: 1029,
    name: 'super_blink',
    localized_name: 'Super Blink Dagger',
  },
  {
    id: 1030,
    name: 'pocket_tower',
    localized_name: 'Pocket Tower',
  },
  {
    id: 1032,
    name: 'pocket_roshan',
    localized_name: 'Pocket Roshan',
  },
  {
    id: 287,
    name: 'keen_optic',
    localized_name: 'Keen Optic',
  },
  {
    id: 288,
    name: 'grove_bow',
    localized_name: 'Grove Bow',
  },
  {
    id: 289,
    name: 'quickening_charm',
    localized_name: 'Quickening Charm',
  },
  {
    id: 290,
    name: 'philosophers_stone',
    localized_name: "Philosopher's Stone",
  },
  {
    id: 291,
    name: 'force_boots',
    localized_name: 'Force Boots',
  },
  {
    id: 292,
    name: 'desolator_2',
    localized_name: 'Stygian Desolator',
  },
  {
    id: 293,
    name: 'phoenix_ash',
    localized_name: 'Phoenix Ash',
  },
  {
    id: 294,
    name: 'seer_stone',
    localized_name: 'Seer Stone',
  },
  {
    id: 295,
    name: 'greater_mango',
    localized_name: 'Greater Mango',
  },
  {
    id: 302,
    name: 'elixer',
    localized_name: 'Elixir',
  },
  {
    id: 297,
    name: 'vampire_fangs',
    localized_name: 'Vampire Fangs',
  },
  {
    id: 298,
    name: 'craggy_coat',
    localized_name: 'Craggy Coat',
  },
  {
    id: 299,
    name: 'greater_faerie_fire',
    localized_name: 'Greater Faerie Fire',
  },
  {
    id: 300,
    name: 'timeless_relic',
    localized_name: 'Timeless Relic',
  },
  {
    id: 301,
    name: 'mirror_shield',
    localized_name: 'Mirror Shield',
  },
  {
    id: 303,
    name: 'recipe_ironwood_tree',
    localized_name: 'Ironwood Tree Recipe',
  },
  {
    id: 304,
    name: 'ironwood_tree',
    localized_name: 'Ironwood Tree',
  },
  {
    id: 328,
    name: 'mango_tree',
    localized_name: 'Mango Tree',
  },
  {
    id: 305,
    name: 'royal_jelly',
    localized_name: 'Royal Jelly',
  },
  {
    id: 306,
    name: 'pupils_gift',
    localized_name: "Pupil's Gift",
  },
  {
    id: 307,
    name: 'tome_of_aghanim',
    localized_name: 'Tome of Aghanim',
  },
  {
    id: 308,
    name: 'repair_kit',
    localized_name: 'Repair Kit',
  },
  {
    id: 309,
    name: 'mind_breaker',
    localized_name: 'Mind Breaker',
  },
  {
    id: 310,
    name: 'third_eye',
    localized_name: 'Third Eye',
  },
  {
    id: 311,
    name: 'spell_prism',
    localized_name: 'Spell Prism',
  },
  {
    id: 325,
    name: 'princes_knife',
    localized_name: "Prince's Knife",
    er: 4,
  },
  {
    id: 330,
    name: 'witless_shako',
    localized_name: 'Witless Shako',
  },
  {
    id: 334,
    name: 'imp_claw',
    localized_name: 'Imp Claw',
  },
  {
    id: 335,
    name: 'flicker',
    localized_name: 'Flicker',
  },
  {
    id: 336,
    name: 'spy_gadget',
    localized_name: 'Telescope',
  },
  {
    id: 326,
    name: 'spider_legs',
    localized_name: 'Spider Legs',
  },
  {
    id: 327,
    name: 'helm_of_the_undying',
    localized_name: 'Helm of the Undying',
  },
  {
    id: 331,
    name: 'vambrace',
    localized_name: 'Vambrace',
  },
  {
    id: 312,
    name: 'horizon',
    localized_name: 'Horizon',
  },
  {
    id: 313,
    name: 'fusion_rune',
    localized_name: 'Fusion Rune',
  },
  {
    id: 354,
    name: 'ocean_heart',
    localized_name: 'Ocean Heart',
  },
  {
    id: 355,
    name: 'broom_handle',
    localized_name: 'Broom Handle',
  },
  {
    id: 356,
    name: 'trusty_shovel',
    localized_name: 'Trusty Shovel',
  },
  {
    id: 357,
    name: 'nether_shawl',
    localized_name: 'Nether Shawl',
  },
  {
    id: 358,
    name: 'dragon_scale',
    localized_name: 'Dragon Scale',
  },
  {
    id: 359,
    name: 'essence_ring',
    localized_name: 'Essence Ring',
  },
  {
    id: 360,
    name: 'clumsy_net',
    localized_name: 'Clumsy Net',
  },
  {
    id: 361,
    name: 'enchanted_quiver',
    localized_name: 'Enchanted Quiver',
  },
  {
    id: 362,
    name: 'ninja_gear',
    localized_name: 'Ninja Gear',
  },
  {
    id: 363,
    name: 'illusionsts_cape',
    localized_name: "Illusionist's Cape",
  },
  {
    id: 364,
    name: 'havoc_hammer',
    localized_name: 'Havoc Hammer',
  },
  {
    id: 365,
    name: 'panic_button',
    localized_name: 'Magic Lamp',
  },
  {
    id: 366,
    name: 'apex',
    localized_name: 'Apex',
  },
  {
    id: 367,
    name: 'ballista',
    localized_name: 'Ballista',
  },
  {
    id: 368,
    name: 'woodland_striders',
    localized_name: 'Woodland Striders',
  },
  {
    id: 275,
    name: 'recipe_trident',
    localized_name: 'Trident Recipe',
  },
  {
    id: 370,
    name: 'demonicon',
    localized_name: 'Book of the Dead',
  },
  {
    id: 317,
    name: 'recipe_fallen_sky',
    localized_name: 'Recipe: Fallen Sky',
  },
  {
    id: 371,
    name: 'fallen_sky',
    localized_name: 'Fallen Sky',
  },
  {
    id: 372,
    name: 'pirate_hat',
    localized_name: 'Pirate Hat',
  },
  {
    id: 373,
    name: 'dimensional_doorway',
    localized_name: 'Dimensional Doorway',
  },
  {
    id: 374,
    name: 'ex_machina',
    localized_name: 'Ex Machina',
  },
  {
    id: 375,
    name: 'faded_broach',
    localized_name: 'Faded Broach',
  },
  {
    id: 376,
    name: 'paladin_sword',
    localized_name: 'Paladin Sword',
  },
  {
    id: 377,
    name: 'minotaur_horn',
    localized_name: 'Minotaur Horn',
  },
  {
    id: 378,
    name: 'orb_of_destruction',
    localized_name: 'Orb of Destruction',
  },
  {
    id: 379,
    name: 'the_leveller',
    localized_name: 'The Leveller',
  },
  {
    id: 349,
    name: 'arcane_ring',
    localized_name: 'Arcane Ring',
  },
  {
    id: 381,
    name: 'titan_sliver',
    localized_name: 'Titan Sliver',
  },
  {
    id: 196,
    name: 'diffusal_blade_2',
    localized_name: 'Diffusal Blade',
  },
]

export default items
