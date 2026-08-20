"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Search, 
  ArrowRight, 
  Laptop, 
  Smartphone, 
  ChevronDown, 
  ChevronUp, 
  ArrowLeft,
  CheckCircle,
  X,
  CreditCard,
  Mail,
  User,
  Calendar,
  Lock,
  ArrowUpRight
} from "lucide-react";

const TEMPLATES = [
  {
    id: "zeyna",
    name: "Zeyna",
    tagline: "Creative Agency & Portfolio Template",
    author: "PeThemes",
    authorAvatar: "/images/l2.png",
    price: 99,
    image: "/images/zeyna_mockup.jpg",
    isNew: true,
    category: "Portfolio & Agency",
    breadcrumbs: "Templates > Portfolio & Agency",
    mainPages: [
      "About — studio story, values, team, clients, and recognition",
      "Services — brand strategy, identity systems, web design, Webflow development, and product design",
      "Team — the people behind the studio",
      "Works — CMS-powered portfolio grid, filterable by category",
      "Pricing — one-time project packages and monthly retainers with clear inclusions",
      "Careers — CMS-managed open positions, so new roles publish without touching the design",
      "Blog — fully CMS-managed articles with linked author pages",
      "Contact — project inquiry form plus direct studio details"
    ],
    cmsCollectionPages: [
      "Works Template — individual case studies",
      "Team Template — individual team member bios",
      "Careers Template — individual job descriptions",
      "Blog Post Template — individual blog articles",
      "Authors Template — individual author profiles",
      "Categories Template — category pages for blog posts/works",
      "Tags Template — tag filter pages"
    ],
    details: {
      columns: [
        { title: "Navigate", links: ["Home", "Works", "About", "Services", "Team", "Careers", "Pricing", "Blog", "Contact"] },
        { title: "Inquiries", links: ["hello@zeynastudio.com", "+12 (345) 648 90 00"] },
        { title: "Visit Us", links: ["23 Bedford Square WC1B 3HH", "London, United Kingdom"] },
        { title: "Stay Connected", links: ["Instagram", "Dribbble", "Facebook", "LinkedIn"] }
      ]
    }
  },
  {
    id: "avenir",
    name: "Avenir",
    tagline: "Corporate Portfolio & Business Template",
    author: "BYQ Supply",
    authorAvatar: "/images/l1.png",
    price: 129,
    image: "/images/avenir_mockup.jpg",
    isNew: true,
    category: "Portfolio & Agency",
    breadcrumbs: "Templates > Portfolio & Agency",
    mainPages: [
      "Home — high-converting minimalist landing page for modern corporate companies",
      "About — details about the firm, values, and business leadership",
      "Projects — catalog of corporate portfolios with filtering capabilities",
      "Case Study — single deep dive into detailed client success stories",
      "Capabilities — outline of core consulting and digital services",
      "Contact — modern lead generation and query forms"
    ],
    cmsCollectionPages: [
      "Case Studies — individual rich text study articles",
      "Team Members — leadership profile pages",
      "Offices — location listing and contact pages"
    ]
  },
  {
    id: "cognix",
    name: "Cognix",
    tagline: "SaaS Dashboard & Tech Template",
    author: "Flomio Studio",
    authorAvatar: "/images/l3.png",
    price: 79,
    image: "/images/cognix_mockup.jpg",
    isNew: false,
    category: "Technology",
    breadcrumbs: "Templates > Technology",
    mainPages: [
      "Home — modern tech dashboard style landing page with live interactive charts",
      "Features — detailed explanations of platform analytics and integrations",
      "Pricing — beautiful toggle matrices for monthly/yearly SaaS plans",
      "Docs — structural developer documentation template",
      "Contact — lead forms, live support links, and sales contact layouts"
    ],
    cmsCollectionPages: [
      "Integrations — individual SaaS app connection guides",
      "Help Articles — customer support tutorials",
      "Careers — current open positions in the tech team"
    ]
  },
  {
    id: "veltro",
    name: "Veltro",
    tagline: "AI Platform & Creator Studio Template",
    author: "Flownix",
    authorAvatar: "/images/l4.png",
    price: 79,
    image: "/images/veltro_mockup.jpg",
    isNew: false,
    category: "Technology",
    breadcrumbs: "Templates > Technology",
    mainPages: [
      "Home — creative workspace landing page for AI generator tools",
      "Create — playground interface with prompts and generation grids",
      "Pricing — subscription packages with credit allotments",
      "Community — gallery of user-generated models and outputs",
      "Contact — business integration requests and support forms"
    ],
    cmsCollectionPages: [
      "Generations — showcase pages for individual art assets",
      "Sound Packs — voice presets and downloadable sample info pages"
    ]
  },
  {
    id: "habitat",
    name: "Habitat",
    tagline: "Real Estate & Modern Property Listing",
    author: "EstateFlow",
    authorAvatar: "/images/l5.png",
    price: 89,
    image: "/images/customportfolio.png",
    isNew: false,
    category: "Real Estate",
    breadcrumbs: "Templates > Real Estate",
    mainPages: [
      "Home — clean, high-performance property directory with advanced search tools",
      "Properties — grid/map listings showing locations, sizes, and prices",
      "Agent Profiles — detailed bios and contact links for real estate agents",
      "Contact — property inquiry forms, visit scheduler, and office details"
    ],
    cmsCollectionPages: [
      "Properties CMS — dynamic listing page for individual house/apartment units",
      "Agents CMS — individual agent bio pages with active listings"
    ]
  },
  {
    id: "retailer",
    name: "Retailer",
    tagline: "Minimalist E-Commerce & Retail Shop",
    author: "ShopDev",
    authorAvatar: "/images/l6.png",
    price: 79,
    image: "/images/webdesign.png",
    isNew: false,
    category: "Retail",
    breadcrumbs: "Templates > Retail",
    mainPages: [
      "Home — visual editorial showcase of lifestyle products and new drops",
      "Shop — grid layout with responsive filters for categories, prices, and sizes",
      "Product Detail — optimized page with variant selector, reviews, and carts",
      "Checkout — simple single-step cart and payment flow template"
    ],
    cmsCollectionPages: [
      "Products CMS — dynamic detail templates for individual products",
      "Categories CMS — tag filtered lists for item groupings"
    ]
  },
  {
    id: "inkwell",
    name: "Inkwell",
    tagline: "Modern Blog & Editorial Template",
    author: "EditorialCo",
    authorAvatar: "/images/l7.png",
    price: 49,
    image: "/images/allservices.png",
    isNew: false,
    category: "Blog & Editorial",
    breadcrumbs: "Templates > Blog & Editorial",
    mainPages: [
      "Home — interactive multi-category editorial magazine landing page",
      "Articles — grid layout of blog posts with search bar and filter categories",
      "Author Listing — bios, socials, and written pieces by site authors",
      "Contact — pitch desk details, subscription, and newsletter signups"
    ],
    cmsCollectionPages: [
      "Articles CMS — dynamic posts layout featuring custom newsletter blocks",
      "Authors CMS — individual writer archive templates"
    ]
  },
  {
    id: "synergy",
    name: "Synergy",
    tagline: "Professional Consulting & Financial Service",
    author: "ConsultCo",
    authorAvatar: "/images/l8.png",
    price: 69,
    image: "/images/system.png",
    isNew: false,
    category: "Professional Services",
    breadcrumbs: "Templates > Professional Services",
    mainPages: [
      "Home — professional trust-building layouts detailing core competencies",
      "About Us — firm background, credentials, ethics, and team structure",
      "Services — modular pricing packages for audits, valuations, and advisories",
      "Contact — meeting scheduler form and live map locator"
    ],
    cmsCollectionPages: [
      "Services CMS — individual feature breakdowns",
      "Case Studies CMS — client reference results"
    ]
  }
];

const CATEGORIES = [
  { 
    name: "Portfolio & Agency", 
    count: 2, 
    images: ["/images/h.png", "/images/customportfolio.png", "/images/zeyna_mockup.jpg"] 
  },
  { 
    name: "Technology", 
    count: 2, 
    images: ["/images/webdevsec.png", "/images/cognix_mockup.jpg", "/images/veltro_mockup.jpg"] 
  },
  { 
    name: "Blog & Editorial", 
    count: 1, 
    images: ["/images/allservices.png", "/images/banner1.png", "/images/banner4.png"] 
  },
  { 
    name: "Professional Services", 
    count: 1, 
    images: ["/images/systemsec.png", "/images/system.png", "/images/avenir_mockup.jpg"] 
  },
  { 
    name: "Real Estate", 
    count: 1, 
    images: ["/images/banner2.png", "/images/banner3.png", "/images/customportfolio.png"] 
  },
  { 
    name: "Retail", 
    count: 1, 
    images: ["/images/webdesign.png", "/images/brandingsec.png", "/images/branding.png"] 
  }
];

export default function ProjectsPageContents() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [previewDevice, setPreviewDevice] = useState("desktop");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showCmsPages, setShowCmsPages] = useState(false);
  const [checkoutTemplate, setCheckoutTemplate] = useState(null);
  
  // Checkout Form States
  const [formData, setFormData] = useState({
    email: "",
    cardNum: "",
    expiry: "",
    cvv: "",
    name: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const featuredRef = useRef(null);

  const handleCategorySelect = (category) => {
    setCategoryFilter(category);
    // Smooth scroll down to featured templates grid
    if (featuredRef.current) {
      featuredRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredTemplates = TEMPLATES.filter((template) => {
    const matchesCategory = categoryFilter === "All" || template.category === categoryFilter;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setPaymentSuccess(true);
    }, 2000);
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 16) value = value.slice(0, 16);
    // Format card number to xxxx xxxx xxxx xxxx
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    setFormData({ ...formData, cardNum: formattedValue });
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }
    setFormData({ ...formData, expiry: value });
  };

  const handleCvvChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 3) value = value.slice(0, 3);
    setFormData({ ...formData, cvv: value });
  };

  // Scroll back to top when entering detail view
  useEffect(() => {
    if (selectedTemplate) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [selectedTemplate]);

  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-black selection:text-lime pt-20 pb-20">
      
      {/* 1. DETAIL VIEW OVERLAY */}
      {selectedTemplate ? (
        <div className="px-5 sm:px-8 lg:px-20 2xl:px-100 max-w-[1920px] mx-auto transition-all duration-300">
          
          {/* Breadcrumbs & Back Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <button 
              onClick={() => {
                setSelectedTemplate(null);
                setShowCmsPages(false);
              }}
              className="group flex items-center gap-2 font-satoshiBold text-[16px] text-neutral-500 hover:text-black transition-colors duration-200 cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to templates
            </button>
            <span className="font-satoshiBold text-[14px] uppercase tracking-wider text-neutral-400">
              {selectedTemplate.breadcrumbs}
            </span>
          </div>

          {/* Title Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-10 border-b border-neutral-200">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-600 text-white font-satoshiBold text-[12px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Premium
                </span>
                <span className="text-neutral-500 font-satoshiBold text-[16px]">
                  by {selectedTemplate.author}
                </span>
              </div>
              <h1 className="font-CabinetGrotesk text-5xl sm:text-6xl font-black text-black">
                {selectedTemplate.name} — Website Template
              </h1>
            </div>

            {/* Price & Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-CabinetGrotesk text-3xl sm:text-4xl font-black text-black mr-4">
                ${selectedTemplate.price} USD
              </span>
              <button 
                onClick={() => alert(`Opening live demo for ${selectedTemplate.name} template...`)}
                className="px-6 py-3.5 border border-black/15 hover:border-black rounded-full font-satoshiBold text-[16px] bg-white transition-all cursor-pointer hover:shadow-xs"
              >
                Preview in browser
              </button>
              <button 
                onClick={() => alert(`Opening Figma/Webflow preview for ${selectedTemplate.name}...`)}
                className="px-6 py-3.5 border border-black/15 hover:border-black rounded-full font-satoshiBold text-[16px] bg-white transition-all cursor-pointer hover:shadow-xs"
              >
                Preview design
              </button>
              <button 
                onClick={() => {
                  setFormData({ email: "", cardNum: "", expiry: "", cvv: "", name: "" });
                  setPaymentSuccess(false);
                  setCheckoutTemplate(selectedTemplate);
                }}
                className="px-8 py-3.5 bg-black hover:bg-neutral-800 text-white rounded-full font-satoshiBold text-[16px] transition-all cursor-pointer shadow-md hover:shadow-lg"
              >
                Buy template
              </button>
            </div>
          </div>

          {/* Interactive Screen Preview Container */}
          <div className="mt-12 mb-16 flex flex-col items-center">
            
            {/* Device Switcher Pills */}
            <div className="flex bg-neutral-200/60 p-1.5 rounded-full mb-8 shadow-inner">
              <button 
                onClick={() => setPreviewDevice("desktop")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-satoshiBold text-[15px] transition-all cursor-pointer ${
                  previewDevice === "desktop" ? "bg-black text-white shadow-md" : "text-neutral-600 hover:text-black"
                }`}
              >
                <Laptop className="w-4 h-4" />
                Desktop
              </button>
              <button 
                onClick={() => setPreviewDevice("mobile")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-satoshiBold text-[15px] transition-all cursor-pointer ${
                  previewDevice === "mobile" ? "bg-black text-white shadow-md" : "text-neutral-600 hover:text-black"
                }`}
              >
                <Smartphone className="w-4 h-4" />
                Mobile
              </button>
            </div>

            {/* Screen Frame Mockup */}
            {previewDevice === "desktop" ? (
              /* Desktop Mockup Frame */
              <div className="w-full max-w-6xl aspect-[16/10] bg-white rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border border-neutral-200 overflow-hidden flex flex-col transition-all duration-300">
                {/* Browser bar */}
                <div className="h-11 bg-neutral-100 border-b border-neutral-200 flex items-center px-4 gap-2.5 select-none shrink-0">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 bg-red-400 rounded-full" />
                    <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <span className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                  <div className="mx-auto w-1/3 bg-white border border-neutral-200 rounded-md py-1 text-center font-satoshiRegular text-[11px] text-neutral-400 truncate">
                    {selectedTemplate.id}.lazystudio.design
                  </div>
                </div>
                {/* Scrollable Template Viewport */}
                <div className="grow overflow-y-auto relative no-scrollbar">
                  <SimulatedTemplateView templateId={selectedTemplate.id} isMobile={false} />
                </div>
              </div>
            ) : (
              /* Mobile Mockup Frame */
              <div className="w-[360px] h-[720px] bg-black rounded-[40px] p-3 shadow-[0_30px_70px_-10px_rgba(0,0,0,0.25)] border-[4px] border-neutral-800 flex flex-col relative transition-all duration-300">
                {/* Camera Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-50 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 bg-neutral-900 rounded-full border border-neutral-800" />
                </div>
                {/* Phone screen container */}
                <div className="grow w-full h-full bg-white rounded-[32px] overflow-hidden flex flex-col border border-neutral-900 relative">
                  {/* Scrollable mobile viewport */}
                  <div className="grow overflow-y-auto relative no-scrollbar pt-6">
                    <SimulatedTemplateView templateId={selectedTemplate.id} isMobile={true} />
                  </div>
                </div>
                {/* Bottom line */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-32 h-1 bg-neutral-500 rounded-full z-50" />
              </div>
            )}
          </div>

          {/* Template Details Details & Accordions */}
          <div className="max-w-4xl mx-auto border-t border-neutral-200 pt-16">
            <h2 className="font-CabinetGrotesk text-3xl sm:text-4xl font-bold mb-8 text-black">
              Template Pages Included
            </h2>

            {/* Main Pages List */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 shadow-xs">
              <h3 className="font-satoshiBold text-[20px] font-semibold mb-6 text-black border-b border-neutral-100 pb-3">
                Main Layouts
              </h3>
              <ul className="flex flex-col gap-4 text-neutral-700">
                {selectedTemplate.mainPages.map((page, idx) => {
                  const [pageName, pageDesc] = page.split(" — ");
                  return (
                    <li key={idx} className="flex gap-3 items-start text-[16px] leading-[1.6]">
                      <span className="text-lime bg-black rounded-full p-1 font-satoshiBold text-[12px] flex items-center justify-center w-5 h-5 shrink-0 mt-0.5 select-none">
                        ✓
                      </span>
                      <p>
                        <strong className="text-black font-satoshiBold font-semibold">{pageName}</strong>
                        {pageDesc && ` — ${pageDesc}`}
                      </p>
                    </li>
                  );
                })}
              </ul>

              {/* Show More / CMS Collection Pages Accordion */}
              {selectedTemplate.cmsCollectionPages && (
                <div className="mt-8 pt-8 border-t border-neutral-100">
                  <button 
                    onClick={() => setShowCmsPages(!showCmsPages)}
                    className="flex items-center gap-2 text-neutral-500 hover:text-black font-satoshiBold text-[16px] transition-colors cursor-pointer select-none"
                  >
                    <span>{showCmsPages ? "Show less pages" : "Show CMS collections"}</span>
                    {showCmsPages ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>

                  {showCmsPages && (
                    <div className="mt-6 animate-fadeIn">
                      <h3 className="font-satoshiBold text-[18px] font-semibold mb-4 text-black">
                        CMS Templates & Inner Pages
                      </h3>
                      <ul className="flex flex-col gap-4 text-neutral-700">
                        {selectedTemplate.cmsCollectionPages.map((page, idx) => {
                          const [pageName, pageDesc] = page.split(" — ");
                          return (
                            <li key={idx} className="flex gap-3 items-start text-[16px] leading-[1.6]">
                              <span className="text-neutral-400 bg-neutral-100 rounded-full p-1 font-satoshiBold text-[12px] flex items-center justify-center w-5 h-5 shrink-0 mt-0.5 select-none font-semibold">
                                +
                              </span>
                              <p>
                                <strong className="text-black font-satoshiBold font-semibold">{pageName}</strong>
                                {pageDesc && ` — ${pageDesc}`}
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Related products showcase */}
          <div className="mt-24 border-t border-neutral-200 pt-20">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="font-satoshiBold text-[14px] tracking-widest text-neutral-400 uppercase">Related templates</span>
                <h3 className="font-CabinetGrotesk text-4xl sm:text-5xl font-black mt-2">More from LazyStudio</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEMPLATES.filter(t => t.id !== selectedTemplate.id).slice(0, 3).map((template) => (
                <div 
                  key={template.id}
                  onClick={() => setSelectedTemplate(template)}
                  className="group bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden">
                    <img 
                      src={template.image} 
                      alt={template.name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="font-CabinetGrotesk text-2xl font-black">{template.name}</h4>
                        <p className="font-satoshiBold text-[14px] text-neutral-400 mt-1">by {template.author}</p>
                      </div>
                      <span className="font-CabinetGrotesk text-[18px] font-black text-black bg-neutral-100 px-3 py-1 rounded-lg">
                        ${template.price} USD
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      ) : (
        
        /* 2. MARKETPLACE LISTING VIEW */
        <div>
          {/* Hero Section */}
          <div className="px-5 sm:px-8 lg:px-20 2xl:px-100 max-w-[1920px] mx-auto text-center pt-10 pb-16">
            <h1 className="font-CabinetGrotesk text-5xl sm:text-7xl font-black max-w-4xl mx-auto leading-[1.05] text-black">
              Launch a high-performing site without starting from scratch
            </h1>
            <p className="font-satoshiBold text-[16px] sm:text-[18px] text-neutral-500 max-w-2xl mx-auto mt-6 leading-[1.6]">
              Professionally designed, ultra-responsive website templates ready to customize and launch. Explore our curated collections tailored for agency, technology, portfolio, and creative platforms.
            </p>

            {/* Search Bar Input */}
            <div className="mt-10 max-w-xl mx-auto relative group">
              <input 
                type="text"
                placeholder="Search all templates (e.g. Business, Portfolio)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4.5 rounded-full border border-neutral-300 bg-white shadow-xs focus:shadow-md focus:border-black focus:outline-hidden transition-all font-satoshiBold text-[16px] placeholder-neutral-400"
              />
              <Search className="absolute left-6 top-[50%] translate-y-[-50%] w-5 h-5 text-neutral-400 group-focus-within:text-black transition-colors" />
            </div>
          </div>

          {/* Popular Categories Section */}
          <div className="px-5 sm:px-8 lg:px-20 2xl:px-100 max-w-[1920px] mx-auto mt-8 mb-20">
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-8 gap-4">
              <div>
                <h2 className="font-CabinetGrotesk text-3xl font-black text-[#18181B]">
                  Popular template categories
                </h2>
                <p className="font-satoshiBold text-[16px] text-neutral-500 mt-1">
                  Explore the best Webflow templates, highly-rated amongst users.
                </p>
              </div>
              <button 
                onClick={() => handleCategorySelect("All")}
                className="flex items-center gap-1.5 font-satoshiBold text-[16px] text-black font-semibold hover:opacity-80 transition-all cursor-pointer select-none"
              >
                Browse all categories
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Grid of Categories (Collage card design matching user screenshot exactly) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CATEGORIES.map((cat, idx) => (
                <div 
                  key={idx}
                  onClick={() => handleCategorySelect(cat.name)}
                  className={`group rounded-2xl border bg-white border-[#E4E4E7] p-8 flex justify-between items-center relative overflow-hidden h-[140px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:border-neutral-300 transition-all duration-300 cursor-pointer ${
                    categoryFilter === cat.name ? "ring-2 ring-black border-transparent" : ""
                  }`}
                >
                  {/* Label Text on Left */}
                  <div className="z-10 w-[45%] pr-2">
                    <h3 className="font-CabinetGrotesk text-[22px] font-black text-[#18181B] group-hover:text-blue-600 transition-colors leading-tight select-none">
                      {cat.name}
                    </h3>
                  </div>

                  {/* Collage stacked thumbnails on Right (unrotated, spreads on hover, no left fade gradient) */}
                  <div className="absolute right-0 top-0 bottom-0 w-[55%] h-full overflow-hidden flex justify-end select-none pointer-events-none">
                    {/* Layer 1 (Back-most/Left-most image in stack) */}
                    <div className="w-[85px] h-full absolute right-[100px] top-0 z-10 shadow-[2px_0_8px_rgba(0,0,0,0.06)] border-l border-neutral-100/50 transition-all duration-500 ease-out group-hover:right-[130px]">
                      <img src={cat.images[0]} className="w-full h-full object-cover" alt="" />
                    </div>
                    {/* Layer 2 (Middle image in stack) */}
                    <div className="w-[85px] h-full absolute right-[50px] top-0 z-20 shadow-[4px_0_12px_rgba(0,0,0,0.08)] border-l border-neutral-100/50 transition-all duration-500 ease-out group-hover:right-[65px]">
                      <img src={cat.images[1]} className="w-full h-full object-cover" alt="" />
                    </div>
                    {/* Layer 3 (Front-most/Right-most image in stack) */}
                    <div className="w-[85px] h-full absolute right-0 top-0 z-30 shadow-[6px_0_20px_rgba(0,0,0,0.12)] border-l border-neutral-100/50 transition-all duration-500 ease-out group-hover:right-[-10px]">
                      <img src={cat.images[2]} className="w-full h-full object-cover" alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Templates Grid Section */}
          <div ref={featuredRef} className="px-5 sm:px-8 lg:px-20 2xl:px-100 max-w-[1920px] mx-auto mt-28">
            <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-12 gap-6">
              <div>
                <span className="font-satoshiBold text-[14px] tracking-widest text-neutral-400 uppercase">Featured templates</span>
                <h2 className="font-CabinetGrotesk text-3xl sm:text-5xl font-black mt-1">
                  {categoryFilter === "All" ? "Featured website templates" : `${categoryFilter} Templates`}
                </h2>
                {categoryFilter !== "All" && (
                  <button 
                    onClick={() => setCategoryFilter("All")}
                    className="mt-3 font-satoshiBold text-[14px] text-neutral-500 hover:text-black transition-colors"
                  >
                    Clear category filter
                  </button>
                )}
              </div>

              {/* Grid Quick Tabs filter */}
              <div className="flex flex-wrap gap-2">
                {["All", "Portfolio & Agency", "Technology", "Blog & Editorial", "Real Estate", "Retail"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setCategoryFilter(tab)}
                    className={`px-5 py-2.5 rounded-full font-satoshiBold text-[14px] transition-all cursor-pointer border ${
                      categoryFilter === tab 
                        ? "bg-black text-white border-black" 
                        : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Empty state if search finds nothing */}
            {filteredTemplates.length === 0 && (
              <div className="bg-white rounded-3xl border border-neutral-200/80 p-16 text-center max-w-lg mx-auto mt-10 shadow-xs">
                <p className="font-CabinetGrotesk text-2xl font-black text-black">No templates found</p>
                <p className="font-satoshiBold text-[15px] text-neutral-400 mt-2">
                  Try adjusting your search keywords or clearing active filters.
                </p>
                <button 
                  onClick={() => { setSearchQuery(""); setCategoryFilter("All"); }}
                  className="mt-6 px-6 py-2.5 bg-black hover:bg-neutral-800 text-white font-satoshiBold text-[14px] rounded-full cursor-pointer"
                >
                  Reset filters
                </button>
              </div>
            )}

            {/* The Templates Grid (Screenshot 5 / Webflow visual design) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">
              {filteredTemplates.map((template) => (
                <div 
                  key={template.id}
                  onClick={() => setSelectedTemplate(template)}
                  className="group flex flex-col h-full cursor-pointer"
                >
                  {/* Template Card Image Frame (Boxed with border and rounded corners) */}
                  <div className="aspect-[4/5] bg-neutral-50 relative overflow-hidden rounded-[20px] border border-[#E4E4E7] shadow-[0_4px_20px_rgba(0,0,0,0.015)] transition-all duration-300 group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] group-hover:border-neutral-300">
                    
                    {/* Badge */}
                    {template.isNew && (
                      <span className="absolute top-5 left-5 bg-blue-600 text-white font-satoshiBold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider z-20 shadow-xs select-none">
                        ✦ New
                      </span>
                    )}

                    <img 
                      src={template.image} 
                      alt={template.name}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />

                    {/* Quick Preview overlay on hover (Webflow style) */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center z-10">
                      <span className="px-5 py-2.5 bg-white text-black font-satoshiBold text-[14px] font-bold rounded-full shadow-md transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 select-none">
                        View Details
                      </span>
                    </div>
                  </div>

                  {/* Template Card Details (Sitting transparently below image) */}
                  <div className="pt-4 flex flex-col grow justify-between">
                    <div className="flex items-start justify-between gap-4 px-1">
                      <div className="flex items-center gap-3">
                        {/* Creator Avatar circle */}
                        <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-neutral-100 bg-neutral-100">
                          <img 
                            src={template.authorAvatar} 
                            alt={template.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Text: Name & Author */}
                        <div>
                          <h3 className="font-CabinetGrotesk text-[18px] font-black text-[#18181B] group-hover:text-blue-600 transition-colors leading-tight">
                            {template.name}
                          </h3>
                          <p className="font-satoshiRegular text-[13px] text-neutral-500 font-semibold mt-0.5">
                            {template.author}
                          </p>
                        </div>
                      </div>

                      {/* Price Tag */}
                      <span className="font-CabinetGrotesk text-[16px] font-black text-neutral-800 shrink-0">
                        ${template.price} USD
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Info Banner callout matching styling */}
          <div className="px-5 sm:px-8 lg:px-20 2xl:px-100 max-w-[1920px] mx-auto mt-32 mb-10">
            <div className="bg-black text-white rounded-3xl p-10 sm:p-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative overflow-hidden">
              {/* background graphic helper */}
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial-gradient(ellipse at center, rgba(174,255,0,0.1) 0%, transparent 70%) pointer-events-none select-none" />
              <div className="max-w-2xl relative z-10">
                <span className="text-lime font-satoshiBold text-[14px] tracking-widest uppercase">Custom Designs</span>
                <h3 className="font-CabinetGrotesk text-4xl sm:text-5xl font-black mt-3 leading-tight">
                  Need a custom website built specifically for you?
                </h3>
                <p className="font-satoshiBold text-[16px] sm:text-[18px] text-neutral-400 mt-4 max-w-xl">
                  We build custom software, landing pages, and SaaS dashboards tailored directly to your brand and user requirements.
                </p>
              </div>
              <Link 
                href="/contact" 
                className="px-8 py-4.5 bg-lime hover:bg-[#92d600] text-black font-satoshiBold text-[18px] font-semibold rounded-full cursor-none transition-all shadow-md shrink-0 relative z-10"
              >
                Let&apos;s Build Custom
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 3. SIMULATED CHECKOUT MODAL OVERLAY */}
      {checkoutTemplate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden border border-neutral-100 relative">
            
            {/* Close Button */}
            <button 
              onClick={() => {
                setCheckoutTemplate(null);
                setPaymentSuccess(false);
              }}
              className="absolute right-6 top-6 text-neutral-400 hover:text-black p-1 hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {paymentSuccess ? (
              /* Success screen state */
              <div className="p-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-lime/10 text-lime-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h3 className="font-CabinetGrotesk text-3xl font-black text-black">
                  Purchase Successful!
                </h3>
                <p className="font-satoshiBold text-[15px] text-neutral-500 mt-3 leading-relaxed">
                  Thank you for purchasing the <strong>{checkoutTemplate.name}</strong> template.
                </p>
                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200/50 w-full my-6 text-left">
                  <p className="font-satoshiBold text-[13px] text-neutral-400 uppercase font-semibold">What happens next?</p>
                  <p className="font-satoshiRegular text-[14px] text-neutral-700 mt-1.5">
                    We have transferred the Webflow template key and project files to <strong>{formData.email}</strong>. Check your email to duplicate the project to your workspace!
                  </p>
                </div>
                <button
                  onClick={() => {
                    setCheckoutTemplate(null);
                    setPaymentSuccess(false);
                  }}
                  className="w-full py-4 bg-black text-white hover:bg-neutral-800 rounded-full font-satoshiBold text-[16px] transition-all cursor-pointer font-semibold"
                >
                  Done
                </button>
              </div>
            ) : (
              /* Checkout form state */
              <form onSubmit={handleCheckoutSubmit} className="p-8">
                <span className="font-satoshiBold text-[12px] tracking-wider text-neutral-400 uppercase font-semibold">Secure Checkout</span>
                <h3 className="font-CabinetGrotesk text-2xl font-black mt-1 text-black border-b border-neutral-100 pb-4 mb-6">
                  Buy {checkoutTemplate.name} Template
                </h3>

                {/* Price Display */}
                <div className="flex justify-between items-center bg-neutral-50 p-4 rounded-xl border border-neutral-200/30 mb-6">
                  <div>
                    <p className="font-satoshiBold text-[14px] text-neutral-800 font-semibold">{checkoutTemplate.name} Template License</p>
                    <p className="font-satoshiBold text-[12px] text-neutral-400">Single project use</p>
                  </div>
                  <span className="font-CabinetGrotesk text-xl font-black text-black">
                    ${checkoutTemplate.price}.00
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Email Input */}
                  <div>
                    <label className="block font-satoshiBold text-[14px] text-neutral-600 mb-1.5 font-semibold">Email Address</label>
                    <div className="relative">
                      <input 
                        type="email" 
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:border-black focus:outline-hidden text-[15px] font-satoshiBold"
                      />
                      <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  {/* Cardholder Name */}
                  <div>
                    <label className="block font-satoshiBold text-[14px] text-neutral-600 mb-1.5 font-semibold">Cardholder Name</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:border-black focus:outline-hidden text-[15px] font-satoshiBold"
                      />
                      <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  {/* Card Number */}
                  <div>
                    <label className="block font-satoshiBold text-[14px] text-neutral-600 mb-1.5 font-semibold">Card Number</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        required
                        placeholder="0000 0000 0000 0000"
                        value={formData.cardNum}
                        onChange={handleCardNumberChange}
                        className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:border-black focus:outline-hidden text-[15px] font-satoshiBold"
                      />
                      <CreditCard className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  {/* Expiration + CVV Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-satoshiBold text-[14px] text-neutral-600 mb-1.5 font-semibold">Expiration</label>
                      <div className="relative">
                        <input 
                          type="text" 
                          required
                          placeholder="MM/YY"
                          value={formData.expiry}
                          onChange={handleExpiryChange}
                          className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:border-black focus:outline-hidden text-[15px] font-satoshiBold"
                        />
                        <Calendar className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                    <div>
                      <label className="block font-satoshiBold text-[14px] text-neutral-600 mb-1.5 font-semibold">CVV</label>
                      <div className="relative">
                        <input 
                          type="password" 
                          required
                          placeholder="•••"
                          value={formData.cvv}
                          onChange={handleCvvChange}
                          className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:border-black focus:outline-hidden text-[15px] font-satoshiBold"
                        />
                        <Lock className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pay Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-8 py-4 bg-black text-white hover:bg-neutral-800 rounded-full font-satoshiBold text-[16px] transition-all cursor-pointer font-semibold disabled:bg-neutral-400 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" viewBox="0 0 24 24" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    `Pay $${checkoutTemplate.price}.00 USD`
                  )}
                </button>

                <p className="text-center font-satoshiRegular text-[12px] text-neutral-400 mt-4 flex items-center justify-center gap-1">
                  🔒 Payments are encrypted and secure.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* 4. SIMULATED RESONSIVE HTML VIEWPORTS */
function SimulatedTemplateView({ templateId, isMobile }) {
  
  // Custom mock HTML views matching Zeyna / Avenir / Cognix / Veltro aesthetic styles
  
  if (templateId === "zeyna") {
    return (
      <div className={`bg-[#0E0F11] text-white font-sans ${isMobile ? "p-4" : "p-10"} min-h-screen text-[14px]`}>
        {/* Header */}
        <header className="flex justify-between items-center pb-8 border-b border-neutral-800">
          <div className="font-CabinetGrotesk text-lg tracking-wider font-extrabold uppercase select-none">
            NOIR // STUDIO
          </div>
          <button className="text-neutral-400 hover:text-white flex items-center gap-1 font-satoshiBold text-[13px]">
            Menu
          </button>
        </header>

        {/* Hero */}
        <section className={`py-12 ${isMobile ? "max-w-full" : "max-w-2xl"}`}>
          <p className="font-CabinetGrotesk text-[12px] uppercase text-neutral-500 tracking-widest font-bold">Process notes, and perspectives</p>
          <h2 className="font-CabinetGrotesk text-3xl sm:text-4xl leading-tight font-black mt-4 text-white">
            Why the best brands are built on restraint.
          </h2>
          <p className="font-satoshiRegular text-[14px] text-neutral-400 mt-4 leading-relaxed">
            The most memorable brands aren&apos;t the loudest — they&apos;re the clearest. We focus on the quiet discipline of leaving things out.
          </p>
          <button className="mt-8 flex items-center gap-1.5 text-lime border-b border-lime pb-0.5 font-satoshiBold text-[13px]">
            View All Posts
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </section>

        {/* Portfolio Works Section */}
        <section className="py-10 border-t border-neutral-900">
          <h3 className="font-CabinetGrotesk text-xs uppercase text-neutral-500 tracking-widest font-bold mb-6">Works catalog</h3>
          <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-6`}>
            {[
              { title: "Motion Studios", sub: "Identity // Branding" },
              { title: "Structura", sub: "Digital // Web Design" }
            ].map((work, idx) => (
              <div key={idx} className="group bg-neutral-900 border border-neutral-800 p-6 rounded-xl hover:border-neutral-700 transition-colors">
                <div className="aspect-[4/3] bg-neutral-950 rounded-lg mb-4 flex items-center justify-center text-neutral-700 font-extrabold">
                  [Image Mockup]
                </div>
                <h4 className="font-CabinetGrotesk text-[18px] font-bold text-white">{work.title}</h4>
                <p className="font-satoshiBold text-[12px] text-neutral-500 mt-1">{work.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* "Ready to build something impactful?" Section (Screenshot 6 visual styling) */}
        <section className="py-12 border-t border-neutral-900">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-CabinetGrotesk text-2xl font-black text-white">Ready to build something impactful?</h3>
              <p className="font-satoshiRegular text-[13px] text-neutral-400 mt-2">
                Tell us about your idea. We&apos;d love to build something great together.
              </p>
            </div>
            
            {/* Simulated Form inputs */}
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-[#17181C] border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-hidden focus:border-neutral-600 text-[13px]"
              />
              <input 
                type="email" 
                placeholder="E-mail" 
                className="w-full bg-[#17181C] border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-hidden focus:border-neutral-600 text-[13px]"
              />
            </div>
          </div>
        </section>

        {/* Footer (Screenshot 6 visual mockup) */}
        <footer className="pt-8 border-t border-neutral-900 mt-8 grid grid-cols-2 gap-6 text-[12px] text-neutral-500">
          <div>
            <span className="block font-CabinetGrotesk uppercase text-neutral-400 mb-2 font-bold">( Navigate )</span>
            <ul className="space-y-1">
              <li>Home</li>
              <li>Works</li>
              <li>About</li>
              <li>Services</li>
            </ul>
          </div>
          <div>
            <span className="block font-CabinetGrotesk uppercase text-neutral-400 mb-2 font-bold">( Inquiries )</span>
            <ul className="space-y-1">
              <li>hello@zeynastudio.com</li>
              <li>+12 (345) 648 90 00</li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }

  if (templateId === "avenir") {
    return (
      <div className={`bg-[#050505] text-[#FAF8F5] font-sans ${isMobile ? "p-4" : "p-10"} min-h-screen text-[14px]`}>
        <header className="flex justify-between items-center pb-8">
          <div className="font-CabinetGrotesk text-lg tracking-wider font-extrabold uppercase">
            AVENIR™
          </div>
          <span className="text-[12px] text-neutral-500">[Menu]</span>
        </header>

        <section className="py-12 border-b border-neutral-900">
          <h2 className="font-CabinetGrotesk text-3xl sm:text-4xl leading-tight font-black tracking-tight">
            ELEVATE YOUR BUSINESS THROUGH STRATEGIC INNOVATION.
          </h2>
          <p className="font-satoshiRegular text-[14px] text-neutral-400 mt-6 leading-relaxed">
            We deliver data-driven solutions and impactful products built for global enterprises.
          </p>
          <button className="mt-8 px-6 py-2.5 bg-[#FAF8F5] text-black font-satoshiBold text-[13px] rounded-full">
            Partner With Us
          </button>
        </section>

        <section className="py-10 grid grid-cols-1 gap-6">
          <h3 className="font-CabinetGrotesk text-xs uppercase text-neutral-500 tracking-wider font-bold">Core Expertise</h3>
          {["Strategy", "Digital Development", "Growth Marketing"].map((exp, idx) => (
            <div key={idx} className="border-b border-neutral-900 pb-4">
              <h4 className="font-CabinetGrotesk text-[18px] font-bold">{exp}</h4>
              <p className="font-satoshiRegular text-[13px] text-neutral-500 mt-1">
                Custom strategies built to optimize platform conversions and grow business value.
              </p>
            </div>
          ))}
        </section>
      </div>
    );
  }

  if (templateId === "cognix") {
    return (
      <div className={`bg-[#0F172A] text-[#F8FAFC] font-sans ${isMobile ? "p-4" : "p-8"} min-h-screen text-[13px]`}>
        <header className="flex justify-between items-center pb-6 border-b border-slate-800">
          <div className="font-CabinetGrotesk text-lg font-black text-blue-500">NEXUS FLOW</div>
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-[11px] font-satoshiBold">SaaS Platform</span>
        </header>

        <section className="py-8">
          <h3 className="font-CabinetGrotesk text-xl font-bold">Dashboard Performance</h3>
          <p className="text-slate-400 mt-1">Overview of your platform active integrations</p>

          {/* Simulated chart graphs */}
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl my-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-400 text-xs">Active Users</span>
              <span className="text-green-400 text-xs font-bold">+12% growth</span>
            </div>
            <div className="font-CabinetGrotesk text-2xl font-black">14,500 users</div>
            
            {/* SVG graph mockup */}
            <div className="h-20 w-full mt-4 flex items-end">
              <svg className="w-full h-full text-blue-500" viewBox="0 0 100 30" preserveAspectRatio="none">
                <path d="M0 25 Q15 5, 30 20 T60 10 T90 5 T100 15" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
              <span className="text-slate-400 text-xs">Monthly Revenue</span>
              <div className="font-CabinetGrotesk text-lg font-bold mt-1">$82.4K</div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
              <span className="text-slate-400 text-xs">Active Tasks</span>
              <div className="font-CabinetGrotesk text-lg font-bold mt-1">138 tasks</div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (templateId === "veltro") {
    return (
      <div className={`bg-[#FCFBF8] text-[#1C1917] font-sans ${isMobile ? "p-4" : "p-8"} min-h-screen text-[13px]`}>
        <header className="flex justify-between items-center pb-6">
          <div className="font-CabinetGrotesk text-lg font-black text-orange-600">VOX GENIUS</div>
          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-[11px] font-satoshiBold">AI Engine</span>
        </header>

        <section className="py-8 text-center">
          <h2 className="font-CabinetGrotesk text-2xl sm:text-3xl font-black leading-tight text-neutral-900">
            Create Stunning AI Voice & Visuals. Instantly.
          </h2>
          <p className="text-neutral-500 mt-3 max-w-sm mx-auto">
            Generate high-quality voiceovers and custom AI art assets using natural text prompts.
          </p>
          <button className="mt-6 px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-satoshiBold text-[13px]">
            Get Started Now
          </button>
        </section>

        <section className="py-6 border-t border-neutral-200">
          <h3 className="font-CabinetGrotesk text-xs uppercase text-neutral-400 tracking-wider font-bold mb-4">Core Tools</h3>
          <div className="space-y-3">
            {[
              { title: "AI Voiceover", desc: "Text-to-speech presets in 100+ accents." },
              { title: "AI Image Engine", desc: "Stable diffusion layouts for art assets." }
            ].map((tool, idx) => (
              <div key={idx} className="bg-white border border-neutral-200 p-4 rounded-xl">
                <h4 className="font-CabinetGrotesk text-sm font-bold text-neutral-800">{tool.title}</h4>
                <p className="text-neutral-500 text-xs mt-1">{tool.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // Fallback defaults
  return (
    <div className="p-8 text-center">
      <h3 className="font-CabinetGrotesk text-2xl font-black">Template Demo</h3>
      <p className="text-neutral-500 mt-2">Dynamic layout viewport for ID: {templateId}</p>
    </div>
  );
}
