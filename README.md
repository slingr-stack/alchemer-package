<table>
    <thead>
    <tr>
        <th>Title</th>
        <th>Last Updated</th>
        <th>Summary</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Alchemer package</td>
        <td>December 13, 2023</td>
        <td>Detailed description of the API of the Alchemer package.</td>
    </tr>
    </tbody>
</table>

# Overview

## API Overview
SurveyGizmo is a web-based software company giving researchers, and small and enterprise companies powerful tools to create online surveys, questionnaires and forms – allowing capture and analysis of virtually any type of data essential for business.

The Alchemer Package aims to adhere to Package design principles.
You interact with the resources exposed through the Alchemer API by accessing collection and element URIs using HTTP verbs
(GET, POST, PUT, and DELETE). Alchemer accepts and returns data in JSON format.

## Configuration
First you will need to set up an account in Alchemer. Then, in order to be able to configure the package you will need to generate an [API Token](https://apihelp.alchemer.com/help/authentication). You can find more information about that here.

#### API Token
The API token generated in Alchemer.

**Name**: `apiToken`
**Type**: text
**Mandatory**: true

#### API Token Secret
The API token secret generated in Alchemer.

**Name**: `apiTokenSecret`
**Type**: text
**Mandatory**: true

#### Alchemer API by Location
The location your account is associated with. You can choose between US, CA or EU.

**Name**: `ALCHEMER_API_BASE_URL`
**Type**: buttonsGroup
**Mandatory**: true

#### Webhook URL
This is the URL you should configure for webhooks in Alchemer dashboard.

**Name**: `webhook`
**Type**: label

# Javascript API

The Javascript API of the alchemer package has three pieces:

- **HTTP requests**: These allow making regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the package usage in SLINGR.

## HTTP requests
You can make `GET`,`PUT`,`POST`,`DELETE` requests to the [alchemer API](API_URL_HERE) like this:
```javascript
var response = pkg.alchemer.api.get('/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage')
var response = pkg.alchemer.api.put('/sso', body)
var response = pkg.alchemer.api.put('/sso')
var response = pkg.alchemer.api.post('/survey/:surveyId/surveystatistic/:id', body)
var response = pkg.alchemer.api.post('/survey/:surveyId/surveystatistic/:id')
var response = pkg.alchemer.api.delete('/domain/:id')
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the package:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>

### Generic Flow Step

Generic flow step for full use of the entire package and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>GET,PUT,POST,DELETE</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/account<br>/accountteams<br>/accountteams/{id}<br>/accountuser<br>/accountuser/{id}<br>/domain<br>/domain/{id}<br>/sso<br>/sso/{id}<br>/surveytheme<br>/surveytheme/{id}<br>/contactlist<br>/contactlist/{id}<br>/contactlist/{contactListId}/contactlistcontact<br>/contactlist/{contactListId}/contactlistcontact/{id}<br>/contactcustomfield<br>/contactcustomfield/{id}<br>/survey<br>/survey/{id}<br>/survey/{surveyId}/surveypage<br>/survey/{surveyId}/surveypage/{id}<br>/survey/{surveyId}/surveyquestion<br>/survey/{surveyId}/surveyquestion/{id}<br>/survey/{surveyOption}/surveyquestion/{surveyQuestionId}/surveyoption<br>/survey/{surveyOption}/surveyquestion/{surveyQuestionId}/surveyoption/{id}<br>/survey/{surveyId}/surveycampaign<br>/survey/{surveyId}/surveycampaign/{id}<br>/survey/{surveyId}/surveycampaign/{surveyCampaignId}/surveycontact<br>/survey/{surveyId}/surveycampaign/{surveyCampaignId}/surveycontact/{id}<br>/survey/{surveyId}/surveycampaign/{surveyCampaignId}/emailmessage<br>/survey/{surveyId}/surveycampaign/{surveyCampaignId}/emailmessage/{id}<br>/survey/{surveyId}/surveyresponse<br>/survey/{surveyId}/surveyresponse/{id}<br>/survey/{surveyId}/surveystatistic<br>/survey/{surveyId}/surveystatistic/{id}<br>/survey/{surveyId}/surveyreport<br>/survey/{surveyId}/surveyreport/{id}<br>/survey/{surveyId}/quotas<br>/survey/{surveyId}/quotas/{id}<br>/accountteams<br>/accountuser<br>/domain<br>/sso<br>/surveytheme<br>/contactlist<br>/contactlist/{contactListId}/contactlistcontact<br>/contactcustomfield<br>/survey<br>/survey/{surveyId}/surveypage<br>/survey/{surveyId}/surveyquestion<br>/survey/{surveyOption}/surveyquestion/{surveyQuestionId}/surveyoption<br>/survey/{surveyId}/surveycampaign<br>/survey/{surveyId}/surveycampaign/{surveyCampaignId}/surveycontact<br>/survey/{surveyId}/surveycampaign/{surveyCampaignId}/emailmessage<br>/survey/{surveyId}/surveyresponse<br>/survey/{surveyId}/surveystatistic<br>/survey/{surveyId}/surveyreport<br>/survey/{surveyId}/quotas<br>/accountteams/{id}<br>/accountuser/{id}<br>/domain/{id}<br>/sso/{id}<br>/surveytheme/{id}<br>/contactlist/{id}<br>/contactlist/{contactListId}/contactlistcontact/{id}<br>/contactcustomfield/{id}<br>/survey/{id}<br>/survey/{surveyId}/surveypage/{id}<br>/survey/{surveyId}/surveyquestion/{id}<br>/survey/{surveyOption}/surveyquestion/{surveyQuestionId}/surveyoption/{id}<br>/survey/{surveyId}/surveycampaign/{id}<br>/survey/{surveyId}/surveycampaign/{surveyCampaignId}/surveycontact/{id}<br>/survey/{surveyId}/surveycampaign/{surveyCampaignId}/emailmessage/{id}<br>/survey/{surveyId}/surveyresponse/{id}<br>/survey/{surveyId}/surveystatistic/{id}<br>/survey/{surveyId}/surveyreport/{id}<br>/survey/{surveyId}/quotas/{id}<br>/accountteams/{id}<br>/accountuser/{id}<br>/domain/{id}<br>/sso/{id}<br>/surveytheme/{id}<br>/contactlist/{id}<br>/contactlist/{contactListId}/contactlistcontact/{id}<br>/contactcustomfield/{id}<br>/survey/{id}<br>/survey/{surveyId}/surveypage/{id}<br>/survey/{surveyId}/surveyquestion/{id}<br>/survey/{surveyOption}/surveyquestion/{surveyQuestionId}/surveyoption/{id}<br>/survey/{surveyId}/surveycampaign/{id}<br>/survey/{surveyId}/surveycampaign/{surveyCampaignId}/surveycontact/{id}<br>/survey/{surveyId}/surveycampaign/{surveyCampaignId}/emailmessage/{id}<br>/survey/{surveyId}/surveyresponse/{id}<br>/survey/{surveyId}/surveystatistic/{id}<br>/survey/{surveyId}/surveyreport/{id}<br>/survey/{surveyId}/quotas/{id}<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect a timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read a timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

## Dependencies
* HTTP Service

# About SLINGR

Slingr is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about Slingr](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
