var servers = ["live.1337x-proxy.workers.dev"];
const server = servers[Math.floor(Math.random()*servers.length)];
var html = `<div class="mobile-menu"></div>
<div class="top-bar">
<div class="container">
<div class="top-bar-left">
</div>
<ul class="top-bar-nav">
</ul>
</div>
</div>
<header>
<div class="container">
<a href="#" class="navbar-menu"><span></span><span></span><span></span></a>
<nav>
<ul class="main-navigation">
<li class="green"><a href="https://`+server+`/home/" title="Full Home Page">Full Home Page</a></li>
<li><a href="https://`+server+`/top-100" title="Top 100 Torrents">Top 100</a></li>
<li><a href="https://`+server+`/trending" title="Trending Torrents">Trending</a></li>
<li><a href="https://telegram.dog/joinchat/5PYMXpqIV2M4MDJh" title="Telegram">Telegram</a></li> 
</ul>
</nav>
</div>
</header>
<main class="container">
<div class="row">
<div class="col-8 col-push-2 page-content ">
<div class="logo"><a href="https://`+server+`/home/"><img alt="logo" src="https://1337x-to.pages.dev/images/logo.svg"><img alt="logo" src="https://1337x-to.pages.dev/images/logo-white-d.svg"></a></div>
<div class="search-box">
<form id="search-index-form" method="get" action="https://`+server+`/srch">
<input type="search" placeholder="Search for torrents.." id="autocomplete" name="search" class="ui-autocomplete-input form-control">
<button type="submit" class="btn btn-search"><i class="flaticon-search"></i><span>Search</span></button>
</form>
</div>
<div class="news">
<div class="box-info">
<div class="box-info-heading clearfix"><h1> 1337x Updates</h1> <span class="box-info-right box-info-time"><i class="flaticon-time"></i>Today</span></div>
<div class="box-info-detail clearfix">
<p>This is a HTML Homepage only, hosted on https://github.com/1337-to/1337x-homepage and doesn't voilare any copyright laws. The search button redirect to another sites depending on availablity by 1337x Proxy Provider Skynet Area 53 Servers. For DMCA contact original site at 1337x.to</p>
</div>
</div>
</div>
</div>
</div>
</main>
<ul class="search-categories">
<li>
<h3><a href="https://`+server+`/popular-movies" title="Movies"><span class="icon"><i class="flaticon-movies"></i></span>Movies </a></h3>
<a href="https://`+server+`/movie-library/1/" class="library">Library</a>
</li>
<li>
<h3><a href="https://`+server+`/popular-tv" title="Television"><span class="icon"><i class="flaticon-tv"></i></span>Television </a></h3>
<a href="https://`+server+`/series-library/a/1/" class="library">Library</a>
</li>
<li>
<h3><a href="https://`+server+`/popular-games" title="Games"><span class="icon"><i class="flaticon-games"></i></span>Games </a></h3>
</li>
<li>
<h3><a href="https://`+server+`/popular-music" title="Musics"><span class="icon"><i class="flaticon-music"></i></span>Music </a></h3>
</li>
<li>
<h3><a href="https://`+server+`/popular-apps" title="Applications"><span class="icon"><i class="flaticon-apps"></i></span>Applications </a></h3>
</li>
<li>
<h3><a href="https://`+server+`" title="Other"><span class="icon"><i class="flaticon-ninja-portrait"></i></span>Anime </a></h3>
</li>
<li>
<h3><a href="https://`+server+`/popular-documentaries" title="Documentries"><span class="icon"><i class="flaticon-documentary"></i></span>Documentaries </a></h3>
</li>
<li>
<h3><a href="https://`+server+`/popular-other" title="Other"><span class="icon"><i class="flaticon-other"></i></span>Other </a></h3>
</li>
<li>
<h3><a href="https://`+server+`/popular-xxx" title="XXX"><span class="icon"><i class="flaticon-xxx"></i></span>XXX </a></h3>
</li>
</ul>
<footer>
<div class="bitcoin">
<div class="bitcoin-icon-wrap">
<span class="bitcoin-icon"><i class="flaticon-bitcoin red"></i></span>
</div>
<span class="bitcoin-text"><span>Bitcoin Donate: </span><a href="bitcoin:3BgSznxLB5u4WiuVERb1dKWeTqSSwK9NPW">3BgSznxLB5u4WiuVERb1dKWeTqSSwK9NPW</a></span>
</div>
<a class="scroll-top" href="#"><i class="flaticon-up"></i></a>
<ul>
<li><a href="https://1337x-to.pages.dev">Home</a></li>
<li class="active"><a href="https://`+server+`/home/">Full Home Page</a></li>
<li><a href="https://telegram.dog/joinchat/5PYMXpqIV2M4MDJh">Telegram</a></li> 
</ul>
<p class="info">1337x 1001 - 2050, <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2F1337x.netlify.app&amp;count_bg=%2379C83D&amp;title_bg=%23555555&amp;icon=&amp;icon_color=%23E7E7E7&amp;title=hits&amp;edge_flat=false"></a> This is just a proxy site, dmca original site and data from here will be automatically removed.</p>
</footer>
<script src="https://1337x-to.pages.dev/js/jquery-1.11.0.min.js"></script>
<script src="https://1337x-to.pages.dev/js/jquery-ui.js"></script>
<script src="https://1337x-to.pages.dev/js/auto-searchv2.js"></script>
<script src="https://1337x-to.pages.dev/js/main.js"></script>`;
$('body').html(html);
