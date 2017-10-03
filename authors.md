---
layout: default
---
# Authors
<div class="main-content">
    <div clas="authors-page-text">
    </div>
    <div class="row inline-columns authors-grid">
        {% for author in site.data.users%}
            <div class="col-sm-3 col-sm-offset-0 col-xs-4 col-xs-offset-0">
                {% include site-authors.html author=author %}
            </div>
        {% endfor %}
    </div>
</div>
