module.exports = class publisherClass {
	constructor(Website,
				InterestedIn,
				Name,
				BGGPage,
				CategoriesArr,
				ContactMethodArr,
				ContactInfo,
				SubmissionsOpen,
				CatalogSize,
				ProfileLastUpdate,
				Country,
				RepresentativeGamesArr,
				KickstarterUseBool){

				this.Website = Website || "";
				this.InterestedIn = InterestedIn || "";
				this.Name = Name || "";
				this.BGGPage = BGGPage || "";
				this.CategoriesArr = CategoriesArr || [];
				this.ContactMethodArr = ContactMethodArr || [];
				this.ContactInfo = ContactInfo || "";
				this.SubmissionsOpen = SubmissionsOpen || false;
				this.CatalogSize = CatalogSize || 0;
				this.ProfileLastUpdate = ProfileLastUpdate || "";
				this.Country = Country || "";
				this.RepresentativeGamesArr = RepresentativeGamesArr || [];
                this.KickstarterUseBool = KickstarterUseBool || "";
                this.Password = "";

                // this.convertOldToNew = convertOldToNew;
	}
}