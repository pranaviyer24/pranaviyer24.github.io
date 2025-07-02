<template>
  <div class="case-studies">
    <div class="page-header">
      <h1>Case Studies</h1>
      <p>Explore my design process and outcomes across various projects</p>
    </div>

    <!-- Filters and Search -->
    <div class="filters">
      <div class="search-box">
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Search case studies..."
          class="search-input"
        />
      </div>
      <div class="filter-tags">
        <button 
          v-for="tag in allTags" 
          :key="tag"
          @click="toggleTag(tag)"
          :class="['filter-tag', { active: selectedTags.includes(tag) }]"
        >
          {{ tag }}
        </button>
      </div>
    </div>

    <!-- Case Studies Grid -->
    <div class="case-studies-grid">
      <div 
        v-for="study in filteredCaseStudies" 
        :key="study.id"
        class="case-study-card"
        @click="viewCaseStudy(study.id)"
      >
        <div class="case-study-image">
          <div class="placeholder-case-study">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <rect width="120" height="120" fill="#f3f4f6" stroke="#d1d5db" stroke-width="1"/>
              <text x="60" y="65" text-anchor="middle" fill="#6b7280" font-size="10">Case Study</text>
            </svg>
          </div>
        </div>
        <div class="case-study-content">
          <h3>{{ study.title }}</h3>
          <p class="case-study-description">{{ study.description }}</p>
          <div class="case-study-meta">
            <span class="duration">{{ study.duration }}</span>
            <span class="role">{{ study.role }}</span>
          </div>
          <div class="case-study-tags">
            <span v-for="tag in study.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <div class="case-study-outcomes">
            <h4>Key Outcomes:</h4>
            <ul>
              <li v-for="outcome in study.outcomes" :key="outcome">{{ outcome }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- No Results -->
    <div v-if="filteredCaseStudies.length === 0" class="no-results">
      <h3>No case studies found</h3>
      <p>Try adjusting your search or filters to find what you're looking for.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaseStudies',
  data() {
    return {
      searchQuery: '',
      selectedTags: [],
      caseStudies: [
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
    allTags() {
      const tags = new Set()
      this.caseStudies.forEach(study => {
        study.tags.forEach(tag => tags.add(tag))
      })
      return Array.from(tags).sort()
    },
    filteredCaseStudies() {
      return this.caseStudies.filter(study => {
        // Search query filter
        const matchesSearch = !this.searchQuery || 
          study.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          study.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          study.tags.some(tag => tag.toLowerCase().includes(this.searchQuery.toLowerCase()))
        
        // Tags filter
        const matchesTags = this.selectedTags.length === 0 || 
          this.selectedTags.some(tag => study.tags.includes(tag))
        
        return matchesSearch && matchesTags
      })
    }
  },
  methods: {
    toggleTag(tag) {
      const index = this.selectedTags.indexOf(tag)
      if (index > -1) {
        this.selectedTags.splice(index, 1)
      } else {
        this.selectedTags.push(tag)
      }
    },
    viewCaseStudy(id) {
      this.$router.push(`/case-studies/${id}`)
    }
  }
}
</script>

<style scoped>
.case-studies {
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.page-header p {
  font-size: 1.25rem;
  color: #6b7280;
}

.filters {
  margin-bottom: 3rem;
}

.search-box {
  margin-bottom: 1.5rem;
}

.search-input {
  width: 100%;
  max-width: 400px;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #2563eb;
}

.filter-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-tag {
  padding: 0.5rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 2rem;
  background: white;
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-tag:hover {
  border-color: #2563eb;
  color: #2563eb;
}

.filter-tag.active {
  background: #2563eb;
  border-color: #2563eb;
  color: white;
}

.case-studies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.case-study-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
}

.case-study-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.case-study-image {
  height: 200px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-case-study {
  opacity: 0.7;
}

.case-study-content {
  padding: 1.5rem;
}

.case-study-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.75rem;
}

.case-study-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.case-study-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.duration, .role {
  background: #f3f4f6;
  color: #374151;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.case-study-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  background: #e5e7eb;
  color: #374151;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.case-study-outcomes h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.75rem;
}

.case-study-outcomes ul {
  list-style: none;
  padding: 0;
}

.case-study-outcomes li {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.case-study-outcomes li::before {
  content: '✓';
  color: #10b981;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.no-results {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.no-results h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.no-results p {
  color: #6b7280;
}

@media (max-width: 768px) {
  .case-studies-grid {
    grid-template-columns: 1fr;
  }
  
  .case-study-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .filter-tags {
    justify-content: center;
  }
}
</style> 