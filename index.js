const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


// Serve static files
app.use(express.static('public'));

// Route utama
app.get('/', (req, res) => {
    res.send(`
   
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pendaftaran</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }

        body {
            background: linear-gradient(135deg, #4a148c, #7b1fa2);
            min-height: 100vh;
            padding: 20px;
            color: #fff;
        }

        .container {
            max-width: 1200px;
            margin: 20px auto;
            background: rgba(255, 255, 255, 0.95);
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 0 20px rgba(74, 20, 140, 0.3);
            color: #333;
        }

        .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #4a148c;
            padding-bottom: 20px;
        }

        .company-info {
            background: linear-gradient(45deg, #4a148c, #7b1fa2);
            color: white;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
        }

        .profile-section {
            background: white;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            border: 2px solid #4a148c;
        }

        .applications-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        .applications-table th,
        .applications-table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        .applications-table th {
            background: #4a148c;
            color: white;
        }

        .applications-table tr:nth-child(even) {
            background-color: #f5f5f5;
        }

        .applications-table tr:hover {
            background-color: #e0e0e0;
        }

        h1, h2, h3 {
            color: #4a148c;
        }

        .job-listings {
            margin-top: 20px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }

        .job-card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            border: 1px solid #4a148c;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .job-info {
            margin-bottom: 15px;
        }

        .btn-lamar {
            background: #4a148c;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: all 0.3s ease;
            width: 100%;
            margin-top: 10px;
        }

        .btn-lamar:hover {
            background: #7b1fa2;
            transform: translateY(-2px);
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }

        .no-data {
            text-align: center;
            padding: 20px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Dashboard Pendaftaran PT Elnathan</h1>
            <div id="current-time"></div>
        </div>

        <div class="company-info">
            <h2>Informasi Perusahaan</h2>
            <p><strong>Nama Perusahaan:</strong> PT. Digital Inovasi Teknologi</p>
            <p><strong>Alamat:</strong> Jl. Teknologi Raya No. 123, Jakarta Selatan</p>
            <p><strong>Email:</strong> careers@digitalinovasi.com</p>
            <p><strong>Telepon:</strong> (021) 555-0123</p>
        </div>

        <div class="profile-section">
            <h2>Profil Pengguna</h2>
            <div id="userProfile">
                <!-- Profil pengguna akan ditampilkan di sini -->
            </div>
        </div>

              <h2>Posisi yang Dibutuhkan</h2>
<div class="job-listings">
    <div class="job-card">
        <div class="job-info">
            <h3>Software Developer</h3>
            <p>Pengalaman minimal 2 tahun</p>
            <p>Gaji: Rp 10.000.000 - Rp 15.000.000</p>
        </div>
        <a href="lamar.html" class="btn-lamar" target="_blank" style="text-decoration: none;">
            <i class="fas fa-paper-plane"></i> Lamar Sekarang
        </a>
    </div>
    <div class="job-card">
        <div class="job-info">
            <h3>UI/UX Designer</h3>
            <p>Pengalaman minimal 1 tahun</p>
            <p>Gaji: Rp 8.000.000 - Rp 12.000.000</p>
        </div>
        <a href="lamar.html" class="btn-lamar" target="_blank" style="text-decoration: none;">
            <i class="fas fa-paper-plane"></i> Lamar Sekarang
        </a>
    </div>
    <div class="job-card">
        <div class="job-info">
            <h3>Digital Marketing</h3>
            <p>Fresh graduate diperbolehkan</p>
            <p>Gaji: Rp 5.000.000 - Rp 8.000.000</p>
        </div>
        <a href="lamar.html" class="btn-lamar" target="_blank" style="text-decoration: none;">
            <i class="fas fa-paper-plane"></i> Lamar Sekarang
        </a>
    </div>
</div>

        <h2>Pendaftar</h2>
        <table class="applications-table">
            <thead>
                <tr>
                    <th>Tanggal</th>
                    <th>Nama</th>
                    <th>Usia</th>
                    <th>Gender</th>
                    <th>Pendidikan</th>
                    <th>No. Telepon</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody id="applicationsTableBody">
                <!-- Data akan dimasukkan di sini -->
            </tbody>
        </table>
    </div>

    <script type="module">
        // Import Firebase
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
        import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

        // Konfigurasi Firebase
        const firebaseConfig = {
            apiKey: "AIzaSyCgdRhE9IrAwKIsvSZ_C7Y4KevhD9vOZXg",
            authDomain: "ecomerche-561d2.firebaseapp.com",
            databaseURL: "https://ecomerche-561d2-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "ecomerche-561d2",
            storageBucket: "ecomerche-561d2.firebasestorage.app",
            messagingSenderId: "456001161495",
            appId: "1:456001161495:web:508edf4396e2558416cf52",
            measurementId: "G-NHV2K32BJL"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);

        // Update waktu
        function updateTime() {
            const now = new Date();
            const formattedTime = now.toLocaleString('id-ID', { 
                dateStyle: 'full', 
                timeStyle: 'medium' 
            });
            document.getElementById('current-time').textContent = formattedTime;
        }
        setInterval(updateTime, 1000);
        updateTime();

        // Fungsi untuk melamar pekerjaan
        window.applyJob = function(position) {
            // Redirect ke halaman formulir lamaran dengan posisi yang dipilih
            window.location.href = `form-lamaran.html?position=${encodeURIComponent(position)}`;
        };

        // Tampilkan profil pengguna dari localStorage
        function displayUserProfile() {
            const userProfile = document.getElementById('userProfile');
            const savedProfile = localStorage.getItem('userProfile');
            
            if (savedProfile) {
                const profile = JSON.parse(savedProfile);
                userProfile.innerHTML = `
                    <p><strong>Nama:</strong> ${profile.name || 'Tidak tersedia'}</p>
                    <p><strong>Usia:</strong> ${profile.age || 'Tidak tersedia'}</p>
                    <p><strong>Gender:</strong> ${profile.gender || 'Tidak tersedia'}</p>
                `;
            } else {
                userProfile.innerHTML = '<p>Profil belum tersedia</p>';
            }
        }

        // Tampilkan data pendaftaran dari Firebase
        function displayApplications() {
            const applicationsRef = ref(database, 'job-applications');
            onValue(applicationsRef, (snapshot) => {
                const tableBody = document.getElementById('applicationsTableBody');
                tableBody.innerHTML = '';

                if (snapshot.exists()) {
                    const applications = snapshot.val();
                    Object.keys(applications).reverse().forEach(key => {
                        const application = applications[key];
                        const row = document.createElement('tr');
                        const date = new Date(application.timestamp);
                        row.innerHTML = `
                            <td>${date.toLocaleDateString('id-ID')}</td>
                            <td>${application.fullName.charAt(0)}****</td>
                            <td>${application.age}</td>
                            <td>${application.gender.charAt(0)}****</td>
                            <td>${application.education}</td>
                            <td>${application.phoneNumber.substring(0, 3)}****${application.phoneNumber.substring(application.phoneNumber.length - 2)}</td>
                            <td>Dalam Review</td>
                        `;
                        tableBody.appendChild(row);
                    });
                } else {
                    tableBody.innerHTML = `
                        <tr>
                            <td colspan="7" class="no-data">Belum ada data pendaftaran</td>
                        </tr>
                    `;
                }
            });
        }

        // Inisialisasi dashboard
        displayUserProfile();
        displayApplications();
    </script>
</body>
</html>

    `);
});

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});
