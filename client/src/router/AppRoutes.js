import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "../components/Header";
import DashboardPage from "../views/DashboardPage";
import AddTaskPage from "../views/AddTaskPage";
import ProfilePage from "../views/ProfilePage";
import NotFoundPage from "../views/NotFoundPage";
import SignUpPage from "../views/SignUpPage";
import LoginPage from "../views/LoginPage";
import TaskDetailsPage from "../views/TaskDetailsPage";
import Footer from "../components/Footer";

const AppRoutes = () => (
    <Router>
        <Header />
        <div className="wrapper__main">
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/create" component={AddTaskPage} exact={true} />
                <Route path="/profile" component={ProfilePage} exact={true} />
                <Route path="/signup" component={SignUpPage} exact={true} />
                <Route path="/login" component={LoginPage} exact={true} />
                <Route path="/taskDetails" component={TaskDetailsPage} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
        <Footer />
    </Router>
)

export default AppRoutes;