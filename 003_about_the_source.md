---
layout: default
title: About this Source
number: 003
---

# About this Source

# Embedding a Single Media File

{% assign media = site.media_metadata | where_exp: "item", "item.title == 'Image_№2_from_Introduction'" %}
{% include media.html pages=media %}

# Linking to a PDF File

[Download PDF file]({{ site.baseurl }}/media_files/pdfs/newspaper1942.pdf)
