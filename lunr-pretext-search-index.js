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
  "body": " Localisation  Westwood est un quartier de Los Angeles, en Californie.  "
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
