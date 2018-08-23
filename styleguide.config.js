'use strict'

const path = require('path')

/* eslint-disable-next-line no-unused-vars */
const {devServer, ...webpackConfig} = require('./webpack/development')

const componentsGlob = p => path.join(p, '**/*{.js,jsx,ts,tsx}')

const getComponentPathLine = componentPath => {
  const dir = componentPath.replace('src/', '~').replace(/\.(js|ts)x?/, '')

  const name = path.basename(componentPath, '.tsx')
  return `import ${name} from '${dir}'`
}

module.exports = {
  title: 'cdelta Styleguide',
  showUsage: false,
  skipComponentsWithoutExample: true,
  getComponentPathLine,
  sections: [
    {
      name: 'Colors',
      content: './src/styles/constants/colors.md',
    },
    {
      name: 'Atoms',
      components: componentsGlob('./src/components/atoms'),
    },
    {
      name: 'Molecules',
      components: componentsGlob('./src/components/molecules'),
    },
  ],
  components: componentsGlob('./src/components'),
  propsParser: require('react-docgen-typescript').withDefaultConfig({
    propFilter: {skipPropsWithoutDoc: false},
  }).parse,
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  require: [
    path.join(__dirname, 'src/styles/base'),
    path.join(__dirname, 'styleguidist/setup'),
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguidist/components/ThemeWrapper'),
  },
  webpackConfig,
  // https://github.com/styleguidist/react-styleguidist/issues/357
  // https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md#dangerouslyupdatewebpackconfig
  dangerouslyUpdateWebpackConfig: function(sanitizedWebpackConfig) {
    sanitizedWebpackConfig.externals = {
      ...sanitizedWebpackConfig.externals,
      ...webpackConfig.externals,
    }
    return sanitizedWebpackConfig
  },
}
