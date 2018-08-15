This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## To get the app running

1. Clone this repository.

2. `npm install`

3. `npm start`


Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

*Notes:

1. The app is separated into 6 different components - `App` (root component), `Header`, `OrderInformation`, `OrderStatus`, `OrderItems` and it's nested component `OrderItem`.
2. The project was started with Bootstrap, but decided to ditch it and use flexbox instead.
3. The viewport width used for testing the layout was 300px, conservative space on purpose to add constraints to the development of the UI and simulate a mobile experience.
4. Static JSON data set was used from `data.json` (included in the root component `App` and passed down as props). *Some data may be displayed in the wrong places of the app, given a lack of general context of the overarching functionality. e.g Who's the assignee, who's placing the order, timestamps, order IDs etc.
5. Following up from the previous point, some naming conventions may also be inappropriate (is it an actual order, or a reservation etc.), due to the same reasons.
6. Credit to [Flaticon](http://localhost:3000) for all the icons <3
