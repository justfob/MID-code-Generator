function CountrySelect({ selectedCountry, onCountrySelect }) {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [showOptions, setShowOptions] = React.useState(false);
    const [showProvinces, setShowProvinces] = React.useState(false);
    const [selectedMainCountry, setSelectedMainCountry] = React.useState(null);
    const [filteredCountries, setFilteredCountries] = React.useState(countries);

    const handleSearch = (event) => {
        try {
            const term = event.target.value;
            setSearchTerm(term);
            setFilteredCountries(searchCountries(term));
            setShowOptions(true);
            setShowProvinces(false);
        } catch (error) {
            reportError(error);
        }
    };

    const handleCountryClick = (country) => {
        try {
            if (country.code === 'CA') {
                setSelectedMainCountry(country);
                setShowProvinces(true);
                setShowOptions(false);
                setSearchTerm('Canada - Select Province');
            } else {
                selectCountry(country);
            }
        } catch (error) {
            reportError(error);
        }
    };

    const handleProvinceClick = (province) => {
        try {
            const countryWithProvince = {
                ...selectedMainCountry,
                code: `CA${province.code}`,
                provinceName: province.name
            };
            selectCountry(countryWithProvince);
            setShowProvinces(false);
        } catch (error) {
            reportError(error);
        }
    };

    const selectCountry = (country) => {
        try {
            onCountrySelect(country);
            setShowOptions(false);
            setSearchTerm(country.provinceName 
                ? `${country.code} - Canada (${country.provinceName})`
                : `${country.code} - ${country.name}`);
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div className="country-select" data-name="country-select">
            <input
                type="text"
                className="input-field"
                placeholder="Search country..."
                value={searchTerm}
                onChange={handleSearch}
                onFocus={() => {
                    setShowOptions(true);
                    setShowProvinces(false);
                }}
                data-name="country-search-input"
            />
            {showOptions && (
                <div className="country-options" data-name="country-options">
                    {filteredCountries.map(country => (
                        <div
                            key={country.code}
                            className="country-option"
                            onClick={() => handleCountryClick(country)}
                            data-name={`country-option-${country.code}`}
                        >
                            {country.code} - {country.name}
                            {country.code === 'CA' && " (Select for provinces)"}
                        </div>
                    ))}
                </div>
            )}
            {showProvinces && (
                <div className="country-options" data-name="province-options">
                    {canadaProvinces.map(province => (
                        <div
                            key={province.code}
                            className="country-option"
                            onClick={() => handleProvinceClick(province)}
                            data-name={`province-option-${province.code}`}
                        >
                            {province.code} - {province.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
