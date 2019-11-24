function nextGap(gap){
  gap = gap/1.3;
  if(gap <= 1){ return 1;}
  return gap;
}


let values = [];

let i = 0;
let j = 0;
let gap = 0;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  values = new Array(width);
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
    //values[i] = noise(i/100.0)*height;
  }
  gap = values.length;
}

function draw() {
  background(0,0,156);
  let swapped = true;
  if (i < values.length) {
    while(gap > 1|| swapped){
      //console.log(swapped);
      gap = nextGap(gap);
      //console.log(gap);
      swapped = false
      //console.log(swapped);

      for (let j = 0; j < values.length -gap; j++) {
        let a = values[j];
        let b = values[j + gap];
        if (a > b) {
          
          swap(values, j, j + gap);  
        }
      }
      
    } 
      i++;
     
      
    }else {
       console.log("finished");
       noLoop();
     }
    

  for (let i = 0; i < values.length; i++) {
    stroke(255,0,0);
    strokeWeight(6);
    line(i, height, i, height - values[i]);
    //line();
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  
}