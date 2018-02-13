getTheDate = function (theDate){
	if(theDate){
		theDate = new Date(theDate);
	}else{
		theDate = new Date();
	}	
	let dd = theDate.getDate();
	let mm = theDate.getMonth()+1;
	let yyyy = theDate.getFullYear();

	if(dd<10){
		dd = "0" + dd;
	}

	if(mm < 10){
		mm = '0' + mm;
	}

	theDate = mm + "/" + dd + "/" + yyyy;
	return theDate;
}

module.exports = getTheDate;