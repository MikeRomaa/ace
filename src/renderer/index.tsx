/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Home } from './Pages/home';
import { ProjectProvider } from './hooks/ProjectContext';
import { CreateProject } from './Pages/createproject';

export const Main = () => (
    <ProjectProvider>
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/createproject" component={CreateProject} />
        </Router>
    </ProjectProvider>
);
ReactDOM.render(<Main />, document.body);
