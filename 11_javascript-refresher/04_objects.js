const aboutMe = {
    name: "Jeremy",
    age:20,
    course: "BSIS"
}
//-------------------------------------------- 

function introduce(about){
    console.log(`Hi, my name is ${about.name} and I am ${about.age} years old.` );
}
//-------------------------------------------- 

aboutMe.hobby = "kumain";
introduce(aboutMe);