---
layout: article
title: "Duplicati 2.0.2.1 is beta"
categories: articles
modified: 2017-08-01T22:43:00
tags: [overview]
comments: true
excerpt: A retrospect of the last 5 years of development and the official announcement. Duplicati 2.0.2.1 is an offical beta version.

---

{% include toc.html %}

Today we released update 2.0.2.1 as an official beta. We think it is time to look back at the past years to see what we all have achieved.

## 2012
We started working on Duplicati 2 back in 2012 and had a lot ideas how to improve Duplicati 1.3. At that time we have been two people, Kenneth and René, who ran the project which by that time had well over 100,000 downloads from the main website. In 2012 we released a first version with an improved storage engine, that introduced efficient, incremental, continuous backups to the open source world. For the first time, there was no more need to run regular full backups. We released a prototype in 2012 with a CLI (command line interface).

## 2014
In 2014, we had the new storage engine up and running nicely, so that it was time to put on top a user interface. This user interface was web-based, so that it provided the same experience for Windows, Linux and Mac users. Furthermore, the web-interface allowed users to run Duplicati on a NAS (network attached storage). For the first time, normal users were able to run their backups with Duplicati 2.0.

We gave the command line interface an overhaul, so that there was no more need to gain a deep technical understanding of Duplicati to use the CLI properly. Later in 2014, we added more backends to Duplicati 2.0 like OneDrive and Azure Blob Storage and moved the project to Github. The number of users of Duplicati 2.0 was small but increasing.

## 2015
In 2015, Duplicati learned to backup meta data of files. This included not only timestamps of files but also access permissions. We also worked on performance optimization to reduce the footprint of Duplicati. Also, we localized the user interface and got a translation service set up to manage all the translations that are supported (we got ... translation by today). We learned, that quite a few people were already using Duplicati 2.0 for their regular backups (although we did not recommend this).

## 2016
In 2016, Duplicati got a new user interface that was much more comfortable to use. There was a new file picker with tree navigation and the whole user interface was re-designed. It also got responsive so that users could run their backups on their NAS from a mobile phone. Furthermore, we improved the backup and restore speed significantly. Last but not least, we set up different update channels like canary, experimental, beta, and stable and provided installers for various platforms. The project got a new website which by that time was over-due.

## 2017
In 2017 we focused on all kinds of issues that you had with Duplicati 2.0 to make it a safe and reliable backup solution. We are happy that we can say, there was no safety issue at any time. But we had to fix a few issues in situations where the remote backup data got corrupted. We are still working to improve such situations. 

In 2017 we also a few users got in touch with us so that we learned how you are using Duplicati. We have many private users but also small companies all around the globe. We even got users in Asia and Africa who were glad to get a free backup solution for their small businesses that cannot afford to pay the prices of commercial backup solutions provided by the Western world.

During the last months we saw more than 20,000 active installations of Duplicati 2.0 which ran more than 1,000,000 backups per month with a total size of about 160 Petabytes. With thos impressive numbers we think it is time to promote Duplicati 2.0 from an experimentalversion to an official beta!

## Today
Today, we are proud to announce, that Duplicati 2.0.2.1 is our first, official beta version. The installers provided from our website have been changed so that they subscribe to the beta update channel. We would like to thank all contributors and would like to ask you to keep up the support of this project. Everyone deserves a free backup solution that takes care that private data remains private.

Thank you and enjoy the first beta version!
