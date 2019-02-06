import React from 'react';
import ReactDom from 'react-dom';
import Section from './section';

import '../styles/basic.css';
import '../styles/less.less';

import jsonConfig from '../config/test.json';
import yamlConfig from '../config/test2.yaml';

import { Elm } from '../elm/Main.elm';

Elm.Main.init({
  node: document.getElementById('elm-app')
});

const App = () => (
  <div className="outer-container">
    {jsonConfig.sections.map((name, idx) => (
      <section key={idx}>
        {name}
        <Section>
          {yamlConfig.sectionContent[idx]}
        </Section>
      </section>
    ))}
  </div>
);

ReactDom.render(<App />, document.getElementById('app'));
