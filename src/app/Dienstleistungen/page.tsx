import React from 'react';
import Link from 'next/link';

export default function Dienstleistungen() {
  return (
    <div>
      <h1>Dienstleistungen</h1>
      <p>Hier ist etwas Text über Dienstleistungen.</p>
      <Link href="/">Zurück zur Startseite</Link>
    </div>
  );
}