"use client";
import AppLayout from "@/Layout/AppLayout";
import Footer from "@/Layout/Footer";
import Header from "@/Layout/Header";
import Information from "@/components/Invitation/Information";
import { DRESSCODE, INFORMATION } from "@/lib/InformationText";

export default function About() {
  return (
    <>
      <AppLayout.Scene>
        <Header />
        <Information title={"Information"} context={INFORMATION} />
        <Information title={"Dress Code"} context={DRESSCODE} />
        <Information title={"Dining"} context={INFORMATION} />
        <Footer />
      </AppLayout.Scene>
    </>
  );
}
