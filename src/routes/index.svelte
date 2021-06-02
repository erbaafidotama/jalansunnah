<script>
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faChevronDown, faVideo } from '@fortawesome/free-solid-svg-icons';
	import { faYoutube } from '@fortawesome/free-brands-svg-icons';

	import ImgBanner from '../assets/images/lantai.jpg';
	import UstSyafiq28Mei2021 from '../assets/images/ust-syafiq-28mei2021.jpg';
	import UstKhalid28Mei2021 from '../assets/images/ust-khalid-26mei2021.jpg';
	let hiden = true;
	let hiden2 = true;
</script>

<div class="container">
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href="https://bulma.io">
				<!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> -->
				Jalan Sunnah
			</a>

			<a
				role="button"
				class="navbar-burger"
				aria-label="menu"
				aria-expanded="false"
				data-target="navbarBasicExample"
			>
				<span aria-hidden="true" />
				<span aria-hidden="true" />
				<span aria-hidden="true" />
			</a>
		</div>

		<div id="navbarBasicExample" class="navbar-menu">
			<div class="navbar-start">
				<a class="navbar-item" href="/"> Home </a>

				<a class="navbar-item" href="ceramah"> Ceramah </a>

				<div class="navbar-item has-dropdown is-hoverable">
					<a class="navbar-link"> Belajar </a>

					<div class="navbar-dropdown">
						<a class="navbar-item"> Kitab </a>
						<a class="navbar-item" href="ringkasan"> Ringakasan </a>
					</div>
				</div>
			</div>

			<div class="navbar-end">
				<div class="navbar-item">
					<div class="buttons">
						<a href="login" class="button is-primary">
							<strong> Log in </strong>
						</a>
					</div>
				</div>
			</div>
		</div>
	</nav>

	<!-- BANNER -->
	<div class="hero has-background">
		<img src={ImgBanner} alt="banner" class="hero-background banner-background" />
		<div class="hero-body">
			<div class="container is-flex is-justify-content-center">
				<h1 class="tittle banner-text">Jalan Sunnah</h1>
			</div>
		</div>
	</div>

	<!-- BODY -->
	<div class="columns">
		<div class="column is-four-fifths">
			<div class="box box-custom">
				<div class="content p-3">
					<div class="title">Ceramah</div>
					<div class="subtitle">Daftar Ceramah Hari Ini</div>
					<div class="card is-fullwidth">
						<header class="card-header">
							<p class="card-header-title">Ustadz Dr. Syafiq Riza Basalamah, M.</p>
							<button
								class="card-header-icon"
								aria-label="more options"
								on:click={() => (hiden = !hiden)}
							>
								<span class="icon" style="font-size: 1.5em;">
									<Fa icon={faChevronDown} />
								</span>
							</button>
						</header>
						<div class={hiden === true ? 'card-image is-hidden' : 'card-image'}>
							<figure class="image is-4by3">
								<img src={UstSyafiq28Mei2021} alt="Placeholder image" />
							</figure>
						</div>
						<div class={hiden === true ? 'card-content is-hidden' : 'card-content'}>
							<div class="content">
								<div>Judul: <b>Amalan Setelah Ramadhan: "Sedikit Tapi Istiqamah"</b></div>
								<div>Waktu: <b>Jumat, 17 Syawwal 1442H / 28 Mei 2021</b></div>
								<div>Pukul: <b> 19:30:00 - 21:00:00 </b></div>
							</div>
						</div>
						<footer class={hiden === true ? 'card-footer is-hidden' : 'card-footer'}>
							<a
								href="https://www.youtube.com/syafiqrizabasalamah_official"
								class="card-footer-item"
								><span class="icon" style="font-size: 1em;">
									<Fa icon={faYoutube} />
								</span> Youtube</a
							>
							<a href="#" class="card-footer-item"
								><span class="icon" style="font-size: 1em;">
									<Fa icon={faVideo} />
								</span> Zoom</a
							>
						</footer>
					</div>

					<div class="card is-fullwidth">
						<header class="card-header">
							<p class="card-header-title">Ustadz Dr. Khalid Zeed Abdullah Basalamah, Lc., M.A</p>
							<button
								class="card-header-icon"
								aria-label="more options"
								on:click={() => (hiden2 = !hiden2)}
							>
								<span class="icon" style="font-size: 1.5em;">
									<Fa icon={faChevronDown} />
								</span>
							</button>
						</header>
						<div class={hiden2 === true ? 'card-image is-hidden' : 'card-image'}>
							<figure class="image is-4by3">
								<img src={UstKhalid28Mei2021} alt="Placeholder image" />
							</figure>
						</div>
						<div class={hiden2 === true ? 'card-content is-hidden' : 'card-content'}>
							<div class="content">
								<div>
									Judul: <b>
										Kajian Kitab : Riyadhus Shalihin - Takut Kepada Allah (Lanjutan Pembahasan)</b
									>
								</div>
								<div>Waktu: <b> Rabu, 14 Syawal 1442H / 26 Mei 2021</b></div>
								<div>Pukul: <b> 15.30 - 16.30 WIB </b></div>
							</div>
						</div>
						<footer class={hiden2 === true ? 'card-footer is-hidden' : 'card-footer'}>
							<a href="https://www.youtube.com/user/khalidbasalamah" class="card-footer-item"
								><span class="icon" style="font-size: 1em;">
									<Fa icon={faYoutube} />
								</span> Youtube</a
							>
							<a href="#" class="card-footer-item"
								><span class="icon" style="font-size: 1em;">
									<Fa icon={faVideo} />
								</span> Zoom</a
							>
						</footer>
					</div>

					<div class="card is-fullwidth">
						<header class="card-header">
							<p class="card-header-title">Ustadz Dr. Firanda Andirja Abidin, Lc., M.A</p>
							<button
								class="card-header-icon"
								aria-label="more options"
								on:click={() => (hiden2 = !hiden2)}
							>
								<span class="icon" style="font-size: 1.5em;">
									<Fa icon={faChevronDown} />
								</span>
							</button>
						</header>
						<div class={hiden2 === true ? 'card-image is-hidden' : 'card-image'}>
							<figure class="image is-4by3">
								<img src={UstKhalid28Mei2021} alt="Placeholder image" />
							</figure>
						</div>
						<div class={hiden2 === true ? 'card-content is-hidden' : 'card-content'}>
							<div class="content">
								<div>
									Judul: <b>
										Kajian Kitab : Riyadhus Shalihin - Takut Kepada Allah (Lanjutan Pembahasan)</b
									>
								</div>
								<div>Waktu: <b> Rabu, 14 Syawal 1442H / 26 Mei 2021</b></div>
								<div>Pukul: <b> 15.30 - 16.30 WIB </b></div>
							</div>
						</div>
						<footer class={hiden2 === true ? 'card-footer is-hidden' : 'card-footer'}>
							<a href="https://www.youtube.com/user/khalidbasalamah" class="card-footer-item"
								><span class="icon" style="font-size: 1em;">
									<Fa icon={faYoutube} />
								</span> Youtube</a
							>
							<a href="#" class="card-footer-item"
								><span class="icon" style="font-size: 1em;">
									<Fa icon={faVideo} />
								</span> Zoom</a
							>
						</footer>
					</div>

					<div class="card is-fullwidth">
						<header class="card-header">
							<p class="card-header-title">Ustadz Subhan Bawazier</p>
							<button
								class="card-header-icon"
								aria-label="more options"
								on:click={() => (hiden2 = !hiden2)}
							>
								<span class="icon" style="font-size: 1.5em;">
									<Fa icon={faChevronDown} />
								</span>
							</button>
						</header>
						<div class={hiden2 === true ? 'card-image is-hidden' : 'card-image'}>
							<figure class="image is-4by3">
								<img src={UstKhalid28Mei2021} alt="Placeholder image" />
							</figure>
						</div>
						<div class={hiden2 === true ? 'card-content is-hidden' : 'card-content'}>
							<div class="content">
								<div>
									Judul: <b>
										Kajian Kitab : Riyadhus Shalihin - Takut Kepada Allah (Lanjutan Pembahasan)</b
									>
								</div>
								<div>Waktu: <b> Rabu, 14 Syawal 1442H / 26 Mei 2021</b></div>
								<div>Pukul: <b> 15.30 - 16.30 WIB </b></div>
							</div>
						</div>
						<footer class={hiden2 === true ? 'card-footer is-hidden' : 'card-footer'}>
							<a href="https://www.youtube.com/user/khalidbasalamah" class="card-footer-item"
								><span class="icon" style="font-size: 1em;">
									<Fa icon={faYoutube} />
								</span> Youtube</a
							>
							<a href="#" class="card-footer-item"
								><span class="icon" style="font-size: 1em;">
									<Fa icon={faVideo} />
								</span> Zoom</a
							>
						</footer>
					</div>

					<hr />

					<div class="title">Ringkasan</div>
					<div class="card is-fullwidth">
						<header class="card-header">
							<p class="card-header-title">Ustadz Dr. Syafiq Riza Basalamah, M.</p>
							<button
								class="card-header-icon"
								aria-label="more options"
								on:click={() => (hiden = !hiden)}
							>
								<span class="icon" style="font-size: 1.5em;">
									<Fa icon={faChevronDown} />
								</span>
							</button>
						</header>
						<ul>
							<li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
							<li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
							<li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
							<li>Ut non enim metus.</li>
						</ul>
						<footer class="card-footer" />
					</div>

					<div class="card is-fullwidth">
						<header class="card-header">
							<p class="card-header-title">Ustadz Dr. Khalid Zeed Abdullah Basalamah, Lc., M.A</p>
							<button
								class="card-header-icon"
								aria-label="more options"
								on:click={() => (hiden2 = !hiden2)}
							>
								<span class="icon" style="font-size: 1.5em;">
									<Fa icon={faChevronDown} />
								</span>
							</button>
						</header>
						<ul>
							<li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
							<li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
							<li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
							<li>Ut non enim metus.</li>
						</ul>
						<footer class="card-footer" />
					</div>

					<div class="card is-fullwidth">
						<header class="card-header">
							<p class="card-header-title">Ustadz Dr. Firanda Andirja Abidin, Lc., M.A</p>
							<button
								class="card-header-icon"
								aria-label="more options"
								on:click={() => (hiden2 = !hiden2)}
							>
								<span class="icon" style="font-size: 1.5em;">
									<Fa icon={faChevronDown} />
								</span>
							</button>
						</header>
						<ul>
							<li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
							<li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
							<li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
							<li>Ut non enim metus.</li>
						</ul>
						<footer class="card-footer" />
					</div>

					<div class="card is-fullwidth">
						<header class="card-header">
							<p class="card-header-title">Ustadz Subhan Bawazier</p>
							<button
								class="card-header-icon"
								aria-label="more options"
								on:click={() => (hiden2 = !hiden2)}
							>
								<span class="icon" style="font-size: 1.5em;">
									<Fa icon={faChevronDown} />
								</span>
							</button>
						</header>
						<ul>
							<li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
							<li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
							<li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
							<li>Ut non enim metus.</li>
						</ul>
						<footer class="card-footer" />
					</div>
				</div>
			</div>
		</div>
		<div class="column">
			<div class="box">
				<div class="content p-3">
					<div class="subtitle is-flex is-justify-content-center">RINGKASAN</div>
					<ul>
						<li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
						<li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
						<li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
						<li>Ut non enim metus.</li>
					</ul>
				</div>
			</div>

			<div class="box">
				<div class="content p-3">
					<div class="subtitle is-flex is-justify-content-center">JADWAL SALAT</div>
					<ul>
						<li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
						<li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
						<li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
						<li>Ut non enim metus.</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.navbar-brand .navbar-item {
		font-weight: bold;
		font-size: 2rem;
	}

	.banner-background {
		opacity: 0.3;
	}
	.banner-text {
		font-weight: bold;
		font-size: 2rem;
	}

	.card {
		margin-bottom: 1rem;
	}

	.box.box-custom {
		height: 100%;
	}
</style>
