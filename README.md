#Malwarebytes' test task(React & NodeJS Exercise)

Create the devices list with add / remove possibility

##Backend part
Server part to be implemented by nodeJs
Use a database or not - at your discretion.
Any framework can be used.
Application should give a REST or GraphQL response.
No Authentication needed, but could be scored as bonus.
Backend part should be delivered as a Docker container.

##Frontend part
A frontend application should be implemented as a React single-page application.
Feel free to use any frontend framework (bootstrap, material-ui, etc.)
Demonstrate ability to manage the global application state.
Common idea is to show a list of devices (phones, tablets, computers, etc).
Click on item title opens a modal dialog to increase or decrease number of items.
Click on the ‘add to cart’ button should decrease quantity. Total number of items in the cart
should be represented in the application header.
Click on the ‘remove from cart’ button should increase quantity.
The item quantity cannot be decreased if in stock left 0 items.
If this application opened in another window, after data changing, the second application
instance should automatically open a modal window with a message about the changed
data.
Data in the header should be updated as well.
The modal window component should be reusable.
Frontend application should be delivered as a Docker container.

These applications should start with a minimal actions, means:
$ git clone https://some.github.bla-bla-bla/test-task-repo
$ cd test-task-repo
$ some-command-to-run
