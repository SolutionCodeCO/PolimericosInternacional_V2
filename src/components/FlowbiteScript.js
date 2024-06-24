'use client'

import { useEffect } from 'react';

const FlowbiteScript = () => {
  useEffect(() => {
    import('flowbite');
  }, []);

  return null;
};

export default FlowbiteScript;
