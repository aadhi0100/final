const predictions = {
  1: ["Your dreams are waiting. Take the first step today!", "✨ A new opportunity will knock soon."],
  2: ["Happiness surrounds you. Keep spreading your light.", "🌟 Your calm energy brings balance."],
  3: ["You are stronger than you think.", "💖 A kind heart is your superpower."],
  4: ["Patience will reward you. Trust the timing.", "🌼 Good news is growing like flowers!"],
  5: ["You bring joy wherever you go.", "🍀 A lucky twist is on your way!"],
  6: ["You are a healer. Your love helps others.", "✨ Magic blooms from your smile."],
  7: ["Wisdom walks with you. You see beyond the surface.", "🔮 Someone needs your insight."],
  8: ["You’re born to lead and uplift others.", "🏆 You attract success with your actions."],
  9: ["Your soul shines with compassion.", "🌈 A colorful journey starts soon."],
  10:["Today is a magical chapter. Believe!", "💫 You were made to shine brightly."]
};

function revealPrediction() {
  const num = parseInt(document.getElementById('userNumber').value);
  const resultDiv = document.getElementById('result');
  const chime = document.getElementById('chime');

  if (num >= 1 && num <= 10) {
    const [fortune, message] = predictions[num];
    resultDiv.innerHTML = `<strong>📜 ${fortune}</strong><br><br><em>💖 ${message}</em>`;
    chime.currentTime = 0;
    chime.play();

    const speech = new SpeechSynthesisUtterance(`${fortune}. ${message}`);
    speech.pitch = 1.6;
    speech.rate = 0.9;
    speech.lang = 'en-US';

    const voices = window.speechSynthesis.getVoices();
    const sweetVoice = voices.find(v =>
      v.name.includes("Google UK English Female") ||
      v.name.toLowerCase().includes("female") ||
      v.name.toLowerCase().includes("samantha")
    );

    if (sweetVoice) {
      speech.voice = sweetVoice;
    }

    window.speechSynthesis.speak(speech);
  } else {
    resultDiv.innerHTML = "❗ Please choose a number between 1 and 10.";
  }
}
