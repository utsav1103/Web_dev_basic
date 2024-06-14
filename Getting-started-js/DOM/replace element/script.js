//fucntion to replace an article

function replaceArticle (articleId, newContainet){
    //finc the existing article element by it's id

    const existingArticle = document.getElementById(articleId)
   
    //create a new div element for the updated article
    const newArticleEl = document.createElement("div");
    //add css to it
    newArticleEl.className = "article";

    //keep the ID same for the new article
    newArticleEl.id = articleId;

    //create a text node for the new content

    const newTextNode = document.createTextNode(newContainet);
    //appned the text node to the new article div

    newArticleEl.appendChild(newTextNode);
    //replace existing article with the new one

    existingArticle.parentNode.replaceChild(newArticleEl,existingArticle);


}

replaceArticle("article1" ,"This is new Article");
replaceArticle("article2" ,"This is new content");