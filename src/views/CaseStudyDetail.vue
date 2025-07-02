<template>
  <div class="case-study-detail">
    <!-- Back Navigation -->
    <div class="back-nav">
      <router-link to="/case-studies" class="back-link">
        ← Back to Case Studies
      </router-link>
    </div>

    <!-- Case Study Header -->
    <div class="case-study-header">
      <div class="header-content">
        <h1>{{ caseStudy.title }}</h1>
        <p class="subtitle">{{ caseStudy.description }}</p>
        <div class="meta-info">
          <div class="meta-item">
            <span class="label">Duration:</span>
            <span class="value">{{ caseStudy.duration }}</span>
          </div>
          <div class="meta-item">
            <span class="label">Role:</span>
            <span class="value">{{ caseStudy.role }}</span>
          </div>
          <div class="meta-item">
            <span class="label">Tools:</span>
            <span class="value">{{ caseStudy.tools?.join(', ') || 'Figma, Sketch, InVision' }}</span>
          </div>
        </div>
        <div class="tags">
          <span v-for="tag in caseStudy.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
      <div class="header-image">
        <div class="placeholder-hero">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <rect width="200" height="200" fill="#f3f4f6" stroke="#d1d5db" stroke-width="1"/>
            <text x="100" y="110" text-anchor="middle" fill="#6b7280" font-size="14">Hero Image</text>
          </svg>
        </div>
      </div>
    </div>

    <!-- Case Study Content -->
    <div class="case-study-content">
      <!-- Loading State -->
      <div v-if="loading" class="loading">
        <div class="loading-spinner"></div>
        <p>Loading case study...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="error">
        <h3>Case Study Not Found</h3>
        <p>{{ error }}</p>
        <router-link to="/case-studies" class="btn btn-primary">
          Back to Case Studies
        </router-link>
      </div>

      <!-- Content -->
      <div v-else class="content">
        <!-- Executive Summary -->
        <section class="content-section">
          <h2>Executive Summary</h2>
          <div class="summary-grid">
            <div class="summary-item">
              <h4>Problem</h4>
              <p>{{ caseStudy.problem || 'The client needed to improve their digital product experience to increase user engagement and conversion rates.' }}</p>
            </div>
            <div class="summary-item">
              <h4>Solution</h4>
              <p>{{ caseStudy.solution || 'I conducted comprehensive user research and redesigned the product interface to create a more intuitive and engaging user experience.' }}</p>
            </div>
            <div class="summary-item">
              <h4>Outcome</h4>
              <p>{{ caseStudy.outcome || 'The redesign resulted in significant improvements in key metrics including user engagement, conversion rates, and overall satisfaction.' }}</p>
            </div>
          </div>
        </section>

        <!-- Process -->
        <section class="content-section">
          <h2>Design Process</h2>
          <div class="process-timeline">
            <div class="process-step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>Research & Discovery</h4>
                <p>Conducted user interviews, surveys, and competitive analysis to understand user needs and market opportunities.</p>
              </div>
            </div>
            <div class="process-step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>Ideation & Strategy</h4>
                <p>Developed user personas, journey maps, and design strategy based on research insights.</p>
              </div>
            </div>
            <div class="process-step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>Design & Prototyping</h4>
                <p>Created wireframes, high-fidelity mockups, and interactive prototypes for user testing.</p>
              </div>
            </div>
            <div class="process-step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h4>Testing & Iteration</h4>
                <p>Conducted usability testing and iterated on designs based on user feedback and data insights.</p>
              </div>
            </div>
            <div class="process-step">
              <div class="step-number">5</div>
              <div class="step-content">
                <h4>Implementation & Launch</h4>
                <p>Collaborated with development team to ensure high-quality implementation and successful launch.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Key Outcomes -->
        <section class="content-section">
          <h2>Key Outcomes</h2>
          <div class="outcomes-grid">
            <div v-for="outcome in caseStudy.outcomes" :key="outcome" class="outcome-item">
              <div class="outcome-icon">✓</div>
              <p>{{ outcome }}</p>
            </div>
          </div>
        </section>

        <!-- Lessons Learned -->
        <section class="content-section">
          <h2>Lessons Learned</h2>
          <div class="lessons">
            <p>This project reinforced the importance of user-centered design and data-driven decision making. Key learnings included:</p>
            <ul>
              <li>The value of early user testing in identifying critical usability issues</li>
              <li>How small design changes can have significant impact on user behavior</li>
              <li>The importance of collaboration between design, product, and engineering teams</li>
              <li>Continuous iteration based on user feedback leads to better outcomes</li>
            </ul>
          </div>
        </section>

        <!-- Next Steps -->
        <section class="content-section">
          <h2>Next Steps</h2>
          <p>Future iterations will focus on:</p>
          <ul>
            <li>Expanding the design system to support new features</li>
            <li>Implementing advanced analytics to track user behavior</li>
            <li>Exploring new interaction patterns and emerging technologies</li>
            <li>Conducting ongoing user research to identify new opportunities</li>
          </ul>
        </section>
      </div>
    </div>

    <!-- Navigation -->
    <div class="case-study-nav">
      <div class="nav-links">
        <router-link v-if="previousCaseStudy" :to="`/case-studies/${previousCaseStudy.id}`" class="nav-link prev">
          ← {{ previousCaseStudy.title }}
        </router-link>
        <router-link v-if="nextCaseStudy" :to="`/case-studies/${nextCaseStudy.id}`" class="nav-link next">
          {{ nextCaseStudy.title }} →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaseStudyDetail',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: true,
      error: null,
      caseStudy: null,
      allCaseStudies: [
        {
          id: 'project-1',
          title: 'E-commerce Platform Redesign',
          description: 'Complete redesign of an e-commerce platform to improve user experience and increase conversion rates.',
          duration: '3 months',
          role: 'Lead UX Designer',
          tags: ['UX Design', 'E-commerce', 'A/B Testing', 'User Research'],
          outcomes: [
            '40% increase in conversion rate',
            '25% reduction in cart abandonment',
            'Improved mobile experience with 60% mobile traffic'
          ]
        },
        {
          id: 'project-2',
          title: 'Mobile Banking App',
          description: 'Design of a secure and intuitive mobile banking application for a fintech startup.',
          duration: '4 months',
          role: 'UX Designer',
          tags: ['Mobile Design', 'Fintech', 'Security', 'Prototyping'],
          outcomes: [
            '4.8/5 App Store rating',
            '100K+ active users within 6 months',
            '60% increase in daily active users'
          ]
        },
        {
          id: 'project-3',
          title: 'Healthcare Provider Dashboard',
          description: 'Comprehensive dashboard for healthcare providers to manage patient care and communication.',
          duration: '5 months',
          role: 'Senior UX Designer',
          tags: ['Healthcare', 'Dashboard', 'Accessibility', 'Data Visualization'],
          outcomes: [
            'Streamlined patient-provider communication',
            'Reduced administrative workload by 30%',
            'Improved patient satisfaction scores'
          ]
        },
        {
          id: 'project-4',
          title: 'Educational Learning Platform',
          description: 'Redesign of an online learning platform to improve student engagement and course completion rates.',
          duration: '3 months',
          role: 'UX Designer',
          tags: ['Education', 'Learning Design', 'Gamification', 'User Testing'],
          outcomes: [
            '35% increase in course completion rates',
            'Improved student engagement metrics',
            'Enhanced accessibility compliance'
          ]
        },
        {
          id: 'project-5',
          title: 'SaaS Product Dashboard',
          description: 'Redesign of enterprise SaaS dashboard to improve user productivity and reduce support tickets.',
          duration: '4 months',
          role: 'Lead UX Designer',
          tags: ['SaaS', 'Dashboard', 'Enterprise', 'Analytics'],
          outcomes: [
            '40% reduction in support tickets',
            '25% increase in user retention',
            'Improved task completion efficiency'
          ]
        },
        {
          id: 'project-6',
          title: 'Travel Booking App',
          description: 'Mobile app design for a travel booking platform focusing on seamless booking experience.',
          duration: '3 months',
          role: 'UX Designer',
          tags: ['Travel', 'Mobile Design', 'Booking Flow', 'User Research'],
          outcomes: [
            '50% faster booking completion',
            'Improved user satisfaction scores',
            'Increased repeat bookings by 45%'
          ]
        }
      ]
    }
  },
  computed: {
    currentIndex() {
      return this.allCaseStudies.findIndex(study => study.id === this.id)
    },
    previousCaseStudy() {
      if (this.currentIndex > 0) {
        return this.allCaseStudies[this.currentIndex - 1]
      }
      return null
    },
    nextCaseStudy() {
      if (this.currentIndex < this.allCaseStudies.length - 1) {
        return this.allCaseStudies[this.currentIndex + 1]
      }
      return null
    }
  },
  watch: {
    id: {
      immediate: true,
      handler(newId) {
        this.loadCaseStudy(newId)
      }
    }
  },
  methods: {
    loadCaseStudy(id) {
      this.loading = true
      this.error = null
      
      // Simulate loading
      setTimeout(() => {
        const study = this.allCaseStudies.find(s => s.id === id)
        if (study) {
          this.caseStudy = study
          this.loading = false
        } else {
          this.error = 'Case study not found'
          this.loading = false
        }
      }, 500)
    }
  }
}
</script>

<style scoped>
.case-study-detail {
  max-width: 1000px;
  margin: 0 auto;
}

.back-nav {
  margin-bottom: 2rem;
}

.back-link {
  color: #6b7280;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: #2563eb;
}

.case-study-header {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3rem;
  margin-bottom: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.case-study-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.25rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.meta-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.meta-item {
  display: flex;
  gap: 0.5rem;
}

.label {
  font-weight: 600;
  color: #374151;
  min-width: 80px;
}

.value {
  color: #6b7280;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #e5e7eb;
  color: #374151;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.header-image {
  display: flex;
  align-items: center;
}

.placeholder-hero {
  width: 200px;
  height: 200px;
  background: #f9fafb;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #e5e7eb;
}

.case-study-content {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}

.loading {
  text-align: center;
  padding: 3rem;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e5e7eb;
  border-top: 4px solid #2563eb;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error {
  text-align: center;
  padding: 3rem;
}

.error h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.error p {
  color: #6b7280;
  margin-bottom: 2rem;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e5e7eb;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.summary-item {
  background: #f9fafb;
  padding: 1.5rem;
  border-radius: 0.75rem;
}

.summary-item h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.75rem;
}

.summary-item p {
  color: #6b7280;
  line-height: 1.6;
}

.process-timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.process-step {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.step-number {
  width: 40px;
  height: 40px;
  background: #2563eb;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
}

.step-content h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.step-content p {
  color: #6b7280;
  line-height: 1.6;
}

.outcomes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.outcome-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 0.75rem;
}

.outcome-icon {
  color: #10b981;
  font-weight: bold;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.outcome-item p {
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

.lessons p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.lessons ul {
  color: #6b7280;
  line-height: 1.6;
  padding-left: 1.5rem;
}

.lessons li {
  margin-bottom: 0.5rem;
}

.case-study-nav {
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  border-top: 1px solid #e5e7eb;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #6b7280;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  max-width: 300px;
}

.nav-link:hover {
  color: #2563eb;
}

.nav-link.prev {
  text-align: left;
}

.nav-link.next {
  text-align: right;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: #2563eb;
  color: white;
}

.btn-primary:hover {
  background: #1d4ed8;
}

@media (max-width: 768px) {
  .case-study-header {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .summary-grid {
    grid-template-columns: 1fr;
  }
  
  .outcomes-grid {
    grid-template-columns: 1fr;
  }
  
  .case-study-nav {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-links {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-link {
    max-width: none;
    text-align: center;
  }
}
</style> 