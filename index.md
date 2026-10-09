---
layout: default
---
<section id="home" class="portfolio-section" aria-labelledby="about-heading">
    <div class="container">
        <div class="hero">
            <div class="hero-text">
                <p class="eyebrow">AI research & aerospace engineering</p>
                <h1 id="about-heading">{{ site.data.site.name }}</h1>
                <p class="tagline">{{ site.data.site.title }}</p>
                <div class="bio">
                    <p>{{ site.data.site.about }}</p>
                    <p>{{ site.data.site.about_research }}</p>
                    <p class="research-interests">{{ site.data.site.interests }}</p>
                </div>
                <div class="cta-buttons">
                    <a href="#publications" class="btn btn-primary">Explore my research <span aria-hidden="true">↓</span></a>
                    <a href="#achievements" class="btn btn-secondary">CanSat & achievements</a>
                    {% if site.data.site.contact.resume %}<a href="{{ site.data.site.contact.resume | relative_url }}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Resume</a>{% endif %}
                </div>
                <div class="email-contact hero-email">
                    <span class="email-address">{{ site.data.site.contact.email }}</span>
                    <button type="button" class="copy-email text-button" data-email="{{ site.data.site.contact.email }}">Copy email</button>
                    <span class="copy-status" role="status" aria-live="polite"></span>
                </div>
            </div>
            <div class="hero-portrait">
                <div class="hero-photo"><img src="{{ '/assets/profile.jpeg' | relative_url }}" alt="Mihir Mashruwala" width="300" height="300" fetchpriority="high"></div>
                <p class="portrait-caption">ML engineer<br>Undergraduate researcher.</p>
                <div class="focus-list"><span>Multilingual NLP</span><span>Efficient language models</span><span>CanSat systems</span></div>
            </div>
        </div>
        <div class="highlights-strip" aria-label="Selected highlights">
            <a href="#education"><strong>{{ site.data.education[0].cgpa }}</strong><span>Undergraduate CGPA</span></a>
            <a href="#achievements"><strong>10th worldwide</strong><span>International CanSat · 2026</span></a>
            <a href="#achievements"><strong>National champions</strong><span>IN-SPACe CanSat · 2025</span></a>
            <a href="#publications"><strong>AI & aerospace</strong><span>Research and engineering</span></a>
        </div>
    </div>
</section>

<section id="publications" class="portfolio-section" aria-labelledby="publications-heading">
    <div class="container">
        <div class="section-heading"><p class="eyebrow">01 / Research</p><h2 id="publications-heading">Research & Manuscripts</h2><p>Multilingual language models, graph learning, and multimodal perception. Current research and manuscript submission status.</p></div>

        <div class="card-grid">
        {% for pub in site.data.publications %}
            <article class="card research-card">
                <p class="content-meta">{{ pub.status }} · {{ pub.year }}</p>
                <h3>{{ pub.title }}</h3>
                <p>{{ pub.description }}</p>
{% if pub.highlights %}<ul class="highlights">{% for highlight in pub.highlights %}<li>{{ highlight }}</li>{% endfor %}</ul>{% endif %}{% if pub.technologies %}<div class="tech-tags">{% for tag in pub.technologies %}<span class="tech-tag">{{ tag }}</span>{% endfor %}</div>{% endif %}
                {% if pub.github %}<a class="card-link" href="{{ pub.github }}" target="_blank" rel="noopener noreferrer">View code ↗</a>{% endif %}
            </article>
        {% endfor %}
        </div>
    </div>
</section>

<section id="achievements" class="portfolio-section" aria-labelledby="achievements-heading">
    <div class="container">
        <div class="section-heading"><p class="eyebrow">02 / Recognition</p><h2 id="achievements-heading">Aerospace & Achievements</h2><p>CanSat design, mission integration, international competition results, and a registered industrial design.</p></div>

        <div class="card-grid">
        {% for achievement in site.data.achievements %}
            <article class="card achievement-card">
                <p class="content-meta">{{ achievement.date }}{% if achievement.issuer %} · {{ achievement.issuer }}{% endif %}</p>
                <h3>{{ achievement.title }}</h3>
                <div class="markdown-content">{{ achievement.description | markdownify }}</div>
{% if achievement.tags %}<div class="tech-tags">{% for tag in achievement.tags %}<span class="tech-tag">{{ tag }}</span>{% endfor %}</div>{% endif %}
                {% if achievement.url %}<a class="card-link" href="{{ achievement.url }}" target="_blank" rel="noopener noreferrer">{{ achievement.link_label | default: 'View Achievement' }} ↗</a>{% endif %}
            </article>
        {% endfor %}
        </div>
        <h3 class="subsection-heading">Certifications</h3>
        <div class="card-grid certification-grid">
        {% for cert in site.data.certifications %}
            <article class="card">
                <p class="content-meta">{{ cert.issuer }} · {{ cert.date }}</p>
                <h3>{{ cert.title }}</h3>
                <div class="markdown-content">{{ cert.description | markdownify }}</div>
{% if cert.tags %}<div class="tech-tags">{% for tag in cert.tags %}<span class="tech-tag">{{ tag }}</span>{% endfor %}</div>{% endif %}
                {% if cert.url %}<a class="card-link" href="{{ cert.url }}" target="_blank" rel="noopener noreferrer">View certificate ↗</a>{% endif %}
            </article>
        {% endfor %}
        </div>
    </div>
</section>

<section id="experience" class="portfolio-section" aria-labelledby="experience-heading">
    <div class="container">
        <div class="section-heading"><p class="eyebrow">03 / Experience</p><h2 id="experience-heading">Research, Industry & Leadership</h2><p>Applied machine learning, academic research, and hands-on engineering leadership.</p></div>

        <div class="card-grid">
        {% for exp in site.data.experience %}
            <article class="card">
                <p class="content-meta">{{ exp.dates }}</p>
                <h3>{{ exp.role }}</h3>
                <p class="institution">{{ exp.company }}</p>
                <p>{{ exp.description }}</p>
{% if exp.highlights %}<ul class="highlights">{% for highlight in exp.highlights %}<li>{{ highlight }}</li>{% endfor %}</ul>{% endif %}
            </article>
        {% endfor %}
        </div>
    </div>
</section>

<section id="projects" class="portfolio-section" aria-labelledby="projects-heading">
    <div class="container">
        <div class="section-heading"><p class="eyebrow">04 / Selected work</p><h2 id="projects-heading">Projects & Implementations</h2><p>Computer vision, AI-agent workflows, and the software infrastructure that supports them.</p></div>

        <div class="card-grid">
        {% for project in site.data.projects %}
            <article class="card project-card">
                {% if project.year %}<p class="content-meta">{{ project.status }} · {{ project.year }}</p>{% endif %}
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
{% if project.technologies %}<div class="tech-tags">{% for tag in project.technologies %}<span class="tech-tag">{{ tag }}</span>{% endfor %}</div>{% endif %}
                {% if project.highlights %}<details><summary>Technical details</summary>
{% if project.highlights %}<ul class="highlights">{% for highlight in project.highlights %}<li>{{ highlight }}</li>{% endfor %}</ul>{% endif %}
                </details>{% endif %}
                <div class="project-links">
                    {% if project.github %}<a href="{{ project.github }}" target="_blank" rel="noopener noreferrer">View code ↗</a>{% endif %}
                    {% if project.demo %}<a href="{{ project.demo }}" target="_blank" rel="noopener noreferrer">Live demo ↗</a>{% endif %}
                </div>
            </article>
        {% endfor %}
        </div>
    </div>
</section>

<section id="education" class="portfolio-section" aria-labelledby="education-heading">
    <div class="container">
        <div class="section-heading"><p class="eyebrow">05 / Academic background</p><h2 id="education-heading">Education</h2><p>Computer science, data science, and computational finance.</p></div>

        <div class="education-grid">
        {% for edu in site.data.education %}
            <article class="card {% if forloop.first %}primary-education{% endif %}">
                <p class="content-meta">{{ edu.dates }}</p>
                <h3>{{ edu.degree }}</h3>
                <p class="institution">{{ edu.institution }}</p>
                {% if edu.cgpa %}<p class="academic-result">CGPA: <strong>{{ edu.cgpa }}</strong></p>{% endif %}
                {% if edu.percentage %}<p class="academic-result">{{ edu.percentage }}</p>{% endif %}
{% if edu.highlights %}<ul class="highlights">{% for highlight in edu.highlights %}<li>{{ highlight }}</li>{% endfor %}</ul>{% endif %}
            </article>
        {% endfor %}
        </div>
    </div>
</section>

<section id="skills" class="portfolio-section" aria-labelledby="skills-heading">
    <div class="container">
        <div class="section-heading"><p class="eyebrow">06 / Toolkit</p><h2 id="skills-heading">Technical Skills</h2><p>Methods and tools used across my research and engineering projects.</p></div>

        <div class="skills-grid">
        {% for group in site.data.skills %}
            <div class="skill-category"><h3>{{ group.category }}</h3><ul class="skill-list">{% for skill in group.skills %}<li>{{ skill }}</li>{% endfor %}</ul></div>
        {% endfor %}
        </div>
    </div>
</section>
