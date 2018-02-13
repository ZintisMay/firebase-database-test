
const firebase = require("firebase");
const PublisherClass = require ('./publisherClass.js');
const OldPublisherClass = require ('./oldPublisherClass.js');
const publisherClassHelpers = require('./publisherClassHelpers.js')

//shortened version for now
const compendiumImport = require("./compendium.json");
var rawJSONcompendiumArray = compendiumImport["Compendium"];
//converted to use the publisher class
rawJSONcompendiumArray = convertArrayToPubClass(rawJSONcompendiumArray);
// console.log("rawJSONcompendiumArray",rawJSONcompendiumArray);

// Data type conversions///////////////////////
function convertArrayToPubClass(arr){
	var tempArray = [];
	for(x=0;x<arr.length;x++){
		let newPub = new PublisherClass;
		newPub = publisherClassHelpers.convertOldToNew(arr[x]);
		tempArray.push(newPub);
	}
	return tempArray;
}

//Helpers
var getTheDate = require('./getDate.js');

//FIREBASE////////////////////////////////////////////
const config = {
    apiKey: "AIzaSyD6tuKMUla87itdRnpuV5QLOSTEg7bgbEE",
    authDomain: "fb-db-test-z.firebaseapp.com",
    databaseURL: "https://fb-db-test-z.firebaseio.com",
    projectId: "fb-db-test-z",
    storageBucket: "fb-db-test-z.appspot.com",
    messagingSenderId: "387720352602"
};
firebase.initializeApp(config);
const fbdb = firebase.database();
const ref = fbdb.ref();
const FBCOMP = ref.child("Compendium");

// LOCAL FIREBASE ENTRY stores the info and is updated when firebase does on "val"
localFB = {};

// This function will look into the DB for an entry that matches the query
localFB.search = function(value,field){
	let returnArr = [];
	let y = this.compendium;
	for(x in y){
		if(y[x][field]==value){
			returnArr.push(x)
		}
	}
	return returnArr;	
}



///////////////////////////////////////////////
// Populate DB Run once only///////////////////
///////////////////////////////////////////////
function pushAllCompendiumEntries(arrayOfEntries){
	if(Array.isArray(arrayOfEntries)  == true){
		for(var x = 0;x < arrayOfEntries.length;x++){
			ref.child("Compendium").push(arrayOfEntries[x]);
		}
	}
}
// pushAllCompendiumEntries(rawJSONcompendiumArray);




///////////////////////////////////////////////
// CRUD////////////////////////////////////////
///////////////////////////////////////////////

// Create ///////////////////////////////////////////////////////////

function createCompendiumEntry(newEntry){
	FBCOMP.push(publisherClassHelpers.convertAnonToPublisherClass(newEntry));
}


// Read/////////////////////////////////////////////////////////

FBCOMP.on('value',snapshot=>{
	localFB.compendium = snapshot.val();
});

// Update///////////////////////////////////////////////////////

function updateCompendiumEntry(entryIdentifier, changeObject, optionalKey){

	if(!changeObject || typeof changeObject != "object" || Object.keys(changeObject).length == 0){
		console.log("error, no changes object passed")
		return null;
	}

	let target=[];
	if(typeof entryIdentifier == 'string' && typeof optionalKey == 'string'){
		target = localFB.search(entryIdentifier,optionalKey);
	}else if (typeof entryIdentifier == 'string'){
		target.push(entryIdentifier);
	}else{return null;}

	console.log('target[0]',target[0]);
	FBCOMP.child(target[0]).update(changeObject);
}


// Delete///////////////////////////////////////////////////////
function deleteCompendiumEntry(entryIdentifier, optionalKey){

	let target=[];
	if(typeof entryIdentifier == 'string' && typeof optionalKey == 'string'){
		target = localFB.search(entryIdentifier, optionalKey);
	}else if (typeof entryIdentifier == 'string'){
		target.push(entryIdentifier);
	}else{return null;}

	console.log('target[0]',target[0]);
	FBCOMP.child(target[0]).remove();
}

/////////////////////////Readline Code

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// (function evalQuestion(){
// 	rl.question('=============Enter line to evaluate as JS=============\n', (answer) => {
// 	  // TODO: Log the answer in a database
// 	  try{eval(answer)}
// 	  catch(err){
// 	  	console.log("ERROR", err);
// 	  	evalQuestion();
// 	  };

// 	  rl.close();
// 	  evalQuestion();
// 	});
// })();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Test of Search Function
// setTimeout(function(){console.log(localFB.search("Name","93 Made Games"));console.log(localFB.search("Name","Zintis"));},2000);

//New Entry Example
// createCompendiumEntry({"Name":"Zintis"});

// Update Entry
setTimeout(function(){
updateCompendiumEntry("Zintis",{"qwer":"try"},"Name")
},2000)

//Deletion Example:
// setTimeout(function(){deleteCompendiumEntry("Good Games Publishing","Name");},1000)