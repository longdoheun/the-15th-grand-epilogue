"use client";
import AppLayout from "@/Layout/AppLayout";
import Footer from "@/Layout/Footer";
import Header from "@/Layout/Header";
import Information from "@/components/Invitation/Information";
import {
  DINNING,
  DRESSCODE,
  INFORMATION,
  TIMELINE,
} from "@/lib/InformationText";

export default function About() {
  return (
    <>
      <AppLayout.Scene>
        <Header />
        <Information title={"Information"} context={INFORMATION} />
        <Information title={"Dress code"} context={DRESSCODE} />
        <Information title={"Timetable"} context={TIMELINE} />
        <Information title={"Dining"} context={DINNING} />
        <Footer />
      </AppLayout.Scene>
    </>
  );
}
