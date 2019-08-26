---
title: "TigerRide"
date: "March 2019-present"
image: "tigerride.jpg"
tile: "tigerride"
description: "a student run web-app created to allow students to organize for transportation to and from airports."
key: "1"
---

__**Technical Skills/Technologies Used:**__ Django, PostGres, Python, Heroku

In Spring 2019, I took a class COS333: Advanced Programming Techniques, during which I, along with a few others, created a web application that would allow for students to organize sharing Uber, Lyft, or other transportation services to and from the Princeton University campus. I was mostly in charge of the back-end development, but I also dabbled a bit in databases using PostGres.

![welcome](../tigerride/tigerride.jpg)

Each student who wanted to use our app to search for other students would first fill out a form which would save their origin, destination, date, time interval during which they could take an Uber/Lyft, and other miscellaneous but pertinent information:

![plan_trip](../tigerride/plantrip.jpg)

To find any matches, I saved the form with Django's built-in form functionality to a Django model. Then, I used the **.filter()** function to search for other students with the same information. If any ride-share partners were found, the student could then to opt to join the group:

![plan_trip](../tigerride/plantrip.jpg)

Joining groups was done by having unique identification numbers for each planned trip -- so, when a student joined the ride-share group, his/her ride identification value would be updated to be the same as that of the ride-share group. On the other hand, when a student wanted to leave the ride-share group, his/her ride idenfication value would change to be a unique number. 

We also included a page where each student could view his/her ride history, which included past and present rides:


This was useful because if upon the first search the student did not have any matches, the student could revisit the search results for his planned trip later on in the "current rides" section. To add this functionality, I embedded the ride identification number into the button, therefore allowing for easy access and manipulation of the trip/model's data. 

Because our app was web-based, I decided to incorporate email notifications whenever a rider joined or left a group. This way, all members of the group could get in touch with one another and be kept up to date with the number of members in their group.
<!-- 
any students who were traveling on the same date/time to and from the same locations
After filling out the form, which used the built-in Django form functionality, I saved the information to a Django model. 

The app connects students who were traveling on the same date to and from the same locations. In order to do so, I used the Django model and form functionalities.  -->

You can visit it [here](http://tigerride.herokuapp.com).  


__**Technical Skills/Technologies Used:**__ Django, PostGres, Python, Heroku
