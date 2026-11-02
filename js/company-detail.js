/**
 * Company Details Data & Dynamic Showcase
 * Simple, elegant corporate presentation for OM Group portfolio companies.
 */
(() => {
  "use strict";

  const COMPANIES = {
    education: {
      id: "education",
      name: "OM EDUCATION SERVICES MALAYSIA",
      heroTitle: "OM Education Services <em>Malaysia</em>",
      heroLead: "The leading provider and one-stop solution for quality international higher education in Malaysia, guiding ambitious global learners from university selection to arrival and settling.",
      tagline: "Leading Provider & One-Stop Solution for Quality Education in Malaysia",
      sector: "International Higher Education",
      badge: "Flagship Group Entity",
      logo: "assets/images/nternationalEducation.png",
      location: "Kuala Lumpur, Malaysia",
      leadParagraph: "“OM Education Services Malaysia” is the leading provider and one stop solution for quality international education in Malaysia. We help intending students in every step of the way, from university/course selection, application submission, visa filing, from departure to arrival in Malaysia and settling.",
      paragraphs: [
        "The secret of our success is that we focus only on Malaysia and not any other country. Malaysia has world-class academic and educational facilities, internationally accredited universities, and a multicultural, safe student environment.",
        "As a core pillar of the multi-billion-dollar OM Group of Companies, OM Education Services bridges aspirations with global achievement—providing institutional credibility, trusted university relationships, and dedicated on-ground pastoral support across 40+ premier institutions."
      ],
      pillars: [
        { num: "01", title: "University & Course Selection", desc: "Personalized academic profiling matching students with premier Malaysian universities and accredited degree programs." },
        { num: "02", title: "Application & Visa Filing", desc: "Seamless document appraisal, expedited university admission processing, and official EMGS visa clearance." },
        { num: "03", title: "Departure & Airport Welcome", desc: "Pre-departure briefings, flight coordination, and personal on-arrival airport reception in Kuala Lumpur." },
        { num: "04", title: "Settling & Ongoing Mentorship", desc: "Safe student housing placement, campus orientation, and continuous pastoral guidance throughout the study journey." }
      ]
    },
    chrome: {
      id: "chrome",
      name: "CHROME ORE SERVICES (PVT) LTD",
      heroTitle: "Chrome Ore Services <em>(Pvt) Ltd</em>",
      heroLead: "A leading metallurgical organization in Asia operating a US$700M processing facility delivering 50,000 tons of high-grade chrome ore per month for global industrial applications.",
      tagline: "Asia’s Premier Processing Facility for High-Grade Chromite & Minerals",
      sector: "Metals Extraction & Refining",
      badge: "Heavy Industry Leader",
      logo: "assets/images/OM-Global-Services.png",
      location: "Pakistan (Refinement Facility) & Middle East Hubs",
      leadParagraph: "Chrome Ore Services LTD is one of the leading organizations of Asia in the metal and mineral sector. It is operating a $US700m processing plant to process 50,000 tons of high-grade chrome ore per month since 2013.",
      paragraphs: [
        "The COS facility of mining and processing of chromite stands as a benchmark of operational efficiency and technical sophistication in Asia, maintaining stringent global metallurgical specifications.",
        "Backed by OM Group's diversified commercial logistics and capital strength, Chrome Ore Services maintains direct supply contracts with major stainless steel producers and refractory manufacturers across the globe."
      ],
      pillars: [
        { num: "01", title: "Industrial Chromite Beneficiation", desc: "High-throughput metallurgical plant converting raw ore into concentrated, uniform metallurgical grades." },
        { num: "02", title: "Certified Laboratory Assays", desc: "Rigorous quality assays guaranteeing exact Cr2O3 ratios and low silica/phosphorus parameters for international buyers." },
        { num: "03", title: "Large-Scale Extraction Operations", desc: "Modern mechanized mining adhering to world-class safety, environmental, and geological standards since 2013." },
        { num: "04", title: "Global Bulk Maritime Logistics", desc: "Dedicated port storage, multimodal shipping, and on-time global maritime supply chain execution." }
      ]
    },
    terraque: {
      id: "terraque",
      name: "TERRAQUE COMPUTERS UK",
      heroTitle: "Terraque Computers <em>UK</em>",
      heroLead: "Enterprise computing powerhouse headquartered in the United Kingdom, delivering next-generation digital hardware in strategic partnership with Intel, Microsoft, Cisco, and JP SA Couto.",
      tagline: "Enterprise Computing Solutions in Strategic Alliance with Global Technology Leaders",
      sector: "Technology & Enterprise Computing",
      badge: "Global Tech Enterprise",
      logo: "assets/images/OM-Computer.png",
      location: "London, UK · Ireland · Bangladesh · Pakistan",
      leadParagraph: "Terraque computers has its headquarters in United Kingdom and has affiliates in Ireland and Bangladesh. Terraque computers in partnership with JP SA Couto has entered the Pakistan market as “Terraque Pakistan” and aims to solidify its global footprint.",
      paragraphs: [
        "Terraque Computers collaborates closely with world technology titans including Intel, Microsoft, and Cisco to deliver robust computing infrastructure, enterprise servers, and tailored institutional devices.",
        "Through disciplined supply engineering and international channel networks, Terraque equips corporations, education sectors, and government initiatives with cutting-edge computing capabilities."
      ],
      pillars: [
        { num: "01", title: "Enterprise Hardware Deployment", desc: "Commercial computing, servers, and data center hardware engineered for heavy enterprise workloads." },
        { num: "02", title: "Tier-1 Tech Alliances", desc: "Authorized partner integration with industry titans Intel, Microsoft, and Cisco ensuring authentic, certified architecture." },
        { num: "03", title: "Global Joint Ventures", desc: "Strategic collaboration with European manufacturing leader JP SA Couto to scale high-quality hardware across emergent markets." },
        { num: "04", title: "Lifecycle & Device Management", desc: "Enterprise warranty, field service, warranty management, and secure device configuration across multinational sites." }
      ]
    },
    capital: {
      id: "capital",
      name: "OM CAPITAL",
      heroTitle: "OM <em>Capital</em>",
      heroLead: "Strategically located in the financial heart of London, OM Capital drives market efficiency, portfolio optimization, and cross-border transaction execution.",
      tagline: "Driving Financial Market Efficiency & Delivering Exceptional Investment Value",
      sector: "Capital Markets & Strategic Advisory",
      badge: "London Financial Desk",
      logo: "assets/images/omcapital.png",
      location: "City of London, United Kingdom",
      leadParagraph: "OM Capital is strategically located in the head of London. Its mission is to drive financial market efficiency and deliver exceptional value by leveraging our expertise and innovation to optimize client portfolios and facilitate strategic transactions.",
      paragraphs: [
        "With senior financial specialists positioned at the crossroads of European and international capital markets, OM Capital provides bespoke advisory across corporate restructuring, direct investments, and liquidity optimization.",
        "Operating with OM Group’s global institutional footprint, the firm combines local execution agility with multi-billion-dollar group credibility to protect and grow client enterprise value."
      ],
      pillars: [
        { num: "01", title: "Strategic M&A & Restructuring", desc: "Comprehensive deal origination, capital structuring, and execution advisory for cross-border transactions." },
        { num: "02", title: "Portfolio Optimization", desc: "Active risk-adjusted allocation models designed to maximize liquidity, yield, and commercial resilience." },
        { num: "03", title: "Corporate Finance Advisory", desc: "Institutional debt, mezzanine, and equity syndication tailored to mid-market and multinational enterprises." },
        { num: "04", title: "Cross-Border Market Intelligence", desc: "Actionable economic insights and regulatory navigation across the UK, GCC, and ASEAN financial corridors." }
      ]
    },
    hr: {
      id: "hr",
      name: "OM HR SERVICES",
      heroTitle: "OM HR <em>Services</em>",
      heroLead: "Premier international human resource and overseas recruitment firm connecting world-class talent with international employment opportunities across Europe, Asia, and the GCC.",
      tagline: "Premier International Talent Deployment & Cross-Border Workforce Mobility",
      sector: "Overseas Employment & Mobility",
      badge: "Premier Global Recruiter",
      logo: "assets/images/omhrservices.png",
      location: "Asia · Europe · GCC Mobility Hubs",
      leadParagraph: "As the premier overseas recruiters, OM HR Services, is a part of the esteemed OM Group of Companies. It stands as a pillar among its diverse business ventures. Alongside OM International, OM Education Services, OM Capital, and OM Chrome, it contributes to the group’s expansive portfolio.",
      paragraphs: [
        "With deep regulatory compliance and rigorous verification pipelines, OM HR Services matches qualified professionals and skilled technical personnel with top multinational employers across diverse industrial and service sectors.",
        "Our specialized teams handle comprehensive visa compliance, trade testing, pre-deployment screening, and international candidate onboarding to ensure seamless workforce integration."
      ],
      pillars: [
        { num: "01", title: "International Talent Sourcing", desc: "Cross-border headhunting and certified candidate verification for healthcare, engineering, technical, and corporate roles." },
        { num: "02", title: "Compliance & Visa Processing", desc: "End-to-end work permit clearances, consular documentation, and regulatory compliance across destination nations." },
        { num: "03", title: "Skill Certification & Trade Testing", desc: "Rigorous technical assessment centers evaluating practical competence before overseas deployment." },
        { num: "04", title: "Deployment & Welfare Care", desc: "Logistics coordination, travel briefing, and ongoing employer-employee liaison support abroad." }
      ]
    },
    global: {
      id: "global",
      name: "OM GLOBAL SERVICES",
      heroTitle: "OM Global <em>Services</em>",
      heroLead: "High-volume commodity trading and strategic investment platform based in Malaysia, bridging international markets throughout the high-growth ASEAN economic region.",
      tagline: "ASEAN Regional Trading Hub for Commodities & Strategic Investment",
      sector: "Commodities & ASEAN Trading",
      badge: "ASEAN Regional Desk",
      logo: "assets/images/Omglobal.png",
      location: "Kuala Lumpur, Malaysia & ASEAN Region",
      leadParagraph: "OM Global Services is “OM International” new partner company based in Malaysia. It focused on trading of commodities and providing platform for trading and investment services throughout the ASEAN region.",
      paragraphs: [
        "Positioned in Malaysia’s vibrant trade corridor, OM Global Services delivers scalable trade execution, structured commodity financing, and institutional partnership pathways for international enterprises.",
        "Leveraging the collective power of the OM Group of Companies, OM Global Services facilitates seamless access to suppliers, logistics infrastructure, and lucrative cross-border investment ventures."
      ],
      pillars: [
        { num: "01", title: "Commodity Trading & Brokering", desc: "Physical sourcing and distribution of key industrial commodities and raw materials across ASEAN." },
        { num: "02", title: "Regional Investment Platform", desc: "Structured investment syndication and joint venture development for high-growth ASEAN ventures." },
        { num: "03", title: "Supply Chain & Trade Finance", desc: "Tailored commercial letters of credit, warehousing, and secure transactional mechanisms." },
        { num: "04", title: "Strategic Market Entry Advisory", desc: "Advising multinational enterprises on regulatory licensing, trade routes, and local partner integration in Southeast Asia." }
      ]
    }
  };

  const COMPANY_KEYS = ["education", "chrome", "terraque", "capital", "hr", "global"];

  function renderCompany(key, shouldScroll = false) {
    const data = COMPANIES[key] || COMPANIES.education;
    const currentKey = data.id;

    // Document title
    document.title = `${data.name} — OM Group Portfolio`;

    // Breadcrumb
    const breadcrumb = document.getElementById("breadcrumb-current");
    if (breadcrumb) breadcrumb.textContent = data.name;

    // Hero
    const heroEyebrow = document.getElementById("hero-eyebrow");
    if (heroEyebrow) heroEyebrow.textContent = `OM Group Portfolio · ${data.sector}`;

    const heroTitle = document.getElementById("hero-title");
    if (heroTitle) heroTitle.innerHTML = data.heroTitle;

    const heroLead = document.getElementById("hero-lead");
    if (heroLead) heroLead.textContent = data.heroLead;

    // Left Column: Brand Card
    const logoImg = document.getElementById("entity-logo");
    if (logoImg) {
      logoImg.src = data.logo;
      logoImg.alt = `${data.name} Logo`;
    }

    const sectorBadge = document.getElementById("entity-sector-badge");
    if (sectorBadge) sectorBadge.textContent = data.sector;

    const metaLocation = document.getElementById("entity-meta-location");
    if (metaLocation) metaLocation.textContent = data.location;

    const metaSector = document.getElementById("entity-meta-sector");
    if (metaSector) metaSector.textContent = data.sector;

    const inquireBtn = document.getElementById("entity-inquire-btn");
    if (inquireBtn) {
      inquireBtn.href = `contact.html?service=${data.id}#contact-form`;
    }

    // Right Column: Narrative
    const tagline = document.getElementById("entity-tagline");
    if (tagline) tagline.textContent = data.tagline;

    const leadPara = document.getElementById("entity-lead-para");
    if (leadPara) leadPara.textContent = data.leadParagraph;

    const bodyParas = document.getElementById("entity-body-paras");
    if (bodyParas) {
      bodyParas.innerHTML = data.paragraphs.map(p => `<p>${p}</p>`).join("");
    }

    // Capabilities List
    const capList = document.getElementById("entity-capabilities-list");
    if (capList) {
      capList.innerHTML = data.pillars.map(pillar => `
        <div class="entity-capability-item">
          <span class="entity-capability-num">${pillar.num}</span>
          <div class="entity-capability-body">
            <h4>${pillar.title}</h4>
            <p>${pillar.desc}</p>
          </div>
        </div>
      `).join("");
    }

    // Bottom Navigation: Other Portfolio Companies
    const otherGrid = document.getElementById("other-companies-grid");
    if (otherGrid) {
      const otherKeys = COMPANY_KEYS.filter(k => k !== currentKey);
      otherGrid.innerHTML = otherKeys.map(k => {
        const item = COMPANIES[k];
        return `
          <a class="portfolio-directory-card" href="company-details.html?company=${item.id}" data-company-link="${item.id}">
            <div class="portfolio-directory-card__thumb">
              <img src="${item.logo}" alt="${item.name}" width="54" height="38" loading="lazy">
            </div>
            <div class="portfolio-directory-card__content">
              <span class="portfolio-directory-card__title">${item.name}</span>
              <span class="portfolio-directory-card__sector">${item.sector}</span>
            </div>
            <svg class="portfolio-directory-card__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" aria-hidden="true">
              <path d="M5 12h14"/>
              <path d="m13 6 6 6-6 6"/>
            </svg>
          </a>
        `;
      }).join("");

      // Attach client-side dynamic navigation for smooth transition
      otherGrid.querySelectorAll("[data-company-link]").forEach(link => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const targetKey = link.dataset.companyLink;
          history.pushState(null, "", `?company=${targetKey}`);
          renderCompany(targetKey, true);
        });
      });
    }

    if (shouldScroll) {
      const showcaseSection = document.getElementById("entity-showcase");
      if (showcaseSection) {
        showcaseSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  // Initial load
  const params = new URLSearchParams(window.location.search);
  const initialKey = params.get("company") || "education";
  renderCompany(initialKey, false);

  // Popstate for browser back/forward
  window.addEventListener("popstate", () => {
    const p = new URLSearchParams(window.location.search);
    const key = p.get("company") || "education";
    renderCompany(key, false);
  });
})();
