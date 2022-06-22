const HistoryData = [
  {
    type: "Waste Disposal",
    date: "07 June 2022",
    mainDetails: "13 kg of waste was disposed",
    details: {
      points: 1300,
      pickupDate: "Sunday, 07 June 2022",
      pickupTime: "08:00AM",
      wasteType: {
        organic: {
          weight: 1,
        },
        inorganic: {
          weight: 12,
          weightBreakdown: {
            plastic: 6,
            tin: 5,
            styrofoam: 1,
          },
        },
      },
    },
  },
  {
    type: "Voucher Purchase",
    date: "07 June 2022",
    mainDetails: "50% Discount Coupon at Chatime",
    details: {
      quantity: 1,
      points: 300,
    },
  },
  { 
    type: "Points Exchange",
    date: "07 June 2022",
    details: {
      points: 3000,
    },
  },
  {
    type: "Payment",
    date: "08 June 2022",
    details: {
      status: "pending",
      total: "Rp. 11,000",
      date: "June 20, 2022",
      time: "18:10",
    },
  },
];

export default HistoryData;
