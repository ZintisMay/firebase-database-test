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

function convertOldToNew(oc){
	let newPub = new publisherClass;
      newPub.Website = stripHTTPAddress(oc["Publisher_Website"]) || "";
      newPub.InterestedIn = oc["Interested_In"] || "";
      newPub.Name = oc["Publisher_Name"] || "";
      newPub.BGGPage = stripHTTPAddress(oc["BoardGameGeek_Page"]) || "";
      
      newPub.CategoriesArr = stringToArray(oc["Categories_of_Interest"]) || [];
	  // console.log(newPub.CategoriesArr)
      newPub.ContactMethodArr = stringToArray(oc["Method_of_Contact"]) || [];
      newPub.ContactInfo = oc["Contact_Info"] || "";
      newPub.SubmissionsOpen = oc["Accepting_Submissions"] || "";
      newPub.CatalogSize = oc["Catalog_Size"] || "";
      newPub.ProfileLastUpdate = oc["Profile_Updated_On"] || "";
      newPub.Country = oc["Country"] || "";
      newPub.RepresentativeGamesArr = stringWithLineBreaksToArray(oc["Representative_Games"]) || [];
      // console.log(newPub.RepresentativeGamesArr);
      newPub.KickstarterUseBool = oc["Planned_Use_of_Kickstarter"] || "";
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