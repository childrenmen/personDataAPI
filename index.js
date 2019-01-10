require("@babel/register")({
    presets: [ '@babel/preset-env' ],
    plugins: [
        ["@babel/transform-runtime"]
    ]
});

require("./api/crmRouters");