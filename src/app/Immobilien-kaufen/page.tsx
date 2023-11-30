import React from 'react';
import Link from 'next/link';

export default function ImmobilienKaufen() {
  return (
    <div>
      <h1>Immobilien kaufen</h1>
      <p>Hier ist etwas Text über Immobilien kaufen.</p>
      <Link href="/">Zurück zur Startseite</Link>
    </div>
  );
}