import React from "react";

interface GreeterProps {
  person: string;
}

export default function Greeter({ person }: GreeterProps) {
  return <h1>Greeter, {person} </h1>;
}
