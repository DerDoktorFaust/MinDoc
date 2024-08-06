---
layout: default
title: About this Source
number: 003
---

# About this Source

# Embedding a Single Image

{% assign media = site.media_metadata | where_exp: "item", "item.title == 'Image_№2_from_Introduction'" %}
{% include media.html pages=media %}

# Embedding a Single Video
{% assign media = site.media_metadata | where_exp: "item", "item.title == 'Kill_the_Sexist'" %}
{% include media.html pages=media %}

# Linking to a PDF File

[Download PDF file]({{ site.baseurl }}/media_files/pdfs/newspaper1942.pdf)
