var i=0
$('#sub').on("click",function () {
var name=$('#nom_client').val()
var date=$('#date_reservation').val()
var time=$('#time_reservation').val()
var num_table =$('#num_table').val()
var obj={"name": name,
        "date":date,
        "time":time,
        " numtable": num_table
        }
// localStorage.setItem(1,{"name": name,
// "date":date,
// "time":time,
// " numtable": num_table
// });
// var obj={
//     name:name,
//     date:date,
//     time:time,
//     num_table:num_table
// }
localStorage.setItem(i,JSON.stringify(obj))
i++
})
var array=[]
$("#show").click(function(){
for (let index = 0; index < i; index++) {
    var reservation=JSON.parse(localStorage.getItem(index))
    console.log(reservation)
    array.push(reservation)

}
render(array)
})
function render(array) {
    each(array, function (element) {
              $('.grid-container').append(`<div class="grid-item">
              <h1>name:${element.name}</h1>
              <div class="deva">
              <ul><li><h2>${element.date}</h2></li>
              <h3>${element.num_table}</h3></ul></div></div>
              `)
           })
}
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