---
title: Supporters
layout: multisection
---
<section>

<h1>{{page.title}}</h1>

OWASP AppSec Europe would like to thank the following supporters for helping to spread the word about our European conference 17<sub>th</sub> - 21<sub>th</sub> of June, 2018.
 
<a href="contact">Let us know</a> if you would like to become a supporter of AppSec Europe. There are no finances required to be a supporter, essentially the arrangement is:
<ul>
<li>Supporters commit to sending (at least 3) communications (e-mail/twitter/linkedin/etc) to their groups regarding the AppSec conference.</li>
<li>Copy us in the first communication, provide us with your logo and URL and we will add that to the supporters page on the conference website.</li>
</ul>
Please note that supporters are not sponsors of the AppSec EU conference, for further information please see the bottom of this page.

</section>
<section class="supporters">
{% for supporter in site.data.supporters %}
  <a style="background-image: url(/assets/images/supporters/{{supporter.logo}})" href="{{supporter.url}}" title="{{supporter.name}}"></a>
{% endfor %}
</section>
<section>
 
 
<h3>Further information on AppSec EU supporters</h3>

<ul>
<li>Supporters can be from any industry, or any business type.  Supporters can be start-ups, enterprises, marketers, websites, journalists, etc.  There is no minimum size to the supporters distribution lists or followers.</li>
<li>Supporter logos will be displayed on the supporters page of the AppSec EU conference website, and will remain part of the website after the conference has ended.</li>
<li>Supporters will be organizations, and not individuals.</li>
<li>Supporters will provide logos and links relevant to their organization, and can be to any particular marketing material.</li>
<li>Supporters do not enjoy any of the privileges of being a sponsor of AppSec EU.  Supporters do not have their logo added to the conference brochure, complementary conference tickets, or have booths at the sponsor hall.</li>
</ul>
</section>
