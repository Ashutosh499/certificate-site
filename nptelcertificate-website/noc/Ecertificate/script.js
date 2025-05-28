function showCertificate() {
  // Hide the button
  document.getElementById('showBtn').style.display = 'none';

  // Show the certificate
  const certDiv = document.getElementById('certificate');
  certDiv.style.display = 'block';
  certDiv.innerHTML = `
    <img src="certificate.jpg" alt="Course Certificate"
         onerror="alert('Image not found. Make sure certificate.jpg is in the same folder.')">
  `;
}
