---
layout: home
lang: en
permalink: en/
---

<section class="bg-dark" id="news">
    <div class="container">
        <h2>News (in German language only)</h2>
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
                <a href="{{ site.data.links.news }}" id="btn-blog" class="btn btn-xl btn-slim-primary blog-button">More News</a>
            </div>
        </div>
        {% else %}
        <div class="row"><div class="col-lg-12"><h4>We're sorry! There seem to be no posts available right at the moment.</h4></div></div>
        {% endif %}
    </div>
</section>

<section class="bg-primary-dark" id="rental">
    <div class="container text-justify">
        <h2 class="section-heading">Renting</h2>
        <div class="row">
            <div class="col-lg-12 col-md-12">
                 <p class="text-justify">
                 <br/>
                We, from the public library of the parish of Asten are proud to offer you a large media stock: 5,918 books, 462 comics, mangas and graphic novels, 354 audio books for children, 21 magazine subscriptions, 151 games and 517 DVDs (as of January 2023).
                 <br/><br/>
                 </p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12">                
                <table class="spread-table">
                    <tr><th>Type of media</th><th>Rental Fee</th><th>Rental period</th><th>Overdraft fee</th></tr>
                    <tr><td>Books Kids</td><td>€ 0,35</td><td>4 Weeks</td><td>€ 0,20 / Week</td></tr>
                    <tr><td>Books Adult</td><td>€ 0,50</td><td>4 Weeks</td><td>€ 0,20 / Week</td></tr>
                    <tr><td>Comics &amp; Mangas</td><td>€ 0,35 / 0,50</td><td>2 Weeks</td><td>€ 0,20 / Week</td></tr>
                    <tr><td>Audio books</td><td>€ 1,00</td><td>2 Weeks</td><td>€ 0,50 / Week</td></tr>
                    <tr><td>Board Games</td><td>€ 1,00</td><td>2 Weeks</td><td>€ 0,50 / Week</td></tr>
                    <tr><td>Magazines</td><td>€ 0,25</td><td>1 Week</td><td>€ 0,25 / Week</td></tr>
                    <tr><td>DVDs / BluRays</td><td>€ 2,00</td><td>1 Week</td><td>€ 2,00 / Week</td></tr>                    
                </table>
                <br/>
            </div>            
        </div>
    </div>
</section>

<section class="bg-secondary" id="contact">
    <div class="container text-justify">
        <h2 class="section-heading">Contact</h2>
        <div class="row contact-info">
            <div class="col-lg-6 col-md-12">
                <h4>Öffentliche Bibliothek der Pfarre Asten</h4>
                <table class="info-table">
                    <tr><td>Address:</td><td>Marktplatz 1, 4481 Asten</td></tr>
                    <tr><td>Route:</td><td><a target="_blank" href="https://www.google.com/maps/dir//Marktpl.+1,+4481+Asten/@48.2199105,14.4209009,19z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4773bbe452e1f383:0x5631eeb7f21c722!2m2!1d14.4209009!2d48.2199105!3e0">Google Maps</a></td></tr>
                    <tr><td>Tel.:</td><td>+43 7224 65516-41</td></tr>                  
                    <tr><td>Mail:</td><td><a href="mailto:asten@bvoe.at">asten@bvoe.at</a></td></tr>
                </table>
            </div>
            <div class="col-lg-6 col-md-12">
                <h4>Opening hours</h4>
                <table class="info-table">
                    <tr><td>Monday</td><td>17:30 - 19:30</td></tr>
                    <tr><td>Tuesday</td><td>16:00 - 18:00</td></tr>                    
                    <tr><td>Friday</td><td>09:00 - 11:00</td></tr>
                    <tr><td>Sunday</td><td>09:00 - 11:00</td></tr>
                </table>
            </div>
        </div>
    </div>
</section>

<section class="map-section">
    <div id="map"></div>
</section>