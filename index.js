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
        <title>Landing Page Super Keren</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
        <style>
            /* Reset dan variabel */
            :root {
                --primary-color: #4A00E0;
                --secondary-color: #8E2DE2;
                --text-color: #333;
                --light-bg: #f9f9f9;
            }

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                overflow-x: hidden;
            }

            /* Navbar */
            .navbar {
                position: fixed;
                top: 0;
                width: 100%;
                background: rgba(255, 255, 255, 0.95);
                padding: 1rem 2rem;
                z-index: 1000;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                transition: all 0.3s ease;
            }

            .navbar.scrolled {
                padding: 0.5rem 2rem;
            }

            .nav-links {
                display: flex;
                justify-content: center;
                gap: 2rem;
            }

            .nav-links a {
                text-decoration: none;
                color: var(--text-color);
                font-weight: 500;
                transition: color 0.3s ease;
            }

            .nav-links a:hover {
                color: var(--primary-color);
            }

            /* Hero Section */
            .hero {
                min-height: 100vh;
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                color: white;
                position: relative;
                overflow: hidden;
            }

            .hero::before {
                content: '';
                position: absolute;
                width: 150%;
                height: 150%;
                background: repeating-linear-gradient(
                    45deg,
                    rgba(255,255,255,0.1) 0px,
                    rgba(255,255,255,0.1) 10px,
                    transparent 10px,
                    transparent 20px
                );
                animation: move-bg 20s linear infinite;
            }

            @keyframes move-bg {
                0% { transform: translate(-50%, -50%) rotate(0deg); }
                100% { transform: translate(-50%, -50%) rotate(360deg); }
            }

            .hero-content {
                position: relative;
                z-index: 1;
                max-width: 800px;
                padding: 2rem;
            }

            .hero h1 {
                font-size: 4rem;
                margin-bottom: 1.5rem;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            }

            .hero p {
                font-size: 1.5rem;
                margin-bottom: 2rem;
            }

            /* Buttons */
            .btn {
                display: inline-block;
                padding: 1rem 2rem;
                border-radius: 50px;
                text-decoration: none;
                font-weight: bold;
                transition: all 0.3s ease;
                margin: 0.5rem;
            }

            .btn-primary {
                background: white;
                color: var(--primary-color);
            }

            .btn-secondary {
                background: transparent;
                color: white;
                border: 2px solid white;
            }

            .btn:hover {
                transform: translateY(-3px);
                box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            }

            /* Features Section */
            .features {
                padding: 5rem 2rem;
                background: var(--light-bg);
            }

            .features-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 2rem;
                max-width: 1200px;
                margin: 0 auto;
            }

            .feature-card {
                background: white;
                padding: 2rem;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                transition: all 0.3s ease;
            }

            .feature-card:hover {
                transform: translateY(-10px);
            }

            .feature-icon {
                font-size: 2.5rem;
                color: var(--primary-color);
                margin-bottom: 1rem;
            }

            /* About Section */
            .about {
                padding: 5rem 2rem;
                background: white;
            }

            .about-content {
                max-width: 800px;
                margin: 0 auto;
                text-align: center;
            }

            /* Team Section */
            .team {
                padding: 5rem 2rem;
                background: var(--light-bg);
            }

            .team-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 2rem;
                max-width: 1200px;
                margin: 0 auto;
            }

            .team-member {
                text-align: center;
            }

            .team-member img {
                width: 150px;
                height: 150px;
                border-radius: 50%;
                margin-bottom: 1rem;
                border: 5px solid white;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            }

            /* Contact Section */
            .contact {
                padding: 5rem 2rem;
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: white;
            }

            .contact-form {
                max-width: 600px;
                margin: 0 auto;
            }

            .form-group {
                margin-bottom: 1.5rem;
            }

            .form-control {
                width: 100%;
                padding: 1rem;
                border: none;
                border-radius: 5px;
                margin-top: 0.5rem;
            }

            /* Footer */
            footer {
                background: #222;
                color: white;
                padding: 3rem 2rem;
                text-align: center;
            }

            .social-links {
                margin: 1rem 0;
            }

            .social-links a {
                color: white;
                font-size: 1.5rem;
                margin: 0 0.5rem;
                transition: color 0.3s ease;
            }

            .social-links a:hover {
                color: var(--secondary-color);
            }

            /* Animations */
            @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
                100% { transform: translateY(0px); }
            }

            /* Responsive Design */
            @media (max-width: 768px) {
                .hero h1 {
                    font-size: 2.5rem;
                }

                .nav-links {
                    display: none;
                }
            }
        </style>
    </head>
    <body>
        <!-- Navbar -->
        <nav class="navbar">
            <div class="nav-links">
                <a href="#home">Beranda</a>
                <a href="#features">Fitur</a>
                <a href="#about">Tentang</a>
                <a href="#team">Tim</a>
                <a href="#contact">Kontak</a>
            </div>
        </nav>

        <!-- Hero Section -->
        <section id="home" class="hero">
            <div class="hero-content" data-aos="fade-up">
                <h1>Selamat Datang di Website Super Keren</h1>
                <p>Menghadirkan pengalaman digital yang tak terlupakan</p>
                <a href="#features" class="btn btn-primary">Jelajahi Fitur</a>
                <a href="#contact" class="btn btn-secondary">Hubungi Kami</a>
            </div>
        </section>

        <!-- Features Section -->
        <section id="features" class="features">
            <div class="features-grid">
                <div class="feature-card" data-aos="fade-up">
                    <i class="fas fa-rocket feature-icon"></i>
                    <h3>Performa Super</h3>
                    <p>Optimalkan website Anda dengan performa tinggi</p>
                </div>
                <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
                    <i class="fas fa-paint-brush feature-icon"></i>
                    <h3>Desain Modern</h3>
                    <p>Tampilan yang elegan dan responsif</p>
                </div>
                <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
                    <i class="fas fa-shield-alt feature-icon"></i>
                    <h3>Keamanan Terjamin</h3>
                    <p>Sistem keamanan yang handal</p>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about">
            <div class="about-content" data-aos="fade-up">
                <h2>Tentang Kami</h2>
                <p>Kami adalah tim profesional yang berdedikasi untuk menciptakan solusi digital terbaik. Dengan pengalaman bertahun-tahun, kami telah membantu ratusan klien mencapai tujuan mereka.</p>
            </div>
        </section>

        <!-- Team Section -->
        <section id="team" class="team">
            <h2 style="text-align: center; margin-bottom: 3rem;">Tim Kami</h2>
            <div class="team-grid">
                <div class="team-member" data-aos="fade-up">
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Team Member">
                    <h3>John Doe</h3>
                    <p>CEO & Founder</p>
                </div>
                <div class="team-member" data-aos="fade-up" data-aos-delay="100">
                    <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Team Member">
                    <h3>Jane Smith</h3>
                    <p>Lead Designer</p>
                </div>
                <div class="team-member" data-aos="fade-up" data-aos-delay="200">
                    <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Team Member">
                    <h3>Mike Johnson</h3>
                    <p>Developer</p>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="contact">
            <h2 style="text-align: center; margin-bottom: 3rem;">Hubungi Kami</h2>
            <div class="contact-form">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Nama Lengkap">
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" rows="5" placeholder="Pesan"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Kirim Pesan</button>
                </form>
            </div>
        </section>

        <!-- Footer -->
        <footer>
            <div class="social-links">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
            <p>&copy; 2025 - Dibuat dengan ❤️ oleh EL NATHAN</p>
        </footer>

        <!-- Scripts -->
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>
            // Inisialisasi AOS
            AOS.init({
                duration: 1000,
                once: true
            });

            // Navbar Scroll Effect
            window.addEventListener('scroll', () => {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });

            // Smooth Scroll
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

            // Form Submission
            const form = document.querySelector('form');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Terima kasih! Pesan Anda telah terkirim.');
                form.reset();
            });

            // Interactive Elements
            document.querySelectorAll('.feature-card').forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'scale(1.05)';
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'scale(1)';
                });
            });
        </script>
    </body>
    </html>
    `);
});

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});
