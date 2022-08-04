const generateObject = (req, temp ,callback) =>{
	var obj = {
		'name': req.event_id,
	    '_archived': false,
	    '_draft': false,
	}
	if(temp.params.collectionid == process.env.WEBFLOW_1){
		console.log(`Adding a new record to a collection with an ID of: ${process.env.WEBFLOW_1}`)
		Object.assign(obj, {'company-name': req.form_response.answers[0].text})
		Object.assign(obj, {'email-address':req.form_response.answers[1].email})
		Object.assign(obj, {'editable-document':{'url': req.form_response.answers[2].file_url}})
		Object.assign(obj, {'photo':{'url':req.form_response.answers[3].file_url}})
		Object.assign(obj, {'description':req.form_response.answers[4].text})
		const arr = req.form_response.answers[5].choices.labels
		var str = arr.join(", ")
		Object.assign(obj, {'multiple-choice-answer-2': str})
	}else if(temp.params.collectionid == process.env.WEBFLOW_2){
		console.log(`Adding a new record to a collection with an ID of: ${process.env.WEBFLOW_2}`)
		Object.assign(obj, {'description': req.form_response.answers[0].text})
		Object.assign(obj, {'image': {'url': req.form_response.answers[1].file_url}})
	}else if(temp.params.collectionid == process.env.WEBFLOW_3){
		console.log(`[Vietnam Microsite 2021] Adding a new record to a collection with an ID of: ${process.env.WEBFLOW_3}`)
		Object.assign(obj, {'client': req.form_response.answers[0].text})
		Object.assign(obj, {'name': req.form_response.answers[0].text})
		Object.assign(obj, {'view-live-website': req.form_response.answers[1].url})
		Object.assign(obj, {'company-email':req.form_response.answers[2].email})
		Object.assign(obj, {'csr-report':{'url': req.form_response.answers[3].file_url}})
		Object.assign(obj, {'main-project-image':{'url':req.form_response.answers[4].file_url}})
		Object.assign(obj, {'project-details':req.form_response.answers[5].text})
		Object.assign(obj, {"related-projects": false})

	}else if(temp.params.collectionid == process.env.WEBFLOW_4){
		console.log(`[Thailand Microsite 2021] Adding a new record to a collection with an ID of: ${process.env.WEBFLOW_4}`)
		Object.assign(obj, {'client': req.form_response.answers[0].text})
		Object.assign(obj, {'name': req.form_response.answers[0].text})
		Object.assign(obj, {'view-live-website': req.form_response.answers[1].url})
		Object.assign(obj, {'company-email':req.form_response.answers[2].email})
		Object.assign(obj, {'csr-report':{'url': req.form_response.answers[3].file_url}})
		Object.assign(obj, {'main-project-image':{'url':req.form_response.answers[4].file_url}})
		Object.assign(obj, {'project-details':req.form_response.answers[5].text})
		Object.assign(obj, {"related-projects": false})

	}else if(temp.params.collectionid == process.env.WEBFLOW_5){
		// console.log(req.form_response.answers[0].text)
		console.log(`[Malaysia Microsite 2021] Adding a new record to a collection with an ID of: ${process.env.WEBFLOW_5}`)
		Object.assign(obj, {'client': req.form_response.answers[0].text})
		Object.assign(obj, {'name': req.form_response.answers[0].text})
		Object.assign(obj, {'view-live-website': req.form_response.answers[1].url})
		Object.assign(obj, {'company-email':req.form_response.answers[2].email})
		Object.assign(obj, {'year-established': req.form_response.answers[3].number.toString()})
		Object.assign(obj, {'csr-report':{'url': req.form_response.answers[4].file_url}})
		Object.assign(obj, {'main-project-image':{'url':req.form_response.answers[5].file_url}})
		Object.assign(obj, {'project-details':req.form_response.answers[6].text})
		Object.assign(obj, {"related-projects": false})

	}else if(temp.params.collectionid == process.env.WEBFLOW_6){
		console.log(`[US-ASEAN Special Summit 2022] Adding a new record to a collection with an ID of: ${process.env.WEBFLOW_6}`)
		Object.assign(obj, {'client': req.form_response.answers[0].text})
		Object.assign(obj, {'name': req.form_response.answers[0].text})
		Object.assign(obj, {'view-live-website': req.form_response.answers[1].url})
		Object.assign(obj, {'company-email':req.form_response.answers[2].email})
		Object.assign(obj, {'csr-report':{'url': req.form_response.answers[3].file_url}})
		Object.assign(obj, {'main-project-image':{'url':req.form_response.answers[4].file_url}})
		Object.assign(obj, {'project-details':req.form_response.answers[5].text})
		Object.assign(obj, {"related-projects": false})

	}else if(temp.params.collectionid == process.env.WEBFLOW_7){
		console.log(`[Singapore Microsite 2021] Adding a new record to a collection with an ID of: ${process.env.WEBFLOW_7}`)
		Object.assign(obj, {'client': req.form_response.answers[0].text})
		Object.assign(obj, {'name': req.form_response.answers[0].text})
		Object.assign(obj, {'view-live-website': req.form_response.answers[1].url})
		Object.assign(obj, {'company-email':req.form_response.answers[2].email})
		Object.assign(obj, {'csr-report':{'url': req.form_response.answers[3].file_url}})
		Object.assign(obj, {'main-project-image':{'url':req.form_response.answers[4].file_url}})
		Object.assign(obj, {'project-details':req.form_response.answers[5].text})
		Object.assign(obj, {"related-projects": false})

	}
	//Add another if statement for every new typeform fields
	//Add collectionid value to .env for the if statement
	//else if(req.params.collectionid == process.env.WEBFLOW_#){...WEBFLOW FIELDS...}
	callback(obj)
}

module.exports = generateObject