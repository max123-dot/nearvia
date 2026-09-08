import React, { useState, useEffect } from 'react';
import NodeMeshCanvas from './components/NodeMeshCanvas';
import LandingNavbar from './components/LandingNavbar';
import HeroSection from './components/HeroSection';
import ProblemSolution from './components/ProblemSolution';
import PillarsShowcase from './components/PillarsShowcase';
import DualPerspective from './components/DualPerspective';
import HowItWorksSection from './components/HowItWorksSection';
import InteractiveSandbox from './components/InteractiveSandbox';
import FooterCTA from './components/FooterCTA';

export default function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);

  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      <NodeMeshCanvas />

      <div className="content-layer">
        <LandingNavbar theme={theme} onToggleTheme={toggleTheme} />
        <HeroSection />
        <ProblemSolution />
        <PillarsShowcase />
        <DualPerspective />
        <HowItWorksSection />
        <InteractiveSandbox />
        <FooterCTA theme={theme} />
      </div>
    </div>
  );
}
