# Javascript API

The Javascript API of the alchemer package has three pieces:

- **HTTP requests**: These allow making regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the package usage in SLINGR.

## HTTP requests
You can make `GET`,`PUT`,`POST`,`DELETE` requests to the [alchemer API](API_URL_HERE) like this:
```javascript
var response = pkg.alchemer.functions.get('/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage')
var response = pkg.alchemer.functions.put('/sso', body)
var response = pkg.alchemer.functions.put('/sso')
var response = pkg.alchemer.functions.post('/survey/:surveyId/surveystatistic/:id', body)
var response = pkg.alchemer.functions.post('/survey/:surveyId/surveystatistic/:id')
var response = pkg.alchemer.functions.delete('/domain/:id')
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
* API URL: '/accountteams'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.accountteams.put(body)
```
---
* API URL: '/accountteams/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.accountteams.get()
```
---
* API URL: '/accountteams/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.accountteams.post(id, body)
```
---
* API URL: '/accountteams/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.accountteams.delete(id)
```
---
* API URL: '/accountuser'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.accountuser.get()
```
---
* API URL: '/accountuser'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.accountuser.put(body)
```
---
* API URL: '/accountuser/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.accountuser.get()
```
---
* API URL: '/accountuser/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.accountuser.post(id, body)
```
---
* API URL: '/accountuser/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.accountuser.delete(id)
```
---
* API URL: '/contactcustomfield'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.contactcustomfield.get()
```
---
* API URL: '/contactcustomfield'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.contactcustomfield.put(body)
```
---
* API URL: '/contactcustomfield/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.contactcustomfield.get()
```
---
* API URL: '/contactcustomfield/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.contactcustomfield.post(id, body)
```
---
* API URL: '/contactcustomfield/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.contactcustomfield.delete(id)
```
---
* API URL: '/contactlist'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.contactlist.get()
```
---
* API URL: '/contactlist'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.contactlist.put(body)
```
---
* API URL: '/contactlist/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.contactlist.get()
```
---
* API URL: '/contactlist/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.contactlist.post(id, body)
```
---
* API URL: '/contactlist/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.contactlist.delete(id)
```
---
* API URL: '/contactlist/:contactListId/contactlistcontact'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.contactlist.contactlistcontact.get()
```
---
* API URL: '/contactlist/:contactListId/contactlistcontact'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.contactlist.contactlistcontact.put(contactListId, body)
```
---
* API URL: '/contactlist/:contactListId/contactlistcontact/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.contactlist.contactlistcontact.get(contactListId)
```
---
* API URL: '/contactlist/:contactListId/contactlistcontact/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.contactlist.contactlistcontact.post(contactListId, id, body)
```
---
* API URL: '/contactlist/:contactListId/contactlistcontact/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.contactlist.contactlistcontact.delete(contactListId, id)
```
---
* API URL: '/domain'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.domain.get()
```
---
* API URL: '/domain'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.domain.put(body)
```
---
* API URL: '/domain/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.domain.get()
```
---
* API URL: '/domain/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.domain.post(id, body)
```
---
* API URL: '/domain/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.domain.delete(id)
```
---
* API URL: '/sso'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.sso.get()
```
---
* API URL: '/sso'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.sso.put(body)
```
---
* API URL: '/sso/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.sso.get()
```
---
* API URL: '/sso/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.sso.post(id, body)
```
---
* API URL: '/sso/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.sso.delete(id)
```
---
* API URL: '/survey'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.get()
```
---
* API URL: '/survey'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.survey.put(body)
```
---
* API URL: '/survey/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.get()
```
---
* API URL: '/survey/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.survey.post(id, body)
```
---
* API URL: '/survey/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.survey.delete(id)
```
---
* API URL: '/survey/:surveyId/quotas'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.quotas.get()
```
---
* API URL: '/survey/:surveyId/quotas'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.survey.quotas.put(surveyId, body)
```
---
* API URL: '/survey/:surveyId/surveycampaign'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveycampaign.get()
```
---
* API URL: '/survey/:surveyId/surveycampaign'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.survey.surveycampaign.put(surveyId, body)
```
---
* API URL: '/survey/:surveyId/surveypage'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveypage.get()
```
---
* API URL: '/survey/:surveyId/surveypage'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.survey.surveypage.put(surveyId, body)
```
---
* API URL: '/survey/:surveyId/surveyquestion'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveyquestion.get()
```
---
* API URL: '/survey/:surveyId/surveyquestion'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.survey.surveyquestion.put(surveyId, body)
```
---
* API URL: '/survey/:surveyId/surveyreport'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveyreport.get()
```
---
* API URL: '/survey/:surveyId/surveyreport'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.survey.surveyreport.put(surveyId, body)
```
---
* API URL: '/survey/:surveyId/surveyresponse'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveyresponse.get()
```
---
* API URL: '/survey/:surveyId/surveyresponse'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.survey.surveyresponse.put(surveyId, body)
```
---
* API URL: '/survey/:surveyId/surveystatistic'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveystatistic.get()
```
---
* API URL: '/survey/:surveyId/surveystatistic'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.survey.surveystatistic.put(surveyId, body)
```
---
* API URL: '/survey/:surveyId/quotas/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.quotas.get(surveyId)
```
---
* API URL: '/survey/:surveyId/quotas/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.survey.quotas.post(surveyId, id, body)
```
---
* API URL: '/survey/:surveyId/quotas/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.survey.quotas.delete(surveyId, id)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveycampaign.get(surveyId)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.survey.surveycampaign.post(surveyId, id, body)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.survey.surveycampaign.delete(surveyId, id)
```
---
* API URL: '/survey/:surveyId/surveypage/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveypage.get(surveyId)
```
---
* API URL: '/survey/:surveyId/surveypage/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.survey.surveypage.post(surveyId, id, body)
```
---
* API URL: '/survey/:surveyId/surveypage/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.survey.surveypage.delete(surveyId, id)
```
---
* API URL: '/survey/:surveyId/surveyquestion/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveyquestion.get(surveyId)
```
---
* API URL: '/survey/:surveyId/surveyquestion/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.survey.surveyquestion.post(surveyId, id, body)
```
---
* API URL: '/survey/:surveyId/surveyquestion/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.survey.surveyquestion.delete(surveyId, id)
```
---
* API URL: '/survey/:surveyId/surveyreport/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveyreport.get(surveyId)
```
---
* API URL: '/survey/:surveyId/surveyreport/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.survey.surveyreport.post(surveyId, id, body)
```
---
* API URL: '/survey/:surveyId/surveyreport/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.survey.surveyreport.delete(surveyId, id)
```
---
* API URL: '/survey/:surveyId/surveyresponse/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveyresponse.get(surveyId)
```
---
* API URL: '/survey/:surveyId/surveyresponse/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.survey.surveyresponse.post(surveyId, id, body)
```
---
* API URL: '/survey/:surveyId/surveyresponse/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.survey.surveyresponse.delete(surveyId, id)
```
---
* API URL: '/survey/:surveyId/surveystatistic/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveystatistic.get(surveyId)
```
---
* API URL: '/survey/:surveyId/surveystatistic/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.survey.surveystatistic.post(surveyId, id, body)
```
---
* API URL: '/survey/:surveyId/surveystatistic/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.survey.surveystatistic.delete(surveyId, id)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveycampaign.emailmessage.get(surveyId)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.survey.surveycampaign.emailmessage.put(surveyId, surveyCampaignId, body)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveycampaign.surveycontact.get(surveyId)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.survey.surveycampaign.surveycontact.put(surveyId, surveyCampaignId, body)
```
---
* API URL: '/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveyquestion.surveyoption.get(surveyOption)
```
---
* API URL: '/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.survey.surveyquestion.surveyoption.put(surveyOption, surveyQuestionId, body)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveycampaign.emailmessage.get(surveyId, surveyCampaignId)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.survey.surveycampaign.emailmessage.post(surveyId, surveyCampaignId, id, body)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.survey.surveycampaign.emailmessage.delete(surveyId, surveyCampaignId, id)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveycampaign.surveycontact.get(surveyId, surveyCampaignId)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.survey.surveycampaign.surveycontact.post(surveyId, surveyCampaignId, id, body)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.survey.surveycampaign.surveycontact.delete(surveyId, surveyCampaignId, id)
```
---
* API URL: '/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.survey.surveyquestion.surveyoption.get(surveyOption, surveyQuestionId)
```
---
* API URL: '/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.survey.surveyquestion.surveyoption.post(surveyOption, surveyQuestionId, id, body)
```
---
* API URL: '/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.survey.surveyquestion.surveyoption.delete(surveyOption, surveyQuestionId, id)
```
---
* API URL: '/surveytheme'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.surveytheme.get()
```
---
* API URL: '/surveytheme'
* HTTP Method: 'PUT'
```javascript
pkg.alchemer.functions.surveytheme.put(body)
```
---
* API URL: '/surveytheme/:id'
* HTTP Method: 'GET'
```javascript
pkg.alchemer.functions.surveytheme.get()
```
---
* API URL: '/surveytheme/:id'
* HTTP Method: 'POST'
```javascript
pkg.alchemer.functions.surveytheme.post(id, body)
```
---
* API URL: '/surveytheme/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.alchemer.functions.surveytheme.delete(id)
```
---

</details>

