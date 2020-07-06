const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

//
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const greetings = ['i am good homeboy', 'not too bad', 'i am doing bad'];

const weather = ['weather is fine', 'you need a tan', 'go outside'];

const weather = ['Bartholomew', 'jacky', 'sarah', "Bindy", "ugly"];

recognition.onstart = function(){
  console.log('voice is activated, you can talk');
};

recognition.onresult = function(event){
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);

};

btn.addEventListener('click', () =>{
  recognition.start();
});


function readOutLoud(message){
  const speech = new SpeechSynthesisUtterance();

  speech.text = 'I don\'t know what you said';

  if(message.includes("how are you")){
    const finalText = greetings[Math.floor(Math.random()*(greetings.length))];
    speech.text = finalText;
  }
  if(message.includes("weather")){
    const finalText = weather[Math.floor(Math.random()*(weather.length))];
    speech.text = finalText;

  }if(message.includes("name")){
    const finalText = weather[Math.floor(Math.random()*(weather.length))];
    speech.text = finalText;

  }



  speech.volume = 1;
  speech.rate = 0.9;

  window.speechSynthesis.speak(speech);
}
