module.exports = () => ({
  devtool: 'source-map',
  devServer: {
    liveReload: false,
    port: 3000,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    server: 'https',
    hot: true,
    host: 'localhost',
  },
});
