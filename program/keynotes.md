---
title: Keynote speakers
---
# {{page.title}}

<div class="keynote-full">
	<ul>
	{% for member in site.data.keynotespeakers %}
		{% if member.name %}
		<li>
			<div style="background-image: url(/assets/images/keynotes/{{member.image | default: 'owasp_logo.png'}});{{member.style}};"></div>
			<h4><strong>{{member.name}}</strong> | {{member.company}}</h4>
			{% if member.uri %}<p><a href="{{member.uri}}">{{member.title}}</a></p>{% endif %}
			<p>
				{{member.description}}
			</p>
		</li>
		{% endif %}
	{% endfor %}
	</ul>
</div>