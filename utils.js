function val(formula) {
	try {
		let result = eval(formula);
		return result;
	} catch (e) {
		return formula;
	}
}

function splitBonusFormula(str) {
	let pos = str.search(/[+-]/);
	let stat = str.substr(0, pos).trim();
	let formula = str.substr(pos).trim();
	return [stat, formula];
}

// todo: add explanation of bonuses to gui
function sumBonus(keyword, bonustype) {
	let result = 0;
	for (let i in stats.bonuses) {
		let bonus = stats.bonuses[i];
		if (!bonustype || bonustype == bonus.type) {
			for (let idata in bonus.data) {
				let [stat, formula] = splitBonusFormula(bonus.data[idata]);
				if (keyword == stat) {
					let expr = "result" + formula;
					result = eval(expr);
				}
			}
		}
	}
	return result;
}
/*
function explainBonus(keyword) {
	for (let i in stats.bonuses) {
		let bonus = stats.bonuses[i];
		for (let idata in bonus.data) {
			let [stat, formula] = splitBonusFormula(bonus.data[idata]);
			if (keyword == stat) {
				console.log(formula+"("+bonus.source+")");
			}
		}
	}
}*/

function calculateSkill(skillname, ability) {
	let ranks = stats.skillranks[skillname];
	let classSkillbonus = sumBonus("cs_"+skillname);

	if (ranks > 0) {
		stats.skills[skillname] =
			STAT_MOD(stats["total" + ability]) +
			ranks + classSkillbonus + sumBonus(skillname);
	}
}

function createDisplayElem(gridArea, displayName, attr, parentElem) {
	let elem = $("<div></div>");
	elem.append(displayName+": ");
	elem.append(val(stats[attr]));
	if (gridArea.length > 0) {
		elem.attr("style", "grid-area: " + gridArea);
	}
	parentElem.append(elem);
}

function createAttackDisplayElem(key, parentElem) {
	let elem = $("<div></div>");
	let attack = stats.attacks[key];
	let bab = val(stats.BAB);

	let atkBonus = sumBonus("ATK") + bab + (attack.toHit||0);
	let dmgBonus = sumBonus("DMG") + (attack.toDmg||0);

	let extra_attacks = sumBonus("HASTE");
	
	if (attack.type.includes("ranged")) {
		atkBonus += STAT_MOD(stats.totalDEX) + sumBonus("RANGED_ATK");
		dmgBonus += sumBonus("RANGED_DMG");
		if (sumBonus("RANGED_HASTE") > 0) {
			extra_attacks += 1;
		}
	}
	if (attack.type.includes("bow")) {
		atkBonus += sumBonus("BOW_ATK");
		dmgBonus += sumBonus("BOW_DMG");
	}
	if (attack.type.includes("melee")) {
		atkBonus += STAT_MOD(stats.totalSTR);
		dmgBonus += STAT_MOD(stats.totalSTR);
	}

	let iteratives = "";

	for (let i = -5; bab + i >= 0; i -= 5) {
		iteratives += "/" +(atkBonus+i);
	}
	for (let i = 0; i < extra_attacks; ++i) {
		iteratives = "/" + atkBonus + iteratives;
	}

	elem.append("Attack: " + key + " Damage: " + attack.dice +
		"+" + dmgBonus + " " + (attack.extra||"") +
		" | toHit:" + atkBonus + iteratives);
	parentElem.append(elem);
}

function createSwitchElem(toggle, parentElem) {
	let switchElem = $("<div>"+toggle.source+": "+toggle.state+"</div>");

	switchElem.click(function() {
		switch(toggle.state) {
			case "on": toggle.state = "off"; break;
			case "off": toggle.state = "on"; break;
		}
		refreshAll();
	});

	parentElem.append(switchElem);
}

function createSkillsTable() {
	let tableElem = $("<table></table>");
	for (let skill in stats.skills) {
		let bonus = stats.skills[skill];
		tableElem.append("<tr><td>" +
			skillNameMapping(skill) + "</td><td>" +
			bonus + "</td></tr>");
	}
	return tableElem;
}

function skillNameMapping(from) {
	let to = {
		stealth: "Stealth",
		heal: "Heal",
		knowledge_religion: "Knowledge (Religion)",
		perception: "Perception",
	}[from];

	if (undefined == to) return from;
	return to;
}

function sumValues(obj) {
	let result = 0;
	for (let i in obj) {
		result += obj[i];
	}

	return result;
}
