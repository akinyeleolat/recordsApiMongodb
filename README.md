[![Build Status](https://travis-ci.com/akinyeleolat/recordsApiMongodb.svg?branch=main)](https://travis-ci.com/akinyeleolat/recordsApiMongodb)
# recordApi
Record Fetching Api


# Application Details

## Technologies
Currently,
<ul>
<li>NodeJs </li>
<li>ExpressJs</li>
<li>Mongoose Database ODM</li>
<li>MongoDB Database</li>
<li>Mocha Chai</li>
  </ul>

## Application Set up
Enviroment variables are set in `.env` files and the examples can be seen in `env.examples`.

1. Create `.env` files in the root folder, and set the correct environment variables as stated in `env.examples`
2. Open terminal and navigate to the root folder.
3. Install all dependencies

    ```
    - npm install
    ```

## Running the App (Development)
1. Open terminal and navigate to the root folder.
2. Run this command on terminal 
```
    npm run dev
```
## Running the App (Production Instance)
1. Open terminal and navigate to the root folder.
2. Run this command on terminal 
```
    - npm run build
    - npm start
```


## Running the App (Unit testing)
1. Open terminal and navigate to the root folder.
2. Run this command on terminal 
```
    - npm test
```

## API URL

Base url: ```https://recordsapi.herokuapp.com```

## API Endpoint Route
Currently,
<table>
  <tr>
    <td>HTTP VERB</td>
    <td>ENDPOINT</td>
    <td>REQUEST</td>
    <td>RESPONSE</td>
    <td>TASK</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/v1/records</td>
    <td>
    {
"startDate": "2017-01-30",
"endDate": "2017-01-30",
"minCount": 110,
"maxCount": 170
}
</td>
<td>
    {
    "code": 0,
    "msg": "success",
    "records": [
        {
            "key": "TAKwGc6Jr4i8Z487",
            "createdAt": "2017-01-28T01:22:14.398Z",
            "TotalCounts": 170
        },
        {
            "key": "TAKwGc6Jr4i8Z487",
            "createdAt": "2017-01-28T01:22:14.398Z",
            "TotalCounts": 120
        }
    ]
}
  </td>
  <td>Fetch records base on date range and count sumation</td>
  </tr>
  </table>