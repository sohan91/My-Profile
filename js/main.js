/**
 * Portfolio — simple interactions
 */

(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => [...document.querySelectorAll(sel)];

  function initProfilePhoto() {
    const img = $("#profilePhoto");
    const hint = document.querySelector(".photo-hint");
    if (!img) return;

    const photoPath = window.PROFILE_PHOTO || "assets/photo.jpg";
    img.src = photoPath;

    img.addEventListener("load", () => {
      hint?.classList.add("hidden");
    });

    img.addEventListener("error", () => {
      const wrap = img.parentElement;
      if (!wrap) return;
      const placeholder = document.createElement("div");
      placeholder.className = "hero-photo placeholder";
      placeholder.setAttribute("aria-label", "Add your photo");
      placeholder.textContent = "SP";
      img.replaceWith(placeholder);
    });
  }

  function initNavbar() {
    const navbar = $("#navbar");
    const toggle = $("#navToggle");
    const links = $("#navLinks");
    const navLinks = $$(".nav-link");

    toggle?.addEventListener("click", () => {
      links?.classList.toggle("open");
      toggle.classList.toggle("open");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        links?.classList.remove("open");
        toggle?.classList.remove("open");
      });
    });

    const sections = $$("section[id]");
    window.addEventListener("scroll", () => {
      const y = window.scrollY + 100;
      sections.forEach((section) => {
        const id = section.id;
        if (y >= section.offsetTop && y < section.offsetTop + section.offsetHeight) {
          navLinks.forEach((l) => {
            l.classList.toggle("active", l.getAttribute("href") === "#" + id);
          });
        }
      });
    });
  }

  function initRoleRotator() {
    const el = $("#roleText");
    if (!el || !PORTFOLIO.roles?.length) return;
    el.textContent = PORTFOLIO.roles[0];
  }

  function renderSkills() {
    const grid = $("#skillsGrid");
    if (!grid) return;
    grid.innerHTML = PORTFOLIO.skills
      .map(
        (cat) => `
      <article class="card skill-category">
        <h3>${cat.title}</h3>
        <div class="skill-tags">
          ${cat.items.map((s) => `<span class="skill-tag">${s}</span>`).join("")}
        </div>
      </article>`
      )
      .join("");
  }

  function renderProjects() {
    const grid = $("#projectsGrid");
    if (!grid) return;
    grid.innerHTML = PORTFOLIO.projects
      .map((p) => {
        const hasDemo = p.demo && p.demo !== "#";
        return `
      <article class="card project-card">
        <h3>${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <ul class="project-features">
          ${p.features.slice(0, 4).map((f) => `<li>${f}</li>`).join("")}
        </ul>
        <div class="project-tech">
          ${p.tech.map((t) => `<span class="tech-badge">${t}</span>`).join("")}
        </div>
        <div class="project-actions">
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">GitHub</a>
          ${hasDemo ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Demo</a>` : ""}
        </div>
      </article>`;
      })
      .join("");
  }

  function renderTimeline() {
    const el = $("#timeline");
    if (!el) return;
    el.innerHTML = PORTFOLIO.learningJourney
      .map(
        (item) => `
      <div class="timeline-item">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>`
      )
      .join("");
  }

  function renderEducation() {
    const grid = $("#educationGrid");
    if (!grid) return;
    grid.innerHTML = PORTFOLIO.education
      .map(
        (edu) => `
      <article class="card edu-card">
        <h3>${edu.degree}</h3>
        <p class="edu-school">${edu.school}</p>
        <div class="edu-meta">
          <span>CGPA: ${edu.cgpa}</span>
          <span>${edu.period}</span>
        </div>
      </article>`
      )
      .join("");
  }

  function initContactForm() {
    const form = $("#contactForm");
    const note = $("#formNote");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#name").value.trim();
      const email = $("#email").value.trim();
      const subject = $("#subject").value.trim();
      const message = $("#message").value.trim();

      if (!name || !email || !subject || !message) {
        note.textContent = "Please fill all fields.";
        note.className = "form-note error";
        return;
      }

      if (window.FORMSPREE_ID) {
        fetch(`https://formspree.io/f/${window.FORMSPREE_ID}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name, email, subject, message }),
        })
          .then((res) => {
            if (res.ok) {
              note.textContent = "Message sent!";
              note.className = "form-note success";
              form.reset();
            } else throw new Error();
          })
          .catch(() => {
            note.textContent = "Failed to send. Email me directly.";
            note.className = "form-note error";
          });
      } else {
        const targetEmail = window.CONTACT_EMAIL || "sohanprasad2003@gmail.com";
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${encodeURIComponent(subject)}&body=${body}`;
        window.open(gmailUrl, "_blank");
        note.textContent = `Opening Gmail in your browser to send your message to ${targetEmail}`;
        note.className = "form-note success";
      }
    });
  }

  function initBackToTop() {
    const btn = $("#backToTop");
    if (!btn) return;
    window.addEventListener("scroll", () => {
      btn.classList.toggle("visible", window.scrollY > 400);
    });
    btn.addEventListener("click", () => window.scrollTo(0, 0));
  }

  function initFooter() {
    const year = $("#year");
    if (year) year.textContent = new Date().getFullYear();
  }

  function init() {
    initProfilePhoto();
    initNavbar();
    initRoleRotator();
    renderSkills();
    renderProjects();
    renderTimeline();
    renderEducation();
    initContactForm();
    initBackToTop();
    initFooter();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
