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
    
    const closeSampleModal = document.getElementById('close-sample-modal');
    const closeCheckoutModal = document.getElementById('close-checkout-modal');

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

    // Checkout Triggers
    const checkoutTriggers = document.querySelectorAll('.checkout-trigger');
    const checkoutTierTitle = document.getElementById('checkout-tier-title');
    const summaryTierName = document.getElementById('summary-tier-name');
    const summaryTierPrice = document.getElementById('summary-tier-price');

    checkoutTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const tierStr = btn.getAttribute('data-tier') || "Digital Edition (₹999 / $12)";
            
            checkoutTierTitle.textContent = `Order: ${tierStr}`;
            summaryTierName.textContent = tierStr.split('(')[0].trim();
            if (tierStr.includes('1,499')) {
                summaryTierPrice.textContent = '₹1,499 ($18 USD)';
            } else if (tierStr.includes('4,999')) {
                summaryTierPrice.textContent = '₹4,999 ($59 USD)';
            } else {
                summaryTierPrice.textContent = '₹999 ($12 USD)';
            }

            checkoutModal.classList.add('active');
        });
    });

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

