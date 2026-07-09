const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    alert("Messange sent successfully!");

});


function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // គណនាមុំរង្វិលជុំ (ដឺក្រេ) នៃទ្រនិចនីមួយៗ
    const secDeg = (seconds / 60) * 360;
    const minDeg = ((minutes + seconds / 60) / 60) * 360;
    const hourDeg = ((hours % 12 + minutes / 60) / 12) * 360;

    // ចាប់យក Element នៃទ្រនិចតាម ID
    const secHand = document.getElementById('sec');
    const minHand = document.getElementById('min');
    const hourHand = document.getElementById('hour');

    // បញ្ជាឱ្យទ្រនិចវិលតាមមុំដែលបានគណនា
    secHand.style.transform = `rotate(${secDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

// ដំណើរការមុខងាររៀងរាល់ 100ms (0.1 វិនាទី) ម្តង
setInterval(updateClock, 100);

// ហៅឱ្យដំណើរការភ្លាមៗពេលបើកកូដដំបូង
updateClock();