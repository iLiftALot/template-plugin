import { App, PluginSettingTab, Setting } from 'obsidian';
import AutoToc from '../main';

interface AutoTocSettings {
    mySetting: string;
}

const DEFAULT_SETTINGS: AutoTocSettings = {
    mySetting: 'default'
}

class SettingTab extends PluginSettingTab {
    plugin: AutoToc;

    constructor(app: App, plugin: AutoToc) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const { containerEl } = this;

        containerEl.empty();

        new Setting(containerEl)
            .setName('Setting #1')
            .setDesc('It\'s a secret')
            .addText(text => text
                .setPlaceholder('Enter your secret')
                .setValue(this.plugin.settings.mySetting)
                .onChange(async (value) => {
                    this.plugin.settings.mySetting = value;
                    await this.plugin.saveSettings();
                }));
    }
}