let sectionDistance=$('.header-caption').offset().top;
$(window).scroll(function(){

    let scrollDistance=$(window).scrollTop();
    if(scrollDistance> sectionDistance)
    {
        $("#btnUp").fadeIn(500);
    }
    else{
        $("#btnUp").fadeOut(500);
    }

});

$('#btnUp').click(function(){

    $("html,body").animate( { scrollTop:'0' } ,1000);
    
});

$(".nav-link").click(function(){
    let src=$(this).attr('href');
    let distanceOfSection=$(src).offset().top;
    $("html,body").animate({ scrollTop:distanceOfSection } ,1500)
});

$('#all').click(function(){
    $('.webDesign').show(500);
    $('.branding').show(500);
    $('.graphic').show(500);
});

$('#graphic').click(function(){
    
    $('.webDesign').hide(500);
    $('.branding').hide(500);
    $('.graphic').show(500);
});
$('#webDesign').click(function(){
    $('.branding').hide(500);
    $('.graphic').hide(500);
    $('.webDesign').show(500);
});
$('#branding').click(function(){
    
    $('.graphic').hide(500);
    $('.webDesign').hide(500);
    $('.branding').show(500);
});

var teamMembers=document.getElementById("teamMembers");
var completeProjects=document.getElementById("completeProjects");
var filesDownload=document.getElementById("filesDownload");
var linesOfCode=document.getElementById("linesOfCode");

var teamMembersNumber = Math.round(Math.random()*1000);
var completeProjectsNumber = Math.round(Math.random()*1000);
var filesDownloadNumber = Math.round(Math.random()*1000);
var linesOfCodeNumber = Math.round(Math.random()*1000);

function countUp(){
    if(teamMembers.innerHTML<=teamMembersNumber)
        teamMembers.innerHTML= Number(teamMembers.innerHTML) + 1;

    if(completeProjects.innerHTML<=completeProjectsNumber)
        completeProjects.innerHTML= Number(completeProjects.innerHTML) + 1;

    if(filesDownload.innerHTML<=filesDownloadNumber)
        filesDownload.innerHTML= Number(filesDownload.innerHTML) + 1;

    if(linesOfCode.innerHTML<=linesOfCodeNumber)
        linesOfCode.innerHTML= Number(linesOfCode.innerHTML) + 1;
    
    if(linesOfCode.innerHTML==linesOfCodeNumber &&filesDownload.innerHTML==filesDownloadNumber &&
         completeProjects.innerHTML==completeProjectsNumber && teamMembers.innerHTML==teamMembersNumber)
        run(2);
}

   
function run(num)
{
    if(num==1)
    setInterval(countUp,75);
}

$(window).scroll(function() {

    var oTop = $('#linesOfCode').offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
        run(1);
    }
});

var smallDot=document.getElementById('smallDot');
var bigDot=document.getElementById('bigDot');
var one=document.getElementById('one');
var two=document.getElementById('two');


smallDot.addEventListener('click',function(){
    one.classList.remove('right');
    one.classList.remove('left');
    two.classList.remove('right');
    two.classList.remove('left');


    one.classList.add('right');
    two.classList.remove('left');
});

bigDot.addEventListener('click',function(){
    one.classList.remove('right');
    one.classList.remove('left');
    two.classList.remove('right');
    two.classList.remove('left');

    two.classList.add('right');
    one.classList.remove('left');
   
});