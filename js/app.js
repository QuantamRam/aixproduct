/* ==========================================================================
   BUILDING AI PRODUCTS THAT SHIP — INTERACTIVE APPLICATION SCRIPT
   High-Converting Direct Response Copywriting Enforced
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // --------------------------------------------------------------------------
    // 1. STAIRCASE FRAMEWORK INTERACTIVE STEPPER
    // --------------------------------------------------------------------------
    const stairSteps = document.querySelectorAll('.stair-step-card');
    const detailPhaseBadge = document.getElementById('detail-phase-badge');
    const detailTitle = document.getElementById('detail-title');
    const detailDesc = document.getElementById('detail-desc');
    const detailFrameworks = document.getElementById('detail-frameworks');
    const chReadingTime = document.querySelector('.ch-reading-time');

    const staircaseData = {
        1: {
            badge: "PHASE 1 OF 4",
            title: "Phase 1: Idea & Model-Product Fit",
            desc: "When building gets cheap, judgment gets expensive. Phase 1 teaches you how to shift from feature manager to system orchestrator, ruthlessly prune low-value ideas, and prove Model-Product Fit before writing a single line of code.",
            reading: "Chapters 1–2 · Pages 6–15",
            frameworks: [
                { icon: 'grid', name: 'The Decision Quality Matrix' },
                { icon: 'layers', name: 'The 3-Tier AI Opportunity Model' },
                { icon: 'git-branch', name: 'Build vs Buy vs Fine-Tune Ladder' }
            ]
        },
        2: {
            badge: "PHASE 2 OF 4",
            title: "Phase 2: Prototype & Vibe-Coding",
            desc: "Move from text to working software in 48 hours. Deploy the LoCuS Stack (Lovable, Cursor, Supabase), design safe autonomous agent loops, and implement Model Context Protocol (MCP) without getting bogged down in boilerplate.",
            reading: "Chapters 3–4 · Pages 16–27",
            frameworks: [
                { icon: 'code', name: 'The LoCuS Stack Playbook' },
                { icon: 'repeat', name: 'The Rapid Validation Loop' },
                { icon: 'cpu', name: 'RAG, Agents & MCP Architecture' }
            ]
        },
        3: {
            badge: "PHASE 3 OF 4",
            title: "Phase 3: Product, Evals & Telemetry",
            desc: "Lock in zero-hallucination production parity. Build a 50-example Golden Dataset eval harness to catch regressions, set automated LLM-as-a-Judge ship gates, and track live token spend with AI gateways before finance walks over with a printout.",
            reading: "Chapters 5–6 · Pages 28–39",
            frameworks: [
                { icon: 'shield-check', name: 'The AI Evals Harness Scorecard' },
                { icon: 'award', name: 'LLM-as-a-Judge Rubric System' },
                { icon: 'calculator', name: 'Token Budget & Gateway Telemetry' }
            ]
        },
        4: {
            badge: "PHASE 4 OF 4",
            title: "Phase 4: Scale, UX & Unit Economics",
            desc: "Drive user retention and high-margin scale. Design for the 5 non-happy UX states of uncertainty, turn implicit user edits into proprietary data flywheels, and structure value-based pricing that stays profitable even under heavy power users.",
            reading: "Chapters 7–8 · Pages 40–59",
            frameworks: [
                { icon: 'eye', name: 'Trust & Transparency Matrix' },
                { icon: 'refresh-cw', name: 'Implicit Data Flywheel' },
                { icon: 'trending-up', name: 'The Scale Flywheel & Unit Economics' }
            ]
        }
    };

    stairSteps.forEach(step => {
        step.addEventListener('click', () => {
            const stepNum = step.getAttribute('data-step');
            
            // Toggle active state on steps
            stairSteps.forEach(s => s.classList.remove('active'));
            step.classList.add('active');

            // Update details drawer
            const data = staircaseData[stepNum];
            if (data) {
                detailPhaseBadge.textContent = data.badge;
                detailTitle.textContent = data.title;
                detailDesc.textContent = data.desc;
                chReadingTime.innerHTML = `<i data-lucide="clock"></i> ${data.reading}`;

                // Populate frameworks list
                detailFrameworks.innerHTML = data.frameworks.map(fw => `
                    <div class="fw-chip">
                        <i data-lucide="${fw.icon}"></i>
                        <span>${fw.name}</span>
                    </div>
                `).join('');

                if (window.lucide) lucide.createIcons();
            }
        });
    });

    // --------------------------------------------------------------------------
    // 2. DECISION QUALITY MATRIX SIMULATOR (CHAPTER 1)
    // --------------------------------------------------------------------------
    const featureNameInput = document.getElementById('feature-name-input');
    const valueSlider = document.getElementById('value-slider');
    const easeSlider = document.getElementById('ease-slider');
    const valueDisplay = document.getElementById('value-display');
    const easeDisplay = document.getElementById('ease-display');
    
    const matrixPin = document.getElementById('matrix-pin');
    const pinLabel = document.getElementById('pin-label');
    const verdictTag = document.getElementById('verdict-tag');
    const verdictTitle = document.getElementById('verdict-title');
    const verdictDesc = document.getElementById('verdict-desc');

    const quadrants = {
        invest: document.getElementById('quad-invest'),
        ship: document.getElementById('quad-ship'),
        ignore: document.getElementById('quad-ignore'),
        kill: document.getElementById('quad-kill')
    };

    function updateMatrix() {
        const val = parseInt(valueSlider.value); // 1 to 10 (Low to High)
        const ease = parseInt(easeSlider.value); // 1 to 10 (Hard to Easy)
        const name = featureNameInput.value.trim() || "Your Feature";

        // Display labels
        valueDisplay.textContent = `${val >= 6 ? 'High Value' : 'Low Value'} (${val}/10)`;
        easeDisplay.textContent = `${ease >= 6 ? 'Easy' : 'Hard'} (${ease}/10)`;
        pinLabel.textContent = name;

        // Position PIN inside 2x2 box (X: ease 0-100%, Y: value 100-0%)
        const pinX = ((ease - 1) / 9) * 80 + 10; // 10% to 90%
        const pinY = 100 - (((val - 1) / 9) * 80 + 10); // 90% to 10%

        matrixPin.style.left = `${pinX}%`;
        matrixPin.style.top = `${pinY}%`;

        // Highlight active quadrant & set verdict
        Object.values(quadrants).forEach(q => q.classList.remove('active-quad'));

        if (val >= 6 && ease >= 6) {
            // High Value, Easy to build -> SHIP IT
            quadrants.ship.classList.add('active-quad');
            verdictTag.textContent = "SHIP IT";
            verdictTag.style.background = "#6E2CF4";
            verdictTitle.textContent = "High Value & Fast to Build";
            verdictDesc.textContent = "Do it now! AI makes building fast. Set automated eval pass gates, implement guardrails, and track cost per task.";
        } else if (val >= 6 && ease < 6) {
            // High Value, Hard to build -> INVEST
            quadrants.invest.classList.add('active-quad');
            verdictTag.textContent = "INVEST";
            verdictTag.style.background = "#3B82F6";
            verdictTitle.textContent = "Hard, But Highly Defensible";
            verdictDesc.textContent = "This is where your durable competitive moat lives! Invest engineering resources into custom fine-tuning, RAG retrieval, or proprietary workflows.";
        } else if (val < 6 && ease >= 6) {
            // Low Value, Easy to build -> KILL ON PURPOSE
            quadrants.kill.classList.add('active-quad');
            verdictTag.textContent = "KILL ON PURPOSE";
            verdictTag.style.background = "#EF4444";
            verdictTitle.textContent = "The Demo Trap!";
            verdictDesc.textContent = "Easy to build, completely pointless. Don't add a generic 'summarize button' to every screen just because it takes an afternoon. Put it on your Kill List.";
        } else {
            // Low Value, Hard to build -> IGNORE
            quadrants.ignore.classList.add('active-quad');
            verdictTag.textContent = "IGNORE";
            verdictTag.style.background = "#64748B";
            verdictTitle.textContent = "Complex & Low Return";
            verdictDesc.textContent = "High effort, zero business ROI. Nobody will miss this feature. Reallocate engineering capacity immediately.";
        }
    }

    if (valueSlider && easeSlider) {
        valueSlider.addEventListener('input', updateMatrix);
        easeSlider.addEventListener('input', updateMatrix);
        featureNameInput.addEventListener('input', updateMatrix);
        updateMatrix(); // Initial render
    }

    // --------------------------------------------------------------------------
    // 3. AI UNIT ECONOMICS CALCULATOR (CHAPTER 6)
    // --------------------------------------------------------------------------
    const modelSelect = document.getElementById('calc-model-select');
    const inputTokensInput = document.getElementById('calc-input-tokens');
    const outputTokensInput = document.getElementById('calc-output-tokens');
    const callsPerTaskInput = document.getElementById('calc-calls-per-task');
    const subPriceInput = document.getElementById('calc-sub-price');
    const powerTasksInput = document.getElementById('calc-power-tasks');

    const resCostPerTask = document.getElementById('res-cost-per-task');
    const resCostSub = document.getElementById('res-cost-sub');
    const resAvgUser = document.getElementById('res-avg-user');
    const resPowerUser = document.getElementById('res-power-user');
    const resPowerCount = document.getElementById('res-power-count');
    const alertBox = document.getElementById('calc-alert-box');
    const alertText = document.getElementById('calc-alert-text');

    const modelRates = {
        flagship: { in: 3.00, out: 15.00 },
        midtier:  { in: 0.50, out: 2.00 },
        small:    { in: 0.15, out: 0.60 }
    };

    function calculateEconomics() {
        const model = modelRates[modelSelect.value] || modelRates.midtier;
        const inTokens = parseInt(inputTokensInput.value) || 0;
        const outTokens = parseInt(outputTokensInput.value) || 0;
        const calls = parseInt(callsPerTaskInput.value) || 1;
        const subPrice = parseFloat(subPriceInput.value) || 0;
        const powerTasks = parseInt(powerTasksInput.value) || 0;

        // Cost per single LLM call = (inTokens * rate_in / 1M) + (outTokens * rate_out / 1M)
        const singleCallCost = ((inTokens * model.in) / 1000000) + ((outTokens * model.out) / 1000000);
        const costPerTask = singleCallCost * calls;

        // Monthly costs
        const avgUserCost = costPerTask * 200; // 200 tasks standard
        const powerUserCost = costPerTask * powerTasks;

        // Margins
        const avgMargin = subPrice > 0 ? ((subPrice - avgUserCost) / subPrice) * 100 : 0;
        const powerMargin = subPrice > 0 ? ((subPrice - powerUserCost) / subPrice) * 100 : 0;
        const powerProfitLoss = subPrice - powerUserCost;

        // UI Updates
        resCostPerTask.textContent = `$${costPerTask.toFixed(4)}`;
        resCostSub.textContent = `${(costPerTask * 100).toFixed(2)}¢ per completed task`;

        resAvgUser.textContent = `$${avgUserCost.toFixed(2)} cost • ${avgMargin.toFixed(1)}% Gross Margin`;
        resPowerCount.textContent = powerTasks.toLocaleString();
        
        if (powerProfitLoss >= 0) {
            resPowerUser.innerHTML = `$${powerUserCost.toFixed(2)} cost • <span class="text-green">${powerMargin.toFixed(1)}% Gross Margin</span>`;
            
            alertBox.style.background = "#ECFDF5";
            alertBox.style.borderColor = "#A7F3D0";
            alertBox.style.color = "#065F46";
            alertText.innerHTML = `<strong>Healthy Profit Margins:</strong> At ₹/ $${subPrice}/mo, your pricing tier generates $${powerProfitLoss.toFixed(2)} net profit even on high-volume power users.`;
        } else {
            resPowerUser.innerHTML = `$${powerUserCost.toFixed(2)} cost • <span style="color:#EF4444">${powerMargin.toFixed(1)}% Loss</span>`;
            
            alertBox.style.background = "#FEF2F2";
            alertBox.style.borderColor = "#FCA5A5";
            alertBox.style.color = "#991B1B";
            alertText.innerHTML = `<strong>⚠️ Margin Deficit Alert:</strong> At ${powerTasks} tasks/month, this power user costs $${powerUserCost.toFixed(2)} in raw API fees against your $${subPrice} subscription plan! <em>(See Chapter 8 for Hybrid Credit limits)</em>.`;
        }
    }

    if (modelSelect) {
        [modelSelect, inputTokensInput, outputTokensInput, callsPerTaskInput, subPriceInput, powerTasksInput].forEach(el => {
            el.addEventListener('input', calculateEconomics);
        });
        calculateEconomics();
    }

    // --------------------------------------------------------------------------
    // 4. CHAPTER GRID FILTER TABS
    // --------------------------------------------------------------------------
    const phaseTabs = document.querySelectorAll('.phase-tab-btn');
    const chapterCards = document.querySelectorAll('.chapter-card');

    phaseTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            phaseTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filter = tab.getAttribute('data-phase-filter');
            chapterCards.forEach(card => {
                const cardPhase = card.getAttribute('data-phase');
                if (filter === 'all' || cardPhase === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --------------------------------------------------------------------------
    // 5. FAQ ACCORDION TOGGLE
    // --------------------------------------------------------------------------
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(f => f.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // --------------------------------------------------------------------------
    // 6. MODAL HANDLERS (SAMPLE CHAPTER & CHECKOUT)
    // --------------------------------------------------------------------------
    const sampleModal = document.getElementById('sample-modal');
    const checkoutModal = document.getElementById('checkout-modal');
    
    const btnOpenSample = document.getElementById('btn-open-sample');
    const btnOpenSampleNav = document.getElementById('btn-open-sample-nav');
    const btnOpenSampleFooter = document.getElementById('btn-open-sample-footer');
    const btnReadPhaseSample = document.getElementById('btn-read-phase-sample');
    const btnOpenSampleMobile = document.getElementById('btn-open-sample-mobile');
    
    const closeSampleModal = document.getElementById('close-sample-modal');
    const closeCheckoutModal = document.getElementById('close-checkout-modal');

    // --------------------------------------------------------------------------
    // MOBILE NAVIGATION DRAWER CONTROLLER
    // --------------------------------------------------------------------------
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, #btn-mobile-pricing');

    function toggleMobileMenu(forceClose = false) {
        if (!mobileDrawer) return;
        const isOpen = forceClose ? false : !mobileDrawer.classList.contains('active');
        
        if (isOpen) {
            mobileDrawer.classList.add('active');
            document.body.classList.add('menu-open');
            if (mobileToggle) mobileToggle.classList.add('active');
        } else {
            mobileDrawer.classList.remove('active');
            document.body.classList.remove('menu-open');
            if (mobileToggle) mobileToggle.classList.remove('active');
        }
    }

    if (mobileToggle) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMobileMenu();
        });
    }

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMobileMenu(true);
        });
    });

    if (btnOpenSampleMobile) {
        btnOpenSampleMobile.addEventListener('click', () => {
            toggleMobileMenu(true);
            if (sampleModal) sampleModal.classList.add('active');
        });
    }

    // Open Sample Modal
    [btnOpenSample, btnOpenSampleNav, btnOpenSampleFooter, btnReadPhaseSample].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                sampleModal.classList.add('active');
            });
        }
    });

    if (closeSampleModal) {
        closeSampleModal.addEventListener('click', () => {
            sampleModal.classList.remove('active');
        });
    }

    // --------------------------------------------------------------------------
    // 6. RAZORPAY PAYMENT GATEWAY & DYNAMIC PDF GENERATORS (INVOICE & LETTER)
    // --------------------------------------------------------------------------
    const RAZORPAY_KEY_ID = "rzp_live_TiDx4YGYINxFLi";

    let lastOrderDetails = {
        name: "Valued Builder",
        email: "builder@aixproduct.com",
        company: "Individual Practitioner",
        planName: "Digital Playbook",
        amount: 999,
        txId: "rzp_test_sample"
    };

    function generateCustomInvoicePDF(data) {
        if (!window.jspdf) {
            alert("PDF Generator library loading... Please try again in 2 seconds.");
            return;
        }
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ unit: 'pt', format: 'a4' });

        const buyerName = data.name || "Valued Customer";
        const buyerEmail = data.email || "customer@company.com";
        const companyName = data.company || "Individual Practitioner";
        const planName = data.planName || "Digital Playbook";
        const amountINR = data.amount || 999;
        const txId = data.txId || "rzp_test_sample";
        const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        const invoiceNo = "INV-2026-" + Math.floor(1000 + Math.random() * 9000);

        // Header Banner
        doc.setFillColor(110, 44, 244); // Primary Violet #6E2CF4
        doc.rect(0, 0, 595, 80, 'F');

        // Logo & Header Title
        doc.setTextColor(255, 255, 255);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.text("AI x PRODUCT", 40, 48);

        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        doc.text("OFFICIAL TAX INVOICE & L&D REIMBURSEMENT RECEIPT", 555, 48, { align: 'right' });

        // Invoice Meta Section
        doc.setTextColor(15, 23, 42);
        doc.setFontSize(10);
        doc.setFont("helvetica", "bold");
        doc.text(`INVOICE NO: ${invoiceNo}`, 40, 115);
        doc.text(`DATE: ${dateStr}`, 40, 130);
        doc.text(`PAYMENT ID: ${txId}`, 40, 145);

        // Paid Status Badge
        doc.setFillColor(236, 253, 245);
        doc.rect(440, 105, 115, 30, 'F');
        doc.setTextColor(6, 95, 70);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.text("PAID IN FULL ✓", 497, 124, { align: 'center' });

        // Line Divider
        doc.setDrawColor(226, 232, 240);
        doc.setLineWidth(1);
        doc.line(40, 165, 555, 165);

        // Customer & Company Details
        doc.setTextColor(100, 116, 139);
        doc.setFontSize(9);
        doc.setFont("helvetica", "bold");
        doc.text("BILLED TO / REIMBURSEMENT FOR:", 40, 185);

        doc.setTextColor(15, 23, 42);
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text(buyerName, 40, 203);

        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        doc.text(`Email: ${buyerEmail}`, 40, 218);
        doc.text(`Organization / Company: ${companyName}`, 40, 233);

        // Itemized Table Header
        doc.setFillColor(248, 246, 254);
        doc.rect(40, 260, 515, 25, 'F');
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.setTextColor(110, 44, 244);
        doc.text("DESCRIPTION / ITEM", 50, 276);
        doc.text("QTY", 390, 276);
        doc.text("AMOUNT (INR)", 545, 276, { align: 'right' });

        // Item Row
        doc.setTextColor(15, 23, 42);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.text(`Building AI Products That Ship — ${planName}`, 50, 305);
        doc.text("1", 400, 305);
        doc.text(`₹${amountINR.toLocaleString()}`, 545, 305, { align: 'right' });

        doc.line(40, 320, 555, 320);

        // Totals Box (Right Aligned labels & values)
        doc.setFont("helvetica", "bold");
        doc.text("Subtotal:", 435, 345, { align: 'right' });
        doc.text(`₹${amountINR.toLocaleString()}`, 545, 345, { align: 'right' });

        doc.setFont("helvetica", "normal");
        doc.text("Taxes and Other Fees (18% Included):", 435, 362, { align: 'right' });
        doc.text(`₹${(amountINR * 0.18).toFixed(2)}`, 545, 362, { align: 'right' });

        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(110, 44, 244);
        doc.text("TOTAL PAID:", 435, 385, { align: 'right' });
        doc.text(`₹${amountINR.toLocaleString()}`, 545, 385, { align: 'right' });

        // Corporate L&D Reimbursement Note Box
        doc.setFillColor(243, 239, 254);
        doc.rect(40, 420, 515, 75, 'F');
        doc.setDrawColor(221, 214, 254);
        doc.rect(40, 420, 515, 75, 'S');

        doc.setTextColor(110, 44, 244);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.text("CORPORATE L&D / SKILL UPGRADE REIMBURSEMENT NOTE:", 54, 440);

        doc.setTextColor(51, 65, 85);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.text("This official invoice confirms payment for professional AI Product Management & Engineering educational materials.", 54, 456);
        doc.text("Eligible for Corporate Learning & Development (L&D), Employee Upskilling, or Professional Software Book", 54, 470);
        doc.text("expense reimbursement under standard company training budgets.", 54, 484);

        // Footer
        doc.setTextColor(148, 163, 184);
        doc.setFontSize(8);
        doc.text("AI x PRODUCT Press • Ram Chandar Sanaboyina • https://aixproduct.netlify.app", 297.5, 780, { align: 'center' });

        doc.save(`Invoice_${invoiceNo}_${buyerName.replace(/\s+/g, '_')}.pdf`);
    }

    function generateAppreciationLetterPDF(data) {
        if (!window.jspdf) {
            alert("PDF Generator library loading... Please try again in 2 seconds.");
            return;
        }
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ unit: 'pt', format: 'a4' });

        const buyerName = data.name || "Valued Product Leader";
        const companyStr = data.company ? `at ${data.company}` : "";
        const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

        // Outer Double Borders (Sleek margins)
        doc.setDrawColor(110, 44, 244);
        doc.setLineWidth(2);
        doc.rect(25, 25, 545, 792);

        doc.setDrawColor(221, 214, 254);
        doc.setLineWidth(1);
        doc.rect(30, 30, 535, 782);

        // Header Banner
        doc.setFillColor(110, 44, 244);
        doc.rect(45, 50, 505, 55, 'F');

        doc.setTextColor(255, 255, 255);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.text("AI x PRODUCT", 65, 85);

        doc.setFontSize(9.5);
        doc.setFont("helvetica", "normal");
        doc.text("OFFICIAL EXECUTIVE ENDORSEMENT", 535, 85, { align: 'right' });

        // Date
        doc.setTextColor(100, 116, 139);
        doc.setFontSize(9.5);
        doc.setFont("helvetica", "normal");
        doc.text(`Date: ${dateStr}`, 60, 135);

        // Document Title (wrapped & sized to prevent out-of-bounds overflow)
        doc.setTextColor(15, 23, 42);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(13.5);
        const titleText = "LETTER OF PROFESSIONAL APPRECIATION & CAREER ENDORSEMENT";
        const titleLines = doc.splitTextToSize(titleText, 475);
        let currentY = 165;
        titleLines.forEach(line => {
            doc.text(line, 60, currentY);
            currentY += 17;
        });

        // Soft Accent Divider Line
        doc.setDrawColor(221, 214, 254);
        doc.setLineWidth(1);
        doc.line(60, currentY + 4, 535, currentY + 4);
        currentY += 24;

        // Recipient Salutation Header
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(110, 44, 244);
        const recipientHeader = `To: ${buyerName} ${companyStr}`;
        const recipientLines = doc.splitTextToSize(recipientHeader, 475);
        recipientLines.forEach(line => {
            doc.text(line, 60, currentY);
            currentY += 16;
        });
        currentY += 14;

        // Letter Body Paragraphs (fully dynamic split to size)
        doc.setTextColor(51, 65, 85);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10.5);

        const paragraphs = [
            `Dear ${buyerName},`,
            "On behalf of the AI x PRODUCT leadership community, I want to personally commend and recognize your dedicated investment in professional AI Product Management & Systems Architecture mastery through the 'Building AI Products That Ship' playbook.",
            "As artificial intelligence reshapes modern software creation, the bottleneck in product development has fundamentally shifted. While building has become cheap, high-caliber product judgment has become the rarest asset in technology. Moving beyond simple weekend demos to orchestrate battle-hardened, high-margin, zero-hallucination AI products requires exceptional strategic rigor.",
            "By actively mastering Model-Product Fit, Automated Eval Harnesses, Token Economics, and Non-Happy State UX Design, you demonstrate a clear commitment to driving measurable engineering excellence and sustainable business growth within your organization.",
            "We proudly endorse your leadership initiative and commend your dedication to shaping the future of AI-native product development."
        ];

        paragraphs.forEach((p, idx) => {
            const pLines = doc.splitTextToSize(p, 475);
            pLines.forEach(line => {
                doc.text(line, 60, currentY);
                currentY += 15;
            });
            currentY += (idx === 0 ? 10 : 12);
        });

        // Aesthetic Quote Box
        currentY += 8;
        doc.setFillColor(248, 246, 254);
        doc.setDrawColor(221, 214, 254);
        doc.setLineWidth(1);
        doc.rect(60, currentY, 475, 42, 'FD');

        doc.setTextColor(88, 30, 203);
        doc.setFont("helvetica", "bold-italic");
        doc.setFontSize(10.5);
        doc.text('"Small, shipped, measured, and improved beats big, perfect, and imagined."', 297.5, currentY + 25, { align: 'center' });

        currentY += 65;

        // Signature Block & Verification Badge
        doc.setTextColor(15, 23, 42);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.text("Sincerely,", 60, currentY);
        currentY += 25;

        doc.setFontSize(13.5);
        doc.setTextColor(110, 44, 244);
        doc.text("Ram Chandar Sanaboyina", 60, currentY);
        currentY += 16;

        doc.setTextColor(100, 116, 139);
        doc.setFontSize(9.5);
        doc.setFont("helvetica", "normal");
        doc.text("Author & AI Systems Architect, AI x PRODUCT", 60, currentY);
        currentY += 15;
        doc.setTextColor(110, 44, 244);
        doc.text("https://aixproduct.netlify.app", 60, currentY);

        // Verification Badge / Official Seal
        doc.setFillColor(236, 253, 245);
        doc.setDrawColor(16, 185, 129);
        doc.setLineWidth(1);
        doc.roundedRect(415, currentY - 50, 120, 46, 6, 6, 'FD');

        doc.setTextColor(6, 95, 70);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.text("VERIFIED EXECUTIVE", 475, currentY - 32, { align: 'center' });
        doc.setFontSize(8);
        doc.setFont("helvetica", "normal");
        doc.text("ENDORSEMENT ✓", 475, currentY - 18, { align: 'center' });

        // Footer
        doc.setTextColor(148, 163, 184);
        doc.setFontSize(8);
        doc.text("AI x PRODUCT Leadership Council • Official Endorsement Certification", 297.5, 785, { align: 'center' });

        doc.save(`Career_Endorsement_Letter_${buyerName.replace(/\s+/g, '_')}.pdf`);
    }

    function launchRazorpayCheckout(planName, amountInINR, userEmail = "", userName = "", userCompany = "") {
        const amountInPaise = amountInINR * 100;
        
        lastOrderDetails = {
            name: userName || "Valued Builder",
            email: userEmail || "builder@aixproduct.com",
            company: userCompany || "Individual Practitioner",
            planName: planName,
            amount: amountInINR,
            txId: "rzp_test_" + Math.random().toString(36).substring(2, 12)
        };

        const options = {
            key: RAZORPAY_KEY_ID,
            amount: amountInPaise,
            currency: "INR",
            name: "AI x PRODUCT",
            description: `Building AI Products That Ship — ${planName}`,
            image: "assets/book_cover.jpg",
            handler: function (response) {
                // Update transaction ID from Razorpay response
                lastOrderDetails.txId = response.razorpay_payment_id || lastOrderDetails.txId;

                // Close checkout modal if active
                if (checkoutModal) checkoutModal.classList.remove('active');
                
                // Populate & Open Instant Download Modal
                const downloadSuccessModal = document.getElementById('download-success-modal');
                const successTxId = document.getElementById('success-tx-id');
                const successTierName = document.getElementById('success-tier-name');
                const successBuyerName = document.getElementById('success-buyer-name');
                const btnOpenTemplates = document.getElementById('btn-open-templates');
                const closeSuccessModal = document.getElementById('close-success-modal');

                if (successTxId) successTxId.textContent = lastOrderDetails.txId;
                if (successTierName) successTierName.textContent = `${planName} (₹${amountInINR})`;
                if (successBuyerName) successBuyerName.textContent = lastOrderDetails.name;

                if (btnOpenTemplates) {
                    if (amountInINR >= 1499) {
                        btnOpenTemplates.style.display = "inline-flex";
                    } else {
                        btnOpenTemplates.style.display = "none";
                    }
                }

                if (downloadSuccessModal) {
                    downloadSuccessModal.classList.add('active');
                }

                if (closeSuccessModal) {
                    closeSuccessModal.addEventListener('click', () => {
                        downloadSuccessModal.classList.remove('active');
                    });
                }
            },
            prefill: {
                name: userName,
                email: userEmail
            },
            notes: {
                plan: planName,
                company: userCompany
            },
            theme: {
                color: "#6E2CF4" // Violet Theme Accent
            }
        };

        if (window.Razorpay) {
            const rzp = new window.Razorpay(options);
            rzp.open();
        } else {
            alert("Razorpay SDK is loading. Please try again in a moment.");
        }
    }

    // Attach Click Event Handlers to PDF Invoice & Letter Download Buttons
    const btnDownloadInvoice = document.getElementById('btn-download-invoice');
    const btnDownloadLetter = document.getElementById('btn-download-letter');

    if (btnDownloadInvoice) {
        btnDownloadInvoice.addEventListener('click', () => {
            generateCustomInvoicePDF(lastOrderDetails);
        });
    }

    if (btnDownloadLetter) {
        btnDownloadLetter.addEventListener('click', () => {
            generateAppreciationLetterPDF(lastOrderDetails);
        });
    }

    // Checkout Triggers
    const checkoutTriggers = document.querySelectorAll('.checkout-trigger');
    const checkoutTierTitle = document.getElementById('checkout-tier-title');
    const summaryTierName = document.getElementById('summary-tier-name');
    const summaryTierPrice = document.getElementById('summary-tier-price');
    const checkoutForm = document.getElementById('checkout-form');
    const userNameInput = document.getElementById('user-name-input');
    const userEmailInput = document.getElementById('user-email-input');
    const userCompanyInput = document.getElementById('user-company-input');

    let selectedPlanName = "Complete Bundle";
    let selectedPlanPrice = 1499;

    checkoutTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const tierStr = btn.getAttribute('data-tier') || "Digital Edition (₹999 / $12)";
            
            checkoutTierTitle.textContent = `Order: ${tierStr}`;
            summaryTierName.textContent = tierStr.split('(')[0].trim();
            
            if (tierStr.includes('1,499')) {
                summaryTierPrice.textContent = '₹1 (Test Mode Special)';
                selectedPlanName = "Complete Bundle";
                selectedPlanPrice = 1;
            } else if (tierStr.includes('4,999')) {
                summaryTierPrice.textContent = '₹1 (Test Mode Special)';
                selectedPlanName = "Team License";
                selectedPlanPrice = 1;
            } else {
                summaryTierPrice.textContent = '₹1 (Test Mode Special)';
                selectedPlanName = "Digital Playbook";
                selectedPlanPrice = 1;
            }

            // Open Checkout Modal
            if (checkoutModal) checkoutModal.classList.add('active');
        });
    });

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = userNameInput ? userNameInput.value.trim() : "Valued Builder";
            const email = userEmailInput ? userEmailInput.value.trim() : "builder@aixproduct.com";
            const company = userCompanyInput ? userCompanyInput.value.trim() : "Individual Practitioner";
            launchRazorpayCheckout(selectedPlanName, selectedPlanPrice, email, name, company);
        });
    }

    if (closeCheckoutModal) {
        closeCheckoutModal.addEventListener('click', () => {
            checkoutModal.classList.remove('active');
        });
    }

    // Close Modals on Overlay Click
    [sampleModal, checkoutModal].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        }
    });

    // --------------------------------------------------------------------------
    // 7. STICKY BOTTOM BAR ON SCROLL
    // --------------------------------------------------------------------------
    const stickyBar = document.getElementById('sticky-bar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            stickyBar.classList.add('visible');
        } else {
            stickyBar.classList.remove('visible');
        }
    });

    // --------------------------------------------------------------------------
    // 8. LIVE CHAPTER SEARCH FILTER
    // --------------------------------------------------------------------------
    const chapterSearchInput = document.getElementById('chapter-search-input');
    if (chapterSearchInput) {
        chapterSearchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            chapterCards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(query)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // --------------------------------------------------------------------------
    // 9. LIVE ROTATING SOCIAL PROOF TOAST NOTIFICATIONS
    // --------------------------------------------------------------------------
    const proofToast = document.getElementById('proof-toast');
    const toastAvatar = document.getElementById('toast-avatar');
    const toastName = document.getElementById('toast-name');
    const toastTier = document.getElementById('toast-tier');
    const toastTime = document.getElementById('toast-time');
    const toastClose = document.getElementById('toast-close');

    const recentBuyers = [
        { initials: "RC", name: "Rohan C. from Bengaluru", tier: "Complete Bundle (₹1,499)", time: "2 minutes ago" },
        { initials: "PS", name: "Priya S. from Mumbai", tier: "Digital Playbook (₹999)", time: "5 minutes ago" },
        { initials: "VK", name: "Vikram K. from Hyderabad", tier: "Complete Bundle (₹1,499)", time: "9 minutes ago" },
        { initials: "AM", name: "Alex M. from San Francisco", tier: "Team License (₹4,999)", time: "12 minutes ago" },
        { initials: "NK", name: "Neha K. from Delhi NCR", tier: "Complete Bundle (₹1,499)", time: "16 minutes ago" },
        { initials: "DJ", name: "David J. from London", tier: "Digital Playbook (₹999)", time: "21 minutes ago" }
    ];

    let buyerIndex = 0;
    let toastDismissed = false;

    function showNextToast() {
        if (toastDismissed || !proofToast) return;

        const buyer = recentBuyers[buyerIndex];
        toastAvatar.textContent = buyer.initials;
        toastName.textContent = buyer.name;
        toastTier.textContent = buyer.tier;
        toastTime.textContent = `⚡ ${buyer.time}`;

        proofToast.classList.add('visible');

        setTimeout(() => {
            if (proofToast) proofToast.classList.remove('visible');
        }, 5500);

        buyerIndex = (buyerIndex + 1) % recentBuyers.length;
    }

    if (toastClose) {
        toastClose.addEventListener('click', () => {
            toastDismissed = true;
            if (proofToast) proofToast.classList.remove('visible');
        });
    }

    // Initial toast after 4 seconds, then repeat every 14 seconds
    setTimeout(showNextToast, 4000);
    setInterval(showNextToast, 15000);

});

