	//Add your feeds here and change FeedEk settings as you wish.
		$(function () {
			//Row 1 starts
			$('#feed1fi').FeedEk({
				FeedUrl: 'https://researchportal.helsinki.fi/fi/persons/johannes-pernaa/publications/?format=rss',
				MaxCount : 4,
				ShowDesc : false,
				ShowPubDate:true,
				TitleLinkTarget:'_blank',
				DateFormat: 'dd/MM/yyyy',
				DateFormatLang:'fi'
			});
			$('#feed1sv').FeedEk({
				FeedUrl: 'https://researchportal.helsinki.fi/sv/persons/johannes-pernaa/publications/?format=rss',
				MaxCount : 4,
				ShowDesc : false,
				ShowPubDate:true,
				TitleLinkTarget:'_blank',
				DateFormat: 'dd/MM/yyyy',
				DateFormatLang:'fi'
			});
			$('#feed1en').FeedEk({
				FeedUrl: 'https://researchportal.helsinki.fi/en/persons/johannes-pernaa/publications/?format=rss',
				MaxCount : 4,
				ShowDesc : false,
				ShowPubDate:true,
				TitleLinkTarget:'_blank',
				DateFormat: 'dd/MM/yyyy',
				DateFormatLang:'fi'
			});
			$('#feed2fi').FeedEk({
				FeedUrl: 'https://researchportal.helsinki.fi/fi/persons/johannes-pernaa/activities/?format=rss',
				MaxCount : 4,
				ShowDesc : false,
				ShowPubDate:true,
				DescCharacterLimit:100,
				TitleLinkTarget:'_blank',
				DateFormat: 'dd/MM/yyyy',
				DateFormatLang:'fi'
			});
				$('#feed2sv').FeedEk({
				FeedUrl: 'https://researchportal.helsinki.fi/sv/persons/johannes-pernaa/activities/?format=rss',
				MaxCount : 4,
				ShowDesc : false,
				ShowPubDate:true,
				DescCharacterLimit:100,
				DescCharacterLimit:100,
				TitleLinkTarget:'_blank',
				DateFormat: 'dd/MM/yyyy',
				DateFormatLang:'fi'
			});
				$('#feed2en').FeedEk({
				FeedUrl: 'https://researchportal.helsinki.fi/en/persons/johannes-pernaa/activities/?format=rss',
				MaxCount : 4,
				ShowDesc : false,
				ShowPubDate:true,
				DescCharacterLimit:100,
				TitleLinkTarget:'_blank',
				DateFormat: 'dd/MM/yyyy',
				DateFormatLang:'fi'
			});
			$('#feed3fi').FeedEk({
				FeedUrl: 'https://researchportal.helsinki.fi/fi/persons/johannes-pernaa/projects/?format=rss',
				MaxCount : 4,
				ShowDesc : false,
				ShowPubDate:true,
				DescCharacterLimit:100,
				TitleLinkTarget:'_blank',
				DateFormat: 'dd/MM/yyyy',
				DateFormatLang:'fi'
			});
			$('#feed3sv').FeedEk({
				FeedUrl: 'https://researchportal.helsinki.fi/sv/persons/johannes-pernaa/projects/?format=rss',
				MaxCount : 4,
				ShowDesc : false,
				ShowPubDate:true,
				DescCharacterLimit:100,
				TitleLinkTarget:'_blank',
				DateFormat: 'dd/MM/yyyy',
				DateFormatLang:'fi'
			});
			$('#feed3en').FeedEk({
				FeedUrl: 'https://researchportal.helsinki.fi/en/persons/johannes-pernaa/projects/?format=rss',
				MaxCount : 4,
				ShowDesc : false,
				ShowPubDate:true,
				DescCharacterLimit:100,
				TitleLinkTarget:'_blank',
				DateFormat: 'dd/MM/yyyy',
				DateFormatLang:'fi'
			});
			//Row 2 starts
			$('#blog1').FeedEk({
				FeedUrl: 'https://peda.net/id/00a87208e:atom',
				MaxCount : 4,
				ShowDesc : false,
				ShowPubDate:true,
				DescCharacterLimit:100,
				TitleLinkTarget:'_blank',
				DateFormat: 'dd/MM/yyyy',
				DateFormatLang:'fi'
			});
				$('#blog2').FeedEk({
				FeedUrl: 'https://johannespernaa.kuvat.fi/blog/rss/',
				MaxCount : 4,
				ShowDesc : false,
				ShowPubDate:true,
				DescCharacterLimit:100,
				TitleLinkTarget:'_blank',
				DateFormat: 'dd/MM/yyyy',
				DateFormatLang:'fi'
			});
		});