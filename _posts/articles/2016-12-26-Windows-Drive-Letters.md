---
title: "Windows Drive Letters"
layout: article
categories: articles
modified: 2016-12-26T20:00:00
tags: [overview]
comments: true
excerpt: This article describes how to configure a backup to a removable media, and coping with problems arising because Windows can choose different drive letters.

---

{% include toc.html %}

The Windows Drive Letter Problem
==========================

If you are a Windows user, you may have noticed that the drive letter Windows assigns can change from time to time. This happens because Windows picks the next available letter and assigns it to the drive.

This is problematic for Duplicati backups, as it expects the backup data to be stored on the same path as last time. When a new drive letter is assigned, all the files are also found on a new path. You can go and change the path in the backup setup, but this becomes tedious if the drive letters change often.

There are ways to [force the drive letter](http://www.howtogeek.com/96298/assign-a-static-drive-letter-to-a-usb-drive-in-windows-7/), which can work but may also make the drive unaccesible if another device has taken the drive letter.

In Duplicati, you can use the advanced options `--alternate-destination-marker` and `--alternate-target-paths` to probe for potential drive letters.

Changing Drive Letter Solution
======================

Using the advanced option `--alternate-destination-marker` you can supply a filename that Duplicati will look for, such as `--alternate-destination-marker=my_backup_is_here.txt`.

When you set up the backup, you simply use the current drive letter as the target, set the `--alternate-destination-marker` option, and then create a file in the target folder with that name, e.g. `my_backup_is_here.txt`. The file contents does not matter, only the file name, so you can leave it empty if you prefer.

Next step is to tell Duplicati which potential paths it should scan, looking for the `my_backup_is_here.txt` file. This is done with the `--alternate-target-paths` setting. As we know only the drive letter will change, we can use the initial target path, but put in an asterisk (`*`) in place of the drive letter, e.g.: `--alternate-target-paths=*:\my_backup`.

Duplicati will then look at all attached drives (in alphabetic order) for a folder named `my_backup` and a file named `my_backup_is_here.txt`. If it finds such a file, it will then use that path for the backup, instead of the primary one (the one with the fixed drive letter). If it does not find such a path, it will give an error.


Advanced Uses
===========

The same probing system can also handle multiple paths for `--alternate-target-paths`. You can use this system, if you have changing UNC paths, for example: `--alternate-target-paths=Y:\backups;\\server\backups;\\server\c$\backups`. Note that the asterisk (`*`) only works for the drive letter, and not as a generic wildcard.

While Linux/BSD/MacOS uses a unified filesystem and thus does not suffer from the Driver Letter issue, the described method works on these systems as well. If you are using non-Windows be sure to use the colon (`:`) path seperator instead of the semicolon used on Windows.



