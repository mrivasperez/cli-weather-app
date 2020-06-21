const forecast = require('./utils/forecast');
const search = require('./utils/search')


const location = process.argv[2];
console.log(search.search(location));


/* ///////////////////////////////////////////

-- CODE NOT RELEVANT TO PRODUCTION BUILD

const url = 'http://api.weatherstack.com/current?access_key=5aa3605cb312519ea305b90d159ec3f4&query=Seattle';

1. Print the temperature and chance of rain in Seattle

request({url: url, json: true}, (error, response) => {
    console.log(`In ${response.body.location.name}, it is ${response.body.current.weather_descriptions[0]}. The temperature is ${(((response.body.current.temperature)*(9/5))+32)} degrees Fahrenheit. There is a ${response.body.current.precip} percent change of rain. It feels like it is ${(((response.body.current.feelslike)*(9/5))+32)} degrees Fahrenheit`);
})

Using prompt to search
prompt.get(['location'], (error, result) => {
    // Error handling
    if (error) {console.log('ERROR'); return};

    let userLocation = result.location.split(' ').join('%');

    if (userLocation.length === 0) {
        console.log('You did not type a location');
        return;
    };
    // Continue if no error:
    let locationurl = `http://api.weatherstack.com/current?access_key=5aa3605cb312519ea305b90d159ec3f4&query=${userLocation}`;
    // Use the postman-request npm package to request info from userLocation
    request({url: locationurl, json: true}, (error, response) => {
        // ERROR HANDLER for request
        if (error) {
            console.log('ERROR: Unable to connect to weather service. Are you online?'); 
            return;
        } else if (response.body.error){
            console.log('ERROR: Unable to find location. Please try a different search.');
        // formatted results 
        } else {
            console.log(`In ${response.body.location.name}, it is ${response.body.current.weather_descriptions[0]}. The temperature is ${(((response.body.current.temperature)*(9/5))+32)} degrees Fahrenheit. There is a ${response.body.current.precip} percent change of rain. It feels like it is ${(((response.body.current.feelslike)*(9/5))+32)} degrees Fahrenheit.`);   
        };
    });
});

*/ /////////////////////////////