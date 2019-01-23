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
		craft_clothing: 1,
		disguise: 1,
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
		spellcraft: 8
	},
	items: [],
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
		{name: "Cackle (Hex 1)"},
		{
			name: "Improved Initiative (Feat 1)",
			bonus: {
				data: ["INI+4"],
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
	temporary: [],
	attacks: {
		ranged_touch: {dice: "", source: "", type: "ranged touch"}
	}
}