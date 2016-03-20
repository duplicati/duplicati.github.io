---
layout: article
title: "Channels"
categories: news
modified: 2016-03-18T16:49:00
tags: [news]
comments: true
ads: true
excerpt: We are rolling out a major update. Channels, new UI, new source picker, improved restore speed, usage statistics, more backends.
---

We are just rolling out a major update to Duplicati. Besides lots of small changes there is a list of new features, that now become available through the built-in auto-updater.

{% include toc.html %}

## Channels
In the last year Duplicati 2.0 became more and more stable, but we also introduced some new features that were a bit shaky in the beginning. As a result of this, we did not release any updates via the built-in auto-updater recently. We want to change this. We want to provide you with stable versions, but we also want to provide you with new features to try out. That is why we decided to support multiple update channels in the upcoming update.

Update channels allow you to decide yourself what you want. Do you want a stable release to get a safe backup? Or are you curious? Or do you want to support the developers with testing and feedback? Now you can decide yourself. Here are the channels we will make available:
* Stable. As soon as we think Duplicati 2.0 is stable this channel will provide you with the stable releases of Duplicati. As Duplicati 2.0 is not called stable yet, this option is currently missing.
* Beta. Versions in this channel are currently tested and might become stable soon (whatever that means). It’s likely that there are errors but no serious issues are expected.
* Experimental. Versions published here show off new features. Serious errors might be present in this version. Do not use this to run real backups!
* Canary. These versions are meant for developers who want to see their work in an official build. It is very likely that these versions break your installation or backups. Do not use this to run real backups! If you want to contribute to development by testing new versions, this is the channel to go for. :-)

You can select the channel under "settings". At the moment, the channel "stable" is not yet available as we do not want to call Duplicati 2.0 stable yet. Currently the main updates go to "experimental". As Duplicati 2.0 seems to be in a good shape, we might switch to “beta” as default channel soon.


## New design of user interface

Most of you know that we introduced a new user interface with Duplicati 2.0. We got it all up and running in a web browser and then we noticed that the UI was functional but it could have looked much better.

In the last year Alexander Franzelin joined the project. He is a designer from Italy and decided to give Duplicati a nicer look. He provided us with some sketches which we liked. And so we decided to work on a major change to the user interface. As usual, it took longer than expected and the work is still not complete. But we are sure, the new new user interface is much better than the old one and we do not want to hold this back.

So, today you are getting a new new user interface which does not only come with a nicer look but also with better functionality. The best improvement is probably the new source folder tree, that lets you pick your source folders and files easily.

Here is a screenshot of the new new user interface. And a second one that shows, that it will also work on small screens.

![Screenshot new UI design](https://github.com/duplicati/duplicati.github.io/blob/master/images/2016-03-20-New-UI.jpg "New UI design by Alexander Franzelin")


![Screenshot new UI design on mobile device](https://github.com/duplicati/duplicati.github.io/blob/master/images/2016-03-20-New-UI-mobile.jpg "New UI design on mobile device by Alexander Franzelin")


## New source picker

We have a new source picker. The picker now allows you to easily pick any folders and files. It has a list of favourite folders and a list of folders on your computer. You can still add paths that are not listed by just typing them in. To quickly remove folders and files from you backup there is a list with all files and folders that have been selected.

![Screenshot of new source picker](https://github.com/duplicati/duplicati.github.io/blob/master/images/2016-03-20-New-SourcePicker.jpg "New Source Picker")


## Restore speed

We received a very nice contribution from FootStark. He optimized queries that make Duplicati more suitable to use with large backups in the hundreds of GB range. Along with other technical changes, Duplicati is now able to make more use of multi-core processors by running some cryptographic tasks in parallel. Furthermore, the encryption module was enhanced to utilize hardware acceleration for AES if your hardware and software support it.

We included many changes in this version, but turned off some more aggressive options by default. To switch from light speed to ludicrous speed use the following options:

`--enable-piped-streaming` - This saves writing temporary files and hashing and decoding is done simultaneously

`--aes-set-threadlevel=1...4` - Defines the number of cores used to restore


## Usage Statistics

To meet the needs of users you have to know what their needs are. And frankly speaking, we have no idea what your needs are. We do not know if you have small backups or huge ones. We do not know what errors happen on your computers. And we do not know what features are often used or not at all. As a result of that, it could be possible that we spend our time working on the wrong things.

To focus our development efforts we would like to know more about how you are using Duplicati. For instance we would like to know how many backup jobs you have set up. We would also like to know how big the backup jobs are in terms of file size and number. We also would like to know what error messages you get. All this is really valuable for us because we can make better decisions what to focus on.

That is why we have now included a statistics module to Duplicati. It gives us some anonymous statistical data about how Duplicati is used. Under “Settings” you can define what level of data you would like to share with us. All data sent to us is anonymous and does not reveal an personal information. We gather information about how Duplicati is used but we do not look into your personal data at all.

This new feature is the easiest way to support the Duplicati project. Please turn it on so that everyone can benefit!


## Backends

In the meantime we have also added some more backends:
* Amazon Cloud Drive
* Backblaze Cloud Storage
* Mega.co.nz
* Box.com
* Google Drive (instead of Google Docs)
* Google Cloud Storage
* OpenStack
* HubiC

## Next updates

To give you an opportunity to test the new channel system, we are going to make available a new "Canary" build soon, in which the restore speed has been improved furthermore (turning on all speed option by default).
