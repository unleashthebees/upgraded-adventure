let characterSheet = {
	name: "Elenna",
	classes: "Cleric 9",
	HD: [8, 6, 8, 6, 6, 8, 5, 8, 3],
	clvl: 9,
	STR: 13,
	DEX: 17,
	CON: 10,
	INT: 8,
	WIS: 15,
	CHA: 8,
	BAB: "BAB_3_4(stats.clvl)",
	FOR: "SAVE_GOOD(stats.clvl)",
	REF: "SAVE_POOR(stats.clvl)",
	WIL: "SAVE_GOOD(stats.clvl)",
	skillsRanksAvailable: "2*stats.clvl",
	skillranks: {
		diplomacy: 1,
		heal: 1,
		knowledge_arcana: 1,
		knowledge_history: 1,
		knowledge_nobility: 1,
		knowledge_planes: 1,
		knowledge_religion: 1,
		perception: 9,
		sense_motive: 1,
		spellcraft: 1,
		stealth: 8,
		survival: 1
	},
	items: [
		{
			name: "Cloak of Elvenkind",
			slot: "shoulders",
			bonus: {
				data: ["stealth +5"],
				type: "competence",
			}
		},
		{
			name: "Arrows",
			quantity: 100
		}
	],
	bonuses: [
		{
			data: ["CON-2", "INT+2", "DEX+2"],
			type: "",
			source: "Ability Score Racial Traits",
			availability: "constant"
		},
		{
			data: ["DEX+1", "WIS+1"],
			type: "",
			source: "Advancement (Levels 4,8)",
			availability: "constant"
		},
		{
			data: ["SKILLRANKS+9"],
			type: "",
			source: "Favored Class Bonus (Levels 1-9)",
			availability: "constant"
		},
		{
			data: [
				"cs_appraise +3",
				"cs_craft +3",
				"cs_diplomacy +3",
				"cs_heal +3",
				"cs_knowledge_arcana +3",
				"cs_knowledge_history +3",
				"cs_knowledge_nobility +3",
				"cs_knowledge_planes +3",
				"cs_knowledge_religion +3",
				"cs_linguistics +3",
				"cs_profession +3",
				"cs_sense_motive +3",
				"cs_spellcraft 3"
			],
			type: "",
			source: "Class Skills (Cleric)",
			availability: "constant"
		},
		{
			data: ["ATK+3", "DMG+3"],
			type: "luck",
			source: "Divine Favor",
			availability: "off"
		},
		{
			data: ["RANGED_ATK-2", "BOW_DMG+4"],
			type: "",
			source: "Deadly Aim",
			availability: "off"
		},
		{
			data: ["RANGED_HASTE+1", "RANGED_ATK-2"],
			type: "",
			source: "Rapid Shot",
			availability: "off"
		},
		{
			data: ["HASTE+1"],
			type: "haste",
			source: "Blessing of Fervor (extra attack)",
			availability: "off"
		},
		{
			data: ["DEX+2"],
			type: "enhancement",
			source: "Belt of Incredible Dexterity",
			availability: "item"
		},
		{
			data: ["cs_stealth +3", "stealth +1"],
			type: "trait",
			source: "Highlander (Trait)",
			availability: "constant"
		},
		{
			data: ["cs_perception +3", "perception +1"],
			type: "trait",
			source: "Eyes and Ears of the City (Trait)",
			availability: "constant"
		},
		{
			data: ["perception+2"],
			type: "racial",
			source: "Keen Senses (Elven Racial)",
			availability: "constant"
		},
		{
			data: ["BOW_ATK+2", "BOW_DMG+1"],
			type: "competence",
			source: "Greater Bracers of Archery",
			availability: "item"
		},
		{
			data: ["FOR+2", "REF+2", "WIL+2"],
			type: "resistance",
			source: "Holy Aura",
			availability: "constant"
		},
		{
			data: ["AC+2"],
			type: "deflection",
			source: "Holy Aura",
			availability: "constant"
		},
		{
			data: ["AC+5", "MAXDEXBONUS+6"],
			type: "armor",
			source: "Mithral Chain Shirt +1",
			availability: "item"
		}
	],
	attacks: {
		composite_bow: {
			toHit: 1,
			dice: "d8",
			toDmg: 2,
			extra: "holy",
			source: "item",
			type: "ranged bow piercing magic"
		},
		dagger: {
			dice: "d4",
			source: "item",
			type: "melee piercing slashing"
		}
	}
};