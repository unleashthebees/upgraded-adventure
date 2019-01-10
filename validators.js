// TODO: validate these:
	// abilities
	// increases at levels
	// feats
	// traits
	// skills
	// 		missing skills
	// 		class skills
	// hit dice (amount = clvl)
	// other fields (e.g. race=human grants an extra feat and extra skill ranks)
	function showValidatorInfo(parent) {
		let errorList = [];
		if (!stats.classes) errorList.push(`No classes`);
		if (!stats.race) errorList.push(`Missing race`);
		
		errorList.map(err => (parent.append(`<div>${err}</div>`)));
		if (errorList.length > 0) parent.append("<hr>");
	}