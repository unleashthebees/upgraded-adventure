characterSheet = {
	name: "Jaro Imaradi",
	race: "Human",
	classes: "Witch 8",
	HD: [6, 6, 5, 4, 6, 5, 1, 5],
	clvl: 8,
	STR: 8,
	DEX: 14,
	CON: 14,
	INT: 18,
	WIS: 8,
	CHA: 12,
	BAB: "BAB_1_2(stats.clvl)",
	FOR: "SAVE_POOR(stats.clvl)",
	REF: "SAVE_POOR(stats.clvl)",
	WIL: "SAVE_GOOD(stats.clvl)",
	skillsPerLevel: 2,
	skillranks: {
		bluff: 8,
		craft_clothing: 1,
		diplomacy: 8,
		disable_device: 8,
		disguise: 8,
		escape_artist: 8,
		fly: 1,
		heal: 1,
		knowledge_arcana: 8,
		knowledge_dungeoneering: 1,
		knowledge_engineering: 1,
		knowledge_geography: 1,
		knowledge_history: 1,
		knowledge_local: 8,
		knowledge_nature: 1,
		knowledge_nobility: 1,
		knowledge_planes: 1,
		knowledge_religion: 1,
		perception: 8,
		spellcraft: 8,
		use_magic_device: 1
	},
	items: [
		{
			name: "Circlet of Persuasion",
			slot: "head",
			bonus: {
				data: ["CHA_CHECKS+3"],
				type: "competence"
			},
			price: 4500
		},
		{
			name: "Vest of Escape",
			slot: "chest",
			bonus: {
				data: ["disable_device +4", "escape_artist +6"],
				type: "competence"
			},
			price: 5200
		},
		{
			name: "Headband of Vast Intelligence",
			slot: "headband",
			bonus: {
				data: ["INT+2"],
				type: "enhancement"
			},
			ranks: "escape_artist",
			price: 4000
		},
		{
			name: "Cloak of Resistance",
			slot: "shoulders",
			bonus: {
				data: ["FOR+2", "REF+2", "WIL+2"],
				type: "resistance"
			},
			price: 1000
		},
		{
			name: "Ring of Protection",
			slot: "ring",
			bonus: {
				data: ["AC+1"],
				type: "deflection"
			}
		},
		{ name: "Amulet of Natural Armor",
			slot: "neck",
			bonus:{ data: ["AC+1"], type: "natural" }
		},
		{
			name: "Metamagic Rod of Extend (Lesser)",
			power: {uses_per_day: 3}
		},
		{name: "Handy Haversack", price: 2000},
		{name: "Scroll(1) of Comprehend Languages", price: 25},
		{name: "Scroll(1) of Mount", price: 25},
		{name: "Scroll(2) of Web", price: 150}
	],
	innate: [
		{
			name: "Ability Score Racial Traits",
			bonus: {
				data: ["INT+2"],
				type: "racial"
			}
		},
		{
			name: "Ability Score Increase (Levels 4,8)",
			bonus: {
				data: ["INT+1", "INT+1"],
				type: ""
			}
		},
		{
			name: "Favored Class Bonus (Levels 1-8)",
			bonus: {
				data: [
					"SKILLRANKS+4",
					"SPELLSKNOWN_WITCH_2+2",
					"SPELLSKNOWN_WITCH_3+2"
				],
				type: ""
			},
			info: "one level below max spell level"
		},
		{
			name: "Alertness",
			bonus: { data: ["perception+2", "sense_motive+2"], type: ""], info: "+4 when 10 ranks"
			       },
		{
			name: "Class Skills (Witch)",
			bonus: {
				data: [
					"cs_craft +3",
					"cs_fly +3",
					"cs_heal +3",
					"cs_intimidate +3",
					"cs_knowledge_arcana +3",
					"cs_knowledge_history +3",
					"cs_knowledge_nature +3",
					"cs_knowledge_planes +3",
					"cs_profession +3",
					"cs_spellcraft +3",
					"cs_use_magic_device +3"
				],
				type: ""
			}
		},
		{
			name: "Witch class feats",
			grant: ["Hex", "Hex", "Hex", "Hex", "Hex"]
		},
		{name: "Extra Hex (Feat Human)", grant: "Hex"},
		{
			name: "Improved Initiative (Feat 1)",
			bonus: {
				data: ["INI+4"],
				type: ""
			}
		},
		{
			name: "Spell Penetration (Feat 3)",
			info: "+2 on caster level checks vs SR"
		},
		{
			name: "Skill Focus (Feat 5)",
			bonus: {
				data: ["bluff +(stats.skillranks.bluff<10?3:6)"],
				type: ""
			}
		},
		{name: "Improved Familiar (Feat 7)"},
		{
			name: "Vagabond Child (Regional Trait)",
			bonus: {
				data: ["cs_disable_device +3", "disable_device +1"],
				type: "trait"
			}
		},
		{name: "Disguise (Hex 1)"},
		{name: "Misfortune (Hex 2)"},
		{name: "Evil Eye (Hex 4)"},
		{name: "Cackle (Hex 6)"},
		{name: "Fortune (Hex 8)"},
		{name: "Charm (Extra Hex)"},
		{
			name: "World Traveler (Human Race Trait)",
			bonus: {
				data: ["cs_diplomacy +3", "diplomacy +1"],
				type: "trait"
			}
		},
		{
			name: "Fast Talker (Social Trait)",
			bonus: {
				data: ["cs_bluff +3", "bluff +1"],
				type: "trait"
			}
		}
	],
	spellcasting: [
		{
			slots: "SPELLS_PER_DAY_PREPARED_FULLCASTER",
			ability: "INT",
			accept: "arcane",
			bonusSpells: true,
			spellsLearned: "SPELLS_LEARNED_WITCH"
		}
	],
	spells: {
		"Silent Image": {level: 1, source: "Witch Patron (Shadow)"},
		Darkness: {level: 2, source: "Witch Patron (Shadow)"},
		"Deeper Darkness": {level: 3, source: "Witch Patron (Shadow)"},
		"Shadow Conjuration": {level: 4, source: "Witch Patron (Shadow)"},
		"Dancing Lights": {level: 0},
		"Detect Magic": {level: 0},
		"Detect Poison": {level: 0},
		Guidance: {level: 0},
		Light: {level: 0},
		Mending: {level: 0},
		Message: {level: 0},
		"Read Magic": {level: 0},
		Spark: {level: 0},
		Stabilize: {level: 0},
		"Beguiling Gift": {level: 1},
		"Charm Person": {level: 1},
		Command: {level: 1},
		"Cure Light Wounds": {level: 1},
		"Detect Secret Doors": {level: 1},
		"Mage Armor": {level: 1},
		"Mask Dweomer": {level: 1},
		"Obscuring Mist": {level: 1},
		"Ray of Enfeeblement": {level: 1},
		"Unseen Servant": {level: 1},
		"Alter Self": {level: 2},
		"Detect Thoughts": {level: 2},
		"False Life": {level: 2},
		Glitterdust: {level: 2},
		"Pox Postules": {level: 2},
		"Vomit Swarm": {level: 2},
		"Dispel Magic": {level: 3},
		Fly: {level: 3},
		"Lightning Bolt": {level: 3},
		"Pain Strike": {level: 3},
		"Stinking Cloud": {level: 3},
		Tongues: {level: 3},
		"Black Tentacles": {level: 4},
		Enervation: {level: 4},
		Scrying: {level: 4},
		"Solid Fog": {level: 4}
	},
	temporary: [],
	attacks: {
		ranged_touch: {dice: "", source: "", type: "ranged touch"}
	}
}
