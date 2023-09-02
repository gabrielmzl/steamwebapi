# SteamWebApi

You can find the **Official SteamWebApi** documentation [here](https://www.steamwebapi.com/api/doc)


This wrapper is not complete yet. If you feel like contributing, open a pull request proposing a change :)

## Installation
With npm:
```
npm install steamwebapi-node
```
With Yarn:
```
yarn add steamwebapi-node
```

## Usage
```javascript
import { SteamWebAPI } from 'steamwebapi-node'

const SWA = new SteamWebAPI(YOUR_API_KEY)

SWA.ListAllCurrencies()
SWA.GetRandomProfiles()
...
```

## Documentation

### Api 
```javascript
const SWA = new SteamWebAPI(YOUR_API_KEY)
```
- apiKey: string (required)
---

### Currency Endpoints

#### ListAllCurrencies

This API costs 5 credits per request. This API endpoint provides a list of all available currencies that can be used with the "base" parameter for currency conversion. By default, the base currency is set to USD (United States Dollar).


```javascript
SWA.ListAllCurrencies().then((data) => {
    console.log(data)
})
```

- Response

```json
{"success":true,"base":"USD","date":"2023-09-02","rates":{...}}
```

#### ExchangeRates

This API costs 1 credit per request. It returns an exchange rate for the specified currency. The default exchange rate is based on the USD exchange rate, which you can change using the "base" parameter. You can specify the currency you want to exchange to using the "change" parameter. For example, "change=EUR" and "base=USD" means you want to exchange from EUR to USD.

You can find the entire abbreviation here: https://en.wikipedia.org/wiki/ISO_4217. Look under "Code" to find the abbreviation.


```javascript
SWA.ExchangeRates("RUB").then((data) => {
  console.log(data)
})
```

- Response

```json
{"baseRate":1,"changeRate":96.40504502301403,"change":"RUB","base":"USD","symbol":"\u20bd"}
```

### Explore Endpoints

#### GetRandomProfiles

This API costs 2 credits per Profile. This API will return random 5 Profiles with Inventory Informations and Items, you can change the limit with the limit parameter.

```javascript
SWA.GetRandomProfiles().then((data) => {
    console.log(data)
})
```

- Response

```json
{"status":"success","data":[...]}
```

#### GetLastRandomProfiles

This API costs 2 credits per Profile. This API will return last 5 Profiles with Inventory Informations and Items, you can change the limit with the limit parameter.

```javascript
SWA.GetLastRandomProfiles().then((data) => {
  console.log(data)
})
```

- Response

```json
{"status":"success","data":[...]}
```

#### GetToplistProfiles

This API incurs a cost of 1 credit per profile. The API retrieves the top 5 profiles with the highest combined value across inventory, information, and items. You have the option to modify the limit using the 'limit' parameter.

```javascript
SWA.GetToplistProfiles().then((data) => {
  console.log(data)
})
```

- Response

```json
{"status":"success","data":[...]}
```

### Items Endpoints

#### GetAllItems

Discover a comprehensive database of all Steam Market items, encompassing prices, history, item names, item conditions, and a wealth of additional information. This dynamic item list provides endless possibilities for your programming needs. Stay up-to-date with the latest information as the list is regularly maintained and supports popular games like CS:GO, Dota, and Rust. Expect even more game support in the future, as we continue to expand our offerings. Please note that the credit cost for accessing this valuable resource is currently set at just 20 credits, although credit pricing may change in the future.

```javascript
SWA.GetAllItems().then((data) => {
  console.log(data)
})
```

- Response

```json
{"status":"success","data":[...]}
```

#### GetItemInfo

Get all possible item names, types or groups from the game

```javascript
SWA.GetItemInfo().then((data) => {
  console.log(data)
})
```

- Response

```json
{"status":"success","data":[...]}
```

#### FindItem

Search for items

```javascript
SWA.FindItem("redline", "item").then((data) => {
  console.log(data)
})
```

- Response

```json
{"status":"success","data":[...]}
```

#### GetItemDetail

This API endpoint returns a single item by market_hash_name, slug or hashId. This API requires 1 credits per request. No Parameters.

```javascript
SWA.GetItemDetail("AK-47 | Redline (Field-Tested)").then((data) => {
  console.log(data)
})
```

- Response

```json
{"status":"success","data":[...]}
```

### Inventory Endpoints

#### GetInventory

This endpoint utilizes a pool of proxies to fetch the Steam inventory data, allowing us to bypass rate-limiting restrictions. The data returned is an exact representation of Steam's response, ensuring accuracy and real-time information. However, if you prefer a more user-friendly format, you can enable the parse parameter. This will provide a parsed version of the data, including item prices and comprehensive details. It's important to note that each request to this API consumes 5 credits.

Detailed Inventory
To enhance your experience, we recommend utilizing the parse parameter with a value of 1. This will provide you with item prices and a wealth of detailed information, allowing for a more comprehensive understanding of the inventory.

New feature: Tracking
You now have the ability to track inventory by requesting an inventory update on a daily basis. This will enable you to monitor the departure or left date of each item, and the total value of the inventory on that day. The initial tracking time will serve as the entry date's important to note that if another user of Steamwebapi is also tracking the same user, the entry date of an item could be earlier, as it depends on the time of tracking by each individual user.


```javascript
SWA.GetInventory("76561199028962895").then((data) => {
  console.log(data)
})
```

- Response

```json
{"profile":{"steamid":"76561199028962895","communityvisibilitystate":3,"profilestate":1,"personaname":"m.","commentpermission":1,"profileurl":"https:\/\/steamcommunity.com\/id\/-mzl\/","avatar":"https:\/\/avatars.steamstatic.com\/987946c2530157b7128c10897bf8cbc215d98c52.jpg","avatarmedium":"https:\/\/avatars.steamstatic.com\/987946c2530157b7128c10897bf8cbc215d98c52_medium.jpg","avatarfull":"https:\/\/avatars.steamstatic.com\/987946c2530157b7128c10897bf8cbc215d98c52_full.jpg","avatarhash":"987946c2530157b7128c10897bf8cbc215d98c52","personastate":0,"realname":"\u3000\u3000\u3000\u3000\u3000\u3000\u3000 \u3000\u3000\u3000\u3000\u3000\u3000\u3000\/id\/-mzl\/","primaryclanid":"103582791471534202","timecreated":1582647731,"personastateflags":0,"steamids":{"steamid2":"STEAM_1:1:534348583","steamid3":"[U:1:1068697167]","steamid64":"76561199028962895"},"accountname":"-mzl"},"items":[...]}
```

#### GetInventoryOnDay

Get the inventory of a steam profile for a specific day. The inventory is saved and can be retrieved from there. But before you need to call the inventory endpoint.

```javascript
SWA.GetInventoryOnDay("76561199028962895", "04/04/2022").then((data) => {
  console.log(data)
})
```

- Response

```json
{"totalWorth":0,"totalItems":0,"items":[],"date":"2022-04-04T00:00:00+00:00"}
```

### Profile Endpoints

#### ConvertSteamID

This API Endpoint converts a SteamID to SteamID2, SteamID3 and SteamID64 and returns it as JSON. Costs: 1 Credits

```javascript
SWA.ConvertSteamID("76561199028962895").then((data) => {
  console.log(data)
})
```

- Response

```json
{"steamids":{"steamid2":"STEAM_1:1:534348583","steamid3":"[U:1:1068697167]","steamid64":"76561199028962895"}}
```

#### GetProfile

This endpoint allows you to fetch a Steam user's profile. The returned data is directly sourced from Steam without any caching. This API requires 2 credits per request.

```javascript
SWA.GetProfile("76561199028962895").then((data) => {
  console.log(data)
})
```

- Response

```json
{"steamid":"76561199028962895","communityvisibilitystate":3,"profilestate":1,"personaname":"m.","commentpermission":1,"profileurl":"https:\/\/steamcommunity.com\/id\/-mzl\/","avatar":"https:\/\/avatars.steamstatic.com\/987946c2530157b7128c10897bf8cbc215d98c52.jpg","avatarmedium":"https:\/\/avatars.steamstatic.com\/987946c2530157b7128c10897bf8cbc215d98c52_medium.jpg","avatarfull":"https:\/\/avatars.steamstatic.com\/987946c2530157b7128c10897bf8cbc215d98c52_full.jpg","avatarhash":"987946c2530157b7128c10897bf8cbc215d98c52","personastate":0,"realname":"\u3000\u3000\u3000\u3000\u3000\u3000\u3000 \u3000\u3000\u3000\u3000\u3000\u3000\u3000\/id\/-mzl\/","primaryclanid":"103582791471534202","timecreated":1582647731,"personastateflags":0,"steamids":{"steamid2":"STEAM_1:1:534348583","steamid3":"[U:1:1068697167]","steamid64":"76561199028962895"},"accountname":"-mzl"}
```