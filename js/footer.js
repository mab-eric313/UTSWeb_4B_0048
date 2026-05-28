class Footer extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <!-- Footer-->
        <footer class="py-5 bg-dark">
            <div class="container px-4 px-lg-5">
				<p class="m-0 text-center text-white">Copyright 2026 &copy;Nova, All Rights Reserved</p>
				<div class="my-4 justify-content-center d-flex gap-4">
					<a class="text-white text-decoration-none hover-underline" href="#">Privacy statement</a>
					<a class="text-white text-decoration-none hover-underline" href="#">Terms of use</a>
					<a class="text-white text-decoration-none hover-underline" href="#">All policies and guidelines</a>
					<a class="text-white text-decoration-none hover-underline" href="#">Digital accessibility</a>
					<a class="text-white text-decoration-none hover-underline" href="#">Cookie preferences</a>
				</div>
			</div>
        </footer>
		`;
	}
}

customElements.define("custom-footer", Footer);
