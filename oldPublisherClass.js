// Publisher_Website": "<a href= \"http:\/\/www.93madegames.com.au\/\" target = \"_blank\">93 Made Games<\/a>",
//       "Planned_Use_of_Kickstarter": "sometimes",
//       "Interested_In": "Abstract games that can be merged with a \"take that\" style game.",
//       "Publisher_Name": "93 Made Games",
//       "BoardGameGeek_Page": "<a href= \"http:\/\/www.boardgamegeek.com\/boardgamepublisher\/10997\/93-made-games\" target = \"_blank\">93 Made Games on BGG<\/a>",
//       "Categories_of_Interest": "[kids games, thematic games, gateway games, card games, family games, social games]",
//       "Method_of_Contact": "[]",
//       "Contact_Info": "Contact via social media channels @93MadeGames",
//       "Accepting_Submissions": "No",
//       "Catalog_Size": "2-4 published games",
//       "Profile_Updated_On": "18-Oct-2016",
//       "Country": "Australia",
//       "Representative_Games": "Viewpoint\nViewpoint Reflections\nMonster Town\nNo Fish!"

module.exports = class oldPublisherClass {
      constructor(
                  Website,
                  InterestedIn,
                  Name,
                  BGGPage,
                  Categories,
                  Contact,
                  SubmissionsOpen,
                  CatalogSize,
                  ProfileLastUpdate,
                  Country,
                  RepresentativeGames,
                  KickstarterUse){

                        this.Website = Website || "";
                        this.InterestedIn = InterestedIn || "";
                        this.Name = Name || "";
                        this.BGGPage = BGGPage || "";
                        this.Categories = Categories || "";
                        this.Contact = Contact || "";
                        this.SubmissionsOpen = SubmissionsOpen || false;
                        this.CatalogSize = CatalogSize || 0;
                        this.ProfileLastUpdate = ProfileLastUpdate || "";
                        this.Country = Country || "";
                        this.RepresentativeGames = RepresentativeGames || "";
                        this.KickstarterUse = KickstarterUse || "";

                        
      }

}

