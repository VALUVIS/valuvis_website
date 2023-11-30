import React from 'react';
import Link from 'next/link';

export default function Immobilienmarkt() {
  return (
    <div>
      <h1>Immobilienmarkt</h1>
      <p>Hier ist etwas Text über Immobilienmarkt.</p>
      <Link href="/">Zurück zur Startseite</Link>
    </div>
  );
}