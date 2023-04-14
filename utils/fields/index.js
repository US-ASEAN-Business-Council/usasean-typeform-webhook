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
	else if(temp.params.collectionid == process.env.WEBFLOW_8){
		console.log(`[AEM 2022 Factbook Submission] Adding a new record to a collection with an ID of: ${process.env.WEBFLOW_8}`)
		Object.assign(obj, {'client': req.form_response.answers[0].text})
		Object.assign(obj, {'company-email':req.form_response.answers[1].email})
		Object.assign(obj, {'name': req.form_response.answers[0].text})
		// Object.assign(obj, {'company-email':req.form_response.answers[2].email})
		Object.assign(obj, {'csr-report':{'url': req.form_response.answers[2].file_url}})
		Object.assign(obj, {'main-project-image':{'url':req.form_response.answers[3].file_url}})
		Object.assign(obj, {'project-details':req.form_response.answers[4].text})
		Object.assign(obj, {"related-projects": false})

	}
	// else if(temp.params.collectionid == process.env.WEBFLOW_9){
	// 	console.log(`[Philippines Microsite 2021] Adding a new record to a collection with an ID of: ${process.env.WEBFLOW_9}`)
	// 	Object.assign(obj, {'client': req.form_response.answers[0].text})
	// 	Object.assign(obj, {'name': req.form_response.answers[0].text})
	// 	Object.assign(obj, {'view-live-website': req.form_response.answers[1].url})
	// 	Object.assign(obj, {'company-email':req.form_response.answers[2].email})
	// 	Object.assign(obj, {'csr-report':{'url': req.form_response.answers[3].file_url}})
	// 	Object.assign(obj, {'main-project-image':{'url':req.form_response.answers[4].file_url}})
	// 	Object.assign(obj, {'project-details':req.form_response.answers[5].text})
	// 	Object.assign(obj, {"related-projects": false})

	// }
	else if(temp.params.collectionid == process.env.WEBFLOW_9){
		let answers = req.form_response.answers
		let body = {
			client: answers.filter((item)=> item.field.ref === '01F1HK19XVNTGAKF4V80FF07D3')[0] ? answers.filter((item)=> item.field.ref === '01F1HK19XVNTGAKF4V80FF07D3')[0].text : null,
			name: answers.filter((item)=> item.field.ref === '01F1HK19XVNTGAKF4V80FF07D3')[0] ? answers.filter((item)=> item.field.ref === '01F1HK19XVNTGAKF4V80FF07D3')[0].text : null,
			['view-live-website']: answers.filter((item)=> item.field.ref === 'ff2cbb49-aca0-4856-a8fb-3b7b66aa17d9')[0] ? answers.filter((item)=> item.field.ref === 'ff2cbb49-aca0-4856-a8fb-3b7b66aa17d9')[0].url : null,
			['company-email']: answers.filter((item)=> item.field.ref === 'a90973cf-92b6-46fc-8ee8-cd8d4f1a1efa')[0] ? answers.filter((item)=> item.field.ref === 'a90973cf-92b6-46fc-8ee8-cd8d4f1a1efa')[0].email : null,
			['csr-report']: answers.filter((item)=> item.field.ref === 'd7aec445-86a8-472b-ae1e-4cbc700c1add')[0] ? answers.filter((item)=> item.field.ref === 'd7aec445-86a8-472b-ae1e-4cbc700c1add')[0].file_url : null,
			['main-project-image']: answers.filter((item)=> item.field.ref === '554ab0e2-6af7-4942-bf01-f392fe27fbac')[0] ? answers.filter((item)=> item.field.ref === '554ab0e2-6af7-4942-bf01-f392fe27fbac')[0].file_url : null,
			['project-details']: answers.filter((item)=> item.field.ref === 'dd88ec3e-224e-4c04-b87a-66a893b38478')[0] ? answers.filter((item)=> item.field.ref === 'dd88ec3e-224e-4c04-b87a-66a893b38478')[0].text : null
		}
		console.log(body)
		Object.assign(obj, body)
		console.log(`[Philippines Microsite 2021] Adding a new record to a collection with an ID of: ${process.env.WEBFLOW_9}`)
		// Object.assign(obj, {'client': req.form_response.answers.filter((item)=> item.field.ref === '01F1HK19XVNTGAKF4V80FF07D3')[0].text})
		// Object.assign(obj, {'name': req.form_response.answers.filter((item)=> item.field.ref === '01F1HK19XVNTGAKF4V80FF07D3')[0].text})
		// Object.assign(obj, {'view-live-website': req.form_response.answers.filter((item)=> item.field.ref === 'ff2cbb49-aca0-4856-a8fb-3b7b66aa17d9')[0].url})
		// Object.assign(obj, {'company-email':req.form_response.answers.filter((item)=> item.field.ref === 'a90973cf-92b6-46fc-8ee8-cd8d4f1a1efa')[0].email})
		// Object.assign(obj, {'csr-report':{'url': req.form_response.answers.filter((item)=> item.field.ref === 'd7aec445-86a8-472b-ae1e-4cbc700c1add')[0].file_url}})
		// Object.assign(obj, {'main-project-image':{'url':req.form_response.answers.filter((item)=> item.field.ref === '554ab0e2-6af7-4942-bf01-f392fe27fbac')[0].file_url}})
		// Object.assign(obj, {'project-details':req.form_response.answers.filter((item)=> item.field.ref === 'dd88ec3e-224e-4c04-b87a-66a893b38478')[0].text})
		// Object.assign(obj, {"related-projects": false})

	}
	else if(temp.params.collectionid == process.env.WEBFLOW_10){
		let answers = req.form_response.answers
		let body = {
			client: answers.filter((item)=> item.field.ref === '01F1HK19XVNTGAKF4V80FF07D3')[0] ? answers.filter((item)=> item.field.ref === '01F1HK19XVNTGAKF4V80FF07D3')[0].text : null,
			name: answers.filter((item)=> item.field.ref === '01F1HK19XVNTGAKF4V80FF07D3')[0] ? answers.filter((item)=> item.field.ref === '01F1HK19XVNTGAKF4V80FF07D3')[0].text : null,
			['view-live-website']: answers.filter((item)=> item.field.ref === 'ff2cbb49-aca0-4856-a8fb-3b7b66aa17d9')[0] ? answers.filter((item)=> item.field.ref === 'ff2cbb49-aca0-4856-a8fb-3b7b66aa17d9')[0].url : null,
			['company-email']: answers.filter((item)=> item.field.ref === 'a90973cf-92b6-46fc-8ee8-cd8d4f1a1efa')[0] ? answers.filter((item)=> item.field.ref === 'a90973cf-92b6-46fc-8ee8-cd8d4f1a1efa')[0].email : null,
			['csr-report']: answers.filter((item)=> item.field.ref === 'd7aec445-86a8-472b-ae1e-4cbc700c1add')[0] ? answers.filter((item)=> item.field.ref === 'd7aec445-86a8-472b-ae1e-4cbc700c1add')[0].file_url : null,
			['main-project-image']: answers.filter((item)=> item.field.ref === '554ab0e2-6af7-4942-bf01-f392fe27fbac')[0] ? answers.filter((item)=> item.field.ref === '554ab0e2-6af7-4942-bf01-f392fe27fbac')[0].file_url : null,
			['project-details']: answers.filter((item)=> item.field.ref === 'dd88ec3e-224e-4c04-b87a-66a893b38478')[0] ? answers.filter((item)=> item.field.ref === 'dd88ec3e-224e-4c04-b87a-66a893b38478')[0].text : null
		}
		console.log(body)
		Object.assign(obj, body)
		console.log(`[Vietnam Microsite 2021] Adding a new record to a collection with an ID of: ${process.env.WEBFLOW_10}`)
		// Object.assign(obj, {'client': req.form_response.answers.filter((item)=> item.field.ref === '01F1HK19XVNTGAKF4V80FF07D3')[0].text})
		// Object.assign(obj, {'name': req.form_response.answers.filter((item)=> item.field.ref === '01F1HK19XVNTGAKF4V80FF07D3')[0].text})
		// Object.assign(obj, {'view-live-website': req.form_response.answers.filter((item)=> item.field.ref === 'ff2cbb49-aca0-4856-a8fb-3b7b66aa17d9')[0].url})
		// Object.assign(obj, {'company-email':req.form_response.answers.filter((item)=> item.field.ref === 'a90973cf-92b6-46fc-8ee8-cd8d4f1a1efa')[0].email})
		// Object.assign(obj, {'csr-report':{'url': req.form_response.answers.filter((item)=> item.field.ref === 'd7aec445-86a8-472b-ae1e-4cbc700c1add')[0].file_url}})
		// Object.assign(obj, {'main-project-image':{'url':req.form_response.answers.filter((item)=> item.field.ref === '554ab0e2-6af7-4942-bf01-f392fe27fbac')[0].file_url}})
		// Object.assign(obj, {'project-details':req.form_response.answers.filter((item)=> item.field.ref === 'dd88ec3e-224e-4c04-b87a-66a893b38478')[0].text})
		// Object.assign(obj, {"related-projects": false})

	}
	else if(temp.params.collectionid == process.env.WEBFLOW_11){
		let answers = req.form_response.answers
		let body = {
			client: answers.filter((item)=> item.field.ref === '01F1HK19XVNTGAKF4V80FF07D3')[0] ? answers.filter((item)=> item.field.ref === '01F1HK19XVNTGAKF4V80FF07D3')[0].text : null,
			name: answers.filter((item)=> item.field.ref === '01F1HK19XVNTGAKF4V80FF07D3')[0] ? answers.filter((item)=> item.field.ref === '01F1HK19XVNTGAKF4V80FF07D3')[0].text : null,
			['view-live-website']: answers.filter((item)=> item.field.ref === 'ff2cbb49-aca0-4856-a8fb-3b7b66aa17d9')[0] ? answers.filter((item)=> item.field.ref === 'ff2cbb49-aca0-4856-a8fb-3b7b66aa17d9')[0].url : null,
			['company-email']: answers.filter((item)=> item.field.ref === 'a90973cf-92b6-46fc-8ee8-cd8d4f1a1efa')[0] ? answers.filter((item)=> item.field.ref === 'a90973cf-92b6-46fc-8ee8-cd8d4f1a1efa')[0].email : null,
			['csr-report']: answers.filter((item)=> item.field.ref === 'd7aec445-86a8-472b-ae1e-4cbc700c1add')[0] ? answers.filter((item)=> item.field.ref === 'd7aec445-86a8-472b-ae1e-4cbc700c1add')[0].file_url : null,
			['main-project-image']: answers.filter((item)=> item.field.ref === '554ab0e2-6af7-4942-bf01-f392fe27fbac')[0] ? answers.filter((item)=> item.field.ref === '554ab0e2-6af7-4942-bf01-f392fe27fbac')[0].file_url : null,
			['project-details']: answers.filter((item)=> item.field.ref === 'dd88ec3e-224e-4c04-b87a-66a893b38478')[0] ? answers.filter((item)=> item.field.ref === 'dd88ec3e-224e-4c04-b87a-66a893b38478')[0].text : null,
			['key-highlights']: answers.filter((item)=> item.field.ref === '91ca2dc5-95f0-4b05-bf1e-b4c1c2207ac8')[0] ? answers.filter((item)=> item.field.ref === '91ca2dc5-95f0-4b05-bf1e-b4c1c2207ac8')[0].text : null,
			['quick-facts']: answers.filter((item)=> item.field.ref === '8c0b232e-59a9-451f-a35f-af81580e9dee')[0] ? answers.filter((item)=> item.field.ref === '8c0b232e-59a9-451f-a35f-af81580e9dee')[0].text : null,
			['human-capital-development']: answers.filter((item)=> item.field.ref === '145ccfc9-15e8-45f3-ae4d-fd2240672c8a')[0] ? answers.filter((item)=> item.field.ref === '145ccfc9-15e8-45f3-ae4d-fd2240672c8a')[0].text : null,
			['social-and-community-support']: answers.filter((item)=> item.field.ref === '219a67d0-95b8-428d-b32f-08e397450ecc')[0] ? answers.filter((item)=> item.field.ref === '219a67d0-95b8-428d-b32f-08e397450ecc')[0].text : null,
			['sme-support']: answers.filter((item)=> item.field.ref === 'fdf6fc23-adbc-4d70-a5be-ce8215712125')[0] ? answers.filter((item)=> item.field.ref === 'fdf6fc23-adbc-4d70-a5be-ce8215712125')[0].text : null,
			['covid19-support']: answers.filter((item)=> item.field.ref === 'c10e1c79-640a-4d89-a0d5-8e0376d1c902')[0] ? answers.filter((item)=> item.field.ref === 'c10e1c79-640a-4d89-a0d5-8e0376d1c902')[0].text : null,
			['other']: answers.filter((item)=> item.field.ref === '3bbf39b9-1b10-4001-8a88-b34d265d9e25')[0] ? answers.filter((item)=> item.field.ref === '3bbf39b9-1b10-4001-8a88-b34d265d9e25')[0].text : null
		}
		console.log(body)
		Object.assign(obj, body)
		console.log(`[Indonesia Microsite 2023] Adding a new record to a collection with an ID of: ${process.env.WEBFLOW_11}`)
		// Object.assign(obj, {'client': req.form_response.answers.filter((item)=> item.field.ref === '01F1HK19XVNTGAKF4V80FF07D3')[0].text})
		// Object.assign(obj, {'name': req.form_response.answers.filter((item)=> item.field.ref === '01F1HK19XVNTGAKF4V80FF07D3')[0].text})
		// Object.assign(obj, {'view-live-website': req.form_response.answers.filter((item)=> item.field.ref === 'ff2cbb49-aca0-4856-a8fb-3b7b66aa17d9')[0].url})
		// Object.assign(obj, {'company-email':req.form_response.answers.filter((item)=> item.field.ref === 'a90973cf-92b6-46fc-8ee8-cd8d4f1a1efa')[0].email})
		// Object.assign(obj, {'csr-report':{'url': req.form_response.answers.filter((item)=> item.field.ref === 'd7aec445-86a8-472b-ae1e-4cbc700c1add')[0].file_url}})
		// Object.assign(obj, {'main-project-image':{'url':req.form_response.answers.filter((item)=> item.field.ref === '554ab0e2-6af7-4942-bf01-f392fe27fbac')[0].file_url}})
		// Object.assign(obj, {'project-details':req.form_response.answers.filter((item)=> item.field.ref === 'dd88ec3e-224e-4c04-b87a-66a893b38478')[0].text})
		// Object.assign(obj, {"related-projects": false})

	}
	//Add another if statement for every new typeform fields
	//Add collectionid value to .env for the if statement
	//else if(req.params.collectionid == process.env.WEBFLOW_#){...WEBFLOW FIELDS...}test
	callback(obj)
}

module.exports = generateObject
