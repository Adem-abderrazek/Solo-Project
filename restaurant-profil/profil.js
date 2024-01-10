var images=["1.jpg","4.jpg","1.jpg","4.jpg","1.jpg","4.jpg"]
var i=0
$(".changeImg").on('click',function() {
  console.log(i)
  if (i<images.length){
    i++;
  $(".img").attr("src",`${images[i]}`);
  
}
else{
  i=0;
  $(".img").attr("src",`${images[i]}`);
}
})