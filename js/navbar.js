class Navbar extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<!-- Responsive navbar-->
			<nav class="navbar navbar-expand-lg navbar-dark bg-deep-forest-green sticky-top">
				<div class="container py-2">
					<button class="btn nav-bar-brand">
						<span class="fs-3 text-decoration-none fw-bold text-crimson" href="#!">Debian</span>
						<span class="fs-3 text-decoration-none fw-bold text-white" href="#!">Nova</span>
					</button>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
							<li class="nav-item fw-bold"><a class="nav-link" aria-current="page" href="../index.html">Home</a></li>
							<li class="nav-item fw-bold"><a class="nav-link" href="../html/about-us.html">About Us</a></li>
							<li class="nav-item fw-bold"><a class="nav-link" href="../html/products.html">Products</a></li>
							<!--
							<li class="nav-item">
								<div class="dropdown">
									<a class="nav-link fw-bold dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" href="#">Product</a>
									<ul class="dropdown-menu">
										<li class="nav-item"><a class="dropdown-item" href="#!">Documentation</a></li>
										<li class="nav-item"><a class="dropdown-item" href="#!">Subscription</a></li>
									</ul>
								</div>
							</li>
							-->
							<li class="nav-item fw-bold"><a class="nav-link" href="#!">Support</a></li>
							<li class="nav-item fw-bold"><a class="nav-link" href="#!">Community</a></li>
							<li class="nav-item">
								<div class="dropdown">
									<a class="nav-link fw-bold dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" href="#!">Learn</a>
									<ul class="dropdown-menu">
										<li class="nav-item"><a class="dropdown-item" href="#!">Training</a></li>
										<li class="nav-item"><a class="dropdown-item" href="#!">Certification</a></li>
									</ul>
								</div>
							</li>
							<li class="nav-item">
								<a class="btn btn-primary ms-3" href="#!">Download</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		`;

		const currentPath = window.location.pathname.split("/").pop() || "index.html"

		this.querySelectorAll(".nav-link").forEach(page => {
			const href = page.getAttribute("href")
			if (!href || href.startsWith("#")) return

			const linkFile = href.split("/").pop()
			if (linkFile === currentPath) {
				page.classList.add("active")
				page.setAttribute("aria-current", "page")
			}
		})
	}
}

customElements.define("custom-navbar", Navbar);
