---
layout: archive
title: "Fact Sheet"
date: 2016-03-16T11:39:03-04:00
modified:
excerpt: "A collection of feature of Duplicati."
tags: []
image:
  feature:
  teaser:
---

{% include toc.html %}

## Strong Encryption
Duplicati uses strong AES-256 encryption to protect your backups. All data is encrypted locally and afterwards transferred to the remote storage system. Alternatively, you can use GPG to encrypt your backup data.


## Incremental Backups
Duplicati performs a full backup initially. Afterwards, Duplicati updates the initial backup by adding the changed data. If only tiny parts of a huge file have changed, only those tiny parts have to be transferred and stored on the remote server. This saves time and space.

## Compression
All backup data is compressed before it is encrypted and uploaded. Duplicati supports Zip/Deflate or 7z/LZMA2 compression. Duplicati detects files that are compressed already and does not compress them again. 

## Deduplication
Duplicati stores data blocks. If two files share a data block this will only be stored once. As a result of that, the size of the backup can be much smaller than the size of the source files.

## Fail-Safe Design
Duplicati is designed to handle all kinds of issues: Network hick-ups, interrupted backups, unavailable orcorrupt storage systems. 

## Online Backup Verification
Whenever Duplicati performs a backup, it downloads a random set of backup files, restores their content and checks their integrity. That way you can be sure that your backup is still intact when you need it.

## Web Interface
Duplicati comes with a web interface. This can be used to configure and run backups on your local machine. But is also allows you to configure and run backups on headless machines like a Network Attached Storage (NAS) to access Duplicati on a remote computer.

## Command Line Interface
To add backup functionality to your scripts, there is a `Duplicati.Commandline.exe` which provides you with all features of Duplicati in a terminal window.

## Scheduler
The built-in scheduler runs your backups automatically at the times and intervals you define. One backup everyday, at the weekend, every hour or even 3pm every 3rd Monday is possible.

## Auto-Updater
Duplicati comes with a built-in updater that downloads and installs the latest avaialable version for you. That way you can easily keep Duplicati up-to-date.
