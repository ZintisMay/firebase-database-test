
const firebase = require("firebase");
const publisherClass = require ('./publisherClass.js');
const oldPublisherClass = require ('./oldPublisherClass.js');
const PCH = require('./publisherClassHelpers.js')

//shortened version for now
const compendiumImport = require("./shortCompendium.json");
var rawJSONcompendiumArray = compendiumImport["Compendium"];
//converted to use the publisher class
rawJSONcompendiumArray = convertArrayToPubClass(rawJSONcompendiumArray);

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
localFB.search = function(field,value){
	let returnArr = [];
	let y = this.compendium;
	for(x in y){
		console.log(x)
		if(y[x][field]==value){
			returnArr.push(x)
		}
	}
	return returnArr;	
}



// Test of Search Function
// setTimeout(function(){console.log(localFB.search("Name","93 Made Games"));console.log(localFB.search("Name","Zintis"));},2000);



////////////////////////////////////////////
// This function populates the DB the first time, gives them arbitrary unique identifiers
// pushAllCompendiumEntries(rawJSONcompendiumArray);
function pushAllCompendiumEntries(arr){
	if(Array.isArray(arr)  == true){
		for(var x = 0;x < arr.length;x++){
			// console.log(arr[x]);
			ref.child("Compendium").push(arr[x]);
		}
	}
}

// Data type conversions///////////////////////
function convertToPubClass(entry){
	var newEntry = new publisherClass;
	PCH.convertOldToNew(entry);
	return newEntry;
}

function convertArrayToPubClass(arr){
	var tempArray = [];
	for(x=0;x<arr.length;x++){
		tempArray.push(convertToPubClass(arr[x]));
	}
	return tempArray;
}


///////////////////////////////////////////////
// CRUD////////////////////////////////////////
///////////////////////////////////////////////

// Create // This function takes an object that has the appropriately named properties and casts to publisherClass, then pushes to FB

function createCompendiumEntry(newEntry){
	FBCOMP.push(PCH.convertAnonToPublisherClass(newEntry));
}
// createCompendiumEntry({"Name":"May","BGGPage":"http:www.boardgamegeek.com/02/zintisMay"});

// Read///////////////

FBCOMP.on('value',snapshot=>{
	var snap = snapshot.val();
	for(x in snap){
		localFB[x] = snap[x];
	}
	// console.log("localFB",localFB);
	localFB.compendium = snapshot.val();
	// console.log("localFB",localFB);
});

// Update

// Delete
function deleteCompendiumEntry(entryName){

	let target = localFB.search("Name", "May");
	console.log('target[0]',target[0]);
	FBCOMP.child(target[0]).remove();
}
setTimeout(function(){deleteCompendiumEntry("May");},2000)


// ref.on('value',snap=>console.log(snap.val()));

// var comp = ref.child('Compendium');

// console.log(comp.val());

// This function logs all the fields of all the entries of the DB
// firebase.database().ref().on(
// 	'value',
// 	// snapshot=>console.log(Object.keys(snapshot.val()).forEach(function(key){console.log(snapshot.val()[key])}))
// );


function findPubByName(name){
	var foundEntry;
	// firebase.database().ref().on('value',snap=>snap.val().name == name ? foundGame = snap.val():foundGame = "Name Not Found");
	firebase.database().ref().child().on('value',snap=>snap.val().name == name ? console.log(snap.val()):console.log("Name Not Found"));
	console.log(foundEntry);
	return foundEntry;
}

// var foundGame = findPubByName("Grail Games");
// console.log(foundGame);
// function addPubisher(pubObject){

// }

// function pubObject(){
// 	let firstEntry = compendiumImport["Compendium"][0];
// 	for(var pubKey in firstEntry){
// 		console.log(pubKey);
// 		this[pubKey] = typeof firstEntry[pubKey];
// 	}

// 	return this
// }

// pubObject();

// console.log("=========pubObject==========",pubObject());

// setTimeout(function(){
// 	let pub = findPubByName("ABACUSSPIELE");
// 	console.log(pub);
// },1000)





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


