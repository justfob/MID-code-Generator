function App() {
    const [formData, setFormData] = React.useState({
        country: null,
        companyName: '',
        address: '',
        cityName: ''
    });

    const handleCountrySelect = (country) => {
        try {
            setFormData(prev => ({
                ...prev,
                country: country
            }));
        } catch (error) {
            reportError(error);
        }
    };

    const handleInputChange = (field, value) => {
        try {
            setFormData(prev => ({
                ...prev,
                [field]: value
            }));
        } catch (error) {
            reportError(error);
        }
    };

    const getMIDCode = () => {
        try {
            if (!formData.country) return '';
            
            return generateMIDCode(
                formData.country.code,
                formData.companyName,
                formData.address,
                formData.cityName
            );
        } catch (error) {
            reportError(error);
            return '';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" data-name="app-container">
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow" data-name="form-container">
                <h1 className="text-2xl font-bold text-center mb-8" data-name="app-title">
                    MID Code Generator
                </h1>
                
                <div className="mb-4" data-name="country-field">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                    </label>
                    <CountrySelect
                        selectedCountry={formData.country}
                        onCountrySelect={handleCountrySelect}
                    />
                </div>

                <InputField
                    label="Company Name"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    placeholder="Enter company name"
                />

                <InputField
                    label="Address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Enter address"
                />

                <InputField
                    label="City Name"
                    value={formData.cityName}
                    onChange={(e) => handleInputChange('cityName', e.target.value)}
                    placeholder="Enter city name"
                />

                <ResultDisplay midCode={getMIDCode()} />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div data-name="root">
        <App />
    </div>
);
