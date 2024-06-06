addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const path = url.pathname

  const targetUrl = `https://www.startech.com.bd${path}`

  const response = await fetch(targetUrl, {
  })

  if (!response.ok) {
    return new Response("Failed to fetch content", { status: response.status })
  }

  const contentType = response.headers.get('content-type') || ''

  if (!contentType.includes('text/html')) {
    return new Response(response.body, {
      status: response.status,
      headers: response.headers
    })
  }

  let body = await response.text()
  body = body.replace(
    /<base\s+href=["']https:\/\/www\.startech\.com\.bd\/["']\s*\/?>/i,
    `<base href="https://CCTV-Cameras-price-in-Bangladesh.github.io" />`
  )
  body = body.replace(
    /<head>/i,
    '<head><meta name="google-site-verification" content="car4et3auS8pHMOsP-5lwXT-RU0tjS0AOKL06axWjsk" />'
  )
  // Replace all occurrences of URLs to point to the current website's directory
  const origin = url.origin

  // Handle relative and absolute URLs in href and src attributes
  body = body.replace(/(href|src)=["']\/([^"']+)["']/gi, `$1="${origin}/$2"`)
  body = body.replace(/(href|src)=["']https:\/\/www.startech.com.bd\/([^"']+)["']/gi, `$1="${origin}/$2"`)
  body = body.replace(/<section class="after-header p-tb-10">[\s\S]*?<\/section>/i, '')
  body = body.replace(/<script>[^<]*?window\.dataLayer[^<]*?<\/script>/gi, '')
  body = body.replace(/<script>[^<]*?connect\.facebook\.net[^<]*?<\/script>/gi, '')
  body = body.replace(/<script[^>]*src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-2BV6E3DJTL"[^>]*><\/script>/gi, '')
  
  body = body.replace(/<section class="after-header p-tb-10">[\s\S]*?<\/section>/i, '')

  // Remove the <li> elements containing the links to "Account" and "Login"
  body = body.replace(/<li><a href="https:\/\/CCTV-Cameras-price-in-Bangladesh\.github\.io\/account\/account">Account<\/a><\/li>/i, '')
  body = body.replace(/<li><a href="https:\/\/CCTV-Cameras-price-in-Bangladesh\.github\.io\/account\/login">Login<\/a><\/li>/i, '')

  const newJsonLd = `{
    "@context": "http://schema.org",
    "@type": "WebSite",
    "url": "https://CCTV-Cameras-price-in-Bangladesh.github.io/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://CCTV-Cameras-price-in-Bangladesh.github.io/product/search?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }`
 
  body = body.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, `<script type="application/ld+json">${newJsonLd}</script>`)
  body = body.replace(/<form action="https:\/\/www\.startech\.com\.bd\/account\/login" method="post" enctype="multipart\/form-data">/i, '<form action="https://CCTV-Cameras-price-in-Bangladesh.github.io/account/login" method="post" enctype="multipart/form-data">')

  body = body.replace(
    /<a class="brand" href="https:\/\/www.startech.com.bd\/"><img src="https:\/\/CCTV-Cameras-price-in-Bangladesh.github.io\/image\/catalog\/logo.png" title="Star Tech Ltd " width="144" height="164" alt="Star Tech Ltd "><\/a>/gi,
    `<img src="https://blogger.googleusercontent.com/img/a/AVvXsEhfKG5NTDSBTw8jtyqDZ6OeFGwSQ6DoUkEDm7_gBk5rnkAg-F1Iiv2p3YdI9fnJg1hNfD1pk-RfJTrPsvKE5gtdGyKCtNS2gK969W-X35_1t_Kku2_Po3SfsgyMpksOJ8UtBHpv5ezGYF8-IlBW_t-g1NY70L-KccRObeZt8g2TlbDPHnBs4f8icOg=s150" title="CCTV Shop" alt="CCTV Shop" width="150" height="150" />`
  ) 
  body = body.replace(/<li><a href="https:\/\/CCTV-Cameras-price-in-Bangladesh\.github\.io\/account\/account">Account<\/a><\/li>/i, '')
  body = body.replace(/<li><a href="https:\/\/CCTV-Cameras-price-in-Bangladesh\.github\.io\/account\/login">Login<\/a><\/li>/i, '')
  body = body.replace(/rezwanur@startechbd.com/g, 'cctvcamerabdctg@gmail.com')
  body = body.replace(/16793/g, '+8801880663885')
  body = body.replace(/09678002003/g, '+8801880663885')

  
  body = body.replace(
    /<li><a href="https:\/\/CCTV-Cameras-price-in-Bangladesh\.github\.io\/star-point-policy">Star Point Policy<\/a><\/li>/gi,
    ''
  )
 

  body = body.replace(
    /<div class="address">[\s\S]*?<\/div>/gi,
    ''
  )

  body = body.replace(
    /<div class="phone">[\s\S]*?<\/div>/gi,
    ''
  )
  body = body.replace(
    /<\/nav>/i,
    `</nav><div style="background-color: white;"><marquee><h1><br/>আমর&#2494; স&#2495;স&#2495;ট&#2495;ভ&#2495; ক&#2509;য&#2494;ম&#2503;র&#2494;, ল&#2509;য&#2494;পটপ, কম&#2509;প&#2495;উট&#2494;র স&#2503;টআপ এব&#2434; ম&#2503;র&#2494;মত ও ব&#2495;ক&#2509;রয&#2492; পর&#2495;ষ&#2503;ব&#2494; প&#2509;রদ&#2494;ন কর&#2495; এখনই কল কর&#2497;ন: 8801880663885</h1><br/><h2>we provide cctv camera,laptop,computer setup and repair and selling service call now:8801880663885</h2><br/></marquee></div>`
  )
  body = body.replace(
    /<div class="sliding_text_wrap">[\s\S]*?<\/div>/i,
    ''
  )
  body = body.replace(
    /<div class="map-link">[\s\S]*?<\/div>/gi,
    ''
  )

  body = body.replace(
    /<link href="https:\/\/CCTV-Cameras-price-in-Bangladesh.github.io\/image\/catalog\/logo.png" rel="icon" \/>/gi,
    `<link href="https://blogger.googleusercontent.com/img/a/AVvXsEhfKG5NTDSBTw8jtyqDZ6OeFGwSQ6DoUkEDm7_gBk5rnkAg-F1Iiv2p3YdI9fnJg1hNfD1pk-RfJTrPsvKE5gtdGyKCtNS2gK969W-X35_1t_Kku2_Po3SfsgyMpksOJ8UtBHpv5ezGYF8-IlBW_t-g1NY70L-KccRObeZt8g2TlbDPHnBs4f8icOg=s150" rel="icon" />`
  )
 

  body = body.replace(/Star Tech/gi, 'CCTV Shop')
  body = body.replace(/স্টার টেক/gi, 'সিসিটিভি শপ ')
  body = body.replace(/webteam@startechbd.com/gi, 'cctvcamerabdctg@gmail.com')
  body = body.replace(/rezwanur@startech.com.bd/gi, 'cctvcamerabdctg@gmail.com')

  body = body.replace(
    /<div class="cmpr-field">[\s\S]*?<\/div>/gi,
    ''
  )

  body = body.replace(
    /<img class="logo" src="https:\/\/CCTV-Cameras-price-in-Bangladesh\.github\.io\/image\/catalog\/logo\.png" alt="Logo">/gi,
    `<img class="logo" src="https://blogger.googleusercontent.com/img/a/AVvXsEhfKG5NTDSBTw8jtyqDZ6OeFGwSQ6DoUkEDm7_gBk5rnkAg-F1Iiv2p3YdI9fnJg1hNfD1pk-RfJTrPsvKE5gtdGyKCtNS2gK969W-X35_1t_Kku2_Po3SfsgyMpksOJ8UtBHpv5ezGYF8-IlBW_t-g1NY70L-KccRObeZt8g2TlbDPHnBs4f8icOg=s150" alt="Logo">`
  )

  body = body.replace(
    /<li><a href="https:\/\/CCTV-Cameras-price-in-Bangladesh\.github\.io\/emi-terms">EMI Terms<\/a><\/li>/gi,
    ''
  )

  body = body.replace(
    /<a href="https:\/\/CCTV-Cameras-price-in-Bangladesh\.github\.io\/information\/offer" class="ac h-offer-icon">[\s\S]*?<\/a>/gi,
    ''
  )

  body = body.replace(
    /<a href="https:\/\/CCTV-Cameras-price-in-Bangladesh\.github\.io\/happy-hour" class="ac h-offer-icon">[\s\S]*?<\/a>/gi,
    ''
  )

  body = body.replace(
    /<button class="btn st-outline">View Comparison<\/button>/gi,
    ''
  )

  body = body.replace(
    /<div class="col-md-12 col-lg-3">[\s\S]*?<\/div>/gi,
    ''
  )

  body = body.replace(
    /<div class="ads loaded">[\s\S]*?<\/div>/gi,
    ''
  )

  body = body.replace(
    /<div class="slide">[\s\S]*?<\/div>/gi,
    ''
  )

  body = body.replace(
    /<div class="social-footer">[\s\S]*?<\/div>/gi,
    ''
  )

  body = body.replace(
    /<a[^>]*?class="store-locator-btn[^>]*>[\s\S]*?<\/a>/gi,
    ''
  )

  body = body.replace(
    /<h5>16793<\/h5>/gi,
    '<h5>+8801880663885</h5>'
  )

  body = body.replace(
    /<div class="social-links">[\s\S]*?<\/div>/gi,
    ''
  )

  body = body.replace(
    /<title>Star Tech - Leading Computer, Laptop &amp; Gadget Shop in Bangladesh<\/title>/gi,
    '<title>CCTV Shop - Leading Computer, Laptop &amp; Gadget Shop in Bangladesh</title>'
  )

  // Remove the specified <div> blocks
  body = body.replace(
    /<div><span class="blurb">Raise a Complain<\/span><p class="m-hide">Share your experience<\/p><\/div><\/a><\/div>/gi,
    ''
  )

  body = body.replace(
    /<div class="footer-block org-info">[\s\S]*?<\/div>/gi,
    ''
  )

  body = body.replace(
    /<div><span class="blurb">Online Support<\/span><p class="m-hide">Get Online Support<\/p><\/div><\/a><\/div>/gi,
    ''
  )

  body = body.replace(
    /<div><span class="blurb">Servicing Center<\/span><p class="m-hide">Repair Your Device<\/p><\/div><\/a><\/div>/gi,
    ''
  )

  body = body.replace(
    /<div class="col-lg-3 col-md-6 col-sm-6">[\s\S]*?<\/div>/gi,
    ''
  )

  body = body.replace(
    /<p>© 2023 Star Tech Ltd \| All rights reserved<\/p>/gi,
    '<p>© 2024 CCTV Shop Ltd | All rights reserved</p>'
  )

  body = body.replace(
    /<div class="row r-lnk-wrap m-home">[\s\S]*?<\/div>/gi,
    ''
  )

  const metaTag = ''
  body = body.replace(/<head>/i, `<head>${metaTag}`)

  body = body.replace(
    /<p>Powered By: Star Tech<\/p>/gi,
    '<p>Powered By: CCTV Shop</p>'
  )


  body = body.replace(
    /<a href="https:\/\/www.startech.com.bd\//gi,
    `<a href="https://CCTV-Cameras-price-in-Bangladesh.github.io/`
  )

  // Return the modified content
  return new Response(body, {
    status: response.status,
    headers: { 'Content-Type': 'text/html' }
  })
}
