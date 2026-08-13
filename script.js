/* =========================================================
   NK PARTYS AND BALLOONS
   Main JavaScript
========================================================= */


/* =========================================================
   WHATSAPP / SOCIAL LINKS
========================================================= */

const WHATSAPP_NUMBER = "916281143168";

function openWhatsApp() {

    window.open(
        "https://wa.me/" + WHATSAPP_NUMBER,
        "_blank"
    );

}


function openInstagram() {

    window.open(
        "https://instagram.com/nk_partys_and_balloons",
        "_blank"
    );

}


function openMaps() {

    window.open(
        "https://maps.google.com/?q=NK+Partys+Balloons+Osman+Nagar+Tellapur",
        "_blank"
    );

}


/* =========================================================
   NAVIGATION
========================================================= */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


function toggleMobileMenu() {

    const menu =
        document.getElementById("mobile-menu");

    menu.classList.toggle("hidden");

}


function mobileNavigate(id) {

    scrollToSection(id);

    document
        .getElementById("mobile-menu")
        .classList.add("hidden");

}


/* =========================================================
   HERO SLIDESHOW
========================================================= */

const heroImages = [

    "https://i.ibb.co/v4zCrpws/Whats-App-Image-2026-05-22-at-11-48-29-AM.jpg",

    "https://i.ibb.co/9HV8X2Z0/Whats-App-Image-2026-05-22-at-11-48-30-AM-1.jpg",

    "https://i.ibb.co/wNH5rF7M/Whats-App-Image-2026-05-22-at-11-51-07-AM-3.jpg",

    "https://i.ibb.co/xq9J4QyJ/Whats-App-Image-2026-05-22-at-11-49-47-AM-2.jpg",

    "https://i.ibb.co/zTB8cMD9/Whats-App-Image-2026-05-22-at-6-37-26-PM-1.jpg",

    "https://i.ibb.co/rKbHDT0D/Whats-App-Image-2026-05-22-at-8-27-29-PM-1.jpg",

    "https://i.ibb.co/FqjvSF0t/Whats-App-Image-2026-05-22-at-8-29-19-PM-1.jpg",

    "https://i.ibb.co/jkYbsR3j/Whats-App-Image-2026-05-22-at-8-31-22-PM-1.jpg"

];


const slidesContainer =
    document.getElementById("hero-slides");


heroImages.forEach(
    (image, index) => {

        const slide =
            document.createElement("div");

        slide.className =
            "hero-slide";

        if (index === 0) {

            slide.classList.add("active");

        }

        slide.style.backgroundImage =
            `url("${image}")`;

        slidesContainer.appendChild(slide);

    }
);


let currentSlide = 0;


setInterval(() => {

    const slides =
        document.querySelectorAll(".hero-slide");

    if (!slides.length) return;

    slides[currentSlide]
        .classList.remove("active");

    currentSlide =
        (currentSlide + 1) %
        slides.length;

    slides[currentSlide]
        .classList.add("active");

}, 4000);


/* =========================================================
   SERVICES DATA
========================================================= */

const services = [

    {
        name: "Birthday Decorations",

        frame:
            "https://i.ibb.co/v4zCrpws/Whats-App-Image-2026-05-22-at-11-48-29-AM.jpg",

        images: [

            {
                name: "Arch-01",
                url:
                    "https://i.ibb.co/v4zCrpws/Whats-App-Image-2026-05-22-at-11-48-29-AM.jpg"
            },

            {
                name: "Arch-02",
                url:
                    "https://i.ibb.co/9HV8X2Z0/Whats-App-Image-2026-05-22-at-11-48-30-AM-1.jpg"
            },

            {
                name: "Arch-03",
                url:
                    "https://i.ibb.co/vvvjmdvG/Whats-App-Image-2026-05-22-at-11-48-30-AM-2.jpg"
            },

            {
                name: "Arch-04",
                url:
                    "https://i.ibb.co/bgVnsgR6/Whats-App-Image-2026-05-22-at-11-48-30-AM.jpg"
            },

            {
                name: "Basic Birthday 1",
                url:
                    "https://i.ibb.co/WW1VsxrN/Whats-App-Image-2026-05-22-at-11-47-35-AM-1.jpg"
            },

            {
                name: "Basic Birthday 2",
                url:
                    "https://i.ibb.co/wtJcm5z/Whats-App-Image-2026-05-22-at-11-47-35-AM.jpg"
            },

            {
                name: "Basic Birthday 3",
                url:
                    "https://i.ibb.co/F4khmxcF/Whats-App-Image-2026-05-22-at-11-47-36-AM.jpg"
            }

        ]
    },


    {
        name: "Ring Decorations",

        frame:
            "https://i.ibb.co/xq9J4QyJ/Whats-App-Image-2026-05-22-at-11-49-47-AM-2.jpg",

        images: [

            {
                name: "Ring-01",
                url:
                    "https://i.ibb.co/LXDg4WxD/Whats-App-Image-2026-05-22-at-11-49-46-AM-2.jpg"
            },

            {
                name: "Ring-02",
                url:
                    "https://i.ibb.co/BS4BzKh/Whats-App-Image-2026-05-22-at-11-49-47-AM-1.jpg"
            },

            {
                name: "Ring-03",
                url:
                    "https://i.ibb.co/xq9J4QyJ/Whats-App-Image-2026-05-22-at-11-49-47-AM-2.jpg"
            },

            {
                name: "Ring-04",
                url:
                    "https://i.ibb.co/hJWx8YxX/Whats-App-Image-2026-05-22-at-11-49-47-AM.jpg"
            }

        ]
    },


    {
        name: "Stage Decorations",

        frame:
            "https://i.ibb.co/wNH5rF7M/Whats-App-Image-2026-05-22-at-11-51-07-AM-3.jpg",

        images: [

            {
                name: "Stage-01",
                url:
                    "https://i.ibb.co/Wv62w5z1/Whats-App-Image-2026-05-22-at-11-51-06-AM.jpg"
            },

            {
                name: "Stage-02",
                url:
                    "https://i.ibb.co/WNcGHK7n/Whats-App-Image-2026-05-22-at-11-51-07-AM-1.jpg"
            },

            {
                name: "Stage-03",
                url:
                    "https://i.ibb.co/v4NtsT3D/Whats-App-Image-2026-05-22-at-11-51-07-AM-2.jpg"
            },

            {
                name: "Stage-04",
                url:
                    "https://i.ibb.co/wNH5rF7M/Whats-App-Image-2026-05-22-at-11-51-07-AM-3.jpg"
            },

            {
                name: "Stage-05",
                url:
                    "https://i.ibb.co/mVnh7vxN/Whats-App-Image-2026-05-22-at-11-51-07-AM.jpg"
            },

            {
                name: "Stage-06",
                url:
                    "https://i.ibb.co/Yq0gbXc/Whats-App-Image-2026-05-22-at-11-51-08-AM.jpg"
            }

        ]
    },


    {
        name: "House Warming",

        frame:
            "https://i.ibb.co/wbgFq0r/Whats-App-Image-2026-05-22-at-11-57-13-AM-1.jpg",

        images: [

            {
                name: "Housewarming-01",
                url:
                    "https://i.ibb.co/wbgFq0r/Whats-App-Image-2026-05-22-at-11-57-13-AM-1.jpg"
            },

            {
                name: "Housewarming-02",
                url:
                    "https://i.ibb.co/hRW7YWt9/Whats-App-Image-2026-05-22-at-11-57-13-AM-2.jpg"
            }

        ]
    },


    {
        name: "Wedding Decorations",

        frame:
            "https://i.ibb.co/zTB8cMD9/Whats-App-Image-2026-05-22-at-6-37-26-PM-1.jpg",

        images: [

            {
                name: "Wedding-01",
                url:
                    "https://i.ibb.co/zTB8cMD9/Whats-App-Image-2026-05-22-at-6-37-26-PM-1.jpg"
            },

            {
                name: "Wedding-02",
                url:
                    "https://i.ibb.co/NgWp1Rqr/Whats-App-Image-2026-05-22-at-6-37-26-PM-2.jpg"
            }

        ]
    },


    {
        name: "Haldi & Mehndi",

        frame:
            "https://i.ibb.co/svMBKjqC/Whats-App-Image-2026-05-22-at-8-27-28-PM.jpg",

        images: [

            {
                name: "Haldi-01",
                url:
                    "https://i.ibb.co/svMBKjqC/Whats-App-Image-2026-05-22-at-8-27-28-PM.jpg"
            },

            {
                name: "Haldi-02",
                url:
                    "https://i.ibb.co/rKbHDT0D/Whats-App-Image-2026-05-22-at-8-27-29-PM-1.jpg"
            }

        ]
    },


    {
        name: "Mandap Decorations",

        frame:
            "https://i.ibb.co/fYKdRRdL/Whats-App-Image-2026-05-22-at-8-27-29-PM.jpg",

        images: [

            {
                name: "Mandap-01",
                url:
                    "https://i.ibb.co/fYKdRRdL/Whats-App-Image-2026-05-22-at-8-27-29-PM.jpg"
            }

        ]
    },


    {
        name: "Special Entry",

        frame:
            "https://i.ibb.co/GQYLX2r6/Whats-App-Image-2026-05-22-at-6-37-26-PM.jpg",

        images: [

            {
                name: "Entry-01",
                url:
                    "https://i.ibb.co/zTB8cMD9/Whats-App-Image-2026-05-22-at-6-37-26-PM-1.jpg"
            },

            {
                name: "Entry-02",
                url:
                    "https://i.ibb.co/NgWp1Rqr/Whats-App-Image-2026-05-22-at-6-37-26-PM-2.jpg"
            },

            {
                name: "Entry-03",
                url:
                    "https://i.ibb.co/GQYLX2r6/Whats-App-Image-2026-05-22-at-6-37-26-PM.jpg"
            },

            {
                name: "Entry-04",
                url:
                    "https://i.ibb.co/Pvk8VVsg/Whats-App-Image-2026-05-22-at-6-37-27-PM.jpg"
            }

        ]
    },


    {
        name: "Flower Decorations",

        frame:
            "https://i.ibb.co/rKbHDT0D/Whats-App-Image-2026-05-22-at-8-27-29-PM-1.jpg",

        images: [

            {
                name: "Flower-01",
                url:
                    "https://i.ibb.co/svMBKjqC/Whats-App-Image-2026-05-22-at-8-27-28-PM.jpg"
            },

            {
                name: "Flower-02",
                url:
                    "https://i.ibb.co/rKbHDT0D/Whats-App-Image-2026-05-22-at-8-27-29-PM-1.jpg"
            },

            {
                name: "Flower-03",
                url:
                    "https://i.ibb.co/fYKdRRdL/Whats-App-Image-2026-05-22-at-8-27-29-PM.jpg"
            },

            {
                name: "Flower-04",
                url:
                    "https://i.ibb.co/wbgFq0r/Whats-App-Image-2026-05-22-at-11-57-13-AM-1.jpg"
            },

            {
                name: "Flower-05",
                url:
                    "https://i.ibb.co/hRW7YWt9/Whats-App-Image-2026-05-22-at-11-57-13-AM-2.jpg"
            }

        ]
    },


    {
        name: "Engagement Decorations",

        frame:
            "https://i.ibb.co/xq9J4QyJ/Whats-App-Image-2026-05-22-at-11-49-47-AM-2.jpg",

        images: [

            {
                name: "Engagement-01",
                url:
                    "https://i.ibb.co/xq9J4QyJ/Whats-App-Image-2026-05-22-at-11-49-47-AM-2.jpg"
            },

            {
                name: "Engagement-02",
                url:
                    "https://i.ibb.co/hJWx8YxX/Whats-App-Image-2026-05-22-at-11-49-47-AM.jpg"
            }

        ]
    },


    {
        name: "Baby Shower",

        frame:
            "https://i.ibb.co/FqjvSF0t/Whats-App-Image-2026-05-22-at-8-29-19-PM-1.jpg",

        images: [

            {
                name: "BabyShower-01",
                url:
                    "https://i.ibb.co/b5hRx2kW/Whats-App-Image-2026-05-22-at-8-29-18-PM.jpg"
            },

            {
                name: "BabyShower-02",
                url:
                    "https://i.ibb.co/FqjvSF0t/Whats-App-Image-2026-05-22-at-8-29-19-PM-1.jpg"
            },

            {
                name: "BabyShower-03",
                url:
                    "https://i.ibb.co/5gyG6RxR/Whats-App-Image-2026-05-22-at-8-29-19-PM.jpg"
            }

        ]
    },


    {
        name: "Naming Ceremony",

        frame:
            "https://i.ibb.co/bM4XgHPv/Whats-App-Image-2026-05-22-at-6-39-38-PM-1.jpg",

        images: [

            {
                name: "Naming-01",
                url:
                    "https://i.ibb.co/bM4XgHPv/Whats-App-Image-2026-05-22-at-6-39-38-PM-1.jpg"
            },

            {
                name: "Naming-02",
                url:
                    "https://i.ibb.co/dJLBRkyd/Whats-App-Image-2026-05-22-at-6-39-38-PM.jpg"
            },

            {
                name: "Naming-03",
                url:
                    "https://i.ibb.co/Hp4Sx9jb/Whats-App-Image-2026-05-22-at-6-39-39-PM.jpg"
            }

        ]
    },


    {
        name: "Surprise Decorations",

        frame:
            "https://i.ibb.co/jkYbsR3j/Whats-App-Image-2026-05-22-at-8-31-22-PM-1.jpg",

        images: [

            {
                name: "Surprise-01",
                url:
                    "https://i.ibb.co/jkYbsR3j/Whats-App-Image-2026-05-22-at-8-31-22-PM-1.jpg"
            },

            {
                name: "Surprise-02",
                url:
                    "https://i.ibb.co/vxpQJVp8/Whats-App-Image-2026-05-22-at-8-31-22-PM.jpg"
            },

            {
                name: "Surprise-03",
                url:
                    "https://i.ibb.co/0p7FdLpf/Whats-App-Image-2026-05-22-at-8-31-23-PM-1.jpg"
            },

            {
                name: "Surprise-04",
                url:
                    "https://i.ibb.co/d4BjdshD/Whats-App-Image-2026-05-22-at-8-31-23-PM.jpg"
            }

        ]
    }

];


/* =========================================================
   RENDER SERVICES
========================================================= */

const servicesGrid =
    document.getElementById("services-grid");


services.forEach(
    (service, index) => {

        const card =
            document.createElement("div");

        card.className =
            "service-card fade-in";

        card.innerHTML = `

            <img
                src="${service.frame}"
                alt="${service.name}"
                class="service-image"
                loading="lazy"
            >

            <div class="service-info">

                <h3>
                    ${service.name}
                </h3>

                <p>
                    ${service.images.length} designs available
                </p>

            </div>

        `;

        card.addEventListener(
            "click",
            () => openModal(index)
        );

        servicesGrid.appendChild(card);

    }
);


/* =========================================================
   RENDER GALLERY
========================================================= */

const galleryGrid =
    document.getElementById("gallery-grid");


services.forEach(service => {

    service.images.forEach(image => {

        const item =
            document.createElement("div");

        item.className =
            "gallery-item fade-in";

        item.innerHTML = `

            <img
                src="${image.url}"
                alt="${image.name}"
                loading="lazy"
            >

            <div class="gallery-overlay">

                <p>
                    ${service.name}
                </p>

                <button
                    class="select-button"
                >
                    Select
                </button>

            </div>

        `;


        item
            .querySelector(".select-button")
            .addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    openBooking(
                        service.name,
                        image.name
                    );

                }
            );


        galleryGrid.appendChild(item);

    });

});


/* =========================================================
   SERVICE MODAL
========================================================= */

function openModal(index) {

    const service =
        services[index];

    document
        .getElementById("modal-title")
        .textContent =
        service.name;


    const modalGrid =
        document.getElementById("modal-grid");

    modalGrid.innerHTML = "";


    service.images.forEach(image => {

        const design =
            document.createElement("div");

        design.className =
            "modal-design";


        design.innerHTML = `

            <img
                src="${image.url}"
                alt="${image.name}"
            >

            <div class="modal-select">

                <span
                    class="select-button"
                >
                    Select This Decoration
                </span>

            </div>

        `;


        design
            .querySelector(".modal-select")
            .addEventListener(
                "click",
                () => {

                    openBooking(
                        service.name,
                        image.name
                    );

                }
            );


        modalGrid.appendChild(design);

    });


    document
        .getElementById("service-modal")
        .classList.remove("hidden");

}


function closeModal() {

    document
        .getElementById("service-modal")
        .classList.add("hidden");

}


/* =========================================================
   BOOKING
========================================================= */

let selectedDecoration = "";


function openBooking(service, design) {

    selectedDecoration =
        `${service} – ${design}`;


    document
        .getElementById("booking-selected")
        .textContent =
        "Selected: " + selectedDecoration;


    closeModal();


    document
        .getElementById("booking-modal")
        .classList.remove("hidden");

}


function closeBooking() {

    document
        .getElementById("booking-modal")
        .classList.add("hidden");

}


/* =========================================================
   BOOKING FORM
========================================================= */

document
    .getElementById("booking-form")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("b-name")
                    .value;

            const phone =
                document
                    .getElementById("b-phone")
                    .value;

            const date =
                document
                    .getElementById("b-date")
                    .value;

            const location =
                document
                    .getElementById("b-location")
                    .value;

            const message =
                document
                    .getElementById("b-msg")
                    .value;


            const whatsappMessage =

                `Hello NK Partys and Balloons

I want to book:
${selectedDecoration}

Name: ${name}

Phone: ${phone}

Date: ${date}

Location: ${location}

Message: ${message}`;


            const url =
                "https://wa.me/" +
                WHATSAPP_NUMBER +
                "?text=" +
                encodeURIComponent(
                    whatsappMessage
                );


            window.open(
                url,
                "_blank"
            );


            closeBooking();

        }
    );


/* =========================================================
   CONTACT FORM
========================================================= */

document
    .getElementById("contact-form")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("c-name")
                    .value;

            const phone =
                document
                    .getElementById("c-phone")
                    .value;

            const message =
                document
                    .getElementById("c-msg")
                    .value;


            const whatsappMessage =

                `Hello NK Partys and Balloons

Name: ${name}

Phone: ${phone}

Message:
${message}`;


            const url =
                "https://wa.me/" +
                WHATSAPP_NUMBER +
                "?text=" +
                encodeURIComponent(
                    whatsappMessage
                );


            window.open(
                url,
                "_blank"
            );

        }
    );


/* =========================================================
   FADE-IN ANIMATION
========================================================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("visible");

                }

            });

        },
        {
            threshold: 0.1
        }
    );


function observeFadeElements() {

    document
        .querySelectorAll(".fade-in")
        .forEach(element => {

            observer.observe(element);

        });

}


observeFadeElements();


/* =========================================================
   COUNTER ANIMATION
========================================================= */

const counterObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting &&
                    !entry.target.dataset.done
                ) {

                    entry.target.dataset.done =
                        "1";


                    const target =
                        parseInt(
                            entry.target.dataset.count
                        );


                    let current = 0;


                    const step =
                        Math.max(
                            1,
                            Math.ceil(
                                target / 60
                            )
                        );


                    const interval =
                        setInterval(
                            () => {

                                current += step;


                                if (
                                    current >=
                                    target
                                ) {

                                    current =
                                        target;

                                    clearInterval(
                                        interval
                                    );

                                }


                                entry.target
                                    .textContent =
                                    current + "+";

                            },
                            30
                        );

                }

            });

        },
        {
            threshold: 0.5
        }
    );


document
    .querySelectorAll("[data-count]")
    .forEach(element => {

        counterObserver.observe(element);

    });


/* =========================================================
   CLOSE MODALS WHEN CLICKING OUTSIDE
========================================================= */

document
    .getElementById("service-modal")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closeModal();

            }

        }
    );


document
    .getElementById("booking-modal")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closeBooking();

            }

        }
    );


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModal();

            closeBooking();

        }

    }
);


/* =========================================================
   LUCIDE ICONS
========================================================= */

if (
    typeof lucide !== "undefined"
) {

    lucide.createIcons();

}