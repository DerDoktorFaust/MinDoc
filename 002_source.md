---
layout: default
title: The Source
number: 002
---

# The Source

MY WONDEFUL SOURCES part 2


{% assign media = site.media_metadata | sort: "order" | where_exp: "item", "item.page == 'source'" | where_exp: "item", "item.media_type == 'image'" %}

{% include media.html pages=media %}

{% assign media = site.media_metadata | sort: "order" | where_exp: "item", "item.page == 'source'" | where_exp: "item", "item.media_type == 'video'" %}

{% include media.html pages=media %}


### Object Instantiation of PDFs

<object data="{{ site.baseurl }}/media_files/pdfs/newspaper1942.pdf" width="1000" height="1500" type="application/pdf"></object>

[Download PDF file]({{ site.baseurl }}/media_files/pdfs/newspaper1942.pdf)

## iframe Instantiation of PDFs

<iframe src="{{ site.baseurl }}/media_files/pdfs/newspaper1942.pdf" width="1000" height="1500"></iframe>
