
# ❄️Frontend Developer Assignment


- ⬇️ For Running this repository on local 
- ⬇️ Frontend - cd to dynamic-dashboard > npm install > npm start

Setting Up  PieSocket

- Go To PieSocekt (https://www.piesocket.com/)
- Click over Get Started or Create a Channel (https://www.piesocket.com/app/v4/channels/create)
- Copy your Unique API Key and ClusterId
- add your own apiKey and ClusterId replace
    
`` const clusterId = "Your Cluster Id";
   const apiKey = "Your API Key";
``


## 🃏Glimse of Project ⏬

### `video `  


https://github.com/abhishekrawe/dynamic-dashboard/assets/65603830/db13225c-3376-4097-aa01-23124183497c




# 🐸Problem Statement and my approach (अप्रोच्‌)🐸

🐸 Tech Stack Used 🐸 -
- [ReactJs](https://react.dev/) - Dashboard created using reactJs
- [Tailwind](https://tailwindcss.com/docs/) - For styling i used Tailwind css
- [Fake JSON Data](https://jsonplaceholder.typicode.com/) - Integrate Fake Data 
- [Auth0](https://auth0.com/) - Sign-in / Google Sign in Integration
- [PieSocket](https://www.piesocket.com/) - PieSocket to enable real-time communication.


## 💜 Create an Dashbooard using React JS and realtime Data Updates across Browser Tabs using PieSocekt.

 - **Dashboard Creation**: Made a Dashboard with provided Figma design and for styling used Tailwind ,

 - **Integrate Fake Data**: Fetched data from Fake Data , parses the JSON response, updates the component's state, logs the data, and handles errors while updating the loading state.

 - **Pagination**: added pafination by tracking the current page, calculating the range of items to display based on the current page and items per page, and providing navigation controls to move between pages.

 - **Real-time Search**: allowing user to search for data based on their input text. The search operation is performed on a combination of user attributes, including name, username, email, phone, and website, and the filtered results are displayed as the user types in the input field.

 - **Sorting**: sort a data table in ascending and descending order based on a selected column, using sortBy and sortOrder state variables, with sorting determined by the alphanumeric order.

 - **Google Sign-In Integration:** integrated Auth0 for user authentication, providing sign-in and sign-up options with both username/email and Google, displaying a logout button and user information for authenticated users, while showing only a login button for those not logged in.

- **Real-time Data Updates across Browser Tabs**: chat interface using PieSocket, allowing users to send and receive messages in a chat room, with real-time updates, presence tracking, and user-generated usernames. PieSocket New for me, and while I'm learning and developing it, I'm encountering various challenges that I'll address along the way.






