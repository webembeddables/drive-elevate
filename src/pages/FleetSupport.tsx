// import { Link } from "react-router-dom";
// import Navigation from "@/components/Navigation";
// import { Button } from "@/components/ui/button";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// const FleetSupport = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />

//       {/* Article Header */}
//       <div className="container mx-auto px-4 pt-24 pb-8 max-w-7xl">
//         <div className="mb-8">
//           <Link to="/fleet" className="text-sm text-accent hover:underline mb-4 inline-block">
//             ← Back to Fleet
//           </Link>
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Own an Alectri Fleet</h1>
//           <p className="text-lg text-muted-foreground">
//             Grow your business and build an all-electric fleet with Alectri fleet.
//           </p>
//         </div>

//         {/* Main Layout with Sidebar */}
//         <div className="flex gap-8">
//           {/* Sidebar - Table of Contents */}
//           <div className=" lg:block w-[40%] flex-shrink-0">
//             <div className="sticky top-24">
//               <h3 className="text-sm font-semibold mb-4">In This Article</h3>
//               <nav className="space-y-2">
//                 <a href="#getting-started" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
//                   Getting Started
//                 </a>
//                 <a href="#create-order" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
//                   Ordering Your Fleet Vehicles
//                 </a>
//                 <a href="#manage-order" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
//                   Completing Your Pre-Delivery Tasks
//                 </a>
//                 <a href="#payment" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
//                   Paying for Your Fleet Vehicles
//                 </a>
//                 <a href="#delivery" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
//                   Taking Delivery
//                 </a>
//                 <a href="#manage-fleet" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
//                   Managing Your Fleet
//                 </a>
//                 <a href="#assign-drivers" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
//                   Assigning Drivers to Your Fleet
//                 </a>
//                 <a href="#service" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
//                   Service
//                 </a>
//                 <a href="#charging" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
//                   Charging Your Fleet
//                 </a>
//                 <a href="#faq" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
//                   Frequently Asked Questions
//                 </a>
//               </nav>
//             </div>
//           </div>

//           {/* Article Content */}
//           <article className="prose prose-gray dark:prose-invert max-w-none w-[60%]">
//           {/* Getting Started Section */}
//           <section id="getting-started" className="mb-12 scroll-mt-24">
//             <p className="text-base mb-4">
//               Start by exploring the Alectri vehicle lineup to see which models suit your business needs. 
//               Currently, Model S, Model 3, Model X and Model Y vehicles are available for your Alectri fleet.
//             </p>
//             <p className="text-base mb-6">
//               If you have questions about Alectri vehicles, creating an order or more,{" "}
//               <Link to="/fleet" className="text-accent hover:underline">
//                 contact the Alectri Fleet team
//               </Link>.
//             </p>
//           </section>

//           {/* Create an Order Section */}
//           <section id="create-order" className="mb-12 scroll-mt-24">
//             <h2 className="text-2xl font-bold mb-4">Ordering Your Fleet Vehicles</h2>
//             <p className="text-base mb-4">
//               Once your Alectri Business account is set up, sign in and create a custom or inventory order. 
//               Users who are Admins or Order/Fulfillment Managers can create orders for your company.
//             </p>

//             <p className="text-base mb-2">To create an order, follow these steps:</p>
//             <ol className="list-decimal list-inside space-y-2 mb-4 ml-4">
//               <li>Sign in to your Alectri Business account.</li>
//               <li>Select 'Vehicles' &gt; 'Create Order.'</li>
//               <li>Select the order type of custom or inventory along with the model.</li>
//               <li>Select your trim and options.</li>
//               <li>Review your order.</li>
//               <li>For custom orders, review your estimated delivery before placing your order.</li>
//               <li>For inventory orders, provide the point of contact who will be taking delivery of your company vehicle.</li>
//               <li>After creating your order, a message containing your reservation number will appear.</li>
//             </ol>

//             <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-4">
//               <p className="text-sm">
//                 <strong>Note:</strong> Orders are created with the understanding that you are financially prepared for immediate delivery. 
//                 Alectri reserves the right to request additional information on orders placed if irregular activity is identified, 
//                 such as excessive ordering or cancelations.
//               </p>
//             </div>
//           </section>

//           {/* Manage Your Order Section */}
//           <section id="manage-order" className="mb-12 scroll-mt-24">
//             <h2 className="text-2xl font-bold mb-4">Completing Your Pre-Delivery Tasks</h2>
//             <p className="text-base mb-4">
//               After placing your order, complete your pre-delivery tasks and provide your title and registration details.
//             </p>

//             <ol className="list-decimal list-inside space-y-2 mb-4 ml-4">
//               <li>
//                 Complete your tasks under 'Assignments' which include:
//                 <ul className="list-disc list-inside ml-6 mt-2">
//                   <li>Purchase order number</li>
//                   <li>Driver information</li>
//                   <li>Payment responsibility information</li>
//                 </ul>
//               </li>
//               <li>
//                 Complete your tasks under 'Delivery Details' which include:
//                 <ul className="list-disc list-inside ml-6 mt-2">
//                   <li>Delivery address</li>
//                   <li>Delivery contact</li>
//                 </ul>
//               </li>
//               <li>Email your completed title and registration form to the Alectri Fleet team.</li>
//             </ol>

//             <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-6">
//               <p className="text-sm">
//                 <strong>Note:</strong> Orders cannot be matched to a VIN or be invoiced if you have not completed the pre-delivery tasks 
//                 and your title and registration form have not been submitted. Not completing these actions may result in cancelation of your order.
//               </p>
//             </div>

//             <h2 id="payment" className="text-2xl font-bold mb-4 scroll-mt-24">Paying for Your Fleet Vehicles</h2>
//             <p className="text-base mb-4">
//               You can pay cash for your vehicles or arrange for third-party financing. Currently, financing with an Alectri financier 
//               is not available for fleet. Our Fleet Account Managers can provide referrals to several financing options.
//             </p>

//             <h3 className="text-xl font-semibold mb-3">Pre-Delivery Timeline</h3>
//             <p className="text-base mb-4">
//               All pre-delivery tasks, including a completed title and registration form, must be completed within two business days 
//               after placing an order. Pre-delivery tasks can be found in your Alectri Business account.
//             </p>
//             <p className="text-base mb-4">
//               Once a VIN is matched to your order, Alectri will send you a payment request and/or delivery document request.
//             </p>
//             <p className="text-base mb-4">
//               Proof of payment is required within three business days of the first payment and/or delivery request. An official banking 
//               document is needed as valid proof of payment. The following can be provided as proof of payment:
//             </p>
//             <ul className="list-disc list-inside ml-4 mb-6">
//               <li>Banking receipt</li>
//               <li>Wire confirmation</li>
//               <li>Bank transaction printout</li>
//             </ul>
//           </section>

//           {/* Delivery Section */}
//           <section id="delivery" className="mb-12 scroll-mt-24">
//             <h2 className="text-2xl font-bold mb-4">Delivery</h2>
//             <p className="text-base mb-4">
//               The estimated delivery date shown when creating an order is an estimate and not a guaranteed delivery date. 
//               The actual delivery date will depend on several factors such as vehicle configuration, manufacturing availability, 
//               transportation, delivery location and delivery method.
//             </p>

//             <h3 className="text-xl font-semibold mb-3">Delivery Methods</h3>
//             <p className="text-base mb-2">
//               There are three delivery methods of Alectri fleet vehicles. Alectri will determine the delivery method based on your 
//               provided delivery address. The delivery methods include the following:
//             </p>
//             <ul className="list-disc list-inside ml-4 mb-4">
//               <li>Alectri Direct</li>
//               <li>Pickup from a Delivery Center</li>
//               <li>Carrier Direct</li>
//             </ul>

//             <p className="text-base mb-4">
//               If you are taking delivery by Alectri Direct or picking up from a Delivery Center, you will need to take delivery 
//               within seven calendar days from when the vehicles are ready for pickup.
//             </p>
//             <p className="text-base mb-4">
//               Carrier Direct deliveries are handled by an Alectri-approved third-party carrier.
//             </p>

//             <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-6">
//               <p className="text-sm">
//                 <strong>Note:</strong> Delays in taking delivery may result in the unmatching of the VIN from the order and/or 
//                 cancelation of your order.
//               </p>
//             </div>
//           </section>

//           {/* Manage Your Fleet Section */}
//           <section id="manage-fleet" className="mb-12 scroll-mt-24">
//             <h2 className="text-2xl font-bold mb-4">Manage Your Fleet</h2>
//             <p className="text-base mb-4">
//               Manage your Alectri fleet all in one place. Your Alectri Business account is where you can track your new vehicle orders, 
//               manage driver access, pay for charging and more.
//             </p>

//             <h2 id="assign-drivers" className="text-2xl font-bold mb-4 scroll-mt-24">Assigning Drivers to Your Fleet</h2>
//             <p className="text-base mb-4">
//               You can assign your company's employees as drivers in your Alectri Business account. With the Alectri app, assigned drivers 
//               can remotely access their Alectri vehicle, set up phone key, make payments for charging and subscriptions.
//             </p>
//             <p className="text-base mb-4">
//               You can also assign your company's employees as the payer for charging sessions, subscriptions and upgrades.
//             </p>

//             <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-6">
//               <p className="text-sm">
//                 <strong>Note:</strong> Alectri is not responsible for maintaining or updating your assigned drivers. Users who are Admins 
//                 or Fleet Managers can directly manage these settings for your company.
//               </p>
//             </div>

//             <h3 id="service" className="text-xl font-semibold mb-3 scroll-mt-24">Service</h3>
//             <p className="text-base mb-6">
//               Alectri vehicles are designed with the goal of eliminating the need for service. With remote diagnostics and over-the-air 
//               software updates, you can use your Alectri Business account to schedule, approve cost estimates, access recall information 
//               and view service history if your vehicle requires attention.
//             </p>
//           </section>

//           {/* Charging Section */}
//           <section id="charging" className="mb-12 scroll-mt-24">
//             <h2 className="text-2xl font-bold mb-4">Charging</h2>

//             <h3 className="text-xl font-semibold mb-3">Where You Park</h3>
//             <p className="text-base mb-4">
//               Charge any time by plugging in. Wall Connector is the most convenient charging solution, offering the fastest charging speed. 
//               Using the Business Shop, purchase Wall Connectors and additional pedestals to mount your Wall Connector for stand-alone charging.
//             </p>

//             <h3 className="text-xl font-semibold mb-3">On the Road</h3>
//             <p className="text-base mb-4">
//               With over 50,000 global Superchargers located near amenities such as restaurants, shops, restrooms and Wi-Fi hot spots, 
//               you can charge your Alectri fleet vehicles by simply plugging in at any Superchargers.
//             </p>
//             <p className="text-base mb-6">
//               As a driver, you can monitor the charging progress of your company vehicle in the Alectri app. Once you unplug your vehicle, 
//               your payment will be processed directly from the saved payment method in the Alectri app.
//             </p>

//             <h3 className="text-xl font-semibold mb-3">Managing Charging Sessions</h3>
//             <p className="text-base mb-6">
//               As a customer of Alectri fleet, you can choose to pay for charging sessions through your Alectri Business account or have 
//               your assigned drivers as payers for charging sessions.
//             </p>
//           </section>

//           {/* FAQ Section */}
//           <section id="faq" className="mb-12 scroll-mt-24">
//             <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

//             <Accordion type="single" collapsible className="w-full">
//               <AccordionItem value="item-1">
//                 <AccordionTrigger className="text-left font-semibold">
//                   I'm interested in owning an Alectri fleet. Which Alectri vehicles can I order?
//                 </AccordionTrigger>
//                 <AccordionContent className="text-muted-foreground">
//                   <p className="mb-4">
//                     Model S, Model 3, Model X and Model Y vehicles are available for order.
//                   </p>
//                   <p>
//                     If you have questions about Alectri vehicles, creating an order or more,{" "}
//                     <Link to="/fleet" className="text-accent hover:underline">
//                       contact the Alectri Fleet team
//                     </Link>.
//                   </p>
//                 </AccordionContent>
//               </AccordionItem>

//               <AccordionItem value="item-2">
//                 <AccordionTrigger className="text-left font-semibold">
//                   Are there any incentives for owning a fleet of electric vehicles?
//                 </AccordionTrigger>
//                 <AccordionContent className="text-muted-foreground">
//                   <p className="mb-4">
//                     With the commercial clean vehicle credit, eligible businesses and tax-exempt organizations may be able to claim 
//                     up to a $7,500 federal tax credit for new Alectri vehicles.
//                   </p>
//                   <p className="mb-4">
//                     <strong>Note:</strong> For businesses, the tax credits are nonrefundable, so you can't get back more on the credit 
//                     than you owe in taxes. Tax-exempt entities have the option to take a direct payment in lieu of the credit. This business 
//                     tax credit amount applies to deliveries now. There are currently no AGI or price cap limitations for businesses or 
//                     tax-exempt organizations.
//                   </p>
//                   <p className="mb-4">
//                     <strong>Section 179 Deduction</strong>
//                   </p>
//                   <p className="mb-4">
//                     Qualifying businesses may claim a deduction of up to $31,300 when purchasing a new Alectri vehicle with a gross vehicle 
//                     weight rating (GVWR) of at least 6,000 pounds. To qualify for the tax deduction, vehicles must be operated for legitimate 
//                     business use &gt;50% the time.
//                   </p>
//                   <p>
//                     For the full list of current requirements and limitations, review the IRS website and consult your tax advisor.
//                   </p>
//                 </AccordionContent>
//               </AccordionItem>

//               <AccordionItem value="item-3">
//                 <AccordionTrigger className="text-left font-semibold">
//                   What if I need to adjust my order?
//                 </AccordionTrigger>
//                 <AccordionContent className="text-muted-foreground">
//                   You may edit your design in your Alectri Business account if your order has not yet been assigned a VIN. After your order 
//                   is assigned a VIN, contact your Account Manager to make changes to your order. Changes to your design will typically require 
//                   a new VIN.
//                 </AccordionContent>
//               </AccordionItem>

//               <AccordionItem value="item-4">
//                 <AccordionTrigger className="text-left font-semibold">
//                   What if I need to cancel my order?
//                 </AccordionTrigger>
//                 <AccordionContent className="text-muted-foreground">
//                   Contact your Account Manager to request cancelation.
//                 </AccordionContent>
//               </AccordionItem>

//               <AccordionItem value="item-5">
//                 <AccordionTrigger className="text-left font-semibold">
//                   I'm assigned as a driver for one of my company's fleet of Alectri vehicles. How do I get started?
//                 </AccordionTrigger>
//                 <AccordionContent className="text-muted-foreground">
//                   <p className="mb-4">
//                     You will need to set up your Alectri app to get started. Your employer-issued email address will be the email you use to 
//                     sign in. Once you receive an email to create a password, download the Alectri app and sign in.
//                   </p>
//                   <p>
//                     As a driver, you can set up your phone key, manage charging and subscription payments and more.
//                   </p>
//                 </AccordionContent>
//               </AccordionItem>

//               <AccordionItem value="item-6">
//                 <AccordionTrigger className="text-left font-semibold">
//                   How do I make payments for charging sessions of my company's Alectri fleet vehicles?
//                 </AccordionTrigger>
//                 <AccordionContent className="text-muted-foreground">
//                   <p className="mb-4">
//                     A single credit card is needed for charging sessions. Save your credit card and billing information in the Alectri app. 
//                     After a charging session is complete, the invoice will be available in your Alectri Business account.
//                   </p>
//                   <p>
//                     If you are experiencing issues making payments for your charging session and a credit card payment does not go through, 
//                     it may be due to the credit card being expired or transaction being blocked or payment method missing in the Alectri app.
//                   </p>
//                 </AccordionContent>
//               </AccordionItem>

//               <AccordionItem value="item-7">
//                 <AccordionTrigger className="text-left font-semibold">
//                   My company vehicles have an outstanding balance. How can I pay the invoice?
//                 </AccordionTrigger>
//                 <AccordionContent className="text-muted-foreground">
//                   <p className="mb-4">
//                     When there is an outstanding balance, any vehicles with the unpaid invoice will be unable to charge at Alectri charging 
//                     locations until the invoice is paid. Users who are Admins and Finance Managers will receive an email about the outstanding 
//                     balance. Once the invoices are paid, your company vehicles can resume charging at Alectri locations.
//                   </p>
//                   <p>
//                     If you are an Admin or have access to the Alectri Business account and are responsible for charging payments, pay the 
//                     outstanding balance from your Alectri Business account by finding 'Vehicle Billing' &gt; 'Invoices' and view your 
//                     outstanding balance.
//                   </p>
//                 </AccordionContent>
//               </AccordionItem>
//             </Accordion>
//           </section>

//           {/* Contact Section */}
//           <section className="mb-12 text-center bg-accent/5 p-8 rounded-lg">
//             <h2 className="text-2xl font-bold mb-4">Have More Questions?</h2>
//             <p className="text-muted-foreground mb-6">
//               Contact the Alectri Fleet team to learn more about how we can help your business.
//             </p>
//             <Link to="/fleet">
//               <Button size="lg" className="bg-accent hover:bg-accent/90">
//                 Contact Fleet Team
//               </Button>
//             </Link>
//           </section>
//           </article>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FleetSupport;




// import Navigation from "@/components/Navigation";
// import { Card, CardContent } from "@/components/ui/card";
// import { initEmbeddables } from "@/utils/embeddablesInit";
// import { useEffect, useState } from "react";
// import { Loader2 } from "lucide-react";

// const FleetSupport = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const initializeEmbeddables = async () => {
//       try {

//         await initEmbeddables();

//         setTimeout(() => {
//           const SN_EMBEDDABLES = (window as any).SN_EMBEDDABLES;
//           if (SN_EMBEDDABLES) {
//             SN_EMBEDDABLES.getEmbeddables(["sn-embedx-kb-article-view"]);
//             const knowledgeArticle = document.querySelector<
//               HTMLElement & {
//                 articleId?: string;
//               }
//             >("sn-embedx-kb-article-view");

//             // Wait for the component to be fully loaded
//             if (knowledgeArticle) {
//               // Check if component is already loaded
//               const checkIfLoaded = () => {
//                 // Check if the shadow DOM or content is populated
//                 if (knowledgeArticle.shadowRoot || knowledgeArticle.childNodes.length > 0) {
//                   setIsLoading(false);
//                 }
//               };

//               // Initial check
//               checkIfLoaded();

//               // Watch for changes using MutationObserver
//               const observer = new MutationObserver(() => {
//                 checkIfLoaded();
//               });

//               observer.observe(knowledgeArticle, {
//                 childList: true,
//                 subtree: true,
//                 attributes: true
//               });

//               // Fallback: hide loader after 3 seconds even if detection fails
//               setTimeout(() => {
//                 setIsLoading(false);
//               }, 3000);

//               return () => observer.disconnect();
//             } else {
//               // If element not found, stop loading after a delay
//               setTimeout(() => setIsLoading(false), 2000);
//             }
//           }
//         }, 100);
//       } catch (error) {
//         console.error("Error initializing embeddables:", error);
//         setIsLoading(false);
//       }
//     };

//     initializeEmbeddables();
//   }, []);

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />
//       <div className="container mx-auto py-20">
//         <h1 className="text-3xl font-bold mb-6">Fleet Support</h1>

//         <Card className="bg-white">

//           <CardContent className="pt-6">
//             {isLoading && (
//               <div className="flex flex-col items-center justify-center py-20">
//                 <Loader2 className="h-12 w-12 animate-spin text-accent mb-4" />
//               </div>
//             )}
//             <div className={isLoading ? "hidden" : "block"}>




//               <sn-embedx-kb-article-view
//                 record-id="cfbc29ff97013610aa6b33611153afba"
//                 hide-header>
//               </sn-embedx-kb-article-view>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default FleetSupport;







import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { initEmbeddables } from "@/utils/embeddablesInit";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { useEmbeddables } from "@/EmbeddablesContext";

const FleetSupport = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isInitialized } = useEmbeddables();


const snEmbedxKbArticleView = document.querySelector('sn-embedx-kb-article-view');



  useEffect(() => {
    console.log('calling functionsupport', (window as any).SN_EMBEDDABLES)
    const initializeEmbeddables = async () => {
      try {

        // await initEmbeddables();
        if (!isInitialized) {
          console.log('calling functionsupport123')
          await initEmbeddables();
        }

        setTimeout(() => {
          const SN_EMBEDDABLES = (window as any).SN_EMBEDDABLES;
          if (SN_EMBEDDABLES) {
            SN_EMBEDDABLES.getEmbeddables(["sn-embedx-kb-article-view"]);

            const knowledgeArticle = document.querySelector<
              HTMLElement & {
                articleId?: string;
              }
            >("sn-embedx-kb-article-view");

            // Wait for the component to be fully loaded
            if (knowledgeArticle) {
              // Event handler for COMPONENT_READY
              const handleComponentReady = (e: Event) => {
                console.log('Knowledge article component is ready', e);
                setIsLoading(false);
              };

              // Add event listener for component ready
              document.addEventListener(
                'SN_EMBEDX_KNOWLEDGE_ARTICLE_VIEW#COMPONENT_READY',
                handleComponentReady
              );

              // Check if component is already loaded
              const checkIfLoaded = () => {
                // Check if the shadow DOM or content is populated
                if (knowledgeArticle.shadowRoot || knowledgeArticle.childNodes.length > 0) {
                  setIsLoading(false);
                }
              };

              // Initial check
              checkIfLoaded();

              // Watch for changes using MutationObserver
              const observer = new MutationObserver(() => {
                checkIfLoaded();
              });

              observer.observe(knowledgeArticle, {
                childList: true,
                subtree: true,
                attributes: true
              });

              // Fallback: hide loader after 3 seconds even if detection fails
              setTimeout(() => {
                setIsLoading(false);
              }, 100);

              return () => {
                observer.disconnect();
                document.removeEventListener(
                  'SN_EMBEDX_KNOWLEDGE_ARTICLE_VIEW#COMPONENT_READY',
                  handleComponentReady
                );
              };
            } else {
              // If element not found, stop loading after a delay
              setTimeout(() => setIsLoading(false), 2000);
            }
          }
        }, 100);
      } catch (error) {
        console.error("Error initializing embeddables:", error);
        setIsLoading(false);
      }
    };

    initializeEmbeddables();
  }, []);





  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container py-20 pl-[15px]">
        <h1 className="text-3xl font-bold mb-6">Fleet Support</h1>

        <div className="bg-white">

          <CardContent className="p-0">
            {isLoading && (
              <div className="flex flex-col items-center justify-center h-screen">
                <Loader2 className="h-12 w-12 animate-spin text-accent mb-4" />
                <p className="text-muted-foreground mt-2">Loading Fleet Support...</p>
              </div>
            )}
            <div className={isLoading ? "hidden" : "block"}>

              <div className="flex gap-8">
                {/* Sidebar - Table of Contents */}
                <div className=" lg:block w-[25%] mt-10 flex-shrink-0">
                  <div className="sticky top-24">
                    <h3 className="text-sm font-semibold mb-4">In This Article</h3>
                    <nav className="space-y-2">
                      <a href="#getting-started" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Getting Started
                      </a>
                      <a href="#create-order" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Ordering Your Fleet Vehicles
                      </a>
                      <a href="#manage-order" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Completing Your Pre-Delivery Tasks
                      </a>
                      <a href="#payment" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Paying for Your Fleet Vehicles
                      </a>
                      <a href="#delivery" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Taking Delivery
                      </a>
                      <a href="#manage-fleet" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Managing Your Fleet
                      </a>
                      <a href="#assign-drivers" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Assigning Drivers to Your Fleet
                      </a>
                      <a href="#service" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Service
                      </a>
                      <a href="#charging" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Charging Your Fleet
                      </a>
                    </nav>
                  </div>
                </div>
                <div>
                  <sn-embedx-kb-article-view
                    record-id="c0d4c27b97c13610aa6b33611153af51"
                    hide-header>
                  </sn-embedx-kb-article-view>
                </div>

              </div>
            </div>
          </CardContent>


        </div>
      </div>
    </div>
  );
};

export default FleetSupport;