export const categories = [
  {
    slug: 'housing',
    name: 'Housing & living',
    description:
      'Residence life, housing assignments, and support for campus living.',
  },
  {
    slug: 'financial-support',
    name: 'Financial support',
    description: 'Financial aid, tuition, payments, and student support.',
  },
  {
    slug: 'scholarships',
    name: 'Scholarships',
    description: 'Connect with Financial Aid for scholarship guidance.',
  },
  {
    slug: 'internships',
    name: 'Internships',
    description:
      'Career coaching, internships, résumé reviews, and career fairs.',
  },
  {
    slug: 'wellness',
    name: 'Health & wellness',
    description:
      'Counseling, student health, accessibility, and campus safety.',
  },
  {
    slug: 'academics',
    name: 'Academic support',
    description:
      'Registration, transcripts, academic policies, and accommodations.',
  },
];

export const offices = [
  {
    slug: 'financial-aid',
    name: 'Office of Financial Aid',
    description: 'FAFSA, scholarships, grants, loans, and work-study.',
    email: 'finaid@howard.edu',
    phone: '202-806-3345',
    categories: ['financial-support', 'scholarships'],
  },
  {
    slug: 'bursar',
    name: 'Office of the Bursar',
    description: 'Tuition bills, payments, refunds, and payment plans.',
    email: 'bursarhelp@howard.edu',
    phone: '855-490-2875',
    categories: ['financial-support'],
  },
  {
    slug: 'residence-life',
    name: 'Residence Life & University Housing',
    description:
      'Housing assignments, residence halls, move-in, and maintenance.',
    email: 'hureslife@howard.edu',
    phone: '202-806-9045',
    categories: ['housing'],
  },
  {
    slug: 'student-support',
    name: 'Office of Student Services',
    description:
      'Student emergencies, case management, basic needs, and crisis support.',
    email: 'studentsupport@howard.edu',
    phone: '202-238-2423',
    categories: ['housing', 'financial-support', 'wellness'],
  },
  {
    slug: 'counseling',
    name: 'University Counseling Service',
    description: 'Mental health check-ins, counseling, and therapy.',
    email: 'counselingservice@howard.edu',
    phone: '202-806-6870',
    categories: ['wellness'],
  },
  {
    slug: 'student-health',
    name: 'Student Health Center',
    description: 'Medical appointments, immunizations, and primary care.',
    email: 'studenthealthforms@howard.edu',
    phone: '202-806-7540',
    categories: ['wellness'],
  },
  {
    slug: 'registrar',
    name: 'Office of the Registrar',
    description:
      'Registration, transcripts, enrollment verification, and graduation.',
    email: 'registrar@howard.edu',
    phone: '202-806-2705',
    categories: ['academics'],
  },
  {
    slug: 'provost',
    name: 'Office of the Provost',
    description: 'Academic affairs and university academic policies.',
    email: 'provost@howard.edu',
    phone: '202-806-2550',
    categories: ['academics'],
  },
  {
    slug: 'student-affairs',
    name: 'Office of Student Affairs',
    description: 'Student life, leadership, and campus involvement.',
    email: 'studentaffairs@howard.edu',
    phone: '202-806-2100',
    categories: ['academics', 'wellness'],
  },
  {
    slug: 'public-safety',
    name: 'Department of Public Safety',
    description: 'Campus safety, escorts, and emergencies.',
    email: 'dps@howard.edu',
    phone: '202-806-1100',
    categories: ['wellness'],
  },
  {
    slug: 'bookstore',
    name: 'Howard University Bookstore',
    description: 'Textbooks, books, apparel, and graduation items.',
    email: '',
    phone: '202-238-2640',
    categories: ['academics'],
  },
  {
    slug: 'careers',
    name: 'Center for Career and Professional Success',
    description:
      'Career coaching, internships, résumé reviews, and career fairs.',
    email: 'careerservices@howard.edu',
    phone: '202-806-7513',
    categories: ['internships'],
  },
  {
    slug: 'accessibility',
    name: 'Office of Student Accessibility',
    description: 'Academic accommodations.',
    email: 'accessibility@howard.edu',
    phone: '202-806-2100',
    categories: ['academics', 'wellness'],
  },
];
