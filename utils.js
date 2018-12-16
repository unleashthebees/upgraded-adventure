function val(formula) {
	try {
		var result = eval(formula);
		return result;
	} catch (e) {
		return formula;
	}
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

function STAT_MOD(x) {
	return Math.floor((x-10)/2);
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