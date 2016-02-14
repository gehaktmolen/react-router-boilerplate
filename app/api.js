"use strict";

//import content from './data/content.json'

let Api = {

	getContent(language = 'en') {
		
		var content = [
						  {
						    "lang": "en",
						    "page": {
						      "menu": {
						        "home": "Home",
						        "calendar": "Calendar",
						        "grades": "Grades",
						        "messages": "Messages"
						      },
						      "home": {
						        "header": "Super Scalable Apps",
						        "text": "Open the network tab as you navigate. Notice that only the amount of your app that is required is actually downloaded as you navigate around. Even the route configuration objects are loaded on the fly. This way, a new route added deep in your app will not affect the initial bundle of your application.",
						      },
						      "about": {
						        "header": "About the solution",
						        "text": "This Website is created using React version 1.14. Using Flux as a pattern for dealing with changes. This solution is left as clean as possible, just using pure Bootstrap, no styling, no addition JavaScript. Tests are written in Mocha, using Chai as assertion library and Sinon as a mocking/spying/faking helper. There it is beneficial - ES2015 syntax is being used. Gulp is used for task automation. React code is being transpiled using Babel version 6, Babel is used for ES2015 code transformation as well. For these two transformations Babel presets are being used.",
						      }
						    }
						  },
						  {
						    "lang": "lt",
						    "page": {
						      "menu": {
						        "home": "Pradžia",
						        "calendar": "Apie",
						        "grades": "Grades",
						        "messages": "Messages"
						      },
						      "home": {
						        "header": "Kaip pradėti darbą su React ir Flux",
						        "text": "Tai labai paprastas pavyzdys, kaip sukurti daugiakalbę interneto svetainę naudojant React ir Flux. Galite remtis šiuo kodu kaip pagrindu, pakeičiant turinio gavimą iš JSON į kreipinius į API, pridedant naują funkcionalumą ir t.t.",
						      },
						      "about": {
						        "header": "Apie šį sprendimą",
						        "text": "Ši svetainė yra sukurta naudojant React versiją 1.14. Flux biblioteka yra naudojama kaip šablonas reaguojant į duomenų pokyčius. Šis sprendimas padaryti kuo paprastesniu, naudojant gryną Bootstrap, be papildomų stilių ar JavaScript kodo. Testai parašyti Mocha, naudojant Chai ir Sinon. Ten, kur tai naudinga - naudojama ES2015 sintaksė. Gulp naudojamas užduočių automatizavimui. React kodas yra transformuojamas naudojant Babel 6 versiją, Babel taip pat yra naudojamas ES2015 kodo transformacijai. Šiom dviejom transformacijom įvykdyti naudojami Babel presets.",
						      }
						    }
						  },
						  {
						    "lang": "ru",
						    "page": {
						      "menu": {
						        "home": "Pradžia",
						        "calendar": "О проекте",
						        "grades": "Grades",
						        "messages": "Messages"
						      },
						      "home": {
						        "header": "Начиная работать с React и Flux",
						        "text": "Это очень простой пример, как создать многоязычный сайт, используя React и Flux. Вы можете взять этот код в качестве базы и построить на нем свою систему, заменив загрузку содержачия из JSON вызовами API, расширить функциональность и т.д.",
						      },
						      "about": {
						        "header": "Об этом решении",
						        "text": "Этот сайт создан с использованием 1.14 версии React. Flux используется в качестве шаблона для обработки изменений. Это решение зделано как можно более простым, используется Bootstrap без добавления дополнителных стилей или JavaScript кода. Тесты написаны в Mocha, с исползованием Chai и Sinon. Там, где это выгодно - используется ES2015 синтаксис. Gulp используется для автоматизации задач. React код будучи transpiled помощью Babel версии 6, а также Babel используется для преобразования кода ES2015. Для этих двух преобразований используются пресеты Babel.",
						      }
						    }
						  }
						];

		return content.filter(obj => obj.lang === language)[0];
	}

};

module.exports = Api;