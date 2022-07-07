function identify()
{
    navigator.mediaDevices.getUserMedia({ audio: true, video:false});
     //classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', { probabilityThreshold: 0.7 } ,model_loded);
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Z9s5EZM0w/model.json',model_loded);
}

function model_loded()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
       console.log(results); 
       document.getElementById("animal").innerHTML = results[0].label;
       document.getElementById("percentage").innerHTML = (results[0].confidence*100).toFixed(2) + "%";

       img = document.getElementById("animal_pic");
       

       if (results[0].label =="dog")
       {
           img.src="dog.png";
       }

       if (results[0].label =="cat")
       {
        img.src="cat.jpg";
       }

       if (results[0].label =="lion")
       {
        img.src="lion.jpg";
       }
       
       if (results[0].label =="elephant")
       {
        img.src="elephant.jpg";
       }
    }
}
