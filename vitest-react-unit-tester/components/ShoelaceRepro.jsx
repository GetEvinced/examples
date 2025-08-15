import React, { useEffect } from "react";

const ShoelaceRepro = ({ tabs = null }) => {
  useEffect(() => {
    // Load Shoelace CSS and JS from CDN
    const loadShoelace = async () => {
      // Add CSS if not already loaded
      if (!document.querySelector('link[href*="shoelace"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href =
          "https://cdnjs.cloudflare.com/ajax/libs/shoelace-style/2.15.1/themes/light.css";
        document.head.appendChild(link);
      }

      // Add JS if not already loaded
      if (!document.querySelector('script[src*="shoelace"]')) {
        const script = document.createElement("script");
        script.type = "module";
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/shoelace-style/2.15.1/shoelace-autoloader.js";
        document.head.appendChild(script);
      }
    };

    loadShoelace();
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Shoelace Tab Group Test</h2>

      {/* Dynamic Tab Group for Testing */}
      {tabs && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Test Tab Group</h3>
          <sl-tab-group data-testid="tab-list">
            {tabs.map((tab, index) => (
              <sl-tab key={`tab-${index}`} slot="nav" panel={`panel-${index}`}>
                {tab.label}
              </sl-tab>
            ))}
            {tabs.map((tab, index) => (
              <sl-tab-panel key={`panel-${index}`} name={`panel-${index}`}>
                {tab.content}
              </sl-tab-panel>
            ))}
          </sl-tab-group>
        </div>
      )}

      {/* Basic Tab Group */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Basic Tab Group</h3>
        <sl-tab-group>
          <sl-tab slot="nav" panel="general">
            General
          </sl-tab>
          <sl-tab slot="nav" panel="custom">
            Custom
          </sl-tab>
          <sl-tab slot="nav" panel="advanced">
            Advanced
          </sl-tab>
          <sl-tab slot="nav" panel="disabled" disabled>
            Disabled
          </sl-tab>

          <sl-tab-panel name="general">
            <p>This is the general tab panel. You can put any content here!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </sl-tab-panel>

          <sl-tab-panel name="custom">
            <p>This is the custom tab panel.</p>
            <ul>
              <li>Custom feature 1</li>
              <li>Custom feature 2</li>
              <li>Custom feature 3</li>
            </ul>
          </sl-tab-panel>

          <sl-tab-panel name="advanced">
            <p>Advanced settings and configurations go here.</p>
            <p>This panel contains more complex options.</p>
          </sl-tab-panel>

          <sl-tab-panel name="disabled">
            <p>This panel is disabled and shouldn't be accessible.</p>
          </sl-tab-panel>
        </sl-tab-group>
      </div>

      {/* Tab Group with Icons */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Tab Group with Icons</h3>
        <sl-tab-group>
          <sl-tab slot="nav" panel="dashboard">
            <sl-icon name="speedometer2"></sl-icon>
            Dashboard
          </sl-tab>
          <sl-tab slot="nav" panel="settings">
            <sl-icon name="gear"></sl-icon>
            Settings
          </sl-tab>
          <sl-tab slot="nav" panel="profile">
            <sl-icon name="person"></sl-icon>
            Profile
          </sl-tab>

          <sl-tab-panel name="dashboard">
            <h4 className="font-bold mb-2">📊 Dashboard</h4>
            <p>
              Welcome to your dashboard! Here you can see all your important
              metrics.
            </p>
          </sl-tab-panel>

          <sl-tab-panel name="settings">
            <h4 className="font-bold mb-2">⚙️ Settings</h4>
            <p>Configure your application settings here.</p>
            <p>You can customize themes, notifications, and more.</p>
          </sl-tab-panel>

          <sl-tab-panel name="profile">
            <h4 className="font-bold mb-2">👤 Profile</h4>
            <p>Manage your profile information and preferences.</p>
          </sl-tab-panel>
        </sl-tab-group>
      </div>

      {/* Closable Tabs */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Closable Tabs</h3>
        <sl-tab-group>
          <sl-tab slot="nav" panel="tab1" closable>
            Tab 1
          </sl-tab>
          <sl-tab slot="nav" panel="tab2" closable>
            Tab 2
          </sl-tab>
          <sl-tab slot="nav" panel="tab3" closable>
            Tab 3
          </sl-tab>

          <sl-tab-panel name="tab1">
            <p>Content for Tab 1. This tab can be closed.</p>
          </sl-tab-panel>

          <sl-tab-panel name="tab2">
            <p>Content for Tab 2. This tab can also be closed.</p>
          </sl-tab-panel>

          <sl-tab-panel name="tab3">
            <p>Content for Tab 3. All these tabs are closable.</p>
          </sl-tab-panel>
        </sl-tab-group>
      </div>

      {/* Bottom Placement */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Bottom Placement</h3>
        <sl-tab-group placement="bottom">
          <sl-tab slot="nav" panel="notes">
            Notes
          </sl-tab>
          <sl-tab slot="nav" panel="docs">
            Documents
          </sl-tab>
          <sl-tab slot="nav" panel="images">
            Images
          </sl-tab>

          <sl-tab-panel name="notes">
            <p>Your notes and quick thoughts go here.</p>
          </sl-tab-panel>

          <sl-tab-panel name="docs">
            <p>Important documents and files.</p>
          </sl-tab-panel>

          <sl-tab-panel name="images">
            <p>Image gallery and media files.</p>
          </sl-tab-panel>
        </sl-tab-group>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded">
        <p className="text-sm text-gray-600">
          <strong>Note:</strong> Shoelace components are loaded from CDN. In a
          real app, you'd install via npm and set up proper routing as mentioned
          in the docs.
        </p>
      </div>
    </div>
  );
};

export default ShoelaceRepro;
