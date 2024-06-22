---
layout: default
title: The Source
number: 002
---

# The Source

MY WONDEFUL SOURCES part 2
<!-- <iframe width="420" height="315" src="https://www.youtube.com/watch?v=EmSrQCDsMv4&t=1282s&ab_channel=BillRaymond" frameborder="0" ></iframe> -->

{% assign media = site.media_metadata | sort: "order" | where_exp: "item", "item.page == 'source'" | where_exp: "item", "item.media_type == 'image'" %}

{% include media.html pages=media %}

{% assign media = site.media_metadata | sort: "order" | where_exp: "item", "item.page == 'source'" | where_exp: "item", "item.media_type == 'video'" %}

{% include media.html pages=media %}

# OpenSeaDragon

<div id="openseadragon1" style="width: 800px; height: 600px;"></div>

<script src="{{ site.baseurl }}/configuration_files/openseadragon/openseadragon.min.js"></script>
<script type="text/javascript">
    var viewer = OpenSeadragon({
        id: "openseadragon1",
        prefixUrl: "{{ site.baseurl }}/configuration_files/openseadragon/images/",
        tileSources: {
            type: 'image'
            url: "{{ site.baseurl }}/media_files/images/doggo.jpeg"
        }
    });
</script>

### Object Instatiation of PDFs

<object data="{{ site.baseurl }}/media_files/pdfs/newspaper1942.pdf" width="1000" height="1500" type="application/pdf"></object>

## iframe Instatiation of PDFs

<iframe src="{{ site.baseurl }}/media_files/pdfs/newspaper1942.pdf" width="1000" height="1500"></iframe>
