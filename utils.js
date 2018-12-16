function val(formula) {
	try {
		var result = eval(formula);
		return result;
	} catch (e) {
		return formula;
	}
}

function applyAdjustments() {
	for (let i in stats.adjustments) {
		let adj = stats.adjustments[i];
		for (let idata in adj.data) {
			let str = adj.data[idata];
			let pos = str.search(/[+-]/);
			let stat = str.substr(0,pos).trim();
			let formula = str.substr(pos).trim();
			if ("total"+stat in stats) {
				applySingleAdjustment(stat, formula);
			}
		}
	}
}

function applySingleAdjustment(stat, formula) {
	console.log("adjust stat: "+stat+" "+formula);
	let val = stats["total"+stat]
	let expr = "val"+formula;
	stats["total"+stat] = eval(expr);
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
