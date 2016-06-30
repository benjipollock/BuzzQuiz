/**
 * Created by itc_user on 6/19/2016.
 */
var resultFunction = function() {

    var count = 0;
    
    var superbowl=document.getElementsByName("superbowl");
    for (var i=0; i < superbowl.length; i++){
        if (superbowl[i].value === "6"){
            count += 1;
        }
    }
    
    
    var cup=document.getElementsByName("cup");
    for (var j=0; j < cup.length; j++){
        if (cup[j].checked){
            count += parseFloat(cup[j].value);
        }

    }


    var cathy=document.getElementsByName("cathy");
    for (var k=0; k < cathy.length; k++){
        if (cathy[k].checked){
            count += parseInt(cathy[k].value);
        }
    }


    var nickname=document.getElementById("nickname");
    if (nickname.value === "The Steel City")
    {
        count += 1;
    }

    var pics=document.getElementsByName("pics");
    for (var l=0; l < pics.length; l++){
        if (pics[l].checked){
            count += parseInt(pics[l].value);
        }
    }


    var result = document.getElementsByClassName('result')[0];
    if (count === 6)
    {
        result.style.display = 'block';
        location.href="#result";
        result.innerHTML = "You're a local!!";
    }
    else if (count < 6 && count>=4)
    {
        result.style.display = 'block';
        location.href="#result";
        result.innerHTML = "Did you just come here for the schools?";
    }
    else if (count < 4 && count >= 2)
    {
        result.style.display = 'block';
        location.href="#result";
        result.innerHTML = "You probably have friends in Pittsburgh";
    }
    else if (count < 2 && count >= 0)
    {
        result.style.display = 'block';
        location.href="#result";
        result.innerHTML = "You have no connection to Pittsburgh. Go visit!";

    }
    
};