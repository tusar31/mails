var logo=document.getElementById("logo");

logo.addEventListener("click",()=>{
    location.href="\index.html";
});

var whitebtn=document.getElementById("whitebtn");

whitebtn.addEventListener("click",()=>{
    location.href="\login.html";
});

var greenbtn=document.getElementById("greenbtn");

greenbtn.addEventListener("click",()=>{
    location.href="\emailsignup.html";
});

var greenbodybtn=document.getElementById("greenbodybtn");

greenbodybtn.addEventListener("click",()=>{
    location.href="\emailsignup.html";
});

var greenbodybtn2=document.getElementById("greenbodybtn2");

greenbodybtn2.addEventListener("click",()=>{
    location.href="\emailsignup.html";
});

var greenbodybtnclick=document.getElementById("greenbodybtnclick");

greenbodybtnclick.addEventListener("click",()=>{
    location.href="\emailsignup.html";
});

var clientCard1=document.getElementById("clientCard1");
var clientCard2=document.getElementById("clientCard2");
var leftbtn=document.getElementById("leftbtn");
var rightbtn=document.getElementById("rightbtn");

var comments=[
    {
        h3:"Rado Georgiev",
        a:"@Rado_g",
        href:"https://twitter.com/Rado_g",
        p1:"One thing we started using recently is @Mailtrap for our dev & staging environments. We were previously either turning email sending entirely off for staging or running SES + whitelist. Turns out, having a fake SMTP mailbox is great and you can test better with it.",
        p2:"1:32 PM – Jan 06, 2021"
    },
    {
        h3:"Doug Black Jr",
        a:"@dougblackjr",
        href:"https://twitter.com/dougblackjr",
        p1:"Can we all agree @Mailspatch is a gift to developers everywhere? It just works SO easily out of the box!!!!",
        p2:"9:45 PM – Aug 11, 2020"
    },
    {
        h3:"Joshua Anderton",
        a:"@joshuaanderton",
        href:"https://twitter.com/joshuaanderton",
        p1:"Just signed up for @Mailspatch and I’m loving it. So easy to set up. Provides so much peace of mind. Ahh just love it.",
        p2:"7:38 PM – Jan 13, 2021"
    },
    {
        h3:"DeveloperMitch",
        a:"@mitchellfinlay",
        href:"https://twitter.com/mitchellfinlay",
        p1:"After all these years of web development, how have I only JUST started using @Mailtrap. I had heard about it, but never got round to using it. An awesome way of testing emails.",
        p2:"1:25 PM – Nov 07, 2020"
    },
    {
        h3:"Alessandro Rodi",
        a:"@coorasse",
        href:"https://twitter.com/coorasse",
        p1:"I love @Mailtrap. It removes all the asshole of configuring email servers in test environments. Great service! Is totally worth your money!",
        p2:"1:15 PM – Oct 20, 2020"
    }
    ,
    {
        h3:"Mr. Glass",
        a:"@MisterGlass",
        href:"https://twitter.com/MisterGlass",
        p1:"Shout out to @Mailtrap, hands down the best way to handle mail sending in local/test environments.",
        p2:"11:43 PM – May 21, 2020"
    }
];

var box=0;

rightbtn.addEventListener("click",(e)=>{
    e.preventDefault();

    clientCard1.innerHTML=null;
    
    var img=document.createElement("img");
    img.setAttribute("src","https://i.ibb.co/CHkG7RG/bird.jpg");
    img.setAttribute("alt","icon");

    var h3=document.createElement("h3");
    h3.innerText=comments[box].h3;

    var a=document.createElement("a");
    a.setAttribute("id","inline");
    a.innerText=comments[box].a;
    a.setAttribute("href",comments[box].href);

    var p1=document.createElement("p");
    p1.innerText=comments[box].p1;
    
    var p2=document.createElement("p");
    p2.innerText=comments[box].p2;

    clientCard1.append(img,h3,a,p1,p2);

    if(box==5)
    box=-1;

    box++;
    clientCard2.innerHTML=null;
    
    var img=document.createElement("img");
    img.setAttribute("src","https://i.ibb.co/CHkG7RG/bird.jpg");
    img.setAttribute("alt","icon");

    var h3=document.createElement("h3");
    h3.innerText=comments[box].h3;

    var a=document.createElement("a");
    a.setAttribute("id","inline");
    a.innerText=comments[box].a;
    a.setAttribute("href",comments[box].href);

    var p1=document.createElement("p");
    p1.innerText=comments[box].p1;
    
    var p2=document.createElement("p");
    p2.innerText=comments[box].p2;

    clientCard2.append(img,h3,a,p1,p2);
});

var box=5;

leftbtn.addEventListener("click",(e)=>{
    e.preventDefault();

    clientCard1.innerHTML=null;
    
    var img=document.createElement("img");
    img.setAttribute("src","https://i.ibb.co/CHkG7RG/bird.jpg");
    img.setAttribute("alt","icon");

    var h3=document.createElement("h3");
    h3.innerText=comments[box].h3;

    var a=document.createElement("a");
    a.setAttribute("id","inline");
    a.innerText=comments[box].a;
    a.setAttribute("href",comments[box].href);

    var p1=document.createElement("p");
    p1.innerText=comments[box].p1;
    
    var p2=document.createElement("p");
    p2.innerText=comments[box].p2;

    clientCard1.append(img,h3,a,p1,p2);

    if(box==0)
    box=6;

    box--;
    clientCard2.innerHTML=null;
    
    var img=document.createElement("img");
    img.setAttribute("src","https://i.ibb.co/CHkG7RG/bird.jpg");
    img.setAttribute("alt","icon");

    var h3=document.createElement("h3");
    h3.innerText=comments[box].h3;

    var a=document.createElement("a");
    a.setAttribute("id","inline");
    a.innerText=comments[box].a;
    a.setAttribute("href",comments[box].href);

    var p1=document.createElement("p");
    p1.innerText=comments[box].p1;
    
    var p2=document.createElement("p");
    p2.innerText=comments[box].p2;

    clientCard2.append(img,h3,a,p1,p2);
    
});

// (max-width:750px)

var images=["https://mailtrap.io/wp-content/uploads/2021/03/img__dev.svg","https://mailtrap.io/wp-content/uploads/2021/03/img__qas.svg","https://mailtrap.io/wp-content/uploads/2021/03/img__marketers.svg"];

function myFunction(x) {
    // var picturediv=document.getElementById("picturediv");
    var pictureImage=document.getElementById("pictureImage");
    var interval;
    if (x.matches) 
    { 
    //   document.body.style.backgroundColor = "yellow";
        // picturediv.innerHTML=null;
        
        // pictureImage=document.createElement("img");
        var pic=0;
        var interval=setInterval(()=>{
            pictureImage.setAttribute("src",images[pic]);
            pic++;
            if(pic==3)
            {
                pic=0;
                clearInterval(interval);
                pictureImage.setAttribute("src","https://mailtrap.io/wp-content/uploads/2021/03/img_team.svg");
            }
        },1000);
    } else {
    //  document.body.style.backgroundColor = "#f4eaea";
        
    // setInterval(()=>{
        pictureImage.setAttribute("src","https://mailtrap.io/wp-content/uploads/2021/03/img_team.svg");
    // },1000);
    }
  }
  
  var x = window.matchMedia("(max-width:750px)");
  myFunction(x);
  x.addListener(myFunction);
  