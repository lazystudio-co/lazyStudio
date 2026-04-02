import NavBar from "@/components/navBar";
import "./globals.css";
import Footer from "@/components/footer";
import CustomCursor from "@/components/customCursor";

export const metadata = {
  title: "LazyStudio — UI/UX Design, Web Development & Branding Agency",
  description:
    "LazyStudio is a premier digital agency crafting world-class products. We specialize in high-performance Next.js development, intuitive UI/UX design, strategic branding, and cinematic video editing for startups and global enterprises.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className="selection:bg-black selection:text-white"
        style={{ margin: 0, padding: 0 }}
      >
        <CustomCursor />

        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
