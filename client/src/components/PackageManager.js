import React from "react";
import './PackageManager.scss';

export default function PackageManager() {
  return (
    <main className="package-manager">
      <form>
        <input type="text" placeholder="Search Package By Tracking Number"></input>
      </form>
      <form>
        <input type="text" placeholder="Add Package +"></input>
      </form>
    </main>
  );
}
