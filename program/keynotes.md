---
title: Keynotes
---
## {{page.title}}

<div class="keynote-full">
	
	<ul>
	{% for member in site.data.keynotespeakers %}
		{% if member.name %}
		<li>
			<img style="background-image: url(/assets/images/keynotes/{{member.image | default: 'owasp_logo.png'}});{{member.style}};">
			<h4>{{member.name}}</h4>
			<p>
				{{member.description}}
			</p>
		</li>
		{% endif %}
	{% endfor %}
	</ul>
</div>