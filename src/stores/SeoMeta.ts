export const seoMeta = (langweb: string, titleweb: string, desciptionweb: string, imgweb: string, keywords: string) => {
	const ogLocaleMeta = document.querySelector('meta[property="og:locale"]');
	if (ogLocaleMeta) {
		document.documentElement.lang = langweb;
		ogLocaleMeta.setAttribute('content', langweb);
	}

	const ogTitleMeta = document.querySelector('meta[property="og:title"]');
	if (ogTitleMeta) {
		document.title = titleweb;
		ogTitleMeta.setAttribute('content', titleweb);
	}

	const metaDescription = document.querySelector('meta[name="description"]');
	const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
	if (metaDescription && ogDescriptionMeta) {
		metaDescription.setAttribute('content', desciptionweb);
		ogDescriptionMeta.setAttribute('content', desciptionweb);
	}

	const ogImageMeta = document.querySelector('meta[property="og:image"]');
	if (ogImageMeta) {
		ogImageMeta.setAttribute('content', imgweb);
	}

	const keywordsMeta = document.querySelector('meta[name="keywords"]');
	if (keywordsMeta) {
		keywordsMeta.setAttribute('content', keywords);
	}
};