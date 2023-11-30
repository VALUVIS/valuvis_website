import React from 'react';
import Link from 'next/link';

export default function Gewerbeimmobilien() {
  return (
    <div>
      <h1>Gewerbeimmobilien</h1>
      <p>Hier ist etwas Text über Gewerbeimmobilien.</p>
      <Link href="/">Zurück zur Startseite</Link>
    </div>
  );
}