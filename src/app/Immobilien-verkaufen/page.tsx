import React from 'react';
import Link from 'next/link';

export default function ImmobilienVerkaufen() {
  return (
    <div>
      <h1>Immobilien verkaufen</h1>
      <p>Hier ist etwas Text über Immobilien verkaufen.</p>
      <Link href="/">Zurück zur Startseite</Link>
    </div>
  );
}