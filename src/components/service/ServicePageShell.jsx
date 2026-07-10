/**
 * ServicePageShell
 * -----------------------------------------------------------------
 * Single reusable wrapper for the five service pages. Provides the
 * dark technical editorial grammar (typography rhythm, flattened
 * corners, muted shadow reset, downgraded stock imagery, ivory
 * reading surfaces on ink foundation) shared across:
 *   - /179d-tax-deduction
 *   - /prevailing-wage-apprenticeship
 *   - /direct-pay
 *   - /transferable-tax-credits
 *   - /rd-tax-credits
 *
 * Each service page keeps its own SEOHead, SchemaScripts, ServiceHero,
 * StickyNav, section content, and CTABanner, but composes them
 * through this shell so all five share consistent chrome.
 *
 * Usage:
 *   <ServicePageShell>
 *     <SEOHead ... />
 *     <SchemaScript ... />
 *     <ServiceHero ... />
 *     <StickyNav ... />
 *     ...sections...
 *     <CTABanner ... />
 *   </ServicePageShell>
 */
export default function ServicePageShell({ children, className = '' }) {
  return <div className={`service-shell v6 ${className}`}>{children}</div>;
}
