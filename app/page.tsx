"use client";
import Container from "@/components/Container";
import HomeDescription from "@/components/HomeDescription";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Home() {
  const handleDownload = () => {
    const pdfUrl = "pdfs/Updated Local CV Raza Haider 23-12-2024.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "pdfs/Updated Local CV Raza Haider 23-12-2024.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="bg-bodyColor text-white/80">
      <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="order-2 xl:order-none">
          <div>
            <h3 className="font-semibold tracking-wide mb-1">
              Software Engineer{" "}
            </h3>
            <h2 className="text-3xl md:text-5xl mb-2">Hello I&apos;m</h2>
            <h1 className="text-lightSky text-5xl md:text-7xl tracking-normal">
              Raza Haider
            </h1>
          </div>
          <div className="w-full h-[170px] md:h-[140px] relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <HomeDescription />
            </div>
          </div>
          <Button
            onClick={handleDownload}
            className="bg-transparent rounded-full border border-lightSky/50 text-lightSky hover:bg-hoverColor hover:text-black hoverEffect h-11 mb-4"
          >
            Download cv <Download />
          </Button>
          <SocialLinks />
          <Statistics />
        </div>
        {/* photo div */}
        <div className="order-1 xl:order-none">
          <Photo />
        </div>
      </Container>
    </div>
  );
}
