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
	for (var i in dice) {
		result += Math.max(1,dice[i]+conmod);
	}
	return result;
}

function STAT_MOD(x) {
	return Math.floor((x-10)/2);
}

function SPELLS_PER_DAY_PREPARED_FULLCASTER(clvl) {
	return [
		[3,1],
		[4,2],
		[4,2,1],
		[4,3,2],
		[4,3,2,1]
	][clvl];	
}

function createDisplayElem(attr, parentElem) {
	var elem = $("<div></div>");
	elem.append(val(stats[attr]));
	parentElem.append(elem);
}
