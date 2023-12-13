/****************************************************
 Dependencies
 ****************************************************/

var httpReference = dependencies.http;

var httpDependency = {
    get: httpReference.get,
    post: httpReference.post,
    put: httpReference.put,
    patch: httpReference.patch,
    delete: httpReference.delete,
    head: httpReference.head,
    options: httpReference.options
};
var httpService = {};

function handleRequestWithRetry(requestFn, options, callbackData, callbacks) {
    try {
        return requestFn(options, callbackData, callbacks);
    } catch (error) {
        sys.logs.info("[alchemer] Handling request "+JSON.stringify(error));
    }
}

function createWrapperFunction(requestFn) {
    return function(options, callbackData, callbacks) {
        return handleRequestWithRetry(requestFn, options, callbackData, callbacks);
    };
}

for (var key in httpDependency) {
    if (typeof httpDependency[key] === 'function') httpService[key] = createWrapperFunction(httpDependency[key]);
}

/****************************************************
 Helpers
 ****************************************************/

exports.account = {};

exports.accountteams = {};

exports.accountuser = {};

exports.domain = {};

exports.sso = {};

exports.surveytheme = {};

exports.contactlist = {};

exports.contactlist.contactlistcontact = {};

exports.contactcustomfield = {};

exports.survey = {};

exports.survey.surveypage = {};

exports.survey.surveyquestion = {};

exports.survey.surveyquestion.surveyoption = {};

exports.survey.surveycampaign = {};

exports.survey.surveycampaign.surveycontact = {};

exports.survey.surveycampaign.emailmessage = {};

exports.survey.surveyresponse = {};

exports.survey.surveystatistic = {};

exports.survey.surveyreport = {};

exports.survey.quotas = {};

exports.account.get = function(httpOptions) {
    var url = parse('/account');
    sys.logs.debug('[alchemer] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Alchemer(options));
};

exports.accountteams.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/accountteams');
			break;
		case 1:
			url = parse('/accountteams/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Alchemer(options));
};

exports.accountteams.put = function(httpOptions) {
    var url = parse('/accountteams');
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Alchemer(options));
};

exports.accountteams.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/accountteams/:id', [id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Alchemer(options));
};

exports.accountteams.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/accountteams/:id', [id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Alchemer(options));
};

exports.accountuser.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/accountuser');
			break;
		case 1:
			url = parse('/accountuser/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Alchemer(options));
};

exports.accountuser.put = function(httpOptions) {
    var url = parse('/accountuser');
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Alchemer(options));
};

exports.accountuser.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/accountuser/:id', [id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Alchemer(options));
};

exports.accountuser.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/accountuser/:id', [id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Alchemer(options));
};

exports.domain.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/domain');
			break;
		case 1:
			url = parse('/domain/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Alchemer(options));
};

exports.domain.put = function(httpOptions) {
    var url = parse('/domain');
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Alchemer(options));
};

exports.domain.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/domain/:id', [id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Alchemer(options));
};

exports.domain.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/domain/:id', [id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Alchemer(options));
};

exports.sso.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/sso');
			break;
		case 1:
			url = parse('/sso/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Alchemer(options));
};

exports.sso.put = function(httpOptions) {
    var url = parse('/sso');
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Alchemer(options));
};

exports.sso.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/sso/:id', [id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Alchemer(options));
};

exports.sso.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/sso/:id', [id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Alchemer(options));
};

exports.surveytheme.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/surveytheme');
			break;
		case 1:
			url = parse('/surveytheme/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Alchemer(options));
};

exports.surveytheme.put = function(httpOptions) {
    var url = parse('/surveytheme');
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Alchemer(options));
};

exports.surveytheme.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/surveytheme/:id', [id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Alchemer(options));
};

exports.surveytheme.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/surveytheme/:id', [id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Alchemer(options));
};

exports.contactlist.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/contactlist');
			break;
		case 1:
			url = parse('/contactlist/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Alchemer(options));
};

exports.contactlist.put = function(httpOptions) {
    var url = parse('/contactlist');
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Alchemer(options));
};

exports.contactlist.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/contactlist/:id', [id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Alchemer(options));
};

exports.contactlist.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/contactlist/:id', [id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Alchemer(options));
};

exports.contactlist.contactlistcontact.get = function(contactListId, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/contactlist/:contactListId/contactlistcontact', [contactListId]);
			break;
		case 2:
			url = parse('/contactlist/:contactListId/contactlistcontact/:id', [contactListId, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Alchemer(options));
};

exports.contactlist.contactlistcontact.put = function(contactListId, httpOptions) {
    if (!contactListId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [contactListId].');
        return;
    }
    var url = parse('/contactlist/:contactListId/contactlistcontact', [contactListId]);
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Alchemer(options));
};

exports.contactlist.contactlistcontact.post = function(contactListId, id, httpOptions) {
    if (!contactListId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [contactListId,id].');
        return;
    }
    var url = parse('/contactlist/:contactListId/contactlistcontact/:id', [contactListId, id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Alchemer(options));
};

exports.contactlist.contactlistcontact.delete = function(contactListId, id, httpOptions) {
    if (!contactListId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [contactListId,id].');
        return;
    }
    var url = parse('/contactlist/:contactListId/contactlistcontact/:id', [contactListId, id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Alchemer(options));
};

exports.contactcustomfield.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/contactcustomfield');
			break;
		case 1:
			url = parse('/contactcustomfield/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Alchemer(options));
};

exports.contactcustomfield.put = function(httpOptions) {
    var url = parse('/contactcustomfield');
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Alchemer(options));
};

exports.contactcustomfield.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/contactcustomfield/:id', [id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Alchemer(options));
};

exports.contactcustomfield.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/contactcustomfield/:id', [id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Alchemer(options));
};

exports.survey.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/survey');
			break;
		case 1:
			url = parse('/survey/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Alchemer(options));
};

exports.survey.put = function(httpOptions) {
    var url = parse('/survey');
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Alchemer(options));
};

exports.survey.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/survey/:id', [id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Alchemer(options));
};

exports.survey.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/survey/:id', [id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Alchemer(options));
};

exports.survey.surveypage.get = function(surveyId, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/survey/:surveyId/surveypage', [surveyId]);
			break;
		case 2:
			url = parse('/survey/:surveyId/surveypage/:id', [surveyId, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Alchemer(options));
};

exports.survey.surveypage.put = function(surveyId, httpOptions) {
    if (!surveyId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId].');
        return;
    }
    var url = parse('/survey/:surveyId/surveypage', [surveyId]);
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Alchemer(options));
};

exports.survey.surveypage.post = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveypage/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Alchemer(options));
};

exports.survey.surveypage.delete = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveypage/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Alchemer(options));
};

exports.survey.surveyquestion.get = function(surveyId, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/survey/:surveyId/surveyquestion', [surveyId]);
			break;
		case 2:
			url = parse('/survey/:surveyId/surveyquestion/:id', [surveyId, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Alchemer(options));
};

exports.survey.surveyquestion.put = function(surveyId, httpOptions) {
    if (!surveyId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId].');
        return;
    }
    var url = parse('/survey/:surveyId/surveyquestion', [surveyId]);
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Alchemer(options));
};

exports.survey.surveyquestion.post = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveyquestion/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Alchemer(options));
};

exports.survey.surveyquestion.delete = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveyquestion/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Alchemer(options));
};

exports.survey.surveyquestion.surveyoption.get = function(surveyOption, surveyQuestionId, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption', [surveyOption, surveyQuestionId]);
			break;
		case 3:
			url = parse('/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption/:id', [surveyOption, surveyQuestionId, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Alchemer(options));
};

exports.survey.surveyquestion.surveyoption.put = function(surveyOption, surveyQuestionId, httpOptions) {
    if (!surveyOption || !surveyQuestionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyOption,surveyQuestionId].');
        return;
    }
    var url = parse('/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption', [surveyOption, surveyQuestionId]);
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Alchemer(options));
};

exports.survey.surveyquestion.surveyoption.post = function(surveyOption, surveyQuestionId, id, httpOptions) {
    if (!surveyOption || !surveyQuestionId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyOption,surveyQuestionId,id].');
        return;
    }
    var url = parse('/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption/:id', [surveyOption, surveyQuestionId, id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Alchemer(options));
};

exports.survey.surveyquestion.surveyoption.delete = function(surveyOption, surveyQuestionId, id, httpOptions) {
    if (!surveyOption || !surveyQuestionId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyOption,surveyQuestionId,id].');
        return;
    }
    var url = parse('/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption/:id', [surveyOption, surveyQuestionId, id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Alchemer(options));
};

exports.survey.surveycampaign.get = function(surveyId, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/survey/:surveyId/surveycampaign', [surveyId]);
			break;
		case 2:
			url = parse('/survey/:surveyId/surveycampaign/:id', [surveyId, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Alchemer(options));
};

exports.survey.surveycampaign.put = function(surveyId, httpOptions) {
    if (!surveyId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId].');
        return;
    }
    var url = parse('/survey/:surveyId/surveycampaign', [surveyId]);
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Alchemer(options));
};

exports.survey.surveycampaign.post = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveycampaign/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Alchemer(options));
};

exports.survey.surveycampaign.delete = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveycampaign/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Alchemer(options));
};

exports.survey.surveycampaign.surveycontact.get = function(surveyId, surveyCampaignId, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact', [surveyId, surveyCampaignId]);
			break;
		case 3:
			url = parse('/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact/:id', [surveyId, surveyCampaignId, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Alchemer(options));
};

exports.survey.surveycampaign.surveycontact.put = function(surveyId, surveyCampaignId, httpOptions) {
    if (!surveyId || !surveyCampaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,surveyCampaignId].');
        return;
    }
    var url = parse('/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact', [surveyId, surveyCampaignId]);
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Alchemer(options));
};

exports.survey.surveycampaign.surveycontact.post = function(surveyId, surveyCampaignId, id, httpOptions) {
    if (!surveyId || !surveyCampaignId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,surveyCampaignId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact/:id', [surveyId, surveyCampaignId, id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Alchemer(options));
};

exports.survey.surveycampaign.surveycontact.delete = function(surveyId, surveyCampaignId, id, httpOptions) {
    if (!surveyId || !surveyCampaignId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,surveyCampaignId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact/:id', [surveyId, surveyCampaignId, id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Alchemer(options));
};

exports.survey.surveycampaign.emailmessage.get = function(surveyId, surveyCampaignId, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage', [surveyId, surveyCampaignId]);
			break;
		case 3:
			url = parse('/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage/:id', [surveyId, surveyCampaignId, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Alchemer(options));
};

exports.survey.surveycampaign.emailmessage.put = function(surveyId, surveyCampaignId, httpOptions) {
    if (!surveyId || !surveyCampaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,surveyCampaignId].');
        return;
    }
    var url = parse('/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage', [surveyId, surveyCampaignId]);
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Alchemer(options));
};

exports.survey.surveycampaign.emailmessage.post = function(surveyId, surveyCampaignId, id, httpOptions) {
    if (!surveyId || !surveyCampaignId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,surveyCampaignId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage/:id', [surveyId, surveyCampaignId, id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Alchemer(options));
};

exports.survey.surveycampaign.emailmessage.delete = function(surveyId, surveyCampaignId, id, httpOptions) {
    if (!surveyId || !surveyCampaignId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,surveyCampaignId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage/:id', [surveyId, surveyCampaignId, id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Alchemer(options));
};

exports.survey.surveyresponse.get = function(surveyId, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/survey/:surveyId/surveyresponse', [surveyId]);
			break;
		case 2:
			url = parse('/survey/:surveyId/surveyresponse/:id', [surveyId, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Alchemer(options));
};

exports.survey.surveyresponse.put = function(surveyId, httpOptions) {
    if (!surveyId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId].');
        return;
    }
    var url = parse('/survey/:surveyId/surveyresponse', [surveyId]);
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Alchemer(options));
};

exports.survey.surveyresponse.post = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveyresponse/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Alchemer(options));
};

exports.survey.surveyresponse.delete = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveyresponse/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Alchemer(options));
};

exports.survey.surveystatistic.get = function(surveyId, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/survey/:surveyId/surveystatistic', [surveyId]);
			break;
		case 2:
			url = parse('/survey/:surveyId/surveystatistic/:id', [surveyId, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Alchemer(options));
};

exports.survey.surveystatistic.put = function(surveyId, httpOptions) {
    if (!surveyId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId].');
        return;
    }
    var url = parse('/survey/:surveyId/surveystatistic', [surveyId]);
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Alchemer(options));
};

exports.survey.surveystatistic.post = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveystatistic/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Alchemer(options));
};

exports.survey.surveystatistic.delete = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveystatistic/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Alchemer(options));
};

exports.survey.surveyreport.get = function(surveyId, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/survey/:surveyId/surveyreport', [surveyId]);
			break;
		case 2:
			url = parse('/survey/:surveyId/surveyreport/:id', [surveyId, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Alchemer(options));
};

exports.survey.surveyreport.put = function(surveyId, httpOptions) {
    if (!surveyId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId].');
        return;
    }
    var url = parse('/survey/:surveyId/surveyreport', [surveyId]);
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Alchemer(options));
};

exports.survey.surveyreport.post = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveyreport/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Alchemer(options));
};

exports.survey.surveyreport.delete = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveyreport/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Alchemer(options));
};

exports.survey.quotas.get = function(surveyId, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/survey/:surveyId/quotas', [surveyId]);
			break;
		case 2:
			url = parse('/survey/:surveyId/quotas/:id', [surveyId, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Alchemer(options));
};

exports.survey.quotas.put = function(surveyId, httpOptions) {
    if (!surveyId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId].');
        return;
    }
    var url = parse('/survey/:surveyId/quotas', [surveyId]);
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Alchemer(options));
};

exports.survey.quotas.post = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/quotas/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Alchemer(options));
};

exports.survey.quotas.delete = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/quotas/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Alchemer(options));
};

/****************************************************
 Public API - Generic Functions
 ****************************************************/

exports.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Alchemer(options), callbackData, callbacks);
};

exports.post = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Alchemer(options), callbackData, callbacks);
};

exports.put = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Alchemer(options), callbackData, callbacks);
};

exports.patch = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Alchemer(options), callbackData, callbacks);
};

exports.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Alchemer(options), callbackData, callbacks);
};

exports.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.head(Alchemer(options), callbackData, callbacks);
};

exports.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.options(Alchemer(options), callbackData, callbacks);
};

exports.utils = {};

exports.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

exports.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

exports.utils.fromDateToTimestamp = function(params) {
    if (!!params) {
        return {timestamp: new Date(params).getTime()};
    }
    return null;
};

exports.utils.fromMillisToDate = function(params) {
    if (!!params) {
        var sdf = new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            timeZone: 'UTC'
        });
        return {date: sdf.format(new Date(parseInt(params)))};
    }
    return null;
};

exports.utils.getConfiguration = function (property) {
    sys.logs.debug('[alchemer] Get property: '+property);
    return config.get(property);
};

/****************************************************
 Private helpers
 ****************************************************/


var concatQuery = function (url, key, value) {
    return url + ((!url || url.indexOf('?') < 0) ? '?' : '&') + key + "=" + value;
}

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contain the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
}

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
}

var stringType = Function.prototype.call.bind(Object.prototype.toString)

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string' && typeof (args[i]) != 'number') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}

/****************************************************
 Configurator
 ****************************************************/

var Alchemer = function (options) {
    options = options || {};
    options= setApiUri(options);
    options= setRequestHeaders(options);
    return options;
}

/****************************************************
 Private API
 ****************************************************/

function setApiUri(options) {
    var API_URL = config.get("ALCHEMER_API_BASE_URL"); // TODO: Set the base url for the api in the package.json (Remove this comment after set the url)
    var url = options.path || "";
    options.url = API_URL + url;
    sys.logs.debug('[alchemer] Set url: ' + options.path + "->" + options.url);
    return options;
}

function setRequestHeaders(options) {
    var headers = options.headers || {};
    if (config.get("authenticationMethod") === "apiKey") { // TODO: Set the authentication method, if needed or remove this if (Remove comments after set the url)
        sys.logs.debug('[alchemer] Set header apikey');
        headers = mergeJSON(headers, {"Authorization": "API-Key " + config.get("apiKey")});
    } 
    headers = mergeJSON(headers, {"Content-Type": "application/json"});

    options.headers = headers;
    return options;
}


function mergeJSON (json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}
