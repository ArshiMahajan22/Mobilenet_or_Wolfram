console.log('ML5 Version', ml5.version);

classifier = ml5.imageClassifier('MobileNet', modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}

function Identify(){
    Img = document.getElementById("Img1");
    classifier.classify(Img, Result);
}

function Result(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("Mobilenet").innerHTML = results[0].label;
        document.getElementById("Guess1").innerHTML = "Both are wrong but it does look more of a Sunglass then a Rugby ball";
    }
}

console.log('ML5 Version', ml5.version);

classifier = ml5.imageClassifier('MobileNet', modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}

function Identify1(){
    Img = document.getElementById("Img2");
    classifier.classify(Img, Result1);
}

function Result1(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("Mobilenet1").innerHTML = results[0].label;
        document.getElementById("Guess2").innerHTML = "Wolfram is more Accurate";
    }
}

console.log('ML5 Version', ml5.version);

classifier = ml5.imageClassifier('MobileNet', modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}

function Identify2(){
    Img = document.getElementById("Img3");
    classifier.classify(Img, Result2);
}

function Result2(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("Mobilenet2").innerHTML = results[0].label;
        document.getElementById("Guess3").innerHTML = "Mobilenet is more Accurate";
    }
}