exports.flagGetter = (country: string) => {
    let countryCode = ""
    if(country === "Australia"){
        countryCode = "AU"
    }if(country === "United Kingdom"){
        countryCode = "GB"
    }if(country === "Norway"){
        countryCode = "NO"
    }if(country === "United States of America"){
        countryCode = "US"  
    }if(country === "India"){
        countryCode = "IN" 
    }if(country === "Peru"){
        countryCode = "PE"  
    }if(country === "Germany"){
        countryCode = "DE"   
    }if(country === "South Africa"){
        countryCode = "ZA"  
    }if(country === "Hong Kong"){
        countryCode = "HK"
    }
    return countryCode
}

exports.distanceCalc = (longitude1: number, latitude1: number, longitude2: number, latitude2: number) => {
    const radius = 6371
    const lat1 = latitude1 * Math.PI/180
    const lat2 = latitude2 * Math.PI/180
    const disLats = (latitude2 - latitude1) * Math.PI/180
    const disLons = (longitude2 - longitude1) * Math.PI/180
    const a = Math.sin(disLats/2) * Math.sin(disLats/2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(disLons/2) * Math.sin(disLons/2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    const d = radius * c
    return d // distance in km
}