# StayCare

Staycare was developed at the University of Richmond Web Development Bootcamp (May - October 2019 cohort).
Deployed at: http://staycare.herokuapp.com/

## The What

*StayCare is an electronic management system for small, in-home daycare providers. StayCare allows the provider to edit and display a child's daily activities throughout the day and can send email and text message (SMS/MMS) updates throughout the day to a child's parent or to all families. Meanwhile, parents can view their child's daily report in real-time and have a profile page where they can easily edit and update their contact information.*

## The Who

Created and developed by Team DVD: 

**Deb Warrick:**
*Express server, JSX, API routes, Database design, Drag-and-drop/file upload functionality, email/MMS messaging (Homepage, Message page).* https://debwarrick.com


**Victoria Sharpe:**
*UI/UX Design, CSS styling, JSX functionality and structure (Login page, Daily Report)*


**Darren Hall:**
*CSS styling, JSX, Front end data display and editability (Profile page)*

## The Why
The primary goal of StayCare is to help assist small, in-home daycare providers securely move into the digital age! Our app gives providers the ability to streamline daily processes by being able to fill out digital daily reports to parents rather than taking the time to fill out paper forms for each child. It also has the capability for providers to digitally send updates to parents throughout the day to ease any anxiety parents may have.

## Technologies Used:
- React.js
- Node.js
- Express.js
- CORS
- Bootstrap/React-Bootstrap
- MySQL
- Sequelize
- Formidable
- Nodemailer
- Heroku

## The How - try it out!
## Login
Because StayCare is a childcare app, a random user isn't able to create an account. In future development, only providers will be able to create an account for a parent/family and pass along those credentials to them.
Test user account/password logins for demo are
* provider - sandra.staycare@hotmail.com /password.
* parent - herman.munster@scaryway.com /password.

![1_login.png](https://github.com/sharpevb/Staycare/blob/master/client/public/assets/demo/1_login.png)

## Homepage
If a provider logs in, they will see all of the children under their care. If a parent logs in, they will only see their child.
![2_homepage.png](https://github.com/sharpevb/Staycare/blob/master/client/public/assets/demo/2_homepage.png)


## Daily Report
A provider will be able to edit and report each child's daily behavior, meals, naptime, diaper changes, and administered medications into the database. When a parent checks in on their child's daily report, they see a read out of that report.
![3_dailyreport.png](https://github.com/sharpevb/Staycare/blob/master/client/public/assets/demo/3_dailyreport.png)


## Profile
Parents can easily view and edit their contact information at anytime! They can also add any emergency contacts or other authorized adults to pick up their child.
![4_profile.png](https://github.com/sharpevb/Staycare/blob/master/client/public/assets/demo/4_profile.png)


## Message
Providers can send out updates during the day to a child's parent or an announcement to all registered family members. They can include an optional picture to these updates as well. Parents have the opportunity to send messages to providers as well.  If you test this out, email and text will be sent to the developers for the "White" family or "All".  Messages can be sent for the Munsters but do not go to active recipients.
![message.png](https://github.com/sharpevb/Staycare/blob/master/client/public/assets/demo/5_message.png)
