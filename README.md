# Cinephile.net
A front end website, which simulates the booking of movie tickets.

# Contents
1) How to run the code 
2) Basic Structure 
3) Challenges faced

# 1) How to run the code
1.1) Clone the GitHub repository \
1.2) Install npm and react \
1.3) Go to the app folder in the terminal which contains folders like src, public etc. \
1.4) Run the commands ```npm run build```, and then run ```npm start``` . \
1.5) The website will run in the browser.

# 2) Basic Structure
2.1) Basic Flow \


1) The home page has a list of movie posters, which serve as hyperlinks to the info pages of the respective movies. 
2) The home page also has a contact us option which takes us to a form in which the user can enter any issues that they may face. A confimation page is shown which tells the user that the issue has been registered. 
3) The info pages contain the synopsis, cast, critics reviews for the movie. Clicking on the cast names takes you to the respective Wikipedia pages of the cast members. It also has an option to watch the trailer of the movie or book tickets. 
4) The book tickets option will take us to the ticket booking page where the ticket will be booked. It contains options such as selecting movie theaters, dates, and no of seats. At the end, a confirmation page is shown which tells the user that the ticket boking is successful. 
5) Each of these pages has a back to home link which will take us back to the home page

2.2) File Structure \
 
1) build represents the path to our final production build. This folder would actually be created after we run the npm build.
2) We can see all the "dependencies" and "devDependencies" required by our React app in node_modules.
3) Our static files are located in the public directory. Files in this directory will retain the same name when deployed to production. Thus, they can be cached at the client-side and improve the overall download times.
4) All of the dynamic components will be located in the src. All the code and image assets are contained are contained in this folder.


# 3) Challenges faced

1) We faced the challenge of trying to structure the web page according to how we designed in figma as grids sometimes gave unexpected results.
2) We also had limited understanding of bootstrap and react which we used to implement this website.
3) We overcame these problems using Google and Youtube tutorials, and sometimes some help from seniors :)
