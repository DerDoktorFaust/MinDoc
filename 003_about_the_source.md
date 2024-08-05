---
layout: default
title: About this Source
number: 003
---

# About this Source

# Embedding Images other than the Source

{% assign media = site.media_metadata | where_exp: "item", "item.title == 'Image_of-Dogs-Source'" %}

{% include source_media.html pages=media %}
