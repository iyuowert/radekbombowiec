<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<script type="text/javascript" src="jquery-1.4.1-min.js"></script>
<style type="text/css">
.przyciemnienie{
        position:absolute;
        -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=60)";
        opacity: .6;
        filter: alpha(opacity=60);
        background:#FFFFFF;
        width:100%;
        height:100%;
        z-index:9998;
}
.loading{
        position:absolute;
        width:300px;
        height:100px;
        background: #fff;
        border: #E0E0E0 solid 1px;
        vertical-align:middle;
        text-align:center;
        left: 50%;
        margin-left:-150px;
        z-index:9999;
        top:150px;
        padding-top:50px;
}
</style>
</head>
<body>
<div id="przyciemnienie" class="przyciemnienie"></div>
<div id="loading" class="loading"><img src="nasz_loading.gif" alt="" /></div>
Tutaj zawartość naszej strony....<br /><br /><br /><br /><br /><br /><br />
<a href="link_do_podstrony" class="loadingOn">Jakiś link</a>

<script type="text/javascript" charset="utf-8">
                $.prettyLoader();
                $(document).ready(function(){
                // Po poprawnym załadowaniu strony wyłącza przyciemnienie
                $("#przyciemnienie").fadeOut('normal');
                // Po poprawnym załadowaniu strony wyłącza loading
                $("#loading").fadeOut('normal');
               
                //Po kliknięciu w link z clasą loadingOn uruchamia loading
                $('.loadingOn').click(function() {
                $("#przyciemnienie").fadeIn('normal');
                $("#loading").fadeIn('normal');
                });
                });
        </script>
</body>
</html>
