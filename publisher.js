module.exports = class publisherClass {
	constructor(Website,
				InterestedIn,
				Name,
				BGGPage,
				Categories,
				Contact,
				SubmissionsOpen,
				CatalogSize,
				ProfileLastUpdate,
				Country,
				RepresentativeGames){

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
	}
}