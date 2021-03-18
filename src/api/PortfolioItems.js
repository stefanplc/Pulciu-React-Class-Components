// uiux / marketing / identity / others

const portfolioItems = [
	{
		title: "Simply Willed",
		thumbnail: "images/portfolio/simplywilled.jpg",
		category: "marketing",
		url: "http://pulciu.com/portfolio/simplywilled/",
	},
	{
		title: "Echo",
		thumbnail: "images/portfolio/echo.jpg",
		category: "marketing",
		url: "http://pulciu.com/portfolio/echo/",
	},
	{
		title: "Real Estate",
		thumbnail: "images/portfolio/realestate.jpg",
		category: "uiux",
		url: "http://pulciu.com/portfolio/realestate/",
	},
	{
		title: "Senior Care",
		thumbnail: "images/portfolio/senior-care.jpg",
		category: "uiux",
		url: "http://pulciu.com/portfolio/seniorcare/",
	},
	{
		title: "Best In Home Care",
		thumbnail: "images/portfolio/bestinhomecare.jpg",
		category: "identity",
		url: "http://pulciu.com/portfolio/bestinhomecare/",
	},
	{
		title: "Bianovo",
		thumbnail: "images/portfolio/bianovo.jpg",
		category: "marketing",
		url: "http://pulciu.com/portfolio/bianovo/",
	},
	{
		title: "Lunar Year",
		thumbnail: "images/portfolio/lunar-year.jpg",
		category: "marketing",
		url: "http://pulciu.com/portfolio/lny/",
	},
	{
		title: "Bitnami",
		thumbnail: "images/portfolio/bitnami.jpg",
		category: "uiux",
		url: "http://pulciu.com/portfolio/bitnami/",
	},
	{
		title: "Boomerang",
		thumbnail: "images/portfolio/boomerang.jpg",
		category: "uiux",
		url: "http://pulciu.com/portfolio/boomerang/",
	},
	{
		title: "Deadeye",
		thumbnail: "images/portfolio/deadeye.jpg",
		category: "identity",
		url: "http://pulciu.com/portfolio/deadeye/",
	},
	{
		title: "Julian",
		thumbnail: "images/portfolio/julian_portrait.jpg",
		category: "others",
		url: "http://pulciu.com/portfolio/julian/",
	},
	{
		title: "Molekulair",
		thumbnail: "images/portfolio/molekulair.jpg",
		category: "uiux",
		url: "http://pulciu.com/portfolio/molekulair/",
	},
	{
		title: "Manufactuerer's Inventory",
		thumbnail: "images/portfolio/man_inv.jpg",
		category: "identity",
		url: "http://pulciu.com/portfolio/manufacturersinventory/",
	},
	{
		title: "My Brand DNA",
		thumbnail: "images/portfolio/mybranddna.jpg",
		category: "marketing",
		url: "http://pulciu.com/portfolio/mybranddna/",
	},
	{
		title: "Digital Portrait",
		thumbnail: "images/portfolio/portret_andrei.jpg",
		category: "others",
		url: "http://pulciu.com/portfolio/andrei/",
	},
	{
		title: "Rescue Forensics",
		thumbnail: "images/portfolio/rescueforensics.jpg",
		category: "uiux",
		url: "http://pulciu.com/portfolio/rescueforensics/",
	},
	{
		title: "Solar Panda",
		thumbnail: "images/portfolio/solarpanda.jpg",
		category: "identity",
		url: "http://pulciu.com/portfolio/solarpanda/",
	},
	{
		title: "Surface Manufacturing",
		thumbnail: "images/portfolio/surface_manufacturing.jpg",
		category: "uiux",
		url: "http://pulciu.com/portfolio/surfacemanufacturing/",
	},
	{
		title: "Think Aqua",
		thumbnail: "images/portfolio/thinkaqua.jpg",
		category: "identity",
		url: "http://pulciu.com/portfolio/thinkaqua/",
	},
	{
		title: "Tome of Heroes",
		thumbnail: "images/portfolio/tome_eerie.jpg",
		category: "others",
		url: "http://pulciu.com/portfolio/tomeeriecemetery/",
	},
	{
		title: "Tome of Heroes",
		thumbnail: "images/portfolio/tome_icon.jpg",
		category: "identity",
		url: "http://pulciu.com/portfolio/tomelogo/",
	},
	{
		title: "Tome of Heroes",
		thumbnail: "images/portfolio/tome_rockyglade.jpg",
		category: "others",
		url: "http://pulciu.com/portfolio/tomerockyglade/",
	},
	{
		title: "Tome of Heroes",
		thumbnail: "images/portfolio/tome_trailer_launch.jpg",
		category: "marketing",
		url: "http://pulciu.com/portfolio/tometrailer/",
	},
	{
		title: "Urban Clout",
		thumbnail: "images/portfolio/urbanclout.jpg",
		category: "uiux",
		url: "http://pulciu.com/portfolio/urbanclout/",
	},
	{
		title: "USPCA",
		thumbnail: "images/portfolio/uspca.jpg",
		category: "identity",
		url: "http://pulciu.com/portfolio/uspca/",
	},
	{
		title: "White Space",
		thumbnail: "images/portfolio/whitespace.jpg",
		category: "identity",
		url: "http://pulciu.com/portfolio/whitespace/",
	},
	{
		title: "WP Server",
		thumbnail: "images/portfolio/wpserver.jpg",
		category: "identity",
		url: "http://pulciu.com/portfolio/wpserver/",
	},
	{
		title: "Legal Coffee",
		thumbnail: "images/portfolio/legal-coffee.jpg",
		category: "marketing",
		url: "http://pulciu.com/portfolio/legalcoffee/",
	},
	{
		title: "Amplitude",
		thumbnail: "images/portfolio/amplitude.jpg",
		category: "uiux",
		url: "http://pulciu.com/portfolio/amplitude/",
	},
	{
		title: "Auto Loans",
		thumbnail: "images/portfolio/auto-loans.jpg",
		category: "marketing",
		url: "http://pulciu.com/portfolio/autoloans/",
	},
	{
		title: "3d-sign",
		thumbnail: "images/portfolio/3dprint.jpg",
		category: "marketing",
		url: "http://pulciu.com/portfolio/3dsbusinesscards/",
	},
	{
		title: "3d-sign",
		thumbnail: "images/portfolio/3ds-old.jpg",
		category: "others",
		url: "http://pulciu.com/portfolio/3dsflashv2/",
	},
	{
		title: "Weebly",
		thumbnail: "images/portfolio/weebly_creative.jpg",
		category: "uiux",
		url: "http://pulciu.com/portfolio/weeblycreative/",
	},
	{
		title: "Reliable",
		thumbnail: "images/portfolio/reliable.jpg",
		category: "uiux",
		url: "http://pulciu.com/portfolio/reliable/",
	},
];

export function getPortfolioItems() {
	return portfolioItems;
}

export function getPortfolioItem(id) {
	return portfolioItems.find((p) => portfolioItems.indexOf(p) === id);
}

export function filterByCategory(category) {
	return portfolioItems.filter((p) => p.category === category);
}

export function filterByTitle(search) {
	return portfolioItems.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));
}

export function getFavoritesFromLink(linkString) {
	let favoriteIds = linkString.split("-");
	let favorites = [];

	for (let i = 0; i < favoriteIds.length; i++) {
		favorites.push(portfolioItems[parseInt(favoriteIds[i])]);
	}
	return favorites;
}
