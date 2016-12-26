---
title: "Different ways to make a Duplicati backup"
layout: article
categories: articles
modified: 2016-12-26T18:00:00
tags: [overview]
comments: true
excerpt: This article gives an overview of the various components in Duplicati that can be used to run backups.

---

{% include toc.html %}

## The many (inter-)faces to Duplicati

For most users, simply installing Duplicati and running it will provide a simple and easy way to set up a backup.

But Duplicati provides more than one way of running a backup, making it useful for many different use cases. This document provides an overview of these methods and explain how to use them.


## Commandline Interface

The commandline interface is the most basic, and thus most flexible, way of running a backup. The basic executable is called `Duplicati.CommandLine.exe` and comes with built-in documentation, obtainable with `Duplicati.CommandLine.exe help`.

For Linux based installations, the alias `duplicati-cli` is a wrapper for invoking `Duplicati.CommandLine.exe`. On macOS, a similar script is provided inside the app bundle, but it is not installed in the default path, as on Linux.

You can use the commandline interface to run "on-demand" backups, or use it within scripts that set up an environment for the backup. On common use is to set it up as scheduled tasks, with the system manager, such as Windows Scheduler or cron.

When using the commandline interface, the path to the local database can be supplied with the option `--dbpath=...path...`. If you do not supply this option, the local database will be stored in the user profile folder (`%APPDATA%\Duplicati` on Windows, `~/.config/Duplicati` on others). Additionally a file named `dbconfig.json` is stored in the user profile folder, that maps the destination url to a local database. This system simplifies commandline usage, and is not used from the other interfaces.

## Server Component

The server is implemented with `Duplicati.Server.exe` and has an alias on non-Windows called `duplicati-server`. The server has three distinct responsibilities:
1. Provide a storage for backup configuration
2. Run a scheduler that makes periodic backups
3. Provide a web-based user interface to manage backups

### Backup Configuration Storage

The backup configurations are stored in an SQLite database, located in `%APPDATA%\Duplicati\duplicati-server.sqlite` on Windows, `~/.config/Duplicati/duplicati-server.sqlite` on other operating systems.

The environment variable `DUPLICATI_DATA_FOLDER` can be used to choose another folder for the database location.

On Windows, the backup configuration database is scrambled with a weak RC4 encryption, which prevents string scanning of a hard disk. The scrambling system is only supported on Windows.

### Backup Scheduler

The scheduler is very basic and supports a target time, interval and allowed days as configuration parameters. When the server is running, it is also possible to request that a particular backup is started by making HTTP requests to the server. A sample script called `duplicati-control.py` in bundled with Duplicati and can be used to invoke backups from a more configurable scheduler.

### The Web Interface

The service includes a full user interface that can be accessed with a browser on http://localhost:8200/. As the server does not use TLS (aka SSL), the server will only respond to requests from the local machine. If you wish to use the server from another machine, make sure that you add the commandline option `--webservice-interface=any` when starting the server, such that it listens for requests from any machine. If you enable this option, make sure you take precautions to ensure that the machine cannot be access from the internet, as the service is not security hardened, and should _NEVER_ be exposed directly to the internet.

### Service Component

The `Duplicati.Service.exe` is a thin wrapper that starts `Duplicati.Server.exe` and pings it periodically to make sure it is running. The intention is that this can be started as a daemon or service.

For Debian based installations, you can run `sudo systemctl start duplicati` if you installed it via the `.deb` package.
On Windows, you can use the [NSSM](https://nssm.cc) to run either `Duplicati.Server.exe` or `Duplicati.Service.exe` as a service with many configuration options. You can also use `Duplicati.WindowService.exe install`, which is made as a Windows Service that can automatically install itself, which is easier but does not offer the flexibility of NSSM.

## The TrayIcon package

The default way to run Duplicati is with `Duplicati.GUI.TrayIcon.exe`. By default, this will start `Duplicati.Server.exe` in the same process, and then show a tray icon in the users desktop.

If you wish to use the tray icon with a Duplicati server instance, you need to run it as  `Duplicati.GUI.TrayIcon.exe --no-hosted-server` to instruct it that it should not start the server itself, but connect to an already running instance.

If the server is not on the same host, or using another port than 8200, you can add the commandline option `--server-url=http://othermachine:8200` to instruct Duplicati to connect to something else.
