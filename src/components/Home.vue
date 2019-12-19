<template>
  <div id="app">
    <header>
    <h2><a href="#">Mountain Travel</a></h2>
    <nav>

<li><a href="#">About</a></li>
<li><a href="#">Contact</a></li>
   </nav>
  </header>

  <section class="hero">
    <div class="background-image" style="background-image: url(assets/img/main.jpg);">      
    </div>
    <div class="hero-content-area">
      <h1>Mountain Travel</h1>
      <h3>Unmissable Adventure Tours Around The World</h3>
      <a href="#/login" class="btn">LOGIN</a>
    </div>
  </section>
  
  <section class="destinations">
    <h3 class="title">Some of our destinations:</h3>
    <p>Tired of the ocean? Are the plains too plain? Come along with us on one of our mountain adventures. Here are some pictures from people who have had elevated experiences with us.</p>
    <hr>

    <ul class="grid">
      <li class="small" style="background-image: url(assets/img/mountain1.jpg);"></li>
      <li class="large" style="background-image: url(assets/img/mountain2.jpg);"></li>
      <li class="large" style="background-image: url(assets/img/mountain3.jpg);"></li>
      <li class="small" style="background-image: url(assets/img/mountain4.jpg);"></li>
    </ul>
  </section>

  <section class="packages">
    <h3 class="title">Tour Packages</h3>
    <p>We offer a variety of mountaineering packages. Whether you've climbed Everest or don't even know what a mountain is, we've got the perfect vacation for you.</p>
    <hr>

    <ul class="grid">
      <li>
        <i class="fa fa-compass fa-4x"></i>
        <h4>Guided Trips</h4>
        <p>Looking for the complete experience? Take a tour with one of our experts. They'll show you secrets that you're likely to miss otherwise.</p>
      </li>
      <li>
        <i class="fa fa-camera-retro fa-4x"></i>
        <h4>Photo Trips</h4>
        <p>Want to experience nature's beauty without all of that annoying exercise? Take a photo tour on one of our mountain buses.</p>
      </li>
      <li>
        <i class="fa fa-bicycle fa-4x"></i>
        <h4>Biking Trips</h4>
        <p>If bicycles are more your speed, consider taking a tour through one of our mountain bike paths. We'll provide the bikes, and lunch too!</p>
      </li>
      <li>
        <i class="fa fa-flag-checkered fa-4x"></i>
        <h4>Racing Trips</h4>
        <p>Got a competitive spirit? Sign up for one of our mountain marathons! Try to reach the summit before anyone else.</p>
      </li>
    </ul>
  </section>

  <section class="testimonials">
    <h3 class="title">Testimonials from our adventurers:</h3>
    <hr>
    <p class="quote">Wow! This tour made me realize how much I love mountains. After going on one of these tours, I can safely say that they are my favorite geographic feature, and my favorite word that starts with M.</p>
    <p class="author">- Nipun Goyal</p>
    <p class="quote">I never understood why people cared so much about mountains. But then I went on one of these tours. Now I can't understand people who <em>don't</em> care about mountains!</p>
    <p class="author">- Aditya Kumar</p>
    <p class="quote">If you want to understand the universe, head to the mountains. I mean, seriously. It's like, woah. You know? It's like that.</p>
    <p class="author">- Harshit Gupta</p>
  </section>

  <section class="contact">
    <h3 class="title">Learn more</h3>
    <p>Want to know about our upcoming mountain-related events, or come to one of our mixers? Just sign up for our mailing list. No spam from us, we promise! Except for the spam we give you to keep up your energy while you're hiking through the mountains. We have tons of that.</p>
    <hr>
    <form>
      <input type="email" placeholder="Email">
      <a href="#" class="btn">Subscribe now</a>
    </form>
  </section>

  <footer>
    <p>Images courtesy of <a href="http://unsplash.com/">unsplash</a>.</p>
    <p>Why are you even reading this?! There's never anything interesting in the footer!</p>
    <ul>
      <li><a href="#"><i class="fa fa-twitter-square fa-2x"></i></a></li>
      <li><a href="#"><i class="fa fa-facebook-square fa-2x"></i></a></li>
      <li><a href="#"><i class="fa fa-snapchat-square fa-2x"></i></a></li>
    </ul>
  </footer>
  </div>
</template>

<script>


export default {
  name: 'home',
  components: {

  }
}
</script>

<style>
/*General Styles*/

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html {
	font: normal 16px sans-serif;
	color: #555;
}

ul,
nav {
	list-style: none;
}

a {
	text-decoration: none;
	opacity: 0.75;
	color: #fff;
}

a:hover {
	opacity: 1;
}

a.btn {
	border-radius: 4px;
	text-transform: uppercase;
	font-weight: bold;
	text-align: center;
	background-color: #3f51b5;
	opacity: 1;
}

section {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 100px 80px;
}

section:not(.hero):nth-child(even) {
	background-color: #f5f5f5;
}

.grid {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

hr {
	width: 250px;
	height: 3px;
	background-color: #3f51b5;
	border: 0;
	margin-bottom: 50px;
}

section h3.title {
	text-transform: capitalize;
	font: bold 32px "Open Sans", sans-serif;
	margin-bottom: 30px;
	text-align: center;
}

section p {
	max-width: 775px;
	line-height: 2;
	padding: 0 20px;
	margin-bottom: 30px;
	text-align: center;
}

@media (max-width: 800px) {
	section {
		padding: 50px 20px;
	}
}

/*Header Styles*/

header {
	position: absolute;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 35px 100px 0;
	animation: 1s fadein 0.5s forwards;
	opacity: 0;
	color: #fff;
}

@keyframes fadein {
	100% {
		opacity: 1;
	}
}

header h2 {
	font-family: "Quicksand", sans-serif;
}

header nav {
	display: flex;
	margin-right: -15px;
}

header nav li {
	margin: 0 15px;
}

@media (max-width: 800px) {
	header {
		padding: 20px 50px;
		flex-direction: column;
	}

	header h2 {
		margin-bottom: 15px;
	}
}

/*Hero Styles*/

.hero {
	position: relative;
	justify-content: center;
	text-align: center;
	min-height: 100vh;
	color: #fff;
}

.hero .background-image {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-size: cover;
	z-index: -1;
	background-color: #80a3db;
}

.hero h1 {
	font: bold 60px "Open Sans", sans-serif;
	margin-bottom: 15px;
}

.hero h3 {
	font: normal 28px "Open Sans", sans-serif;
	margin-bottom: 40px;
}

.hero a.btn {
	padding: 20px 46px;
}

.hero-content-area {
	opacity: 0;
	margin-top: 100px;
	animation: 1s slidefade 1s forwards;
}

@keyframes slidefade {
	100% {
		opacity: 1;
		margin: 0;
	}
}

@media (max-width: 800px) {
	.hero {
		min-height: 600px;
	}

	.hero h1 {
		font-size: 48px;
	}

	.hero h3 {
		font-size: 24px;
	}

	.hero a.btn {
		padding: 15px 40px;
	}
}

/*Destinations Section*/

.destinations .grid li {
	height: 350px;
	padding: 20px;
	background-clip: content-box;
	background-size: cover;
	background-position: center;
}

.destinations .grid li.small {
	flex-basis: 30%;
}

.destinations .grid li.large {
	flex-basis: 70%;
}

@media (max-width: 1100px) {
	.destinations .grid li.small,
	.destinations .grid li.large {
		flex-basis: 50%;
	}
}

@media (max-width: 800px) {
	.destinations .grid li.small,
	.destinations .grid li.large {
		flex-basis: 100%;
	}
}

/*Packages Section*/

.packages .grid li {
	padding: 50px;
	flex-basis: 50%;
	text-align: center;
}

.packages .grid li i {
	color: #8c9eff;
}

.packages .grid li h4 {
	font-size: 30px;
	margin: 25px 0;
}

@media (max-width: 800px) {
	.packages .grid li {
		flex-basis: 100%;
		padding: 20px;
	}
}

/*Testimonials Section*/

.testimonials .quote {
	font-size: 22px;
	font-weight: 300;
	line-height: 1.5;
	margin: 40px 0 25px;
}

@media (max-width: 800px) {
	.testimonials .quote {
		font-size: 18px;
		margin: 15px 0;
	}

	.testimonials .author {
		font-size: 14px;
	}
}

/*Contact Section*/

.contact form {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	width: 60%;
}

.contact form .btn {
	padding: 18px 42px;
}

.contact form input {
	padding: 15px;
	margin-right: 30px;
	font-size: 18px;
	color: #555;
	flex: 1;
}

@media (max-width: 1000px) {
	.contact form input {
		flex-basis: 100%;
		margin: 0 0 20px 0;
	}
}

/*Footer Section*/

footer {
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: #607d8b;
	color: #fff;
	padding: 20px 0;
}

footer ul {
	display: flex;
}

footer ul li {
	margin-left: 16px;
}

footer p {
	text-transform: uppercase;
	font-size: 14px;
	opacity: 0.6;
	align-self: center;
}

@media (max-width: 1100px) {
	footer {
		flex-direction: column;
	}

	footer p {
		text-align: center;
		margin-bottom: 20px;
	}

	footer ul li {
		margin: 0 8px;
	}
} 

</style>
