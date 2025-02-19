const canadaProvinces = [
    { code: "AB", name: "Alberta" },
    { code: "BC", name: "British Columbia" },
    { code: "MB", name: "Manitoba" },
    { code: "NB", name: "New Brunswick" },
    { code: "NL", name: "Newfoundland and Labrador" },
    { code: "NS", name: "Nova Scotia" },
    { code: "ON", name: "Ontario" },
    { code: "PE", name: "Prince Edward Island" },
    { code: "QC", name: "Quebec" },
    { code: "SK", name: "Saskatchewan" },
    { code: "NT", name: "Northwest Territories" },
    { code: "NU", name: "Nunavut" },
    { code: "YT", name: "Yukon" }
];

const countries = [
    { code: "GB", name: "United Kingdom" },
    { code: "NL", name: "Netherlands" },
    { code: "DE", name: "Germany" },
    { code: "US", name: "United States" },
    { code: "CN", name: "China" },
    { code: "FR", name: "France" },
    { code: "ES", name: "Spain" },
    { code: "IT", name: "Italy" },
    { code: "JP", name: "Japan" },
    { code: "CA", name: "Canada", provinces: canadaProvinces }
];

function searchCountries(query) {
    try {
        const searchTerm = query.toLowerCase();
        return countries.filter(country => 
            country.name.toLowerCase().includes(searchTerm) || 
            country.code.toLowerCase().includes(searchTerm)
        );
    } catch (error) {
        reportError(error);
        return [];
    }
}
