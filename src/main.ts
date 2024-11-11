import { App, Plugin, PluginSettingTab, Setting } from 'obsidian';

export default class AutoToc extends Plugin {
	settings: AutoTocSettings;

	async onload() {
		await this.loadSettings();
		this.addSettingTab(new SettingTab(this.app, this));
	}

	onunload() {
		console.log('Unloading Auto Toc Plugin');
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
