{
    test: /\.scss$/,
    use: [
      "style-loader",
      "css-loader",
      {
        loader: "resolve-url-loader",
        options: {
          sourceMap: true,
        },
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: true,
        },
      },
    ],
  }
  