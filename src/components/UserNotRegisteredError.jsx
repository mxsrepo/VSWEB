import React from 'react';
import { AlertCircle } from 'lucide-react';

export const UserNotRegisteredError = () => (
  <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
    <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
    <h2 className="text-2xl font-bold mb-2">Access Restricted</h2>
    <p className="text-slate-600 dark:text-slate-400">Your account is not registered in our system. Please contact administration.</p>
  </div>
);
