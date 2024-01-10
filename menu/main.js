//this is our array of images wich are object
var data = [
    {name:"Carpacio",
        category: "sea food",
        imgSrc: "carpacio.jpg"
    }, {name:"Fell Berber",
        category: "sea food ",
        imgSrc: "fellberber.jpg"
    }, {name:"dorate",
        category: "sea food",
        imgSrc: "dorade.png"
    }, {name:"Lasagne",
        category: "pasta",
        imgSrc: "lasagne.png"
    }, {name:"Cesar en vacances",
        category: "entree",
        imgSrc: "cesar.png"
    }, {name:"Poutanisca",
        category: "pasta",
        imgSrc: "putanisca.png"
    }, {name:"Paella",
        category: "pasta",
        imgSrc: "paella.png"
    }, {name:"Penne 4 Fromage",
    category: "pasta",
    imgSrc: "penne.png"
    }, {name:"spagetti fruit de mer",
    category: "pasta",
    imgSrc: "sp.png"
    }, {name:"Filet",
        category: "meat",
        imgSrc: "filet.png"
    }, {name:"Cote",
    category: "meat",
    imgSrc: "cote.png"
    },{name:"Escalope",
    category: "chiken",
    imgSrc: "escalope.png"
    },{name:"Loup grille",
        category: "sea food",
        imgSrc: "loup.png"
    }, {name:"Brochette",
        category: "chiken",
        imgSrc: "greade.png"
    }, {name:"Souris",
        category: "meat",
        imgSrc: "souris.png"
    }, {name:"ojja fruit de mer",
        category: "entree",
        imgSrc: "ojja.png"
    }

];
//higher order functions
var each = function (coll, func) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            func(coll[i], i)
        }
    }
    else {
        for (var key in coll) {
            func(coll[key], key)
        }
    }
}

var filter = function (array, predicate) {
    var acc = [];
    each(array, function (e, i) {
        if (predicate(e, i)) {
            acc.push(e)
        }
    })
    return acc;
}
//this function will filter throw the array loking for a certain category
var filtercategory=function(search){
    return filter(data,function (element) {
        return element .category===search
    })
}
//this function will filter throw the array loking for a certain name of plate

var filtername=function(search){
    return filter(data,function (element) {
        return element .name===search
    })
}
//this function will display  the array 

function render(data) {
    each(data, function (element) {
              $('.grid-container').append(`<div class="grid-item">
              <img src=${element.imgSrc}>
              <div class="deva">
              <ul><li><h2>${element.name}</h2></li>
              <h3>${element.category}</h3></ul></div></div>
              `)
           })
}
render (data)
//this function will display  the array 
function renderCategory(data) {
    each(data, function (element) {
              $('.grid-container').append(`<div class="grid-item">
              <img src=${element.imgSrc}>
              <div class="deva">
              <ul>
              <li>
              <h2>${element.name}</h2>
              </li>
              </ul></div></div>
              `)
           })
}
categories=["pasta","sea food","entree","chiken","meat"]
 $("#submitcat").on("click", function () {
    $('.grid-container').empty()
    var search=$(".searchTerm").val()
    if (categories.includes(search) ){
        var filtreddata=filtercategory(search.toLowerCase())
    renderCategory(filtreddata)
    } else {
        render(data)    
    }
    
 })
 $("#submitname").on("click", function () {
    $('.grid-container').empty()
    var search=$(".searchTerm").val()
    var filtreddata=filtername(search.toLowerCase())
    renderCategory(filtreddata)
 })

