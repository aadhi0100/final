const predictions = {
  1: ["You have the power to achieve anything you believe in.", "Today is your lucky day to start something new!"],
  2: ["Every step you take brings you closer to your dreams.", "Smile — good energy follows you!"],
  3: ["You are more capable than you know. Trust yourself.", "A surprise is coming your way soon."],
  4: ["Hard work always pays off — keep going!", "Your patience is your secret strength."],
  5: ["You are a source of light to others.", "Believe in your uniqueness."],
  6: ["Kindness brings magic — and you're full of it.", "Stay positive, good things are around the corner."],
  7: ["You are destined for greatness.", "Keep learning, keep growing."],
  8: ["Your confidence can change your world.", "Good luck follows your energy."],
  9: ["You inspire people even when you don't know it.", "Stay true to your heart."],
  10:["Today, something amazing is waiting for you!", "Be bold. You’re meant to shine."]
};

function revealPrediction() {
  const num = parseInt(document.getElementById('userNumber').value);
  const resultDiv = document.getElementById('result');
  const chime = document.getElementById('chime');

  if (num >= 1 && num <= 10) {
    const [fortune, luck] = predictions[num];

    resultDiv.innerHTML = `<strong>📜 "${fortune}"</strong><br><br><em>🍀 ${luck}</em>`;

    chime.currentTime = 0;
    chime.play();

    const speak = new SpeechSynthesisUtterance(`${fortune}. ${luck}`);
    speak.pitch = 1.4;
    speak.rate = 0.95;

    const sweetVoice = speechSynthesis.getVoices().find(v =>
      v.name.includes("Google UK English Female") ||
      v.name.includes("Google US English") ||
      v.name.toLowerCase().includes("female") ||
      v.name.toLowerCase().includes("sweet") ||
      v.lang === "en-US"
    );

    if (sweetVoice) {
      speak.voice = sweetVoice;
    }

    speechSynthesis.speak(speak);
  } else {
    resultDiv.innerHTML = "❗ Please enter a number between 1 and 10.";
  }
}
