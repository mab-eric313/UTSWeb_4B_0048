/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/

$(document).on("click", ".chooser", function () {
	$(this).closest(".row").find(".chooser")
		.removeClass("text-white bg-crimson")
		.addClass("text-dark")

	$(this).removeClass("text-dark bg-dark").addClass("text-white bg-crimson")
});

$(document).on("click", ".btn-switch-deliver", function () {
	if ( $(".btn-switch-receiver").html() === "Download" )
		$(".btn-switch-receiver").html("Contact Us")
	else
		$(".btn-switch-receiver").html("Download")
});


// products popover content
const productsTitle = "Debian Nova - "
const productsReleases = ["17.0", "18.0", "19.0"]
const productsNotes = [
	"Personal edition is free forever. Includes core OS, community support, and standard security updates. No credit card required.",
	"Enterprise edition requires an active subscription. Includes priority security patches, SLA-backed support, and access to enterprise features. Contact us for pricing.",
]
const products = {
	desktop: {
		title: productsTitle + "Desktop",
		desc: "A modern, stable Linux desktop experience for your team. Designed for productivity with up-to-date software and seamless hardware compatibility out of the box.",
		releases: productsReleases,
		edition: ["Personal", "Enterprise"],
		note: productsNotes,
		isReleases: true,
		availForFree: true,
	},
	server: {
		title: productsTitle + "Server",
		desc: "Run your production workloads with confidence. Debian Nova Server delivers reliability, security patches, and long-term support for your critical infrastructure.",
		releases: productsReleases,
		isReleases: false,
		availForFree: false,
	},
	iot: {
		title: productsTitle + "IoT",
		desc: "A lightweight and secure foundation for edge devices and embedded systems. Optimized for low-resource environments without compromising stability.",
		releases: productsReleases,
		isReleases: false,
		availForFree: false,
	},
	container: {
		title: productsTitle + "Container",
		desc: "Minimal, secure container images ready for Docker and Kubernetes. Build and deploy faster with a trusted Debian-based foundation.",
		releases: productsReleases,
		edition: ["Personal", "Enterprise"],
		note: productsNotes,
		isReleases: true,
		availForFree: true,
	},
	virtualization: {
		title: productsTitle + "Virtualization",
		desc: "Optimized for virtual environments and hypervisors. Run Debian Nova as a guest or host with full support for KVM, VMware, and VirtualBox.",
		releases: productsReleases,
		edition: ["Personal", "Enterprise"],
		note: productsNotes,
		isReleases: true,
		availForFree: true,
	},
	wsl: {
		title: productsTitle + "WSL",
		desc: "Run Debian Nova natively inside Windows with WSL. Get a full Linux environment without dual boot, perfect for developers on Windows machines.",
		releases: productsReleases,
		edition: ["Personal", "Enterprise"],
		note: productsNotes,
		isReleases: true,
		availForFree: true,
	},
	azure: {
		title: productsTitle + "Azure",
		desc: "Deploy Debian Nova on Microsoft Azure with ease. Pre-configured images ready for cloud workloads, scalable and fully supported in the Azure Marketplace.",
		releases: productsReleases,
		isReleases: false,
		availForFree: false,
	},
	aws: {
		title: productsTitle + "AWS",
		desc: "Launch Debian Nova on Amazon Web Services in minutes. Optimized AMI images for EC2 instances, designed for performance, security, and cost efficiency in the cloud.",
		releases: productsReleases,
		isReleases: false,
		availForFree: false,
	},
	ai: {
		title: productsTitle + "AI",
		desc: "A ready-to-use Linux environment for AI and machine learning workloads. Pre-configured with GPU support and popular AI frameworks out of the box.",
		releases: productsReleases,
		isReleases: false,
		availForFree: false,
	},
}

$("[data-product]").on("click", function () {
	const dataProduct = $(this).attr("data-product")
	const product = products[dataProduct]

	$("#product-popover-title").html(product.title)
	$("#product-popover-desc").html(product.desc)
	$("#product-popover-releases").html(
		product.releases.map((v, i) => `
			<div class="chooser col ${i === 0 ? 'text-white bg-crimson' : 'text-dark bg-white'} border border-1 border-dark">
				${v}
			</div>
		`).join('')
	)

	if (product.isReleases) {
		$("#product-popover-edition").html(`
			<span class="fs-5">Edition:</span>
			<div class="container text-center mb-3">
				<div class="row row-cols-2" id="product-popover-edition-chooser"></div>
			</div>
		`)
		
		$("#product-popover-edition-chooser").html(
			product.edition.map((value, index) => `
				<div class="btn-switch-deliver chooser col ${index === 0 ? 'text-white bg-crimson' : 'text-dark bg-white'} border border-1 border-dark">
					${value}
				</div>
			`).join('')
		)
	} else $("#product-popover-edition").empty()

	if (product.availForFree) {
		$("#product-popover-note").html(`
			<div class="container bg-secondary fs-6 p-5">
				<div>
					<span class="text-info">Note:*</span>
					<ul class="text-white" id="product-popover-note-desc"></ul>
				</div>
			</div>
		`)

		$("#product-popover-note-desc").html(
			product.note.map((value) => `
				<li class="text-white">
					${value}
				</li>
			`).join('')
		)
	} else $("#product-popover-note").empty()
})
