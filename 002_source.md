---
layout: default
title: The Source
number: 002
---

# The Source

MY WONDEFUL SOURCES part 2

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/bSKkU9iPxzs?si=mLnX729W_uqT6UNy" frameborder="0" ></iframe> -->

{% assign media = site.media_metadata | sort: "order" | where_exp: "item", "item.page == 'source'" | where_exp: "item", "item.media_type == 'image'" %}

{% include media.html pages=media %}

{% assign media = site.media_metadata | sort: "order" | where_exp: "item", "item.page == 'source'" | where_exp: "item", "item.media_type == 'video'" %}

{% include media.html pages=media %}

# OpenSeaDragon

<div id="openseadragon1" style="width: 800px; height: 600px;">
    <script type="text/javascript">
    OpenSeadragon({
            id: "openseadragon1",
            prefixUrl: "{{ site.baseurl }}/configuration_files/assets/img/openseadragon/",
            maxZoomLevel: 100,
            tileSources: {
                type: 'image',
                url: "{{ site.baseurl }}/media_files/images/doggo.jpeg"
            }
        });
    </script>
</div>

### Object Instantiation of PDFs

<object data="{{ site.baseurl }}/media_files/pdfs/newspaper1942.pdf" width="1000" height="1500" type="application/pdf"></object>

[Download PDF file]({{ site.baseurl }}/media_files/pdfs/newspaper1942.pdf)

## iframe Instantiation of PDFs

<iframe src="{{ site.baseurl }}/media_files/pdfs/newspaper1942.pdf" width="1000" height="1500"></iframe>
