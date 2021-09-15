# Feature planning to scope out the MVP

## MVPs

### Home page with Hero and horizontally showcased products

- create ProductsArea component and place on home page
- create Title with animation
- add Title to ProductsArea
- research horizontal scrolling
- create ProductCard with images, ProductName and ProductPrice and animation
- create ProductsReel which holds all ProductCards
- add ProductsReel to ProductsArea
- add logo and 'Handcrafted in Peru' text to Hero component

Complete

### ProcessPage

- create ProcessPage component with Title
- use ReactRouter to route to Home, ProductsArea(in Home, use ID?) and ProcessPage
- create a NavBar component for the Router Links
- add NavBar to HomePage and ProcessPage
- create ProcessSection component with image and description
- add ProcessSections to page
- use state to determine styling (if image is on left or right) for ProcessSections

### ProductPage

- create page for each product (5)
- add NavBar to each page
- create ProductItem component with price, product name, description, materials list, and image
- create CTA button to send user to email message, prepopulated subject line, to address, message body (mailchimp?)
- add CTA button to ProductItem
- add a ProductItem to each ProductPage
- in ProductsArea, add links to each product to bring user to the specific ProductPage

### AboutPage

- create AboutPage with Title
- update NavBar to link to AboutPage
- add NavBar to AboutPage
- create AboutItem with text and image
- add AboutItem to AboutPage
