// 1. DATA STORE

const path = "Media and Files/";

const portfolioData = [
    {
        id: 1,
        title: "Mini M",
        type: "photos",
        category: "Automotive Photography",
        image: `${path}Photos/M235i Back.JPG`,
        desc: "Rear perspective focusing on stance, shadow, and automotive brand identity.",
        tools: "Lightroom, iPhone / Camera Workflow",
        format: "3:4 Cinematic"
    },
    {
        id: 2,
        title: "Yellow DRL's",
        type: "photos",
        category: "Automotive Photography",
        image: `${path}Photos/Both DRL.JPG`,
        desc: "Lighting-focused shot built around modified DRLs and aggressive front-end framing.",
        tools: "Lightroom, Mobile Editing",
        format: "3:4 Cinematic"
    },
    {
        id: 3,
        title: "She's Resting",
        type: "photos",
        category: "Automotive Photography",
        image: `${path}Photos/Full Front.JPG`,
        desc: "Static front-end composition designed for social-first car page content.",
        tools: "Lightroom, Social Media Framing",
        format: "9:16 Vertical"
    },
    {
        id: 4,
        title: "Sleeping Ghxty",
        type: "photos",
        category: "Automotive Photography",
        image: `${path}Photos/Dark Front.JPG`,
        desc: "Night study with high shadow contrast and darker visual branding.",
        tools: "Lightroom",
        format: "3:4 Vertical"
    },
    {
        id: 5,
        title: "Scary M235i",
        type: "photos",
        category: "Automotive Photography",
        image: `${path}Photos/Left Side.JPG`,
        desc: "Atmospheric side profile highlighting body lines under low light.",
        tools: "Lightroom",
        format: "3:4 Vertical"
    },
    {
        id: 6,
        title: "APEX Wheels",
        type: "photos",
        category: "Automotive Photography",
        image: `${path}Photos/APEX FL.JPG`,
        desc: "Wheel and brake detail shot focused on product-style automotive visuals.",
        tools: "Lightroom",
        format: "3:4 Vertical"
    },
    {
        id: 7,
        title: "She's Awake",
        type: "photos",
        category: "Automotive Photography",
        image: `${path}Photos/Front Full.JPG`,
        desc: "Symmetrical front composition built for social media presentation.",
        tools: "Lightroom",
        format: "3:4 Vertical"
    },
    {
        id: 8,
        title: "Get Low",
        type: "photos",
        category: "Automotive Photography",
        image: `${path}Photos/FL low.JPG`,
        desc: "Low-angle static shot emphasizing stance and presence.",
        tools: "Lightroom",
        format: "3:4 Vertical"
    },
    {
        id: 9,
        title: "BR Apex",
        type: "photos",
        category: "Automotive Photography",
        image: `${path}Photos/BR Apex.JPG`,
        desc: "Rear-quarter wheel detail with a stronger focus on automotive product styling.",
        tools: "Lightroom",
        format: "3:4 Vertical"
    },
    {
        id: 10,
        title: "One Eye Open",
        type: "photos",
        category: "Automotive Photography",
        image: `${path}Photos/Right DRL.JPG`,
        desc: "Close-up headlight signature designed for dramatic automotive branding.",
        tools: "Lightroom",
        format: "3:4 Vertical"
    },
    {
        id: 11,
        title: "POV",
        type: "photos",
        category: "Automotive Photography",
        image: `${path}Photos/Back pov.JPG`,
        desc: "Perspective-based automotive shot built for quick social engagement.",
        tools: "Lightroom",
        format: "3:4 Vertical"
    },
    {
        id: 12,
        title: "Apex #4",
        type: "photos",
        category: "Automotive Photography",
        image: `${path}Photos/BL Apex.JPG`,
        desc: "Wheel-focused rear detail with clean vertical composition.",
        tools: "Lightroom",
        format: "3:4 Vertical"
    },
    {
        id: 13,
        title: "Baby M2",
        type: "photos",
        category: "Automotive Photography",
        image: `${path}Photos/BR lights.JPG`,
        desc: "Rear lighting composition with a performance-focused visual tone.",
        tools: "Lightroom",
        format: "3:4 Vertical"
    },
    {
        id: 14,
        title: "Apex Wheels at Night",
        type: "photos",
        category: "Automotive Photography",
        image: `${path}Photos/FL Apex.JPG`,
        desc: "Low-light wheel detail shot for automotive brand styling.",
        tools: "Lightroom",
        format: "3:4 Vertical"
    },
    {
        id: 15,
        title: "Sick Ghxty",
        type: "photos",
        category: "Automotive Photography",
        image: `${path}Photos/Garage.JPG`,
        desc: "Garage composition with shadow-heavy creative direction.",
        tools: "Lightroom",
        format: "3:4 Vertical"
    },
    {
        id: 16,
        title: "Hood Open - Close Up",
        type: "photos",
        category: "Automotive Photography",
        image: `${path}Photos/HO Close.JPG`,
        desc: "Engine bay close-up with a mechanical detail focus.",
        tools: "Lightroom",
        format: "3:4 Vertical"
    },
    {
        id: 17,
        title: "Hood Open - Far",
        type: "photos",
        category: "Automotive Photography",
        image: `${path}Photos/HO Far.JPG`,
        desc: "Wider engine bay composition with automotive documentation value.",
        tools: "Lightroom",
        format: "3:4 Vertical"
    },
    {
        id: 18,
        title: "Interior",
        type: "photos",
        category: "Automotive Photography",
        image: `${path}Photos/Inside.JPG`,
        desc: "Interior detail shot focused on cockpit feel and driver perspective.",
        tools: "Lightroom",
        format: "3:4 Vertical"
    },
    {
        id: 19,
        title: "Alcantara M-Wheel",
        type: "photos",
        category: "Automotive Photography",
        image: `${path}Photos/Steering.JPG`,
        desc: "Interior product-style shot focused on steering wheel texture and detail.",
        tools: "Lightroom",
        format: "3:4 Vertical"
    },
    {
        id: 20,
        title: "Headlight",
        type: "photos",
        category: "Automotive Photography",
        image: `${path}Photos/Headlight.JPG`,
        desc: "Close-up detail of the headlight and front-end identity.",
        tools: "Lightroom",
        format: "3:4 Vertical"
    },
    {
        id: 21,
        title: "Right",
        type: "photos",
        category: "Automotive Photography",
        image: `${path}Photos/Right.JPG`,
        desc: "Right-side composition for clean vehicle presentation.",
        tools: "Lightroom",
        format: "3:4 Vertical"
    },
    {
        id: 22,
        title: "Top Left",
        type: "photos",
        category: "Automotive Photography",
        image: `${path}Photos/Top left.JPG`,
        desc: "High-angle detail composition for a stronger social media layout.",
        tools: "Lightroom",
        format: "3:4 Vertical"
    },
    {
        id: 23,
        title: "BR Low Light",
        type: "photos",
        category: "Automotive Photography",
        image: `${path}Photos/edited.JPG`,
        desc: "Edited rear-quarter low-light shot with a darker visual tone.",
        tools: "Lightroom",
        format: "3:4 Vertical"
    },

    // VIDEOS
    {
        id: 24,
        title: "Assetto Corsa Porsche Cup",
        type: "videos",
        category: "Short-Form Video Editing",
        video: `${path}Videos/ACGT.HEVC`,
        desc: "Assetto Corsa edit built with cinematic pacing, quote-based storytelling, and replay capture.",
        tools: "CapCut, Adobe After Effects, OBS, Assetto Corsa Replay",
        format: "16:9 Cinematic"
    },
    {
        id: 25,
        title: "Evergreen, Colorado",
        type: "videos",
        category: "Cinematic Videography",
        video: `${path}Videos/coclips.MP4`,
        desc: "Cinematic travel video focused on winter scenery, pacing, and mood-based visual storytelling.",
        tools: "CapCut, Adobe After Effects",
        format: "16:9 Cinematic"
    },
    {
        id: 26,
        title: "Formula SAE POV",
        type: "videos",
        category: "FormulaSAE Media",
        video: `${path}Videos/FSAEpov.MP4`,
        desc: "POV driving video of FormulaSAE content edited for team branding and audience engagement.",
        tools: "CapCut, Adobe After Effects, DJI Osmo Pocket 3",
        format: "4:3 Cinematic"
    },
    {
        id: 27,
        title: "Formula SAE Roller Edit",
        type: "videos",
        category: "FormulaSAE Media",
        video: `${path}Videos/FSAErc.MP4`,
        desc: "Short-form roller edit created for social media platforms and mobile viewing.",
        tools: "CapCut, Adobe After Effects, DJI Osmo Pocket 3",
        format: "9:16 Vertical"
    },
    {
        id: 28,
        title: "Formula SAE - Informational Intro",
        type: "videos",
        category: "FormulaSAE Media",
        video: `${path}Videos/FSAE.MP4`,
        desc: "Informational team video presenting SJSU FormulaSAE work, accomplishments, and build process.",
        tools: "CapCut, Adobe After Effects, DJI Osmo Pocket 3",
        format: "16:9 Cinematic"
    },
    {
        id: 29,
        title: "BMW M235i Edit",
        type: "videos",
        category: "UGC-Style Car Edit",
        video: `${path}Videos/ghxt m235i.MP4`,
        desc: "Short-form automotive edit created for TikTok and Instagram Reels with a performance-focused style.",
        tools: "CapCut, Adobe After Effects, DJI Osmo Pocket 3, Canon T700",
        format: "9:16 Vertical"
    },
    {
        id: 30,
        title: "Maui, Hawaii",
        type: "videos",
        category: "Cinematic Videography",
        video: `${path}Videos/Hawaii Vlog.MP4`,
        desc: "Cinematic vlog-style travel video edited for pacing, mood, and group storytelling.",
        tools: "CapCut, iMovie, iPhone 15 Pro Max",
        format: "16:9 Cinematic"
    },
    {
        id: 31,
        title: "United Kingdom",
        type: "videos",
        category: "Cinematic Videography",
        video: `${path}Videos/UK Infro.MP4`,
        desc: "Travel intro edited with cinematic pacing and social-first formatting.",
        tools: "Adobe Premiere Pro, CapCut, iPhone 15 Pro Max",
        format: "16:9 Cinematic"
    }
];

// 2. SELECTORS

const photoPreview = document.getElementById("photo-preview-grid");
const videoPreview = document.getElementById("video-preview-grid");
const mainGrid = document.getElementById("portfolio-grid");
const previewContainer = document.getElementById("preview-container");
const filters = document.getElementById("portfolio-filters");
const loadMoreBtn = document.getElementById("load-more");
const mobileBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const modal = document.getElementById("modal");
const modalMedia = document.getElementById("modal-media");
const closeModalBtn = document.getElementById("close-modal");
const contactForm = document.getElementById("contact-form");

// 3. HELPERS

function isVideo(item) {
    return item.type === "videos";
}

function getVideoType(videoPath) {
    const extension = videoPath.split(".").pop().toLowerCase();

    if (extension === "mp4") return "video/mp4";
    if (extension === "mov") return "video/quicktime";
    if (extension === "webm") return "video/webm";
    if (extension === "hevc") return "video/mp4";

    return "video/mp4";
}

// 4. CARD CREATION

function createCard(item) {
    const card = document.createElement("div");
    card.className = "portfolio-card animate-fade-in group";

    const mediaMarkup = isVideo(item)
        ? `
            <video 
                muted 
                playsinline 
                preload="metadata"
                class="portfolio-video"
            >
                <source src="${item.video}" type="${getVideoType(item.video)}">
                Your browser does not support this video.
            </video>

            <div class="video-badge">
                <i class="fa-solid fa-play"></i>
            </div>
        `
        : `
            <img 
                src="${item.image}" 
                alt="${item.title}"
                loading="lazy"
            >
        `;

    card.innerHTML = `
        ${mediaMarkup}

        <div class="portfolio-overlay">
            <span class="text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
                ${item.category}
            </span>

            <h3 class="text-white text-xl font-bold italic uppercase tracking-tighter">
                ${item.title}
            </h3>
        </div>
    `;

    if (isVideo(item)) {
        const previewVideo = card.querySelector("video");

        card.addEventListener("mouseenter", () => {
            previewVideo.play().catch(() => {});
        });

        card.addEventListener("mouseleave", () => {
            previewVideo.pause();
            previewVideo.currentTime = 0;
        });
    }

    card.addEventListener("click", () => openModal(item));

    return card;
}

// 5. HOMEPAGE PREVIEW

function initHomepage() {
    photoPreview.innerHTML = "";
    videoPreview.innerHTML = "";

    portfolioData
        .filter(item => item.type === "photos")
        .slice(0, 3)
        .forEach(item => {
            photoPreview.appendChild(createCard(item));
        });

    portfolioData
        .filter(item => item.type === "videos")
        .slice(0, 3)
        .forEach(item => {
            videoPreview.appendChild(createCard(item));
        });
}

// 6. FULL ARCHIVE

function renderFullArchive(filter = "all") {
    mainGrid.innerHTML = "";

    const filteredItems = filter === "all"
        ? portfolioData
        : portfolioData.filter(item => item.type === filter);

    filteredItems.forEach(item => {
        mainGrid.appendChild(createCard(item));
    });
}

loadMoreBtn.addEventListener("click", () => {
    previewContainer.classList.add("hidden");
    loadMoreBtn.classList.add("hidden");
    filters.classList.remove("hidden");
    mainGrid.classList.remove("hidden");

    renderFullArchive("all");
});

// 7. FILTER BUTTONS

document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");
        renderFullArchive(button.dataset.filter);
    });
});

// 8. MOBILE MENU

mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});

// 9. MODAL

function openModal(item) {
    document.getElementById("modal-title").innerText = item.title;
    document.getElementById("modal-type").innerText = item.category;
    document.getElementById("modal-desc").innerText = item.desc;
    document.getElementById("modal-tools").innerText = item.tools;
    document.getElementById("modal-format").innerText = item.format;

    if (isVideo(item)) {
        modalMedia.innerHTML = `
            <video controls autoplay playsinline>
                <source src="${item.video}" type="${getVideoType(item.video)}">
                Your browser does not support this video.
            </video>
        `;
    } else {
        modalMedia.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
        `;
    }

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.classList.add("hidden");
    modalMedia.innerHTML = "";
    document.body.style.overflow = "auto";
}

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

// 10. FORM LOGIC

contactForm.addEventListener("submit", event => {
    event.preventDefault();

    alert("Inquiry received. This form is currently set up as a front-end demo.");

    event.target.reset();
});

// 11. INIT

initHomepage();