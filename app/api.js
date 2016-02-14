"use strict";

//todo: this is not yet working for some reason
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
						        "text": "Open the network tab as you navigate. Notice that only the amount of your app that is required is actually downloaded as you navigate around. Even the route configuration objects are loaded on the fly. This way, a new route added deep in your app will not affect the initial bundle of your application."
						      },
						      "calendar": {
						        "header": "The calendar page",
						        "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
						      },
						      "grades": {
						      	"header": "Grades header",
						      	"text": "Grades description"
						      },
						      "messages": {
						      	"header": "Messages header",
						      	"text": "Messages description"
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
						      "calendar": {
						        "header": "Apie šį sprendimą",
						        "text": "Lorem ipsum bēdas sēdēt Amet, consectetuer adipiscing Elit . Aeneas priekšrocība Rezervēts vajadzībām . Aeneas masu . Et magnis dis Grūsnās Montes Cras iaculis Justo eu libero . Donec quam felis , ultricies citur neklasificēti , pellentesque ES, pretium quis , sem . Nav recepte masu."
						      },
						      "grades": {
						      	"header": "Aprastas pavy",
						      	"text": "Tai labai paprastas pavyzdys, kaip."
						      },
						      "messages": {
						      	"header": "Rezervēts vajadzībām",
						      	"text": "Tai labai paprastas pavyzdys, kaip. Tai labai paprastas pavyzdys, kaip."
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
						        "text": "Это очень простой пример, как создать многоязычный сайт, используя React и Flux. Вы можете взять этот код в качестве базы и построить на нем свою систему, заменив загрузку содержачия из JSON вызовами API, расширить функциональность и т.д."
						      },
						      "calendar": {
						        "header": "Об этом решении",
						        "text": "Lorem Ipsum боль сидеть Амет , consectetuer adipiscing Элит . Эней преимуществом Зарезервировано потребности . Эней масса. Et Magnis дис роженица Монтес Крас iaculis Justo ЕС либеро . Донец Quam Felis , ultricies NEC, pellentesque ЕС, Pretium Quis , сем. Там нет рецепта для массы ."
						      },
						      "grades": {
						      	"header": "используя React",
						      	"text": "то очень простой примето очень простой приме."
						      },
						      "messages": {
						      	"header": "Эней преимуществом",
						      	"text": "Это очень простой пример."
						      }
						    }
						  }
						];

		return content.filter(obj => obj.lang === language)[0];
	}

};

module.exports = Api;