// TODO: (10) validate traits (have to be of different groups)
// TODO: (4) validate extra languages
// TODO: (8) validate items don't share the same slot
// TODO: (2) spells known against spells learned per level / spells learned from spellcraft
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
		let requiredCount = Math.floor(stats.clvl/4);
		if (abilityScoreIncrease[0].bonus.data.length != requiredCount) {
				errorList.push(
				`Exactly ${requiredCount} Ability Score Increases required.
					Actual: ${abilityScoreIncrease[0].bonus.data.join(", ")}`);
			}

		if (stats.innate.filter(x => x.name.match(/Favored Class Bonus/)).length < 1) { 
			errorList.push("No Favored Class Bonuses");
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

			grants = stats.innate.filter(x => x.grant);
			unselectedGrants = [];
			grants.forEach(x => {
				let gr = x.grant;
				if (typeof (gr) == "string") {
					unselectedGrants.push({ name: gr, source: x.name });
				} else {
					gr.forEach(y => unselectedGrants.push({ name: y, source: x.name }));
				}
			});
			
			
			selected = stats.innate.filter(x => x.name.match(/\(.+\)/));
			selected.map((x, i, arr) => arr[i] = { name: x.name });

			unselectedGrants.forEach(x => {
				x.link = selected.find(
					y => (!y.link &&
						y.name.match(new RegExp(`\\(.*${x.name}.*\\)`))));
				if (x.link) x.link.link = x
				else errorList.push(`Not selected: ${x.name} (Source: ${x.source})`);
			});
			
			let languagesAvailable = (stats.skillranks.linguistics || 0)
				+ STARTING_LANGUAGES(stats.race).length;
		if (stats.spellcasting) {
			let spellsLearned = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(
				y => Object.entries(stats.spells).filter(x => x[1].level == y).length);
			// TODO: (10) this might not work for multiple spellcasting sources
			let spellsLearnedGoal = stats.spellcasting
				.filter(x => x.spellsLearned)
				.map(x => val(`${x.spellsLearned} (${stats.clvl})`));
			spellsLearnedGoal.forEach(goal => {
				let remaining = goal.map((x, i) => x - spellsLearned[i]);
				remaining.forEach((x,i)=>{
					if (x > 0) {
						errorList.push(
							`Not enough (${x} missing/${goal[i]}) Level ${i+1} Spells selected.`);
					} else if (x < 0) {
						errorList.push(
							`Too many (${goal[i]-x}/${goal[i]}) Level ${i+1} Spells selected.`);
					}
				});
			});
		}
		} catch {
			
		} finally {
			errorList.map(err => (parent.append(`<div>${err}</div>`)));
			if (errorList.length > 0) parent.append("<hr>");
		}
	}