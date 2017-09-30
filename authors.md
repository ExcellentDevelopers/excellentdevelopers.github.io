---
layout: default
---
# Authors
<div class="main-content">
    <div>
        Some text...
    </div>
    <div class="row inline-columns authors-grid">
        {% for author in site.data.authors%}
            <div class="col-sm-3 col-sm-offset-0 col-xs-4 col-xs-offset-0">
                {% include site-authors.html author=author %}
                <a href="{{ author.web }}" class="contact-author" target="_blank">Contact</a>
            </div>
        {% endfor %}
    </div>
</div>
