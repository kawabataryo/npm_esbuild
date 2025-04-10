<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<title><?php echo $title; ?></title>
<meta content="<?php echo $siteKeywords; ?>" name="keywords" />
<meta content="<?php echo $pageDescription; ?>" name="description" />
<meta name="format-detection" content="telephone=no">

<!-- ogp -->
<meta content="<?php echo $title; ?>" property="og:title" />
<meta content="website" property="og:type" />
<meta content="<?php echo 'https://' . $_SERVER["HTTP_HOST"]; ?><?php echo $rootImg; ?>/common/ogp.png" property="og:image" />
<meta content="<?php echo $pageDescription; ?>" property="og:description" />
<meta content="<?php echo 'https://' . $_SERVER["HTTP_HOST"] . $_SERVER['REQUEST_URI']; ?>" property="og:url" />
<meta content="<?php echo $siteTitle; ?>" property="og:site_name" />

<!-- twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta content="" name="twitter:site" />
<meta property="twitter:url" content="<?php echo 'https://' . $_SERVER["HTTP_HOST"] . $_SERVER['REQUEST_URI']; ?>" />
<meta property="twitter:title" content="<?php echo $title; ?>" />
<meta property="twitter:description" content="<?php echo $pageDescription; ?>" />
<meta property="twitter:image" content="<?php echo 'https://' . $_SERVER["HTTP_HOST"]; ?><?php echo $rootImg; ?>/common/ogp.png" />

<!-- icon -->
<link rel="icon" type="image/png" href="<?php echo $rootImg; ?>/favicons/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="<?php echo $rootImg; ?>/favicons/favicon.svg" />
<link rel="shortcut icon" href="<?php echo $rootImg; ?>/favicons/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="<?php echo $rootImg; ?>/favicons/apple-touch-icon.png" />
<link rel="manifest" href="<?php echo $rootImg; ?>/favicons/site.webmanifest" />

<!-- css -->
<link rel="stylesheet" href="<?php echo $root; ?>/assets/css/style.css?<?php echo $version; ?>">

</head>
<body class="<?php echo $isCommon ? "category--common " : ""; ?>category--<?php echo $categoryName; ?> page--<?php echo $categoryName; ?>__<?php echo $pageName; ?>" data-root="<?php echo $root; ?>">


	<div class="l-wrap" id="target--pagetop">

