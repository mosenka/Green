/** @type {import("next").NextConfig} */
const nextConfig = {
	experimental: {
		appDir: false,
	},
};

export default {
	...nextConfig,
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			loader: "svg-sprite-loader",
		});

		return config;
	},
};
