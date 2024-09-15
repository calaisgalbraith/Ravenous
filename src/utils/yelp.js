const apiKey = process.env.REACT_APP_YELP_API_KEY;
const cors = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "https://api.yelp.com/v3";
const searchEndpoint = "/businesses/search";

const Yelp = async (query, location, sort) => {
    if (location === '') { // if location is empty, default search to US
        location = 'us'
    }
    console.log(query)
    console.log(location)
    console.log(sort)

    const url = `${cors}${baseUrl}${searchEndpoint}?term=${query}&location=${location}&sort_by=${sort}`
    console.log(url)
    try {
        const response = await fetch (url,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }
        )
        if (response.ok) {
            const jsonResponse = await response.json();
            const results = jsonResponse.businesses.map((business) => ({
                id: business.id,
                img: business.image_url,
                name: business.name,
                address: `${business.location.display_address[0]}, ${business.location.display_address[1]}`,
                category: business.categories[0].title,
                rating: business.rating,
                reviews: business.review_count,
                url: business.url
            }))
            return results;
        }

    } catch (error) {
        console.log(error)
    }
}

export default Yelp;