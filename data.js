// ═══════════════════════════════════════════════════════════
//  DATA.JS  —  Single source of truth for all page content
//
//  EXPERIENCE: edit roles, employers, dates, skills, logos
//  PORTFOLIO:  edit articles, rank (highest = top of page),
//              isThumb (one true = summary page thumbnail)
// ═══════════════════════════════════════════════════════════


// ─────────────────────────────────────────────────────────
//  EXPERIENCE DATA
//
//  endDate: null  →  shows as "Present" (current role)
//  logoUrl: null  →  employer hidden from Clients block
//                    set a URL to make it appear there
// ─────────────────────────────────────────────────────────
const experienceData = [
  {
    role:        'Business Systems Analyst',
    employer:    'Kinleigh Folkard & Hayward',
    startDate:   '2022-09',
    endDate:     null,
    description: 'Implemented and project managed three new systems across the Lettings, Build-to-Rent, and Block Management divisions. Product managed build-to-rent products. Lead Power BI developer and Excel specialist.',
    skills:      ['Power BI', 'M Query', 'Excel', 'Project Management', 'Systems Analysis'],
    logoUrl:     null
  },
  {
    role:        'Senior Implementation Analyst',
    employer:    'Parliamentary Digital Service',
    startDate:   '2020-02',
    endDate:     '2022-09',
    description: 'Led the technical support team delivering configuration, change request, and lifecycle upgrade processes across multiple project workstreams and BAU. Used JIRA, Cherwell, AutoDesk, Revit, and VS Code for HTML, CSS, and XML changes.',
    skills:      ['JIRA', 'Data Visualisation', 'HTML / CSS / XML', 'Change Management'],
    logoUrl:     'https://philbeeson.files.wordpress.com/2021/07/digital-service-primary-rgb-1500x526-1.png?w=1024'
  },
  {
    role:        'Business Implementation Analyst',
    employer:    'Parliamentary Digital Service',
    startDate:   '2019-11',
    endDate:     '2020-02',
    description: 'Delivered software implementation services streamlining business processes for buildings, people, and assets in the real estate and facilities management sector.',
    skills:      ['Microsoft Office', 'System Configuration'],
    logoUrl:     'https://philbeeson.files.wordpress.com/2021/07/digital-service-primary-rgb-1500x526-1.png?w=1024'
  },
  {
    role:        'Project Manager',
    employer:    'ISB Global',
    startDate:   '2019-03',
    endDate:     '2019-10',
    description: 'SAP implementation and enterprise system project management, delivering rollouts for clients across the UK.',
    skills:      ['SAP', 'Project Management'],
    logoUrl:     'https://philbeeson.files.wordpress.com/2021/07/isb-global-logo.png?w=437'
  },
  {
    role:        'Engagement Manager',
    employer:    'Parliamentary Digital Service',
    startDate:   '2018-03',
    endDate:     '2019-03',
    description: 'Managed stakeholder engagement, training delivery, and change management programmes across the organisation.',
    skills:      ['Training', 'Change Management', 'Stakeholder Engagement'],
    logoUrl:     'https://philbeeson.files.wordpress.com/2021/07/digital-service-primary-rgb-1500x526-1.png?w=1024'
  },
  {
    role:        'Implementation & Project Manager',
    employer:    'Sainsburys',
    startDate:   '2016-03',
    endDate:     '2018-03',
    description: 'Led Kronos workforce management implementations across field-based store locations, covering payroll administration, training delivery, and new store setup.',
    skills:      ['Kronos WFM', 'Payroll', 'Training', 'New Store Setup'],
    logoUrl:     'https://philbeeson.files.wordpress.com/2021/07/sainsburys-logo.png?w=1024'
  },
  {
    role:        'Online Manager',
    employer:    'Sainsburys',
    startDate:   '2015-08',
    endDate:     '2016-03',
    description: 'Managed online operations for this independent British software solutions delivery company, based at Lewes Road, Brighton.',
    skills:      ['Operations', 'Software Delivery'],
    logoUrl:     'https://philbeeson.files.wordpress.com/2021/07/sainsburys-logo.png?w=1024'
  }
];


// ─────────────────────────────────────────────────────────
//  PORTFOLIO DATA
//
//  rank:         highest number = top of page
//                increment when adding a new article
//  isThumb:      set ONE item to true — this is the image
//                shown in the summary block on index.html
//  thumbnailUrl: null = placeholder shown instead
//  publishedDate YYYY-MM format
// ─────────────────────────────────────────────────────────
const portfolioData = [
  {
    rank:         1,
    title:        'SAP Enterprise Rollout',
    category:     'Project Management',
    thumbnailUrl: null,
    publishedDate:'2019-03',
    isThumb:      false,
    body:         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    rank:         2,
    title:        'Parliamentary Asset Management Reporting',
    category:     'Data Analysis',
    thumbnailUrl: null,
    publishedDate:'2020-02',
    isThumb:      false,
    body:         'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.'
  },
  {
    rank:         3,
    title:        'Build-to-Rent Platform Rollout',
    category:     'Systems Implementation',
    thumbnailUrl: null,
    publishedDate:'2021-06',
    isThumb:      false,
    body:         'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga et harum quidem rerum.'
  },
  {
    rank:         4,
    title:        'Lettings Performance Dashboard',
    category:     'Power BI',
    thumbnailUrl: 'https://raw.githubusercontent.com/philbeeson84/webportfolio/0082ed69ce290850f46cce6900edd0536b1498cc/pbi_lettingsanalysis1.png',
    publishedDate:'2023-11',
    isThumb:      true,
    body:         'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'
  }
];


// ═══════════════════════════════════════════════════════════
//  SHARED HELPERS  (used by all pages — do not edit)
// ═══════════════════════════════════════════════════════════

const _MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

// "2022-09" → "Sep 2022",  null → "Present"
function fmtDate(yyyymm) {
  if (!yyyymm) return 'Present';
  const [y, m] = yyyymm.split('-');
  return _MONTHS[parseInt(m, 10) - 1] + ' ' + y;
}

// "2022-09", "2024-03" → "1 yr 6 mos"
function fmtDuration(startDate, endDate) {
  const s     = new Date(startDate + '-01');
  const e     = endDate ? new Date(endDate + '-01') : new Date();
  const total = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
  const yrs   = Math.floor(total / 12);
  const mos   = total % 12;
  if (yrs === 0) return mos + ' mo' + (mos !== 1 ? 's' : '');
  if (mos === 0) return yrs + ' yr' + (yrs !== 1 ? 's' : '');
  return yrs + ' yr' + (yrs !== 1 ? 's' : '') + ' ' + mos + ' mo';
}

// Reusable placeholder image SVG
const _PLACEHOLDER_SVG = `
  <div class="placeholder-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586
           a2 2 0 012.828 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0
           00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
    </svg>
    <span>No image yet</span>
  </div>`;
