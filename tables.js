function STAT_MOD(x) {
	return Math.floor((x-10)/2);
}

function BAB_1_2(clvl) {
	return Math.floor(clvl/2);
}

function BAB_3_4(clvl) {
	return Math.floor(clvl*3/4);
}

function SAVE_GOOD(clvl) {
	return Math.floor(clvl*2/3);
}

function SAVE_POOR(clvl) {
	return Math.floor(clvl/3);
}

function SUM_HD(dice,con) {
	var conmod = STAT_MOD(con);
	var result = 0;
	for (let i in dice) {
		result += Math.max(1,dice[i]+conmod);
	}
	return result;
}

function SPELLS_PER_DAY_PREPARED_FULLCASTER(clvl) {
	return [
	/* 1*/	[3,1],
	/* 2*/	[4,2],
	/* 3*/	[4,2,1],
	/* 4*/	[4,3,2],
	/* 5*/	[4,3,2,1],
	/* 6*/	[4,3,3,2],
	/* 7*/	[4,4,3,2,1],
	/* 8*/	[4,4,3,3,2],
	/* 9*/	[4,4,4,3,2,1],
	/* 10*/	[4,4,4,3,3,2],
	/* 11*/	[4,4,4,4,3,2,1],
	/* 12*/	[4,4,4,4,3,3,2],
	/* 13*/	[4,4,4,4,4,3,2,1],
	/* 14*/	[4,4,4,4,4,3,3,2],
	/* 15*/	[4,4,4,4,4,4,3,2,1],
	/* 16*/	[4,4,4,4,4,4,3,3,2],
	/* 17*/	[4,4,4,4,4,4,4,3,2,1],
	/* 18*/	[4,4,4,4,4,4,4,3,3,2],
	/* 19*/	[4,4,4,4,4,4,4,4,3,3],
	/* 20*/	[4,4,4,4,4,4,4,4,4,4]
	][clvl-1];	
}

function DOMAIN_SLOTS_FULLCASTER(clvl) {
	let slots = SPELLS_PER_DAY_PREPARED_FULLCASTER(clvl);
	for (let lvl in slots) {
		if (0 == lvl) slots[lvl] = 0;
		else slots[lvl] = 1;
	}
	return slots;
}

function BONUS_SPELLS_PER_DAY(mod, slvl) {
	if (slvl < 1) return 0;
	return Math.max(0, Math.ceil((mod - slvl + 1) / 4));
}

function IS_UNTRAINED_SKILL(skill) {
	if (skill.match("knowledge")) return false;
	if (skill.match("profession")) return false;
	if (skill.match(/^craft/)) return true;
	if (("disable_device handle_animal linguistics "+
		"sleight_of_hand spellcraft use_magic_device").match(skill)) return false;
	return true;
}

function STARTING_LANGUAGES(race) {
	return {
		"Human": ["Common"],
		"Elf": ["Common", "Elven"]
	}[race] || [];
}

function SPELLS_LEARNED_WITCH(clvl) {
	let intl = stats.INT;
	intl += sumBonus("INT", "", stats.bonuses.filter(
		x => x.source.match("Ability Score Racial Traits")));

	let result = [STAT_MOD(intl) + 3]

	for (let i = 2; i <= clvl; ++i) {
		let slvl = Math.ceil(i / 2);
		result[slvl-1] = (result[slvl-1] || 0) + 2;
	}

	for (let i = 0; i < result.length; ++i) {
		result[i] += sumBonus("SPELLSKNOWN_WITCH_" + (i + 1));
	}
	return result;
}

function SPELL_DC(slvl, caster_stat) {
	let a = stats["total" + caster_stat];
	let bonus = STAT_MOD(a);
	return 10 + slvl + bonus;
}