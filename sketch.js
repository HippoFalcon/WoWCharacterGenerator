N = 50;

function setup(){
 createCanvas( windowWidth , windowHeight );

//noStroke();
 
}

function draw(){
 
 for( n = 0 ; n < N ; n++ ){
 //BLACK L
 fill(33,59,81);
  stroke(255,208,68);
   ellipse( random( -windowWidth , windowHeight ) , random( windowHeight , 0) ,
   random( 1 , 200));
  //WHITE R
  fill( 139,28,17);
  stroke(25,25,25);
   ellipse( random( windowWidth , windowHeight ) , random( windowHeight , 0) ,
   random( 1 , 200));
  //WHITE L
  fill( 139,28,17);
  stroke(25,25,25);
  ellipse( random( -windowWidth , windowHeight ) , random( windowHeight , 0) ,
  random( 1 , 20));
  //BLACK R
  fill( 33,59,81 );
  stroke(255,208,68);
  ellipse( random( windowWidth , windowHeight ) , random( windowHeight , 0) ,
  random( 1 , 20));
 }
 
 
}
