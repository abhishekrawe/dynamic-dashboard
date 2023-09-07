
# ❄️Frontend Developer Assignment


- ⬇️ For Running this repository on a local 
- ⬇️ Frontend - cd to dynamic-dashboard > npm install > npm start

Setting Up  PieSocket

- Go To PieSocekt (https://www.piesocket.com/)
- Click over Get Started or Create a Channel (https://www.piesocket.com/app/v4/channels/create)
- Copy your Unique API Key and ClusterId
- Add your own apiKey and ClusterId to replace
    
`` const clusterId = "Your Cluster Id";
   const apiKey = "Your API Key";
``


## 🃏Glimse of Project ⏬

### `video `  

https://github.com/abhishekrawe/dynamic-dashboard/assets/65603830/2661bd47-625d-4af3-af75-7c6a0a23858b





# 🐸Problem Statement and My Approach (अप्रोच्‌)🐸

🐸 Tech Stack Used 🐸 -
- [ReactJs](https://react.dev/) - Dashboard created using react
- [Tailwind](https://tailwindcss.com/docs/) - For styling I used Tailwind CSS
- [Fake JSON Data](https://jsonplaceholder.typicode.com/) - Integrate Fake Data 
- [Auth0](https://auth0.com/) - Sign-in / Google Sign-in Integration
- [PieSocket](https://www.piesocket.com/) - PieSocket to enable real-time communication.


## 💜 Create a dashboard using React JS and real-time Data Updates across Browser Tabs using PieSocekt.

 - **Dashboard Creation**: Made a Dashboard with the provided Figma design and for styling used Tailwind,

 - **Integrate Fake Data**: Fetched data from Fake Data, parses the JSON response, updates the component's state, logs the data, and handles errors while updating the loading state.

 - **Pagination**: added pagination by tracking the current page, calculating the range of items to display based on the current page and items per page, and providing navigation controls to move between pages.

 - **Real-time Search**: allowing the user to search for data based on their input text. The search operation is performed on a combination of user attributes, including name, username, email, phone, and website, and the filtered results are displayed as the user types in the input field.

 - **Sorting**: Sort a data table in ascending and descending order based on a selected column, using sortBy and sortOrder state variables, with sorting determined by the alphanumeric order.

 - **Google Sign-In Integration:** integrated Auth0 for user authentication, providing sign-in and sign-up options with both username/email and Google, displaying a logout button and user information for authenticated users, while showing only a login button for those not logged in.

- **Real-time Data Updates across Browser Tabs**: chat interface using PieSocket, allowing users to send and receive messages in a chat room, with real-time updates, presence tracking, and user-generated usernames. PieSocket is New for me, and while I'm learning and developing it, I'm encountering various challenges that I'll address along the way.






