let start = 1; 
let result = []; 
while(start<=100) { 
result.push(start++) 
}; 

let misskiss =() => { 
for (var i = 0; i < result.length; i++) { 
if (result[i] % 5==0 && result[i] % 3==0) { 
result[i]='misskiss'; 
} 
} 
console.log (result); 
}; 
setTimeout(misskiss, 50); 

let miss = () => { 
for (let i = 0; i < result.length; i++) { 
if (result[i] % 3 == 0) { 
result[i]='miss'; 
} 
} 
console.log(result); 
}; 
setTimeout(miss, 50); 


let kiss =() => { 
for (let i = 0; i < result.length; i++) { 
if (result[i] % 5 == 0) { 
result[i]='kiss'; 
} 
} 
console.log(result); 
}; 
setTimeout(kiss, 50); 