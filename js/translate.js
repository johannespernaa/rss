	//Build your UI through this 
   var arrLang = {
       'fi': {
	    'row1heading': 'Uusimmat akateemiset',
		'feed1': 'Julkaisut',
		'feed2': 'Aktiviteetit',
		'feed3': 'Projektit',
		'row2heading': 'Blogitekstejä',
		'blog1': 'Suomeksi',
		'blog2': 'Englanniksi',
		'about': 'Tiedot',
		'back': 'Takaisin',
		'v1.2': 'Lippujen suurentaminen, CSS-muutoksia',
		'v1.1': 'Erilliset js-tiedostot, kielituki syötteille, RSS-muutoksia',
      },
	  'sv': {
		'row1heading': 'Senaste akademiska',
		'feed1': 'Publikationer',
		'feed2': 'Aktiviteter',
		'feed3': 'Projekt',
	    	'row2heading': 'Blogginlägg',
        	'blog1': 'På finska',
		'blog2': 'På engelska',
		'about': 'Information',
		'back': 'Tillbaka',
		'v1.2': 'Flaggförstoring, CSS ändringar',
		'v1.1': 'Separera js-filer, språkstöd för flöden, RSS förändring',
      },
      'en': {
		'row1heading': 'Latest academic',
		'feed1': 'Publications',
		'feed2': 'Activities',
		'feed3': 'Projects',
		'row2heading': 'Blog posts',
		'blog1': 'In Finnish',
		'blog2': 'In English',
		'about': 'About',
		'back': 'Back',
		'v1.2': 'Flag magnification, CSS changes',
		'v1.1': 'Separate js files, language support for feeds, RSS changes',
      },
    };
	
	// Processing translation
    $(function() {
      $('.translate').click(function() {
        var lang = $(this).attr('id');

        $('.lang').each(function(index, item) {
          $(this).text(arrLang[lang][$(this).attr('key')]);
        });
      });
    });