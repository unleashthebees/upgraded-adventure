function STAT_MOD(x) {
	return Math.floor((x-10)/2);
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
	][clvl];	
}

function BONUS_SPELLS_PER_DAY(mod,slvl) {
	return Math.max(0, Math.ceil((mod-slvl+1)/4));
}