export const MenuItems = [
  {
    title: "Service Request Report",
    subMenu: [
      {
        title: "Schedule Report Group By Company",
        path: "/srScheduleReportGroupByCompany"
      },
      {
        title: "Service Request by Company Name",
        path: "/srReport"
      },
      {
        title: "Service Request GTINS",
        path: "/srGetAllServiceRequestGtin"
      },
      {
        title: "Service Request GTINS By SRId",
        path: "/srGetAllServiceRequestGtinBySrId"
      }
    ]
  },
  {
    title: "IVSM Report",
    subMenu: [
      {
        title: "Summary of completed IVSM Life cycle",
        path: "/ivsmGetSummaryOfCompletedIVSMLifeCycle"
      },
      {
        title: "Summary of completed IVSM Life cycle by all departments",
        path: "/ivsmGetSummaryOfCompletedIVSMLifeCycleByAllDepartments"
      }
    ]
  }
];
