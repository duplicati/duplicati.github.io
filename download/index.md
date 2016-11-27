---
layout: media
share: false
permalink: /download
image:
  parallax: background-1600x800.jpg
---

<style type="text/css">
    #main div.inner-wrap { width: 100%; }
</style>

<div id="downloadlinks" class="downloadlinks">
    <h2>Download the latest and greatest version of Duplicati here:</h2>

    <div id="current-os">
    
    </div>

    <div id="other-os">
        <div id="other-os-label" style="display: none;">other versions and operating systems:</div>
        <div id="os-windows" class="link"><a id="link-msi64" class="btn" href="https://github.com/duplicati/duplicati/releases"><img src="../images/download/windows.png" />Windows <div class="version-number"></div></a></div>
        <div id="os-linux-deb" class="link"><a id="link-deb" class="btn" href="https://github.com/duplicati/duplicati/releases"><img src="../images/download/debian.png" />Debian <img src="../images/download/ubuntu.png" />Ubuntu <div class="version-number"></div></a></div>
        <div id="os-linux-rpm" class="link"><a id="link-rpm" class="btn" href="https://github.com/duplicati/duplicati/releases"><img src="../images/download/fedora.png" />Fedora <img src="../images/download/redhat.png" />RedHat <div class="version-number"></div></a></div>
        <div id="os-mac" class="link"><a id="link-dmg" class="btn" href="https://github.com/duplicati/duplicati/releases"><img src="../images/download/mac.png" />macOS / OSX <div class="version-number"></div></a></div>
    </div>


    <div id="alternates">
        <div>less frequently used items:</div>
        <div id="os-win32" class="link alt-link"><a id="link-msi86" class="btn" href="https://github.com/duplicati/duplicati/releases"><img src="../images/download/windows.png" />Windows 32bit <div class="version-number"></div></a></div>
        <div id="os-synology" class="link alt-link"><a id="link-spk" class="btn" href="https://github.com/duplicati/duplicati/releases"><img src="../images/download/synology.png" /> <div class="version-number"></div></a></div>
        <div id="os-zip" class="link alt-link"><a id="link-zip" class="btn" href="https://github.com/duplicati/duplicati/releases"><img src="../images/download/zip.png" />Zip file <div class="version-number"></div></a></div>


    </div>

    <div id="alternates">
        <div>for developers and system administrators:</div>

        <div id="os-source" class="link alt-link"><a class="btn" href="https://github.com/duplicati/duplicati"><img src="../images/download/github.png" />Source code - on GitHub</a></div>

        <div id="os-older" class="link alt-link"><a class="btn" href="https://github.com/duplicati/duplicati/releases"><img src="../images/download/older.png" />Other versions - older or testing</a></div>
    </div>
</div>

<script src="{{ site.url }}/js/plugins/jquery.client.js" ></script>
<!-- <script src="{{ site.url }}/js/download.js" ></script>    -->
<script src="https://updates.duplicati.com/experimental/latest-installers.js"></script>

<script type="text/javascript">
$(document).ready(function(){
 var os = [ $.client.os.toLowerCase() ];

 if (os[0] == 'linux')
    os = [ 'linux-rpm', 'linux-deb'];

  for(var ix in os) {
     $("#os-" + os[ix]).addClass('current');
     $('#downloadlinks').addClass('has-current');

     var curel = $("#os-" + os[ix]);
     if (curel.length > 0)
     {
        $('#current-os').prepend(curel);
        $('#other-os-label').show();
     }
 }

 $('.version-number').html(duplicati_installers.version.trim());
 for(var key in duplicati_installers)
    if (duplicati_installers[key].url)
        $('#link-' + key).attr('href', duplicati_installers[key].url);
 $('.version-number').css('display', 'inline');
});
</script>

