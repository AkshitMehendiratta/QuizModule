var score=0;
var j=0;
var questions=[
    {
        title:"A complete graph can have?",
        options:["n2 spanning trees","nn-2 spanning trees","nn-3 spanning trees","nn-4 spanning trees"],
        correct:"nn-2 spanning trees",
        score:0
    },
        {
        title:"What is the full form css?",
        options:["Cascading Style Sheets","Cascadeless Styling Sheet","Common Styling Sheet","None of These"],
        correct:"Cascading Style Sheets",
        score:0
    },
        {
         title:"How to include javascript to HTML documents?",
         options:["input","link","script","None of These"],
         correct:"script",
         score:0
    },
        {
         title:"How to declare variable in javascript?",
         options:["int","var","char","All of the above"],
         correct:"var",
         score:0
    },
        {
       title:"What => means in javascript?",
       options:["Arrow Function","implies","Equal to","Invalid"],
       correct:"Arrow Function",
       score:0
    },
        {
         title:"Which of these is not javascript framework?",
         options:["Angular js","Angular","bootstrap","Django"],
         correct:"Django",
         score:0
    },
        {
        title:"How do you define objects in js?",
        options:["{}","[]","none","()"],
        correct:"{}",
        score:0
    },
        {
         title:"_ Javascript is also called cleint-side javascript?",
        options:["Microsoft","Navigator","LiveWire","Nativ"],
        correct:"Navigator",
        score:0
    },
        {
          title:"What is the output of '2'+2?",
          options:["22","5","'4'"," None of these"],
          correct:"22",
          score:0
    },
        {
        title:"What is the output of '2'-1?",
        options:["1","'1'","3","None of these"],
        correct:"3",
        score:0
    },

]
function result(){
    document.getElementByClassName("heading").innerHTML="score:"+score;
}
function display()
{
    var t=document.getElementById("result");
    t.style.display="none";
    document.getElementById("ques").innerHTML=questions[j].title;
    document.getElementById("button").innerHTML="<button class='btn btn-warning' style='color:black' onclick='abc()'>Submit</button>"
   
 for(var i=0;i<4;i++)
 {
   
    document.getElementById("opt1").innerHTML="<input type='radio' id='id1' name='ques' value="+questions[j].options[0]+"><span>"+questions[j].options[0]+"</span>";
    document.getElementById("opt2").innerHTML="<input type='radio' id='id2' name='ques' value="+questions[j].options[1]+"><span>"+questions[j].options[1]+"</span>";
    document.getElementById("opt3").innerHTML="<input type='radio' id='id3' name='ques' value="+questions[j].options[2]+"><span>"+questions[j].options[2]+"</span>";
    document.getElementById("opt4").innerHTML="<input type='radio' id='id4' name='ques' value="+questions[j].options[3]+"><span>"+questions[j].options[3]+"</span>";

  //  document.getElementById("opt").innerHTML="<br>"; 
  
  

 }
 
 
    
}
function abc()
{
 if(document.getElementById("id1").checked||  document.getElementById("id2").checked ||   document.getElementById("id3").checked ||   document.getElementById("id4").checked)
   
    {
        console.log( document.getElementById("id2").checked);
        document.getElementById("button").innerHTML="<button class='btn btn-success' onclick=display() style='color:white'>Next</button>";
    }
    else{
        alert("Please select an option");
    }

  //  document.getElementById("opt").innerHTML="<br>"; 
  var ele=document.getElementsByName("ques");
     for(var i=0;i<ele.length;i++){
         if(ele[i].checked)
         {
             var result=ele[i].value;
             console.log(ele[i].value);
             console.log(questions[j].options[i]);
             if(questions[j].options[i]==questions[j].correct)
             {
                document.getElementById("result").innerHTML="<p id='cc' style='background-color: #BFECCE; color: green;height:47px;width:123px;padding:9px;padding-left:21px;font-weight:bold;'>Correct</p>"
                var t=document.getElementById("result");
                t.style.display="block";
                score++;
             }
             else{
                document.getElementById("result").innerHTML="<p id='cc' style='background-color: #FCD3D3; color: maroon;height:47px;width:123px;padding:9px;padding-left:21px;font-weight:bold;'>Incorrect</p>"
                var t=document.getElementById("result");
                t.style.display="block";
             }
         }
     }
  j++;
  console.log(j);
  if(j==questions.length)
  {
    if(document.getElementById("id1").checked||  document.getElementById("id2").checked ||   document.getElementById("id3").checked ||   document.getElementById("id4").checked){

    document.getElementById("button").innerHTML="<button class='btn btn-primary' onclick='finish()' style='color:white'>Finish</button>";
    }

  }
  
  
  
}
function finish()
{
  console.log("inside finsih");
  
        document.getElementById("heading1").innerHTML="Score: "+score;
        var b="<ul>";
           for(var i=0;i<questions.length;i++){
           b=b+"<li>"+questions[i].title+" - <span class='badge badge-success'>"+questions[i].correct+"</span></li>";
       }
       b=b+"</ul>";
       
       document.getElementById('a').innerHTML=" ";
       document.getElementById('res').innerHTML="Answer key";
      
       document.getElementById("and").innerHTML=b;
       document.getElementById("bt").innerHTML="<button class='btn'  onclick=restart() style='background-color:#33cccc;color:white'>Restart</button>";
     
}
function restart()
{
    j=0;
    location.reload();
}

display();