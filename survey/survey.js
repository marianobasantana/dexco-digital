const survey = (function () {
	// Variáveis:
	let elemBody = document.querySelector('body')
	let elemDiv = document.createElement('div')
	let elemIframe = document.createElement('iframe')

	const elemBtnOpen = document.createElement('button')
	const elemBtnClose = document.createElement('button')

	// Funções:
	const addEventSurveyCloseFn = (e) => {
		// console.log('message', e.data)
		if (e.data === 'myevent' || e.message === 'myevent') {
			closeSurvey()
		}
	}

	const addEventSurveyClose = () => {
		// Adicionar apenas quando estiver aberto e um debounce, pois emite muito evento:

		/* const eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent'
		const messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message'
		var eventer = window[eventMethod]
		
		eventer(messageEvent, function (e) {
			if (e.data === 'myevent' || e.message === 'myevent')
				elemDiv.remove()
	
			console.log(e)
		}) */

		window.addEventListener('message', addEventSurveyCloseFn)
	}

	const closeSurvey = () => {
		elemDiv.remove()
		window.removeEventListener('message', addEventSurveyCloseFn)
		elemBtnOpen.style.zIndex = '99'
	}

	const openSurvey = () => {
		elemBody.append(elemDiv)
		addEventSurveyClose()
		elemBtnOpen.style.zIndex = '97'
	}

	const createButtons = () => {
		elemBtnOpen.setAttribute('id', 'btn-open-survey')
		elemBtnOpen.setAttribute('style', 'position: fixed; z-index: 99; bottom: 20px; left: 20px; border-radius: 20%; height: 80px; width: 80px; border: 1px solid #806AEB; background: #806AEB; text-transform: uppercase; font-size: 10px; font-family: "Roboto", Helvetica, sans-serif; cursor: pointer;')
		elemBtnOpen.innerHTML = 'Responder Pesquisa'
		elemBody.querySelector('& > div').append(elemBtnOpen)
		elemBtnOpen.addEventListener('click', openSurvey)
		// const surveyBtnOpen = document.getElementById('btn-open-survey')
		// surveyBtnOpen.addEventListener('click', openSurvey)

		elemBtnClose.setAttribute('id', 'btn-close-survey')
		elemBtnClose.setAttribute('style', 'position: fixed; z-index: 98; bottom: 20px; left: 20px; border-radius: 20%; height: 80px; width: 80px; border: 1px solid #806AEB; background: #806AEB; text-transform: uppercase; font-size: 10px; font-family: "Roboto", Helvetica, sans-serif; cursor: pointer;')
		elemBtnClose.innerHTML = 'Fechar Pesquisa'
		elemBody.querySelector('& > div').append(elemBtnClose)
		elemBtnClose.addEventListener('click', closeSurvey)
		// const surveyBtnClose = document.getElementById('btn-close-survey')
		// surveyBtnClose.addEventListener('click', closeSurvey)
	}

	var init = function () {
		// elemIframe.setAttribute('src', './form.html')
		elemIframe.setAttribute('src', 'https://marianobasantana.github.io/dexco-digital/form.html')
		elemIframe.setAttribute('style', 'border: 1px solid #000; width: 100%; max-width: 400px; max-height: 400px; position: fixed; bottom: 10px; right: 10px; z-index: 99; height: 300px;')

		elemDiv.append(elemIframe)

		createButtons()
	}

	return {
		init: init,
		openSurvey: openSurvey,
		closeSurvey: closeSurvey
	}
})()

survey.init()
