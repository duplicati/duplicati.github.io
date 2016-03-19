---
layout: article
title: "Block-based storage engine"
categories: articles
modified: 2016-03-16T16:49:00
tags: [overview]
comments: true
ads: false
---

Duplicati 2.0 comes with an innovative block-based storage engine. Find out what that means, how it works and why it is so much better than the old approach of Duplicati 1.3.

## Background

In Duplicati 1.3 backups were done and stored the following way:
* There was always a full backup followed by incremental backups. 
* The latest incremental backup was based on all previous backups. To restore latest files, all backup files were required. 
* Files were written into compressed archives which were encrypted afterwards.
* The archives of incremental backups only contained the changes to the previous files.

This approach had some issues:
1. The chains of full and incremental backups could get very long. As a result of that the likeliness increased that the backup could be lost due to data corruption.
1. After a loss of data, users usually restore the latest version. This required to download the entire history of all changes and restoring went through the same history again making restoring slow.
1. The recommended, regular full backups were a <insert bad word here>.

## New Storage Format

Duplicati 2.0 introduced a new, revolutionary storage format for backups. The storage format is block-based. This means, it does not store the files, but chops all files into tiny blocks. Here is a simple explanation.

Imagine your local files consist of many small bricks in different shapes and colors. Duplicati takes your files, breaks them down into single bricks and stores these bricks in small bags. Whenever a bag is full, it is stored in a huge box (which is your online storage). When something changes, Duplicati puts new bricks into a new bag and puts it into the box. When a local file needs to be restored, Duplicati knows what bricks it needs and in which bags these are. So, it grabs the required bags, takes out the bricks and rebuilds your file. If the file is still on your computer (in a version you do not want anymore), Duplicati can just replace the wrong bricks, thus updating the existing file.

From time to time, Duplicati will notice that there are a few bags that contain bricks it does not need anymore. It grabs those bags, sorts the bricks. It throws away the bricks that are not needed anymore, then it puts the required bricks into new bags and puts them back into the box. Duplicati will also notice if there is a large number of bags that only contain a very small number of bricks. Duplicati grabs all those bags, takes out the bricks, puts them into a small number of new bags and puts these into the box.

And to say the good news again: There is no need to upload full backups regularly. This makes Duplicati a perfect choice for incremental backups of large media libraries. 

## Whitepaper
We have published technical details in a whitepaper [A block-based storage model for remote online backups in a trust-no-one environment)](Block-basedstorageformat.pdf).
