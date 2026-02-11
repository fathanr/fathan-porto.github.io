// Project Gallery Modal
const projectGalleries = {
  mindid: {
    title: "Mind ID Recruitment Portal",
    images: [
      "assets/images/mindid/screencapture-career-mind-id-2026-01-28-17_42_25.png",
      "assets/images/mindid/screencapture-career-mind-id-login-2026-01-28-17_42_45.png",
      "assets/images/mindid/screencapture-backoffice-mind-portal-dev-dot-co-id-auth-login-2026-01-28-17_44_35.png",
      "assets/images/mindid/screencapture-backoffice-mind-portal-dev-dot-co-id-dashboard-2026-01-28-17_48_17.png",
    ],
  },
  mountseerah: {
    title: "MountSeerah",
    images: [
      "assets/images/mountseerah/screencapture-mountserrah-app-codespace-id-2026-01-28-12_23_43.png",
      "assets/images/mountseerah/Login .png",
      "assets/images/mountseerah/mountserrah-dashboard.png",
      "assets/images/mountseerah/screencapture-mountserrah-app-codespace-id-2026-01-28-12_21_55.png",
      "assets/images/mountseerah/screencapture-mountserrah-app-codespace-id-auth-signin-2026-01-28-12_22_39.png",
    ],
  },
  pertamina: {
    title: "Pertamina Document Generator",
    images: [
      "assets/images/pertamina/Pertamina Doc. Gen - dashboard.png",
      "assets/images/pertamina/Pertamina Doc. Gen - Pengadaan.png",
      "assets/images/pertamina/Pertamina Doc. Gen - edit document.png",
    ],
  },
  pamafix: {
    title: "Pamafix Maintenance System",
    images: [
      "assets/images/pamafix/pamafix-1.jpg",
      "assets/images/pamafix/pamafix-2.jpg",
      "assets/images/pamafix/pamafix-3.jpg",
      "assets/images/pamafix/pamafix-4.jpg",
    ],
  },
  "pamafix-sap": {
    title: "Pamafix SAP Integration",
    images: [
      "assets/images/pamafix-sap/login page.png",
      "assets/images/pamafix-sap/select feature.png",
      "assets/images/pamafix-sap/dashboard-pamafix-sap.png",
    ],
  },
  "playwright-pama": {
    title: "Playwright Automation - Pama Management Report",
    images: [
      "assets/images/playwright-pama/automation playwright 1.png",
    ],
  },
  "k6-pamafix-sap": {
    title: "K6 Load Testing - Pamafix SAP",
    images: [
      "assets/images/k6-pamafix-sap/load test 1.png",
      "assets/images/k6-pamafix-sap/load test 2.png",
      "assets/images/k6-pamafix-sap/load test 3.png",
      "assets/images/k6-pamafix-sap/load test 4.png",
    ],
  },
  "mocha-rups": {
    title: "Mocha Chai Automation - RUPS",
    images: [
      "assets/images/mocha-rups/automation 1.png",
      "assets/images/mocha-rups/automation 2.png",
      "assets/images/mocha-rups/automation 3.png",
    ],
  },
  "mocha-pamafix-sap": {
    title: "Mocha Chai Automation - Pamafix SAP",
    images: [
      "assets/images/mocha-pamafix-sap/automation 1.png",
      "assets/images/mocha-pamafix-sap/automation 2.png",
      "assets/images/mocha-pamafix-sap/automation 3.png",
    ],
  },
};

let currentProject = "";
let currentImageIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalClose = document.querySelector(".modal-close");
  const prevBtn = document.querySelector(".modal-nav.prev");
  const nextBtn = document.querySelector(".modal-nav.next");
  const thumbnailsContainer = document.getElementById("modalThumbnails");

  // Open gallery
  document.querySelectorAll(".view-gallery-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const projectId = this.getAttribute("data-project");
      openGallery(projectId);
    });
  });

  // Click on project image
  document.querySelectorAll(".project-thumbnail").forEach((img) => {
    img.addEventListener("click", function () {
      const projectId = this.getAttribute("data-project");
      openGallery(projectId);
    });
  });

  function openGallery(projectId) {
    currentProject = projectId;
    currentImageIndex = 0;
    const gallery = projectGalleries[projectId];

    if (!gallery) return;

    modalTitle.textContent = gallery.title;
    showImage(0);
    createThumbnails(gallery.images);
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function showImage(index) {
    const gallery = projectGalleries[currentProject];
    if (!gallery) return;

    currentImageIndex = index;
    modalImage.src = gallery.images[index];

    // Update active thumbnail
    document.querySelectorAll(".modal-thumbnail").forEach((thumb, i) => {
      thumb.classList.toggle("active", i === index);
    });

    // Show/hide nav buttons
    prevBtn.style.display = gallery.images.length > 1 ? "block" : "none";
    nextBtn.style.display = gallery.images.length > 1 ? "block" : "none";
  }

  function createThumbnails(images) {
    thumbnailsContainer.innerHTML = "";
    if (images.length <= 1) return;

    images.forEach((img, index) => {
      const thumb = document.createElement("img");
      thumb.src = img;
      thumb.className = "modal-thumbnail";
      if (index === 0) thumb.classList.add("active");
      thumb.addEventListener("click", () => showImage(index));
      thumbnailsContainer.appendChild(thumb);
    });
  }

  // Close modal
  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }

  // Navigation
  prevBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    const gallery = projectGalleries[currentProject];
    const newIndex =
      (currentImageIndex - 1 + gallery.images.length) % gallery.images.length;
    showImage(newIndex);
  });

  nextBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    const gallery = projectGalleries[currentProject];
    const newIndex = (currentImageIndex + 1) % gallery.images.length;
    showImage(newIndex);
  });

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (modal.style.display !== "flex") return;

    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
  });
});
