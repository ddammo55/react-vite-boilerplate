import React from 'react'

const NaBar = () => {
  return (
    <header>
        <nav>
            <img src="/logo.svg" alt="Apple logo" />

            <ul>
                {[
                    {label: 'Store'},
                    {label: 'Mac'},
                    {label: 'iPhone'},
                    {label: 'Watch'},
                    {label: 'Vision'},
                    {label: 'AirPods'},
                    
                ].map((link) => (
                    <li key={link.label}>
                        <a href={link.label}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  );
};

export default NaBar;
