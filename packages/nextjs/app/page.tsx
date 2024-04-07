"use client";

import { DebugContracts } from "./_components/DebugContracts";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col pt-10">
        <div className="px-16 py-8 rounded-3xl bg-base-300 text-white">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Solana Attestation Services</span>
          </h1>
          <p className="text-center text-lg">Get started by creating an attestation!</p>
        </div>
        <DebugContracts />
      </div>
    </>
  );
};

export default Home;
