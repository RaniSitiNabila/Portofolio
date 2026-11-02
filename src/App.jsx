
import profileImage from './assets/profile.png'
import healingkuImage from './assets/healingku.png'
import gogofitImage from './assets/gogofit.png'
import nutribiteImage from './assets/nutribite.png'
import annyeongbapAnalysis from './assets/annyeongbap-analysis.png'
import annyeongbapDashboard from './assets/annyeongbap-dashboard.png'
import annyeongbapData from './assets/annyeongbap-data.png'
import googleCloud from './assets/google-cloud-computing.png'
import wadhwani from './assets/wadhwani-jobready.png'
import greatLearning from './assets/great-learning-big-data-analytics.png'
import karinex from './assets/karinex-excel-specialist.png'
import annyeongbapDashboard2 from './assets/annyeongbap-dashboard2.png'
import foto2 from './assets/foto2.png'

import './App.css'

const skills = [
  {
    number: '01',
    title: 'UI/UX Design',
    description: 'Perancangan antarmuka dan pengalaman pengguna.',
    tools: 'Figma'
  },
  {
    number: '02',
    title: 'Graphic Design',
    description: 'Pembuatan desain visual dan materi publikasi.',
    tools: 'Canva, CorelDRAW'
  },
  {
    number: '03',
    title: 'Data Analysis',
    description: 'Pengolahan, analisis, dan visualisasi data untuk menghasilkan informasi dan business insights.',
    tools: 'Microsoft Excel, PivotTable, Dashboard, Data Visualization'
  },
  {
    number: '04',
    title: 'Microsoft Office',
    description: 'Pengolahan data, dokumen, laporan, dan presentasi.',
    tools: 'Excel, Word, PowerPoint'
  },
  {
    number: '05',
    title: 'Administration & Data Entry',
    description: 'Pengelolaan data, pencatatan, dan pengarsipan dokumen.',
    tools: 'Microsoft Office, Google Workspace'
  },
 
  {
    number: '06',
    title: 'Personal Skills',
    description: 'Kemampuan bekerja secara profesional dan kolaboratif.',
    tools: 'Teamwork, Time Management, Responsibility, Willingness to Learn'
  },
]




const projects = [
  {
    number: '01',
    title: 'Healingku.AI',
    category: 'UI/UX Design',
    image: healingkuImage,
    description:
      'Merancang Travel Planner Assistant untuk membantu pengguna merencanakan perjalanan secara mudah dan personal melalui fitur pencarian, rekomendasi destinasi, catatan perjalanan, dan pengelolaan anggaran.',
  },
  {
    number: '02',
    title: 'Gogofit',
    category: 'UI/UX Design',
    image: gogofitImage,
    description:
      'Merancang aplikasi kesehatan untuk membantu pengguna memantau asupan gizi dan pola makan melalui pemindaian makanan, pemantauan nutrisi, personalisasi target, dan pengingat konsumsi sehat.',
  },
  {
    number: '03',
    title: 'Nutribite',
    category: 'UI/UX Design',
    image: nutribiteImage,
    description:
      'Merancang e-commerce makanan sehat menggunakan metode User Centered Design (UCD), meliputi identifikasi pengguna, analisis kebutuhan, user flow, storyboard, wireframe, dan desain antarmuka menggunakan Figma.',
  },
 {
  number: '04',
  title: 'Annyeongbap Korean Restaurant 2025',
  category: 'Data Analytics',
  images: [
    annyeongbapAnalysis,
    annyeongbapDashboard,
    annyeongbapData,
    annyeongbapDashboard2
  ],
  description:
    'Melakukan analisis data transaksi restoran Korea Annyeongbap tahun 2025 melalui data preparation, data cleaning, pengolahan menggunakan rumus Excel, PivotTable, VBA, serta pembuatan dashboard interaktif untuk menghasilkan business insights.',
}
]



function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          my<span>portfolio.</span>
        </a>

       <div className="nav-links">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
  <a href="#journal">Journal</a>
  <a href="#certificates">Certificates</a>
  <a href="#contact" className="nav-contact">Contact Me</a>
</div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="greeting">HELLO, WELCOME TO MY PORTFOLIO ♡</span>

          <h1>
            Hallo, Saya <span>Rani Siti Nabila</span>
          </h1>

         <h2>UI/UX Designer, Data Analyst, Data Entry & Administrasi </h2>
<p>
  Fresh graduate S1 Informatika Universitas Sebelas April
  dengan IPK 3.70 dan minat pada bidang UI/UX Design,
  Administrasi, Data Entry, serta Data Analyst. Memiliki
  kemampuan dasar dalam perancangan antarmuka, pengolahan
  data, dan administrasi. Pribadi yang teliti, bertanggung
  jawab, mampu bekerja secara individu maupun tim, serta
  memiliki semangat untuk terus belajar dan berkembang.
</p>

          <div className="hero-buttons">
  <a href="#projects" className="btn-primary">
    View Portfolio →
  </a>

  <a
    href="/CV-Rani-Siti-Nabila.pdf"
    className="btn-outline"
    download
  >
    Download CV ↓
  </a>

  <a href="#contact" className="btn-outline">
    Contact Me ♡
  </a>
</div>

          <div className="social-text">
            Let's connect and create something beautiful ♡
          </div>
        </div>
<div className="social-text">
  Let's connect and create something beautiful ♡

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
        
<div className="hero-image">
  <div className="hero-glow"></div>
<img
  src={profileImage}
  alt="Rani Siti Nabila"
  className="profile-photo"
/>

  <div className="floating-note">
    ✿ Always Growing
  </div>

  <div className="floating-sparkle sparkle-one">✧</div>
  <div className="floating-sparkle sparkle-two">♡</div>
</div>

      </section>

      {/* ABOUT */}
      
{/* ABOUT */}
<section className="section about" id="about">
  <div className="section-heading">
    <span>GET TO KNOW ME</span>
    <h2>About <em>Me</em></h2>
  </div>

  <div className="about-card">

<div className="about-photo">
  <img
    src={foto2}
    alt="Rani Siti Nabila"
  />
  <span className="about-photo-decoration">♡</span>
</div>

    <div className="about-content">
      <span className="about-label">HELLO, NICE TO MEET YOU!</span>

      <h3>A Little About Myself</h3>

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
        <strong>Always Learning, Always Growing</strong>
      </div>
    </div>

  </div>
</section>

     {/* EDUCATION & EXPERIENCE */}
<section className="section education" id="education">
  <div className="section-heading">
    <span>MY BACKGROUND</span>
    <h2>Education & <em>Experience</em></h2>
    <p>
      My academic background and organizational experiences
      that have shaped my skills and personal growth.
    </p>
  </div>

  <div className="info-grid">

    {/* EDUCATION */}
    <div className="info-card">
      <span className="card-icon">🎓</span>
      <h3>Education</h3>
      <h4>Universitas Sebelas April</h4>
      <p>S1 Informatika</p>
      <p>
        Lulus dengan pemahaman dasar dalam perancangan
        antarmuka, pengelolaan dan analisis data,
        basis data, serta pengembangan aplikasi web.
      </p>
      <small>2022 – 2026</small>

      <div className="education-score">
        <span>GPA / IPK</span>
        <strong>3.70</strong>
      </div>
    </div>

    {/* EXPERIENCE 1 */}
    <div className="info-card">
      <span className="card-icon">♡</span>
      <h3>Organizational Experience</h3>
      <h4>Bendahara</h4>
      <p>UKM Photography UNSAP</p>
      <ul>
        <li>Mengelola dan mencatat pemasukan serta pengeluaran organisasi.</li>
        <li>Menyusun laporan dan mengarsipkan dokumen keuangan.</li>
        <li>Mengatur kebutuhan dana kegiatan dan berkoordinasi dengan pengurus.</li>
      </ul>
      <small>2024 – 2025</small>
    </div>

    {/* EXPERIENCE 2 */}
    <div className="info-card">
      <span className="card-icon">✿</span>
      <h3>Community Experience</h3>
      <h4>Divisi PDD</h4>
      <p>Kuliah Kerja Nyata (KKN) 2026</p>
      <ul>
        <li>Membuat dan mengelola materi publikasi kegiatan.</li>
        <li>Mendokumentasikan kegiatan melalui foto dan video.</li>
        <li>Menyiapkan desain dan kebutuhan visual kegiatan.</li>
      </ul>
      <small>Januari – Februari 2026</small>
    </div>

    {/* EXPERIENCE 3 */}
    <div className="info-card">
      <span className="card-icon">✧</span>
      <h3>Committee Experience</h3>
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

     {/* SKILLS */}
<section className="section skills" id="skills">
  <div className="section-heading">
    <span>WHAT I CAN DO</span>
    <h2>My <em>Skills</em></h2>
    <p>
      My skills, tools, and abilities that I continue
      to develop for professional growth.
    </p>
  </div>

  <div className="skill-grid">
    {skills.map((skill) => (
      <div className="skill-card" key={skill.number}>
        <span>{skill.number}</span>

        <h3>{skill.title}</h3>

        <p>{skill.description}</p>

        <div className="skill-list">
          {skill.tools}
        </div>
      </div>
    ))}
  </div>
</section>

      {/* PROJECTS */}
      <section className="section projects" id="projects">
        <div className="section-heading">
          <span>MY RECENT WORK</span>
          <h2>Featured <em>Projects</em></h2>
          <p>A collection of work and projects I have created.</p>
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
          alt={`${project.title} preview ${index + 1}`}
        />
      ))}
    </div>
  ) : (
    <img
      src={project.image}
      alt={`Preview ${project.title}`}
    />
  )}
</div>

      <div className="project-info">
        <small>
          {project.category} · {project.year}
        </small>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <a href="#contact">
          Discuss This Project ↗
        </a>
      </div>
    </article>
  ))}
</div>

      </section>
      
      {/* JOURNAL PUBLICATIONS */}
      <section className="section journal" id="journal">
        <div className="section-heading">
          <span>MY ACADEMIC ACHIEVEMENT</span>
          <h2>Journal <em>Publications</em></h2>
          <p>
            Research, knowledge, and academic contributions
            that I am proud to share.
          </p>
        </div>

        <div className="journal-card">
          <div className="journal-content">
            <div className="journal-top">
              <span className="journal-icon">✿</span>
              <span className="published-badge">
                ✓ Published
              </span>
            </div>

            <small className="journal-label">
              RESEARCH PUBLICATION
            </small>

            <h3>
             Classification of User Reviews of the JKN Mobile Application Using the Naive Bayes Algorithm
            </h3>

            
<p className="journal-description">
  This research focuses on classifying user reviews
  of the Mobile JKN application using the Naive Bayes
  algorithm. The study applies text preprocessing,
  TF-IDF feature extraction, and sentiment
  classification to identify user perceptions
  and evaluate the quality of digital healthcare services.
</p>

            
<div className="journal-details">
  <div>
    <span>Journal</span>
    <strong>Informatics Research Scientific (IRIS)</strong>
  </div>

  <div>
    <span>Publication Year</span>
    <strong>2026</strong>
  </div>

  <div>
    <span>Publication Date</span>
    <strong>27 June 2026</strong>
  </div>

  <div>
    <span>Publication Status</span>
    <strong>Published</strong>
  </div>
</div>


           
<a
  href="https://ejournal.resincen.org/index.php/iris/article/view/87"
  className="journal-button"
  target="_blank"
  rel="noopener noreferrer"
>
  View Published Journal ↗
</a>

          </div>

          <div className="journal-proof">
            <span className="proof-label">
              PUBLICATION EVIDENCE
            </span>

            <div className="proof-frame">
  <img
    src="/journal-proof.png"
    alt="Bukti publikasi jurnal Informatics Research Scientific"
    onLoad={(e) => {
      e.currentTarget.nextElementSibling.style.display = 'none'
    }}
    onError={(e) => {
      e.currentTarget.style.display = 'none'
    }}
  />

  <div className="proof-placeholder">
    <span>📄</span>
    <h4>Journal Publication Proof</h4>
    <p>
      Screenshot halaman resmi publikasi jurnal
      Informatics Research Scientific (IRIS).
    </p>
  </div>
</div>

<small className="proof-caption">
  Official journal publication proof – IRIS, 2026
</small>
          </div>
        </div>
      </section>

{/* CERTIFICATES */}
<section className="section certificates" id="certificates">
  <div className="section-heading">
    <span>MY LEARNING JOURNEY</span>
    <h2>Certificates & <em>Achievements</em></h2>
    <p>
      A collection of certifications and learning
      achievements that reflect my commitment
      to continuous growth.
    </p>
  </div>

  <div className="certificate-grid">

    <article className="certificate-card">
      <div className="certificate-image">
        <img
  src={googleCloud}
  alt="Google Cloud Computing Certificate"
/>
      </div>
      <div className="certificate-info">
        <span>GOOGLE CLOUD · 2025</span>
        <h3>Google Cloud Computing Foundations</h3>
        <p>
          Certificate covering foundational knowledge
          of cloud computing, infrastructure,
          storage, and Google Cloud technologies.
        </p>
        <a
  href="https://www.credly.com/earner/earned/badge/8e61da36-e658-41c7-8835-deb6959ab8ba"
  target="_blank"
  rel="noopener noreferrer"
>
  View Certificate ↗
</a>
      </div>
    </article>

    <article className="certificate-card">
      <div className="certificate-image">
       <img
  src={wadhwani}
  alt="Wadhwani Foundation Certificate"
/>
      </div>
      <div className="certificate-info">
        <span>WADHWANI FOUNDATION · 2024</span>
        <h3>JobReady Employability Skills</h3>
        <p>
          Completed 123 hours of employability skills
          training to strengthen professional
          readiness and workplace competencies.
        </p>
        <a
  href="https://web.certificate.wfglobal.org/en/certificate?certificateId=675834f6cf9247b79b66adea"
  target="_blank"
  rel="noopener noreferrer"
>
  View Certificate ↗
</a>
      </div>
    </article>

    <article className="certificate-card">
      <div className="certificate-image">
        <img
  src={greatLearning}
  alt="Great Learning Certificate"
/>
      </div>
      <div className="certificate-info">
        <span>GREAT LEARNING · 2024</span>
        <h3>Big Data Analytics Course</h3>
        <p>
          Completed an online learning program
          focused on foundational knowledge
          of Big Data Analytics.
        </p>
       <a
  href="https://www.mygreatlearning.com/certificate/SPFIDIBU?referrer_code=GLVWZL6RM1M8K"
  target="_blank"
  rel="noopener noreferrer"
>
  View Certificate ↗
</a>
      </div>
    </article>

    <article className="certificate-card">
      <div className="certificate-image">
        <img
  src={karinex}
  alt="Karinex Certificate"
/>
      </div>
      <div className="certificate-info">
        <span>KARINEX · OCTOBER 2026</span>
        <h3>Microsoft Office Specialist</h3>
        <p>
          Completed Microsoft Office Excel, Word,
          and PowerPoint Specialist Bootcamp
          with Expert predicate.
        </p>
       <a
  href="https://karirnex.com/c/Y735Mf0"
  target="_blank"
  rel="noopener noreferrer"
>
  View Certificate ↗
</a>
      </div>
    </article>

  </div>
</section>


      {/* CONTACT */}
      <section className="section contact" id="contact">
        <div className="contact-card">
          <span>LET'S WORK TOGETHER</span>
          <h2>Have a project in <em>mind?</em></h2>
          <p>
            Saya terbuka untuk kesempatan baru, kolaborasi,
            dan pengalaman profesional.
          </p>
          <a href="mailto:ranisitinabila144@gmail.com" className="btn-primary">
            Get In Touch ♡
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
       <p>© 2026 Rani Siti Nabila. Made with ♡ and passion.</p>
      </footer>

    </div>
  )
}

export default App
