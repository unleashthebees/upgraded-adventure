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

function createSpellsElem(parentElem) {
	let elem = $("<div></div>");
	elem.append("MAGIC");

	parentElem.append(elem);
}
