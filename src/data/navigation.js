export const navigation = {
  main: [
    { label: 'The Concord Standard', href: '/the-concord-standard' },
  ],
  dropdowns: [
    {
      label: 'Clean Energy Incentives',
      items: [
        { label: '179D Tax Deduction', href: '/179d-tax-deduction', icon: 'Buildings' },
        { label: 'PWA Compliance', href: '/prevailing-wage-apprenticeship', icon: 'HardHat' },
        { label: 'Direct Pay (6417)', href: '/direct-pay', icon: 'HandCoins' },
        { label: 'Transferable Credits (6418)', href: '/transferable-tax-credits', icon: 'ArrowsLeftRight' },
        { label: 'R&D Tax Credits', href: '/rd-tax-credits', icon: 'Flask' },
      ],
    },
    {
      label: 'About Us',
      items: [
        { label: 'Why Us', href: '/why-us', icon: 'Star' },
        { label: 'Who We Are', href: '/who-we-are', icon: 'UsersThree' },
        { label: 'The Concord Standard', href: '/the-concord-standard', icon: 'SealCheck' },
        { label: 'Client Charter', href: '/client-charter', icon: 'Handshake' },
        { label: 'Careers', href: '/careers', icon: 'Briefcase' },
      ],
    },
    {
      label: 'Insights',
      items: [
        { label: 'News & Articles', href: '/resources?content=News', icon: 'Newspaper' },
        { label: 'Case Studies', href: '/resources?content=Case+Studies', icon: 'FolderOpen' },
        { label: 'Whitepapers', href: '/whitepaper', icon: 'FileText' },
        { label: 'Deadlines', href: '/resources?content=Deadlines', icon: 'Calendar' },
      ],
    },
  ],
  cta: [
    { label: 'Start the Conversation', href: '/contact', variant: 'outline' },
    { label: 'Contact Us', href: '/contact-us', variant: 'primary' },
  ],
};
