# Ravenous

## Description
Ravenous is a web application that recommends restaurants to users based on their location and search query. This app recreates the functionality of Yelp. 

<img width="1393" alt="Screenshot 2024-09-14 at 8 15 57 PM" src="https://github.com/user-attachments/assets/6f41c6e8-1877-408d-86ea-a4ca07cee171">

View demo [here](https://calaisg-ravenous.netlify.app/)

**Note:** To view the demo, users must temporarily unlock access to the CORS demo server via this link: https://cors-anywhere.herokuapp.com/corsdemo

## Tech Stack
* React
* JavaScript
* HTML
* CSS
* Bootstrap
* Yelp Fusion API

## Features
* A list of restaurants is displayed to the user based on results from the Yelp API.
* Each restaurant displays an image, name, address, category, rating, and review count.
* Users can search restaurants by location, keywords, best match, highest rated, and most reviewed.
* Clicking on a restaurant's title launches its Yelp page in a separate tab.
* Loading animation
* The application checks if the user is connected to the CORS demo server. If they are not currently connected, a modal advising them where to connect will be shown (fixes the issue of the application crashing when the user is not connected).
* Contains a "View More" button that allows users to load more results from their existing search
* Back To Top button

## Future Enhancements 
* Add responsive styling for mobile users.
* Add sorting/filtering options for displayed results
* Update styling to account for restaurants with images of non-standard sizes.
* ~~Add "View More" option~~
* ~~Clicking on a restaurant redirects the user to the restaurant's Yelp page.~~
* ~~Add loading animation~~

##### This project is adapted from Code Academy
