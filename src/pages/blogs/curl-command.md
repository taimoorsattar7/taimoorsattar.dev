---
title: CURL Command
description: CURL Command
date: "2020-04-12T10:48:53.955Z"
tags:
  - CURL
featuredpost: false
---
|Sr# | Command | Description | Optional Parameter  | 
|:--- |:---- |:----:| ----:|
|1.| `curl https://jsonplaceholder.typicode.com/posts` | GET Response from Resource | n/a |
|2.| `curl --include https://jsonplaceholder.typicode.com/posts` | Include HTTP Header with response | (--include, -i) |
|3.| `curl --head https://jsonplaceholder.typicode.com/posts`| Header Only | (--head, -I) |
|4.| `curl -o test.txt https://jsonplaceholder.typicode.com/posts`| Write output to file | (-o, --output)|
|5.| `curl -O http://i.imgur.com/QRlAg0b.png` | Download File | (-O, --remote-name) |
|6.| `curl -O --limit-rate 1000B http://i.imgur.com/QRlAg0b.png` | Download File | (-O, --remote-name) |
|7.| `curl -O test.txt http://traversymedia.com/test.txt -A "Mozilla"` | Spoof user agent | (-O, --remote-name) |
|8.| `curl -d "title=Hello&body=Hello World" https://jsonplaceholder.typicode.com/posts` | POST Data | (-d, --data) |
|9.| `curl -X PUT -d "title=Hello&body=Hello World" https://jsonplaceholder.typicode.com/posts/1` | PUT Data | (-X PUT -d) |
|10.| `curl -X DELETE https://jsonplaceholder.typicode.com/posts/1` | Delete Data | (-X DELETE) |
|11.| `curl -u brad:mypassword https://jsonplaceholder.typicode.com/posts/1` | Secured Routes | (-X DELETE) |
|12.| `curl -L http://google.com` | Follow Redirection | (-L) |
|13.| `curl -u ftpuser:ftppass -O ftp://x.x.x.x/public_html/sopmefile.php` | Download Files From FTP Server | (-L) |
|14.| `curl -u test@traversymedia.com:123456! -T hello.txt ftp://ftp.taimoorsattar.dev` | Upload via FTP | n/a |
|15.| `curl -u test@traversymedia.com:123456! -O ftp://ftp.taimoorsattar.dev/hello.txt` | Download via FTP | n/a |

