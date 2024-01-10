var reservations=[]
$('#sub').on("click",function () {
var name=$('#nom_client').val()
var date=$('#date_reservation').val()
var time=$('#time_reservation').val()
var num_table =$('#num_table').val()
var obj={
    name:name,
    date:date,
    time:time,
    num_table:num_table
}
reservations.push(obj)
})
if (reservations.length>0){
    console.log("5atfet")
}