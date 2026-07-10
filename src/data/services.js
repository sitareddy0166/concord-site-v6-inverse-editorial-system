export const allServices = [
  {
    name: '179D Tax Deduction',
    href: '/179d-tax-deduction',
    description:
      'Claim up to $5.94 per square foot for energy-efficient commercial, government, and multifamily buildings.',
  },
  {
    name: 'Section 6417 Direct Pay',
    href: '/direct-pay',
    description:
      'Convert eligible clean energy tax credits into refundable cash payments from the U.S. Treasury.',
  },
  {
    name: 'Prevailing Wage & Apprenticeship',
    href: '/prevailing-wage-apprenticeship',
    description:
      'Meet the labor standards required to claim enhanced (5x) clean energy tax credit rates under the IRA.',
  },
  {
    name: 'Transferable Tax Credits: 6418',
    href: '/transferable-tax-credits',
    description:
      'Sell qualifying clean energy tax credits to corporate buyers for cash, or purchase credits at a discount.',
  },
  {
    name: 'R&D Tax Credits',
    href: '/rd-tax-credits',
    description:
      'Claim dollar-for-dollar reductions in federal tax liability for innovation across every industry.',
  },
];

export function getRelatedServices(currentHref) {
  return allServices.filter((s) => s.href !== currentHref);
}
