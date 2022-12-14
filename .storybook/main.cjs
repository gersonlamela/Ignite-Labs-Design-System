module.exports = {
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)', '../src/**/*.stories.mdx'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-a11y'],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-vite',
	},
	features: {
		storyStoreV7: true,
		interactionsDebugger: true,
	},
	staticDirs: ['../public'],

	viteFinal: (config, {configType}) => {
		if (configType === 'PRODUCTION') {
			config.base = '/Ignite-Labs-Design-System/';
		}
		return config;
	},
};
