import React from 'react';
import Link from 'next/link';

export default function Ratgeber() {
  return (
    <div>
      <h1>Ratgeber</h1>
      <p>Hier ist etwas Text über Ratgeber.</p>
      <Link href="/">Zurück zur Startseite</Link>
    </div>
  );
}