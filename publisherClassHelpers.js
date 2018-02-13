const publisherClass = require('./publisherClass.js');

function convertAnonToPublisherClass(o){
	let newPub = new publisherClass;
	for(let x in newPub){
		if(o[x]){
			newPub[x] = o[x];
		}
	}
	return newPub;
}

function convertOldToNew(oldPub){

	let newPub = new publisherClass;
	newPub.Website = stripHTTPAddress(oldPub["Publisher_Website"]) || "";
	newPub.InterestedIn = oldPub["Interested_In"] || "";
	newPub.Name = oldPub["Publisher_Name"] || "";
	newPub.BGGPage = stripHTTPAddress(oldPub["BoardGameGeek_Page"]) || "";
	newPub.CategoriesArr = stringToArray(oldPub["Categories_of_Interest"]) || [];
	newPub.ContactMethodArr = stringToArray(oldPub["Method_of_Contact"]) || [];
	newPub.ContactInfo = oldPub["Contact_Info"] || "";
	newPub.SubmissionsOpen = oldPub["Accepting_Submissions"] || "";
	newPub.CatalogSize = oldPub["Catalog_Size"] || "";
	newPub.ProfileLastUpdate = oldPub["Profile_Updated_On"] || "";
	newPub.Country = oldPub["Country"] || "";
	newPub.RepresentativeGamesArr = stringWithLineBreaksToArray(oldPub["Representative_Games"]) || [];
	newPub.KickstarterUseBool = oldPub["Planned_Use_of_Kickstarter"] || "";
	// console.log("oldPub",oldPub);
	// console.log("newPub",newPub);
	
	return newPub;
}

function stripHTTPAddress(addy){

	var index = addy.search("http");
	addy = addy.substring(index,addy.length-1);
	index = addy.search("\"");
	addy = addy.substring(0,index);
	return addy;
}

function stringToArray(string){
	return string.replace(/\[/g,"").replace(/\]/g,"").split(", ");
}

function stringWithLineBreaksToArray(string){
	return string.split("\n");
}

module.exports = {"convertOldToNew":convertOldToNew,"convertAnonToPublisherClass":convertAnonToPublisherClass}