const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	// bundle.js의 엔트리 포인트
	entry: './src/index.tsx',
	// bundle.js가 나올 형태, 어디서 가져올지?
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.json', '.ts', '.tsx'],
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
	module: {
		rules: [
			// Typescript Loader
			{
				test: /\.(ts|tsx)$/,
				use: 'awesome-typescript-loader',
			},
			// CSS Loader
			{
				test: /\.css/,
				use: [
					/* CSS로딩 단계
						1. css-loader가 css파일을 자바스크립트 모듈로 변환
						2. style-loader가 DOM에 css파일을 추가하는 번들로 변경
						3. bundle.js에 탑재
					*/
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
				],
			},
			// URL asset loader for CSS
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
		}),
		new CleanWebpackPlugin(['dist']),
	],
};

