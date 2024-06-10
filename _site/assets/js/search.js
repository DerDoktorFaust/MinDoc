// Based on a script by Kathie Decora : katydecorah.com/code/lunr-and-jekyll/

// Create the lunr index for the search
var index = elasticlunr(function () {
  this.addField('title')
  this.addField('author')
  this.addField('layout')
  this.addField('content')
  this.setRef('id')
});

// Add to this index the proper metadata from the Jekyll content










index.addDoc({
  title: "Introduction",
  author: null,
  layout: "default",
  content: "Introduction\n\nTHIS IS A TEST\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.1 Fusce eget condimentum ligula. Vivamus ultricies massa ac arcu ornare, sit amet pellentesque dolor consequat. Aliquam pellentesque ante nunc, ut sollicitudin arcu dapibus mattis. Nullam fermentum condimentum mi, et maximus nisl elementum a. Aenean ac tellus justo. Vivamus iaculis facilisis nunc, ac bibendum enim. Nullam eu convallis lacus. Fusce nulla ex, bibendum nec convallis et, rutrum in ipsum. Phasellus in elementum dolor. Fusce id iaculis dui, a lacinia nunc. In rhoncus fringilla nisi.\n\n\n    \n      \n      \n      \n        \n            \n            \n                \n                  Title: Apple tree\n                  Creator: Unknown\n                  Date: Unknown\n                  Detailed description\n                \n            \n        \n      \n      \n      \n        \n            \n            \n                \n                  Title: Cute doggo with kitties\n                  Creator: Harry Whittier Frees\n                  Date: 1914\n                  Detailed description\n                \n            \n        \n      \n      \n    \n\n\nVoilà! Вуаля! שלום עולם! Ça va?\nUt scelerisque ultrices orci, nec egestas sem. Cras feugiat nulla eget efficitur tempus. Morbi at pulvinar odio. Duis tempus neque in efficitur iaculis. Nullam ornare erat ut elit convallis consectetur. Integer a pulvinar dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi semper mattis odio ac volutpat. Suspendisse placerat rhoncus ligula, in pretium turpis aliquam nec. Curabitur gravida pretium mauris, in vulputate mauris tristique in. Suspendisse id facilisis sem, et dapibus tortor. Sed nisl metus, commodo ornare tortor non, aliquam suscipit arcu.2\n\nCurabitur sed feugiat elit. Donec feugiat nisi volutpat magna venenatis volutpat. Fusce efficitur sapien dignissim, pretium dolor sit amet, placerat lectus. Quisque enim est, viverra ut sem id, eleifend imperdiet ipsum. Pellentesque imperdiet pretium dui, eu sodales quam iaculis id. Fusce tristique convallis hendrerit. Suspendisse id mauris est. Etiam accumsan nisl vel neque porttitor, nec finibus est vehicula. 3 Aliquam quam sem, rutrum elementum tincidunt non, ultricies a urna. Sed commodo, magna sed dictum malesuada, nulla ligula efficitur nisl, sed condimentum mauris nisl non purus. Sed pulvinar maximus fringilla. Sed scelerisque imperdiet volutpat. Praesent ligula nisl, venenatis finibus pharetra at, luctus id neque. Proin a efficitur ex. Donec vitae enim quis arcu ullamcorper molestie.\n\n\n  \n    \n      first footnote &#8617;\n    \n    \n      I copied this text from this website &#8617;\n    \n    \n      BIG ONE &#8617;\n    \n  \n\n",
  id: 0
});


index.addDoc({
  title: "The Source",
  author: null,
  layout: "default",
  content: "The Source\n\nMY WONDEFUL SOURCES part 2\n\n\n\n    \n      \n      \n      \n        \n            \n            \n                \n                  Title: Dogs\n                  Creator: Unknown\n                  Date: Unknown\n                  Detailed description\n                \n            \n        \n      \n      \n      \n        \n            \n            \n                \n                  Title: Apple tree\n                  Creator: Unknown\n                  Date: Unknown\n                  Detailed description\n                \n            \n        \n      \n      \n    \n\n\n\n    \n      \n      \n      \n      \n        \n        \n            \n              Title: The Sick Kitten\n              Creator: George Albert Smith\n              Date: 1903\n              Detailed description\n            \n        \n    \n      \n      \n    \n\n\n",
  id: 1
});


index.addDoc({
  title: "About this Source",
  author: null,
  layout: "default",
  content: "About this Source\n",
  id: 2
});


index.addDoc({
  title: "About this Edition",
  author: null,
  layout: "default",
  content: "About this Edition\n",
  id: 3
});


index.addDoc({
  title: "Supplements",
  author: null,
  layout: "default",
  content: "Supplements\n",
  id: 4
});


index.addDoc({
  title: "Bibliography",
  author: null,
  layout: "default",
  content: "Bibliography\n",
  id: 5
});


index.addDoc({
  title: "Credits",
  author: null,
  layout: "default",
  content: "Credits and Acknowledgments\n",
  id: 6
});


index.addDoc({
  title: "About MinDoc",
  author: null,
  layout: "default",
  content: "About MinDoc\nMinDoc was created by Liza Senatrova, John Randolph, and Caroline Kness at the University of Illinois Urbana-Champaign and Christopher Thomas Goodwin at the University of Florida.\n",
  id: 7
});


index.addDoc({
  title: "Image_of-Dogs-Source",
  author: null,
  layout: "image_description",
  content: "title: Dogs\ndescription: Main page photo\ncreator: Unknown\n_date: Unknown\nrights: \ntype: \nsource:\nidentifier:\ncontributor:\nformat:\ncredit(IPTC):\ndate_created_(IPTC):\n",
  id: 8
});


index.addDoc({
  title: "Image_№1_from_Introduction",
  author: null,
  layout: "image_description",
  content: "title: Apple tree\ndescription: Main page photo\ncreator: Unknown\n_date: Unknown\nrights: \ntype: \nsource:\nidentifier:\ncontributor:\nformat:\ncredit(IPTC):\ndate_created_(IPTC):\n",
  id: 9
});


index.addDoc({
  title: "Image_№2_from_Introduction",
  author: null,
  layout: "image_description",
  content: "title: Cute doggo with kitties\ndescription: Photo of an American photographer used as a postcard\ncreator: Harry Whittier Frees\n_date: “1914”\nrights: \ntype: Photo\nsource: Unknown\nidentifier:\ncontributor:\nformat:\ncredit(IPTC):\ndate_created_(IPTC):\n",
  id: 10
});


index.addDoc({
  title: "Image_№1_from_Source",
  author: null,
  layout: "image_description",
  content: "title: Apple tree\ndescription: Main page photo\ncreator: Unknown\n_date: Unknown\nrights: \ntype: \nsource:\nidentifier:\ncontributor:\nformat:\ncredit(IPTC):\ndate_created_(IPTC):\n",
  id: 11
});


index.addDoc({
  title: "Video_№1_from_Source",
  author: null,
  layout: "image_description",
  content: "title: The Sick Kitten\ndescription: A 1903 British short silent comedy film\ncreator: George Albert Smith\n_date: “1903”\nrights: \ntype: \nsource:\nidentifier:\ncontributor:\nformat:\ncredit(IPTC):\ndate_created_(IPTC):\n",
  id: 12
});
console.log( jQuery.type(index) );

// Builds reference data (maybe not necessary for us, to check)
var store = [
  
  
  
  
  
  
  
  {
  "title": "Introduction",
  "author": null,
  "layout": "default",
  "link": "/001_introduction.html",
}
,
  
  
  {
  "title": "The Source",
  "author": null,
  "layout": "default",
  "link": "/002_source.html",
}
,
  
  
  {
  "title": "About this Source",
  "author": null,
  "layout": "default",
  "link": "/003_about_the_source.html",
}
,
  
  
  {
  "title": "About this Edition",
  "author": null,
  "layout": "default",
  "link": "/004_about_the_edition.html",
}
,
  
  
  {
  "title": "Supplements",
  "author": null,
  "layout": "default",
  "link": "/005_supplements.html",
}
,
  
  
  {
  "title": "Bibliography",
  "author": null,
  "layout": "default",
  "link": "/006_bibliography.html",
}
,
  
  
  {
  "title": "Credits",
  "author": null,
  "layout": "default",
  "link": "/007_credits_acknowledgments.html",
}
,
  
  
  {
  "title": "About MinDoc",
  "author": null,
  "layout": "default",
  "link": "/008_about_mindoc.html",
}
,
  
  
  {
  "title": "Image_of-Dogs-Source",
  "author": null,
  "layout": "image_description",
  "link": "/mindoc_media/Source_Image_3.html",
}
,
  
  
  {
  "title": "Image_№1_from_Introduction",
  "author": null,
  "layout": "image_description",
  "link": "/mindoc_media/introduction_img_1.html",
}
,
  
  
  {
  "title": "Image_№2_from_Introduction",
  "author": null,
  "layout": "image_description",
  "link": "/mindoc_media/introduction_img_2.html",
}
,
  
  
  {
  "title": "Image_№1_from_Source",
  "author": null,
  "layout": "image_description",
  "link": "/mindoc_media/source_image_1.html",
}
,
  
  
  {
  "title": "Video_№1_from_Source",
  "author": null,
  "layout": "image_description",
  "link": "/mindoc_media/source_video_1.html",
}
]

// Query
var qd = {}; // Gets values from the URL
location.search.substr(1).split("&").forEach(function(item) {
    var s = item.split("="),
        k = s[0],
        v = s[1] && decodeURIComponent(s[1]);
    (k in qd) ? qd[k].push(v) : qd[k] = [v]
});

function doSearch() {
  var resultdiv = $('#results');
  var query = $('input#search').val();

  // The search is then launched on the index built with Lunr

  
  var result = index.search(query);
  resultdiv.empty();
  if (result.length == 0) {
    resultdiv.append('<p class="search_result">No results found.</p>');
  } else if (result.length == 1) {
    resultdiv.append('<p class="search_result">Found '+result.length+' result:</p>');
  } else {
    resultdiv.append('<p class="search_result">Found '+result.length+' results:</p>');
  }
  // Loop through, match, and add results
  for (var item in result) {
    var ref = result[item].ref;
    var searchitem = '<div class="result"><p><a href="/MinDoc'+store[ref].link+'?q='+query+'">'+store[ref].title+'</a></p></div>';
    resultdiv.append(searchitem);
  }
}

$(document).ready(function() {
  if (qd.q) {
    $('input#search').val(qd.q[0]);
    doSearch();
  }
  $('input#search').on('keyup', doSearch);
});

$('input#search').keypress(function (e) {                                       
  if (e.which == 13) {
       e.preventDefault();  
  }
});
