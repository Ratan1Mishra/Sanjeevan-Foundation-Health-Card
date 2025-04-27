const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","css/xpedio.css","favicon.png","images/.DS_Store","images/4957136.jpg","images/access.png","images/admin.png","images/anger.png","images/approval.png","images/att.png","images/att_summ.png","images/back.png","images/back3.jpg","images/backg1.avif","images/bill.png","images/biometric.png","images/book.png","images/building.png","images/cabin.png","images/config.png","images/cov1.jpg","images/cov2.jpg","images/cov3.jpg","images/cov4.jpg","images/cov5.jpg","images/cov6.jpg","images/daily.png","images/data-backup.png","images/data-recovery.png","images/dept.png","images/design.png","images/digital.png","images/doctor.png","images/donate.jpg","images/donation.jpg","images/donationheart.jpg","images/events.png","images/family.jpg","images/family2.webp","images/family3.jpg","images/floor.png","images/fonder.jpg","images/Fundraising.jpg","images/Gpay.png","images/help.png","images/holiday.png","images/home-vid.mp4","images/home-vid1.mp4","images/home.png","images/home1.jpg","images/home2.jpg","images/home2.png","images/home3.jpg","images/home4.jpg","images/home5.jpg","images/home5.png","images/img1.webp","images/img2 copy.avif","images/img2.avif","images/img3.jpg","images/indvi.jpg","images/infra.png","images/inv.png","images/ipd.png","images/jobs.png","images/leaves.png","images/lms.png","images/login-img.jpg","images/login.jpeg","images/logo copy.png","images/logo.png","images/logo1.png","images/logo2.png","images/logox.png","images/oldp.avif","images/opd.jpeg","images/opd.png","images/own1.jpg","images/own2.jpg","images/own3.jpg","images/parking.png","images/patient.png","images/payroll.png","images/paytm.webp","images/pe.png","images/people.png","images/perform.png","images/pill.png","images/policy.png","images/profile.png","images/proposal.png","images/QR.jpeg","images/qual.jpeg","images/README.txt","images/register.png","images/report.png","images/roles.png","images/roster.png","images/saad.png","images/saad1.jpg","images/saad2.jpg","images/saad3.jpg","images/sales.png","images/scm.png","images/separate.png","images/shifts.png","images/slider1.jpg","images/slider2.jpg","images/slider3.jpg","images/slider4.jpg","images/slider5.jpg","images/staff.jpeg","images/staff.png","images/steps-bg.png","images/subscription.png","images/super-admin.png","images/theme1.jpg","images/theme2.jpg","images/ticket.png","images/timesheet.png","images/tools.png","images/travel.png","images/trustee.jpg","images/upi.jpg","images/vacation.png","images/vendors.png","images/Volunteer.jpg","images/ward.png","images/Work1.jpg","images/work2.jpg","images/work3.jpg","images/work4.jpg","images/work5.jpg","images/work6.jpg","images/Yash Photo-small-Dom.jpg"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".jpg":"image/jpeg",".avif":"image/avif",".webp":"image/webp",".mp4":"video/mp4",".jpeg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.cca0a55e.js","app":"_app/immutable/entry/app.ae761077.js","imports":["_app/immutable/entry/start.cca0a55e.js","_app/immutable/chunks/index.30e59bc6.js","_app/immutable/chunks/singletons.ebcce9d8.js","_app/immutable/entry/app.ae761077.js","_app/immutable/chunks/index.30e59bc6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-8c1e0b8a.js')),
			__memo(() => import('./chunks/1-ec1b6faa.js')),
			__memo(() => import('./chunks/2-c680d353.js')),
			__memo(() => import('./chunks/3-2e4d4872.js')),
			__memo(() => import('./chunks/4-7618ec7c.js')),
			__memo(() => import('./chunks/5-dba7d0cb.js')),
			__memo(() => import('./chunks/6-e0b131e9.js')),
			__memo(() => import('./chunks/7-5d9d60ce.js')),
			__memo(() => import('./chunks/8-eac712fc.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contacts",
				pattern: /^\/contacts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/donation",
				pattern: /^\/donation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/events",
				pattern: /^\/events\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/health",
				pattern: /^\/health\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/terms",
				pattern: /^\/terms\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
