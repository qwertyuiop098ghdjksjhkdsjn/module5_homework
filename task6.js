let arr=[1,2,3,4,5]; 
let g=1; 
for (let i=0; i<arr.length; i++){ 
  if (arr[0] != arr[i]) { 
    g=0; 
    break; 
  }
} 
if (g==1) { 
  console.log(true); 
} else { 
  console.log(false); 
}