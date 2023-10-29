function startClassification ()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/F2Bn9976K/' , modelReady);


}

function modelReady(){
    classifier.classify(gotResults);
    
}