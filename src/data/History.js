const History = [
  {
    type: "Waste Disposal",
    date: "07 June 2022",
    details: {
      pickupDate: "Sunday, 07 June 2022",
      pickupTime: "08:00AM",
      pointsEarned: 1300,
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
    details: {
      name: "50% Discount Coupon at Chatime",
      quantity: 1,
    },
  },
  {
    type: "Points Exchange",
    date: "07 June 2022",
    details: {
      pointsExchanged: 3000,
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

export default History;
