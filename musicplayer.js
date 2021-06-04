
/* //songs its a array of music */
var songs = ["englishsongs.mp3", "music/a.mp3", "music/b.mp3", "music/c.mp3", "music/d.mp3", "music/e.mp3"];
var imgsrc=["images/bk1.jpg","images/railway21.jpg","images/bon1.jpg","images/boff1.jpg","images/bk.png","images/boff1.jpg"];
var song = new Audio();
var mainimg = document.getElementById("mainimg");
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var a = document.getElementsByClassName('playpause');
/* //here used class add or remove for changing mucic play pause icon */
/* this function music play and pause */
a[0].addEventListener('click', function () {
    // a[0].classList.toggle("fa-pause-circle");
    if (a[0].classList.contains('fa-play-circle')) {
        song.play();
        a[0].classList.add('fa-pause-circle'); a[0].classList.remove('fa-play-circle')
    }

    else {
        song.pause();
        a[0].classList.remove('fa-pause-circle'); a[0].classList.add('fa-play-circle')
        
    }

});

i = 0; 
/* //i means music index */
  song.src=songs[i];
/* //event listner for next music in array */
next.addEventListener ('click', function () {

     
    if (i == 5) {
                  i = 0;   }
        else if(i==0){song.src=songs[i];i++;}
           
        else{
               i++;
             }         
                 /* //increse music by 1 this used for both if or else */
   mainimg.src=imgsrc[i];
   song.src =songs[i];
   a[0].classList.remove('fa-play-circle'); a[0].classList.add('fa-pause-circle')   //this is for if we click on next icon change play pause
   /* console.log(i);             */
    song.play();

});
/* //event listner for previous music in array */
prev.addEventListener ('click', function () {

    if (i == 0) {  i = 5;   }
    
       else if(i==5){  i--; }
    
          else{   i--;  }

       /* console.log(i);   */
       song.src=songs[i]; 
        mainimg.src=imgsrc[i];
        a[0].classList.remove('fa-play-circle'); a[0].classList.add('fa-pause-circle') //this is for if we click on next icon change play pause
        song.play();
    
});