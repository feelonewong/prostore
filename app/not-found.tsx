"use client";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        width={48}
        height={48}
        priority={true}
        alt={`${APP_NAME} logo`}
      />
      <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h1 className="font-bold text-3xl mb-4">Not Found</h1>
        <p className="text-destructive">Could not found request page.</p>
        <Button
          className="mt-2 ml-2"
          variant="outline"
          onClick={() => (window.location.href = "/")}
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
