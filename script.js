function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;
    
    document.getElementById('previewName').textContent = name;
    document.getElementById('previewEmail').textContent = email;
    document.getElementById('previewSkills').textContent = skills;  // Fixed case sensitivity
    document.getElementById('previewExperience').textContent = experience;
}

function downloadResume() {
    const { jsPDF } = window.jspdf;  // Fixed 'jspdt' typo to 'jspdf'
    const doc = new jsPDF();
    
    doc.text("Resume", 10, 10);
    doc.text("Name: " + document.getElementById('previewName').textContent, 10, 20);  // Fixed document-getElementById typo
    doc.text("Email: " + document.getElementById('previewEmail').textContent, 10, 30);
    doc.text("Skills: " + document.getElementById('previewSkills').textContent, 10, 40);  // Fixed case sensitivity
    doc.text("Experience: " + document.getElementById('previewExperience').textContent, 10, 50);  // Fixed 'S0' to '50'
    doc.save('resume.pdf');  // Fixed comma to period in filename
}