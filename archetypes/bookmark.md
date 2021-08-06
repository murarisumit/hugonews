---
title: "{{ replace .Name "-" " " | title }}"
author: "{{ .Site.params.author }}"
category: {{ .Section }}

date: {{ .Date }}
publishdate: {{ .Date}}
year: {{ .Date | dateFormat "2006" }}
month: {{ .Date | dateFormat "2006-01" }}

itemurl: ""
sites: ""
tags: []
draft: false
---
