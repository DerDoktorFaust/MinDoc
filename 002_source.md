---
layout: default
title: The Source
number: 002
---

# The Source

{% assign media = site.media_metadata | sort: "order" | where_exp: "item", "item.page == 'source'" | where_exp: "item", "item.media_type == 'image'" %}
{% include media.html pages=media %}

{% assign media = site.media_metadata | sort: "order" | where_exp: "item", "item.page == 'source'" | where_exp: "item", "item.media_type == 'video'" %}
{% include media.html pages=media %}