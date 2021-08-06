---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
publishdate: {{ .Date}}
year: {{ .Date | dateFormat "2006" }}
month: {{ .Date | dateFormat "2006-01" }}
category: {{ .Section }}
tags: []
author: {{ .Site.params.author}}
draft: true
---