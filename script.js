let timerInterval;
const quotes = [
    "💪 Dream big. Work hard. Achieve greatness. ✨",
    "🚀 The sky is not the limit—your mind is. 🌌",
    "💫 You are stronger than you think. 💪",
    "🌟 Believe in yourself. Take the leap. 🌟",
    "🔥 Success starts with self-belief. You've got this! 💯",
    "🌱 Grow through what you go through. 🌞",
    "🏆 Winners never quit, and quitters never win. 🏋️‍♂️",
    "💥 Every setback is a setup for a comeback. 💎",
    "🌟 Shine bright, even when the world is cloudy. ☁️",
    "🎯 Focus on the goal. Block out the noise. 🙌",
    "🕒 Your time is now. Make it count. ⏳",
    "💫 You are capable of amazing things. Believe in yourself. 💪",
    "🌈 Life is a canvas. Paint it with colors of joy. 🎨",
    "🌊 Be unstoppable, like the waves crashing on the shore.",
    "✨ Pause. Breathe. Relax. ✨",
    "🌿 Take a deep breath. 🌿",
    "🧘‍♂️ Be present in the moment. 🧘‍♂️",
    "🌸 Embrace the calm. 🌸",
    "🌞 Find your inner peace. 🌞"
];
let quoteIndex = 0;

function startTimer(minutes) {
    clearInterval(timerInterval);
    const endTime = Date.now() + minutes * 60000;
    const totalDuration = minutes * 60000;

    timerInterval = setInterval(() => {
        const remainingTime = endTime - Date.now();
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').textContent = '00:00';
            document.getElementById('progress-bar').style.width = '0%';
            alert('Time is up!');
        } else {
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
            document.getElementById('timer').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            const progress = ((totalDuration - remainingTime) / totalDuration) * 100;
            document.getElementById('progress-bar').style.width = `${progress}%`;
        }
    }, 1000);

    document.getElementById('background-music').play();
}

function startCustomTimer() {
    const customTime = document.getElementById('custom-time').value;
    if (customTime && customTime > 0) {
        startTimer(customTime);
    } else {
        alert('Please enter a valid time in minutes.');
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById('timer').textContent = '00:00';
    document.getElementById('progress-bar').style.width = '0%';
    const music = document.getElementById('background-music');
    music.pause();
    music.currentTime = 0;
}

function changeQuote() {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    document.getElementById('quote').textContent = quotes[quoteIndex];
}
setInterval(changeQuote, 2000);

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function setVolume(value) {
    document.getElementById('background-music').volume = value;
    document.getElementById('volume-percentage').textContent = `${Math.round(value * 100)}%`;
}

function changeMusic(src) {
    const music = document.getElementById('background-music');
    music.src = src;
    music.play();
}