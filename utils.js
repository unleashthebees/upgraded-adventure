function val(formula) {
	try {
		let result = eval(formula);
		return result;
	} catch (e) {
		return formula;
	}
}

function applyAdjustments(baseValue, baseStat) {
	let result = baseValue;
	for (let i in stats.adjustments) {
		let adj = stats.adjustments[i];
		for (let idata in adj.data) {
			let str = adj.data[idata];
			let pos = str.search(/[+-]/);
			let stat = str.substr(0,pos).trim();
			let formula = str.substr(pos).trim();
			if (baseStat == stat) {
				console.log("adjust stat: "+baseStat+" "+formula);
				let expr = "result"+formula;
				result = eval(expr);
			}
		}
	}
	return result;
}

function calculateSkill(skillname, ability) {
	let ranks = stats.skillranks[skillname];
	let classSkillbonus = applyAdjustments(0, "cs_"+skillname);

	if (ranks > 0) {
		stats.skills[skillname] =
			STAT_MOD(stats["total" + ability]) +
			applyAdjustments(ranks+classSkillbonus, skillname);
	}
}

function createDisplayElem(attr, parentElem) {
	let elem = $("<div></div>");
	elem.append(attr+": ");
	elem.append(val(stats[attr]));
	parentElem.append(elem);
}

// todo: add explanation of dmg
function createAttackDisplayElem(key, parentElem) {
	let elem = $("<div></div>");
	let attack = stats.attacks[key];
	let dmgBonus = applyAdjustments(0, "DMG");

	if (attack.type.includes("ranged")) {
		dmgBonus = applyAdjustments(dmgBonus, "RANGED_DMG");
	}
	if (attack.type.includes("bow")) {
		dmgBonus = applyAdjustments(dmgBonus, "BOW_DMG");
	}

	elem.append("Attack: "+key+" Damage: "+attack.dice+" bonus: "+dmgBonus);
	parentElem.append(elem);
}

function createSkillsTable() {
	let tableElem = $("<table></table>");
	for (let skill in stats.skills) {
		let bonus = stats.skills[skill];
		tableElem.append("<tr><td>"+skill+"</td><td>"+bonus+"</td></tr>");
	}
	return tableElem;
}

function createSpellsElem(parentElem) {
	let elem = $("<div></div>");
	elem.append("MAGIC");

	parentElem.append(elem);
}

function sumValues(obj) {
	let result = 0;
	for (let i in obj) {
		result += obj[i];
	}

	return result;
}