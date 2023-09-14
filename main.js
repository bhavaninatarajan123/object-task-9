let users=[{ name: 'John', age: 25, occupation: 'gardener' },
           { name: 'Lenny', age: 51, occupation: 'programmer' },
           { name: 'Andrew', age: 43, occupation: 'teacher' },
           { name: 'Peter', age: 81, occupation: 'teacher' },
           { name: 'Anna', age: 47, occupation: 'programmer' },
           { name: 'Albert', age: 76, occupation: 'programmer' },
];
var a=users.filter(function(e,d){
    if(e.occupation=="programmer"){
        var c= `${e.name}+${e.age}+${e.occupation}`
    }
    return c
})  
document.write(JSON.stringify(a));
              
