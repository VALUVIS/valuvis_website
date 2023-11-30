import React from 'react';
import Link from 'next/link';

export default function FAQ() {
  return (
    <div>
      <h1>FAQ</h1>
      <p>Hier ist etwas Text über FAQ.</p>
      <Link href="/">Zurück zur Startseite</Link>
    </div>
  );
}