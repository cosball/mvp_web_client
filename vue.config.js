const path = require('path');
const webpack = require('webpack');

console.log('Build Environment: ' + process.env.NODE_ENV);

function resolve(dir) {
	return path.join(__dirname, dir);
}

let plugins = [
	new webpack.ProvidePlugin({
		Vue: ['vue/dist/vue.esm.js', 'default'],
		jQuery: 'jquery',
		'window.jQuery': 'jquery',
		$: 'jquery',
		moment: 'moment'
	})
];


if (['production', 'testing'].indexOf(process.env.NODE_ENV) > -1) {
	// const CompressionPlugin = require('compression-webpack-plugin');
	// plugins.push(new CompressionPlugin());

	const ImageminPlugin = require('imagemin-webpack-plugin').default;
	const glob = require('glob');

	plugins.push(new ImageminPlugin({
		minFileSize: 100000, // compress if file size larger than 100kb
		optipng: null,
		pngquant: {
			speed: 10
		},
		externalImages: {
			context: '.',
			sources: glob.sync('src/assets/img/**/*.png'),
			destination: 'www/img',
			fileName: '[path][name].[ext]'
		}
	}))
}

module.exports = {
	publicPath: '',
	lintOnSave: true,
	productionSourceMap: false,
	chainWebpack: (config) => {
		config.module
			.rule('fonts')
			.use('url-loader')
			.loader('url-loader')
			.tap(options => Object.assign({}, options, {
				limit: 500000
			}));
	},
	parallel: true,
	outputDir: 'www',
	css: {
		extract: true,
	},
	configureWebpack: {
		devtool: 'source-map',
		plugins: plugins,
		module: {
			rules: [{
					test: require.resolve('snapsvg/dist/snap.svg.js'),
					use: 'imports-loader?this=>window,fix=>module.exports=0',
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'eslint-loader',
					options: {
						emitError: true
					}
				},
				{
					test: /\.(csv|xlsx)$/,
					loader: 'file-loader',
					options: {
						name(file) {
							return '[name].[ext]'
						},
						outputPath: 'files',
					}
				}
			],
		},
		resolve: {
			alias: {
				'vue$': 'vue/dist/vue.esm.js',
				'@': resolve('src'),
				snapsvg: 'snapsvg/dist/snap.svg.js',
			},
		},
	},
	pluginOptions: {
		'style-resources-loader': {
			patterns: [
				path.resolve(__dirname, 'src/assets/scss/vars/**/*.scss'),
				path.resolve(__dirname, 'src/assets/scss/functions/**/*.scss'),
			],
			preProcessor: 'scss',
		},
	},
};
