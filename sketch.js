var maxDrops=100;

function preload(){
    background();
}

function setup(){
    for (var i=0; i<maxDrops; i++){
        drops.push(new createDrop(random(0,400), random(0,400)));
    }
   
    
}

function draw(){
    maxDrops.display();



    
}   

