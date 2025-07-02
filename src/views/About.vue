<template>
  <div class="about">
    <div class="about-header">
      <h1>About Me</h1>
      <p class="subtitle">UX Designer passionate about creating meaningful digital experiences</p>
    </div>

    <div class="about-content">
      <!-- Personal Info Section -->
      <section class="personal-info">
        <div class="profile-section">
          <div class="profile-image">
            <div class="placeholder-profile">
              <svg width="150" height="150" viewBox="0 0 150 150">
                <circle cx="75" cy="75" r="70" fill="#e5e7eb" stroke="#d1d5db" stroke-width="2"/>
                <text x="75" y="85" text-anchor="middle" fill="#6b7280" font-size="12">Profile</text>
              </svg>
            </div>
          </div>
          <div class="profile-details">
            <h2>Pranav Iyer</h2>
            <p class="title">Senior UX Designer</p>
            <p class="bio">
              I'm a UX designer with over 5 years of experience creating user-centered digital products. 
              I specialize in user research, interaction design, and product strategy, helping companies 
              build products that users love and businesses value.
            </p>
            <div class="contact-info">
              <div class="contact-item">
                <span class="icon">📧</span>
                <span>pranav.iyer@email.com</span>
              </div>
              <div class="contact-item">
                <span class="icon">📍</span>
                <span>San Francisco, CA</span>
              </div>
              <div class="contact-item">
                <span class="icon">🔗</span>
                <span>linkedin.com/in/pranaviyer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Resume Section -->
      <section class="resume">
        <h2>Resume</h2>
        
        <!-- Experience -->
        <div class="resume-section">
          <h3>Experience</h3>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-header">
                <h4>Senior UX Designer</h4>
                <span class="company">TechCorp Inc.</span>
                <span class="period">2022 - Present</span>
              </div>
              <p class="description">
                Lead UX design for enterprise SaaS products, improving user engagement by 35% and reducing 
                support tickets by 40%. Managed a team of 3 designers and collaborated with product managers 
                and engineers to deliver user-centered solutions.
              </p>
              <div class="achievements">
                <ul>
                  <li>Redesigned core product dashboard, increasing user retention by 25%</li>
                  <li>Established design system used across 5 product teams</li>
                  <li>Conducted user research with 50+ customers to inform product decisions</li>
                </ul>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-header">
                <h4>UX Designer</h4>
                <span class="company">StartupXYZ</span>
                <span class="period">2020 - 2022</span>
              </div>
              <p class="description">
                Designed mobile and web experiences for a fintech startup, helping grow user base from 
                10K to 100K users. Collaborated closely with founders to define product strategy and 
                user experience vision.
              </p>
              <div class="achievements">
                <ul>
                  <li>Designed mobile app that achieved 4.8/5 App Store rating</li>
                  <li>Improved conversion funnel, increasing sign-ups by 60%</li>
                  <li>Created comprehensive design system and component library</li>
                </ul>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-header">
                <h4>UX Design Intern</h4>
                <span class="company">Design Agency</span>
                <span class="period">2019 - 2020</span>
              </div>
              <p class="description">
                Worked on client projects across various industries including healthcare, e-commerce, 
                and education. Conducted user research, created wireframes and prototypes, and 
                participated in user testing sessions.
              </p>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div class="resume-section">
          <h3>Education</h3>
          <div class="education-item">
            <h4>Bachelor of Design</h4>
            <span class="institution">Design Institute of Technology</span>
            <span class="period">2015 - 2019</span>
            <p>Major in Interaction Design with focus on user experience and digital product design.</p>
          </div>
        </div>

        <!-- Skills -->
        <div class="resume-section">
          <h3>Skills</h3>
          <div class="skills-grid">
            <div class="skill-category">
              <h4>Design Tools</h4>
              <div class="skill-tags">
                <span class="skill-tag">Figma</span>
                <span class="skill-tag">Sketch</span>
                <span class="skill-tag">Adobe Creative Suite</span>
                <span class="skill-tag">InVision</span>
                <span class="skill-tag">Principle</span>
              </div>
            </div>
            <div class="skill-category">
              <h4>Research Methods</h4>
              <div class="skill-tags">
                <span class="skill-tag">User Interviews</span>
                <span class="skill-tag">Usability Testing</span>
                <span class="skill-tag">Surveys</span>
                <span class="skill-tag">Analytics</span>
                <span class="skill-tag">A/B Testing</span>
              </div>
            </div>
            <div class="skill-category">
              <h4>Technical</h4>
              <div class="skill-tags">
                <span class="skill-tag">HTML/CSS</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">React</span>
                <span class="skill-tag">Vue.js</span>
                <span class="skill-tag">Git</span>
              </div>
            </div>
            <div class="skill-category">
              <h4>Soft Skills</h4>
              <div class="skill-tags">
                <span class="skill-tag">Leadership</span>
                <span class="skill-tag">Communication</span>
                <span class="skill-tag">Problem Solving</span>
                <span class="skill-tag">Collaboration</span>
                <span class="skill-tag">Presentation</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div class="resume-section">
          <h3>Certifications</h3>
          <div class="certifications">
            <div class="certification-item">
              <h4>Google UX Design Certificate</h4>
              <span class="issuer">Google</span>
              <span class="year">2021</span>
            </div>
            <div class="certification-item">
              <h4>Nielsen Norman Group UX Certification</h4>
              <span class="issuer">NN/g</span>
              <span class="year">2020</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  max-width: 1000px;
  margin: 0 auto;
}

.about-header {
  text-align: center;
  margin-bottom: 3rem;
}

.about-header h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.25rem;
  color: #6b7280;
}

.about-content {
  display: grid;
  gap: 4rem;
}

.personal-info {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.profile-section {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  align-items: start;
}

.profile-image {
  flex-shrink: 0;
}

.placeholder-profile {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #e5e7eb;
}

.profile-details h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.title {
  font-size: 1.25rem;
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1rem;
}

.bio {
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
}

.icon {
  font-size: 1.1rem;
}

.resume h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 2rem;
}

.resume-section {
  margin-bottom: 3rem;
}

.resume-section h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e5e7eb;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.timeline-item {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #2563eb;
}

.timeline-header {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: baseline;
  margin-bottom: 1rem;
}

.timeline-header h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.company {
  color: #2563eb;
  font-weight: 500;
}

.period {
  color: #6b7280;
  font-size: 0.875rem;
}

.description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.achievements ul {
  list-style: none;
  padding: 0;
}

.achievements li {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.achievements li::before {
  content: '•';
  color: #2563eb;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.education-item {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.education-item h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.institution {
  color: #2563eb;
  font-weight: 500;
  display: block;
  margin-bottom: 0.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.skill-category {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.skill-category h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: #e5e7eb;
  color: #374151;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.certifications {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.certification-item {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.certification-item h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.issuer {
  color: #2563eb;
  font-weight: 500;
}

.year {
  color: #6b7280;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .profile-section {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .timeline-header {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .certification-item {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style> 