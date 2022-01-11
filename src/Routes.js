import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { RouteWithLayout } from './layout/common';
import { MainLayout, MainLayoutSidebar } from './layout';

import {
  Home as HomePage,
  Category as CategoryPage,
  Products as ProductPage,
  Dashboard as DashboardPage,
  PageNotFound,
} from './pages';
import SignUp from './component/SignUp';
import SignIn from './component/SignIn';
import LandingLayout from './layout/LandingLayout';
import Profile from './component/Profile'
import index from './pages/menu/index'
import Order from './component/Order'
import Cart from './component/Cart'
import Addres from './pages/addres/Addres'
import AddProduct from './pages/menu/AddProduct'
import EditProduct from './pages/menu/EditProduct'
// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
export default function Routes() {
  return (
    <Switch>
      <Redirect exact from='/' to='/grab/signin' />
      {/* <Route path='/grab/signup' component={SignUp} />
      <Route path='/grab/signin' component={SignIn} /> */}

      <RouteWithLayout
        component={HomePage}
        exact
        layout={MainLayout}
        pageTitle=''
        path='/grab/home'
      />
      <Route
        
        exact
        path='/grab/seller/profile'
        component={Profile}
      />
      <Route
        
        exact
        path='/grab/order'
        component={Order}
      />
      <Route
        
        exact
        path='/grab/cart'
        component={Cart}
      />
      <Route
        
        exact
        path='/grab/addres'
        component={Addres}
      />

      <RouteWithLayout
        component={SignUp}
        exact
        layout={LandingLayout}
        pageTitle=''
        path='/grab/signup'
      />
      <RouteWithLayout
        component={SignIn}
        exact
        layout={LandingLayout}
        pageTitle=''
        path='/grab/signin'
      />
      <RouteWithLayout
        component={DashboardPage}
        exact
        layout={MainLayoutSidebar}
        pageTitle='Dashboard'
        path='/grab/seller/dashboard'
      />

      <RouteWithLayout
        component={PageNotFound}
        exact
        layout={MainLayoutSidebar}
        pageTitle='404'
        path='/grab/not-found'
      />

      <RouteWithLayout
        component={CategoryPage}
        exact
        layout={MainLayoutSidebar}
        pageTitle='Category'
        path='/grab/seller/category'
      />
      <RouteWithLayout
        component={index}
        exact
        layout={MainLayoutSidebar}
        pageTitle='Menu'
        path='/grab/seller/menu'
      />
      <RouteWithLayout
        component={AddProduct}
        exact
        layout={MainLayoutSidebar}
        pageTitle='Add Menu'
        path='/grab/seller/menu/AddProduct'
      />
      <RouteWithLayout
        component={EditProduct}
        exact
        layout={MainLayoutSidebar}
        pageTitle='Edit Menu'
        path='/grab/seller/menu/EditProduct/:id'
      />
      <Redirect to='/grab/not-found' status='404' />
    </Switch>
  );
}
