var mod = angular.module("communityMod", []);

mod.factory("community", function() {
	return {
		links: [
			{
				title: "Open Call for Data Science Research Projects",
				url: "#/eDSR",
	            highlight: 'Accepting applications: ',
				target: "_self"
			},
			{
				title: "Satellite BD2K-LINCS meeting at the Society of Toxicology (SOT) annual meeting",
				url: "/#/education/sotoutreach",
	            highlight: '',
				target: "_self"
			},
			{
				title: "Crowdsourcing Portal",
				url: "http://www.maayanlab.net/crowdsourcing/",
	            highlight: '',
				target: "_blank"
			}
		]
	};
});