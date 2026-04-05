import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export const PageNotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
    <h1 className="text-9xl font-bold text-cyan-500 mb-4">404</h1>
    <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
    <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">The page you are looking for doesn't exist or has been moved.</p>
    <Button asChild className="rounded-2xl h-12 px-8">
      <Link to="/">Return Home</Link>
    </Button>
  </div>
);
