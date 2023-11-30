import React from 'react';
import Link from 'next/link';

export default function Kontakt() {
  return (
    <div>
      <h1>Kontaktt</h1>
      <p>Hier ist etwas Text über Kontakt.</p>
      <Link href="/">Zurück zur Startseite</Link>
    </div>
  );
}