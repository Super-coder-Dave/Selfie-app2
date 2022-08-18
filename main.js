camera = document.getElementById("Webcam");
Webcam.set({
    width: 350,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 100,
})

var speechRecognition = window.webkitSpeechRecognition;

var Recognition = new speechRecognition();             

function Start(){
    document.getElementById("TextArea").value = "";
    Recognition.start();
}

Recognition.onresult = function (event) {
    console.log(event);

    var content = event.results[0][0].transcript;

       document.getElementById("TextArea").value = content;

       if(content == "take my selfie"){
           speak();
       }
}
function speak(){
    Webcam.attach(camera);

    synth = window.speechSynthesis

    speedData = "taking in 5 seconds"

    utterThis = new SpeechSynthesisUtterance(speedData);

    synth.speak(utterThis)
}

function take_snapshot()
{
    console.log(img_id);
    
    Webcam.snap(function(data_uri) {
        if(img_id=="selfie1"){
        document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
        }
    });
}