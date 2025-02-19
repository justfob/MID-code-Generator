function generateCompanyCode(companyName) {
    try {
        if (!companyName) return '';
        
        // Split into words, removing empty strings and special characters
        const words = companyName.split(/[\s,.]+/).filter(word => word.length > 0);
        
        if (words.length >= 2) {
            // Take first three letters from first two words
            const firstWordCode = words[0].substring(0, 3).toUpperCase();
            const secondWordCode = words[1].substring(0, 3).toUpperCase();
            return firstWordCode + secondWordCode;
        } else {
            // If only one word, take first three letters
            return companyName.substring(0, 3).toUpperCase();
        }
    } catch (error) {
        reportError(error);
        return '';
    }
}

function extractAddressNumber(address) {
    try {
        if (!address) return '';
        
        // Match all numbers in the address
        const numbers = address.match(/\d+/g);
        if (!numbers) return '';

        // Convert all numbers to integers and find the maximum
        const maxNumber = Math.max(...numbers.map(num => parseInt(num, 10)));
        
        // Convert to string and take first 4 digits
        return maxNumber.toString().substring(0, 4);
    } catch (error) {
        reportError(error);
        return '';
    }
}

function generateCityCode(cityName) {
    try {
        if (!cityName) return '';
        return cityName.substring(0, 3).toUpperCase();
    } catch (error) {
        reportError(error);
        return '';
    }
}

function generateMIDCode(countryCode, companyName, address, cityName) {
    try {
        const company = generateCompanyCode(companyName);
        const addressNum = extractAddressNumber(address);
        const city = generateCityCode(cityName);
        
        return `${countryCode}${company}${addressNum}${city}`;
    } catch (error) {
        reportError(error);
        return '';
    }
}
