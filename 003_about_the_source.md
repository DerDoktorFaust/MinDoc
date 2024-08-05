---
layout: default
title: About this Source
number: 003
---

# About this Source

# Embedding Images other than the Source

{% assign media = "{{ site.baseurl }}/media_files/images/doggo.jpeg" | where_exp: "item", "item.media_type == 'image'"%}
{% include media.html pages=media %}
