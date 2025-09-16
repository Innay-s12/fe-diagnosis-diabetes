document.addEventListener('DOMContentLoaded', function() {
    const diagnoseBtn = document.getElementById('diagnose-btn');
    const resetBtn = document.getElementById('reset-btn');
    const questionnaire = document.getElementById('questionnaire');
    const result = document.getElementById('result');
    const resultText = document.getElementById('result-text');
    const suggestion = document.getElementById('suggestion');
    
    diagnoseBtn.addEventListener('click', function() {
        // Hitung skor berdasarkan jawaban
        let score = 0;
        
        // Ambil nilai dari setiap pertanyaan
        for (let i = 1; i <= 10; i++) {
            const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
            if (selectedOption) {
                score += parseInt(selectedOption.value);
            } else {
                alert(`Silakan jawab pertanyaan nomor ${i}`);
                return;
            }
        }
        
        // Tentukan tingkat risiko berdasarkan skor
        let riskLevel, riskClass, advice;
        
        if (score <= 7) {
            riskLevel = "Rendah";
            riskClass = "risk-low";
            advice = "Anda memiliki risiko diabetes yang rendah. Pertahankan gaya hidup sehat dengan pola makan seimbang dan olahraga teratur.";
        } else if (score <= 14) {
            riskLevel = "Sedang";
            riskClass = "risk-medium";
            advice = "Anda memiliki risiko diabetes sedang. Perhatikan pola makan, tingkatkan aktivitas fisik, dan pertimbangkan untuk melakukan pemeriksaan gula darah secara berkala.";
        } else {
            riskLevel = "Tinggi";
            riskClass = "risk-high";
            advice = "Anda memiliki risiko diabetes yang tinggi. Sangat disarankan untuk berkonsultasi dengan dokter dan melakukan pemeriksaan gula darah sesegera mungkin.";
        }
        
        // Tampilkan hasil
        resultText.innerHTML = `
            <p>Skor Anda: <strong>${score}</strong> dari 20</p>
            <p>Tingkat Risiko: <strong class="${riskClass}">${riskLevel}</strong></p>
        `;
        
        suggestion.textContent = advice;
        
        // Tampilkan hasil, sembunyikan kuesioner
        questionnaire.style.display = 'none';
        result.style.display = 'block';
        
        // Scroll ke hasil
        result.scrollIntoView({ behavior: 'smooth' });
    });
    
    resetBtn.addEventListener('click', function() {
        // Reset form
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.checked = false;
        });
        
        // Tampilkan kuesioner, sembunyikan hasil
        result.style.display = 'none';
        questionnaire.style.display = 'block';
        
        // Scroll ke atas
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});