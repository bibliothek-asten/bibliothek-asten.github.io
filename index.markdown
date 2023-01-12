---
layout: home
lang: de
---

<section class="bg-dark" id="news">
    <div class="container">
        <h2>Aktuelles</h2>
        {% if site.posts.size > 0 %}
        <div class="row">
            <div class="col-lg-12 col-md-12">
                {% for post in site.posts limit:3 %}
                    {% include post_preview.html %}
                {% endfor %}
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 text-right">
                <a href="{{ site.data.links.news }}" id="btn-blog" class="btn btn-xl btn-slim-primary blog-button">Mehr Neuigkeiten</a>
            </div>
        </div>
        {% else %}
        <div class="row"><div class="col-lg-12"><h4>Tut uns Leid, im Moment stehen keine Beiträge zur Verfügung.</h4></div></div>
        {% endif %}
    </div>
</section>

<section class="bg-primary-dark" id="rental">
    <div class="container text-justify">
        <h2 class="section-heading">Verleih</h2>
        <div class="row">
            <div class="col-lg-12 col-md-12">
                 <p class="text-justify">
                 <br/>
                 Wir, von der öffentlichen Bibliothek der Pfarre Asten sind stolz, Ihnen einen großen Medienbestand anbieten zu können: 5.918 Bücher, 462 Comics, Mangas und Graphic Novels, 354 Hörbücher für Kinder, 21 Zeitschriftenabos, 151 Spiele und 517 DVDs (Stand Jänner 2023).
                 <br/><br/>
                 </p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12">                
                <table class="spread-table">
                    <tr><th>Medienart</th><th>Kosten</th><th>Verleihdauer</th><th>Überziehungsgebühr</th></tr>
                    <tr><td>Bücher Kinder</td><td>€ 0,35</td><td>4 Wochen</td><td>€ 0,20 / Woche</td></tr>
                    <tr><td>Bücher Erwachsene</td><td>€ 0,50</td><td>4 Wochen</td><td>€ 0,20 / Woche</td></tr>
                    <tr><td>Comics &amp; Mangas</td><td>€ 0,35 / 0,50</td><td>2 Wochen</td><td>€ 0,20 / Woche</td></tr>
                    <tr><td>Hörbücher</td><td>€ 1,00</td><td>2 Wochen</td><td>€ 0,50 / Woche</td></tr>
                    <tr><td>Spiele</td><td>€ 1,00</td><td>2 Wochen</td><td>€ 0,50 / Woche</td></tr>
                    <tr><td>Zeitschriften</td><td>€ 0,25</td><td>1 Woche</td><td>€ 0,25 / Woche</td></tr>
                    <tr><td>DVDs / BluRays</td><td>€ 2,00</td><td>1 Woche</td><td>€ 2,00 / Woche</td></tr>                    
                </table>
                <br/>
            </div>            
        </div>
    </div>
</section>

<section class="bg-secondary" id="contact">
    <div class="container text-justify">
        <h2 class="section-heading">Kontakt</h2>
        <div class="row contact-info">
            <div class="col-lg-6 col-md-12">
                <h4>Öffentliche Bibliothek der Pfarre Asten</h4>
                <table class="info-table">
                    <tr><td>Adresse:</td><td>Marktplatz 1, 4481 Asten</td></tr>
                    <tr><td>Route:</td><td><a target="_blank" href="https://www.google.com/maps/dir//Marktpl.+1,+4481+Asten/@48.2199105,14.4209009,19z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4773bbe452e1f383:0x5631eeb7f21c722!2m2!1d14.4209009!2d48.2199105!3e0">Google Maps</a></td></tr>
                    <tr><td>Tel.:</td><td>+43 7224 65516-41</td></tr>                  
                    <tr><td>Mail:</td><td><a href="mailto:asten@bvoe.at">asten@bvoe.at</a></td></tr>
                </table>
            </div>
            <div class="col-lg-6 col-md-12">
                <h4>Öffnungszeiten</h4>
                <table class="info-table">
                    <tr><td>Montag</td><td>17:30 - 19:30</td></tr>
                    <tr><td>Dienstag</td><td>16:00 - 18:00</td></tr>                    
                    <tr><td>Freitag</td><td>09:00 - 11:00</td></tr>
                    <tr><td>Sonntag</td><td>09:00 - 11:00</td></tr>
                </table>
            </div>
        </div>
    </div>
</section>

<section class="map-section">
    <div id="map"></div>
</section>