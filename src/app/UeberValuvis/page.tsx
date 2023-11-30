import React from 'react';
import Link from 'next/link';

export default function UeberValuvis() {
  return (
    <div>
      <h1>Über Uns</h1>
      <p>Hier ist etwas Text über uns.</p>
      <Link href="/">Zurück zur Startseite</Link>
    </div>
  );
}