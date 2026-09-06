---
layout: default
---

<!-- Home Page -->
<div id="home" class="page active">
    <div class="container">
        <section class="hero">
            <div class="hero-photo">
                <img src="{{ '/assets/profile.svg' | relative_url }}" alt="Profile Photo">
            </div>
            <div class="hero-text">
                <h1>{{ site.data.site.name }}</h1>
                <p class="tagline">{{ site.data.site.title }}</p>
                <div class="bio">
                    {{ site.data.site.about | newline_to_br }}
                </div>
                <div class="cta-buttons">
                    <a href="mailto:{{ site.data.site.contact.email }}" class="btn btn-primary">Email</a>
                    <a href="{{ site.data.site.contact.resume }}" class="btn btn-secondary" target="_blank">Resume</a>
                </div>
            </div>
        </section>
    </div>
</div>

<!-- Education Page -->
<div id="education" class="page">
    <div class="container">
        <h2>Education</h2>
        {% for edu in site.data.education %}
        <div class="edu-item">
            <div class="degree-title">{{ edu.degree }}</div>
            <div class="institution">{{ edu.institution }}</div>
            <div class="dates">{{ edu.dates }}</div>
            {% if edu.cgpa %}
            <div class="cgpa">CGPA: {{ edu.cgpa }}</div>
            {% endif %}
            {% if edu.percentage %}
            <div class="cgpa">{{ edu.percentage }}</div>
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
</div>

<!-- Experience Page -->
<div id="experience" class="page">
    <div class="container">
        <h2>Experience & Positions</h2>
        {% for exp in site.data.experience %}
        <div class="exp-item">
            <div class="degree-title">{{ exp.role }}</div>
            <div class="institution">{{ exp.company }}</div>
            <div class="dates">{{ exp.dates }}</div>
            {% if exp.description %}
            <div class="content-description">{{ exp.description }}</div>
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
</div>

<!-- Projects Page -->
<div id="projects" class="page">
    <div class="container">
        <h2>Projects</h2>
        {% for project in site.data.projects %}
        <div class="project-item">
            <div class="project-title">{{ project.title }}</div>
            {% if project.status %}
            <div class="publication-status">{{ project.status }}</div>
            {% endif %}
            <div class="project-description">{{ project.description }}</div>
            
            {% if project.highlights %}
            <ul class="highlights">
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
                <a href="{{ project.github }}" target="_blank" rel="noopener noreferrer">GitHub</a>
                {% endif %}
                {% if project.demo %}
                <a href="{{ project.demo }}" target="_blank" rel="noopener noreferrer">Live Demo</a>
                {% endif %}
            </div>
        </div>
        {% endfor %}
    </div>
</div>

<!-- Publications Page -->
<div id="publications" class="page">
    <div class="container">
        <h2>Publications & Research</h2>
        {% for pub in site.data.publications %}
        <div class="publication-item">
            <div class="publication-title">{{ pub.title }}</div>
            <div class="publication-status">{{ pub.status }} • {{ pub.year }}</div>
            <div class="project-description">{{ pub.description }}</div>
            
            {% if pub.highlights %}
            <ul class="highlights">
                {% for highlight in pub.highlights %}
                <li>{{ highlight }}</li>
                {% endfor %}
            </ul>
            {% endif %}
            
            {% if pub.technologies %}
            <div class="tech-tags">
                {% for tech in pub.technologies %}
                <span class="tech-tag">{{ tech }}</span>
                {% endfor %}
            </div>
            {% endif %}
        </div>
        {% endfor %}
    </div>
</div>

<!-- Skills Page -->
<div id="skills" class="page">
    <div class="container">
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
    </div>
</div>

<!-- Achievements Page -->
<div id="achievements" class="page">
    <div class="container">
        <h2>Achievements</h2>
        <div style="margin-bottom: 2rem;">
            <h3 style="color: var(--accent-color); margin-bottom: 1.5rem;">Awards & Competitions</h3>
            {% for achievement in site.data.achievements %}
            <div class="achievement-item">
                <div class="achievement-title">{{ achievement.title }}</div>
                <div class="achievement-date">{{ achievement.date }}</div>
                <div class="achievement-description">{{ achievement.description }}</div>
            </div>
            {% endfor %}
        </div>

        <div>
            <h3 style="color: var(--accent-color); margin-bottom: 1.5rem;">Certifications</h3>
            {% for cert in site.data.certifications %}
            <div class="achievement-item">
                <div class="achievement-title">{{ cert.title }}</div>
                <div class="achievement-date">{{ cert.issuer }} • {{ cert.date }}</div>
                <div class="achievement-description">{{ cert.description }}</div>
            </div>
            {% endfor %}
        </div>
    </div>
</div>
