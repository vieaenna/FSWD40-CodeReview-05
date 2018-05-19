var Peeps = [
                       {
			name: 'John',
			surname: 'Doe',
			favoritePerformers: ["Prinz Pi", "Chakuza", "Casper"],
			age: 25,
   			myPhoto: "img/men1.jpg",	
			likes: 0    // numeric property used to store likes
			},

			{
			name: 'Jake',
			surname: 'Deer',
			favoritePerformers: ["Eminem", "50 Cent", "Tupac"],
			age: 28,
   			myPhoto: "img/men2.jpg",	
			likes: 0 	
			}

			{
			name: 'Markus',
			surname: 'Wood',
			favoritePerformers: ["Justin Bieber", "Imagine Dragons", "Chainsmokers"],
			age: 23,
   			myPhoto: "img/men3.jpg",	
			likes: 0 
			}

			{
			name: 'Steve',
			surname: 'Thomason',
			favoritePerformers: ["Mumford and Sons", "Joseph Arthur", "Oasis"],
			age: 26,
   			myPhoto: "img/men4.jpg",	
			likes: 0 
			}

			{
			name: 'Anna',
			surname: 'Montana',
			favoritePerformers: ["Mighty Oaks", "Death Cab for Cutie", "Sam Smith"],
			age: 25,
   			myPhoto: "img/woman1.jpg",	
			likes: 0 
			}

			{
			name: 'Isa',
			surname: 'Bell',
			favoritePerformers: ["Michael Jackson", "Frank Sinatra", "Marilyn Monroe"],
			age: 20,
   			myPhoto: "img/woman2.jpg",	
			likes: 0 
			}

			{
			name: 'Diana',
			surname: 'Horan',
			favoritePerformers: ["One Direction", "Miley Cyrus", "Justin Bieber"],
			age: 23,
   			myPhoto: "img/woman3.jpg",	
			likes: 0 
			}

			{
			name: 'Jules',
			surname: 'Mayer',
			favoritePerformers: ["John Mayer", "James Arthur", "Gavin James"],
			age: 27,
   			myPhoto: "img/woman4.jpg",	
			likes: 0 
			}

];

// Men (1-4)

//Man 1

document.getElementById("picMan1").src= Peeps[0].myPhoto;
document.getElementById("nameMan1").innerHTML = Peeps[0].name;
document.getElementById("surnameMan1").innerHTML = Peeps[0].surname;
document.getElementById("ageMan1").innerHTML = Peeps[0].age;
document.getElementById("performerMan1").innerHTML = Peeps[0].favoritePerformers;

//Man 2

document.getElementById("picMan2").src= Peeps[0].myPhoto;
document.getElementById("nameMan2").innerHTML = Peeps[0].name;
document.getElementById("surnameMan2").innerHTML = Peeps[0].surname;
document.getElementById("ageMan2").innerHTML = Peeps[0].age;
document.getElementById("performerMan2").innerHTML = Peeps[0].favoritePerformers;

//Man 3

document.getElementById("picMan3").src= Peeps[0].myPhoto;
document.getElementById("nameMan3").innerHTML = Peeps[0].name;
document.getElementById("surnameMan3").innerHTML = Peeps[0].surname;
document.getElementById("ageMan3").innerHTML = Peeps[0].age;
document.getElementById("performerMan3").innerHTML = Peeps[0].favoritePerformers;

//Man 4

document.getElementById("picMan4").src= Peeps[0].myPhoto;
document.getElementById("nameMan4").innerHTML = Peeps[0].name;
document.getElementById("surnameMan4").innerHTML = Peeps[0].surname;
document.getElementById("ageMan4").innerHTML = Peeps[0].age;
document.getElementById("performerMan4").innerHTML = Peeps[0].favoritePerformers;

// Women (1-4)

// Woman 1

document.getElementById("picWoman1").src= Peeps[0].myPhoto;
document.getElementById("nameWoman1").innerHTML = Peeps[0].name;
document.getElementById("surnameWoman1").innerHTML = Peeps[0].surname;
document.getElementById("ageWoman1").innerHTML = Peeps[0].age;
document.getElementById("performerWoman1").innerHTML = Peeps[0].favoritePerformers;

// Woman 2

document.getElementById("picWoman2").src= Peeps[0].myPhoto;
document.getElementById("nameWoman2").innerHTML = Peeps[0].name;
document.getElementById("surnameWoman2").innerHTML = Peeps[0].surname;
document.getElementById("ageWoman2").innerHTML = Peeps[0].age;
document.getElementById("performerWoman2").innerHTML = Peeps[0].favoritePerformers;

// Woman 3

document.getElementById("picWoman3").src= Peeps[0].myPhoto;
document.getElementById("nameWoman3").innerHTML = Peeps[0].name;
document.getElementById("surnameWoman3").innerHTML = Peeps[0].surname;
document.getElementById("ageWoman3").innerHTML = Peeps[0].age;
document.getElementById("performerWoman3").innerHTML = Peeps[0].favoritePerformers;

// Woman 4

document.getElementById("picWoman4").src= Peeps[0].myPhoto;
document.getElementById("nameWoman4").innerHTML = Peeps[0].name;
document.getElementById("surnameWoman4").innerHTML = Peeps[0].surname;
document.getElementById("ageWoman4").innerHTML = Peeps[0].age;
document.getElementById("performerWoman4").innerHTML = Peeps[0].favoritePerformers;

// Like Function

function like(a) {
    a = parseInt(a); 
    Peeps[a].likes = Peeps[a].likes +1;
    var y = document.getElementsByClassName('likes');
    y[0].innerHTML = Peeps[a].likes;
    //console.log(Peeps[a].likes); 
}


function {
	for (var i = 0; i < Peeps.length -1; i++) {
		var a = document.getElementsByClassName("name");
		a[i].innerHTML = Peeps[i].name; 
	}
}