---
layout: default
---

<div class="container">
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <div class="hero-text">
                <h1>{{ site.data.site.name }}</h1>
                <p class="tagline">{{ site.data.site.title }}</p>
                <p class="bio">{{ site.data.site.about }}</p>
                <div class="cta-buttons">
                    <a href="mailto:{{ site.data.site.contact.email }}" class="btn btn-primary">Get in Touch</a>
                    <a href="{{ site.data.site.contact.resume }}" class="btn btn-secondary" target="_blank">Resume</a>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section">
        <h2>About</h2>
        <div class="about-content">
            <div class="about-text">
                <p>I'm currently an <strong>ML Engineer at Unity Bank</strong>, working on customer deduplication and entity resolution. I combine practical machine learning engineering with research interests in multilingual NLP and efficient LLM systems.</p>
                
                <p>As a <strong>Computer Science student at DJSCE</strong>, I'm specializing in Data Science and Computational Finance. I've completed internships in research (IIT Jodhpur) and industry, and I'm deeply involved in college leadership through technical clubs and social responsibility initiatives.</p>
                
                <p>I'm interested in bridging the gap between cutting-edge ML research and production systems, particularly in areas like entity resolution, NLP, and building scalable AI pipelines.</p>
            </div>
            <div class="about-meta">
                <ul class="meta-list">
                    <li><strong>📍 Location:</strong> Mumbai, India</li>
                    <li><strong>📧 Email:</strong> <a href="mailto:{{ site.data.site.contact.email }}">{{ site.data.site.contact.email }}</a></li>
                    <li><strong>📱 Phone:</strong> <a href="tel:{{ site.data.site.contact.phone }}">{{ site.data.site.contact.phone }}</a></li>
                    <li><strong>🔗 Links:</strong> 
                        <a href="{{ site.data.site.contact.github }}" target="_blank">GitHub</a> • 
                        <a href="{{ site.data.site.contact.linkedin }}" target="_blank">LinkedIn</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="section">
        <h2>Education</h2>
        <div class="education-grid">
            {% for edu in site.data.education %}
            <div class="education-card">
                <h3>{{ edu.degree }}</h3>
                <p class="institution">{{ edu.institution }}</p>
                <p class="dates">{{ edu.dates }}</p>
                {% if edu.cgpa %}
                <p class="metric">CGPA: {{ edu.cgpa }}</p>
                {% endif %}
                {% if edu.percentage %}
                <p class="metric">{{ edu.percentage }}</p>
                {% endif %}
                {% if edu.highlights %}
                <ul class="highlights">
                    {% for item in edu.highlights %}
                    <li>{{ item }}</li>
                    {% endfor %}
                </ul>
                {% endif %}
            </div>
            {% endfor %}
        </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="section">
        <h2>Experience & Positions of Responsibility</h2>
        <div class="experience-timeline">
            {% for exp in site.data.experience %}
            <div class="experience-card">
                <div class="experience-header">
                    <h3>{{ exp.role }}</h3>
                    <span class="company">{{ exp.company }}</span>
                </div>
                <p class="dates">{{ exp.dates }}</p>
                {% if exp.description %}
                <p class="description">{{ exp.description }}</p>
                {% endif %}
                {% if exp.highlights %}
                <ul class="highlights">
                    {% for item in exp.highlights %}
                    <li>{{ item }}</li>
                    {% endfor %}
                </ul>
                {% endif %}
            </div>
            {% endfor %}
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section">
        <h2>Projects</h2>
        <div class="projects-grid">
            {% for project in site.data.projects %}
            <div class="project-card">
                <div class="project-header">
                    <h3>{{ project.title }}</h3>
                    {% if project.status %}
                    <span class="project-status">{{ project.status }}</span>
                    {% endif %}
                </div>
                <p class="project-description">{{ project.description }}</p>
                
                {% if project.highlights %}
                <ul class="project-highlights">
                    {% for highlight in project.highlights %}
                    <li>{{ highlight }}</li>
                    {% endfor %}
                </ul>
                {% endif %}
                
                {% if project.technologies %}
                <div class="tech-tags">
                    {% for tech in project.technologies %}
                    <span class="tech-tag">{{ tech }}</span>
                    {% endfor %}
                </div>
                {% endif %}
                
                <div class="project-links">
                    {% if project.github %}
                    <a href="{{ project.github }}" class="link" target="_blank" rel="noopener noreferrer">GitHub →</a>
                    {% endif %}
                    {% if project.demo %}
                    <a href="{{ project.demo }}" class="link" target="_blank" rel="noopener noreferrer">Live Demo →</a>
                    {% endif %}
                </div>
            </div>
            {% endfor %}
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="section">
        <h2>Skills</h2>
        <div class="skills-grid">
            {% for skill_group in site.data.skills %}
            <div class="skill-category">
                <h3>{{ skill_group.category }}</h3>
                <ul class="skill-list">
                    {% for skill in skill_group.skills %}
                    <li>{{ skill }}</li>
                    {% endfor %}
                </ul>
            </div>
            {% endfor %}
        </div>
    </section>

    <!-- Achievements Section -->
    <section id="achievements" class="section">
        <h2>Achievements & Certifications</h2>
        <div class="achievements-list">
            {% for achievement in site.data.achievements %}
            <div class="achievement-item">
                <div class="achievement-header">
                    <h3>{{ achievement.title }}</h3>
                    <span class="achievement-date">{{ achievement.date }}</span>
                </div>
                <p class="achievement-description">{{ achievement.description }}</p>
                <span class="achievement-category">{{ achievement.category }}</span>
            </div>
            {% endfor %}
        </div>
    </section>

</div>
