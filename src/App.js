import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skills = [
    { name: 'HTML', level: 85 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 70 },
    { name: 'React', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'C++', level: 85 },
    { name: 'C', level: 80 },
    { name: 'Python', level: 80 },
    { name: 'MySQL', level: 75 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Visitor Management System',
      description: 'A comprehensive web application for managing visitor access with secure authentication and real-time tracking capabilities.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      features: ['User Authentication', 'Real-time Tracking', 'Admin Dashboard', 'Visitor History'],
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Automated Fire Extinguisher',
      description: 'IoT-based intelligent fire detection and suppression system using sensors for automated fire safety management.',
      technologies: ['IoT', 'Sensors', 'Microcontrollers', 'Automation'],
      features: ['Fire Detection', 'Automated Response', 'Sensor Integration', 'Safety Protocols'],
      status: 'Completed'
    }
  ];

  const renderAbout = () => (
    <div style={styles.tabContent}>
      <div style={styles.heroSection}>
        <div style={styles.profileCard}>
          <div style={styles.avatar}>RD</div>
          <div style={styles.profileInfo}>
            <h1 style={styles.name}>Raksha D</h1>
            <p style={styles.title}>Computer Science Engineering Student</p>
            <p style={styles.description}>
              Passionate about creating innovative solutions through technology. Currently pursuing CSE at 
              Malnad College of Engineering with a focus on full-stack development and IoT systems.
            </p>
            <div style={styles.stats}>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>8.4</span>
                <span style={styles.statLabel}>CGPA</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>2+</span>
                <span style={styles.statLabel}>Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.contactSection}>
        <h2 style={styles.sectionTitle}>Contact Information</h2>
        <div style={styles.contactGrid}>
          <div style={styles.contactItem}>
            <div style={styles.contactIcon}>📧</div>
            <div>
              <p style={styles.contactLabel}>Email</p>
              <p style={styles.contactValue}>rakshad2005@gmail.com</p>
            </div>
          </div>
          <div style={styles.contactItem}>
            <div style={styles.contactIcon}>📱</div>
            <div>
              <p style={styles.contactLabel}>Phone</p>
              <p style={styles.contactValue}>+91 7483338190</p>
            </div>
          </div>
          <div style={styles.contactItem}>
            <div style={styles.contactIcon}>📍</div>
            <div>
              <p style={styles.contactLabel}>College</p>
              <p style={styles.contactValue}>Malnad College of Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSkills = () => (
    <div style={styles.tabContent}>
      <h2 style={styles.sectionTitle}>Technical Skills</h2>
      <div style={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.skillCard}>
            <div style={styles.skillHeader}>
              <span style={styles.skillName}>{skill.name}</span>
              <span style={styles.skillPercent}>{skill.level}%</span>
            </div>
            <div style={styles.skillBar}>
              <div 
                style={{
                  ...styles.skillProgress,
                  width: `${skill.level}%`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div style={styles.skillCategories}>
        <div style={styles.categoryCard}>
          <h3 style={styles.categoryTitle}>Web Development</h3>
          <p style={styles.categoryDesc}>HTML, CSS, JavaScript, React, Node.js</p>
        </div>
        <div style={styles.categoryCard}>
          <h3 style={styles.categoryTitle}>Programming Languages</h3>
          <p style={styles.categoryDesc}>C++, C, Python</p>
        </div>
        <div style={styles.categoryCard}>
          <h3 style={styles.categoryTitle}>Database</h3>
          <p style={styles.categoryDesc}>MySQL</p>
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div style={styles.tabContent}>
      <h2 style={styles.sectionTitle}>Featured Projects</h2>
      <div style={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} style={styles.projectCard}>
            <div style={styles.projectHeader}>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <span style={styles.projectStatus}>{project.status}</span>
            </div>
            <p style={styles.projectDescription}>{project.description}</p>
            
            <div style={styles.projectSection}>
              <h4 style={styles.projectSubtitle}>Technologies</h4>
              <div style={styles.techTags}>
                {project.technologies.map((tech, index) => (
                  <span key={index} style={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>

            <div style={styles.projectSection}>
              <h4 style={styles.projectSubtitle}>Key Features</h4>
              <ul style={styles.featureList}>
                {project.features.map((feature, index) => (
                  <li key={index} style={styles.featureItem}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEducation = () => (
    <div style={styles.tabContent}>
      <h2 style={styles.sectionTitle}>Education</h2>
      <div style={styles.educationCard}>
        <div style={styles.educationHeader}>
          <h3 style={styles.degreeTitle}>Bachelor of Engineering - Computer Science</h3>
          <span style={styles.currentStatus}>Current</span>
        </div>
        <p style={styles.collegeName}>Malnad College of Engineering</p>
        <div style={styles.educationDetails}>
          <div style={styles.educationItem}>
            <span style={styles.detailLabel}>CGPA:</span>
            <span style={styles.detailValue}>8.4/10</span>
          </div>
          <div style={styles.educationItem}>
            <span style={styles.detailLabel}>Duration:</span>
            <span style={styles.detailValue}>2022 - 2026 (Expected)</span>
          </div>
        </div>
        <p style={styles.educationDesc}>
          Pursuing comprehensive education in computer science with focus on software development, 
          data structures, algorithms, and emerging technologies. Actively involved in practical 
          projects and hands-on learning experiences.
        </p>
      </div>
    </div>
  );

  const tabs = [
    { id: 'about', label: 'About', content: renderAbout },
    { id: 'skills', label: 'Skills', content: renderSkills },
    { id: 'projects', label: 'Projects', content: renderProjects },
    { id: 'education', label: 'Education', content: renderEducation }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    },
    header: {
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      padding: '20px 30px',
      marginBottom: '30px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    headerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px'
    },
    logoIcon: {
      width: '50px',
      height: '50px',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '20px',
      fontWeight: 'bold'
    },
    logoText: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      margin: 0
    },
    logoSubtext: {
      fontSize: '14px',
      color: '#666',
      margin: 0
    },
    nav: {
      display: 'flex',
      gap: '5px',
      background: '#f0f0f0',
      borderRadius: '12px',
      padding: '5px'
    },
    navButton: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '8px',
      background: 'transparent',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '500',
      transition: 'all 0.3s ease'
    },
    activeNavButton: {
      background: 'white',
      color: '#667eea',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
    },
    main: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    tabContent: {
      animation: 'fadeIn 0.5s ease-in'
    },
    heroSection: {
      marginBottom: '40px'
    },
    profileCard: {
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '20px',
      padding: '40px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      gap: '30px',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    avatar: {
      width: '120px',
      height: '120px',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '48px',
      fontWeight: 'bold',
      flexShrink: 0
    },
    profileInfo: {
      flex: 1,
      minWidth: '300px'
    },
    name: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#333',
      margin: '0 0 10px 0'
    },
    title: {
      fontSize: '20px',
      color: '#667eea',
      fontWeight: '600',
      margin: '0 0 15px 0'
    },
    description: {
      fontSize: '16px',
      color: '#666',
      lineHeight: '1.6',
      margin: '0 0 25px 0'
    },
    stats: {
      display: 'flex',
      gap: '30px'
    },
    statItem: {
      textAlign: 'center'
    },
    statNumber: {
      display: 'block',
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#667eea'
    },
    statLabel: {
      fontSize: '14px',
      color: '#666',
      fontWeight: '500'
    },
    contactSection: {
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '20px',
      padding: '40px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
    },
    sectionTitle: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '30px',
      textAlign: 'center'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '25px'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      padding: '20px',
      background: 'linear-gradient(135deg, #f8f9ff, #e8f0ff)',
      borderRadius: '12px'
    },
    contactIcon: {
      fontSize: '24px',
      width: '50px',
      height: '50px',
      background: 'rgba(102, 126, 234, 0.1)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    contactLabel: {
      fontSize: '14px',
      color: '#666',
      margin: '0 0 5px 0'
    },
    contactValue: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#333',
      margin: 0
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      marginBottom: '40px'
    },
    skillCard: {
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '15px',
      padding: '25px',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
    },
    skillHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px'
    },
    skillName: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#333'
    },
    skillPercent: {
      fontSize: '16px',
      color: '#667eea',
      fontWeight: '600'
    },
    skillBar: {
      width: '100%',
      height: '8px',
      background: '#e0e0e0',
      borderRadius: '4px',
      overflow: 'hidden'
    },
    skillProgress: {
      height: '100%',
      background: 'linear-gradient(90deg, #667eea, #764ba2)',
      borderRadius: '4px',
      transition: 'width 1s ease-out'
    },
    skillCategories: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px'
    },
    categoryCard: {
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '15px',
      padding: '25px',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
    },
    categoryTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '10px'
    },
    categoryDesc: {
      fontSize: '16px',
      color: '#666',
      margin: 0
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '30px'
    },
    projectCard: {
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '20px',
      padding: '30px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    projectHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '15px'
    },
    projectTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      margin: 0
    },
    projectStatus: {
      background: '#4ade80',
      color: 'white',
      padding: '5px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '600'
    },
    projectDescription: {
      fontSize: '16px',
      color: '#666',
      lineHeight: '1.6',
      marginBottom: '25px'
    },
    projectSection: {
      marginBottom: '20px'
    },
    projectSubtitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#333',
      marginBottom: '10px'
    },
    techTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    },
    techTag: {
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      color: 'white',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: '500'
    },
    featureList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    featureItem: {
      padding: '8px 0',
      borderBottom: '1px solid #eee',
      fontSize: '16px',
      color: '#555',
      position: 'relative',
      paddingLeft: '20px'
    },
    educationCard: {
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '20px',
      padding: '40px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      maxWidth: '800px',
      margin: '0 auto'
    },
    educationHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '15px',
      flexWrap: 'wrap',
      gap: '10px'
    },
    degreeTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      margin: 0
    },
    currentStatus: {
      background: '#667eea',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: '600'
    },
    collegeName: {
      fontSize: '20px',
      color: '#667eea',
      fontWeight: '600',
      marginBottom: '20px'
    },
    educationDetails: {
      display: 'flex',
      gap: '30px',
      marginBottom: '20px',
      flexWrap: 'wrap'
    },
    educationItem: {
      display: 'flex',
      gap: '10px'
    },
    detailLabel: {
      fontSize: '16px',
      color: '#666',
      fontWeight: '500'
    },
    detailValue: {
      fontSize: '16px',
      color: '#333',
      fontWeight: '600'
    },
    educationDesc: {
      fontSize: '16px',
      color: '#666',
      lineHeight: '1.6',
      margin: 0
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>R</div>
            <div>
              <h1 style={styles.logoText}>Raksha D</h1>
              <p style={styles.logoSubtext}>Portfolio</p>
            </div>
          </div>
          
          <nav style={styles.nav}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  ...styles.navButton,
                  ...(activeTab === tab.id ? styles.activeNavButton : {})
                }}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main style={styles.main}>
        {tabs.find(tab => tab.id === activeTab)?.content()}
      </main>
    </div>
  );
};

export default Portfolio;