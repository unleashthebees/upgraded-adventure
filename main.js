var stats;
var exportedKeys = [];

function loadCharacter(filename) {
	console.log("loadCharacter "+filename);
	// TODO: test what happens if this is called multiple times
	var scriptElem = document.createElement("script");
	scriptElem.onload = function() {
		console.log("loaded name: "+characterSheet.name);

		stats = characterSheet;
		exportedKeys = Object.keys(characterSheet);
		calcDerivedValues();
		refreshAll();
	};
	scriptElem.src=filename;
	document.head.appendChild(scriptElem);
}

/* missing input:
		selected domains
		selected deity
		selected feats
		selected traits
		replaced class/race feats
		conditional bonuses
		inventory
		item slots (overview / slot usage)
		clvl based values
	*/

function calcDerivedValues() {
	// other values
	stats.totalSTR = stats.STR + sumBonus("STR");
	stats.totalDEX = stats.DEX + sumBonus("DEX");
	stats.totalCON = stats.CON + sumBonus("CON");
	stats.totalINT = stats.INT + sumBonus("INT");
	stats.totalWIS = stats.WIS + sumBonus("WIS");
	stats.totalCHA = stats.CHA + sumBonus("CHA");

	// TODO: size mods
	stats.totalCMB = val(stats.BAB) + STAT_MOD(stats.totalSTR) + sumBonus("CMB");
	stats.totalCMD = 10 + val(stats.BAB) + STAT_MOD(stats.totalSTR) +
		STAT_MOD(stats.totalDEX) + sumBonus("CMD");

	stats.totalINI = STAT_MOD(stats.totalDEX) + sumBonus("INI");

	stats.totalFOR = STAT_MOD(stats.totalCON) + val(stats.FOR) + sumBonus("FOR");
	stats.totalREF = STAT_MOD(stats.totalDEX) + val(stats.REF) + sumBonus("REF");
	stats.totalWIL = STAT_MOD(stats.totalWIS) + val(stats.WIL) + sumBonus("WIL");

	stats.totalAC = 10 + sumBonus("AC") +
		Math.min(sumBonus("MAXDEXBONUS"), STAT_MOD(stats.totalDEX));

	stats.hitpoints = SUM_HD(stats.HD,stats.totalCON);

	stats.skillRanksOpen = sumBonus("SKILLRANKS") +
		val(stats.skillsRanksAvailable) - sumValues(stats.skillranks);

	stats.skills = {};

	calculateSkill("stealth", "DEX");
	calculateSkill("heal", "WIS");
	calculateSkill("knowledge_religion", "INT");
	calculateSkill("perception", "WIS");
}

// TODO: arrange fields or let them be arranged (drag&drop or dropdown > send to tab X)
// TODO: missing fields: touch AC, flat footed AC, movement speeds
function showCombatStats() {
	let parent = $("#content_combat");
	parent.html("");
	
	createDisplayElem("1/1/span 1/span 1", "Name", "name", parent);
	createDisplayElem("1/2/span 1/span 1", "Classes", "classes", parent);

	createDisplayElem("2/1/span 1/span 1", "STR", "totalSTR", parent);
	createDisplayElem("3/1/span 1/span 1", "DEX", "totalDEX", parent);
	createDisplayElem("4/1/span 1/span 1", "CON", "totalCON", parent);
	createDisplayElem("5/1/span 1/span 1", "INT", "totalINT", parent);
	createDisplayElem("6/1/span 1/span 1", "WIS", "totalWIS", parent);
	createDisplayElem("7/1/span 1/span 1", "CHA", "totalCHA", parent);

	createDisplayElem("2/2/span 1/span 1", "Hitpoints", "hitpoints", parent);
	createDisplayElem("3/2/span 1/span 1", "INI", "totalINI", parent);
	createDisplayElem("4/2/span 1/span 1", "AC", "totalAC", parent);
	createDisplayElem("5/2/span 1/span 1", "FOR", "totalFOR", parent);
	createDisplayElem("6/2/span 1/span 1", "REF", "totalREF", parent);
	createDisplayElem("7/2/span 1/span 1", "WIL", "totalWIL", parent);
	
	
	createDisplayElem("", "CMB", "totalCMB", parent);
	createDisplayElem("", "CMD", "totalCMD", parent);

	createDisplayElem("", "BAB", "BAB", parent);
	//createDisplayElem("", "skillRanksOpen", parent);
	parent.append(createSkillsTable());
	
	//createSpellsElem(parent);

	for (let atk in stats.attacks) {
		createAttackDisplayElem(atk, parent);
	}

	for (let key in stats.bonuses) {
		let bonus = stats.bonuses[key];
		if ("on" == bonus.availability || "off" == bonus.availability) {
			createBonusSwitchElem(bonus, parent);
		}
	}
}

$(".tab_header").click(function() {
	$(".tab_content").hide();
	$("#"+$(this).attr("data-content-tab")).show();
});
$("#tab_combat").click();

function createExportTab() {
	let parent = $("#content_export");
	parent.html("");

	//let exportData = stats;
	let exportData = {};
	for (key in stats) {
		if (exportedKeys.includes(key)) {
			exportData[key] = stats[key];
		}
	}

	let exportStr = "let characterSheet = " +
		JSON.stringify(exportData, undefined, "\t")
		+ ";";
	// replace quotes
	exportStr = exportStr.replace(/\"([^"]+)\":/g,"$1:");

	// remove some whitespace in arrays if they are short enough
	exportStr = exportStr.replace(/\[[^\[\]]{1,80}\]/g,
		function(m) {
			return m.replace(/\n/g, "")
				.replace(/\s{1,}/g, " ")
				.replace(/\[ /g, "[").replace(/ \]/g, "]");
		}
	);
	
	let inputElem = $("<textarea></textarea>");
	inputElem.val(exportStr);

	parent.append(inputElem);
}

function refreshAll() {
	showCombatStats();
	createExportTab();
}

loadCharacter("characters/elenna.js");
