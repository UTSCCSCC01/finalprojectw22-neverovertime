### Get users

Endpoint: `/users`

Method: GET

Returns all the user data in the database.

### Find user

Endpoint: `/api/user/login`

Method: Post

Feilds: `username`, `password`

Returns users data for the specific username and password.

### Update user balance

Endpoint: `/api/user/updatebalance`

Method: POST

Feilds: `userid`, `newbalance`

Changes the balance of the user to the new balance.

### Update user win statistic

Endpoint: `/api/user/updateWins`

Method: POST

Feilds: `userid`, `newwins`

Changes the statistic of user wins to the new wins amount.

### Update user loss statistic

Endpoint: `/api/user/updateLoses`

Method: POST

Feilds: `userid`, `newloses`

Changes the statistic of user loses to the new loses amount.

### Update user blackjack statistic

Endpoint: `/api/user/updateBlackjacks`

Method: POST

Feilds: `userid`, `newblackjacks`

Changes the statistic of user blackjacks to the new blackjacks amount.

### Update user bankrupts statistic

Endpoint: `/api/user/updateBankrupts`

Method: POST

Feilds: `userid`, `newbankrupts`

Changes the statistic of user bankrupts to the new bankrupts amount.

### Add user achievement

Endpoint: `/api/user/addAchievement`

Method: POST

Feilds: `userid`, `achievementId`

Adds the achievement to the users achievements.

### Add new user

Endpoint: `/api/user/signup`

Method: POST

Feilds: `username`, `password`, `email`

Adds a new user with all the new information, checking not to make duplicates.

### Find user with username

Endpoint: `/api/user/search`

Method: POST

Feilds: `username`

Searches for a user using username and returns user data.

### Find user with id

Endpoint:`/api/user`

Method: GET

Feilds: `id`

Searches for a user using id and returns user data.

### Find user achievements

Endpoint:`/api/user/getAchievements`

Method: GET

Feilds: `userid`

Returns all the user achievements the user has earned.