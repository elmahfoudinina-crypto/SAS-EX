let text = "bonjour mes amis"
let count = 0 ;
for(let letter of text ) {
    if(letter === "a" || letter === "o" || letter === "i" || letter === "u")
        count++;
}
   console.log(count);