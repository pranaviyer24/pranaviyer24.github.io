<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          Hi, I'm <span class="highlight">Pranav Iyer</span>
        </h1>
        <p class="hero-subtitle">
          UX Designer & Product Strategist crafting meaningful digital experiences
        </p>
        <p class="hero-description">
          I help companies create user-centered products that solve real problems and drive business growth.
        </p>
        <div class="hero-actions">
          <router-link to="/case-studies" class="btn btn-primary">
            View My Work
          </router-link>
          <router-link to="/about" class="btn btn-secondary">
            Learn More
          </router-link>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-image">
          <!-- Placeholder for hero image -->
          <div class="placeholder-image">
            <svg width="200" height="200" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="80" fill="#e5e7eb" stroke="#d1d5db" stroke-width="2"/>
              <text x="100" y="110" text-anchor="middle" fill="#6b7280" font-size="14">Portrait</text>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Work Section -->
    <section class="featured-work">
      <div class="section-header">
        <h2>Featured Work</h2>
        <p>Recent case studies showcasing my design process and outcomes</p>
      </div>
      
      <div class="work-grid">
        <div 
          v-for="project in featuredProjects" 
          :key="project.id"
          class="work-card"
          @click="viewProject(project.id)"
        >
          <div class="work-image">
            <div class="placeholder-work">
              <svg width="100" height="100" viewBox="0 0 100 100">
                <rect width="100" height="100" fill="#f3f4f6" stroke="#d1d5db" stroke-width="1"/>
                <text x="50" y="55" text-anchor="middle" fill="#6b7280" font-size="12">Mockup</text>
              </svg>
            </div>
          </div>
          <div class="work-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="work-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="view-all">
        <router-link to="/case-studies" class="btn btn-outline">
          View All Case Studies
        </router-link>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills">
      <div class="section-header">
        <h2>What I Do</h2>
        <p>My expertise across the design and product development spectrum</p>
      </div>
      
      <div class="skills-grid">
        <div class="skill-card">
          <div class="skill-icon">🎨</div>
          <h3>UX Design</h3>
          <p>User research, wireframing, prototyping, and user testing to create intuitive interfaces.</p>
        </div>
        <div class="skill-card">
          <div class="skill-icon">📊</div>
          <h3>Product Strategy</h3>
          <p>Market analysis, user journey mapping, and feature prioritization to drive product decisions.</p>
        </div>
        <div class="skill-card">
          <div class="skill-icon">🔍</div>
          <h3>User Research</h3>
          <p>Interviews, surveys, usability testing, and data analysis to understand user needs.</p>
        </div>
        <div class="skill-card">
          <div class="skill-icon">🎯</div>
          <h3>Design Systems</h3>
          <p>Creating scalable design systems and component libraries for consistent experiences.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      featuredProjects: [
        {
          id: 'project-1',
          title: 'E-commerce Redesign',
          description: 'Improved conversion rates by 40% through user-centered design improvements.',
          tags: ['UX Design', 'E-commerce', 'A/B Testing']
        },
        {
          id: 'project-2',
          title: 'Mobile Banking App',
          description: 'Designed a secure and intuitive banking experience for millennials.',
          tags: ['Mobile Design', 'Fintech', 'Security']
        },
        {
          id: 'project-3',
          title: 'Healthcare Platform',
          description: 'Streamlined patient-provider communication with a comprehensive dashboard.',
          tags: ['Healthcare', 'Dashboard', 'Accessibility']
        }
      ]
    }
  },
  methods: {
    viewProject(id) {
      this.$router.push(`/case-studies/${id}`)
    }
  }
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  min-height: 80vh;
  padding: 2rem 0;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1rem;
  color: #1f2937;
}

.highlight {
  color: #2563eb;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: #4b5563;
  margin-bottom: 1rem;
}

.hero-description {
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: 2rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 1rem;
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
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: #2563eb;
  border: 2px solid #2563eb;
}

.btn-secondary:hover {
  background: #2563eb;
  color: white;
}

.btn-outline {
  background: transparent;
  color: #6b7280;
  border: 2px solid #d1d5db;
}

.btn-outline:hover {
  border-color: #2563eb;
  color: #2563eb;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.placeholder-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #e5e7eb;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.1rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
}

.featured-work {
  padding: 4rem 0;
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.work-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
}

.work-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.work-image {
  height: 200px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-work {
  opacity: 0.7;
}

.work-content {
  padding: 1.5rem;
}

.work-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.work-content p {
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.work-tags {
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

.view-all {
  text-align: center;
}

.skills {
  padding: 4rem 0;
  background: #f9fafb;
  margin: 0 -2rem;
  padding-left: 2rem;
  padding-right: 2rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-2px);
}

.skill-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.skill-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.skill-card p {
  color: #6b7280;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .work-grid {
    grid-template-columns: 1fr;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style> 