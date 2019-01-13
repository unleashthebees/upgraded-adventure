// TODO: validate these:
	// traits (have to be of different groups)
	// granted fields (e.g. cleric grants domains, witch grants hexes)
	// favored class bonuses
	// extra languages
	function showValidatorInfo(parent) {
		let errorList = [];
		try {
			if (!stats.classes) errorList.push("No classes");
			if (!stats.race) errorList.push("No race");
			if (!stats.STR) errorList.push("No STR score");
			if (!stats.DEX) errorList.push("No DEX score");
			if (!stats.CON) errorList.push("No CON score");
			if (!stats.INT) errorList.push("No INT score");
			if (!stats.WIS) errorList.push("No WIS score");
			if (!stats.CHA) errorList.push("No CHA score");
			if (!stats.BAB) errorList.push("No Base Attack Bonus");
			if (!stats.FOR) errorList.push("No Fortitude save base value");
			if (!stats.REF) errorList.push("No Reflex save base value");
			if (!stats.WIL) errorList.push("No Will save base value");
			if (!stats.HD) errorList.push("No Hit Dice");
			if (!stats.clvl) errorList.push("No Total Character Level (clvl)");
			if (stats.HD.length != stats.clvl) {
				errorList.push(`|Hit Dice ${stats.HD}| &ne; clvl ${stats.clvl}`);
			}
			let traits = stats.innate.filter(x => x.name.match(/\(.*Trait.*\)/g));
			if (traits.length != 3) {
				errorList.push(`Exactly 3 traits are required. (Selected (${
					traits.length}): ${traits.map(x => x.name).join(", ") || "None"})`);
			}
			let abilityScoreIncrease = stats.innate.filter(
				x => x.name.match(/Ability Score Increase\s*\([\s\S]*Levels?[\s\S]*\)/g));
			if (abilityScoreIncrease.length > 1) {
				errorList.push(`Duplicate: ${
					abilityScoreIncrease.map(x=>x.name).join(", ")}`);
			} else if (abilityScoreIncrease.length == 0) {
				errorList.push("No Ability Score Increases");
			}
			let testVal = Math.floor(stats.clvl/4);
			if (abilityScoreIncrease[0].bonus.data.length != testVal) {
				errorList.push(
					`Exactly ${testVal} Ability Score Increases required.
					Actual: ${abilityScoreIncrease[0].bonus.data.join(", ")}`);
			}

			let feats = stats.innate.filter(x => x.name.match("\\(Feat.*\\)"));
			let featsAvailable =
				Math.ceil(stats.clvl / 2) + (stats.race.match("Human") ? 1 : 0);
			if (feats.length != featsAvailable) {
				errorList.push(`Exactly ${featsAvailable} feats are required. (Selected (${
					feats.length}): ${feats.map(x => x.name).join(", ") || "None"})`);
			}

			if (!stats.skillsPerLevel) errorList.push("No skills per level");
			if (stats.skillRanksOpen) {
				errorList.push(`${stats.skillRanksOpen} skill ranks (of ${
					stats.totalSkillRanks}) not invested`);
			}

			if (!stats.innate.filter(x=>x.name.match("Class Skills")).length>0) {
				errorList.push("No innate property \"Class Skills\"");
			}

			errorList.push("TEST");
		} catch {
			
		} finally {
			errorList.map(err => (parent.append(`<div>${err}</div>`)));
			if (errorList.length > 0) parent.append("<hr>");
		}
	}