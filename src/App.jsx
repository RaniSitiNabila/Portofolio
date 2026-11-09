import profileImage from './assets/profile.png'
import foto2 from './assets/foto2.png'

import healingkuImage from './assets/healingku.png'
import gogofitImage from './assets/gogofit.png'
import nutribiteImage from './assets/nutribite.png'

import annyeongbapAnalysis from './assets/annyeongbap-analysis.png'
import annyeongbapDashboard from './assets/annyeongbap-dashboard.png'
import annyeongbapData from './assets/annyeongbap-data.png'
import annyeongbapDashboard2 from './assets/annyeongbap-dashboard2.png'

import googleCloud from './assets/google-cloud-computing.png'
import wadhwani from './assets/wadhwani-jobready.png'
import greatLearning from './assets/great-learning-big-data-analytics.png'
import karinex from './assets/karinex-excel-specialist.png'
import journalProof from './assets/journal-proof.png'

import './App.css'

const skills = [
  {
    number: '01',
    title: 'Desain UI/UX',
    description: 'Perancangan antarmuka dan pengalaman pengguna yang mudah dipahami dan digunakan.',
    tools: 'Figma'
  },
  {
    number: '02',
    title: 'Desain Grafis',
    description: 'Pembuatan desain visual, materi publikasi, dan kebutuhan komunikasi visual.',
    tools: 'Canva, CorelDRAW'
  },
  {
    number: '03',
    title: 'Analisis Data',
    description: 'Pengolahan, analisis, dan visualisasi data untuk menghasilkan informasi dan wawasan bisnis.',
    tools: 'Microsoft Excel, PivotTable, Dasbor, Visualisasi Data'
  },
  {
    number: '04',
    title: 'Microsoft Office',
    description: 'Pengolahan data, dokumen, laporan, dan materi presentasi.',
    tools: 'Excel, Word, PowerPoint'
  },
  {
    number: '05',
    title: 'Administrasi & Entri Data',
    description: 'Pengelolaan data, pencatatan, pemeriksaan, dan pengarsipan dokumen.',
    tools: 'Microsoft Office, Google Workspace'
  },
  {
    number: '06',
    title: 'Kemampuan Personal',
    description: 'Kemampuan bekerja secara profesional, mandiri, dan kolaboratif.',
    tools: 'Kerja Sama Tim, Manajemen Waktu, Tanggung Jawab, Kemauan Belajar'
  }
]

const projects = [
  {
    number: '01',
    title: 'Healingku.AI',
    category: 'Desain UI/UX',
    year: '2026',
    image: healingkuImage,
    description:
      'Merancang Travel Planner Assistant untuk membantu pengguna merencanakan perjalanan secara mudah dan personal melalui fitur pencarian, rekomendasi destinasi, catatan perjalanan, dan pengelolaan anggaran.'
  },
  {
    number: '02',
    title: 'Gogofit',
    category: 'Desain UI/UX',
    year: '2026',
    image: gogofitImage,
    description:
      'Merancang aplikasi kesehatan untuk membantu pengguna memantau asupan gizi dan pola makan melalui pemindaian makanan, pemantauan nutrisi, personalisasi target, dan pengingat konsumsi sehat.'
  },
  {
    number: '03',
    title: 'Nutribite',
    category: 'Desain UI/UX',
    year: '2026',
    image: nutribiteImage,
    description:
      'Merancang e-commerce makanan sehat menggunakan metode User Centered Design (UCD), meliputi identifikasi pengguna, analisis kebutuhan, alur pengguna, storyboard, wireframe, dan desain antarmuka menggunakan Figma.'
  },
  {
    number: '04',
    title: 'Annyeongbap Korean Restaurant 2025',
    category: 'Analisis Data',
    year: '2026',
    images: [
      annyeongbapAnalysis,
      annyeongbapDashboard,
      annyeongbapData,
      annyeongbapDashboard2
    ],
    description:
      'Melakukan analisis data transaksi restoran Korea Annyeongbap tahun 2025 melalui persiapan dan pembersihan data, pengolahan menggunakan rumus Excel, PivotTable, VBA, serta pembuatan dasbor interaktif untuk menghasilkan wawasan bisnis.'
  }
]

function App() {
  return (
    <div className="portfolio">
      {/* NAVIGASI */}
      <nav className="navbar">
        <a href="#home" className="logo">
          portofolio<span>saya.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Beranda</a>
          <a href="#about">Tentang Saya</a>
          <a href="#education">Pendidikan & Pengalaman</a>
          <a href="#skills">Keahlian</a>
          <a href="#projects">Proyek</a>
          <a href="#journal">Publikasi Jurnal</a>
          <a href="#certificates">Sertifikat</a>
          <a href="#contact" className="nav-contact">Hubungi Saya</a>
        </div>
      </nav>

      {/* BERANDA */}
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="greeting">
            HALO, SELAMAT DATANG DI PORTOFOLIO SAYA ♡
          </span>

          <h1>
            Halo, Saya <span>Rani Siti Nabila</span>
          </h1>

          <h2>Desainer UI/UX, Analis Data, Administrasi & Entri Data</h2>

          <p>
            Lulusan S1 Informatika Universitas Sebelas April dengan IPK 3,70
            dan minat pada bidang desain UI/UX, administrasi, entri data,
            serta analisis data. Memiliki kemampuan dalam perancangan
            antarmuka, pengolahan data, dan administrasi. Pribadi yang teliti,
            bertanggung jawab, mampu bekerja secara individu maupun tim,
            serta memiliki semangat untuk terus belajar dan berkembang.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              Lihat Portofolio →
            </a>

            <a
              href="/CV-Rani-Siti-Nabila.pdf"
              className="btn-outline"
              download
            >
              Unduh CV ↓
            </a>

            <a href="#contact" className="btn-outline">
              Hubungi Saya ♡
            </a>
          </div>

          <div className="social-text">
            Mari terhubung dan ciptakan sesuatu yang bermakna ♡
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/ranisitinabila/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-glow"></div>
          <img
            src={profileImage}
            alt="Foto Rani Siti Nabila"
            className="profile-photo"
          />

          <div className="floating-note">
            ✿ Terus Berkembang
          </div>

          <div className="floating-sparkle sparkle-one">✧</div>
          <div className="floating-sparkle sparkle-two">♡</div>
        </div>
      </section>

      {/* TENTANG SAYA */}
      <section className="section about" id="about">
        <div className="section-heading">
          <span>KENALI SAYA LEBIH DEKAT</span>
          <h2>Tentang <em>Saya</em></h2>
        </div>

        <div className="about-card">
          <div className="about-photo">
            <img src={foto2} alt="Foto Rani Siti Nabila" />
            <span className="about-photo-decoration">♡</span>
          </div>

          <div className="about-content">
            <span className="about-label">HALO, SENANG BERTEMU DENGAN ANDA!</span>
            <h3>Sekilas Tentang Saya</h3>

            <p>
              Halo! Saya Rani Siti Nabila, lulusan S1 Informatika
              Universitas Sebelas April. Saya memiliki ketertarikan
              pada bidang desain UI/UX, pengolahan data, dan
              administrasi. Selama masa perkuliahan, saya memperoleh
              pengalaman melalui organisasi, kegiatan KKN, serta
              kepanitiaan. Pengalaman tersebut membantu saya
              mengembangkan kemampuan komunikasi, kerja sama tim,
              manajemen waktu, dan tanggung jawab. Saya merupakan
              pribadi yang teliti, adaptif, dan memiliki kemauan
              untuk terus mengembangkan kemampuan serta memperoleh
              pengalaman profesional.
            </p>

            <div className="about-highlight">
              <span>✿</span>
              <strong>Terus Belajar, Terus Berkembang</strong>
            </div>
          </div>
        </div>
      </section>

      {/* PENDIDIKAN & PENGALAMAN */}
      <section className="section education" id="education">
        <div className="section-heading">
          <span>LATAR BELAKANG SAYA</span>
          <h2>Pendidikan & <em>Pengalaman</em></h2>
          <p>
            Riwayat pendidikan dan pengalaman organisasi yang membentuk
            kemampuan serta pengembangan diri saya.
          </p>
        </div>

        <div className="info-grid">
          <div className="info-card">
            <span className="card-icon">🎓</span>
            <h3>Pendidikan</h3>
            <h4>Universitas Sebelas April</h4>
            <p>S1 Informatika</p>
            <p>
              Lulus dengan pemahaman dasar dalam perancangan antarmuka,
              pengelolaan dan analisis data, basis data, serta
              pengembangan aplikasi web.
            </p>
            <small>2022 – 2026</small>

            <div className="education-score">
              <span>IPK</span>
              <strong>3,70</strong>
            </div>
          </div>

          <div className="info-card">
            <span className="card-icon">♡</span>
            <h3>Pengalaman Organisasi</h3>
            <h4>Bendahara</h4>
            <p>UKM Photography UNSAP</p>
            <ul>
              <li>Mengelola dan mencatat pemasukan serta pengeluaran organisasi.</li>
              <li>Menyusun laporan dan mengarsipkan dokumen keuangan.</li>
              <li>Mengatur kebutuhan dana kegiatan dan berkoordinasi dengan pengurus.</li>
            </ul>
            <small>2024 – 2025</small>
          </div>

          <div className="info-card">
            <span className="card-icon">✿</span>
            <h3>Pengalaman Pengabdian</h3>
            <h4>Divisi PDD</h4>
            <p>Kuliah Kerja Nyata (KKN) 2026</p>
            <ul>
              <li>Membuat dan mengelola materi publikasi kegiatan.</li>
              <li>Mendokumentasikan kegiatan melalui foto dan video.</li>
              <li>Menyiapkan desain dan kebutuhan visual kegiatan.</li>
            </ul>
            <small>Januari – Februari 2026</small>
          </div>

          <div className="info-card">
            <span className="card-icon">✧</span>
            <h3>Pengalaman Kepanitiaan</h3>
            <h4>Divisi Konsumsi</h4>
            <p>DIGIVERSE IT 2025</p>
            <ul>
              <li>Menyiapkan dan mendistribusikan konsumsi untuk panitia dan peserta.</li>
              <li>Berkoordinasi dengan tim dalam memenuhi kebutuhan konsumsi.</li>
              <li>Memastikan distribusi berjalan sesuai jadwal.</li>
            </ul>
            <small>Juni 2025</small>
          </div>
        </div>
      </section>

      {/* KEAHLIAN */}
      <section className="section skills" id="skills">
        <div className="section-heading">
          <span>KEAHLIAN YANG SAYA MILIKI</span>
          <h2>Keahlian <em>Saya</em></h2>
          <p>
            Kemampuan dan perangkat yang terus saya kembangkan untuk
            menunjang kesiapan dan profesionalitas kerja.
          </p>
        </div>

        <div className="skill-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.number}>
              <span>{skill.number}</span>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="skill-list">{skill.tools}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROYEK */}
      <section className="section projects" id="projects">
        <div className="section-heading">
          <span>HASIL KARYA TERBARU SAYA</span>
          <h2>Proyek <em>Unggulan</em></h2>
          <p>Kumpulan hasil karya dan proyek yang telah saya kerjakan.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-image">
                <span>{project.number}</span>

                {project.images ? (
                  <div className="project-gallery">
                    {project.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${project.title} tampilan ${index + 1}`}
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={`Pratinjau ${project.title}`}
                  />
                )}
              </div>

              <div className="project-info">
                <small>
                  {project.category} · {project.year}
                </small>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#contact">Diskusikan Proyek Ini ↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PUBLIKASI JURNAL */}
      <section className="section journal" id="journal">
        <div className="section-heading">
          <span>PRESTASI AKADEMIK SAYA</span>
          <h2>Publikasi <em>Jurnal</em></h2>
          <p>
            Hasil penelitian dan kontribusi akademik yang ingin saya bagikan.
          </p>
        </div>

        <div className="journal-card">
          <div className="journal-content">
            <div className="journal-top">
              <span className="journal-icon">✿</span>
              <span className="published-badge">
                ✓ Telah Dipublikasikan
              </span>
            </div>

            <small className="journal-label">PUBLIKASI PENELITIAN</small>

            <h3>
              Classification of User Reviews of the JKN Mobile Application
              Using the Naive Bayes Algorithm
            </h3>

            <p className="journal-description">
              Penelitian ini berfokus pada klasifikasi ulasan pengguna
              aplikasi Mobile JKN menggunakan algoritma Naive Bayes.
              Penelitian menerapkan tahapan prapemrosesan teks,
              ekstraksi fitur TF-IDF, dan klasifikasi sentimen untuk
              mengidentifikasi persepsi pengguna serta mengevaluasi
              kualitas layanan kesehatan digital.
            </p>

            <div className="journal-details">
              <div>
                <span>Jurnal</span>
                <strong>Informatics Research Scientific (IRIS)</strong>
              </div>

              <div>
                <span>Tahun Publikasi</span>
                <strong>2026</strong>
              </div>

              <div>
                <span>Tanggal Publikasi</span>
                <strong>27 Juni 2026</strong>
              </div>

              <div>
                <span>Status Publikasi</span>
                <strong>Telah Dipublikasikan</strong>
              </div>
            </div>

            <a
              href="https://ejournal.resincen.org/index.php/iris/article/view/87"
              className="journal-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lihat Publikasi Jurnal ↗
            </a>
          </div>

          <div className="journal-proof">
            <span className="proof-label">BUKTI PUBLIKASI</span>

            <div className="proof-frame">
              <img
                src={journalProof}
                alt="Bukti publikasi jurnal Informatics Research Scientific"
              />
              <div className="proof-placeholder">
                <span>📄</span>
                <h4>Bukti Publikasi Jurnal</h4>
                <p>
                  Tangkapan layar halaman resmi publikasi jurnal
                  Informatics Research Scientific (IRIS).
                </p>
              </div>
            </div>

            <small className="proof-caption">
              Bukti publikasi resmi – IRIS, 2026
            </small>
          </div>
        </div>
      </section>

      {/* SERTIFIKAT */}
      <section className="section certificates" id="certificates">
        <div className="section-heading">
          <span>PERJALANAN PEMBELAJARAN SAYA</span>
          <h2>Sertifikat & <em>Pencapaian</em></h2>
          <p>
            Kumpulan sertifikat pelatihan dan pencapaian pembelajaran
            sebagai bentuk komitmen saya untuk terus berkembang.
          </p>
        </div>

        <div className="certificate-grid">
          <article className="certificate-card">
            <div className="certificate-image">
              <img src={googleCloud} alt="Sertifikat Google Cloud Computing" />
            </div>
            <div className="certificate-info">
              <span>GOOGLE CLOUD · 2025</span>
              <h3>Google Cloud Computing Foundations</h3>
              <p>
                Sertifikat yang mencakup pengetahuan dasar komputasi awan,
                infrastruktur, penyimpanan, dan teknologi Google Cloud.
              </p>
              <a
                href="https://www.credly.com/earner/earned/badge/8e61da36-e658-41c7-8835-deb6959ab8ba"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lihat Sertifikat ↗
              </a>
            </div>
          </article>

          <article className="certificate-card">
            <div className="certificate-image">
              <img src={wadhwani} alt="Sertifikat Wadhwani Foundation" />
            </div>
            <div className="certificate-info">
              <span>WADHWANI FOUNDATION · 2024</span>
              <h3>JobReady Employability Skills</h3>
              <p>
                Menyelesaikan pelatihan keterampilan kesiapan kerja selama
                123 jam untuk memperkuat kesiapan profesional dan kompetensi
                di lingkungan kerja.
              </p>
              <a
                href="https://web.certificate.wfglobal.org/en/certificate?certificateId=675834f6cf9247b79b66adea"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lihat Sertifikat ↗
              </a>
            </div>
          </article>

          <article className="certificate-card">
            <div className="certificate-image">
              <img src={greatLearning} alt="Sertifikat Great Learning" />
            </div>
            <div className="certificate-info">
              <span>GREAT LEARNING · 2024</span>
              <h3>Big Data Analytics Course</h3>
              <p>
                Menyelesaikan program pembelajaran daring yang berfokus
                pada pengetahuan dasar analisis Big Data.
              </p>
              <a
                href="https://www.mygreatlearning.com/certificate/SPFIDIBU?referrer_code=GLVWZL6RM1M8K"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lihat Sertifikat ↗
              </a>
            </div>
          </article>

          <article className="certificate-card">
            <div className="certificate-image">
              <img src={karinex} alt="Sertifikat Karinex" />
            </div>
            <div className="certificate-info">
              <span>KARINEX · OKTOBER 2026</span>
              <h3>Microsoft Office Specialist</h3>
              <p>
                Menyelesaikan pelatihan Microsoft Office Excel, Word,
                dan PowerPoint Specialist Bootcamp dengan predikat Expert.
              </p>
              <a
                href="https://karirnex.com/c/Y735Mf0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lihat Sertifikat ↗
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* KONTAK */}
      <section className="section contact" id="contact">
        <div className="contact-card">
          <span>MARI BEKERJA SAMA</span>
          <h2>Punya Proyek atau Peluang <em>Menarik?</em></h2>
          <p>
            Saya terbuka untuk kesempatan kerja, kolaborasi,
            dan pengalaman profesional baru.
          </p>
          <a
            href="mailto:ranisitinabila144@gmail.com"
            className="btn-primary"
          >
            Hubungi Saya ♡
          </a>
        </div>
      </section>

      {/* KAKI HALAMAN */}
      <footer>
        <p>© 2026 Rani Siti Nabila.</p>
      </footer>
    </div>
  )
}

export default App
