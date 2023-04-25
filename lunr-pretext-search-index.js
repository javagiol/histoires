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
  "body": " Localisation  Aux États-Unis, il y a cinquante états dont le plus peuplé est la Californie, avec près de 40 millions d'habitants en 2020.  Carte de la Californie    Quel est le numéro de l'autoroute inter-États qui relie notamment Sacramento, Los Angeles et San Diego?    Interstate 5    Westwood est un quartier de Los Angeles, en Californie.  "
},
{
  "id": "question-1",
  "level": "2",
  "url": "localisation.html#question-1",
  "type": "Question",
  "number": "1.1.1",
  "title": "",
  "body": "  Quel est le numéro de l'autoroute inter-États qui relie notamment Sacramento, Los Angeles et San Diego?    Interstate 5   "
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
