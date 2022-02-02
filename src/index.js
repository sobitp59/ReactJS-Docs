import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import JavaScriptX from './JavaScriptX';
import Render from './Render';
import StateAndLifecycle from './StateAndLifecycle';
import HandlingEvents from './HandlingEvents';
import ConditionalRendering from './ConditionalRendering';
import Page from './Page';
import ListAndKeys from './ListAndKeys';
import Forms from './Forms';
import FormEssay from './FormEssay';
import SelectForm from './SelectForm';
import FileForm from './FileForm';
import LiftStateUp from './LiftStateUp';
import Comp from './Comp';
import HooksStart from './HooksStart';
import Hook1 from './Hook1';
import UseState from './UseState';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <JavaScriptX />
    <Render />
    <StateAndLifecycle />
    <HandlingEvents />
    <ConditionalRendering />
    <Page />
    <ListAndKeys />
    <Forms />
    <FormEssay />
    <SelectForm />
    <FileForm />
    <LiftStateUp />
    <Comp />
    <HooksStart />
    <Hook1 />
    <UseState />
  </React.StrictMode>,
  document.getElementById('root')
);


