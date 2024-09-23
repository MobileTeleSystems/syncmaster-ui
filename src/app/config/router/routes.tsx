import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserListPage } from '@pages/user';
import { LoginPage } from '@pages/auth';

import { AuthRoutes, PrivateRoutes } from './permissions';

export const AppRoutes: FC = () => {
  return (
    <Router>
      <AuthRoutes>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthRoutes>

      <PrivateRoutes>
        <Routes>
          <Route path="/users" element={<UserListPage />} />
        </Routes>
      </PrivateRoutes>
    </Router>
  );
};
