var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Pages Liminaires",
  "number": "",
  "title": "Pages Liminaires",
  "body": "   Julien Giol       "
},
{
  "id": "localisation",
  "level": "1",
  "url": "localisation.html",
  "type": "Section",
  "number": "1.1",
  "title": "Localisation",
  "body": " Localisation  Aux États-Unis, il y a cinquante états dont le plus peuplé est la Californie, avec près de 40 millions d'habitants en 2020.   La Californie.      Comment s'appelle l'océan qui borde la Californie?    L'Océan Pacifique.    La capitale de la Californie n'est pas sa ville la plus grande, ni la plus connue : c'est Sacramento, à mi-chemin entre San Francisco et le lac Tahoe.    Quel est le numéro de l'autoroute inter-États qui relie notamment Sacramento à Los Angeles?    L'Interstate 5.    La ville la plus peuplée et la plus étendue de Californie, c'est Los Angeles. Son nom signifie les anges en espagnol.    Quel est le pays hispanophone qu'on trouve juste au sud de la Californie?    Le Mexique.    Westwood est un quartier de Los Angeles situé au nord-ouest de la ville.   Westwood, quartier de Los Angeles      Quel est le nom du boulevard sinueux qui délimite le nord de Westwood?    Sunset Boulevard.    Pendant l'année scolaire 2005-2006, j'ai habité à Westwood chez Alex et Anne-Marie, au 461 Levering Avenue.   461 Levering Avenue.      Quel type d'arbre dépasse du toit derrière la maison?    Un palmier.    "
},
{
  "id": "carte-californie",
  "level": "2",
  "url": "localisation.html#carte-californie",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " La Californie.   "
},
{
  "id": "question-1",
  "level": "2",
  "url": "localisation.html#question-1",
  "type": "Question",
  "number": "1.1.2",
  "title": "",
  "body": "  Comment s'appelle l'océan qui borde la Californie?    L'Océan Pacifique.   "
},
{
  "id": "question-2",
  "level": "2",
  "url": "localisation.html#question-2",
  "type": "Question",
  "number": "1.1.3",
  "title": "",
  "body": "  Quel est le numéro de l'autoroute inter-États qui relie notamment Sacramento à Los Angeles?    L'Interstate 5.   "
},
{
  "id": "question-3",
  "level": "2",
  "url": "localisation.html#question-3",
  "type": "Question",
  "number": "1.1.4",
  "title": "",
  "body": "  Quel est le pays hispanophone qu'on trouve juste au sud de la Californie?    Le Mexique.   "
},
{
  "id": "carte-westwood",
  "level": "2",
  "url": "localisation.html#carte-westwood",
  "type": "Figure",
  "number": "1.1.5",
  "title": "",
  "body": " Westwood, quartier de Los Angeles   "
},
{
  "id": "question-4",
  "level": "2",
  "url": "localisation.html#question-4",
  "type": "Question",
  "number": "1.1.6",
  "title": "",
  "body": "  Quel est le nom du boulevard sinueux qui délimite le nord de Westwood?    Sunset Boulevard.   "
},
{
  "id": "carte-levering",
  "level": "2",
  "url": "localisation.html#carte-levering",
  "type": "Figure",
  "number": "1.1.7",
  "title": "",
  "body": " 461 Levering Avenue.   "
},
{
  "id": "question-5",
  "level": "2",
  "url": "localisation.html#question-5",
  "type": "Question",
  "number": "1.1.8",
  "title": "",
  "body": "  Quel type d'arbre dépasse du toit derrière la maison?    Un palmier.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
