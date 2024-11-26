"use client";
import SelectedLetter from "@/app/components/SelectedLetter";
import { useParams } from "next/navigation";

export default function ViewLetter() {
  const params = useParams<{ id: string }>();

  return (
    <>
      <SelectedLetter id={params.id} />
    </>
  );
}
