// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="evinced_sdks_intro.html">Evinced SDKs - Intro</a></li><li class="chapter-item expanded "><a href="auth.html"><strong aria-hidden="true">1.</strong> Authentication</a></li><li class="chapter-item expanded affix "><li class="part-title">Scanning</li><li class="chapter-item expanded "><a href="cont_mode/cont_intro.html"><strong aria-hidden="true">2.</strong> Continuous Mode</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="cont_mode/playwright_js.html"><strong aria-hidden="true">2.1.</strong> Playwright JS</a></li><li class="chapter-item expanded "><a href="cont_mode/wdio_web.html"><strong aria-hidden="true">2.2.</strong> WebdriverIO Web</a></li><li class="chapter-item expanded "><a href="cont_mode/wdio_mobile.html"><strong aria-hidden="true">2.3.</strong> WebdriverIO Mobile</a></li><li class="chapter-item expanded "><a href="cont_mode/cypress.html"><strong aria-hidden="true">2.4.</strong> Cypress</a></li><li class="chapter-item expanded "><a href="cont_mode/java_selenium.html"><strong aria-hidden="true">2.5.</strong> Java Selenium</a></li><li class="chapter-item expanded "><a href="cont_mode/bdd.html"><strong aria-hidden="true">2.6.</strong> Cucumber BDD</a></li></ol></li><li class="chapter-item expanded "><a href="analyze_mode.html"><strong aria-hidden="true">3.</strong> Analyze</a></li><li class="chapter-item expanded affix "><li class="part-title">Reporting</li><li class="chapter-item expanded "><a href="the-report.html"><strong aria-hidden="true">4.</strong> The Evinced Report</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="aggr_reporting.html"><strong aria-hidden="true">4.1.</strong> Aggregrated Reporting</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">Validations</li><li class="chapter-item expanded "><a href="validations/validations_intro.html"><strong aria-hidden="true">5.</strong> Validations</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="validations/axe.html"><strong aria-hidden="true">5.1.</strong> Axe</a></li><li class="chapter-item expanded "><a href="validations/skip.html"><strong aria-hidden="true">5.2.</strong> Skip Validations</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">Reference</li><li class="chapter-item expanded "><a href="continuous_integration.html"><strong aria-hidden="true">6.</strong> Continuos Integration</a></li><li class="chapter-item expanded "><a href="config/additional_features.html"><strong aria-hidden="true">7.</strong> Config</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="config/evConfig.html"><strong aria-hidden="true">7.1.</strong> evConfig File</a></li><li class="chapter-item expanded "><a href="config/skip_validations.html"><strong aria-hidden="true">7.2.</strong> Skip Validations</a></li><li class="chapter-item expanded "><a href="config/toggles.html"><strong aria-hidden="true">7.3.</strong> Toggles</a></li><li class="chapter-item expanded "><a href="config/upload_to_platform.html"><strong aria-hidden="true">7.4.</strong> Upload to Platform</a></li></ol></li><li class="chapter-item expanded "><a href="troubleshooting.html"><strong aria-hidden="true">8.</strong> Troubleshooting</a></li><li class="chapter-item expanded affix "><li class="part-title">Contributing</li><li class="chapter-item expanded "><a href="contributing.html"><strong aria-hidden="true">9.</strong> For Authors</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
