# Company-management-web-app

## Installation Steps:

1. Install nodejs and npm on your device.
2. Clone the repository to your local system.
3. In the root folder, create a '.env' file
4. Create a MongoDB Atlas server and get the MongoDB uri
5. Add env variables as "MONGO_URI" to the .env file
6. Add a PORT variable and JWT_SECRET variable too.
7. Set PORT = 5000
8. Set JWT_SECRET as a string of your choice.


## Steps to run the project

1. Open up the command terminal from the root directory and type `npm start` to start the backend server.

2. Open another command prompt and type the following to start the frontend.  
`cd client`  
`npm start`

3. The application would be run on localhost:3000

4. one admin i created   

    username : admin-default 
    password: Taylor

## List of implemented features

* Admin can add and delete sub-admin and other admins
* Admin and subadmin can add and delete the compnies 
* Admin can add and delete user
* There are separate pages for user login and admin login
* The view of page is different for admin/subadmin and user
* When user is logged in he can see the companies he can apply to and list of other users
* The user and admins are authenticated by jwt-tokens
* When admin is logged in he gets the options to add, see 
*, and delete all three i.e user, admin and companies 
* Companies can be searched by the search-box provied for user-friendly practices
* User dashboard where user can see the list of companies and the list of other users
* Admin dashboard where he can controll the user, companies ,and other admins
* The home page shows list of companies 
* Navbar toggles when viewed in small devices


## List of planned features

* User authentication with Google OAuth
* Better and responsive UI
* company dashboard which will list the companies according to eligibility criteria fulfilled by users
* Dark mode
* Scroll up and scroll down button
* 
* More filtering options

## List of known bugs
* when the user chooses to apply for companies he gets the message : "no service found" that means he is logged in but 
*there is a bug in filtering the compnies according to the cgpa and branch
* On deleting a category, a question or a user, the documents in which they were refered are not deleted. This renders them as null on populating from the database and breaks the application.
* On smaller screen, the navbar becomes bit less responsive
* On small screenn, the footer becomes bit large in size

## References
* Stack Overflow
* Mongodb documentation
* Nodejs documentation
* W3School
* Youtube
* Mongoose JS docs
* Javascript docs





##  I have added the respective screenshots in the screenshots directory 















