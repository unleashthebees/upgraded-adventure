characterSheet = {
	name: "Jaro Imaradi",
	race: "Human",
	classes: "Witch 8",
	HD: [6, 1, 1, 1, 1, 1, 1, 1],
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
		disguise: 1,
		escape_artist: 8,
		fly: 1,
		heal: 1,
		knowledge_arcana: 8,
		knowledge_dungeoneering: 1,
		knowledge_engineering: 1,
		knowledge_geography: 1,
		knowledge_history: 1,
		knowledge_local: 1,
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
			}
		},
		{
			name: "Vest of Escape",
			slot: "chest",
			bonus: {
				data: ["disable_device +4", "escape_artist +6"],
				type: "competence"
			}
		}
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
		{
			name: "Extra Hex (Feat Human)",
			grant: "Hex"
		},
		{
			name: "Improved Initiative (Feat 1)",
			bonus: {
				data: ["INI+4"],
				type: ""
			}
		},
		{ name: "Spell Penetration (Feat 3)" },
		{ name: "Spell Focus Conjuration???? (Feat 5)" },
		{ name: "Improved Familiar (Feat 7)" },
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
	spells: {
		"Dancing Lights": {level: 0},
		"Detect Magic": {level: 0},
		"Detect Poison": {level: 0},
		"Guidance": {level: 0},
		"Light": {level: 0},
		"Mending": {level: 0},
		"Message": {level: 0},
		"Read Magic": {level: 0},
		"Spark": {level: 0},
		"Stabilize": {level: 0},
		"Ray of Enfeeblement": {level: 1},
		"Mage Armor": {level:1},
		"Command": {level:1},
		"Blindness/Deafness": {level:2},
		"False Life": {level:2},
		"Pox Postules": {level:2},
		"Bestow Curse": {level:3},
		"Fly": {level:3},
		"Remove Blindness/Deafness": {level:3},
		"Wandering Star Motes": {level:4},
	},
	temporary: [],
	attacks: {
		ranged_touch: {dice: "", source: "", type: "ranged touch"}
	}
}