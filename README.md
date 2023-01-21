## BARGAS FRONTEND


![Home](https://user-images.githubusercontent.com/79957968/209579844-2f1296e7-84d1-449a-afd6-dc826a0193f9.PNG)

## Project Description:
Concept/prototype website & online ordering platform for a restaurant.

You are currently looking the frontend repo. 

## Where's the backend?
I'm using a Strapi CMS project for that, which you can find [here](https://github.com/JonaVS/BargasBackend). 

I'm not a monorepo fan :sweat_smile:

## Notes: 

- The website/app is hybrid. What this means is that the site has both static Gatsby-generated content and dynamic sections that make REST API calls to the Strapi backend.

## Frontend features:

- **Pages:** (home, menu, menu item details, QR code menu, contact, events/promos page, cart details, terms and conditions, privacy info, shopping/ordering help.
- **Navigation:** Business location via Google Maps API & Waze Navigation (Waze is very popular here in Costa Rica that's why I added that).
- **Auth:** signup, password recovery, login using JWT & HttpOnly cookies (I had to override the default implementation of StrapI CMS to achieve this).
- **Cart:** add, edit and delete products.
- **Live chat:** I'm using the Crisp chat service for this.
- **Ordering:** clients are able to place orders anonymously or while logged in. Also, clients are able to pay with Card. I'm using [Greenpay](https://greenpay.me/) payment gateway (I'm using the card webform solution that they host. I'm not touching credit card info). Wanted to use Stripe but sadly is not 100% available here in Costa Rica :upside_down_face:. 
- **User profile:** This page let users change some basic profile info, change their password and see their order history.
  
## Frontend technologies:

- Gatsby.js 
- React.js
- ReactBootstrap
- CSS (For custom components & Bootstrap styles overrides)

## Gallery:
Here are some captures.

![Menu](https://user-images.githubusercontent.com/79957968/209584460-24d7ff1c-d14d-41cb-909e-e4f1ceb0f089.PNG)

![Ordering](https://user-images.githubusercontent.com/79957968/209584475-313a3c0c-9ca9-4276-9148-32335469d7a1.PNG)

![SideCart](https://user-images.githubusercontent.com/79957968/209584613-710710fb-d9b6-4df1-9908-4d395d2d1218.PNG)

![Cart](https://user-images.githubusercontent.com/79957968/209584992-4d94d2f6-3a9a-44c7-bdd8-42323be27c9d.PNG)

![productEdit](https://user-images.githubusercontent.com/79957968/209587032-6481d028-281a-49db-8b2d-fa81bf014af5.PNG)

![Contact](https://user-images.githubusercontent.com/79957968/209585236-8e0fec99-9b2a-438d-a036-b61a19035a43.PNG)

![AuthSample](https://user-images.githubusercontent.com/79957968/209585312-56304db0-8775-4adb-b5b8-c97e10514a8f.PNG)

![userAccountOrder](https://user-images.githubusercontent.com/79957968/209585317-314c6274-ce0a-4d52-81e1-df8d1c2b06f8.PNG)

![Chat](https://user-images.githubusercontent.com/79957968/209587027-ce8873ec-4b70-48b6-bc64-1e72a5ca3188.PNG)

![Responsive](https://user-images.githubusercontent.com/79957968/209587074-b7c36da6-b2f5-4046-a6f1-9476443d54ff.jpg)


