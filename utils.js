function val(formula) {
	try {
		var result = eval(formula);
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

function createDisplayElem(attr, parentElem) {
	var elem = $("<div></div>");
	elem.append(attr+": ");
	elem.append(val(stats[attr]));
	parentElem.append(elem);
}

function createSpellsElem(parentElem) {
	var elem = $("<div></div>");
	elem.append("MAGIC");

	parentElem.append(elem);
}
