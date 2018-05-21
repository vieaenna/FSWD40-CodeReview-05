var Persons = [{
        name: 'John',
        surname: 'Doe',
        favoritePerformers: ["Prinz Pi", "Chakuza", "Casper"],
        age: 25,
        myPhoto: "img/men1.jpg",
        likes: 0 // numeric property used to store likes
    },

    {
        name: 'Jake',
        surname: 'Deer',
        favoritePerformers: ["Eminem", "50 Cent", "Tupac"],
        age: 28,
        myPhoto: "img/men2.jpg",
        likes: 0
    },

    {
        name: 'Markus',
        surname: 'Wood',
        favoritePerformers: ["Justin Bieber", "Imagine Dragons", "Chainsmokers"],
        age: 23,
        myPhoto: "img/men3.jpg",
        likes: 0
    },

    {
        name: 'Steve',
        surname: 'Thomason',
        favoritePerformers: ["Mumford and Sons", "Joseph Arthur", "Oasis"],
        age: 26,
        myPhoto: "img/men4.jpg",
        likes: 0
    },

    {
        name: 'Anna',
        surname: 'Montana',
        favoritePerformers: ["Mighty Oaks", "Death Cab for Cutie", "Sam Smith"],
        age: 25,
        myPhoto: "img/woman1.jpg",
        likes: 0
    },

    {
        name: 'Isa',
        surname: 'Bell',
        favoritePerformers: ["Michael Jackson", "Frank Sinatra", "Marilyn Monroe"],
        age: 20,
        myPhoto: "img/woman2.jpg",
        likes: 0
    },

    {
        name: 'Diana',
        surname: 'Horan',
        favoritePerformers: ["One Direction", "Miley Cyrus", "Justin Bieber"],
        age: 23,
        myPhoto: "img/woman3.jpg",
        likes: 0
    },

    {
        name: 'Jules',
        surname: 'Mayer',
        favoritePerformers: ["John Mayer", "James Arthur", "Gavin James"],
        age: 27,
        myPhoto: "img/woman4.jpg",
        likes: 0
    }

];

// Redundant Solution for filling HTML 

// Men (1-4)

//Man 1

document.getElementById("picMan1").src = Persons[0].myPhoto;
document.getElementById("nameMan1").innerHTML = Persons[0].name;
document.getElementById("surnameMan1").innerHTML = Persons[0].surname;
document.getElementById("ageMan1").innerHTML = Persons[0].age;
document.getElementById("performerMan1").innerHTML = Persons[0].favoritePerformers;

//Man 2

document.getElementById("picMan2").src = Persons[1].myPhoto;
document.getElementById("nameMan2").innerHTML = Persons[1].name;
document.getElementById("surnameMan2").innerHTML = Persons[1].surname;
document.getElementById("ageMan2").innerHTML = Persons[1].age;
document.getElementById("performerMan2").innerHTML = Persons[1].favoritePerformers;

//Man 3

document.getElementById("picMan3").src = Persons[2].myPhoto;
document.getElementById("nameMan3").innerHTML = Persons[2].name;
document.getElementById("surnameMan3").innerHTML = Persons[2].surname;
document.getElementById("ageMan3").innerHTML = Persons[2].age;
document.getElementById("performerMan3").innerHTML = Persons[2].favoritePerformers;

//Man 4

document.getElementById("picMan4").src = Persons[3].myPhoto;
document.getElementById("nameMan4").innerHTML = Persons[3].name;
document.getElementById("surnameMan4").innerHTML = Persons[3].surname;
document.getElementById("ageMan4").innerHTML = Persons[3].age;
document.getElementById("performerMan4").innerHTML = Persons[3].favoritePerformers;

// Women (1-4)

// Woman 1

document.getElementById("picWoman1").src = Persons[4].myPhoto;
document.getElementById("nameWoman1").innerHTML = Persons[4].name;
document.getElementById("surnameWoman1").innerHTML = Persons[4].surname;
document.getElementById("ageWoman1").innerHTML = Persons[4].age;
document.getElementById("performerWoman1").innerHTML = Persons[4].favoritePerformers;

// Woman 2

document.getElementById("picWoman2").src = Persons[5].myPhoto;
document.getElementById("nameWoman2").innerHTML = Persons[5].name;
document.getElementById("surnameWoman2").innerHTML = Persons[5].surname;
document.getElementById("ageWoman2").innerHTML = Persons[5].age;
document.getElementById("performerWoman2").innerHTML = Persons[5].favoritePerformers;

// Woman 3

document.getElementById("picWoman3").src = Persons[6].myPhoto;
document.getElementById("nameWoman3").innerHTML = Persons[6].name;
document.getElementById("surnameWoman3").innerHTML = Persons[6].surname;
document.getElementById("ageWoman3").innerHTML = Persons[6].age;
document.getElementById("performerWoman3").innerHTML = Persons[6].favoritePerformers;

// Woman 4

document.getElementById("picWoman4").src = Persons[7].myPhoto;
document.getElementById("nameWoman4").innerHTML = Persons[7].name;
document.getElementById("surnameWoman4").innerHTML = Persons[7].surname;
document.getElementById("ageWoman4").innerHTML = Persons[7].age;
document.getElementById("performerWoman4").innerHTML = Persons[7].favoritePerformers;

// Like Function: Use ClassName instead of ID to simplify - works yay

function like(a) {
    var b = 0;
    b = parseInt(a);
    Persons[b].likes = Persons[b].likes + 1;
    var y = document.getElementsByClassName('likes');
    y[b].innerHTML = Persons[b].likes;
}


// Trying To Not Be Redundant with Filling in 
/*
function autofill(a) {
    for (var i = 0; i < Persons.length - 1; i++) {
        var a = document.getElementsByClassName("name");
        a[i].innerHTML = Persons[i].name;
    } 

} */ 