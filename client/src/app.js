import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header"
import './styles/style.scss';

const HomePage = () => (
    <h1>HomePage</h1>

)

const AddTaskPage = () => (
    <h1>Page to Add Task</h1>

)

const ProfilePage = () => (
    <h1>Profile Page!!!</h1>

)

const NotFoundPage = () => (
    <h1>404!</h1>

)

const Routes = (
    <Router>
        <Header />
        <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/create" component={AddTaskPage} exact={true} />
            <Route path="/profile" component={ProfilePage} exact={true} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
)

ReactDOM.render(Routes, document.getElementById('app'));