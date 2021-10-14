## Third Party Tracking API's

For the purposes of our demo Bridge was not connected to our third party API. This was done due to the time constraint in which we were able to demo the application. In order to demonstrate the functionality we needed to excersize more control over the data recieved by the front end.

## Actual method for real-time updates

#### Sign up for credentials -

Companies such as FedEx and UPS allow for developers to register with them for access to their developer tools. In the case of FedEx you are provided with a API Key and a Secret Key. We will use FedEx as an example moving forward.

#### Place first call for bearer-token -

FedEx requires a submission of your keys in order to recieve a bearer token. The token is live for one hour and then must be refreshed:

```
let XMLHttpRequest = require("xhr2");

const cID = "";
const cSec = "";
let bearerToken = "";

let data = `grant_type=client_credentials&client_id=${cID}&client_secret=${cSec}`;

let xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    bearerToken = (JSON.parse(this.responseText).access_token);
  }
});

xhr.open("POST", "https://apis.fedex.com/oauth/token");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send(data);

```

The above code will retrieve and parse out your bearer-token.

#### Second call for status updates -

With your bearer-token you can submit an array of package objects. The objects status will be returned.

```
let input = {
  includeDetailedScans: true,
  trackingInfo: [
    {
      shipDateBegin: "2020-03-29",
      shipDateEnd: "2020-04-01",
      trackingNumberInfo: {
        trackingNumber: "128667043726",
        carrierCode: "FDXE",
        trackingNumberUniqueId: "245822~123456789012~FDEG",
      },
    },
  ],
};

const bearerToken = "";

var data = JSON.stringify(input);
fetch("https://apis.fedex.com/track/v1/trackingdocuments", {
  headers: {
    "Content-Type": "application/json",
    "X-locale": "en_US",
    Authorization: `Bearer ${bearerToken}`,
  },
  method: "POST",
  body: data,
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.output.completeTrackResults[0].trackResults);
  });
```

#### Comparison Function -

Using the array returned from the courier and the array of packages in state the two can be compared with a function. Any package data returned that is different from that which already exsists will be updated in a new array of package objects.

```
const updateStatusFunc = (arr1, arr2) => {
  let updatedStatuses = [];
  let index = 0;

  for (const returnedPackage of packagesReturnedFromThirdParty) {
    if (returnedPackage.status !== packagesArrayInState[index].status) {
      updatedStatuses.push(returnedPackage);
    } else {
      updatedStatuses.push(packagesArrayInState[index]);
    }
    index++;
  }
  return updatedStatuses;
};
```

#### Update function -

The final step in the process if to loop through the array and update the packages on Bridge's database via the rails backend.

```

```
