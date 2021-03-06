<!doctype html>
<html lang="en" ng-app="lincsDcic">
<head>
	<meta charset="utf-8">
	<title>BD2K-LINCS DCIC</title>

    <link rel="shortcut icon" href="images/dcic-logo/favicon.png?v=2">

	<!-- CSS -->
	<link rel="stylesheet" href="/lib/bower_components/bootstrap/dist/css/bootstrap.css">
	<link rel="stylesheet" href="/lib/bower_components/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" href="/lib/bower_components/bootstrap-social/bootstrap-social.css">
	<link rel="stylesheet" href="/lib/bower_components/fullcalendar/dist/fullcalendar.min.css">
    <link rel="stylesheet" href="/lib/jquery-ui-1.11.4.custom/jquery-ui.min.css">
    <link href='http://fonts.googleapis.com/css?family=Archivo+Narrow:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="style/main.css">
	<link rel="stylesheet" href="style/nav.css">
	<link rel="stylesheet" href="style/index.css">
	<link rel="stylesheet" href="style/side.css">

    <!-- Google Analytics -->
	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-57790233-1', 'auto');
		ga('send', 'pageview');
	</script>
</head>

<body>
    <!-- This pushes the footer to the bottom. -->
    <div id="wrapper">

        <!-- This creates the top level header that spans the entire width -->
        <div ng-include="'view/partial/header.html'"></div>

        <!-- ng-view is used rather than ng-include to handle routing. -->
        <div id="content-wrapper" class="container" ng-view></div>

    </div>

    <div ng-include="'view/partial/footer.html'"></div>
    
	<!-- Libraries -->
	<script src="/lib/bower_components/angular/angular.js"></script>
	<script src="/lib/bower_components/angular-route/angular-route.js"></script>
	<script src="/lib/bower_components/jquery/jquery.min.js"></script>
	<script src="/lib/jquery-ui-1.11.4.custom/jquery-ui.min.js"></script>
	<script src='/lib/bower_components/moment/min/moment.min.js'></script>
	<script src='/lib/bower_components/fullcalendar/dist/fullcalendar.min.js'></script>
	<script src='/lib/bower_components/fullcalendar/dist/gcal.js'></script>
	<script src="/lib/bower_components/bootstrap/js/collapse.js"></script>
	<script src="/lib/bower_components/bootstrap/js/carousel.js"></script>
	<script src="/lib/bower_components/bootstrap/js/transition.js"></script>
	<script src="/lib/bower_components/underscore/underscore-min.js"></script>
	<script src="/lib/twitter-fetcher.min.js"></script>
	
	<!-- ************************ Application ************************ -->
	<!-- Data -->
    <script type="text/javascript" src="js/data/apis.js"></script>
    <script type="text/javascript" src="js/data/mini-symposium.js"></script>
	<script type="text/javascript" src="js/data/carousel.js"></script>
	<script type="text/javascript" src="js/data/datacenters.js"></script>
	<script type="text/javascript" src="js/data/datasets.js"></script>
	<script type="text/javascript" src="js/data/external-dsrp.js"></script>
    <script type="text/javascript" src="js/data/index.js"></script>
    <script type="text/javascript" src="js/data/internal-dsrp.js"></script>
    <script type="text/javascript" src="js/data/intro.js"></script>
    <script type="text/javascript" src="js/data/funding.js"></script>
	<script type="text/javascript" src="js/data/news.js"></script>
	<script type="text/javascript" src="js/data/publications.js"></script>
	<script type="text/javascript" src="js/data/nav.js"></script>
	<script type="text/javascript" src="js/data/seminar-series.js"></script>
	<script type="text/javascript" src="js/data/summer-fellows-2015.js"></script>
	<script type="text/javascript" src="js/data/training.js"></script>
	<script type="text/javascript" src="js/data/team.js"></script>
	<script type="text/javascript" src="js/data/tools.js"></script>
	<script type="text/javascript" src="js/data/webinars.js"></script>
	<script type="text/javascript" src="js/data/workshops-etc.js"></script>

	<!-- Extra functionality -->
	<script type="text/javascript" src="js/analyze.js"></script>
	<script type="text/javascript" src="js/calendar.js"></script>
	<script type="text/javascript" src="js/email.js"></script>
	<script type="text/javascript" src="js/extra.js"></script>
	<script type="text/javascript" src="js/edsrapp.js"></script>
	<script type="text/javascript" src="js/filters.js"></script>

	<!-- Routes -->
	<script type="text/javascript" src="js/app.js"></script>
	<!-- ************************ End application ************************ -->
</body>
</html>
