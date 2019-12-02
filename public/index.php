<?php
  $TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://fonts.googleapis.com/css?family=Hind|Kalam&display=swap" rel="stylesheet" />
    <link href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" rel="stylesheet">
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Aktywne podróże - blog o pasji do podróżowania i aktywnego spędzania czasu"
    />
    <link rel="apple-touch-icon" href="<?php echo $TEMPLATE_PATH; ?>/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="<?php echo $TEMPLATE_PATH; ?>/manifest.json" />
    <!--
        If you're reading this from "view source" in your browser, it might not make sense as
        these tokens have already been evaluated and replaced, even in this remark blurb.

        Notice the use of "php echo $TEMPLATE_PATH;" and %PUBLIC_URL% in the tags above.
        Both will be replaced with the URL of the `public` folder during the build (%PUBLIC_URL%) or
        at render time (php echo $TEMPLATE_PATH;)
        Only files inside the `public` folder can be referenced like this.

        Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
        work correctly both with client-side routing and a non-root public URL.
        Learn how to configure a non-root public URL by running `npm run wpbuild`.
    -->
    <title>Aktywne podróże</title>
</head>
    <body>
    <noscript>
        Aplikacja wymaga włączonej obsługi javascriptu.
    </noscript>
    <div id="root"></div>
    <!--
        This PHP file is a template.
        If you open it directly in the browser, you will see an empty page.

        You can add webfonts, meta tags, or analytics to this file.
        The build step will place the bundled scripts into the <body> tag.

        To begin the development, run `npm run wpstart` or `yarn wpstart`.
        To create a production bundle, use `npm run wpbuild` or `yarn wpbuild`.
    -->
    <script type="text/javascript">
        (function(d, sc, u) {
          var s = d.createElement(sc), p = d.getElementsByTagName(sc)[0];
          s.type = 'text/javascript';
          s.async = true;
          s.src = u + '?v=' + (+new Date());
          p.parentNode.insertBefore(s,p);
          })(document, 'script', '//aff.bstatic.com/static/affiliate_base/js/flexiproduct.js');
    </script>
    </body>
</html>
