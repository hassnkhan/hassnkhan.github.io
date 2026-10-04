---
title: "Writings"
permalink: /blog/
layout: single
excerpt: "Research, publications, and essays by Hassan Khan on semiconductors, technology, and industrial policy."
author_profile: true
---

## Publications

- **[Science and research policy at the end of Moore’s law](https://www.nature.com/articles/s41928-017-0005-9)** — Hassan N. Khan, David A. Hounshell, and Erica R. H. Fuchs. *Nature Electronics* 1, 14–21 (2018). [Request a copy](mailto:hassnkhan@gmail.com).
- **[Scaling Moore’s Wall: A Public-Private Partnership in Search of a Technological Revolution](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2497218)** — Hassan Khan, David A. Hounshell, and Erica R. H. Fuchs. Working paper, revised 2015.

## Doctoral research

My 2017 PhD at Carnegie Mellon examined the policy challenges of funding and finding a successor to silicon CMOS at the end of Moore’s Law. [Research background at Carnegie Mellon](https://engineering.cmu.edu/directory/bios/khan-hassan.html).

## Essays

<ul class="hk-writing-list">
{% for post in site.posts %}
  <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a><br><time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%B %-d, %Y' }}</time></li>
{% endfor %}
</ul>
