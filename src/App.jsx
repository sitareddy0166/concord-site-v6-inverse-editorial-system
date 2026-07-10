import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const Section179D = lazy(() => import('./pages/services/Section179D'));
const DirectPay = lazy(() => import('./pages/services/DirectPay'));
const PWA = lazy(() => import('./pages/services/PWA'));
const TransferableCredits = lazy(() => import('./pages/services/TransferableCredits'));
const RDTaxCredits = lazy(() => import('./pages/services/RDTaxCredits'));
const OBBBADeadline = lazy(() => import('./pages/OBBBADeadline'));
const Resources = lazy(() => import('./pages/Resources'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Whitepaper = lazy(() => import('./pages/Whitepaper'));
const WhitepaperThankYou = lazy(() => import('./pages/WhitepaperThankYou'));
const TheConcordStandard = lazy(() => import('./pages/about/TheConcordStandard'));
const WhoWeAre = lazy(() => import('./pages/about/WhoWeAre'));
const WhyUs = lazy(() => import('./pages/about/WhyUs'));
const ClientCharter = lazy(() => import('./pages/about/ClientCharter'));
const Careers = lazy(() => import('./pages/Careers'));
const Contact = lazy(() => import('./pages/Contact'));

const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-concord-green border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/179d-tax-deduction" element={<Section179D />} />
          <Route path="/direct-pay" element={<DirectPay />} />
          <Route path="/prevailing-wage-apprenticeship" element={<PWA />} />
          <Route path="/transferable-tax-credits" element={<TransferableCredits />} />
          <Route path="/rd-tax-credits" element={<RDTaxCredits />} />
          <Route path="/obbba-deadline" element={<OBBBADeadline />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:id" element={<BlogPost />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/whitepaper/thank-you" element={<WhitepaperThankYou />} />
          <Route path="/the-concord-standard" element={<TheConcordStandard />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/client-charter" element={<ClientCharter />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/start-the-conversation" element={<Contact />} />
          <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
