---
layout: article
title: "Fact Sheet"
categories: articles
date: 2016-03-18
modified: 2016-03-18
tags: [overview]
comments: true
ads: false
---

{% include toc.html %}

## Basic: Strong Encryption
Duplicati uses strong AES-256 encryption to protect your backups. It is designed following the TNO principle: Trust No One. For instance, all data is encrypted locally before it is transferred to the remote storage system. The password/key to your backup never leaves your computer. Instead of AES-256 you can use a local GPG instance to encrypt your backup.


## Basic: Incremental Backups
Duplicati performs a full backup initially. Afterwards, Duplicati updates the initial backup by adding the changed data only. That means, if only tiny parts of a huge file have changed, only those tiny parts are added to the backup. This saves time and space and the backup size usually grows slowly. 


## Basic: Compression
All backup data is compressed before it is encrypted and uploaded. Duplicati supports Zip/Deflate or 7z/LZMA2 compression. For performance reasons, Duplicati detects files that are compressed already and adds those as they are to the Zip or 7z archives. For example, media files such as mp3, jpeg or mkv files contain very well compressed data already. 


## Basic: Online Backup Verification
Duplicati is built to work with simple storage systems. Many providers offer compatible storages and often at cheap prices. As a downside of this, some storage system might store corrupt data. And most people usually notice that, when they need their backup to restore files they have lost and restoring fails. To avoid that Duplicati regularly downloads a random set of backup files, restores their content and checks their integrity. That way you can detect problems with your online storage before you run into troubles.


## Technology: Deduplication
Duplicati analyzes the content of files and stores data blocks. Due to that, Duplicati will find duplicate files and similar content and store this only once in the backup. As Duplicati analyzes the content of files it can handle situations very well if files and folders are moved or renamed. As the content does not change, the next backup will be tiny.


## Technology: Fail-Safe Design
Duplicati is designed to handle various kinds of issues: Network hick-ups, interrupted backups, unavailable orcorrupt storage systems. Even if a backup run was interrupted, it can be continued at a later time. Duplicati will then backup everything that was missed in the last backup. And even if remote files get corrupted, Duplicati can try to repair them if local data is still present or restore as much as possible.


## Interface: Web Interface
Duplicati comes with a web interface. It can be used to configure and run backups on your local machine. But is also allows you to configure and run backups remotely on headless machines like a Network Attached Storage (NAS). Just install Duplicati on your NAS and configure and run it through its web interface.


## Interface: Command Line Interface
We did not forget about system admins! Duplicati offers all functions and feature via `Duplicati.Commandline.exe`. This allows you to add backup features to your scripts or run backups in a terminal window.


## Feature: Meta Data
Duplicati also stored the meta data of files in the backup. When backup files are restored, the timestamps (last modified, created) will also be restored as well as the system's access permissions. To avoid inaccessible files e.g. when the system user's have changed, restoring of access permissions is optional.


## Feature: Scheduler
The built-in scheduler runs your backups automatically at the times and intervals you define. One backup everyday, at the weekend, every hour or even 3pm every 3rd Monday is possible. And even if a date is missed, Duplicati will run the job as soon as possible.


## Feature: Auto-Updater
Duplicati comes with a built-in updater that downloads and installs the latest avaialable version for you. That way you can easily keep Duplicati up-to-date.
