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
---
title: Alchemer endpoint ex SurveyGizmo endpoint
keywords: 
last_updated: July 04, 2023
tags: []
summary: "Detailed description of the API of the Alchemer endpoint."
---

# Overview

SurveyGizmo is a web-based software company giving researchers, and small and enterprise companies powerful tools to create online surveys, questionnaires and forms – allowing capture and analysis of virtually any type of data essential for business.

This endpoint has the following features:

- Interact with SurveyGizmo API
- Shortcuts to access the REST API
- Support for webhooks

In most cases you will be using the provided shortcuts to access the API. For example, you could use the REST API
directly by doing an HTTP request like this:

```js
var res = app.endpoints.surveygizmo.get('/survey/123456');
```

However, you probably want to use the shortcuts:

```js
var res = app.endpoints.surveygizmo.survey.get('123456');
```

These shortcuts are based on the [SurveyGizmo v5 REST API](https://apihelp.surveygizmo.com/help/version-5).
You can see more information about that in the [shortcuts section](#shortcuts).

## Configuration

First you will need to set up an account in SurveyGizmo. Then, in order to be able to configure the endpoint you will
need to generate an API token. You can find more information about that [here](https://apihelp.surveygizmo.com/help/authentication).

### API Token

The API token generated in SurveyGizmo.

### API Token Secret

The API token secret generated in SurveyGizmo.

### Webhook URL

This is the URL you should configure for webhooks in SurveyGizmo dashboard (see [here](https://help.surveygizmo.com/help/account-webhooks))

## Javascript API

The Javascript API of the SurveyGizmo endpoint has two pieces:

- **HTTP request**: this allows making regular HTTP requests like `GET`, `POST` or `PUT` to the API.
- **Shortcuts**: these are helpers to make HTTP request to the API in a more convenient way.

### HTTP requests

You can make `GET`, `POST`, `PUT`, and `DELETE` request to the
[SurveyGizmo v5 API](https://apihelp.surveygizmo.com/help/version-5) like this:

```js
var res = app.endpoints.surveygizmo.survey.get('/survey/123456');

var res = app.endpoints.surveygizmo.survey.put({
    path: '/survey/123456/surveycampaign',
    body: {
      type: 'email',
      name: 'Test Campaign',
      secure: true
    }
});
```

Please take a look at the documentation of the [HTTP endpoint]({{site.baseurl}}/endpoints_http.html#javascript-api)
for more information.

### Shortcuts

Instead of having to use the generic HTTP methods, you can make use of the shortcuts provided in the endpoint. These
shortcuts follow these rules:

- **Path sections get converted to namespaces**: for example if the method is GET `~/survey/123456` is converted to
  `app.endpoints.surveygizmo.survey.get('123456')`.
- **HTTP method is appended at the end of the method**: for example if the method is `GET`, you will see a method with
  the suffix `.get(...)`.  
  This is the mapping of names:
  - `GET`: `get`
  - `POST`: `create`
  - `PUT`: `update`
  - `PATCH`: `update`
  - `DELETE`: `delete`
- **Path variables become method parameters**: if the method has variables in the path, they will become parameters for
  the method. For example `GET ~/survey/123456/surveycampaign/654321` will become
  `app.endpoints.surveygizmo.survey.surveycampaign.get('123456', '654321')`.
- **Additional parameters or body are sent in the last param as JSON**: if the method accepts more parameters or it
  allows to send a body, that will be sent in the last parameter. For example the method `PUT ~/survey/123456/surveycampaign`,
  so it will become `app.endpoints.surveygizmo.surveycampaign.put('123456', {...})`.
- **Parameters are send as object**: in order to send parameters in URL you send as object parameter. For example the
  method `~/survey?page=2` so it will become `app.endpoints.surveygizmo.survey.get('123456', {page: 2});`

Following is a list of available helpers:

    endpoint.account.get()
    endpoint.accountteams.get()
    endpoint.accountteams.put()
    endpoint.accountteams.post()
    endpoint.accountteams.delete()
    endpoint.accountuser.get()
    endpoint.accountuser.put()
    endpoint.accountuser.post()
    endpoint.accountuser.delete()
    endpoint.domain.get()
    endpoint.domain.put()
    endpoint.domain.post()
    endpoint.domain.delete()
    endpoint.sso.get()
    endpoint.sso.put()
    endpoint.sso.post()
    endpoint.sso.delete()
    endpoint.surveytheme.get()
    endpoint.surveytheme.put()
    endpoint.surveytheme.post()
    endpoint.surveytheme.delete()
    endpoint.contactlist.get()
    endpoint.contactlist.put()
    endpoint.contactlist.post()
    endpoint.contactlist.delete()
    endpoint.contactlist.contactlistcontact.get()
    endpoint.contactlist.contactlistcontact.put()
    endpoint.contactlist.contactlistcontact.post()
    endpoint.contactlist.contactlistcontact.delete()
    endpoint.contactcustomfield.get()
    endpoint.contactcustomfield.put()
    endpoint.contactcustomfield.post()
    endpoint.contactcustomfield.delete()
    endpoint.survey.get()
    endpoint.survey.put()
    endpoint.survey.post()
    endpoint.survey.delete()
    endpoint.survey.surveypage.get()
    endpoint.survey.surveypage.put()
    endpoint.survey.surveypage.post()
    endpoint.survey.surveypage.delete()
    endpoint.survey.surveyquestion.get()
    endpoint.survey.surveyquestion.put()
    endpoint.survey.surveyquestion.post()
    endpoint.survey.surveyquestion.delete()
    endpoint.survey.surveyquestion.surveyoption.get()
    endpoint.survey.surveyquestion.surveyoption.put()
    endpoint.survey.surveyquestion.surveyoption.post()
    endpoint.survey.surveyquestion.surveyoption.delete()
    endpoint.survey.surveycampaign.get()
    endpoint.survey.surveycampaign.put()
    endpoint.survey.surveycampaign.post()
    endpoint.survey.surveycampaign.delete()
    endpoint.survey.surveycampaign.surveycontact.get()
    endpoint.survey.surveycampaign.surveycontact.put()
    endpoint.survey.surveycampaign.surveycontact.post()
    endpoint.survey.surveycampaign.surveycontact.delete()
    endpoint.survey.surveycampaign.emailmessage.get()
    endpoint.survey.surveycampaign.emailmessage.put()
    endpoint.survey.surveycampaign.emailmessage.post()
    endpoint.survey.surveycampaign.emailmessage.delete()
    endpoint.survey.surveyresponse.get()
    endpoint.survey.surveyresponse.put()
    endpoint.survey.surveyresponse.post()
    endpoint.survey.surveyresponse.delete()
    endpoint.survey.surveystatistic.get()
    endpoint.survey.surveystatistic.put()
    endpoint.survey.surveystatistic.post()
    endpoint.survey.surveystatistic.delete()
    endpoint.survey.surveyreport.get()
    endpoint.survey.surveyreport.put()
    endpoint.survey.surveyreport.post()
    endpoint.survey.surveyreport.delete()
    endpoint.survey.quotas.get()
    endpoint.survey.quotas.put()
    endpoint.survey.quotas.post()
    endpoint.survey.quotas.delete()

## Events

### Webhook

SurveyGizmo's webhooks allow your application to receive push notifications for surveys and responses.

Please refer to the [webhooks documentation](https://help.surveygizmo.com/help/account-webhooks) for more information on how to configure them.

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.

# Javascript API

The Javascript API of the alchemer package has three pieces:

- **HTTP requests**: These allow making regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the package usage in SLINGR.

## HTTP requests
You can make `GET`,`PUT`,`POST`,`DELETE` requests to the [alchemer API](API_URL_HERE) like this:
```javascript
var response = pkg.alchemer.functions.get('/survey')
var response = pkg.alchemer.functions.put('/survey/:surveyId/surveyresponse', body)
var response = pkg.alchemer.functions.put('/survey/:surveyId/surveyresponse')
var response = pkg.alchemer.functions.post('/survey/:surveyId/surveystatistic/:id', body)
var response = pkg.alchemer.functions.post('/survey/:surveyId/surveystatistic/:id')
var response = pkg.alchemer.functions.delete('/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact/:id')
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the package:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/account'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.account.get()
```
---
* API URL: '/accountteams'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.accountteams.get()
```
---
* API URL: '/accountteams/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.accountteams.get()
```
---
* API URL: '/accountuser'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.accountuser.get()
```
---
* API URL: '/accountuser/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.accountuser.get()
```
---
* API URL: '/domain'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.domain.get()
```
---
* API URL: '/domain/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.domain.get()
```
---
* API URL: '/sso'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.sso.get()
```
---
* API URL: '/sso/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.sso.get()
```
---
* API URL: '/surveytheme'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.surveytheme.get()
```
---
* API URL: '/surveytheme/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.surveytheme.get()
```
---
* API URL: '/contactlist'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.contactlist.get()
```
---
* API URL: '/contactlist/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.contactlist.get()
```
---
* API URL: '/contactlist/:contactListId/contactlistcontact'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.contactlist.contactlistcontact.get()
```
---
* API URL: '/contactlist/:contactListId/contactlistcontact/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.contactlist.contactlistcontact.get(contactListId)
```
---
* API URL: '/contactcustomfield'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.contactcustomfield.get()
```
---
* API URL: '/contactcustomfield/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.contactcustomfield.get()
```
---
* API URL: '/survey'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.get()
```
---
* API URL: '/survey/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.get()
```
---
* API URL: '/survey/:surveyId/surveypage'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveypage.get()
```
---
* API URL: '/survey/:surveyId/surveypage/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveypage.get(surveyId)
```
---
* API URL: '/survey/:surveyId/surveyquestion'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveyquestion.get()
```
---
* API URL: '/survey/:surveyId/surveyquestion/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveyquestion.get(surveyId)
```
---
* API URL: '/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveyquestion.surveyoption.get(surveyOption)
```
---
* API URL: '/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveyquestion.surveyoption.get(surveyOption, surveyQuestionId)
```
---
* API URL: '/survey/:surveyId/surveycampaign'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveycampaign.get()
```
---
* API URL: '/survey/:surveyId/surveycampaign/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveycampaign.get(surveyId)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveycampaign.surveycontact.get(surveyId)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveycampaign.surveycontact.get(surveyId, surveyCampaignId)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveycampaign.emailmessage.get(surveyId)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveycampaign.emailmessage.get(surveyId, surveyCampaignId)
```
---
* API URL: '/survey/:surveyId/surveyresponse'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveyresponse.get()
```
---
* API URL: '/survey/:surveyId/surveyresponse/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveyresponse.get(surveyId)
```
---
* API URL: '/survey/:surveyId/surveystatistic'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveystatistic.get()
```
---
* API URL: '/survey/:surveyId/surveystatistic/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveystatistic.get(surveyId)
```
---
* API URL: '/survey/:surveyId/surveyreport'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveyreport.get()
```
---
* API URL: '/survey/:surveyId/surveyreport/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveyreport.get(surveyId)
```
---
* API URL: '/survey/:surveyId/quotas'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.quotas.get()
```
---
* API URL: '/survey/:surveyId/quotas/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.quotas.get(surveyId)
```
---
* API URL: '/accountteams'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.accountteams.put(body)
```
---
* API URL: '/accountuser'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.accountuser.put(body)
```
---
* API URL: '/domain'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.domain.put(body)
```
---
* API URL: '/sso'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.sso.put(body)
```
---
* API URL: '/surveytheme'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.surveytheme.put(body)
```
---
* API URL: '/contactlist'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.contactlist.put(body)
```
---
* API URL: '/contactlist/:contactListId/contactlistcontact'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.contactlist.contactlistcontact.put(contactListId, body)
```
---
* API URL: '/contactcustomfield'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.contactcustomfield.put(body)
```
---
* API URL: '/survey'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.survey.put(body)
```
---
* API URL: '/survey/:surveyId/surveypage'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.survey.surveypage.put(surveyId, body)
```
---
* API URL: '/survey/:surveyId/surveyquestion'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.survey.surveyquestion.put(surveyId, body)
```
---
* API URL: '/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.survey.surveyquestion.surveyoption.put(surveyOption, surveyQuestionId, body)
```
---
* API URL: '/survey/:surveyId/surveycampaign'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.survey.surveycampaign.put(surveyId, body)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.survey.surveycampaign.surveycontact.put(surveyId, surveyCampaignId, body)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.survey.surveycampaign.emailmessage.put(surveyId, surveyCampaignId, body)
```
---
* API URL: '/survey/:surveyId/surveyresponse'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.survey.surveyresponse.put(surveyId, body)
```
---
* API URL: '/survey/:surveyId/surveystatistic'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.survey.surveystatistic.put(surveyId, body)
```
---
* API URL: '/survey/:surveyId/surveyreport'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.survey.surveyreport.put(surveyId, body)
```
---
* API URL: '/survey/:surveyId/quotas'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.survey.quotas.put(surveyId, body)
```
---
* API URL: '/accountteams/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.accountteams.post(id, body)
```
---
* API URL: '/accountuser/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.accountuser.post(id, body)
```
---
* API URL: '/domain/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.domain.post(id, body)
```
---
* API URL: '/sso/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.sso.post(id, body)
```
---
* API URL: '/surveytheme/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.surveytheme.post(id, body)
```
---
* API URL: '/contactlist/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.contactlist.post(id, body)
```
---
* API URL: '/contactlist/:contactListId/contactlistcontact/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.contactlist.contactlistcontact.post(contactListId, id, body)
```
---
* API URL: '/contactcustomfield/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.contactcustomfield.post(id, body)
```
---
* API URL: '/survey/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.survey.post(id, body)
```
---
* API URL: '/survey/:surveyId/surveypage/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.survey.surveypage.post(surveyId, id, body)
```
---
* API URL: '/survey/:surveyId/surveyquestion/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.survey.surveyquestion.post(surveyId, id, body)
```
---
* API URL: '/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.survey.surveyquestion.surveyoption.post(surveyOption, surveyQuestionId, id, body)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.survey.surveycampaign.post(surveyId, id, body)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.survey.surveycampaign.surveycontact.post(surveyId, surveyCampaignId, id, body)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.survey.surveycampaign.emailmessage.post(surveyId, surveyCampaignId, id, body)
```
---
* API URL: '/survey/:surveyId/surveyresponse/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.survey.surveyresponse.post(surveyId, id, body)
```
---
* API URL: '/survey/:surveyId/surveystatistic/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.survey.surveystatistic.post(surveyId, id, body)
```
---
* API URL: '/survey/:surveyId/surveyreport/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.survey.surveyreport.post(surveyId, id, body)
```
---
* API URL: '/survey/:surveyId/quotas/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.survey.quotas.post(surveyId, id, body)
```
---
* API URL: '/accountteams/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.accountteams.delete(id)
```
---
* API URL: '/accountuser/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.accountuser.delete(id)
```
---
* API URL: '/domain/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.domain.delete(id)
```
---
* API URL: '/sso/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.sso.delete(id)
```
---
* API URL: '/surveytheme/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.surveytheme.delete(id)
```
---
* API URL: '/contactlist/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.contactlist.delete(id)
```
---
* API URL: '/contactlist/:contactListId/contactlistcontact/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.contactlist.contactlistcontact.delete(contactListId, id)
```
---
* API URL: '/contactcustomfield/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.contactcustomfield.delete(id)
```
---
* API URL: '/survey/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.survey.delete(id)
```
---
* API URL: '/survey/:surveyId/surveypage/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.survey.surveypage.delete(surveyId, id)
```
---
* API URL: '/survey/:surveyId/surveyquestion/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.survey.surveyquestion.delete(surveyId, id)
```
---
* API URL: '/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.survey.surveyquestion.surveyoption.delete(surveyOption, surveyQuestionId, id)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.survey.surveycampaign.delete(surveyId, id)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.survey.surveycampaign.surveycontact.delete(surveyId, surveyCampaignId, id)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.survey.surveycampaign.emailmessage.delete(surveyId, surveyCampaignId, id)
```
---
* API URL: '/survey/:surveyId/surveyresponse/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.survey.surveyresponse.delete(surveyId, id)
```
---
* API URL: '/survey/:surveyId/surveystatistic/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.survey.surveystatistic.delete(surveyId, id)
```
---
* API URL: '/survey/:surveyId/surveyreport/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.survey.surveyreport.delete(surveyId, id)
```
---
* API URL: '/survey/:surveyId/quotas/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.survey.quotas.delete(surveyId, id)
```
---

</details>

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

For more information about how shortcuts or flow steps work, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### Custom Flow Steps Name

Description of Custom Flow Steps

*MANUALLY ADD THE DOCUMENTATION OF THESE FLOW STEPS HERE...*


</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*

## Dependencies
* HTTP Service (Latest Version)


// TODO: Review the dependencies of the package (and remove this comment after set the dependencies)

# About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
