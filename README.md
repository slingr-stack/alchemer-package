# Overview

Repo: [https://github.com/slingr-stack/alchemer-package](https://github.com/slingr-stack/alchemer-package)

## API Overview
Alchemer is a web-based software company that provides powerful tools for researchers, small businesses, and enterprises to create online surveys, questionnaires and forms – allowing the capture and analysis of virtually any type of data essential for business.

The Alchemer [package](https://platform-docs.slingr.io/dev-reference/data-model-and-logic/packages/) adheres to package design principles.
You interact with the resources exposed through the Alchemer API by accessing collection and element URIs using HTTP verbs
(GET, POST, PUT, and DELETE). Alchemer accepts and returns data in JSON format.

## Configuration
First, you will need to set up an account in Alchemer. Then, in order to be able to configure the package, you will need to generate an [API Token](https://apihelp.alchemer.com/help/authentication). You can find more information about that here.

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

The JavaScript API of the Alchemer package provides helpers for making http requests.

## HTTP requests
You can make `GET`,`PUT`,`POST`,`DELETE` requests to the [alchemer API](https://apihelp.alchemer.com/help) like this:
```javascript
var response = pkg.alchemer.api.get('/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage')
var response = pkg.alchemer.api.put('/sso', body)
var response = pkg.alchemer.api.put('/sso')
var response = pkg.alchemer.api.post('/survey/:surveyId/surveystatistic/:id', body)
var response = pkg.alchemer.api.post('/survey/:surveyId/surveystatistic/:id')
var response = pkg.alchemer.api.delete('/domain/:id')
```

Please take a look at the [HTTP service](https://github.com/slingr-stack/http-service) documentation.
for more information about generic requests.

## Events
### Webhook

Alchemer's webhooks allow your application to receive push notifications for surveys and responses.
Please refer to the webhooks documentation for more information on how to configure them.

## Dependencies
* HTTP Service

# About SLINGR

Slingr is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about Slingr](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
