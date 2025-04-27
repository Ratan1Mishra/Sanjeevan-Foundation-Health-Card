export let menus = [
    { id: 2, label: 'Administrator', url: '/admin', icon: '../images/admin.png', submenus: [
        { id: 2.2, label: 'Platform configurations', url: '/plat-conf', icon: '../images/config.png', submenus: [] },
        { id: 2.5, label: 'Registration', url: '/registration', icon: '../images/register.png', submenus: [] },
        { id: 2.7, label: 'Back', url: '#', icon: '../images/back.png', submenus: [] },
    ]},
    {
        id: 3, label: 'Facility management', url: '/admin', icon: '../images/building.png', submenus: [
        { id: 3.0, label: 'Building & premises', url: '/bldgs', icon: '../images/floor.png', submenus: [] },
        { id: 3.1, label: 'Floors / levels', url: '/floors', icon: '../images/floor.png', submenus: [] },
        { id: 3.2, label: 'Wards / rooms', url: '/wards', icon: '../images/ward.png', submenus: [] },
        { id: 3.3, label: 'Cabins', url: '/cabins', icon: '../images/cabin.png', submenus: [] },
        { id: 3.8, label: 'Back', url: '/', icon: '../images/back.png', submenus: [] },
    ] },
    { id: 4, label: 'Human resource management', url: '/admin', icon: '../images/people.png', submenus: [
        { id: 4.1, label: 'Employees', url: '/emp-reg', icon: '../images/admin.png', submenus: [] },
        { id: 4.2, label: 'Departments', url: '/dept', icon: '../images/dept.png', submenus: [] },
        { id: 4.3, label: 'Roles & responsibilities', url: '/roles', icon: '../images/roles.png', submenus: [] },
        { id: 4.4, label: 'Job descriptions', url: '/job-desc', icon: '../images/jobs.png', submenus: [] },
        { id: 4.41, label: 'Common masters', url: '/common-masters', icon: '../images/jobs.png', submenus: [] },
        { id: 4.5, label: 'Profiles', url: '/emp-profiles', icon: '../images/profile.png', submenus: [] },
        { id: 4.7, label: 'Shift master', url: '/shift-master', icon: '../images/shifts.png', submenus: [] },
        { id: 4.8, label: 'Employee roster', url: '/roster', icon: '../images/roster.png', submenus: [] },
        { id: 4.9, label: 'Attendance management', url: '/att-mgmt', icon: '../images/att.png', submenus: [] },
        { id: 4.10, label: 'Holidays', url: '/holidays', icon: '../images/holiday.png', submenus: [] },
        { id: 4.11, label: 'Employee separation', url: '/emp-sep', icon: '../images/separate.png', submenus: [] },
        { id: 4.16, label: 'Back', url: '#', icon: '../images/back.png', submenus: [] },
    ] },
    { id: 7, label: 'Patients management', url: '/admin', icon: '../images/patient.png', submenus: [
        { id: 7.1, label: 'Patients registration', url: '/patient-reg', submenus: [] },
    ] },
]


export let sa_menus = [
    {
        id: 1, label: 'Super admin', url: '/sub-menus', icon: '../images/super-admin.png', submenus: [
            { id: 1.1, label: 'Subscriptions', url: '/subscriptions', icon: '../images/subscription.png', submenus: [] },
            { id: 1.2, label: 'Data backups', url: '/data-backup', icon: '../images/data-backup.png', submenus: [] },
            { id: 1.3, label: 'Data recovery', url: '/data-recovery', icon: '../images/data-recovery.png', submenus: [] },
            { id: 1.4, label: 'Proposals', url: '/proposals', icon: '../images/proposal.png', submenus: [] },
            { id: 1.5, label: 'Designs', url: '/designs', icon: '../images/design.png', submenus: [] },
            { id: 1.6, label: 'Sign-offs & approvals', url: '/sign-off', icon: '../images/approval.png', submenus: [] },
            { id: 1.7, label: 'Back', url: '#', icon: '../images/back.png', submenus: [] },
        ]
    },
    {
        id: 2, label: 'Administrator', url: '/admin', icon: '../images/admin.png', submenus: [
            { id: 2.1, label: 'Subscriptions', url: '/client-subscriptions', icon: '../images/subscription.png', submenus: [] },
            { id: 2.2, label: 'Platform configurations', url: '/plat-conf', icon: '../images/config.png', submenus: [] },
            { id: 2.3, label: 'Access controls', url: '/access-controls', icon: '../images/access.png', submenus: [] },
            { id: 2.4, label: 'Ticket management', url: '/tickets-mgmt', icon: '../images/ticket.png', submenus: [] },
            { id: 2.5, label: 'Registration', url: '/registration', icon: '../images/register.png', submenus: [] },
            { id: 2.6, label: 'Policy management', url: '/policy-mgmt', icon: '../images/policy.png', submenus: [] },
            { id: 2.7, label: 'Back', url: '#', icon: '../images/back.png', submenus: [] },
        ]
    },
    {
        id: 3, label: 'Facility management', url: '/admin', icon: '../images/building.png', submenus: [
            { id: 3.0, label: 'Building & premises', url: '/bldgs', icon: '../images/floor.png', submenus: [] },
            { id: 3.1, label: 'Floors / levels', url: '/floors', icon: '../images/floor.png', submenus: [] },
            { id: 3.2, label: 'Wards / rooms', url: '/wards', icon: '../images/ward.png', submenus: [] },
            { id: 3.3, label: 'Cabins', url: '/wards', icon: '../images/cabin.png', submenus: [] },
            { id: 3.4, label: 'Parkings', url: '/wards', icon: '../images/parking.png', submenus: [] },
            { id: 3.5, label: 'Machines & tools', url: '/wards', icon: '../images/tools.png', submenus: [] },
            { id: 3.6, label: 'Infrastructures', url: '/wards', icon: '../images/infra.png', submenus: [] },
            { id: 3.7, label: 'Digital assets', url: '/wards', icon: '../images/digital.png', submenus: [] },
            { id: 3.8, label: 'Back', url: '/', icon: '../images/back.png', submenus: [] },
        ]
    },
    {
        id: 4, label: 'Human resource management', url: '/admin', icon: '../images/people.png', submenus: [
            { id: 4.1, label: 'Employees', url: '/emp-reg', icon: '../images/admin.png', submenus: [] },
            { id: 4.2, label: 'Departments', url: '/dept', icon: '../images/dept.png', submenus: [] },
            { id: 4.3, label: 'Roles & responsibilities', url: '/roles', icon: '../images/roles.png', submenus: [] },
            { id: 4.4, label: 'Job descriptions', url: '/job-desc', icon: '../images/jobs.png', submenus: [] },
            { id: 4.41, label: 'Common masters', url: '/common-masters', icon: '../images/jobs.png', submenus: [] },
            { id: 4.5, label: 'Profiles', url: '/emp-profiles', icon: '../images/profile.png', submenus: [] },
            { id: 4.6, label: 'Leaves management', url: '/leaves-mgmt', icon: '../images/leaves.png', submenus: [] },
            { id: 4.7, label: 'Shift master', url: '/shift-master', icon: '../images/shifts.png', submenus: [] },
            { id: 4.8, label: 'Employee roster', url: '/roster', icon: '../images/roster.png', submenus: [] },
            { id: 4.9, label: 'Attendance management', url: '/att-mgmt', icon: '../images/att.png', submenus: [] },
            { id: 4.10, label: 'Holidays', url: '/holidays', icon: '../images/holiday.png', submenus: [] },
            { id: 4.11, label: 'Employee separation', url: '/emp-sep', icon: '../images/separate.png', submenus: [] },
            { id: 4.12, label: 'Travel management', url: '/travel-mgmt', icon: '../images/travel.png', submenus: [] },
            { id: 4.13, label: 'Timesheet', url: '/timesheet', icon: '../images/timesheet.png', submenus: [] },
            { id: 4.14, label: 'Performance & appraisal', url: '/appraisals', icon: '../images/perform.png', submenus: [] },
            { id: 4.15, label: 'Grievance redressal', url: '/grievances', icon: '../images/anger.png', submenus: [] },
            { id: 4.16, label: 'Back', url: '#', icon: '../images/back.png', submenus: [] },
        ]
    },
    {
        id: 5, label: 'Payroll management', url: '/admin', icon: '../images/payroll.png', submenus: [
            { id: 5.1, label: 'Salary components', url: '#', submenus: [] },
            { id: 5.2, label: 'Tax regimes', url: '#', submenus: [] },
            { id: 5.3, label: 'Employee compensations', url: '#', submenus: [] },
            { id: 5.4, label: 'Loans & advances', url: '#', submenus: [] },
            { id: 5.5, label: 'Banks registration', url: '/banks', submenus: [] },
            { id: 5.6, label: 'Salary sheet', url: '#', submenus: [] },
            { id: 5.7, label: 'Employee payslip', url: '#', submenus: [] },
            { id: 5.8, label: 'Back', url: '#', icon: '../images/back.png', submenus: [] },
        ]
    },
    {
        id: 6, label: 'Doctors, panels & hospitals', url: '/admin', icon: '../images/doctor.png', submenus: [
            { id: 6.1, label: 'Degrees & certifications', url: 'doctor-degrees', submenus: [] },
            { id: 6.1, label: 'Specialities', url: 'specialities', submenus: [] },
            { id: 6.2, label: 'Doctor types', url: '#', submenus: [] },
            { id: 6.3, label: 'Panels', url: '/doctor-panel', submenus: [] },
            { id: 6.14, label: 'Common masters', url: '/doctor-common-masters', submenus: [] },
            { id: 6.4, label: 'Doctors', url: '/doctors-reg', submenus: [] },
            { id: 6.5, label: 'Hospitals', url: '/doctor-hospitals', submenus: [] },
            { id: 6.6, label: 'Laboratories', url: '/doctor-labs', submenus: [] },
            { id: 6.7, label: 'Nurses', url: '/nurses-reg', submenus: [] },
            { id: 6.8, label: 'Ambulances', url: '/ambulances-mgmt', submenus: [] },
            { id: 6.9, label: 'Doctors agreements', url: '/doctor-agreements', submenus: [] },
            { id: 6.10, label: 'Patients allocations', url: '#', submenus: [] },
            { id: 6.11, label: 'Doctors schedule management', url: '#', submenus: [] },
            { id: 6.12, label: 'Doctors settlements', url: '#', submenus: [] },
            { id: 6.13, label: 'Back', url: '#', icon: '../images/back.png', submenus: [] },
        ]
    },
    {
        id: 7, label: 'Patients management', url: '/admin', icon: '../images/patient.png', submenus: [
            { id: 7.1, label: 'Patients registration', url: '/patient-reg', submenus: [] },
            { id: 7.2, label: 'Appointments', url: '/appointments', submenus: [] },
            { id: 7.3, label: 'Patient case details', url: '#', submenus: [] },
            { id: 7.4, label: 'Patient documents', url: '#', submenus: [] },
            { id: 7.5, label: 'Insurance management', url: '#', submenus: [] },
            { id: 7.6, label: 'Prescriptions & advices', url: '#', submenus: [] },
            { id: 7.7, label: 'Patient diet plan', url: '#', submenus: [] },
            { id: 7.8, label: 'Medicine requests', url: '#', submenus: [] },
            { id: 7.9, label: 'Treatments & estimates', url: '#', submenus: [] },
            { id: 7.10, label: 'IPD patient admission', url: '#', submenus: [] },
            { id: 7.11, label: 'Discharge management', url: '#', submenus: [] },
            { id: 7.12, label: 'EMR - Nursing', url: '#', submenus: [] },
            { id: 7.13, label: 'EMR - Doctor', url: '#', submenus: [] },
            { id: 7.14, label: 'Back', url: '#', icon: '../images/back.png', submenus: [] },
        ]
    },
    {
        id: 8, label: 'Vendor management', url: '/admin', icon: '../images/vendors.png', submenus: [
            { id: 8.1, label: 'Vendor types', url: '#', submenus: [] },
            { id: 8.2, label: 'Vendor subtypes', url: '#', submenus: [] },
            { id: 8.3, label: 'Vendor categories', url: '#', submenus: [] },
            { id: 8.4, label: 'Vendor registration', url: '/vendor-reg', submenus: [] },
            { id: 8.5, label: 'Notifications', url: '#', submenus: [] },
            { id: 8.6, label: 'Schedule management', url: '#', submenus: [] },
            { id: 8.7, label: 'Back', url: '#', icon: '../images/back.png', submenus: [] },
        ]
    },
    {
        id: 9, label: 'Inventory management', url: '/admin', icon: '../images/inv.png', submenus: [
            { id: 9.1, label: 'Item ratesheet', url: '/item-ratesheet', submenus: [] },
            { id: 9.2, label: 'Supplier registration', url: '/supp-reg', submenus: [] },
            { id: 9.3, label: 'Material categories', url: '#', submenus: [] },
            { id: 9.4, label: 'Item master', url: '/item-master', submenus: [] },
            { id: 9.5, label: 'Purchase orders', url: '#', submenus: [] },
            { id: 9.6, label: 'Work orders', url: '#', submenus: [] },
            { id: 9.7, label: 'Stores management', url: '#', submenus: [] },
            { id: 9.8, label: 'Item inspections', url: '#', submenus: [] },
            { id: 9.9, label: 'Material ledger', url: '#', submenus: [] },
            { id: 9.10, label: 'Material planning', url: '#', submenus: [] },
            { id: 9.11, label: 'Material allocations', url: '#', submenus: [] },
            { id: 9.12, label: 'Audits & verifications', url: '#', submenus: [] },
            { id: 9.13, label: 'Notifications', url: '#', submenus: [] },
            { id: 9.14, label: 'Schedule management', url: '#', submenus: [] },
            { id: 9.15, label: 'Back', url: '#', icon: '../images/back.png', submenus: [] },
        ]
    },
    {
        id: 10, label: 'Accounting & billing', url: '/admin', icon: '../images/bill.png', submenus: [
            { id: 10.1, label: 'Patient service charges', url: '#', submenus: [] },
            { id: 10.2, label: 'Payment methods & channels', url: '#', submenus: [] },
            { id: 10.3, label: 'Banks registration', url: '#', submenus: [] },
            { id: 10.4, label: 'Items ratesheet', url: '#', submenus: [] },
            { id: 10.5, label: 'Medicine ratesheet', url: '#', submenus: [] },
            { id: 10.6, label: 'Registration charges', url: '#', submenus: [] },
            { id: 10.7, label: 'Patient advances', url: '#', submenus: [] },
            { id: 10.8, label: 'Patient settlement', url: '#', submenus: [] },
            { id: 10.9, label: 'OPD invoice', url: '#', submenus: [] },
            { id: 10.10, label: 'IPD invoice', url: '#', submenus: [] },
            { id: 10.11, label: 'Other invoices', url: '#', submenus: [] },
            { id: 10.12, label: 'Vendor bills', url: '#', submenus: [] },
            { id: 10.13, label: 'Vendor settlements', url: '#', submenus: [] },
            { id: 10.14, label: 'Bill payments', url: '#', submenus: [] },
            { id: 10.15, label: 'Integration', url: '#', submenus: [] },
            { id: 10.16, label: 'Back', url: '#', icon: '../images/back.png', submenus: [] },
        ]
    },
    {
        id: 11, label: 'Reports & analytics', url: '/admin', icon: '../images/report.png', submenus: [
            { id: 11.1, label: 'Attendance reports', url: '#', submenus: [] },
            { id: 11.2, label: 'Payroll reports', url: '#', submenus: [] },
            { id: 11.3, label: 'Patients management reports', url: '#', submenus: [] },
            { id: 11.4, label: 'Audit reports', url: '#', submenus: [] },
            { id: 11.5, label: 'Accounting reports', url: '#', submenus: [] },
            { id: 11.6, label: 'Expenditure forecast ', url: '#', submenus: [] },
            { id: 11.7, label: 'Dashboards ', url: '#', submenus: [] },
            { id: 11.8, label: 'Back', url: '#', icon: '../images/back.png', submenus: [] },
        ]
    },
    {
        id: 12, label: 'Sales management', url: '/admin', icon: '../images/sales.png', submenus: [
            { id: 12.1, label: 'Pharmacy sale', url: '#', submenus: [] },
            { id: 12.2, label: 'Consultancy charges', url: '#', submenus: [] },
            { id: 12.3, label: 'Consultancy invoices', url: '#', submenus: [] },
            { id: 12.4, label: 'Back', url: '#', icon: '../images/back.png', submenus: [] },
        ]
    },
    {
        id: 13, label: 'Supply chain management', url: '/admin', icon: '../images/scm.png', submenus: [
            { id: 13.1, label: 'Patient medicine requests', url: '#', submenus: [] },
            { id: 13.2, label: 'Courier requests', url: '#', submenus: [] },
            { id: 13.3, label: 'Courier tracking system', url: '#', submenus: [] },
            { id: 13.4, label: 'Courier delivery reports', url: '#', submenus: [] },
            { id: 13.5, label: 'Back', url: '#', icon: '../images/back.png', submenus: [] },
        ]
    },
    {
        id: 14, label: 'Trainings & LMS', url: '/admin', icon: '../images/lms.png', submenus: [
            { id: 14.1, label: 'Subjects', url: '#', submenus: [] },
            { id: 14.2, label: 'Syllabus', url: '#', submenus: [] },
            { id: 14.3, label: 'Trainers management', url: '#', submenus: [] },
            { id: 14.5, label: 'Training calendar', url: '#', submenus: [] },
            { id: 14.6, label: 'Exam & assesssment portal', url: '#', submenus: [] },
            { id: 14.7, label: 'Video lectures', url: '#', submenus: [] },
            { id: 14.8, label: 'Documents & literature', url: '#', submenus: [] },
            { id: 14.9, label: 'Back', url: '#', icon: '../images/back.png', submenus: [] },
        ]
    },
    {
        id: 15, label: 'Event management', url: '/admin', icon: '../images/events.png', submenus: [
            { id: 15.1, label: 'Register events', url: '#', submenus: [] },
            { id: 15.2, label: 'Event types', url: '#', submenus: [] },
            { id: 15.3, label: 'Event logistics', url: '#', submenus: [] },
            { id: 15.5, label: 'Event calendar', url: '#', submenus: [] },
            { id: 15.6, label: 'Notifications & press releases', url: '#', submenus: [] },
            { id: 15.7, label: 'Video recordings', url: '#', submenus: [] },
            { id: 15.8, label: 'Documents & literature', url: '#', submenus: [] },
            { id: 15.9, label: 'Back', url: '#', icon: '../images/back.png', submenus: [] },
        ]
    },
    {
        id: 16, label: 'Medicines & Formulae', url: '/admin', icon: '../images/pill.png', submenus: [
            { id: 16.1, label: 'Repertory', url: '#', submenus: [] },
            { id: 16.2, label: 'Patient-wise medicine consolidation', url: '#', submenus: [] },
            { id: 16.3, label: 'Remedy finder', url: '#', submenus: [] },
            { id: 16.5, label: 'Other medicines', url: '#', submenus: [] },
            { id: 16.6, label: 'Back', url: '#', icon: '../images/back.png', submenus: [] },
        ]
    },
    {
        id: 17, label: 'Knowledge repository', url: '/admin', icon: '../images/book.png', submenus: [
            { id: 17.1, label: 'Documentations', url: '#', submenus: [] },
            { id: 17.2, label: 'Video resources', url: '#', submenus: [] },
            { id: 17.3, label: 'Community', url: '#', submenus: [] },
            { id: 17.5, label: 'Blogs & online articles', url: '#', submenus: [] },
            { id: 17.6, label: 'Ask an expert', url: '#', submenus: [] },
            { id: 17.7, label: 'Back', url: '#', icon: '../images/back.png', submenus: [] },
        ]
    },
    {
        id: 18, label: 'Online help', url: '/admin', icon: '../images/help.png', submenus: [
            { id: 18.1, label: 'User guide', url: '#', submenus: [] },
            { id: 18.2, label: 'Ticket management', url: '#', submenus: [] },
            { id: 18.3, label: 'ChatBot', url: '#', submenus: [] },
            { id: 18.5, label: 'Online chat', url: '#', submenus: [] },
            { id: 18.6, label: 'Webinars', url: '#', submenus: [] },
            { id: 18.7, label: 'Back', url: '#', icon: '../images/back.png', submenus: [] },
        ]
    }
]

export let platConfigData1 = [
    {title: 'Modules', descr: 'Add moudles which are in scope. This will enable those modules', url: 'admin-modules'},
    {title: 'Type master', descr: 'Create types which will classify entities', url: 'type-master'},
    {title: 'Subtype master', descr: 'Create subtypes which will classify entities', url: 'subtype-master'},
    {title: 'Category master', descr: 'Create categories which will classify entities', url: 'cat-master'},
    {title: 'Currency master', descr: 'Define various currencies to be attached various modules', url: 'admin-currency'},
    {title: 'Languages', descr: 'Create categories which will classify entities', url: 'admin-lang'},
]