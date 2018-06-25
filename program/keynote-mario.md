---
title: |
  Keynote: Mario Heiderich - XSS is dead. We just don't get it.
---
# Keynote: XSS is dead. We just don't get it.

XSS is about twenty years old by now and appears to be alive and kicking. JavaScript alerts are still popping left and right and bug bounty programs are drowning in submissions.

But is XSS really still a problem of our time? Or is it just an undead foul-smelling zombie vulnerability from the dark ages of string concatenation that doesn't wanna perish because we are just too fricken stubborn?

This talk will be an hour-long rant (yes, swearwords, leave your kids at home), paired with a stroll through the history of XSS and related issues. We will go back into the year 1998 and see how it all started, how things developed, what we tried to do against it and how hard we failed every single time. We will also look at the future and predict what is about to happen next. Mostly nothing - but good to know, right?

We will not only look at our own failures but also see how the entire infrastructure and monetization of the web contributed to us being simply not capable or even just willing to fix XSS. And we might as well see if any of those behavioral and structural patterns can be compared to other human failures - and see if there is something we all can learn. Or, at least, agree that we knew it all along and are all on the same page.

{% assign keynote = site.data.keynotespeakers[0] %}
<aside class="keynote">
	<div class="image" style="background-image: url(/assets/images/keynotes/{{keynote.image}});{{keynote.style}}; background-position: center top;"></div>
	<div>
		<h3>{{keynote.name}} | {{keynote.company}}</h3>
		{{keynote.description}}
	</div>
</aside>