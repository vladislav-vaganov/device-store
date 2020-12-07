To launch project run folow commands:<br />
$ git clone https://github.com/vladislav-vaganov/device-store.git <br />
$ cd device-store <br />
$ docker-compose up <br />

# Malwarebytes' test task(React & NodeJS Exercise)

Create the devices list with add / remove possibility

## Backend part
Server part to be implemented by nodeJs <br />
Use a database or not - at your discretion. <br />
Any framework can be used. <br />
Application should give a REST or GraphQL response. <br />
No Authentication needed, but could be scored as bonus. <br />
Backend part should be delivered as a Docker container. <br />

## Frontend part
A frontend application should be implemented as a React single-page application. <br />
Feel free to use any frontend framework (bootstrap, material-ui, etc.) <br />
Demonstrate ability to manage the global application state. <br />
Common idea is to show a list of devices (phones, tablets, computers, etc). <br />
Click on item title opens a modal dialog to increase or decrease number of items. <br />
Click on the ‘add to cart’ button should decrease quantity. Total number of items in the cart should be represented in the application header. <br />
Click on the ‘remove from cart’ button should increase quantity. <br />
The item quantity cannot be decreased if in stock left 0 items. <br />
If this application opened in another window, after data changing, the second application instance should automatically open a modal window with a message about the changed data.
Data in the header should be updated as well. <br />
The modal window component should be reusable. <br />
Frontend application should be delivered as a Docker container. <br />

These applications should start with a minimal actions, means: <br />
$ git clone https://some.github.bla-bla-bla/test-task-repo <br />
$ cd test-task-repo <br />
$ some-command-to-run <br />
